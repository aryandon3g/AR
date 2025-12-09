import React, { useState, useEffect } from 'react';
import { getXpData } from '../services/storageService';
import { getRankInfo, getNextRank } from '../services/rankSystem';

interface HomeRankCardProps {
  refreshTrigger?: number;
}

export const HomeRankCard: React.FC<HomeRankCardProps> = ({ refreshTrigger }) => {
  const [rp, setRp] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRankData = async () => {
      try {
        const data = await getXpData();
        setRp(data.totalXp || 0);
      } catch (error) {
        console.error("Error loading rank:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRankData();
  }, [refreshTrigger]);

  const rank = getRankInfo(rp);
  const nextRank = getNextRank(rank.name);

  if (loading) return null;

  // Calculate Progress Percentage
  let progressPercent = 100;
  
  if (nextRank) {
      const totalRange = nextRank.minRP - rank.minRP;
      const currentProgress = rp - rank.minRP;
      progressPercent = Math.max(0, Math.min(100, (currentProgress / totalRange) * 100));
  }

  return (
    <div className="flex items-center gap-3 bg-white/80 dark:bg-black/40 backdrop-blur-md p-2 pr-4 rounded-xl border border-yellow-500/30 shadow-lg cursor-pointer hover:bg-white/90 dark:hover:bg-black/50 transition-all select-none group w-fit">
        
        {/* 1. Rank Icon */}
        <div className="w-12 h-12 filter drop-shadow-[0_0_8px_rgba(255,215,0,0.4)] group-hover:scale-110 transition-transform">
            {rank.icon}
        </div>
        
        {/* 2. Rank Details */}
        <div className="flex flex-col min-w-[100px]">
            <div className="flex justify-between items-baseline">
                <span className="text-[10px] uppercase font-bold text-gray-500 dark:text-gray-400 tracking-widest">
                    {rank.name}
                </span>
                <span className="text-yellow-600 dark:text-yellow-400 font-black text-sm">
                    {rp}
                </span>
            </div>

            {/* 🔥 Mini Progress Bar (Free Fire Style) */}
            <div className="h-1.5 w-full bg-gray-300 dark:bg-gray-700 rounded-full mt-1 overflow-hidden">
                <div 
                    className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full shadow-[0_0_5px_rgba(250,204,21,0.6)]"
                    style={{ width: `${progressPercent}%` }}
                ></div>
            </div>
            
            {/* RP needed for next rank */}
            {nextRank ? (
                <span className="text-[9px] text-gray-400 text-right mt-0.5">
                    {nextRank.minRP} max
                </span>
            ) : (
                <span className="text-[9px] text-gray-400 text-right mt-0.5">MAX</span>
            )}
        </div>
    </div>
  );
};