

import type { SummaryData, XpData, Achievement, ProgressDataPoint, StreakData } from '../types';
import type { QuizSubject } from '../types'; // Corrected import path

const DB_NAME = 'quizAppDB';
const STORE_NAME = 'userData';
const DB_VERSION = 1; // Increment this if schema changes (e.g., add new object stores or alter existing ones)

let db: IDBDatabase | null = null;

async function openDb(): Promise<IDBDatabase> {
    if (db) {
        return db;
    }

    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onupgradeneeded = (event) => {
            const db = (event.target as IDBOpenDBRequest).result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
            }
        };

        request.onsuccess = (event) => {
            db = (event.target as IDBOpenDBRequest).result;
            resolve(db);
        };

        request.onerror = (event) => {
            console.error("IndexedDB error:", (event.target as IDBOpenDBRequest).error);
            reject((event.target as IDBOpenDBRequest).error);
        };
    });
}

async function getData<T>(key: string): Promise<T | null> {
    const database = await openDb();
    return new Promise((resolve, reject) => {
        const transaction = database.transaction([STORE_NAME], 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.get(key);

        request.onsuccess = () => {
            resolve(request.result as T);
        };

        request.onerror = (event) => {
            console.error(`Error getting data for key ${key}:`, (event.target as IDBRequest).error);
            reject((event.target as IDBRequest).error);
        };
    });
}

async function saveData<T>(key: string, value: T): Promise<void> {
    const database = await openDb();
    return new Promise((resolve, reject) => {
        const transaction = database.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.put(value, key); // Use put for upsert behavior (insert or update)

        request.onsuccess = () => {
            resolve();
        };

        request.onerror = (event) => {
            console.error(`Error saving data for key ${key}:`, (event.target as IDBRequest).error);
            reject((event.target as IDBRequest).error);
        };
    });
}

async function deleteData(key: string): Promise<void> {
    const database = await openDb();
    return new Promise((resolve, reject) => {
        const transaction = database.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.delete(key);

        request.onsuccess = () => {
            resolve();
        };

        request.onerror = (event) => {
            console.error(`Error deleting data for key ${key}:`, (event.target as IDBRequest).error);
            reject((event.target as IDBRequest).error);
        };
    });
}

const HISTORY_KEY = 'quizAppHistory';
const CUSTOM_QUIZZES_KEY = 'customQuizzes';
const XP_DATA_KEY = 'xpData';
const ACHIEVEMENTS_KEY = 'achievements'; // New: Key for achievements
const PROGRESS_DATA_KEY = 'progressData'; // New: Key for detailed quiz progress
const STREAK_DATA_KEY = 'streakData'; // New: Key for daily streak

export const getHistory = async (): Promise<SummaryData[]> => {
    try {
        const history = await getData<SummaryData[]>(HISTORY_KEY);
        if (!history) return [];
        // Sort by most recent first
        return history.sort((a, b) => b.timestamp - a.timestamp);
    } catch (error) {
        console.error("Failed to retrieve quiz history from IndexedDB:", error);
        return [];
    }
};

export const saveToHistory = async (summary: SummaryData): Promise<void> => {
    try {
        const history = await getHistory();
        // Prevent duplicates if user somehow re-saves the same session
        const newHistory = [summary, ...history.filter(item => item.id !== summary.id)];
        // Limit history to 50 entries to avoid excessive storage use
        if (newHistory.length > 50) {
            newHistory.length = 50;
        }
        await saveData(HISTORY_KEY, newHistory);
    } catch (error) {
        console.error("Failed to save quiz to IndexedDB history:", error);
    }
};

export const clearHistory = async (): Promise<void> => {
    try {
        await deleteData(HISTORY_KEY);
    } catch (error) {
        console.error("Failed to clear quiz history from IndexedDB:", error);
    }
};

// --- Custom Quiz Storage ---

export const getCustomQuizzes = async (): Promise<QuizSubject[]> => {
    try {
        const quizzes = await getData<QuizSubject[]>(CUSTOM_QUIZZES_KEY);
        if (!quizzes) return [];
        return quizzes;
    } catch (error) {
        console.error("Failed to retrieve custom quizzes from IndexedDB:", error);
        return [];
    }
};

export const saveCustomQuizzes = async (quizzes: QuizSubject[]): Promise<void> => {
    try {
        await saveData(CUSTOM_QUIZZES_KEY, quizzes);
    } catch (error) {
        console.error("Failed to save custom quizzes to IndexedDB:", error);
    }
};

export const clearCustomQuizzes = async (): Promise<void> => {
    try {
        await deleteData(CUSTOM_QUIZZES_KEY);
    } catch (error) {
        console.error("Failed to clear custom quizzes from IndexedDB:", error);
    }
};

// --- XP and Level Storage ---

export const getXpData = async (): Promise<XpData> => {
    try {
        const xpJson = await getData<XpData>(XP_DATA_KEY);
        if (!xpJson) return { totalXp: 0, level: 1 }; // Default initial state
        return xpJson;
    } catch (error) {
        console.error("Failed to retrieve XP data from IndexedDB:", error);
        return { totalXp: 0, level: 1 };
    }
};

export const saveXpData = async (xpData: XpData): Promise<void> => {
    try {
        await saveData(XP_DATA_KEY, xpData);
    } catch (error) {
        console.error("Failed to save XP data to IndexedDB:", error);
    }
};


// --- Streak Data Storage ---
export const getStreakData = async (): Promise<StreakData> => {
    try {
        const streakJson = await getData<StreakData>(STREAK_DATA_KEY);
        if (!streakJson) return { currentStreak: 0, lastQuizDate: '' }; // Default initial state
        return streakJson;
    } catch (error) {
        console.error("Failed to retrieve Streak data from IndexedDB:", error);
        return { currentStreak: 0, lastQuizDate: '' };
    }
};

export const saveStreakData = async (streakData: StreakData): Promise<void> => {
    try {
        await saveData(STREAK_DATA_KEY, streakData);
    } catch (error) {
        console.error("Failed to save Streak data to IndexedDB:", error);
    }
};


// --- Achievements Storage ---

export const getAchievements = async (defaultAchievements: Achievement[]): Promise<Achievement[]> => {
    try {
        const savedAchievements = await getData<Achievement[]>(ACHIEVEMENTS_KEY);
        if (!savedAchievements) return defaultAchievements;
        
        // Merge saved achievements with default ones to ensure new achievements are added
        // and existing ones retain their unlocked status/data.
        const mergedAchievements = defaultAchievements.map(defaultAch => {
            const savedAch = savedAchievements.find(sA => sA.id === defaultAch.id);
            return savedAch ? { ...defaultAch, ...savedAch } : defaultAch;
        });

        return mergedAchievements;

    } catch (error) {
        console.error("Failed to retrieve achievements from IndexedDB:", error);
        return defaultAchievements;
    }
};

export const saveAchievements = async (achievements: Achievement[]): Promise<void> => {
    try {
        await saveData(ACHIEVEMENTS_KEY, achievements);
    } catch (error) {
        console.error("Failed to save achievements to IndexedDB:", error);
    }
};

// --- Progress Data Storage (for charts) ---
export const getProgressData = async (): Promise<ProgressDataPoint[]> => {
    try {
        const progress = await getData<ProgressDataPoint[]>(PROGRESS_DATA_KEY);
        if (!progress) return [];
        const data = progress; // Data is already an array
        return data.sort((a, b) => a.timestamp - b.timestamp); // Sort by time for chronological charts
    } catch (error) {
        console.error("Failed to retrieve progress data from IndexedDB:", error);
        return [];
    }
};

export const saveProgressData = async (dataPoint: ProgressDataPoint): Promise<void> => {
    try {
        const existingData = await getProgressData();
        const newData = [...existingData, dataPoint];
        // Keep data limited, e.g., to last 100 quizzes, to prevent excessive storage
        if (newData.length > 100) {
            newData.splice(0, newData.length - 100);
        }
        await saveData(PROGRESS_DATA_KEY, newData);
    } catch (error) {
        console.error("Failed to save progress data point to IndexedDB:", error);
    }
};

export const clearProgressData = async (): Promise<void> => {
    try {
        await deleteData(PROGRESS_DATA_KEY);
    } catch (error) {
        console.error("Failed to clear progress data from IndexedDB:", error);
    }
};