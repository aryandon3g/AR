import React, { useState, useRef, useEffect } from 'react';
import type { Language, ChatMessage } from '../types';
import { SendIcon, SparkleIcon } from './icons';
import { chatScreenLabels as labels } from '../services/labels';

interface ChatScreenProps {
  language: Language;
  topic: string;
  chatHistory: ChatMessage[];
  isLoading: boolean;
  onSendMessage: (message: string) => void;
  onGenerateQuiz: () => void;
}

export const ChatScreen: React.FC<ChatScreenProps> = ({ language, topic, chatHistory, isLoading, onSendMessage, onGenerateQuiz }) => {
    const [inputMessage, setInputMessage] = useState('');
    const l = labels[language];
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [chatHistory, isLoading]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputMessage.trim() && !isLoading) {
            onSendMessage(inputMessage);
            setInputMessage('');
        }
    };

    return (
        <div className="w-full h-full p-4 pt-20 flex flex-col overflow-hidden">
            <h2 className="text-xl font-bold text-center mb-4 flex-shrink-0 text-gray-800 dark:text-gray-200 truncate">
                {topic}
            </h2>
            <div className="flex-grow overflow-y-auto pr-2 -mr-2 space-y-4">
                {chatHistory.map((message, index) => (
                    <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs md:max-w-md p-3 rounded-2xl ${message.sender === 'user' ? 'bg-primary-500 text-white rounded-br-lg' : 'bg-white/50 dark:bg-black/30 rounded-bl-lg'}`}>
                           <p className="text-sm" style={{ whiteSpace: 'pre-wrap' }}>{message.text}</p>
                        </div>
                    </div>
                ))}
                {isLoading && (
                     <div className="flex justify-start">
                        <div className="max-w-xs md:max-w-md p-3 rounded-2xl bg-white/50 dark:bg-black/30 rounded-bl-lg">
                            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                                <SparkleIcon className="w-5 h-5 animate-pulse" />
                                <span>{l.thinking}</span>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <div className="flex-shrink-0 mt-4 space-y-3">
                <button
                    onClick={onGenerateQuiz}
                    className="w-full p-3 rounded-lg bg-white/30 dark:bg-black/30 backdrop-blur-sm border border-white/40 dark:border-white/20 font-semibold hover:bg-white/50 dark:hover:bg-black/50 transition-colors"
                >
                    {l.generateQuiz}
                </button>
                <form onSubmit={handleSendMessage} className="relative">
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder={l.placeholder}
                        className="w-full py-3 pl-4 pr-12 bg-white/50 dark:bg-black/30 border border-white/40 dark:border-white/20 rounded-full shadow-lg backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-primary-400 transition"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !inputMessage.trim()}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary-600 text-white shadow-md hover:bg-primary-700 transition-all transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        aria-label="Send message"
                    >
                        <SendIcon className="w-5 h-5" />
                    </button>
                </form>
            </div>
        </div>
    );
};