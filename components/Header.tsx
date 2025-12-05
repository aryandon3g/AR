import React, { memo } from 'react';
import { ThreeDotsVerticalIcon, BackArrowIcon } from './icons';

interface HeaderProps {
  onSettingsClick: () => void;
  showBackButton?: boolean;
  onBackClick?: () => void;
}

// 1. Memoization: Prevents unnecessary re-renders
export const Header: React.FC<HeaderProps> = memo(({ 
    onSettingsClick, 
    showBackButton = false, // Default value fix
    onBackClick 
}) => {
  return (
    // 2. Glassmorphism & Z-Index Safety
    <header className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-[50] backdrop-blur-md bg-transparent transition-all duration-300">
      
      {/* Left Section (Back Button or Spacer) */}
      <div className="w-12 flex justify-start">
        {showBackButton && onBackClick ? (
          <button
            onClick={onBackClick}
            // 3. High FPS Interaction: Active Scale & GPU Transforms
            className="p-2 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 active:scale-90 transition-transform duration-200 ease-out touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            aria-label="Go back"
            style={{ willChange: 'transform' }} // GPU Hint
          >
            <BackArrowIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          </button>
        ) : (
          // Empty spacer to maintain layout symmetry
          <div className="w-6 h-6" aria-hidden="true" />
        )}
      </div>
      
      {/* Center Section (Optional Title can go here later) */}
      <div className="flex-1"></div>

      {/* Right Section (Settings) */}
      <div className="w-12 flex justify-end">
        <button
          onClick={onSettingsClick}
          // 4. Consistent Animation Style
          className="p-2 -mr-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 active:scale-90 transition-transform duration-200 ease-out touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
          aria-label="Open settings"
          style={{ willChange: 'transform' }} // GPU Hint
        >
          <ThreeDotsVerticalIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        </button>
      </div>
    </header>
  );
});

// Debugging Display Name
Header.displayName = 'Header';