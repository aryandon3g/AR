import React, { memo } from 'react';
import { ThreeDotsVerticalIcon, BackArrowIcon } from './icons';

interface HeaderProps {
  onSettingsClick: () => void;
  showBackButton?: boolean;
  onBackClick?: () => void;
}

export const Header: React.FC<HeaderProps> = memo(({ 
    onSettingsClick, 
    showBackButton = false, 
    onBackClick 
}) => {
  return (
    // FIX 1: 'bg-transparent' kar diya taaki color exactly match kare.
    // FIX 2: 'backdrop-blur' hata diya (agar aapko glass effect nahi chahiye).
    // FIX 3: 'sticky' rakha hai taaki text iske peeche na chupe.
    <header className="sticky top-0 left-0 right-0 p-4 flex justify-between items-center z-[50] bg-transparent transition-all duration-300">
      
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