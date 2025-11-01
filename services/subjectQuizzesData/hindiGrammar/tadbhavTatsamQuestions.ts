import type { QuizQuestion } from '../../../types';

/*
INSTRUCTIONS TO ADD QUESTIONS:

You can use the following prompt with an AI (like Gemini) to generate questions in the correct format.
Replace the [TOPIC] and [NUMBER_OF_QUESTIONS] placeholders with your desired values. For your request, use [Tatsam and Tadbhav words in Hindi Grammar] and [100].

====================================================================================================

AI PROMPT:

Generate [NUMBER_OF_QUESTIONS] multiple-choice questions about [TOPIC].
Each question must be bilingual (English and academic Hindi) and suitable for competitive exam preparation.
For each question, provide:
1. `question_en`: The question in English.
2. `question_hi`: The question in academic Hindi.
3. `options_en`: An array of four distinct multiple-choice options in English.
4. `options_hi`: The same four options translated into academic Hindi, in the same order.
5. `correct_option_index`: The 0-based index of the correct option (0, 1, 2, or 3).
6. `explanation_en`: A clear and concise explanation for the correct answer in English.
7. `explanation_hi`: The same explanation translated into academic Hindi.

Provide the output as a single, valid JavaScript/TypeScript array of objects, with no surrounding text or markdown formatting.

Here is an example of a single object's structure:
{
    "question_en": "What is the correct Tadbhava form of the Tatsam word 'Karma'?",
    "question_hi": "कर्म (Tatsam) शब्द का सही तद्भव रूप क्या है?",
    "options_en": ["Kān (Ear)", "Kāraṇ (Reason)", "Kām (Work)", "Kārīgar (Artisan)"],
    "options_hi": ["कान", "कारण", "काम", "कारीगर"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Karma' (Tatsam) is 'Kām', which is used in Hindi literature and social contexts.",
    "explanation_hi": "'कर्म' (Tatsam) का तद्भव रूप 'काम' होता है, जिसका उपयोग हिंदी साहित्य और सामाजिक संदर्भों में होता है।"
}

====================================================================================================

Once you have the generated array, paste it below, replacing the empty array [].
*/

const tatsamTadbhavQuestions: QuizQuestion[] = [
  {
    "question_en": "What is the correct Tadbhava form of the Tatsam word 'Karma'?",
    "question_hi": "कर्म (Tatsam) शब्द का सही तद्भव रूप क्या है?",
    "options_en": ["Kān (Ear)", "Kāraṇ (Reason)", "Kām (Work)", "Kārīgar (Artisan)"],
    "options_hi": ["कान", "कारण", "काम", "कारीगर"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Karma' (Tatsam) is 'Kām', which is used in Hindi literature and social contexts.",
    "explanation_hi": "'कर्म' (Tatsam) का तद्भव रूप 'काम' होता है, जिसका उपयोग हिंदी साहित्य और सामाजिक संदर्भों में होता है।"
  },
  {
    "question_en": "Which of the following is the Tadbhava form of 'Danta' (Tatsam)?",
    "question_hi": "दन्त (Tatsam) का तद्भव रूप निम्नलिखित में से क्या है?",
    "options_en": ["Dāyīṇ (Right)", "Dahī (Curd)", "Dānt (Tooth)", "Das (Ten)"],
    "options_hi": ["दायीं", "दही", "दाँत", "दस"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Danta' is 'Dānt'.",
    "explanation_hi": "'दन्त' का तद्भव 'दाँत' होता है।"
  },
  {
    "question_en": "What will be the Tadbhava form of the Tatsam word 'Kṣetra'?",
    "question_hi": "क्षेत्र (Tatsam) शब्द का तद्भव रूप क्या होगा?",
    "options_en": ["Khittā (Region/Area)", "Khāṭ (Cot)", "Khet (Field)", "Kṣetrīya (Regional)"],
    "options_hi": ["खित्ता", "खाट", "खेत", "क्षेत्रीय"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Kṣetra' (meaning area, land) is 'Khet'.",
    "explanation_hi": "'क्षेत्र' (अर्थात इलाका, भूमि) का तद्भव 'खेत' है।"
  },
  {
    "question_en": "Identify the Tadbhava form of 'Sarpa' (Tatsam).",
    "question_hi": "सर्प (Tatsam) का तद्भव रूप पहचानिए।",
    "options_en": ["Saraltā (Simplicity)", "Sānp (Snake)", "Sonp (Aniseed)", "Sarāy (Inn)"],
    "options_hi": ["सरलता", "साँप", "सोंप", "सराय"],
    "correct_option_index": 1,
    "explanation_en": "This is the Tadbhava form of the Sanskrit 'Sarpa' (mention of animals in the source).",
    "explanation_hi": "यह संस्कृत के 'सर्प' का तद्भव रूप है (स्रोत में जीवों का उल्लेख है)।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Śira' (Tatsam)?",
    "question_hi": "शिर (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Śīsh (Head - poetic)", "Sir (Head)", "Śikār (Hunt)", "Śīlā (Stone)"],
    "options_hi": ["शीश", "सिर", "शिकार", "शीला"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava form of 'Śira' is 'Sir'.",
    "explanation_hi": "'शिर' का तद्भव 'सिर' होता है।"
  },
  {
    "question_en": "What will be the Tadbhava form of the Tatsam word 'Gṛha'?",
    "question_hi": "गृह (Tatsam) शब्द का तद्भव रूप क्या होगा?",
    "options_en": ["Grām (Village)", "Guhā (Cave)", "Ghar (House)", "Gṛhasthī (Household)"],
    "options_hi": ["ग्राम", "गुहा", "घर", "गृहस्थी"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Gṛha' is 'Ghar'.",
    "explanation_hi": "'गृह' का तद्भव 'घर' है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Agni' (Tatsam)?",
    "question_hi": "अग्नि (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Angār (Ember)", "Anal (Fire - synonym)", "Āg (Fire)", "Angūṭhā (Thumb)"],
    "options_hi": ["अंगार", "अनल", "आग", "अंगूठा"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Agni' is 'Āg'.",
    "explanation_hi": "'अग्नि' का तद्भव 'आग' है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Dugdha' (Tatsam)?",
    "question_hi": "दुग्ध (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Dūdhiyā (Milky)", "Dūdh (Milk)", "Dohan (Milking)", "Dvār (Door)"],
    "options_hi": ["दूधिया", "दूध", "दोहन", "द्वार"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava form of 'Dugdha' is 'Dūdh'.",
    "explanation_hi": "'दुग्ध' का तद्भव 'दूध' होता है।"
  },
  {
    "question_en": "The Tadbhava form of 'Kūpa' (Tatsam) is:",
    "question_hi": "कूप (Tatsam) का तद्भव रूप है:",
    "options_en": ["Kupath (Wrong path)", "Kānp (Shiver)", "Kuāṇ (Well)", "Kṛṣak (Farmer)"],
    "options_hi": ["कुपथ", "काँप", "कुआँ", "कृषक"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Kūpa' is 'Kuāṇ' (mention of 'wells' in the source).",
    "explanation_hi": "'कूप' का तद्भव 'कुआँ' होता है (स्रोत में 'कुएँ' का उल्लेख है)।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Vastra' (Tatsam)?",
    "question_hi": "वस्त्र (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Bistar (Bedding)", "Bās (Smell/Residence)", "Kapaṛā (Cloth)", "Vas (Live/Dwell)"],
    "options_hi": ["बिस्तर", "बास", "कपड़ा", "वस"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Vastra' is 'Kapaṛā'.",
    "explanation_hi": "'वस्त्र' का तद्भव 'कपड़ा' है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Māsa' (Tatsam)?",
    "question_hi": "मास (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Māsiyā (Monthly)", "Mahīnā (Month)", "Samay (Time)", "Mahā (Great)"],
    "options_hi": ["मासिया", "महीना", "समय", "महा"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava form of 'Māsa' (month) is 'Mahīnā'.",
    "explanation_hi": "'मास' (महीना) का तद्भव 'महीना' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Puṣpa' (Tatsam)?",
    "question_hi": "पुष्प (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Pānkhuṛī (Petal)", "Puṣpikā (Small flower)", "Phūl (Flower)", "Phulāv (Swelling)"],
    "options_hi": ["पाँखुरी", "पुष्पिका", "फूल", "फुलाव"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Puṣpa' is 'Phūl'.",
    "explanation_hi": "'पुष्प' का तद्भव 'फूल' है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Mātṛ' (Tatsam)?",
    "question_hi": "मातृ (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Māt (Defeat)", "Mātā (Mother - formal)", "Māṇ (Mother)", "Mātṛbhūmi (Motherland)"],
    "options_hi": ["मात", "माता", "माँ", "मातृभूमि"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Mātṛ' is 'Māṇ'.",
    "explanation_hi": "'मातृ' का तद्भव 'माँ' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Śrāvaṇa' (Tatsam)?",
    "question_hi": "श्रावण (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Śravaṇa (Hearing)", "Sāvan (Month of Shravan)", "Sāraṇ (Substance)", "Śrāddha (Ritual for ancestors)"],
    "options_hi": ["श्रवण", "सावन", "सारण", "श्राद्ध"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava form of 'Śrāvaṇa' is 'Sāvan', which is mentioned in the Indian calendar.",
    "explanation_hi": "'श्रावण' का तद्भव 'सावन' होता है, जिसका उल्लेख भारतीय कैलेंडर में है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Vadhū' (Tatsam)?",
    "question_hi": "वधू (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Vidhātā (Creator)", "Vivāh (Marriage)", "Bahū (Bride/Daughter-in-law)", "Var (Groom)"],
    "options_hi": ["विधाता", "विवाह", "बहू", "वर"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Vadhū' is 'Bahū'.",
    "explanation_hi": "'वधू' का तद्भव 'बहू' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Prastara' (Tatsam)?",
    "question_hi": "प्रस्तर (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Pṛṣṭha (Back/Page)", "Pāṣāṇa (Stone - synonym)", "Patthar (Stone)", "Prakāsh (Light)"],
    "options_hi": ["पृष्ठ", "पाषाण", "पत्थर", "प्रकाश"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Prastara' is 'Patthar'.",
    "explanation_hi": "'प्रस्तर' का तद्भव 'पत्थर' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Chūrṇa' (Tatsam)?",
    "question_hi": "चूर्ण (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Charaṇ (Foot)", "Chauṛā (Wide)", "Chūnā (Lime/Powder)", "Chonch (Beak)"],
    "options_hi": ["चरण", "चौड़ा", "चूना", "चोंच"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Chūrṇa' is 'Chūnā' (in the context of limestone and powders of food items).",
    "explanation_hi": "'चूर्ण' का तद्भव 'चूना' होता है (चूना-पत्थर और खाद्य पदार्थों के चूर्ण के संदर्भ में)।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Vasanta' (Tatsam)?",
    "question_hi": "वसंत (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Vāsanā (Desire)", "Sāvan (Month of Shravan)", "Basant (Spring)", "Vishāl (Vast)"],
    "options_hi": ["वासना", "सावन", "बसंत", "विशाल"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Vasanta' is 'Basant'.",
    "explanation_hi": "'वसंत' का तद्भव 'बसंत' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Svarṇa' (Tatsam)?",
    "question_hi": "स्वर्ण (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Suvarṇa (Gold - synonym)", "Rajat (Silver)", "Sonā (Gold)", "Sanchay (Accumulation)"],
    "options_hi": ["सुवर्ण", "रजत", "सोना", "संचय"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Svarṇa' is 'Sonā'.",
    "explanation_hi": "'स्वर्ण' का तद्भव 'सोना' होता है।"
  },
  {
    "question_en": "Identify the Tadbhava form of 'Dadhi' (Tatsam).",
    "question_hi": "दधि (Tatsam) का तद्भव रूप पहचानिए।",
    "options_en": ["Dātā (Giver)", "Dāl (Lentil)", "Dahī (Curd)", "Dūdh (Milk)"],
    "options_hi": ["दाता", "दाल", "दही", "दूध"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Dadhi' is 'Dahī'.",
    "explanation_hi": "'दधि' का तद्भव 'दही' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Taila' (Tatsam)?",
    "question_hi": "तैल (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Taral (Liquid)", "Tez (Fast/Sharp)", "Tel (Oil)", "Tol (Weight)"],
    "options_hi": ["तरल", "तेज़", "तेल", "तोल"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Taila' is 'Tel'.",
    "explanation_hi": "'तैल' का तद्भव 'तेल' है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Kāṣṭha' (Tatsam)?",
    "question_hi": "काष्ठ (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Kaṭhin (Difficult)", "Kaṣṭa (Trouble)", "Kāṭh (Wood)", "Kīchaṛ (Mud)"],
    "options_hi": ["कठिन", "कष्ट", "काठ", "कीचड़"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Kāṣṭha' (wood) is 'Kāṭh'.",
    "explanation_hi": "'काष्ठ' (लकड़ी) का तद्भव 'काठ' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Nidrā' (Tatsam)?",
    "question_hi": "निद्रा (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Nirdoṣ (Innocent)", "Nīnd (Sleep)", "Nishā (Night)", "Nitya (Daily)"],
    "options_hi": ["निर्दोष", "नींद", "निशा", "नित्य"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava form of 'Nidrā' is 'Nīnd'.",
    "explanation_hi": "'निद्रा' का तद्भव 'नींद' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Aśru' (Tatsam)?",
    "question_hi": "अश्रु (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Āścarya (Surprise)", "Aśubh (Inauspicious)", "Ānsū (Tear)", "Antar (Difference)"],
    "options_hi": ["आश्चर्य", "अशुभ", "आँसू", "अंतर"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Aśru' is 'Ānsū'.",
    "explanation_hi": "'अश्रु' का तद्भव 'आँसू' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Sūrya' (Tatsam)?",
    "question_hi": "सूर्य (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Saur (Solar)", "Sūraj (Sun)", "Sadā (Always)", "Saritā (River)"],
    "options_hi": ["सौर", "सूरज", "सदा", "सरिता"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava form of 'Sūrya' is 'Sūraj'.",
    "explanation_hi": "'सूर्य' का तद्भव 'सूरज' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Hasta' (Tatsam)?",
    "question_hi": "हस्त (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Hastī (Elephant)", "Hari (Lord Vishnu/Monkey)", "Hāth (Hand)", "Hauslā (Courage)"],
    "options_hi": ["हस्ती", "हरि", "हाथ", "हौसला"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Hasta' is 'Hāth'.",
    "explanation_hi": "'हस्त' का तद्भव 'हाथ' होता है।"
  },
  {
    "question_en": "Identify the Tadbhava form of 'Karpūra' (Tatsam).",
    "question_hi": "कर्पूर (Tatsam) का तद्भव रूप पहचानिए।",
    "options_en": ["Karp", "Kapūr (Camphor)", "Kārak (Case)", "Kārya (Work)"],
    "options_hi": ["कर्प", "कपूर", "कारक", "कार्य"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava form of 'Karpūra' is 'Kapūr'.",
    "explanation_hi": "'कर्पूर' का तद्भव 'कपूर' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Grāma' (Tatsam)?",
    "question_hi": "ग्राम (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Grāmya (Rural)", "Gāṇv (Village)", "Gaman (Going)", "Gochar (Pasture)"],
    "options_hi": ["ग्राम्य", "गाँव", "गमन", "गोचर"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava form of 'Grāma' is 'Gāṇv'.",
    "explanation_hi": "'ग्राम' का तद्भव 'गाँव' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Kuputra' (Tatsam)?",
    "question_hi": "कुपुत्र (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Putra (Son)", "Suputra (Good son)", "Kapūt (Bad son)", "Kuṭil (Crooked)"],
    "options_hi": ["पुत्र", "सुपुत्र", "कपूत", "कुटिल"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Kuputra' is 'Kapūt'.",
    "explanation_hi": "'कुपुत्र' का तद्भव 'कपूत' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Bhrātṛ' (Tatsam)?",
    "question_hi": "भ्रातृ (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Bhadra (Gentle)", "Bhāī (Brother)", "Bhrātā (Brother - formal)", "Bhīti (Fear)"],
    "options_hi": ["भद्र", "भाई", "भ्राता", "भीति"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava form of 'Bhrātṛ' is 'Bhāī'.",
    "explanation_hi": "'भ्रातृ' का तद्भव 'भाई' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Adya' (Tatsam)?",
    "question_hi": "अद्य (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Idya", "Āj (Today)", "Abhī (Now)", "Ada"],
    "options_hi": ["इद्य", "आज", "अभी", "अद"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava form of 'Adya' is 'Āj'.",
    "explanation_hi": "'अद्य' का तद्भव 'आज' है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Bhikṣā' (Tatsam)?",
    "question_hi": "भिक्षा (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Bhikhārī (Beggar)", "Bhīkh (Alms)", "Bhikṣuk (Beggar - Tatsam)", "Bhojan (Food)"],
    "options_hi": ["भिखारी", "भीख", "भिक्षुक", "भोजन"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava form of 'Bhikṣā' is 'Bhīkh'.",
    "explanation_hi": "'भिक्षा' का तद्भव 'भीख' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Pāda' (Tatsam)?",
    "question_hi": "पाद (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Padya (Verse)", "Pādap (Plant)", "Pair (Foot/Leg)", "Pakṣa (Side)"],
    "options_hi": ["पद्य", "पादप", "पैर", "पक्ष"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Pāda' is 'Pair'.",
    "explanation_hi": "'पाद' का तद्भव 'पैर' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Śata' (Tatsam)?",
    "question_hi": "शत (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Sau (Hundred)", "Sāt (Seven)", "Śānti (Peace)", "Śūnya (Zero)"],
    "options_hi": ["सौ", "सात", "शांति", "शून्य"],
    "correct_option_index": 0,
    "explanation_en": "The Tadbhava form of 'Śata' is 'Sau' (mention of number 100).",
    "explanation_hi": "'शत' का तद्भव 'सौ' होता है (संख्या 100 का उल्लेख है)।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Kaṭu' (Tatsam)?",
    "question_hi": "कटु (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Kāṭnā (To cut)", "Kaṛvā (Bitter)", "Kaṭāī (Cutting)", "Komal (Soft)"],
    "options_hi": ["काटना", "कड़वा", "कटाई", "कोमल"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava form of 'Kaṭu' is 'Kaṛvā'.",
    "explanation_hi": "'कटु' का तद्भव 'कड़वा' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Kokila' (Tatsam)?",
    "question_hi": "कोकिल (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Kokilak", "Kākā (Crow - alt.)", "Koyal (Cuckoo)", "Kauvā (Crow)"],
    "options_hi": ["कोकिलक", "काका", "कोयल", "कौवा"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Kokila' is 'Koyal'.",
    "explanation_hi": "'कोकिल' का तद्भव 'कोयल' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Āmra' (Tatsam)?",
    "question_hi": "आम्र (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Amar (Immortal)", "Ām (Mango)", "Āmla (Sour)", "Amiy (Nectar)"],
    "options_hi": ["अमर", "आम", "आम्ल", "अमिय"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava form of 'Āmra' is 'Ām'.",
    "explanation_hi": "'आम्र' का तद्भव 'आम' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Parṇa' (Tatsam)?",
    "question_hi": "पर्ण (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Pavan (Wind)", "Pattā (Leaf)", "Pāraṇā (Breaking fast)", "Par (On/But)"],
    "options_hi": ["पवन", "पत्ता", "पारणा", "पर"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava form of 'Parṇa' is 'Pattā'.",
    "explanation_hi": "'पर्ण' का तद्भव 'पत्ता' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Janma' (Tatsam)?",
    "question_hi": "जन्म (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Jānā (To go)", "Janam (Birth)", "Janmanā (By birth)", "Jīv (Life)"],
    "options_hi": ["जाना", "जनम", "जन्मना", "जीव"],
    "correct_option_index": 1,
    "explanation_en": "The common Tadbhava form of 'Janma' (Tatsam) is 'Janam'.",
    "explanation_hi": "'जन्म' (Tatsam) का सामान्य तद्भव रूप 'जनम' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Tīrtha' (Tatsam)?",
    "question_hi": "तीर्थ (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Tīr (Arrow)", "Tīrath (Pilgrimage site)", "Tīrath (duplicate)", "Tray (Three)"],
    "options_hi": ["तीर", "तीरथ", "तीरथ", "त्रय"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava form of 'Tīrtha' (pilgrimage site) is 'Tīrath'.",
    "explanation_hi": "'तीर्थ' (तीर्थ-स्थल) का तद्भव 'तीरथ' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Jīrṇa' (Tatsam)?",
    "question_hi": "जीर्ण (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Jīnā (To live)", "Jhīnā (Old/Worn out)", "Jīrṇatā (Dilapidation)", "Juā (Gambling)"],
    "options_hi": ["जीना", "झीना", "जीर्णता", "जुआ"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava form of 'Jīrṇa' is 'Jhīnā'.",
    "explanation_hi": "'जीर्ण' का तद्भव 'झीना' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Tikta' (Tatsam)?",
    "question_hi": "तिक्त (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Taral (Liquid)", "Tītā/Tīkhā (Bitter/Pungent)", "Tej (Fast/Sharp)", "Taṭ (Bank/Shore)"],
    "options_hi": ["तरल", "तीता/तीखा", "तेज", "तट"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava form of 'Tikta' is 'Tītā/Tīkhā'.",
    "explanation_hi": "'तिक्त' का तद्भव 'तीता/तीखा' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Ghṛta' (Tatsam)?",
    "question_hi": "घृत (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Ghan (Dense)", "Ghonṭnā (To strangle)", "Ghī (Ghee/Clarified butter)", "Ghor (Terrible)"],
    "options_hi": ["घन", "घोंटना", "घी", "घोर"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Ghṛta' is 'Ghī'.",
    "explanation_hi": "'घृत' का तद्भव 'घी' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Yamunā' (Tatsam)?",
    "question_hi": "यमुना (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Yog (Yoga)", "Yām (A period of 3 hours)", "Jamunā", "Yukti (Trick)"],
    "options_hi": ["योग", "याम", "जमुना", "युक्ति"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Yamunā' is 'Jamunā'.",
    "explanation_hi": "'यमुना' का तद्भव 'जमुना' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Ikṣu' (Tatsam)?",
    "question_hi": "इक्षु (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Ichchhā (Wish)", "Ikṣit (Seen)", "Īkh (Sugarcane)", "Ihalok (This world)"],
    "options_hi": ["इच्छा", "इक्षित", "ईख", "इहलोक"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Ikṣu' (sugarcane) is 'Īkh'.",
    "explanation_hi": "'इक्षु' (गन्ना) का तद्भव 'ईख' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Vakta' (Tatsam)?",
    "question_hi": "वक्त (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Samay (Time)", "Vakt (Time)", "Waqt (Time)", "Kāl (Time)"],
    "options_hi": ["समय", "वक्त", "वक़त", "काल"],
    "correct_option_index": 1,
    "explanation_en": "The word 'Vakt' (time) is used in Hindi as Tatsam, although its origin is Arabic/Persian (mention of time/period in context).",
    "explanation_hi": "'वक्त' (समय) शब्द का प्रयोग हिन्दी में तत्सम के रूप में किया जाता है, यद्यपि इसका मूल अरबी/फ़ारसी है (संदर्भ में काल/समय का उल्लेख है)।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Matsya' (Tatsam)?",
    "question_hi": "मत्स्य (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Matya", "Māns (Meat)", "Machhlī (Fish)", "Makṣikā (Fly)"],
    "options_hi": ["मत्य", "मांस", "मछली", "मक्षिका"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Matsya' is 'Machhlī'.",
    "explanation_hi": "'मत्स्य' का तद्भव 'मछली' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Mṛtyu' (Tatsam)?",
    "question_hi": "मृत्यु (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Marnā (To die)", "Maraṇ (Death)", "Maut (Death)", "Mart"],
    "options_hi": ["मरना", "मरण", "मौत", "मर्त"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Mṛtyu' is 'Maut'.",
    "explanation_hi": "'मृत्यु' का तद्भव 'मौत' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Nāsika' (Tatsam)?",
    "question_hi": "नासिक (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Nashā (Intoxication)", "Nāsikā (Nose - Tatsam)", "Nāk (Nose)", "Nāsh (Destruction)"],
    "options_hi": ["नशा", "नासिका", "नाक", "नाश"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Nāsika' is 'Nāk'.",
    "explanation_hi": "'नासिक' का तद्भव 'नाक' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Chandra' (Tatsam)?",
    "question_hi": "चन्द्र (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Chandra", "Chandramā (Moon - Tatsam)", "Chānd (Moon)", "Chaman (Garden)"],
    "options_hi": ["चंद्र", "चंद्रमा", "चाँद", "चमन"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Chandra' is 'Chānd' (mention of moon in sources).",
    "explanation_hi": "'चन्द्र' का तद्भव 'चाँद' होता है (स्रोतों में चंद्रमा का उल्लेख है)।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Hṛdaya' (Tatsam)?",
    "question_hi": "हृदय (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Hṛdayak", "Hiya/Hiyā (Heart)", "Hār (Defeat/Necklace)", "Hrasva (Short)"],
    "options_hi": ["हृदयक", "हिय/हिया", "हार", "ह्रस्व"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava form of 'Hṛdaya' is 'Hiya/Hiyā' (mention of 'Hṛdayak' in source).",
    "explanation_hi": "'हृदय' का तद्भव 'हिय/हिया' होता है (स्रोत में 'हृदयक' का उल्लेख है)।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Śṛṅgāra' (Tatsam)?",
    "question_hi": "शृंगार (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Śṛṅga (Horn)", "Śaurya (Valor)", "Singār (Make-up/Adornment)", "Śayan (Sleeping)"],
    "options_hi": ["श्रृंग", "शौर्य", "सिंगार", "शयन"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Śṛṅgāra' is 'Singār'.",
    "explanation_hi": "'शृंगार' का तद्भव 'सिंगार' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Bhramara' (Tatsam)?",
    "question_hi": "भ्रमर (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Bhramaṇ (Wandering)", "Bhanvarā (Bumblebee - alt.)", "Bhaunrā (Bumblebee)", "Bhārī (Heavy)"],
    "options_hi": ["भ्रमण", "भंवरा", "भौंरा", "भारी"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Bhramara' is 'Bhaunrā'.",
    "explanation_hi": "'भ्रमर' का तद्भव 'भौंरा' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Gardabha' (Tatsam)?",
    "question_hi": "गर्दभ (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Gīdaṛ (Jackal)", "Gadhā (Donkey)", "Gāy (Cow)", "Godhan (Cattle wealth)"],
    "options_hi": ["गीदड़", "गधा", "गाय", "गोधन"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava form of 'Gardabha' is 'Gadhā'.",
    "explanation_hi": "'गर्दभ' का तद्भव 'गधा' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Bhrū' (Tatsam)?",
    "question_hi": "भ्रू (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Bhrātā (Brother)", "Bhāī (Brother)", "Bhaunh (Eyebrow)", "Bhor (Dawn)"],
    "options_hi": ["भ्राता", "भाई", "भौंह", "भोर"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Bhrū' is 'Bhaunh'.",
    "explanation_hi": "'भ्रू' का तद्भव 'भौंह' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Śyāmala' (Tatsam)?",
    "question_hi": "श्यामल (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Śyām (Dark/Krishna)", "Śītalatā (Coolness)", "Sānvalā (Dark-complexioned)", "Śānt (Calm)"],
    "options_hi": ["श्याम", "शीतलता", "साँवला", "शांत"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Śyāmala' is 'Sānvalā'.",
    "explanation_hi": "'श्यामल' का तद्भव 'साँवला' होता है।"
  },
  {
    "question_en": "What is the correct Tatsam form of 'Lohā' (Tadbhav)?",
    "question_hi": "लोहा (Tadbhav) का सही तत्सम रूप क्या है?",
    "options_en": ["Lohe", "Lochan (Eye)", "Loha (Iron)", "Lavaṇa (Salt)"],
    "options_hi": ["लोहे", "लोचन", "लोह", "लवण"],
    "correct_option_index": 2,
    "explanation_en": "The Tatsam form of 'Lohā' is 'Loha'.",
    "explanation_hi": "'लोहा' का तत्सम 'लोह' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Aṅguli' (Tatsam)?",
    "question_hi": "अंगुलि (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Anga (Part)", "Angūṭhī (Ring)", "Ungalī (Finger)", "Angār (Ember)"],
    "options_hi": ["अंग", "अंगूठी", "उंगली", "अंगार"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Aṅguli' is 'Ungalī'.",
    "explanation_hi": "'अंगुलि' का तद्भव 'उंगली' होता है।"
  },
  {
    "question_en": "What is the correct Tatsam form of 'Ām' (Tadbhav)?",
    "question_hi": "आम (Tadbhav) का सही तत्सम रूप क्या है?",
    "options_en": ["Āmra (Mango)", "Āmla (Sour)", "Amar (Immortal)", "Amol (Priceless)"],
    "options_hi": ["आम्र", "आम्ल", "अमर", "अमोल"],
    "correct_option_index": 0,
    "explanation_en": "The Tatsam form of 'Ām' is 'Āmra'.",
    "explanation_hi": "'आम' का तत्सम 'आम्र' है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Asthi' (Tatsam)?",
    "question_hi": "अस्थि (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Āsthi", "Haḍḍī (Bone)", "Asthir (Unstable)", "Haṭh (Stubbornness)"],
    "options_hi": ["आस्थि", "हड्डी", "अस्थिर", "हठ"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava form of 'Asthi' is 'Haḍḍī'.",
    "explanation_hi": "'अस्थि' का तद्भव 'हड्डी' होता है।"
  },
  {
    "question_en": "What is the Tatsam form of 'Āj' (Tadbhav)?",
    "question_hi": "आज (Tadbhav) का तत्सम रूप क्या है?",
    "options_en": ["Idya", "Adya (Today)", "Addyā", "Ājya"],
    "options_hi": ["इद्य", "अद्य", "अद्द्या", "आज्य"],
    "correct_option_index": 1,
    "explanation_en": "The Tatsam form of 'Āj' is 'Adya'.",
    "explanation_hi": "'आज' का तत्सम 'अद्य' है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Godhūma' (Tatsam)?",
    "question_hi": "गोधूम (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Gāy (Cow)", "Gehūṇ (Wheat)", "Gobar (Cow dung)", "Godhūli (Dusk)"],
    "options_hi": ["गाय", "गेहूँ", "गोबर", "गोधूलि"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava form of 'Godhūma' is 'Gehūṇ'.",
    "explanation_hi": "'गोधूम' का तद्भव 'गेहूँ' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Satya' (Tatsam)?",
    "question_hi": "सत्य (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Sadā (Always)", "Santāp (Grief)", "Sach (Truth)", "Santoṣ (Satisfaction)"],
    "options_hi": ["सदा", "संताप", "सच", "संतोष"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Satya' is 'Sach'.",
    "explanation_hi": "'सत्य' का तद्भव 'सच' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Pakṣī' (Tatsam)?",
    "question_hi": "पक्षी (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Pankh (Wing)", "Pakṣī (Bird - Tatsam)", "Panchhī (Bird)", "Pavan (Wind)"],
    "options_hi": ["पंख", "पक्षी", "पंछी", "पवन"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Pakṣī' is 'Panchhī'.",
    "explanation_hi": "'पक्षी' का तद्भव 'पंछी' होता है।"
  },
  {
    "question_en": "The Tadbhava form of 'Vadhū' (Tatsam) is 'Bahū'. What is the Tadbhava form of 'Putrī' (Tatsam)?",
    "question_hi": "वधू (Tatsam) का तद्भव रूप 'बहू' है। पुत्री (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Putra (Son)", "Putrī (Daughter - Tatsam)", "Pūtī (Daughter)", "Piyā (Beloved)"],
    "options_hi": ["पुत्र", "पुत्री", "पूती", "पिया"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Putrī' is 'Pūtī'.",
    "explanation_hi": "'पुत्री' का तद्भव 'पूती' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Charma' (Tatsam)?",
    "question_hi": "चर्म (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Chūrṇa (Powder)", "Charbī (Fat)", "Chām/Chamaṛī (Skin/Hide)", "Chaman (Garden)"],
    "options_hi": ["चूर्ण", "चर्बी", "चाम/चमड़ी", "चमन"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Charma' is 'Chām/Chamaṛī'.",
    "explanation_hi": "'चर्म' का तद्भव 'चाम/चमड़ी' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Amūlya' (Tatsam)?",
    "question_hi": "अमूल्य (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Amol (Priceless)", "Amūl", "Amṛt (Nectar)", "Ānand (Joy)"],
    "options_hi": ["अमोल", "अमूल", "अमृत", "आनंद"],
    "correct_option_index": 0,
    "explanation_en": "The Tadbhava form of 'Amūlya' is 'Amol'.",
    "explanation_hi": "'अमूल्य' का तद्भव 'अमोल' होता है।"
  },
  {
    "question_en": "What is the Tatsam form of 'Kājal' (Tadbhav)?",
    "question_hi": "काजल (Tadbhav) का तत्सम रूप क्या है?",
    "options_en": ["Kajali", "Kajal", "Kajjala (Kohl)", "Kāl (Time)"],
    "options_hi": ["कजलि", "कजल", "कज्जल", "काल"],
    "correct_option_index": 2,
    "explanation_en": "The Tatsam form of 'Kājal' is 'Kajjala'.",
    "explanation_hi": "'काजल' का तत्सम 'कज्जल' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Pavan' (Tatsam)?",
    "question_hi": "पवन (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Pānī (Water)", "Paun (Wind)", "Pavan (Wind - Tatsam)", "Vāyu (Air - Tatsam)"],
    "options_hi": ["पानी", "पौन", "पवन", "वायु"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava form of 'Pavan' is 'Paun' (wind).",
    "explanation_hi": "'पवन' का तद्भव 'पौन' (वायु) होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Kapāṭa' (Tatsam)?",
    "question_hi": "कपाट (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Kaṭihār", "Karpaṭ (Cloth - Tatsam)", "Kivāṛ (Door panel)", "Kaṣṭa (Trouble)"],
    "options_hi": ["कटिहार", "करपट", "किवाड़", "कष्ट"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Kapāṭa' is 'Kivāṛ'.",
    "explanation_hi": "'कपाट' का तद्भव 'किवाड़' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Bhikṣuka' (Tatsam)?",
    "question_hi": "भिक्षुक (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Bhikhārī (Beggar)", "Bhīkh (Alms)", "Bhikṣā (Alms - Tatsam)", "Bhogī (Indulger)"],
    "options_hi": ["भिखारी", "भीख", "भिक्षा", "भोगी"],
    "correct_option_index": 0,
    "explanation_en": "The Tadbhava form of 'Bhikṣuka' is 'Bhikhārī'.",
    "explanation_hi": "'भिक्षुक' का तद्भव 'भिखारी' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Akṣa' (Tatsam)?",
    "question_hi": "अक्ष (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Akṣat (Unharmed)", "Ānkh (Eye)", "Dhurī (Axis)", "Akhī"],
    "options_hi": ["अक्षत", "आँख", "धुरी", "अखी"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava form of 'Akṣa' (Akṣi) is 'Ānkh'.",
    "explanation_hi": "'अक्ष' (अक्षि) का तद्भव 'आँख' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Vakra' (Tatsam)?",
    "question_hi": "वक्र (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Sīdhā (Straight)", "Vichār (Thought)", "Bānkā/Benkā (Crooked/Bent)", "Ṭeṛhā (Crooked)"],
    "options_hi": ["सीधा", "विचार", "बाँका/बेंका", "टेढ़ा"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Vakra' (crooked) is 'Bānkā/Benkā'.",
    "explanation_hi": "'वक्र' (टेढ़ा) का तद्भव 'बाँका/बेंका' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Mastaka' (Tatsam)?",
    "question_hi": "मस्तक (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Mastiṣka (Brain)", "Mastī (Fun)", "Māthā (Forehead)", "Matsya (Fish)"],
    "options_hi": ["मस्तिष्क", "मस्ती", "माथा", "मत्स्य"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Mastaka' is 'Māthā'.",
    "explanation_hi": "'मस्तक' का तद्भव 'माथा' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Nṛtya' (Tatsam)?",
    "question_hi": "नृत्य (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Nṛtta", "Nṛpa (King)", "Nāch (Dance)", "Niyat (Fixed)"],
    "options_hi": ["नृत्त", "नृप", "नाच", "नियत"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Nṛtya' is 'Nāch'.",
    "explanation_hi": "'नृत्य' का तद्भव 'नाच' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Lavaṇa' (Tatsam)?",
    "question_hi": "लवण (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Lauṇ", "Lavang (Clove)", "Namak (Salt)", "Lang (Lame)"],
    "options_hi": ["लौण", "लवंग", "नमक", "लंग"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Lavaṇa' (salt) is 'Namak'.",
    "explanation_hi": "'लवण' (नमक) का तद्भव 'नमक' होता है।"
  },
  {
    "question_en": "What is the Tatsam form of 'Amol' (Tadbhav)?",
    "question_hi": "अमोल (Tadbhav) का तत्सम रूप क्या है?",
    "options_en": ["Mūl (Root)", "Ābhārī (Grateful)", "Amūlya (Priceless)", "Mūlya (Value)"],
    "options_hi": ["मूल", "आभारी", "अमूल्य", "मूल्य"],
    "correct_option_index": 2,
    "explanation_en": "The Tatsam form of 'Amol' is 'Amūlya'.",
    "explanation_hi": "'अमूल' का तत्सम 'अमूल्य' है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Angāra' (Tatsam)?",
    "question_hi": "अंगार (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Anga (Part)", "Agnikār", "Angārā (Ember)", "Anguṣṭha (Thumb)"],
    "options_hi": ["अंग", "अग्निकार", "अंगारा", "अंगुष्ठ"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Angāra' is 'Angārā'.",
    "explanation_hi": "'अंगार' का तद्भव 'अंगारा' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Karṇa' (Tatsam)?",
    "question_hi": "कर्ण (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Kāraṇ (Reason)", "Konā (Corner)", "Kān (Ear)", "Kriyā (Verb)"],
    "options_hi": ["कारण", "कोना", "कान", "क्रिया"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Karṇa' is 'Kān'.",
    "explanation_hi": "'कर्ण' का तद्भव 'कान' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Kṣīra' (Tatsam)?",
    "question_hi": "क्षीर (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Kṣīr", "Khīr (Rice pudding)", "Kṣay (Decay)", "Kṣār (Alkali)"],
    "options_hi": ["क्षीर", "खीर", "क्षय", "क्षार"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava form of 'Kṣīra' is 'Khīr'.",
    "explanation_hi": "'क्षीर' का तद्भव 'खीर' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Yatna' (Tatsam)?",
    "question_hi": "यत्न (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Yatna", "Jatan", "Jatan (Effort)", "Yatna karnā (To try)"],
    "options_hi": ["यत्न", "जतन", "जतन", "यत्न करना"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Yatna' (effort) is 'Jatan'.",
    "explanation_hi": "'यत्न' (प्रयास) का तद्भव 'जतन' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Araṇya' (Tatsam)?",
    "question_hi": "अरण्य (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Araṇ", "Araṇya", "Van/Rān (Forest)", "Arṇav (Ocean)"],
    "options_hi": ["अरण", "अरण्य", "वन/रान", "अर्णव"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Araṇya' is 'Van/Rān'.",
    "explanation_hi": "'अरण्य' का तद्भव 'वन/रान' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Sapatnī' (Tatsam)?",
    "question_hi": "सपत्नी (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Sāthī (Companion)", "Patan (Downfall)", "Saut (Co-wife)", "Sat (Truth)"],
    "options_hi": ["साथी", "पतन", "सौत", "सत"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Sapatnī' is 'Saut'.",
    "explanation_hi": "'सपत्नी' का तद्भव 'सौत' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Kāka' (Tatsam)?",
    "question_hi": "काक (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Kauā (Crow)", "Kāg (Crow - alt.)", "Kīchaṛ (Mud)", "Kānṭā (Thorn)"],
    "options_hi": ["कौआ", "काग", "कीचड़", "काँटा"],
    "correct_option_index": 0,
    "explanation_en": "The Tadbhava form of 'Kāka' is 'Kauā'.",
    "explanation_hi": "'काक' का तद्भव 'कौआ' होता है।"
  },
  {
    "question_en": "The Tadbhava form of 'Janma' (Tatsam) is 'Janam'. What is the Tadbhava form of 'Jananī' (Tatsam)?",
    "question_hi": "जन्म (Tatsam) का तद्भव रूप 'जनम' है। जननी (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Janmadātrī (Birth-giver)", "Jananī (Mother - Tatsam)", "Janī (Mother - Tadbhav)", "Jāy (Born)"],
    "options_hi": ["जन्मदात्री", "जननी", "जनी", "जाय"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava form of 'Jananī' is considered 'Jananī' itself, although its core meaning is 'mother'.",
    "explanation_hi": "'जननी' का तद्भव रूप 'जननी' ही माना जाता है, हालांकि इसका मूल अर्थ 'माँ' है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Yaṣṭi' (Tatsam)?",
    "question_hi": "यष्टि (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Yukti (Trick)", "Yog (Yoga)", "Jātī (Stick/Cane)", "Yavan (Greek/Foreigner)"],
    "options_hi": ["युक्ति", "योग", "जाती", "यवन"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Yaṣṭi' (stick) is 'Jātī'.",
    "explanation_hi": "'यष्टि' (लाठी) का तद्भव 'जाती' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Makṣikā' (Tatsam)?",
    "question_hi": "मक्षिका (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Makkhan (Butter)", "Machhlī (Fish)", "Makkhī (Fly)", "Machchhar (Mosquito)"],
    "options_hi": ["मक्खन", "मछली", "मक्खी", "मच्छर"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Makṣikā' is 'Makkhī'.",
    "explanation_hi": "'मक्षिका' का तद्भव 'मक्खी' होता है।"
  },
  {
    "question_en": "What is the Tatsam form of 'Jībh' (Tadbhav)?",
    "question_hi": "जीभ (Tadbhav) का तत्सम रूप क्या है?",
    "options_en": ["Jih", "Jihvā (Tongue)", "Jīvā", "Jīv (Life)"],
    "options_hi": ["जिह्", "जिह्वा", "जीवा", "जीव"],
    "correct_option_index": 1,
    "explanation_en": "The Tatsam form of 'Jībh' is 'Jihvā'.",
    "explanation_hi": "'जीभ' का तत्सम 'जिह्वा' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Bhakta' (Tatsam)?",
    "question_hi": "भक्त (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Bhagavat", "Bhagat (Devotee)", "Bhikār", "Bhīt (Wall)"],
    "options_hi": ["भगवत", "भगत", "भिकार", "भीत"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava form of 'Bhakta' is 'Bhagat'.",
    "explanation_hi": "'भक्त' का तद्भव 'भगत' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Āmrachūrṇa' (Tatsam)?",
    "question_hi": "आम्रचूर्ण (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Ām (Mango)", "Āmchūr (Mango powder)", "Churā (Powder)", "Āmpanā (Mango drink)"],
    "options_hi": ["आम", "आमचूर", "चुरा", "आमपना"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava form of 'Āmrachūrṇa' (Āmra + Chūrṇa) is 'Āmchūr'.",
    "explanation_hi": "'आम्रचूर्ण' (आम + चूर्ण) का तद्भव 'आमचूर' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Nagna' (Tatsam)?",
    "question_hi": "नग्न (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Nagīch (Near)", "Nagar (City)", "Nangā (Naked)", "Nirlajj (Shameless)"],
    "options_hi": ["नगीच", "नगर", "नंगा", "निर्लज्ज"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Nagna' is 'Nangā'.",
    "explanation_hi": "'नग्न' का तद्भव 'नंगा' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Vṛścika' (Tatsam)?",
    "question_hi": "वृश्चिक (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Bichchhū (Scorpion)", "Vṛkṣa (Tree)", "Vṛṣabha (Bull)", "Vṛtti (Profession)"],
    "options_hi": ["बिच्छू", "वृक्ष", "वृषभ", "वृत्ति"],
    "correct_option_index": 0,
    "explanation_en": "The Tadbhava form of 'Vṛścika' is 'Bichchhū'.",
    "explanation_hi": "'वृश्चिक' का तद्भव 'बिच्छू' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Chhidra' (Tatsam)?",
    "question_hi": "छिद्र (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Chitra (Picture)", "Chhal (Deceit)", "Chhed (Hole)", "Chhātā (Umbrella)"],
    "options_hi": ["चित्र", "छल", "छेद", "छाता"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Chhidra' is 'Chhed'.",
    "explanation_hi": "'छिद्र' का तद्भव 'छेद' होता है।"
  },
  {
    "question_en": "What is the Tatsam form of 'Jaṛ' (Tadbhav - Root)?",
    "question_hi": "जड़ (Tadbhav) का तत्सम रूप क्या है?",
    "options_en": ["Jaṭā (Matted hair)", "Jaṛāū (Studded)", "Jaṛatva (Inertia)", "Jvara (Fever)"],
    "options_hi": ["जटा", "जड़ाऊ", "जड़त्व", "ज्वर"],
    "correct_option_index": 0,
    "explanation_en": "The Tatsam form of 'Jaṛ' is 'Jaṭā' (mention of 'Jaṛ' in sources).",
    "explanation_hi": "'जड़' का तत्सम 'जटा' होता है (स्रोतों में 'जड़' का उल्लेख है)।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Vidyut' (Tatsam)?",
    "question_hi": "विद्युत (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Vidhātā (Creator)", "Bijlī (Electricity/Lightning)", "Vibhā (Lustre)", "Vidyuttā"],
    "options_hi": ["विधाता", "बिजली", "विभा", "विद्युतता"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava form of 'Vidyut' is 'Bijlī'.",
    "explanation_hi": "'विद्युत' का तद्भव 'बिजली' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Pautra' (Tatsam)?",
    "question_hi": "पौत्र (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Putra (Son)", "Potā (Grandson - son's son)", "Putrī (Daughter)", "Pautrī (Granddaughter)"],
    "options_hi": ["पुत्र", "पोता", "पुत्री", "पौत्री"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava form of 'Pautra' is 'Potā'.",
    "explanation_hi": "'पौत्र' का तद्भव 'पोता' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Bhitti' (Tatsam)?",
    "question_hi": "भित्ति (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Bhītī", "Bhay (Fear)", "Bhīt/Bhīnt (Wall)", "Bhūti (Prosperity)"],
    "options_hi": ["भीती", "भय", "भीत/भींत", "भूति"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Bhitti' (wall) is 'Bhīt'.",
    "explanation_hi": "'भित्ति' (दीवार) का तद्भव 'भीत' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Chakravāka' (Tatsam)?",
    "question_hi": "चक्रवाक (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Chakravāt (Cyclone)", "Chakvā (Ruddy shelduck bird)", "Chakra (Wheel)", "Chakrī"],
    "options_hi": ["चक्रवात", "चकवा", "चक्र", "चक्री"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava form of 'Chakravāka' (bird) is 'Chakvā'.",
    "explanation_hi": "'चक्रवाक' (पक्षी) का तद्भव 'चकवा' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Akṣata' (Tatsam)?",
    "question_hi": "अक्षत (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Akṣar (Letter)", "Āchhat (Unhurt/Intact)", "Achchhe (Good)", "Akṣa (Axis/Eye)"],
    "options_hi": ["अक्षर", "आछत", "अच्छे", "अक्ष"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava form of 'Akṣata' (uninjured) is 'Āchhat'.",
    "explanation_hi": "'अक्षत' (चोट रहित) का तद्भव 'आछत' होता है।"
  },
  {
    "question_en": "What is the Tadbhava form of 'Agra' (Tatsam)?",
    "question_hi": "अग्र (Tatsam) का तद्भव रूप क्या है?",
    "options_en": ["Agraṇī (Leader)", "Agra", "Āge (Ahead/Forward)", "Agar (If)"],
    "options_hi": ["अग्रणी", "अग्र", "आगे", "अगर"],
    "correct_option_index": 2,
    "explanation_en": "The Tadbhava form of 'Agra' is 'Āge'.",
    "explanation_hi": "'अग्र' का तद्भव 'आगे' होता है।"
  }
];

export default tatsamTadbhavQuestions;