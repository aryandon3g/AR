import React, { useState, useMemo } from 'react';
import type { Language, ProgressDataPoint } from '../types';
import { commonLabels, summaryScreenLabels } from '../services/labels';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  ReferenceLine
} from 'recharts';

interface ProgressVisualizationProps {
  language: Language;
  progressData: ProgressDataPoint[];
}

// Colors for the charts
const COLORS = {
  primary: '#0ea5e9', // Sky blue
  success: '#22c55e', // Green
  warning: '#f59e0b', // Amber
  danger: '#ef4444',  // Red
  purple: '#8b5cf6',  // Violet
};

export const ProgressVisualization: React.FC<ProgressVisualizationProps> = ({ language, progressData }) => {
  const l = commonLabels[language];
  const s_l = summaryScreenLabels['en']; // Fallback to en for specific labels if needed
  
  // State to toggle between Trend View (Line) and Topic View (Bar)
  const [viewMode, setViewMode] = useState<'trend' | 'topics'>('trend');
  const isDarkMode = document.documentElement.classList.contains('dark');

  // --- 1. Calculate Summary Statistics ---
  const stats = useMemo(() => {
    if (progressData.length === 0) {
      return { totalQuizzes: 0, avgAccuracy: 0, totalXP: 0, bestScore: 0 };
    }

    const totalQuizzes = progressData.length;
    const totalXP = progressData.reduce((acc, curr) => acc + curr.xpEarned, 0);
    const avgAccuracy = progressData.reduce((acc, curr) => acc + curr.accuracy, 0) / totalQuizzes;
    const bestScore = Math.max(...progressData.map(p => p.accuracy));

    return {
      totalQuizzes,
      avgAccuracy: Math.round(avgAccuracy),
      totalXP,
      bestScore: Math.round(bestScore),
    };
  }, [progressData]);

  // --- 2. Prepare Trend Data (Last 10 Quizzes) ---
  const trendData = useMemo(() => {
    // Take the last 10 items to avoid overcrowding the chart
    return progressData.slice(-10).map((d, index) => ({
      name: `Q${index + 1}`, // Q1, Q2, etc.
      accuracy: d.accuracy,
      xp: d.xpEarned,
      fullDate: new Date(d.date).toLocaleDateString(),
    }));
  }, [progressData]);

  // --- 3. Prepare Topic Performance Data ---
  const topicData = useMemo(() => {
    const topicMap: { [key: string]: { totalAcc: number; count: number } } = {};

    progressData.forEach((d) => {
      const topic = d.topic || 'General';
      if (!topicMap[topic]) {
        topicMap[topic] = { totalAcc: 0, count: 0 };
      }
      topicMap[topic].totalAcc += d.accuracy;
      topicMap[topic].count += 1;
    });

    return Object.entries(topicMap)
      .map(([name, data]) => ({
        name: name.length > 10 ? name.substring(0, 10) + '...' : name, // Truncate long names
        avgAccuracy: Math.round(data.totalAcc / data.count),
        count: data.count
      }))
      .sort((a, b) => b.avgAccuracy - a.avgAccuracy); // Sort best topics first
  }, [progressData]);

  // --- Helper: Custom Tooltip for Charts ---
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
          <p className="font-bold text-gray-700 dark:text-gray-200">{label}</p>
          <p className="text-primary-600 dark:text-primary-400">
            {viewMode === 'trend' ? `${s_l.accuracy}: ${payload[0].value}%` : `Avg Score: ${payload[0].value}%`}
          </p>
          {viewMode === 'trend' && (
             <p className="text-xs text-gray-500 mt-1">{payload[0].payload.fullDate}</p>
          )}
        </div>
      );
    }
    return null;
  };

  // --- Empty State ---
  if (progressData.length === 0) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
          <span className="text-4xl">📊</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{l.noHistory}</h3>
        <p className="text-gray-500 dark:text-gray-400">Complete your first quiz to see analytics here!</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full p-4 pt-20 flex flex-col overflow-y-auto custom-scrollbar relative bg-gray-50 dark:bg-[#0f172a]">
      {/* Background Decorative Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
         <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
         <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
           <span>📈</span> {commonLabels['en'].myProgress}
        </h2>

        {/* 1. Summary Cards (Grid) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard 
            label={l.quizzesCompleted} 
            value={stats.totalQuizzes} 
            icon="📝" 
            color="bg-blue-500" 
          />
          <StatCard 
            label="Avg. Accuracy" 
            value={`${stats.avgAccuracy}%`} 
            icon="🎯" 
            color={stats.avgAccuracy >= 70 ? 'bg-green-500' : stats.avgAccuracy >= 50 ? 'bg-yellow-500' : 'bg-red-500'} 
          />
          <StatCard 
            label={commonLabels['en'].xp} 
            value={stats.totalXP} 
            icon="⚡" 
            color="bg-purple-500" 
          />
          <StatCard 
            label="Best Score" 
            value={`${stats.bestScore}%`} 
            icon="🏆" 
            color="bg-orange-500" 
          />
        </div>

        {/* 2. Main Chart Section */}
        <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-6">
          <div className="flex flex-row justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              {viewMode === 'trend' ? 'Recent Performance Trend' : 'Topic Strength Analysis'}
            </h3>
            
            {/* Toggle Switch */}
            <div className="bg-gray-100 dark:bg-gray-700 p-1 rounded-lg flex text-sm">
              <button
                onClick={() => setViewMode('trend')}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  viewMode === 'trend' 
                  ? 'bg-white dark:bg-gray-600 shadow-sm text-primary-600 dark:text-white font-medium' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'
                }`}
              >
                Trend
              </button>
              <button
                onClick={() => setViewMode('topics')}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  viewMode === 'topics' 
                  ? 'bg-white dark:bg-gray-600 shadow-sm text-primary-600 dark:text-white font-medium' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'
                }`}
              >
                Topics
              </button>
            </div>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              {viewMode === 'trend' ? (
                // --- Area Chart for Trends ---
                <AreaChart data={trendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorAccuracy" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={COLORS.primary} stopOpacity={0.3}/>
                      <stop offset="95%" stopColor={COLORS.primary} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDarkMode ? '#374151' : '#e5e7eb'} />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: isDarkMode ? '#9ca3af' : '#6b7280', fontSize: 12 }} 
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: isDarkMode ? '#9ca3af' : '#6b7280', fontSize: 12 }} 
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ stroke: COLORS.primary, strokeWidth: 1, strokeDasharray: '4 4' }} />
                  <ReferenceLine y={70} stroke={COLORS.success} strokeDasharray="3 3" strokeOpacity={0.5} />
                  <Area 
                    type="monotone" 
                    dataKey="accuracy" 
                    stroke={COLORS.primary} 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorAccuracy)" 
                    activeDot={{ r: 6, strokeWidth: 0 }}
                  />
                </AreaChart>
              ) : (
                // --- Bar Chart for Topics ---
                <BarChart data={topicData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke={isDarkMode ? '#374151' : '#e5e7eb'} />
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    width={80} 
                    tick={{ fill: isDarkMode ? '#9ca3af' : '#6b7280', fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}} />
                  <Bar dataKey="avgAccuracy" radius={[0, 4, 4, 0]} barSize={20}>
                    {topicData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.avgAccuracy >= 80 ? COLORS.success : entry.avgAccuracy >= 50 ? COLORS.warning : COLORS.danger} 
                      />
                    ))}
                  </Bar>
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* 3. Recent Activity List (Mini) */}
        <div className="space-y-3">
             <h3 className="text-md font-semibold text-gray-600 dark:text-gray-300 ml-1">Recent History</h3>
             {progressData.slice().reverse().slice(0, 5).map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className={`w-2 h-10 rounded-full ${item.accuracy >= 70 ? 'bg-green-500' : item.accuracy >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                        <div>
                            <p className="text-sm font-medium text-gray-800 dark:text-white">{item.topic || 'General Quiz'}</p>
                            <p className="text-xs text-gray-500">{new Date(item.date).toLocaleDateString()}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="block text-sm font-bold text-gray-800 dark:text-white">{Math.round(item.accuracy)}%</span>
                        <span className="text-xs text-primary-500">+{item.xpEarned} XP</span>
                    </div>
                </div>
             ))}
        </div>

        <div className="h-10"></div>
      </div>
    </div>
  );
};

// --- Helper Component for Stats ---
const StatCard = ({ label, value, icon, color }: { label: string, value: string | number, icon: string, color: string }) => (
  <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center text-center relative overflow-hidden group">
    <div className={`absolute top-0 left-0 w-full h-1 ${color}`}></div>
    <span className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-200">{icon}</span>
    <span className="text-lg font-bold text-gray-800 dark:text-white">{value}</span>
    <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">{label}</span>
  </div>
);