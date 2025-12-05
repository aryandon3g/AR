import React, { memo } from 'react';
import { ThreeDotsVerticalIcon, BackArrowIcon } from './icons';

interface HeaderProps {
  onSettingsClick: () => void;
  showBackButton?: boolean;
  onBackClick?: () => void;
  floating?: boolean; // 'transparent' ki jagah 'floating' shabd use karte hain clarity ke liye
}

export const Header: React.FC<HeaderProps> = memo(({ 
    onSettingsClick, 
    showBackButton = false, 
    onBackClick,
    floating = false // Default: false (Matlab apni jagah lega, par transparent rahega)
}) => {
  
  // Logic:
  // Floating (Home Screen): Absolute (Hawa me) + Z-index high
  // Not Floating (Quiz Screen): Relative (Jagah lega) + Transparent (Color match karega)
  const positionClasses = floating
    ? "absolute top-0 left-0 right-0 z-[50]" 
    : "relative w-full z-[50]";

  return (
    // 'bg-transparent' humesha rahega taaki koi 'patti' na dikhe
    <header className={`${positionClasses} p-4 flex justify-between items-center bg-transparent transition-all duration-300`}>
      
      <div className="w-12 flex justify-start">
        {showBackButton && onBackClick ? (
          <button
            onClick={onBackClick}
            className="p-2 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 active:scale-90 transition-transform duration-200 ease-out touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            aria-label="Go back"
            style={{ willChange: 'transform' }}
          >
            <BackArrowIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          </button>
        ) : (
          <div className="w-6 h-6" aria-hidden="true" />
        )}
      </div>
      
      <div className="flex-1"></div>

      <div className="w-12 flex justify-end">
        <button
          onClick={onSettingsClick}
          className="p-2 -mr-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 active:scale-90 transition-transform duration-200 ease-out touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
          aria-label="Open settings"
          style={{ willChange: 'transform' }}
        >
          <ThreeDotsVerticalIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        </button>
      </div>
    </header>
  );
});

Header.displayName = 'Header';