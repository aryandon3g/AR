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

const COLORS = {
  primary: '#0ea5e9',
  success: '#22c55e',
  warning: '#f59e0b',
  danger: '#ef4444',
  purple: '#8b5cf6',
};

export const ProgressVisualization: React.FC<ProgressVisualizationProps> = ({ language, progressData }) => {
  const l = commonLabels[language];
  const s_l = summaryScreenLabels['en'];
  const [viewMode, setViewMode] = useState<'trend' | 'topics'>('trend');
  const isDarkMode = document.documentElement.classList.contains('dark');

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

  const trendData = useMemo(() => {
    return progressData.slice(-10).map((d, index) => ({
      name: `Q${index + 1}`,
      accuracy: d.accuracy,
      xp: d.xpEarned,
      fullDate: new Date(d.date).toLocaleDateString(),
    }));
  }, [progressData]);

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
        name: name.length > 10 ? name.substring(0, 10) + '...' : name,
        avgAccuracy: Math.round(data.totalAcc / data.count),
        count: data.count
      }))
      .sort((a, b) => b.avgAccuracy - a.avgAccuracy);
  }, [progressData]);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-2 border border-gray-200 dark:border-gray-700 rounded shadow-lg text-xs md:text-sm z-50">
          <p className="font-bold text-gray-700 dark:text-gray-200">{label}</p>
          <p className="text-primary-600 dark:text-primary-400">
            {viewMode === 'trend' ? `${s_l.accuracy}: ${payload[0].value}%` : `Avg: ${payload[0].value}%`}
          </p>
        </div>
      );
    }
    return null;
  };

  // --- Main Layout Fix: fixed inset-0 ensures full screen, overflow-y-auto handles scrolling ---
  return (
    <div className="fixed inset-0 w-full h-[100dvh] bg-gray-50 dark:bg-[#0f172a] overflow-hidden flex flex-col">
      
      {/* Background Blobs (Fixed position so they don't scroll) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl opacity-50"></div>
         <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Scrollable Container */}
      {/* pt-20 handles top spacing for headers, pb-32 ensures bottom content isn't hidden behind mobile nav bars */}
      <div className="flex-1 w-full overflow-y-auto custom-scrollbar p-4 pt-20 pb-32 relative z-10">
        
        {progressData.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">📊</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{l.noHistory}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Play a quiz to see data!</p>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto w-full space-y-6">
            
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
               <span>📈</span> {commonLabels['en'].myProgress}
            </h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <StatCard label={l.quizzesCompleted} value={stats.totalQuizzes} icon="📝" color="bg-blue-500" />
              <StatCard label="Avg. Accuracy" value={`${stats.avgAccuracy}%`} icon="🎯" color={stats.avgAccuracy >= 70 ? 'bg-green-500' : stats.avgAccuracy >= 50 ? 'bg-yellow-500' : 'bg-red-500'} />
              <StatCard label={commonLabels['en'].xp} value={stats.totalXP} icon="⚡" color="bg-purple-500" />
              <StatCard label="Best Score" value={`${stats.bestScore}%`} icon="🏆" color="bg-orange-500" />
            </div>

            {/* Chart Section */}
            <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-4 md:p-6">
              <div className="flex flex-row justify-between items-center mb-4">
                <h3 className="text-sm md:text-lg font-semibold text-gray-800 dark:text-white truncate pr-2">
                  {viewMode === 'trend' ? 'Performance Trend' : 'Topic Analysis'}
                </h3>
                
                {/* Toggle Buttons */}
                <div className="bg-gray-100 dark:bg-gray-700 p-1 rounded-lg flex text-xs md:text-sm shrink-0">
                  <button
                    onClick={() => setViewMode('trend')}
                    className={`px-2 py-1 md:px-3 md:py-1.5 rounded-md transition-all ${viewMode === 'trend' ? 'bg-white dark:bg-gray-600 shadow text-primary-600 dark:text-white font-medium' : 'text-gray-500 dark:text-gray-400'}`}
                  >
                    Trend
                  </button>
                  <button
                    onClick={() => setViewMode('topics')}
                    className={`px-2 py-1 md:px-3 md:py-1.5 rounded-md transition-all ${viewMode === 'topics' ? 'bg-white dark:bg-gray-600 shadow text-primary-600 dark:text-white font-medium' : 'text-gray-500 dark:text-gray-400'}`}
                  >
                    Topics
                  </button>
                </div>
              </div>

              <div className="h-60 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  {viewMode === 'trend' ? (
                    <AreaChart data={trendData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorAccuracy" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={COLORS.primary} stopOpacity={0.3}/>
                          <stop offset="95%" stopColor={COLORS.primary} stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDarkMode ? '#374151' : '#e5e7eb'} />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: isDarkMode ? '#9ca3af' : '#6b7280', fontSize: 10 }} dy={10} interval="preserveStartEnd" />
                      <YAxis axisLine={false} tickLine={false} tick={{ fill: isDarkMode ? '#9ca3af' : '#6b7280', fontSize: 10 }} />
                      <Tooltip content={<CustomTooltip />} cursor={{ stroke: COLORS.primary, strokeWidth: 1 }} />
                      <Area type="monotone" dataKey="accuracy" stroke={COLORS.primary} strokeWidth={2} fill="url(#colorAccuracy)" />
                    </AreaChart>
                  ) : (
                    <BarChart data={topicData} layout="vertical" margin={{ top: 0, right: 10, left: 10, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke={isDarkMode ? '#374151' : '#e5e7eb'} />
                      <XAxis type="number" hide />
                      <YAxis dataKey="name" type="category" width={70} tick={{ fill: isDarkMode ? '#9ca3af' : '#6b7280', fontSize: 10 }} axisLine={false} tickLine={false} />
                      <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}} />
                      <Bar dataKey="avgAccuracy" radius={[0, 4, 4, 0]} barSize={16}>
                        {topicData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.avgAccuracy >= 80 ? COLORS.success : entry.avgAccuracy >= 50 ? COLORS.warning : COLORS.danger} />
                        ))}
                      </Bar>
                    </BarChart>
                  )}
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Recent History List */}
            <div className="space-y-3 pb-8">
                 <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 ml-1">Recent Activity</h3>
                 {progressData.slice().reverse().slice(0, 10).map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className={`w-1.5 h-8 rounded-full ${item.accuracy >= 70 ? 'bg-green-500' : item.accuracy >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                            <div className="overflow-hidden">
                                <p className="text-sm font-medium text-gray-800 dark:text-white truncate max-w-[150px]">{item.topic || 'Quiz'}</p>
                                <p className="text-[10px] text-gray-500">{new Date(item.date).toLocaleDateString()}</p>
                            </div>
                        </div>
                        <div className="text-right whitespace-nowrap">
                            <span className="block text-sm font-bold text-gray-800 dark:text-white">{Math.round(item.accuracy)}%</span>
                            <span className="text-[10px] text-primary-500">+{item.xpEarned} XP</span>
                        </div>
                    </div>
                 ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const StatCard = ({ label, value, icon, color }: { label: string, value: string | number, icon: string, color: string }) => (
  <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center text-center relative overflow-hidden">
    <div className={`absolute top-0 left-0 w-full h-1 ${color}`}></div>
    <span className="text-xl md:text-2xl mb-1">{icon}</span>
    <span className="text-base md:text-lg font-bold text-gray-800 dark:text-white">{value}</span>
    <span className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">{label}</span>
  </div>
);