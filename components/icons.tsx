import React, { memo } from 'react';

// 1. Improved Types
type IconProps = { 
  className?: string; 
  strokeWidth?: number;
} & React.SVGProps<SVGSVGElement>;

// 2. Base Icon Wrapper (Reduces code repetition)
const BaseIcon = ({ children, className, fill = "none", stroke = "currentColor", strokeWidth = 1.5, ...props }: IconProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill={fill} 
    viewBox="0 0 24 24" 
    strokeWidth={strokeWidth} 
    stroke={stroke} 
    className={className}
    aria-hidden="true"
    {...props}
  >
    {children}
  </svg>
);

// --- All Icons (Memoized for High FPS) ---

export const SunIcon = memo(({ className, ...props }: IconProps) => (
  <BaseIcon className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </BaseIcon>
));
SunIcon.displayName = 'SunIcon';

export const MoonIcon = memo(({ className, ...props }: IconProps) => (
  <BaseIcon className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </BaseIcon>
));
MoonIcon.displayName = 'MoonIcon';

export const DownloadIcon = memo(({ className, ...props }: IconProps) => (
    <BaseIcon className={className} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </BaseIcon>
));
DownloadIcon.displayName = 'DownloadIcon';

export const TranslateIcon = memo(({ className, ...props }: IconProps) => (
    <BaseIcon className={className} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
    </BaseIcon>
));
TranslateIcon.displayName = 'TranslateIcon';

export const ThreeDotsVerticalIcon = memo(({ className, ...props }: IconProps) => (
  <BaseIcon className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
  </BaseIcon>
));
ThreeDotsVerticalIcon.displayName = 'ThreeDotsVerticalIcon';

export const XIcon = memo(({ className, ...props }: IconProps) => (
    <BaseIcon className={className} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </BaseIcon>
));
XIcon.displayName = 'XIcon';

export const CheckCircleIcon = memo(({ className, ...props }: IconProps) => (
    <BaseIcon className={className} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </BaseIcon>
));
CheckCircleIcon.displayName = 'CheckCircleIcon';

export const XCircleIcon = memo(({ className, ...props }: IconProps) => (
    <BaseIcon className={className} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </BaseIcon>
));
XCircleIcon.displayName = 'XCircleIcon';

export const ArrowLeftIcon = memo(({ className, ...props }: IconProps) => (
  <BaseIcon className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </BaseIcon>
));
ArrowLeftIcon.displayName = 'ArrowLeftIcon';

export const ArrowRightIcon = memo(({ className, ...props }: IconProps) => (
  <BaseIcon className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </BaseIcon>
));
ArrowRightIcon.displayName = 'ArrowRightIcon';

export const HistoryIcon = memo(({ className, ...props }: IconProps) => (
    <BaseIcon className={className} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </BaseIcon>
));
HistoryIcon.displayName = 'HistoryIcon';

export const ReviewIcon = memo(({ className, ...props }: IconProps) => (
    <BaseIcon className={className} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639l4.43-4.43a1.012 1.012 0 011.431 1.43l-3.322 3.322a1.012 1.012 0 000 1.43l3.322 3.322a1.012 1.012 0 01-1.431 1.43l-4.43-4.43zM10.75 4.75a1.012 1.012 0 010 1.43l-3.322 3.322a1.012 1.012 0 000 1.43l3.322 3.322a1.012 1.012 0 010 1.43" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 4.75a1.012 1.012 0 010 1.43l-3.322 3.322a1.012 1.012 0 000 1.43l3.322 3.322a1.012 1.012 0 010 1.43" />
    </BaseIcon>
));
ReviewIcon.displayName = 'ReviewIcon';

export const TrashIcon = memo(({ className, ...props }: IconProps) => (
    <BaseIcon className={className} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.124-2.038-2.124H9.038c-1.128 0-2.038.944-2.038 2.124v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </BaseIcon>
));
TrashIcon.displayName = 'TrashIcon';

export const CheckmarkIcon = memo(({ className, strokeWidth = 3, ...props }: IconProps) => (
    <BaseIcon className={className} strokeWidth={strokeWidth} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </BaseIcon>
));
CheckmarkIcon.displayName = 'CheckmarkIcon';

export const BackArrowIcon = memo(({ className, strokeWidth = 2, ...props }: IconProps) => (
  <BaseIcon className={className} strokeWidth={strokeWidth} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </BaseIcon>
));
BackArrowIcon.displayName = 'BackArrowIcon';

export const BookOpenIcon = memo(({ className, ...props }: IconProps) => (
    <BaseIcon className={className} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </BaseIcon>
));
BookOpenIcon.displayName = 'BookOpenIcon';

export const ChevronDownIcon = memo(({ className, strokeWidth = 2, ...props }: IconProps) => (
    <BaseIcon className={className} strokeWidth={strokeWidth} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </BaseIcon>
));
ChevronDownIcon.displayName = 'ChevronDownIcon';

export const BookmarkIcon = memo(({ className, filled, ...props }: IconProps & { filled?: boolean }) => (
    <BaseIcon className={className} fill={filled ? 'currentColor' : 'none'} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
    </BaseIcon>
));
BookmarkIcon.displayName = 'BookmarkIcon';

export const AnalyticsIcon = memo(({ className, ...props }: IconProps) => (
    <BaseIcon className={className} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </BaseIcon>
));
AnalyticsIcon.displayName = 'AnalyticsIcon';

export const RedoIcon = memo(({ className, ...props }: IconProps) => (
    <BaseIcon className={className} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.664 0l3.18-3.185m-3.181-4.992l-3.182-3.182a8.25 8.25 0 00-11.664 0l-3.18 3.185" />
    </BaseIcon>
));
RedoIcon.displayName = 'RedoIcon';

export const PlusIcon = memo(({ className, ...props }: IconProps) => (
    <BaseIcon className={className} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </BaseIcon>
));
PlusIcon.displayName = 'PlusIcon';

export const ChartIcon = memo(({ className, ...props }: IconProps) => (
    <BaseIcon className={className} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </BaseIcon>
));
ChartIcon.displayName = 'ChartIcon';

export const TrophyIcon = memo(({ className, filled, ...props }: IconProps & { filled?: boolean }) => (
    <BaseIcon className={className} fill={filled ? 'currentColor' : 'none'} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25H2.25n19.5 0M4.5 18H19.5a2.25 2.25 0 002.25-2.25V6.75a4.5 4.5 0 00-4.5-4.5H7.5a4.5 4.5 0 00-4.5 4.5v9C2.25 17.712 3.328 18 4.5 18zm13.5-5.25a.75.75 0 01.75.75h-.75M6 13.5a.75.75 0 00-.75.75h.75" />
    </BaseIcon>
));
TrophyIcon.displayName = 'TrophyIcon';

export const XPIcon = memo(({ className, ...props }: IconProps) => (
    <BaseIcon className={className} {...props}>
         <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </BaseIcon>
));
XPIcon.displayName = 'XPIcon';

export const FireIcon = memo(({ className, ...props }: IconProps) => (
  <BaseIcon className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.627a8.722 8.722 0 00-4.242-2.332 8.722 8.722 0 00-5.748 1.188c-.97.5-1.637 1.488-1.637 2.659v1.495c0 1.25.597 2.478 1.637 3.093 1.1.66 2.373.961 3.525.961h1.495m1.59-1.591a8.722 8.722 0 004.242 2.332 8.722 8.722 0 005.748-1.188c.97-.5 1.637-1.488 1.637-2.659v-1.495c0-1.25-.597-2.478-1.637-3.093-1.1-.66-2.373-.961-3.525-.961H16.89M8.25 12l2.25 2.25L15 9.75" />
  </BaseIcon>
));
FireIcon.displayName = 'FireIcon';

export const FastForwardIcon = memo(({ className, ...props }: IconProps) => (
  <BaseIcon className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 19.5l-7.5-7.5 7.5-7.5m6 15l-7.5-7.5 7.5-7.5" />
  </BaseIcon>
));
FastForwardIcon.displayName = 'FastForwardIcon';

export const BadgeIcon = memo(({ className, filled, ...props }: IconProps & { filled?: boolean }) => (
    <BaseIcon className={className} fill={filled ? 'currentColor' : 'none'} {...props}>
       <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </BaseIcon>
));
BadgeIcon.displayName = 'BadgeIcon';

// FIX: SparkleIcon Path Safe String (Backticks for safety) & Correct Coordinates
export const SparkleIcon = memo(({ className, ...props }: IconProps) => (
  <BaseIcon className={className} {...props}>
    <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d={`M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z`}
    />
  </BaseIcon>
));
SparkleIcon.displayName = 'SparkleIcon';