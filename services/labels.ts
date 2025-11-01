

import type { Language } from '../types';
import type { GamificationTitle } from '../types';


// --- General UI Labels ---
export const commonLabels = {
    en: {
        back: 'Back',
        close: 'Close',
        cancel: 'Cancel',
        confirm: 'Confirm',
        next: 'Next', // Always English
        previous: 'Previous',
        startQuiz: 'Start Quiz', // Always English
        noHistory: 'No quizzes taken yet.',
        loading: 'Loading...',
        incorrectOnly: 'Incorrect Only',
        xp: 'XP',
        level: 'Level', // Always English
        progress: 'Progress', // Always English
        achievements: 'Achievements', // Always English
        viewAll: 'View All',
        overall: 'Overall',
        highestScore: 'Highest Score',
        highestAccuracy: 'Highest Accuracy',
        quizzesCompleted: 'Quizzes Completed',
        rank: 'Rank',
        player: 'Player',
        myProgress: 'My Progress', // Always English
        toNextLevel: 'to next level', // Always English
    },
    hi: {
        back: 'पीछे',
        close: 'बंद करें',
        cancel: 'रद्द करें',
        confirm: 'पुष्टि करें',
        next: 'Next', // Always English
        previous: 'पिछला',
        startQuiz: 'Start Quiz', // Always English
        noHistory: 'अभी तक कोई प्रश्नोत्तरी नहीं ली गई है।',
        loading: 'लोड हो रहा है...',
        incorrectOnly: 'केवल गलत',
        xp: 'XP',
        level: 'Level', // Always English
        progress: 'Progress', // Always English
        achievements: 'Achievements', // Always English
        viewAll: 'सभी देखें',
        overall: 'समग्र',
        highestScore: 'उच्चतम स्कोर',
        highestAccuracy: 'उच्चतम सटीकता',
        quizzesCompleted: 'पूरी की गई क्विज़',
        rank: 'रैंक',
        player: 'खिलाड़ी',
        myProgress: 'My Progress', // Always English
        toNextLevel: 'to next level', // Always English
    }
};

// --- HomeScreen Labels ---
export const homeScreenLabels = {
    en: {
        title: 'A♥️R',
        takeQuiz: 'Take a Subject Quiz', // Always English
        recentQuizzes: 'Recent Quizzes', // Always English
        noHistory: "Your past quizzes will appear here.",
        untitledQuiz: 'Untitled Quiz',
        designedBy: 'Designed By Aryan Maurya',
        viewProgress: 'View Progress', // Always English
        viewAchievements: 'View Achievements', // Always English
    },
    hi: {
        title: 'A♥️R',
        takeQuiz: 'Take a Subject Quiz', // Always English
        recentQuizzes: 'Recent Quizzes', // Always English
        noHistory: "आपकी पिछली प्रश्नोत्तरी यहाँ दिखाई देंगी।",
        untitledQuiz: 'अनाम प्रश्नोत्तरी',
        designedBy: 'आर्यन मौर्य द्वारा डिज़ाइन किया गया',
        viewProgress: 'View Progress', // Always English
        viewAchievements: 'View Achievements', // Always English
    }
};

// --- Loader Labels ---
export const loaderLabels = {
    en: {
        generatingQuiz: 'Generating Your Quiz...',
    },
    hi: {
        generatingQuiz: 'आपकी प्रश्नोत्तरी तैयार हो रही है...',
    }
};

// --- QuizCard Labels ---
export const quizCardLabels = {
    en: {
        question: 'Question', // Always English
        explanation: 'Explanation', // Always English
        removeBookmark: 'Remove bookmark', // Always English
        addBookmark: 'Add bookmark', // Always English
        skipped: 'Skipped', // Always English
        oops: 'Oops!', // Always English
        tryAgain: 'Try again!', // Always English
        notQuite: 'Not quite!', // Always English
        correct: 'Correct!', // Always English
        excellent: 'Excellent!', // Always English
        wellDone: 'Well done!', // Always English
    },
    hi: {
        question: 'Question', // Always English
        explanation: 'Explanation', // Always English
        removeBookmark: 'Remove bookmark', // Always English
        addBookmark: 'Add bookmark', // Always English
        skipped: 'Skipped', // Always English
        oops: 'Oops!', // Always English
        tryAgain: 'Try again!', // Always English
        notQuite: 'Not quite!', // Always English
        correct: 'Correct!', // Always English
        excellent: 'Excellent!', // Always English
        wellDone: 'Well done!', // Always English
    }
};

// --- SummaryScreen Labels ---
export const summaryScreenLabels = {
    en: {
        title: "Here's Your Result!",
        accuracy: "Accuracy", // Always English
        avgTime: "Avg. Time / Q", // Always English
        score: "Your Score",
        playAgain: "Play Again",
        review: "Review Answers",
        performance: "Your Performance Title", // This is dynamic
        reattempt: "Re-attempt Quiz",
        dashboardTitle: "Performance Dashboard",
        correct: "Correct", // Always English
        incorrect: "Incorrect",
        reattemptIncorrect: "Re-attempt Incorrect",
        detailedAnalysis: "Detailed Analysis",
        netScore: "Net Score",
        yourAnswer: "Your Answer:", // Always English
        correctAnswer: "Correct Answer:", // Always English
        timeTaken: "Time Taken:",
        backToSummary: "Back to Summary", // Always English
        skipped: 'Skipped', // Always English
        xpEarned: 'XP Earned', // Always English
        levelUp: 'LEVEL UP!', // Always English
    },
    hi: {
        title: "यह रहा आपका परिणाम!",
        accuracy: "Accuracy", // Always English
        avgTime: "Avg. Time / Q", // Always English
        score: "आपका स्कोर",
        playAgain: "फिर से खेलें",
        review: "उत्तरों की समीक्षा करें",
        performance: "आपका प्रदर्शन शीर्षक", // This is dynamic
        reattempt: "प्रश्नोत्तरी फिर से दें",
        dashboardTitle: "प्रदर्शन डैशबोर्ड",
        correct: "Correct", // Always English
        incorrect: "गलत",
        reattemptIncorrect: "केवल गलत फिर से दें",
        detailedAnalysis: "विस्तृत विश्लेषण",
        netScore: "नेट स्कोर",
        yourAnswer: "Your Answer: ", // Always English
        correctAnswer: "Correct Answer: ", // Always English
        timeTaken: "लिया गया समय: ",
        backToSummary: "Back to Summary", // Always English
        skipped: 'Skipped', // Always English
        xpEarned: 'XP मिला', // Always English
        levelUp: 'LEVEL UP!', // Always English
    }
};

export const gamificationTitles: Record<GamificationTitle, { en: string, hi: string, emoji: string }> = {
    Novice: { en: 'Quiz Novice', hi: 'प्रश्नोत्तरी नौसिखिया', emoji: '🔰' },
    Explorer: { en: 'Knowledge Explorer', hi: 'ज्ञान अन्वेषक', emoji: '🧭' },
    Virtuoso: { en: 'Topic Virtuoso', hi: 'विषय विशेषज्ञ', emoji: '💡' },
    Master: { en: 'Grand Master!', hi: 'महागुरु!', emoji: '🏆' },
};

// --- Sidebar Labels ---
export const sidebarLabels = {
    en: {
        settings: 'Settings', // Always English
        theme: 'Theme', // Always English
        light: 'Light', // Always English
        dark: 'Dark', // Always English
        language: 'Language',
        difficulty: 'Difficulty',
        numQuestions: 'Number of Questions', // Always English
        easy: 'Easy',
        medium: 'Medium',
        hard: 'Hard',
        history: 'Quiz History', // Always English
        clearHistory: 'Clear History',
        confirmClear: 'Are you sure you want to delete all quiz history?',
        takeQuiz: 'Take a Subject Quiz',
        subjects: 'Subjects', // Always English
        topics: 'Topics', // Always English
        createQuiz: 'Create Your Quiz',
        mixedQuiz: 'Mixed Quiz', // Always English
        // Specific for Custom Quizzes (if re-enabled)
        untitledQuiz: 'Untitled Quiz',
        customQuizzesCategoryName: 'Custom Quizzes' // New: label for the custom quizzes category
    },
    hi: {
        settings: 'Settings', // Always English
        theme: 'Theme', // Always English
        light: 'Light', // Always English
        dark: 'Dark', // Always English
        language: 'भाषा',
        difficulty: 'कठिनाई',
        numQuestions: 'Number of Questions', // Always English
        easy: 'आसान',
        medium: 'मध्यम',
        hard: 'कठिन',
        history: 'Quiz History', // Always English
        clearHistory: 'इतिहास साफ़ करें',
        confirmClear: 'क्या आप वाकई सभी प्रश्नोत्तरी इतिहास हटाना चाहते हैं?',
        takeQuiz: 'विषय प्रश्नोत्तरी लें',
        subjects: 'Subjects', // Always English
        topics: 'Topics', // Always English
        createQuiz: 'अपनी प्रश्नोत्तरी बनाएँ',
        mixedQuiz: 'Mixed Quiz', // Always English
        // Specific for Custom Quizzes (if re-enabled)
        untitledQuiz: 'अनाम प्रश्नोत्तरी',
        customQuizzesCategoryName: 'कस्टम प्रश्नोत्तरी'
    }
};

// --- ConfirmModal Labels ---
export const confirmModalLabels = {
    en: {
        title: "Are you sure?",
        message: "Your current quiz progress will be lost. This action cannot be undone.",
        confirm: "Quit Quiz"
    },
    hi: {
        title: "क्या आप सुनिश्चित हैं?",
        message: "आपकी वर्तमान प्रश्नोत्तरी प्रगति खो जाएगी। यह क्रिया पूर्ववत नहीं की जा सकती।",
        confirm: "क्विज़ छोड़ें"
    }
};

// --- ModeSelectionScreen Labels ---
export const modeSelectionLabels = {
    en: {
        title: "Choose Your Mode", // Always English
        practiceTitle: "Practice Mode", // Always English
        practiceDesc: "Get instant feedback and explanations after each question. Perfect for learning!", // Always English
        attemptTitle: "Attempt Mode", // Always English
        attemptDesc: "Test yourself. Answers are revealed only after you finish the entire quiz.", // Always English
    },
    hi: {
        title: "Choose Your Mode", // Always English
        practiceTitle: "Practice Mode", // Always English
        practiceDesc: "Get instant feedback and explanations after each question. Perfect for learning!", // Always English
        attemptTitle: "Attempt Mode", // Always English
        attemptDesc: "Test yourself. Answers are revealed only after you finish the entire quiz.", // Always English
    }
};

export const chatScreenLabels = {
    en: {
        thinking: 'Thinking...',
        generateQuiz: 'Generate Quiz from this Topic',
        placeholder: 'Ask a follow-up question...'
    },
    hi: {
        thinking: 'सोच रहा है...',
        generateQuiz: 'इस विषय से प्रश्नोत्तरी बनाएँ',
        placeholder: 'एक और प्रश्न पूछें...'
    }
};

export const solutionModalLabels = {
    en: {
        title: 'AI-Powered Solution',
        close: 'Close',
        loading: 'Generating solution...',
        errorTitle: 'Error',
        stepByStep: 'Step-by-step Solution',
        shortTrick: 'Short Trick / Tip'
    },
    hi: {
        title: 'AI-संचालित समाधान',
        close: 'बंद करें',
        loading: 'समाधान तैयार हो रहा है...',
        errorTitle: 'त्रुटि',
        stepByStep: 'चरण-दर-चरण समाधान',
        shortTrick: 'शॉर्ट ट्रिक / टिप'
    }
};

export const achievementLabels = {
    en: {
        firstStep: { name: 'The Starter', description: 'Complete your first quiz.' },
        knowledgeable: { name: 'The Knowledgeable', description: 'Complete 50 quizzes successfully.' },
        sharpWitted: { name: 'The Sharp-Witted', description: 'Achieve 250 correct answers with an average response time of less than 10 seconds per question.' },
        champion: { name: 'The Champion', description: 'Answer 1000 questions correctly across all quizzes.' },
        mastermind: { name: 'The Mastermind', description: 'Earn a total of 2000 XP.' },
        guru: { name: 'XP Collector', description: 'Reach a total of 5000 XP.' },
        precise: { name: 'The Precise', description: 'Achieve 95%+ accuracy in a quiz with at least 20 questions.' },
        fearless: { name: 'The Fearless', description: 'Complete a quiz of 100 or more questions.' },
        victorious: { name: 'The Victorious', description: 'Achieve 100% accuracy in 10 quizzes with at least 10 questions each.' },
        rocketSpeed: { name: 'The Rocket-Speed', description: 'Answer 100 questions correctly in less than 5 seconds per question average.' },
        oceanOfKnowledge: { name: 'Ocean of Knowledge', description: 'Complete at least one quiz in 10 different subject categories.' },
        theAce: { name: 'The Ace', description: 'Have over 1500 XP with an overall accuracy of 85% or higher.' },
        theGambler: { name: 'The Gambler', description: 'Answer 200 questions correctly in "Attempt Mode" quizzes.' },
        worldConqueror: { name: 'World Conqueror', description: 'Complete a total of 200 quizzes.' },
        theEmperor: { name: 'The Emperor', description: 'Reach a total of 10000 XP.' },
    },
    hi: {
        firstStep: { name: 'The Starter', description: 'Complete your first quiz.' },
        knowledgeable: { name: 'The Knowledgeable', description: 'Complete 50 quizzes successfully.' },
        sharpWitted: { name: 'The Sharp-Witted', description: 'Achieve 250 correct answers with an average response time of less than 10 seconds per question.' },
        champion: { name: 'The Champion', description: 'Answer 1000 questions correctly across all quizzes.' },
        mastermind: { name: 'The Mastermind', description: 'Earn a total of 2000 XP.' },
        guru: { name: 'XP Collector', description: 'Reach a total of 5000 XP.' },
        precise: { name: 'The Precise', description: 'Achieve 95%+ accuracy in a quiz with at least 20 questions.' },
        fearless: { name: 'The Fearless', description: 'Complete a quiz of 100 or more questions.' },
        victorious: { name: 'The Victorious', description: 'Achieve 100% accuracy in 10 quizzes with at least 10 questions each.' },
        rocketSpeed: { name: 'The Rocket-Speed', description: 'Answer 100 questions correctly in less than 5 seconds per question average.' },
        oceanOfKnowledge: { name: 'Ocean of Knowledge', description: 'Complete at least one quiz in 10 different subject categories.' },
        theAce: { name: 'The Ace', description: 'Have over 1500 XP with an overall accuracy of 85% or higher.' },
        theGambler: { name: 'The Gambler', description: 'Answer 200 questions correctly in "Attempt Mode" quizzes.' },
        worldConqueror: { name: 'World Conqueror', description: 'Complete a total of 200 quizzes.' },
        theEmperor: { name: 'The Emperor', description: 'Reach a total of 10000 XP.' },
    }
};