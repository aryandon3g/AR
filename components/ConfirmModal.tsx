import React, { useEffect, useState, memo } from 'react';
import { createPortal } from 'react-dom'; // 1. Portal Import
import type { Language } from '../types';
import { confirmModalLabels as labels, commonLabels } from '../services/labels';

interface ConfirmModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  language: Language;
}

// 2. Memoization for Performance
export const ConfirmModal: React.FC<ConfirmModalProps> = memo(({ isOpen, onConfirm, onCancel, language }) => {
  const [isMounted, setIsMounted] = useState(false);

  // 3. Client-side check for Portal (Next.js/SSR safety)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 4. Close on 'Escape' key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOpen && e.key === 'Escape') {
        onCancel();
      }
    };
    
    // Listen to event only when modal is open
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Optional: Prevent scrolling background when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset'; // Restore scrolling
    };
  }, [isOpen, onCancel]);

  // Don't render anything if not open or not mounted
  if (!isOpen || !isMounted) return null;

  // 5. Safe Language Fallback
  const safeLang = labels[language] ? language : 'en';
  const t = labels[safeLang];
  const commonT = commonLabels[safeLang];

  // 6. PORTAL: Renders modal outside parent DOM hierarchy (Best for Modals)
  return createPortal(
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onCancel} // Close on backdrop click
      // GPU Hint for backdrop
      style={{ willChange: 'opacity' }}
    >
      <div 
        className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-white/30 dark:border-white/20 rounded-2xl shadow-2xl max-w-sm w-full p-6 text-center transform transition-all animate-zoom-in"
        // Stop click from closing modal when clicking inside the box
        onClick={(e) => e.stopPropagation()}
        // GPU Hint for modal box animation
        style={{ willChange: 'transform, opacity' }}
      >
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          {t?.title || 'Confirm'}
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6 font-medium">
          {t?.message || 'Are you sure?'}
        </p>
        
        <div className="flex justify-center space-x-4">
          <button
            onClick={onCancel}
            className="px-6 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 active:scale-95 transition-all duration-200"
          >
            {commonT?.cancel || 'Cancel'}
          </button>
          
          <button
            onClick={onConfirm}
            className="px-6 py-2.5 rounded-xl bg-red-600 text-white font-bold shadow-lg shadow-red-500/30 hover:bg-red-700 hover:shadow-red-500/40 active:scale-95 transition-all duration-200"
          >
            {t?.confirm || 'Confirm'}
          </button>
        </div>
      </div>
    </div>,
    document.body // Target for Portal
  );
});

ConfirmModal.displayName = 'ConfirmModal';