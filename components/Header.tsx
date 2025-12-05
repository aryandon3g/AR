import React from 'react';
import { ThreeDotsVerticalIcon, BackArrowIcon } from './icons';

interface HeaderProps {
  onSettingsClick: () => void;
  showBackButton?: boolean;
  onBackClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSettingsClick, showBackButton, onBackClick }) => {
  return (
    <header className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10">
      <div className="w-10 flex justify-start">
        {showBackButton ? (
          <button
            onClick={onBackClick}
            className="p-2 -ml-2 rounded-full hover:bg-white/30 dark:hover:bg-black/30 transition-colors"
            aria-label="Go back"
          >
            <BackArrowIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          </button>
        ) : <div className="w-10 h-10"></div>}
      </div>
      
      <div className="w-10 flex justify-end">
        <button
          onClick={onSettingsClick}
          className="p-2 -mr-2 text-gray-800 dark:text-gray-200 transition-transform hover:scale-110"
          aria-label="Open settings"
        >
          <ThreeDotsVerticalIcon className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};