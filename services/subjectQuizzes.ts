

import type { QuizQuestion, QuizSubject, QuizTopic } from '../types';

// Topic question files (now using default exports)
// Each `import()` returns a Promise that resolves to the default export

// Mathematics
const loadSimpleInterestQuestions = () => import('./subjectQuizzesData/mathematics/simpleInterestQuestions').then(module => module.default);
const loadHcfQuestions = () => import('./subjectQuizzesData/mathematics/hcfQuestions').then(module => module.default);
const loadPercentageQuestions = () => import('./subjectQuizzesData/mathematics/percentageQuestions').then(module => module.default);

// General Science
const loadTest1Questions = () => import('./subjectQuizzesData/generalScience/test1Questions').then(module => module.default);
const loadTest2Questions = () => import('./subjectQuizzesData/generalScience/test2Questions').then(module => module.default);
const loadTest3Questions = () => import('./subjectQuizzesData/generalScience/test3Questions').then(module => module.default);
const loadTest4Questions = () => import('./subjectQuizzesData/generalScience/test4Questions').then(module => module.default);
const loadTest5Questions = () => import('./subjectQuizzesData/generalScience/test5Questions').then(module => module.default);

// History
const loadHistoryRwaQuestions = () => import('./subjectQuizzesData/history/historyRwaQuestions').then(module => module.default);
const loadHistoryTest2Questions = () => import('./subjectQuizzesData/history/test2Questions').then(module => module.default);
const loadHistoryTest3Questions = () => import('./subjectQuizzesData/history/test3Questions').then(module => module.default);
const loadHistoryTest4Questions = () => import('./subjectQuizzesData/history/test4Questions').then(module => module.default);
const loadHistoryTest5Questions = () => import('./subjectQuizzesData/history/test5Questions').then(module => module.default);
const loadHistoryTest6Questions = () => import('./subjectQuizzesData/history/test6Questions').then(module => module.default);
const loadHistoryTest7Questions = () => import('./subjectQuizzesData/history/test7Questions').then(module => module.default);


// Hindi Grammar - Alphabetical
const loadAlankarQuestions = () => import('./subjectQuizzesData/hindiGrammar/alankarQuestions').then(module => module.default);
const loadAnekShabdoEkShabdQuestions = () => import('./subjectQuizzesData/hindiGrammar/anekShabdoEkShabdQuestions').then(module => module.default);
const loadAnekarthiShabdQuestions = () => import('./subjectQuizzesData/hindiGrammar/anekarthiShabdQuestions').then(module => module.default);
const loadHindiChhandQuestions = () => import('./subjectQuizzesData/hindiGrammar/chhandQuestions').then(module => module.default);
const loadHindiRachnakarQuestions = () => import('./subjectQuizzesData/hindiGrammar/hindiRachnakarQuestions').then(module => module.default);
const loadKaalQuestions = () => import('./subjectQuizzesData/hindiGrammar/kaalQuestions').then(module => module.default);
const loadKaarakQuestions = () => import('./subjectQuizzesData/hindiGrammar/kaarakQuestions').then(module => module.default);
const loadKriyaVisheshanQuestions = () => import('./subjectQuizzesData/hindiGrammar/kriyaVisheshanQuestions').then(module => module.default);
const loadLokoktiQuestions = () => import('./subjectQuizzesData/hindiGrammar/lokoktiQuestions').then(module => module.default);
const loadMuhawraQuestions = () => import('./subjectQuizzesData/hindiGrammar/muhawraQuestions').then(module => module.default);
const loadParyavachiShabdQuestions = () => import('./subjectQuizzesData/hindiGrammar/paryavachiShabdQuestions').then(module => module.default);
const loadHindiRasQuestions = () => import('./subjectQuizzesData/hindiGrammar/rasQuestions').then(module => module.default);
const loadHindiSamasQuestions = () => import('./subjectQuizzesData/hindiGrammar/samasQuestions').then(module => module.default);
const loadSandhiQuestions = () => import('./subjectQuizzesData/hindiGrammar/sandhiQuestions').then(module => module.default);
const loadSangyaQuestions = () => import('./subjectQuizzesData/hindiGrammar/sangyaQuestions').then(module => module.default);
const loadSarvnaamQuestions = () => import('./subjectQuizzesData/hindiGrammar/sarvnaamQuestions').then(module => module.default);
const loadTadbhavTatsamQuestions = () => import('./subjectQuizzesData/hindiGrammar/tadbhavTatsamQuestions').then(module => module.default);
const loadUpsargPratyayQuestions = () => import('./subjectQuizzesData/hindiGrammar/upsargPratyayQuestions').then(module => module.default);
const loadVakyaShuddhiQuestions = () => import('./subjectQuizzesData/hindiGrammar/vakyaShuddhiQuestions').then(module => module.default);
const loadVilomShabdQuestions = () => import('./subjectQuizzesData/hindiGrammar/vilomShabdQuestions').then(module => module.default);
const loadVisheshanQuestions = () => import('./subjectQuizzesData/hindiGrammar/visheshanQuestions').then(module => module.default);

// Economics
const loadEconomicsTest1Questions = () => import('./subjectQuizzesData/economics/test1Questions').then(module => module.default);
const loadEconomicsTest2Questions = () => import('./subjectQuizzesData/economics/test2Questions').then(module => module.default);
const loadEconomicsTest3Questions = () => import('./subjectQuizzesData/economics/test3Questions').then(module => module.default);
const loadEconomicsTest4Questions = () => import('./subjectQuizzesData/economics/test4Questions').then(module => module.default);
const loadEconomicsTest5Questions = () => import('./subjectQuizzesData/economics/test5Questions').then(module => module.default);
const loadEconomicsTest6Questions = () => import('./subjectQuizzesData/economics/test6Questions').then(module => module.default);
const loadEconomicsTest7Questions = () => import('./subjectQuizzesData/economics/test7Questions').then(module => module.default);
const loadEconomicsTest8Questions = () => import('./subjectQuizzesData/economics/test8Questions').then(module => module.default);
const loadEconomicsTest9Questions = () => import('./subjectQuizzesData/economics/test9Questions').then(module => module.default);
const loadEconomicsTest10Questions = () => import('./subjectQuizzesData/economics/test10Questions').then(module => module.default);


// Geography
const loadGeographyTest1Questions = () => import('./subjectQuizzesData/geography/test1Questions').then(module => module.default);
const loadGeographyTest2Questions = () => import('./subjectQuizzesData/geography/test2Questions').then(module => module.default);
const loadGeographyTest3Questions = () => import('./subjectQuizzesData/geography/test3Questions').then(module => module.default);
const loadGeographyTest4Questions = () => import('./subjectQuizzesData/geography/test4Questions').then(module => module.default);
const loadGeographyTest5Questions = () => import('./subjectQuizzesData/geography/test5Questions').then(module => module.default);
const loadGeographyTest6Questions = () => import('./subjectQuizzesData/geography/test6Questions').then(module => module.default);

// Political Science
const loadPoliticalScienceTest1Questions = () => import('./subjectQuizzesData/politicalScience/test1Questions').then(module => module.default);
const loadPoliticalScienceTest2Questions = () => import('./subjectQuizzesData/politicalScience/test2Questions').then(module => module.default);
const loadPoliticalScienceTest3Questions = () => import('./subjectQuizzesData/politicalScience/test3Questions').then(module => module.default);
const loadPoliticalScienceTest4Questions = () => import('./subjectQuizzesData/politicalScience/test4Questions').then(module => module.default);
const loadPoliticalScienceTest5Questions = () => import('./subjectQuizzesData/politicalScience/test5Questions').then(module => module.default);
const loadPoliticalScienceTest6Questions = () => import('./subjectQuizzesData/politicalScience/test6Questions').then(module => module.default);


export const subjectQuizzes: (QuizSubject & {iconEmoji?: string})[] = [
    {
        name_en: "Mathematics",
        name_hi: "गणित",
        iconEmoji: "➕", // Plus icon for math
        topics: [
            { name_en: "Simple Interest", name_hi: "साधारण ब्याज", questionsLoader: loadSimpleInterestQuestions },
            { name_en: "HCF", name_hi: "महत्तम समापवर्तक (HCF)", questionsLoader: loadHcfQuestions },
            { name_en: "Percentage", name_hi: "प्रतिशत", questionsLoader: loadPercentageQuestions },
        ]
    },
    {
        name_en: "Hindi Grammar",
        name_hi: "हिंदी व्याकरण",
        iconEmoji: "📖", // Open book for grammar
        topics: [
            { name_en: "Alankar", name_hi: "अलंकार", questionsLoader: loadAlankarQuestions },
            { name_en: "Anek Shabdo ke liye ek Shabd", name_hi: "अनेक शब्दों के लिए एक शब्द", questionsLoader: loadAnekShabdoEkShabdQuestions },
            { name_en: "Anekarthi Shabd", name_hi: "अनेकार्थी शब्द", questionsLoader: loadAnekarthiShabdQuestions },
            { name_en: "Chhand (Metre)", name_hi: "छंद", questionsLoader: loadHindiChhandQuestions },
            { name_en: "Hindi Rachnakar", name_hi: "हिंदी रचनाकार", questionsLoader: loadHindiRachnakarQuestions },
            { name_en: "Kaal", name_hi: "काल", questionsLoader: loadKaalQuestions },
            { name_en: "Kaarak", name_hi: "कारक", questionsLoader: loadKaarakQuestions },
            { name_en: "Kriya Visheshan", name_hi: "क्रिया विशेषण", questionsLoader: loadKriyaVisheshanQuestions },
            { name_en: "Lokokti", name_hi: "लोकोक्ति", questionsLoader: loadLokoktiQuestions },
            { name_en: "Muhawra", name_hi: "मुहावरा", questionsLoader: loadMuhawraQuestions },
            { name_en: "Paryavachi Shabd", name_hi: "पर्यायवाची शब्द", questionsLoader: loadParyavachiShabdQuestions },
            { name_en: "Ras (Aesthetics)", name_hi: "रस", questionsLoader: loadHindiRasQuestions },
            { name_en: "Samas (Compound Words)", name_hi: "समास", questionsLoader: loadHindiSamasQuestions },
            { name_en: "Sandhi", name_hi: "संधि", questionsLoader: loadSandhiQuestions },
            { name_en: "Sangya", name_hi: "संज्ञा", questionsLoader: loadSangyaQuestions },
            { name_en: "Sarvnaam", name_hi: "सर्वनाम", questionsLoader: loadSarvnaamQuestions },
            { name_en: "Tadbhav and Tatsam", name_hi: "तद्भव और तत्सम", questionsLoader: loadTadbhavTatsamQuestions },
            { name_en: "Upsarg evam Pratyay", name_hi: "उपसर्ग एवं प्रत्यय", questionsLoader: loadUpsargPratyayQuestions },
            { name_en: "Vakya Shuddhi", name_hi: "वाक्य शुद्धि", questionsLoader: loadVakyaShuddhiQuestions },
            { name_en: "Vilom Shabd", name_hi: "विलोम शब्द", questionsLoader: loadVilomShabdQuestions },
            { name_en: "Visheshan", name_hi: "विशेषण", questionsLoader: loadVisheshanQuestions },
        ]
    },
    {
        name_en: "General Science",
        name_hi: "सामान्य विज्ञान",
        iconEmoji: "🔬", // Microscope for science
        topics: [
            { name_en: "General Science Test 1", name_hi: "सामान्य विज्ञान टेस्ट 1", questionsLoader: loadTest1Questions },
            { name_en: "General Science Test 2", name_hi: "सामान्य विज्ञान टेस्ट 2", questionsLoader: loadTest2Questions },
            { name_en: "General Science Test 3", name_hi: "सामान्य विज्ञान टेस्ट 3", questionsLoader: loadTest3Questions },
            { name_en: "General Science Test 4", name_hi: "सामान्य विज्ञान टेस्ट 4", questionsLoader: loadTest4Questions },
            { name_en: "General Science Test 5", name_hi: "सामान्य विज्ञान टेस्ट 5", questionsLoader: loadTest5Questions },
        ] 
    },
    {
        name_en: "History",
        name_hi: "इतिहास",
        iconEmoji: "📜", // Scroll for history
        topics: [
            { name_en: "History Rwa", name_hi: "हिस्ट्री Rwa", questionsLoader: loadHistoryRwaQuestions },
            { name_en: "History Test 2", name_hi: "इतिहास टेस्ट 2", questionsLoader: loadHistoryTest2Questions },
            { name_en: "History Test 3", name_hi: "इतिहास टेस्ट 3", questionsLoader: loadHistoryTest3Questions },
            { name_en: "History Test 4", name_hi: "इतिहास टेस्ट 4", questionsLoader: loadHistoryTest4Questions },
            { name_en: "History Test 5", name_hi: "इतिहास टेस्ट 5", questionsLoader: loadHistoryTest5Questions },
            { name_en: "History Test 6", name_hi: "इतिहास टेस्ट 6", questionsLoader: loadHistoryTest6Questions },
            { name_en: "History Test 7", name_hi: "इतिहास टेस्ट 7", questionsLoader: loadHistoryTest7Questions },
        ]
    },
    {
        name_en: "Economics",
        name_hi: "अर्थशास्त्र",
        iconEmoji: "📈", // Stock chart for economics
        topics: [
            { name_en: "Economics Test 1", name_hi: "अर्थशास्त्र टेस्ट 1", questionsLoader: loadEconomicsTest1Questions },
            { name_en: "Economics Test 2", name_hi: "अर्थशास्त्र टेस्ट 2", questionsLoader: loadEconomicsTest2Questions },
            { name_en: "Economics Test 3", name_hi: "अर्थशास्त्र टेस्ट 3", questionsLoader: loadEconomicsTest3Questions },
            { name_en: "Economics Test 4", name_hi: "अर्थशास्त्र टेस्ट 4", questionsLoader: loadEconomicsTest4Questions },
            { name_en: "Economics Test 5", name_hi: "अर्थशास्त्र टेस्ट 5", questionsLoader: loadEconomicsTest5Questions },
            { name_en: "Economics Test 6", name_hi: "अर्थशास्त्र टेस्ट 6", questionsLoader: loadEconomicsTest6Questions },
            { name_en: "Economics Test 7", name_hi: "अर्थशास्त्र टेस्ट 7", questionsLoader: loadEconomicsTest7Questions },
            { name_en: "Economics Test 8", name_hi: "अर्थशास्त्र टेस्ट 8", questionsLoader: loadEconomicsTest8Questions },
            { name_en: "Economics Test 9", name_hi: "अर्थशास्त्र टेस्ट 9", questionsLoader: loadEconomicsTest9Questions },
            { name_en: "Economics Test 10", name_hi: "अर्थशास्त्र टेस्ट 10", questionsLoader: loadEconomicsTest10Questions },
        ]
    },
    {
        name_en: "Geography",
        name_hi: "भूगोल",
        iconEmoji: "🌍", // Earth globe for geography
        topics: [
            { name_en: "Geography Test 1", name_hi: "भूगोल टेस्ट 1", questionsLoader: loadGeographyTest1Questions },
            { name_en: "Geography Test 2", name_hi: "भूगोल टेस्ट 2", questionsLoader: loadGeographyTest2Questions },
            { name_en: "Geography Test 3", name_hi: "भूगोल टेस्ट 3", questionsLoader: loadGeographyTest3Questions },
            { name_en: "Geography Test 4", name_hi: "भूगोल टेस्ट 4", questionsLoader: loadGeographyTest4Questions },
            { name_en: "Geography Test 5", name_hi: "भूगोल टेस्ट 5", questionsLoader: loadGeographyTest5Questions },
            { name_en: "Geography Test 6", name_hi: "भूगोल टेस्ट 6", questionsLoader: loadGeographyTest6Questions },
        ]
    },
    {
        name_en: "Political Science",
        name_hi: "राजनीति विज्ञान",
        iconEmoji: "🏛️", // Classical building for politics/law
        topics: [
            { name_en: "Political Science Test 1", name_hi: "राजनीति विज्ञान टेस्ट 1", questionsLoader: loadPoliticalScienceTest1Questions },
            { name_en: "Political Science Test 2", name_hi: "राजनीति विज्ञान टेस्ट 2", questionsLoader: loadPoliticalScienceTest2Questions },
            { name_en: "Political Science Test 3", name_hi: "राजनीति विज्ञान टेस्ट 3", questionsLoader: loadPoliticalScienceTest3Questions },
            { name_en: "Political Science Test 4", name_hi: "राजनीति विज्ञान टेस्ट 4", questionsLoader: loadPoliticalScienceTest4Questions },
            { name_en: "Political Science Test 5", name_hi: "राजनीति विज्ञान टेस्ट 5", questionsLoader: loadPoliticalScienceTest5Questions },
            { name_en: "Political Science Test 6", name_hi: "राजनीति विज्ञान टेस्ट 6", questionsLoader: loadPoliticalScienceTest6Questions },
        ]
    },
    {
        name_en: "General Knowledge",
        name_hi: "सामान्य ज्ञान",
        iconEmoji: "🧠", // Brain for general knowledge
        topics: []
    },
    {
        name_en: "Mixed Quiz",
        name_hi: "मिश्रित प्रश्नोत्तरी",
        iconEmoji: "🔀", // Shuffle icon for mixed content
        topics: [] // This is a special entry for the mixed quiz button
    }
];

// NOTE: getMixedQuizQuestions and custom quiz handling moved to quizDataService.ts
// to centralize dynamic loading logic.