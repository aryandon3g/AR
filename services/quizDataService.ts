import type { QuizQuestion, QuizSubject, QuizTopic } from '../types';

// Cache for dynamically loaded questions
const questionsCache = new Map<string, QuizQuestion[]>();
const loadingPromises = new Map<string, Promise<QuizQuestion[]>>();
let allCachedQuestions: QuizQuestion[] | null = null;

/**
 * Loads and caches questions for a specific topic.
 * @param topic The QuizTopic object containing the questionsLoader.
 * @returns A Promise that resolves to an array of QuizQuestion.
 */
export const loadQuestionsForTopic = async (topic: QuizTopic): Promise<QuizQuestion[]> => {
    const cacheKey = topic.name_en; 

    if (questionsCache.has(cacheKey)) {
        return questionsCache.get(cacheKey)!;
    }

    if (loadingPromises.has(cacheKey)) {
        return loadingPromises.get(cacheKey)!;
    }

    const promise = topic.questionsLoader().then(questions => {
        questionsCache.set(cacheKey, questions);
        loadingPromises.delete(cacheKey); 
        return questions;
    });

    loadingPromises.set(cacheKey, promise);
    return promise;
};

/**
 * Loads all questions and returns them STRICTLY in sequence (No Random Shuffle).
 */
export const getMixedQuizQuestions = async (allSubjects: QuizSubject[], count: number): Promise<QuizQuestion[]> => {
    
    // [FIX] अगर Cache में डेटा है, तो उसे चेक करें कहीं वो पुराना शफल वाला तो नहीं?
    // सुरक्षा के लिए, हम यहाँ मान रहे हैं कि 'allCachedQuestions' में डेटा सीधे लोड हुआ है।
    
    if (allCachedQuestions === null) {
        // Collect all questionsLoader promises
        // flatMap keeps the order: Subject 1 -> Topic 1, Topic 2... Subject 2...
        const allQuestionLoaders = allSubjects.flatMap(subject => 
            subject.topics.map(topic => loadQuestionsForTopic(topic))
        );

        // Await all promises. This preserves the order of the array.
        const loadedQuestionsArrays = await Promise.all(allQuestionLoaders);
        
        // Flatten strictly in order.
        allCachedQuestions = loadedQuestionsArrays.flat();
    }
    
    // [IMPORTANT FIX] Removed .sort() and Math.random() completely.
    // Now it returns the first 'count' questions exactly as they appear in your files.
    return allCachedQuestions!.slice(0, count);
};

/**
 * Clears the question cache.
 */
export const clearQuestionCache = () => {
    questionsCache.clear();
    loadingPromises.clear();
    allCachedQuestions = null;
};