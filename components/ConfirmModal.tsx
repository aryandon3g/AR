import React from 'react';
import type { Language } from '../types';
import { confirmModalLabels as labels, commonLabels } from '../services/labels';

interface ConfirmModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  language: Language;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpen, onConfirm, onCancel, language }) => {
  if (!isOpen) return null;

  const l = labels[language];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-slide-in">
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/30 dark:border-white/20 rounded-2xl shadow-2xl max-w-sm w-full p-6 text-center">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{l.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{l.message}</p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onCancel}
            className="px-6 py-2 rounded-lg bg-white/50 dark:bg-black/50 border border-white/30 dark:border-white/10 text-gray-800 dark:text-gray-200 font-semibold hover:bg-white/70 dark:hover:bg-black/70 transition-colors"
          >
            {commonLabels[language].cancel}
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2 rounded-lg bg-red-600 text-white font-bold shadow-lg hover:bg-red-700 transition-all"
          >
            {l.confirm}
          </button>
        </div>
      </div>
    </div>
  );
};