
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
    const cacheKey = topic.name_en; // Use English name as a unique key

    if (questionsCache.has(cacheKey)) {
        return questionsCache.get(cacheKey)!;
    }

    if (loadingPromises.has(cacheKey)) {
        return loadingPromises.get(cacheKey)!;
    }

    const promise = topic.questionsLoader().then(questions => {
        questionsCache.set(cacheKey, questions);
        loadingPromises.delete(cacheKey); // Clear from promises after resolution
        return questions;
    });

    loadingPromises.set(cacheKey, promise);
    return promise;
};

/**
 * Loads all questions from all subjects and topics, caches them, and returns a shuffled subset.
 * This function handles the asynchronous loading of all question data.
 * @param allSubjects An array of all QuizSubject objects.
 * @param count The number of questions to return.
 * @returns A Promise that resolves to a shuffled array of QuizQuestion.
 */
export const getMixedQuizQuestions = async (allSubjects: QuizSubject[], count: number): Promise<QuizQuestion[]> => {
    if (allCachedQuestions === null) {
        // Collect all questionsLoader promises
        const allQuestionLoaders = allSubjects.flatMap(subject => 
            subject.topics.map(topic => loadQuestionsForTopic(topic))
        );

        // Await all promises to get all questions
        const loadedQuestionsArrays = await Promise.all(allQuestionLoaders);
        allCachedQuestions = loadedQuestionsArrays.flat();
    }
    
    // Fisher-Yates shuffle from all available questions
    const shuffled = [...allCachedQuestions!].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, count);
};

/**
 * Clears the question cache. Useful if custom quizzes are added/removed.
 */
export const clearQuestionCache = () => {
    questionsCache.clear();
    loadingPromises.clear();
    allCachedQuestions = null;
};
