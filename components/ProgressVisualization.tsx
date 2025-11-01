

import React, { useState } from 'react';
import type { Language, ProgressDataPoint } from '../types';
import { commonLabels, summaryScreenLabels } from '../services/labels';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ProgressVisualizationProps {
    language: Language;
    progressData: ProgressDataPoint[];
}

const COLORS = ['#0ea5e9', '#f97316', '#22c55e', '#f472b6', '#a78bfa', '#facc15'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  if (percent * 100 < 5) return null; // Hide small labels to prevent clutter

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className="font-bold text-xs">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const ProgressVisualization: React.FC<ProgressVisualizationProps> = ({ language, progressData }) => {
    const l = commonLabels[language];
    const s_l = summaryScreenLabels['en'];
    const [filter, setFilter] = useState<'accuracy' | 'avgTime' | 'xp' | 'count'>('accuracy');
    const isDarkMode = document.documentElement.classList.contains('dark');

    const getFilterLabel = (key: 'accuracy' | 'avgTime' | 'xp' | 'count') => {
        switch (key) {
            case 'accuracy': return s_l.accuracy;
            case 'avgTime': return s_l.avgTime;
            case 'xp': return commonLabels['en'].xp;
            case 'count': return l.quizzesCompleted;
            default: return '';
        }
    };

    const getChartData = () => {
        switch (filter) {
            case 'accuracy':
                const accuracyBuckets = {
                    'Excellent (> 90%)': 0,
                    'Good (70-90%)': 0,
                    'Average (50-69%)': 0,
                    'Needs Improvement (< 50%)': 0,
                };
                progressData.forEach(d => {
                    if (d.accuracy > 90) accuracyBuckets['Excellent (> 90%)']++;
                    else if (d.accuracy >= 70) accuracyBuckets['Good (70-90%)']++;
                    else if (d.accuracy >= 50) accuracyBuckets['Average (50-69%)']++;
                    else accuracyBuckets['Needs Improvement (< 50%)']++;
                });
                return Object.entries(accuracyBuckets).map(([name, value]) => ({ name, value })).filter(d => d.value > 0);
            
            case 'avgTime':
                const timeBuckets = {
                    'Fast (< 15s)': 0,
                    'Medium (15-30s)': 0,
                    'Slow (> 30s)': 0,
                };
                progressData.forEach(d => {
                    if (d.avgTimePerQuestion < 15) timeBuckets['Fast (< 15s)']++;
                    else if (d.avgTimePerQuestion <= 30) timeBuckets['Medium (15-30s)']++;
                    else timeBuckets['Slow (> 30s)']++;
                });
                return Object.entries(timeBuckets).map(([name, value]) => ({ name, value })).filter(d => d.value > 0);
            
            case 'xp':
                // FIX: Add type assertion to the initial value of the reduce function to resolve arithmetic operation error.
                const xpByTopic = progressData.reduce((acc, d) => {
                    const topicName = d.topic || 'Untitled';
                    acc[topicName] = (acc[topicName] || 0) + d.xpEarned;
                    return acc;
                }, {} as Record<string, number>);
                return Object.entries(xpByTopic).map(([name, value]) => ({ name, value })).sort((a,b) => b.value - a.value);

            case 'count':
                // FIX: Add type assertion to the initial value of the reduce function to resolve arithmetic operation error.
                const countByTopic = progressData.reduce((acc, d) => {
                    const topicName = d.topic || 'Untitled';
                    acc[topicName] = (acc[topicName] || 0) + 1;
                    return acc;
                }, {} as Record<string, number>);
                return Object.entries(countByTopic).map(([name, value]) => ({ name, value })).sort((a,b) => b.value - a.value);

            default:
                return [];
        }
    };

    const chartData = getChartData();

    return (
        <div className="w-full h-full p-4 pt-20 flex flex-col overflow-y-auto custom-scrollbar relative">
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-300 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-yellow-300 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-green-300 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
            </div>

            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white relative z-10">
                {commonLabels['en'].myProgress}
            </h2>

            <div className="flex justify-center mb-6 relative z-10">
                <div className="inline-flex rounded-md shadow-sm bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10">
                    <button
                        onClick={() => setFilter('accuracy')}
                        className={`px-4 py-2 text-sm font-medium rounded-l-md transition-colors ${filter === 'accuracy' ? 'bg-primary-600 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-black/30'}`}
                        aria-pressed={filter === 'accuracy'}
                    >
                        {s_l.accuracy}
                    </button>
                    <button
                        onClick={() => setFilter('avgTime')}
                        className={`px-4 py-2 text-sm font-medium transition-colors ${filter === 'avgTime' ? 'bg-primary-600 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-black/30'}`}
                        aria-pressed={filter === 'avgTime'}
                    >
                        {s_l.avgTime}
                    </button>
                    <button
                        onClick={() => setFilter('xp')}
                        className={`px-4 py-2 text-sm font-medium transition-colors ${filter === 'xp' ? 'bg-primary-600 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-black/30'}`}
                        aria-pressed={filter === 'xp'}
                    >
                        {commonLabels['en'].xp}
                    </button>
                    <button
                        onClick={() => setFilter('count')}
                        className={`px-4 py-2 text-sm font-medium rounded-r-md transition-colors ${filter === 'count' ? 'bg-primary-600 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-black/30'}`}
                        aria-pressed={filter === 'count'}
                    >
                        {l.quizzesCompleted}
                    </button>
                </div>
            </div>

            {progressData.length === 0 ? (
                <div className="text-center py-10 relative z-10">
                    <p className="text-gray-600 dark:text-gray-300 text-lg">{l.noHistory}</p>
                </div>
            ) : (
                <div className="w-full bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl shadow-xl p-4 overflow-x-auto relative z-10">
                    <h3 className="text-xl font-semibold mb-4 text-center text-gray-800 dark:text-white">Distribution by {getFilterLabel(filter)}</h3>
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={chartData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                    nameKey="name"
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.7)', border: 'none', borderRadius: '8px' }} itemStyle={{ color: '#fff' }} />
                                <Legend layout="horizontal" verticalAlign="bottom" align="center" wrapperStyle={{ color: isDarkMode ? '#e0f2fe' : '#374151', fontSize: '12px' }}/>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            )}
            <div className="flex-grow min-h-[2rem]"></div>
        </div>
    );
};