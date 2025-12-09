import React from 'react';

// ✅ Updated: Added 'Master' to the types
export type RankTier = 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond' | 'Heroic' | 'Master' | 'Grandmaster';

export interface RankInfo {
  name: RankTier;
  minRP: number;
  maxRP: number;
  color: string;
  icon: React.ReactNode; 
}

// --- SVG COMPONENTS ---

// 1. BRONZE (1000 - 1300)
const BronzeSVG = () => (
  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-md">
    <defs>
      <linearGradient id="bronzeGrad" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0%" stopColor="#CD7F32" />
        <stop offset="100%" stopColor="#8B4513" />
      </linearGradient>
    </defs>
    <path d="M20 20 H80 L90 45 L50 90 L10 45 L20 20Z" fill="url(#bronzeGrad)" stroke="#5A2D0C" strokeWidth="2" />
    <path d="M35 45 L50 60 L65 45" stroke="#5A2D0C" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// 2. SILVER (1301 - 1600)
const SilverSVG = () => (
  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-md">
    <defs>
      <linearGradient id="silverGrad" x1="0" y1="0" x2="0" y2="100">
        <stop offset="0%" stopColor="#E0E0E0" />
        <stop offset="100%" stopColor="#757575" />
      </linearGradient>
    </defs>
    <path d="M15 15 H85 L95 45 L50 95 L5 45 L15 15Z" fill="url(#silverGrad)" stroke="#424242" strokeWidth="2" />
    <path d="M35 40 L50 55 L65 40" stroke="#424242" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M35 55 L50 70 L65 55" stroke="#424242" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// 3. GOLD (1601 - 2100)
const GoldSVG = () => (
  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-lg">
    <defs>
      <linearGradient id="goldGrad" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="50%" stopColor="#FDB931" />
        <stop offset="100%" stopColor="#B8860B" />
      </linearGradient>
    </defs>
    <path d="M15 15 H85 L95 45 L50 95 L5 45 L15 15Z" fill="url(#goldGrad)" stroke="#8B6914" strokeWidth="2" />
    <path d="M35 35 L50 50 L65 35" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <path d="M35 50 L50 65 L65 50" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <path d="M35 65 L50 80 L65 65" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round"/>
  </svg>
);

// 4. PLATINUM (2101 - 2600)
const PlatinumSVG = () => (
  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-lg">
    <defs>
      <linearGradient id="platGrad" x1="50" y1="0" x2="50" y2="100">
        <stop offset="0%" stopColor="#E0FFFF" />
        <stop offset="100%" stopColor="#00CED1" />
      </linearGradient>
    </defs>
    <path d="M10 10 L30 5 L70 5 L90 10 L90 50 L50 95 L10 50 Z" fill="url(#platGrad)" stroke="#008B8B" strokeWidth="3" />
    <path d="M30 30 L50 15 L70 30 L70 60 L50 80 L30 60 Z" fill="white" fillOpacity="0.4" stroke="#008B8B" strokeWidth="1"/>
    <path d="M10 20 L25 35 M90 20 L75 35" stroke="#008B8B" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

// 5. DIAMOND (2601 - 3200)
const DiamondSVG = () => (
  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-xl">
    <defs>
      <linearGradient id="diaGrad" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0%" stopColor="#E0B0FF" />
        <stop offset="50%" stopColor="#9932CC" />
        <stop offset="100%" stopColor="#4B0082" />
      </linearGradient>
    </defs>
    <path d="M50 5 L85 35 L50 95 L15 35 Z" fill="url(#diaGrad)" stroke="#FFF" strokeWidth="2" />
    <path d="M15 35 L50 55 L85 35 M50 5 L50 55 M50 55 L50 95" stroke="#E6E6FA" strokeWidth="1" opacity="0.6"/>
    <path d="M15 35 L5 25 M85 35 L95 25" stroke="#9932CC" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

// 6. HEROIC (3201 - 3600)
const HeroicSVG = () => (
  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-2xl">
    <defs>
      <linearGradient id="heroicRed" x1="50" y1="0" x2="50" y2="100">
        <stop offset="0%" stopColor="#FF4500" />
        <stop offset="100%" stopColor="#8B0000" />
      </linearGradient>
      <linearGradient id="heroicGold" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#B8860B" />
      </linearGradient>
    </defs>
    <path d="M20 10 L80 10 L90 40 L50 90 L10 40 Z" fill="#2d0505" stroke="#FF4500" strokeWidth="2" />
    <path d="M50 20 L20 40 L30 65 L50 80 L70 65 L80 40 Z" fill="url(#heroicRed)" />
    <path d="M50 20 L35 35 H65 Z" fill="url(#heroicGold)" />
    <path d="M35 50 L50 65 L65 50 L50 35 Z" fill="#FFD700" />
  </svg>
);

// 7. MASTER (3700 - 4100+) - 🔥 NEW RANK
const MasterSVG = () => (
  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-[0_0_15px_rgba(255,0,255,0.5)]">
    <defs>
      <linearGradient id="masterGrad" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0%" stopColor="#FF00FF" />
        <stop offset="50%" stopColor="#9400D3" />
        <stop offset="100%" stopColor="#4B0082" />
      </linearGradient>
    </defs>
    {/* Sharp Tech Badge */}
    <path d="M50 5 L95 25 L85 85 L50 95 L15 85 L5 25 Z" fill="url(#masterGrad)" stroke="#FF69B4" strokeWidth="2"/>
    <path d="M50 15 L80 30 L75 75 L50 85 L25 75 L20 30 Z" fill="black" fillOpacity="0.3"/>
    <path d="M50 25 L25 50 H75 Z" fill="#FFD700" />
    <path d="M35 60 H65 L50 80 Z" fill="white" />
  </svg>
);

// 8. GRANDMASTER (4200+)
const GrandmasterSVG = () => (
  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-[0_0_20px_rgba(255,215,0,0.6)]">
    <defs>
      <linearGradient id="gmBase" x1="50" y1="0" x2="50" y2="100">
        <stop offset="0%" stopColor="#FFFACD" />
        <stop offset="100%" stopColor="#FFD700" />
      </linearGradient>
      <linearGradient id="gmHex" x1="0" y1="0" x2="0" y2="100">
        <stop offset="0%" stopColor="#FF0000" />
        <stop offset="100%" stopColor="#800000" />
      </linearGradient>
    </defs>
    <path d="M50 5 L90 25 V75 L50 95 L10 75 V25 Z" fill="none" stroke="url(#gmBase)" strokeWidth="3" />
    <path d="M50 10 L85 28 V72 L50 90 L15 72 V28 Z" fill="url(#gmHex)" opacity="0.8"/>
    <path d="M30 40 L20 20 L40 35 L50 15 L60 35 L80 20 L70 40 H30Z" fill="url(#gmBase)" stroke="#B8860B" strokeWidth="1"/>
    <rect x="35" y="60" width="30" height="20" rx="2" fill="black" stroke="#FFD700" strokeWidth="2"/>
    <path d="M40 70 L45 75 L60 65" fill="none" stroke="white" strokeWidth="2" />
    <circle cx="50" cy="50" r="5" fill="white" className="animate-pulse" />
    <circle cx="20" cy="50" r="3" fill="#FFD700" />
    <circle cx="80" cy="50" r="3" fill="#FFD700" />
  </svg>
);

// --- CONFIGURATION BASED ON YOUR CHART ---

export const RANK_SYSTEM: RankInfo[] = [
  // 0-1300 covers Bronze (all tiers)
  { name: 'Bronze', minRP: 0, maxRP: 1300, color: '#CD7F32', icon: <BronzeSVG /> },
  
  // 1301 - 1600 Silver
  { name: 'Silver', minRP: 1301, maxRP: 1600, color: '#C0C0c0', icon: <SilverSVG /> },
  
  // 1601 - 2100 Gold
  { name: 'Gold', minRP: 1601, maxRP: 2100, color: '#FFD700', icon: <GoldSVG /> },
  
  // 2101 - 2600 Platinum
  { name: 'Platinum', minRP: 2101, maxRP: 2600, color: '#00CED1', icon: <PlatinumSVG /> },
  
  // 2601 - 3200 Diamond
  { name: 'Diamond', minRP: 2601, maxRP: 3200, color: '#B9F2FF', icon: <DiamondSVG /> },
  
  // 3201 - 3699 Heroic (Approximated to meet Master start)
  { name: 'Heroic', minRP: 3201, maxRP: 3699, color: '#FF4500', icon: <HeroicSVG /> },
  
  // 3700 - 4199 Master (New Tier)
  { name: 'Master', minRP: 3700, maxRP: 4199, color: '#FF00FF', icon: <MasterSVG /> },
  
  // 4200+ Grandmaster (Covers Entrant, Challenger, Legend)
  { name: 'Grandmaster', minRP: 4200, maxRP: 999999, color: '#FF0000', icon: <GrandmasterSVG /> },
];

export const getRankInfo = (totalRP: number) => {
  return RANK_SYSTEM.find(r => totalRP >= r.minRP && totalRP <= r.maxRP) || RANK_SYSTEM[0];
};

export const getNextRank = (currentRankName: RankTier) => {
  const index = RANK_SYSTEM.findIndex(r => r.name === currentRankName);
  return RANK_SYSTEM[index + 1] || null;
};