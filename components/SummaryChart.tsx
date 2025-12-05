import React, { useEffect, useRef, useState, useMemo } from 'react';
import type { SummaryData, Language } from '../types';
import { summaryScreenLabels as labels } from '../services/labels';
import { CheckCircleIcon, XCircleIcon, FastForwardIcon } from './icons';

interface SummaryChartProps {
  summary: SummaryData;
  language: Language;
}

/**
 * ⚡ PERFORMANCE HOOK
 * यह हुक React State का उपयोग नहीं करता, सीधे DOM (HTML) को अपडेट करता है।
 * इससे 0 से 100 तक की गिनती के दौरान 0 Re-renders होते हैं।
 */
const useCountUpRef = (endValue: number, duration: number = 1.5, isFloat: boolean = false) => {
    const ref = useRef<HTMLSpanElement>(null);
    
    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        let startTime: number | null = null;
        const start = 0; // हमेशा 0 से शुरू करें
        const end = endValue || 0; // Safety check

        // अगर वैल्यू 0 है, तो एनिमेशन की जरूरत नहीं
        if (end === 0) {
            element.textContent = "0";
            return;
        }

        let animationFrameId: number;

        const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
            
            // Easing: EaseOutQuart (Smooth slow down at the end)
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentVal = start + easeOutQuart * (end - start);
            
            // Direct DOM Manipulation (Fastest Performance)
            element.textContent = isFloat 
                ? currentVal.toFixed(1) 
                : Math.round(currentVal).toString();

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(animation);
            }
        };

        animationFrameId = requestAnimationFrame(animation);

        // Cleanup: अगर यूजर स्क्रीन बंद कर दे तो एनिमेशन रोक दें
        return () => cancelAnimationFrame(animationFrameId);
    }, [endValue, duration, isFloat]);
    
    return ref;
};

/**
 * ⚡ MEMOIZED COMPONENT
 * StatCard को बाहर निकाला गया है और React.memo किया गया है
 * ताकि पैरेंट रेंडर होने पर यह बेवजह री-रेंडर न हो।
 */
const StatCard = React.memo(({ 
    icon, 
    label, 
    valueRef, 
    staticValue, 
    colorClass 
}: { 
    icon: React.ReactNode, 
    label: string, 
    valueRef?: React.RefObject<HTMLSpanElement>, 
    staticValue?: string | number, 
    colorClass: string 
}) => (
    <div className={`flex flex-col items-center justify-center p-3 rounded-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 ${colorClass}`}>
        <div className="flex items-center space-x-2">
            {icon}
            {/* यहाँ या तो एनिमेटेड Ref दिखेगा या फिर Static Value */}
            <span className="font-bold text-2xl" ref={valueRef}>
                {staticValue}
            </span>
        </div>
        <p className="text-xs font-medium opacity-80">{label}</p>
    </div>
));

export const SummaryChart: React.FC<SummaryChartProps> = ({ summary, language }) => {
    const l = labels[language];

    // Refs for Number Animation (No Re-renders)
    const accuracyRef = useCountUpRef(summary.accuracy);
    const skippedRef = useCountUpRef(summary.skipped ?? 0);
    
    // Derived Calculations (Memoized)
    const incorrectCount = useMemo(() => 
        summary.totalQuestions - summary.score - (summary.skipped ?? 0), 
    [summary]);

    // SVG Geometry Constants
    const { size, strokeWidth, center, radius, circumference, targetOffset } = useMemo(() => {
        const size = 180;
        const strokeWidth = 12;
        const center = size / 2;
        const radius = center - strokeWidth;
        const circumference = 2 * Math.PI * radius;
        const correctPercentage = (summary.score / summary.totalQuestions) * 100;
        // Calculation: Empty Circle = circumference, Full Circle = 0 offset
        const targetOffset = circumference - (correctPercentage / 100) * circumference;
        
        return { size, strokeWidth, center, radius, circumference, targetOffset };
    }, [summary.score, summary.totalQuestions]);

    // ⚡ SVG Animation Trigger
    // यह State सिर्फ एक बार बदलता है ताकि Circle 0 से Fill होना शुरू हो
    const [animatedOffset, setAnimatedOffset] = useState(circumference);

    useEffect(() => {
        // थोड़ा डिले ताकि DOM रेंडर हो जाए, फिर एनिमेशन ट्रिगर हो
        const timer = setTimeout(() => {
            setAnimatedOffset(targetOffset);
        }, 100);
        return () => clearTimeout(timer);
    }, [targetOffset]);

    return (
        <div className="w-full flex flex-col items-center space-y-6">
            <div className="relative" style={{ width: size, height: size }}>
                <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
                    {/* Background track */}
                    <circle
                        className="text-gray-300/50 dark:text-gray-700/50"
                        strokeWidth={strokeWidth}
                        stroke="currentColor"
                        fill="transparent"
                        r={radius}
                        cx={center}
                        cy={center}
                    />
                    
                    {/* Incorrect Answers Segment (Background Red Circle) */}
                     <circle
                        className="text-red-500/60"
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={0}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r={radius}
                        cx={center}
                        cy={center}
                        style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                    />
                    
                    {/* Correct Answers Segment (Green Overlay) */}
                    {/* CSS Transition का उपयोग किया गया है जो GPU का इस्तेमाल करता है */}
                    <circle
                        className="text-green-500/80"
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={animatedOffset} 
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r={radius}
                        cx={center}
                        cy={center}
                        style={{
                            transition: 'stroke-dashoffset 1.5s cubic-bezier(0.22, 1, 0.36, 1)', // Smooth CSS easing (easeOutQuint)
                            transform: 'rotate(-90deg)',
                            transformOrigin: '50% 50%',
                        }}
                    />
                </svg>

                {/* Center Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="font-bold text-4xl text-gray-800 dark:text-white flex items-baseline">
                        {/* Direct DOM update via Ref */}
                        <span ref={accuracyRef}>0</span>
                        <span className="text-2xl opacity-60 ml-0.5">%</span>
                    </span>
                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">{l.accuracy}</p>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-500 mt-1">
                        {summary.score} / {summary.totalQuestions}
                    </p>
                </div>
            </div>
            
            {/* Stats Grid */}
            <div className="w-full max-w-sm grid grid-cols-3 gap-3 text-gray-800 dark:text-gray-200">
                <StatCard 
                    icon={<CheckCircleIcon className="w-6 h-6"/>}
                    label={l.correct}
                    staticValue={summary.score}
                    colorClass="text-green-600 dark:text-green-400"
                />
                <StatCard 
                    icon={<XCircleIcon className="w-6 h-6"/>}
                    label={l.incorrect}
                    staticValue={incorrectCount}
                    colorClass="text-red-600 dark:text-red-400"
                />
                 <StatCard 
                    icon={<FastForwardIcon className="w-6 h-6"/>}
                    label={l.skipped}
                    valueRef={skippedRef} // Animated Skipped Count
                    staticValue={0} // Fallback
                    colorClass="text-yellow-600 dark:text-yellow-400"
                />
            </div>
        </div>
    );
};