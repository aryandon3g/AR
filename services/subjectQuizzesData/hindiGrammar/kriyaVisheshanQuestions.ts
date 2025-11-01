import type { QuizQuestion } from '../../../types';
/*
INSTRUCTIONS TO ADD QUESTIONS:

You can use the following prompt with an AI (like Gemini) to generate questions in the correct format.
Replace the [TOPIC] and [NUMBER_OF_QUESTIONS] placeholders with your desired values. For your request, use [Kriya Visheshan (Adverbs) in Hindi Grammar] and [100].

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
    "question_en": "From a grammatical perspective, under which category do adverb words fall?",
    "question_hi": "व्याकरणिक दृष्टि से क्रिया विशेषण शब्द किस श्रेणी के अंतर्गत आते हैं?",
    "options_en": ["Vikari words (Declinable)", "Vikari Avyay (Declinable Indeclinable - incorrect term)", "Avikari words (Indeclinable/Avyay)", "Sarvanam (Pronoun)"],
    "options_hi": ["विकारी शब्द", "विकारी अव्यय", "अविकारी शब्द (अव्यय)", "सर्वनाम"],
    "correct_option_index": 2,
    "explanation_en": "Adverbs, postpositions, conjunctions, and interjections are Avikari (Avyay) words, which do not undergo inflection.",
    "explanation_hi": "क्रिया विशेषण, क्रियाविशेषण, सम्बन्धसूचक, समुच्चयबोधक और विस्मयादिबोधक अविकारी (अव्यय) शब्द हैं, जिनमें कोई विकार नहीं होता है।"
}

====================================================================================================

Once you have the generated array, paste it below, replacing the empty array [].
*/

const kriyavisheshanQuestions: QuizQuestion[] = [
  {
    "question_en": "From a grammatical perspective, under which category do adverb words fall?",
    "question_hi": "व्याकरणिक दृष्टि से क्रिया विशेषण शब्द किस श्रेणी के अंतर्गत आते हैं?",
    "options_en": ["Vikari words (Declinable)", "Vikari Avyay (Declinable Indeclinable - incorrect term)", "Avikari words (Indeclinable/Avyay)", "Sarvanam (Pronoun)"],
    "options_hi": ["विकारी शब्द", "विकारी अव्यय", "अविकारी शब्द (अव्यय)", "सर्वनाम"],
    "correct_option_index": 2,
    "explanation_en": "Adverbs, postpositions, conjunctions, and interjections are Avikari (Avyay) words, which do not undergo inflection.",
    "explanation_hi": "क्रिया विशेषण, क्रियाविशेषण, सम्बन्धसूचक, समुच्चयबोधक और विस्मयादिबोधक अविकारी (अव्यय) शब्द हैं, जिनमें कोई विकार नहीं होता है।"
  },
  {
    "question_en": "According to meaning, how many main types of adverbs are there?",
    "question_hi": "अर्थ के अनुसार क्रियाविशेषणों के मुख्य रूप से कितने भेद होते हैं?",
    "options_en": ["Three", "Four", "Five", "Two"],
    "options_hi": ["तीन", "चार", "पाँच", "दो"],
    "correct_option_index": 1,
    "explanation_en": "According to meaning, there are four types of adverbs: Sthanavachak (Place), Kalavachak (Time), Parinamavachak (Quantity), and Ritivachak (Manner).",
    "explanation_hi": "अर्थ के अनुसार क्रियाविशेषणों के चार भेद होते हैं: स्थानवाचक, कालवाचक, परिणामवाचक और रीतिवाचक।"
  },
  {
    "question_en": "In the definition of 'Ritivachak Kriyavisheshan' (Adverb of Manner), which aspect of the verb is indicated?",
    "question_hi": "'रीतिवाचक क्रियाविशेषण' की परिभाषा में क्रिया के किस पक्ष का बोध कराया जाता है?",
    "options_en": ["Time", "Place", "Manner, method, or way", "Quantity"],
    "options_hi": ["समय", "स्थान", "रीति, पद्धति या तरीका", "मात्रा"],
    "correct_option_index": 2,
    "explanation_en": "Words that indicate the manner, method, or way of performing an action are called Adverbs of Manner (Ritivachak Kriyavisheshan).",
    "explanation_hi": "क्रिया करने के रीति, पद्धति या तरीके का बोध कराने वाले शब्द रीतिवाचक क्रियाविशेषण कहलाते हैं।"
  },
  {
    "question_en": "What are the two sub-types of 'Sthanavachak Kriyavisheshan' (Adverb of Place) mentioned in the sources?",
    "question_hi": "'स्थानवाचक क्रियाविशेषण' के दो भेद कौन-कौन से हैं, जिनका उल्लेख स्रोतों में है?",
    "options_en": ["Causal and Effective", "Positional and Directional", "Interrogative and Negative", "Comparative and Relational"],
    "options_hi": ["कारणवाचक और कार्यवाचक", "स्थितियाचक और दिशावाचक", "प्रश्नवाचक और निषेधवाचक", "तुलनात्मक और सम्बन्धवाचक"],
    "correct_option_index": 1,
    "explanation_en": "There are two types of Adverb of Place: (1) Sthitiyachak (Positional) and (2) Dishavachak (Directional).",
    "explanation_hi": "स्थानवाचक क्रियाविशेषण के दो भेद हैं: (1) स्थितियाचक और (2) दिशावाचक।"
  },
  {
    "question_en": "Which of the following words falls into the category of Sanskrit Tatsama adverbs?",
    "question_hi": "निम्नलिखित में से कौन-सा शब्द संस्कृत तत्सम क्रियाविशेषण की श्रेणी में आता है?",
    "options_en": ["Aaj (Today)", "Parson (Day after tomorrow/before yesterday)", "Kadachit (Perhaps)", "Hamesha (Always)"],
    "options_hi": ["आज", "परसों", "कदाचित्", "हमेशा"],
    "correct_option_index": 2,
    "explanation_en": "Akasmāt, anyatra, kadāchit, prāyaḥ, bahudhā, punaḥ, yathā, vyartha, vastutaḥ, samprati, śanaiḥ, sahasā, sarvatra, sarvadā, sarvathā, sākṣāt, etc., are Tatsama adverbs.",
    "explanation_hi": "अकस्मात्, अन्यत्र, कदाचित्, प्रायः, बहुधा, पुनः, यथा, व्यर्थ, वस्तुतः, सम्प्रति, शनैः, सहसा, सर्वत्र, सर्वदा, सर्वथा, साक्षात् आदि तत्सम क्रिया विशेषण हैं।"
  },
  {
    "question_en": "The word 'Śanaiḥ' (Slowly) indicates which aspect of the verb, making it an Adverb of Manner?",
    "question_hi": "'शनैः' (Slowly) शब्द क्रिया के किस पहलू को इंगित करता है, जिससे यह रीतिवाचक क्रियाविशेषण बनता है?",
    "options_en": ["Place", "Manner", "Quantity", "Time"],
    "options_hi": ["स्थान", "रीति", "परिणाम", "काल"],
    "correct_option_index": 1,
    "explanation_en": "'Śanaiḥ' (slowly) is an example of an Adverb of Manner, indicating the method or way the action is performed.",
    "explanation_hi": "'शनैः' (धीरे) रीतिवाचक क्रियाविशेषण का उदाहरण है, जो क्रिया की पद्धति या तरीके का बोध कराता है।"
  },
  {
    "question_en": "Words like 'yahān' (here), 'vahān' (there), 'kahān' (where), 'ūnche' (high), 'nīche' (low), etc., are what type of adverbs?",
    "question_hi": "'यहाँ', 'वहाँ', 'कहाँ', 'ऊँचे', 'नीचे' आदि शब्द किस प्रकार के क्रियाविशेषण हैं?",
    "options_en": ["Kalavachak (Time)", "Ritivachak (Manner)", "Sthanavachak (Place)", "Parinamavachak (Quantity)"],
    "options_hi": ["कालवाचक", "रीतिवाचक", "स्थानवाचक", "परिणामवाचक"],
    "correct_option_index": 2,
    "explanation_en": "All these words indicate place. 'Yahān', 'vahān', 'ūnche', 'nīche', etc., are examples of Adverbs of Place.",
    "explanation_hi": "ये सभी शब्द स्थान का बोध कराते हैं। 'यहाँ', 'वहाँ', 'ऊँचे', 'नीचे' आदि स्थानवाचक क्रियाविशेषणों के उदाहरण हैं।"
  },
  {
    "question_en": "The word 'kal' (tomorrow/yesterday), which is a Tadbhava form from 'kalpa' (Sanskrit), is an example of which type of adverb?",
    "question_hi": "'कल' शब्द जो 'कल्प' (सं.) से तद्भव रूप में आया है, वह किस प्रकार के क्रियाविशेषण का उदाहरण है?",
    "options_en": ["Ritivachak (Manner)", "Kalavachak (Time)", "Sthanavachak (Place)", "Parinamavachak (Quantity)"],
    "options_hi": ["रीतिवाचक", "कालवाचक", "स्थानवाचक", "परिणामवाचक"],
    "correct_option_index": 1,
    "explanation_en": "'Kal' (Skt. 'kalpa') is an Adverb of Time (Kalavachak Kriyavisheshan).",
    "explanation_hi": "'कल' (सं. 'कल्प') कालवाचक क्रियाविशेषण है।"
  },
  {
    "question_en": "What is the word called that indicates the 'extent' or 'quantity' (mātrā) of the verb?",
    "question_hi": "वह शब्द जो क्रिया के 'व्याप्ति' या 'मात्रा' का बोध कराता है, उसे क्या कहते हैं?",
    "options_en": ["Ritivachak (Manner)", "Kalavachak (Time)", "Parinamavachak (Quantity)", "Sthanavachak (Place)"],
    "options_hi": ["रीतिवाचक", "कालवाचक", "परिणामवाचक", "स्थानवाचक"],
    "correct_option_index": 2,
    "explanation_en": "Parinamavachak Kriyavisheshan (Adverb of Quantity).",
    "explanation_hi": "परिणामवाचक क्रियाविशेषण।"
  },
  {
    "question_en": "The word 'Aksar' (Often), which falls into the category of Urdu adverbs, is which type of adverb according to meaning?",
    "question_hi": "'अक्सर' (Aksar) शब्द जो उर्दू क्रियाविशेषण की श्रेणी में आता है, वह अर्थ के अनुसार कौन-सा क्रियाविशेषण है?",
    "options_en": ["Sthanavachak (Place)", "Ritivachak (Manner)", "Kalavachak (Time)", "Parinamavachak (Quantity)"],
    "options_hi": ["स्थानवाचक", "रीतिवाचक", "कालवाचक", "परिणामवाचक"],
    "correct_option_index": 2,
    "explanation_en": "'Aksar' (often) indicates time (although its type is not specified in the sources, it is in the list of Urdu adverbs).",
    "explanation_hi": "'अक्सर' (often) समय का बोध कराता है (हालांकि स्रोतों में इसका भेद स्पष्ट नहीं है, यह उर्दू क्रियाविशेषणों की सूची में है)।"
  },
  {
    "question_en": "If the word 'anyatra' (elsewhere) is used in a sentence, which sub-type of Adverb of Place does it indicate?",
    "question_hi": "यदि किसी वाक्य में 'अन्यत्र' शब्द का प्रयोग हो, तो यह स्थानवाचक क्रियाविशेषण के किस उपभेद को इंगित करता है?",
    "options_en": ["Directional (Dishavachak)", "Positional (Sthitiyachak)", "Interrogative (Prashnavachak)", "Quantitative (Parimanavachak)"],
    "options_hi": ["दिशावाचक", "स्थितियाचक", "प्रश्नवाचक", "परिमाणवाचक"],
    "correct_option_index": 1,
    "explanation_en": "'Anyatra' (elsewhere) indicates position.",
    "explanation_hi": "'अन्यत्र' (elsewhere) स्थिति को दर्शाता है।"
  },
  {
    "question_en": "'Sarvatra' (Everywhere) is what type of adverb?",
    "question_hi": "'सर्वत्र' (Sarvatra) शब्द किस प्रकार का क्रियाविशेषण है?",
    "options_en": ["Kalavachak (Time)", "Parinamavachak (Quantity)", "Sthanavachak (Place)", "Ritivachak (Manner)"],
    "options_hi": ["कालवाचक", "परिणामवाचक", "स्थानवाचक", "रीतिवाचक"],
    "correct_option_index": 2,
    "explanation_en": "This is a Sanskrit Tatsama adverb, indicating place (everywhere).",
    "explanation_hi": "यह संस्कृत तत्सम क्रिया विशेषण है, जो स्थान (हर जगह) का बोध कराता है।"
  },
  {
    "question_en": "The word 'āge' (ahead/forward), which is a Tadbhava form from the Sanskrit word 'agre', falls under which sub-type of Adverb of Place?",
    "question_hi": "'आगे' (Aage) शब्द जो संस्कृत शब्द 'अग्रे' से तद्भव रूप में आया है, स्थानवाचक के किस उपभेद के अंतर्गत आता है?",
    "options_en": ["Positional (Sthitiyachak)", "Directional (Dishavachak)", "Causal (Karanavachak)", "Negative (Nishedhavachak)"],
    "options_hi": ["स्थितियाचक", "दिशावाचक", "कारणवाचक", "निषेधवाचक"],
    "correct_option_index": 1,
    "explanation_en": "'Āge' (ahead) indicates direction.",
    "explanation_hi": "'आगे' दिशा को इंगित करता है।"
  },
  {
    "question_en": "In the types of adverbs, 'Position' (Sthiti) and 'Direction' (Disha) are sub-types of which main type?",
    "question_hi": "क्रिया विशेषण के भेदों में 'स्थिति' और 'दिशा' के भेद किस मुख्य भेद के उपभेद हैं?",
    "options_en": ["Kalavachak (Time)", "Parinamavachak (Quantity)", "Sthanavachak (Place)", "Ritivachak (Manner)"],
    "options_hi": ["कालवाचक", "परिणामवाचक", "स्थानवाचक", "रीतिवाचक"],
    "correct_option_index": 2,
    "explanation_en": "Two types of Adverb of Place: Sthitiyachak (Positional) and Dishavachak (Directional).",
    "explanation_hi": "स्थानवाचक क्रियाविशेषण के दो भेद: स्थितियाचक और दिशावाचक।"
  },
  {
    "question_en": "Among the following Urdu adverbs, which one is in the Tatsama (Urdu) form?",
    "question_hi": "निम्नलिखित उर्दू क्रियाविशेषणों में से कौन-सा तत्सम (उर्दू) रूप है?",
    "options_en": ["Nagīch (Near)", "Hamesha (Always)", "Zarūr (Certainly)", "Jaldī (Quickly)"],
    "options_hi": ["नगीच", "हमेशा", "जरूर", "जल्दी"],
    "correct_option_index": 2,
    "explanation_en": "Zarūr (Urdu Tatsama). Nagīch (from Persian 'nazdīk'), Hamesha (from Persian 'hameshāh'), Jaldī (from Persian 'jald') are Tadbhava/modified Urdu words.",
    "explanation_hi": "जरूर (उर्दू तत्सम)। नगीच (फ़ा. नजदीक), हमेशा (फ़ा. हमेशाह), जल्दी (फ़ा. जल्द) तद्भव/रूपांतरित उर्दू शब्द हैं।"
  },
  {
    "question_en": "Adverbs like 'yahān' (here), 'vahān' (there), which denote place, can optionally take the case marker 'par' (on/at) with which part of speech?",
    "question_hi": "क्रिया विशेषण 'यहाँ', 'वहाँ' जैसे शब्द, जिनमें स्थानवाचकता है, किसके साथ वैकल्पिक रूप से 'पर' कारक चिन्ह ले सकते हैं?",
    "options_en": ["Noun", "Verb", "Adverb of Place", "Adverb of Time"],
    "options_hi": ["संज्ञा", "क्रिया", "स्थानवाचक क्रियाविशेषण", "समयवाचक क्रियाविशेषण"],
    "correct_option_index": 2,
    "explanation_en": "With Adverbs of Place like kahān, yahān, vahān, ūnche, nīche, etc., 'par' comes optionally.",
    "explanation_hi": "कहाँ, यहाँ, वहाँ, ऊँचे, नीचे आदि स्थानवाचक क्रियाविशेषणों के साथ विकल्प से 'पर' आता है।"
  },
  {
    "question_en": "The word 'bārambār' (repeatedly), which is a Tadbhava form from Sanskrit 'bāra-bāra', is which type of adverb?",
    "question_hi": "'बारंबार' (बार-बार) शब्द, जो संस्कृत 'बार-बार' से तद्भव रूप में आया है, कौन-सा क्रियाविशेषण है?",
    "options_en": ["Sthanavachak (Place)", "Kalavachak (Time)", "Ritivachak (Manner)", "Parinamavachak (Quantity)"],
    "options_hi": ["स्थानवाचक", "कालवाचक", "रीतिवाचक", "परिणामवाचक"],
    "correct_option_index": 1,
    "explanation_en": "It indicates the frequency of the action's time.",
    "explanation_hi": "यह क्रिया के समय की आवृत्ति को दर्शाता है।"
  },
  {
    "question_en": "The word 'Samprati' (Now/At present), which is a Sanskrit Tatsama adverb, indicates which aspect of the verb?",
    "question_hi": "'सम्प्रति' (Samprati) शब्द, जो संस्कृत तत्सम क्रियाविशेषण है, क्रिया के किस पहलू को इंगित करता है?",
    "options_en": ["Place", "Manner", "Time", "Negation"],
    "options_hi": ["स्थान", "रीति", "काल", "निषेध"],
    "correct_option_index": 2,
    "explanation_en": "'Samprati' (now, at present) is an Adverb of Time (Kalavachak Kriyavisheshan).",
    "explanation_hi": "'सम्प्रति' (now, at present) कालवाचक क्रियाविशेषण है।"
  },
  {
    "question_en": "The word 'āj' (Today) (Tadbhava from Sanskrit 'adya') is an example of which main adverb type?",
    "question_hi": "'आज' शब्द (संस्कृत 'अद्य' से तद्भव) किस मुख्य क्रियाविशेषण भेद का उदाहरण है?",
    "options_en": ["Sthanavachak (Place)", "Ritivachak (Manner)", "Kalavachak (Time)", "Parinamavachak (Quantity)"],
    "options_hi": ["स्थानवाचक", "रीतिवाचक", "कालवाचक", "परिणामवाचक"],
    "correct_option_index": 2,
    "explanation_en": "'Āj' (Today) indicates time.",
    "explanation_hi": "'आज' (Today) समय को सूचित करता है।"
  },
  {
    "question_en": "The word 'parsoṇ' (day after tomorrow/before yesterday), which is a Tadbhava form from 'paraśva' (Sanskrit), will be used in which adverb type?",
    "question_hi": "'परसों' शब्द जो 'परश्व' (सं.) से तद्भव रूप में आया है, इसका उपयोग किस क्रियाविशेषण भेद में होगा?",
    "options_en": ["Ritivachak (Manner)", "Kalavachak (Time)", "Parinamavachak (Quantity)", "Sthitiyachak (Positional)"],
    "options_hi": ["रीतिवाचक", "कालवाचक", "परिणामवाचक", "स्थितियाचक"],
    "correct_option_index": 1,
    "explanation_en": "'Parsoṇ' (Day after tomorrow/before yesterday) indicates time.",
    "explanation_hi": "'परसों' (Day after tomorrow/before yesterday) समय का बोध कराता है।"
  },
  {
    "question_en": "The word 'Sarvadā' (Always) will be used in which type of adverb?",
    "question_hi": "'सर्वदा' (Sarvadaa) शब्द का प्रयोग क्रियाविशेषण के किस भेद में होगा?",
    "options_en": ["Sthanavachak (Place)", "Ritivachak (Manner)", "Kalavachak (Time)", "Dishavachak (Directional)"],
    "options_hi": ["स्थानवाचक", "रीतिवाचक", "कालवाचक", "दिशावाचक"],
    "correct_option_index": 2,
    "explanation_en": "'Sarvadā' (always) is an Adverb of Time (Kalavachak Kriyavisheshan).",
    "explanation_hi": "'सर्वदा' (always) कालवाचक क्रियाविशेषण है।"
  },
  {
    "question_en": "The word 'Prāyaḥ' (Mostly/Often), which is a Sanskrit Tatsama adverb, is which type?",
    "question_hi": "'प्रायः' (Prayah) शब्द, जो संस्कृत तत्सम क्रियाविशेषण है, कौन-सा भेद है?",
    "options_en": ["Sthanavachak (Place)", "Kalavachak (Time)", "Ritivachak (Manner)", "Parinamavachak (Quantity)"],
    "options_hi": ["स्थानवाचक", "कालवाचक", "रीतिवाचक", "परिणामवाचक"],
    "correct_option_index": 1,
    "explanation_en": "'Prāyaḥ' (mostly/often) indicates time or frequency.",
    "explanation_hi": "'प्रायः' (mostly/often) समय या आवृत्ति का बोध कराता है।"
  },
  {
    "question_en": "If a word is the adverb 'Akasmāt' (Suddenly), from which Sanskrit category does it come?",
    "question_hi": "यदि कोई शब्द 'अकस्मात्' (Akasmaat) क्रियाविशेषण है, तो यह संस्कृत की किस श्रेणी से आता है?",
    "options_en": ["Tadbhava", "Yaugik (Compound)", "Tatsama", "Yogaruṛha (Compound-Specific)"],
    "options_hi": ["तद्भव", "यौगिक", "तत्सम", "योगरूढ़"],
    "correct_option_index": 2,
    "explanation_en": "'Akasmāt' is a Tatsama adverb.",
    "explanation_hi": "'अकस्मात्' तत्सम क्रियाविशेषण है।"
  },
  {
    "question_en": "What is the original source of the adverb 'jaldī' (quickly), mentioned in the list of Urdu adverbs?",
    "question_hi": "क्रिया विशेषण 'जल्दी' (Jaldi) शब्द का मूल स्रोत क्या है, जिसका उल्लेख उर्दू क्रियाविशेषण की सूची में है?",
    "options_en": ["Hindi ('jald')", "Persian ('jald')", "Arabic ('jald')", "Turkish ('jald')"],
    "options_hi": ["हिंदी ('जल्द')", "फारसी ('जल्द')", "अरबी ('जल्द')", "तुर्की ('जल्द')"],
    "correct_option_index": 1,
    "explanation_en": "'Jaldī' is a Tadbhava form derived from the Persian word 'jald'.",
    "explanation_hi": "'जल्दी' फारसी शब्द 'जल्द' से तद्भव रूप में आया है।"
  },
  {
    "question_en": "The word 'nagīch' (meaning near), is in the list of Urdu adverbs. According to meaning, which type of adverb is it?",
    "question_hi": "'नगीच' (Nageech) शब्द (जो निकट का अर्थ देता है) उर्दू क्रियाविशेषण की सूची में है। अर्थ के अनुसार यह कौन-सा क्रियाविशेषण है?",
    "options_en": ["Kalavachak (Time)", "Ritivachak (Manner)", "Sthanavachak (Place)", "Parinamavachak (Quantity)"],
    "options_hi": ["कालवाचक", "रीतिवाचक", "स्थानवाचक", "परिणामवाचक"],
    "correct_option_index": 2,
    "explanation_en": "'Nagīch' (near) indicates place.",
    "explanation_hi": "'नगीच' (नज़दीक) स्थान का बोध कराता है।"
  },
  {
    "question_en": "The word 'dhyānapūrvak' (attentively) is an example of which type of adverb?",
    "question_hi": "'ध्यानपूर्वक' (Dhyanpurvak) शब्द किस प्रकार के क्रियाविशेषण का उदाहरण है?",
    "options_en": ["Kalavachak (Time)", "Ritivachak (Manner)", "Parinamavachak (Quantity)", "Sthanavachak (Place)"],
    "options_hi": ["कालवाचक", "रीतिवाचक", "परिणामवाचक", "स्थानवाचक"],
    "correct_option_index": 1,
    "explanation_en": "It indicates the manner or method of performing the action.",
    "explanation_hi": "यह क्रिया करने की रीति या पद्धति को दर्शाता है।"
  },
  {
    "question_en": "'Vah dhīre-dhīre chaltā hai' (He walks slowly) — In this sentence, what type of adverb is 'dhīre-dhīre'?",
    "question_hi": "'वह धीरे-धीरे चलता है'— इस वाक्य में 'धीरे-धीरे' किस प्रकार का क्रियाविशेषण है?",
    "options_en": ["Sthanavachak (Place)", "Parinamavachak (Quantity)", "Ritivachak (Manner)", "Kalavachak (Time)"],
    "options_hi": ["स्थानवाचक", "परिणामवाचक", "रीतिवाचक", "कालवाचक"],
    "correct_option_index": 2,
    "explanation_en": "'Dhīre-dhīre' (slowly) describes the manner of the action.",
    "explanation_hi": "'धीरे-धीरे' क्रिया करने का तरीका बताता है।"
  },
  {
    "question_en": "Repeated words like 'dhīre-dhīre' (slowly), which describe the manner of the action, fall under which type of adverb?",
    "question_hi": "'धीरे-धीरे' (Dheere-dheere) जैसे पुनरुक्त शब्द (repeated words) क्रियाविशेषण के किस भेद में आते हैं, जो क्रिया के तरीके को दर्शाते हैं?",
    "options_en": ["Sthanavachak (Place)", "Kalavachak (Time)", "Ritivachak (Manner)", "Parinamavachak (Quantity)"],
    "options_hi": ["स्थानवाचक", "कालवाचक", "रीतिवाचक", "परिणामवाचक"],
    "correct_option_index": 2,
    "explanation_en": "It indicates the manner (rīti).",
    "explanation_hi": "यह रीति का बोध कराता है।"
  },
  {
    "question_en": "To identify an Adverb of Manner (Ritivachak Kriyavisheshan), what kind of question is asked of the verb?",
    "question_hi": "रीतिवाचक क्रियाविशेषण की पहचान करने के लिए क्रिया से किस प्रकार का प्रश्न पूछा जाता है?",
    "options_en": ["Where? (Kahān?)", "When? (Kab?)", "How? (Kaise?)", "How much? (Kitnā?)"],
    "options_hi": ["कहाँ?", "कब?", "कैसे?", "कितना?"],
    "correct_option_index": 2,
    "explanation_en": "Adverbs of Manner indicate the way (manner/method) of the action.",
    "explanation_hi": "रीतिवाचक क्रिया के तरीके (रीति/पद्धति) का बोध कराता है।"
  },
  {
    "question_en": "The word 'khūb' (much/well), an Urdu adverb of Persian origin, is closest to which adverb type?",
    "question_hi": "'खूब' (Khoob) शब्द, जो फारसी मूल का उर्दू क्रियाविशेषण है, किस क्रियाविशेषण भेद के अधिक निकट है?",
    "options_en": ["Kalavachak (Time)", "Ritivachak (Manner)", "Parinamavachak (Quantity)", "Sthanavachak (Place)"],
    "options_hi": ["कालवाचक", "रीतिवाचक", "परिणामवाचक", "स्थानवाचक"],
    "correct_option_index": 2,
    "explanation_en": "'Khūb' (much/well) can indicate both quantity or manner (well), but is often categorized under quantity (sources only list it as Urdu Tadbhava, but grammatically it indicates quantity).",
    "explanation_hi": "'खूब' (much/well) मात्रा या रीति (अच्छे ढंग से) दोनों को इंगित कर सकता है, पर इसे परिमाण में रखा जाता है (स्रोतों में केवल उर्दू तद्भव है, पर व्याकरण में यह परिमाण को दर्शाता है)।"
  },
  {
    "question_en": "'Sarvathā' (Completely/In every way) is what type of adverb?",
    "question_hi": "'सर्वथा' (Sarvatha) शब्द किस प्रकार का क्रियाविशेषण है?",
    "options_en": ["Sthanavachak (Place)", "Ritivachak (Manner)", "Kalavachak (Time)", "Dishavachak (Directional)"],
    "options_hi": ["स्थानवाचक", "रीतिवाचक", "कालवाचक", "दिशावाचक"],
    "correct_option_index": 1,
    "explanation_en": "'Sarvathā' (completely, in every way) indicates manner/type.",
    "explanation_hi": "'सर्वथा' (completely, in every way) रीति/प्रकार को इंगित करता है।"
  },
  {
    "question_en": "The word 'vyartha' (Uselessly), which is Sanskrit Tatsama, falls under which adverb type?",
    "question_hi": "'व्यर्थ' (Vyartha) शब्द, जो संस्कृत तत्सम है, किस क्रियाविशेषण भेद के अंतर्गत आता है?",
    "options_en": ["Parinamavachak (Quantity)", "Sthanavachak (Place)", "Ritivachak (Manner)", "Kalavachak (Time)"],
    "options_hi": ["परिणामवाचक", "स्थानवाचक", "रीतिवाचक", "कालवाचक"],
    "correct_option_index": 2,
    "explanation_en": "'Vyartha' (Uselessly) describes the manner/way the action is done.",
    "explanation_hi": "'व्यर्थ' (Uselessly) क्रिया होने के ढंग/रीति को बताता है।"
  },
  {
    "question_en": "If an adverb describes the 'result' or 'quantity' (mātrā) of an action, what is it called?",
    "question_hi": "यदि कोई क्रिया विशेषण किसी क्रिया के 'परिणाम' या 'मात्रा' को बताता है, तो उसे क्या कहा जाता है?",
    "options_en": ["Sthanavachak (Place)", "Ritivachak (Manner)", "Parinamavachak (Quantity)", "Kalavachak (Time)"],
    "options_hi": ["स्थानवाचक", "रीतिवाचक", "परिणामवाचक", "कालवाचक"],
    "correct_option_index": 2,
    "explanation_en": "Parinamavachak Kriyavisheshan (Adverb of Quantity).",
    "explanation_hi": "परिणामवाचक क्रियाविशेषण।"
  },
  {
    "question_en": "The word 'vastutaḥ' (Actually/In reality) falls under which adverb type?",
    "question_hi": "'वस्तुतः' (Vastutah) शब्द, जिसका अर्थ 'वास्तव में' है, किस क्रियाविशेषण भेद के अंतर्गत आता है?",
    "options_en": ["Kalavachak (Time)", "Parinamavachak (Quantity)", "Ritivachak (Manner)", "Sthitiyachak (Positional)"],
    "options_hi": ["कालवाचक", "परिणामवाचक", "रीतिवाचक", "स्थितियाचक"],
    "correct_option_index": 2,
    "explanation_en": "It indicates the manner or type of the action.",
    "explanation_hi": "यह क्रिया होने की रीति या प्रकार को इंगित करता है।"
  },
  {
    "question_en": "'Bahudhā' (Frequently) is an example of which adverb type?",
    "question_hi": "'बहुधा' (Bahudha) शब्द किस क्रियाविशेषण भेद का उदाहरण है?",
    "options_en": ["Sthanavachak (Place)", "Parinamavachak (Quantity)", "Kalavachak (Time)", "Ritivachak (Manner)"],
    "options_hi": ["स्थानवाचक", "परिणामवाचक", "कालवाचक", "रीतिवाचक"],
    "correct_option_index": 2,
    "explanation_en": "'Bahudhā' (frequently) indicates the frequency of time.",
    "explanation_hi": "'बहुधा' (frequently) समय की आवृत्ति को दर्शाता है।"
  },
  {
    "question_en": "The word 'punaḥ' (Again), which is Sanskrit Tatsama, falls under which adverb type?",
    "question_hi": "'पुनः' (Punah) शब्द, जो संस्कृत तत्सम है, किस क्रियाविशेषण भेद के अंतर्गत आता है?",
    "options_en": ["Sthanavachak (Place)", "Ritivachak (Manner)", "Kalavachak (Time)", "Parinamavachak (Quantity)"],
    "options_hi": ["स्थानवाचक", "रीतिवाचक", "कालवाचक", "परिणामवाचक"],
    "correct_option_index": 2,
    "explanation_en": "'Punaḥ' (Again) indicates time/frequency.",
    "explanation_hi": "'पुनः' (Again) समय/आवृत्ति को सूचित करता है।"
  },
  {
    "question_en": "The word 'sāth' (together/with), which is a Tadbhava form from Sanskrit 'sārdham', is which type of adverb according to meaning?",
    "question_hi": "'साथ' (Saath) शब्द जो संस्कृत 'सार्धम्' से तद्भव रूप में आया है, अर्थ के अनुसार कौन-सा क्रियाविशेषण है?",
    "options_en": ["Kalavachak (Time)", "Ritivachak (Manner)", "Sthanavachak (Place)", "Parinamavachak (Quantity)"],
    "options_hi": ["कालवाचक", "रीतिवाचक", "स्थानवाचक", "परिणामवाचक"],
    "correct_option_index": 2,
    "explanation_en": "'Sāth' (together/with) indicates position/accompaniment (often considered manner or place).",
    "explanation_hi": "'साथ' स्थिति को दर्शाता है।"
  },
  {
    "question_en": "The word 'sāmne' (in front), which is a Tadbhava form from Sanskrit 'sammukham', falls under which adverb type?",
    "question_hi": "'सामने' (Saamne) शब्द जो संस्कृत 'सम्मुखम्' से तद्भव रूप में आया है, किस क्रियाविशेषण भेद के अंतर्गत आता है?",
    "options_en": ["Dishavachak (Directional)", "Sthitiyachak (Positional)", "Kalavachak (Time)", "Parinamavachak (Quantity)"],
    "options_hi": ["दिशावाचक", "स्थितियाचक", "कालवाचक", "परिणामवाचक"],
    "correct_option_index": 1,
    "explanation_en": "'Sāmne' (in front) indicates position/place.",
    "explanation_hi": "'सामने' स्थिति/स्थान को दर्शाता है।"
  },
  {
    "question_en": "The word 'sahasā' (Suddenly), meaning 'unexpectedly', falls under which adverb type?",
    "question_hi": "'सहसा' (Sahasa) शब्द जो 'अचानक' का अर्थ देता है, किस क्रियाविशेषण भेद के अंतर्गत आता है?",
    "options_en": ["Kalavachak (Time)", "Parinamavachak (Quantity)", "Ritivachak (Manner)", "Sthanavachak (Place)"],
    "options_hi": ["कालवाचक", "परिणामवाचक", "रीतिवाचक", "स्थानवाचक"],
    "correct_option_index": 2,
    "explanation_en": "'Sahasā' (Suddenly) describes the way (manner) the action happens.",
    "explanation_hi": "'सहसा' (Suddenly) क्रिया के होने का तरीका (ढंग) बताता है।"
  },
  {
    "question_en": "In the types of adverbs, what does 'Kāla' (Time) refer to?",
    "question_hi": "क्रियाविशेषणों के भेदों में 'काल' से क्या तात्पर्य है?",
    "options_en": ["Manner of the action", "Place of the action", "Time of the action", "Quantity of the action"],
    "options_hi": ["क्रिया का ढंग", "क्रिया का स्थान", "क्रिया का समय", "क्रिया की मात्रा"],
    "correct_option_index": 2,
    "explanation_en": "Kalavachak (Adverb of Time) indicates the time of the action.",
    "explanation_hi": "कालवाचक क्रिया के समय को सूचित करता है।"
  },
  {
    "question_en": "If an adverb indicates the 'quantity' (mātrā) of an action, what type of question does it answer?",
    "question_hi": "यदि क्रिया विशेषण किसी क्रिया के 'मात्रा' को इंगित करता है, तो यह किस प्रकार के प्रश्न का उत्तर देता है?",
    "options_en": ["Where? (Kahān?)", "When? (Kab?)", "How? (Kaise?)", "How much? (Kitnā?)"],
    "options_hi": ["कहाँ?", "कब?", "कैसे?", "कितना?"],
    "correct_option_index": 3,
    "explanation_en": "'Kitnā' (How much) is the question for quantity (parinam).",
    "explanation_hi": "'कितना' मात्रा (परिणाम) का प्रश्न है।"
  },
  {
    "question_en": "As 'Avyay' (indeclinable), which other parts of speech accompany adverbs?",
    "question_hi": "'अव्यय' के रूप में क्रिया विशेषण के साथ और कौन-से शब्द-भेद आते हैं?",
    "options_en": ["Noun, Pronoun, Adjective", "Postposition, Conjunction, Interjection", "Verb, Adjective, Verbal Noun", "Only Adverbs"],
    "options_hi": ["संज्ञा, सर्वनाम, विशेषण", "सम्बन्धसूचक, समुच्चयबोधक, विस्मयादिबोधक", "क्रिया, विशेषण, क्रियार्थक संज्ञा", "केवल क्रियाविशेषण"],
    "correct_option_index": 1,
    "explanation_en": "All these are Avikari (Avyay) words.",
    "explanation_hi": "ये सभी अविकारी (अव्यय) शब्द हैं।"
  },
  {
    "question_en": "The word 'fauran' (immediately) came into Hindi from which original language?",
    "question_hi": "'फौरन' (Fauran) शब्द किस मूल भाषा से हिंदी में आया है?",
    "options_en": ["Sanskrit", "Persian", "Arabic", "English"],
    "options_hi": ["संस्कृत", "फ़ारसी", "अरबी", "अंग्रेजी"],
    "correct_option_index": 1,
    "explanation_en": "'Fauran' is listed under Urdu adverbs (likely from Persian).",
    "explanation_hi": "'फौरन' उर्दू क्रियाविशेषण की सूची में है।"
  },
  {
    "question_en": "Which of the following words is an Urdu Tadbhava adverb?",
    "question_hi": "निम्नलिखित में से कौन-सा शब्द उर्दू तद्भव क्रियाविशेषण है?",
    "options_en": ["Zarūr (Certainly)", "Aksar (Often)", "Hamesha (Always)", "Nagīch (Near)"],
    "options_hi": ["जरूर", "अक्सर", "हमेशा", "नगीच"],
    "correct_option_index": 2,
    "explanation_en": "'Hamesha' is a Tadbhava form derived from Persian 'hameshāh'.",
    "explanation_hi": "'हमेशा' फारसी 'हमेशह्' से तद्भव रूप में आया है।"
  },
  {
    "question_en": "If nasalization (vikar) occurs in non-nasalized (niranunāsik) words (like 'karūṇ'), what grammatical reason causes this change?",
    "question_hi": "'निरनुनासिक' शब्दों में यदि अनुनासिकता का विकार आ जाए (जैसे 'करूँ'), तो यह परिवर्तन किस व्याकरणिक कारण से होता है?",
    "options_en": ["Due to gender", "Due to person or number", "Due to case", "Due to the verb's name"],
    "options_hi": ["लिंग के कारण", "पुरुष या वचन के कारण", "कारक के कारण", "क्रिया के नाम के कारण"],
    "correct_option_index": 1,
    "explanation_en": "The pronunciation of the anusvara that appears due to the inflection of person or number is nasal.",
    "explanation_hi": "पुरुष अथवा वचन के विकार के कारण आने वाले अनुस्वार का उच्चारण अनुनासिक होता है।"
  },
  {
    "question_en": "Why are 'Avikari' (indeclinable) words used?",
    "question_hi": "'अविकारी' शब्दों का प्रयोग क्यों किया जाता है?",
    "options_en": ["So they are not affected by gender, number, case.", "So they do not describe the verb.", "So they always remain as the subject.", "So they are taken only from Sanskrit."],
    "options_hi": ["ताकि वे लिंग, वचन, कारक से प्रभावित न हों।", "ताकि वे क्रिया की विशेषता न बताएँ।", "ताकि वे हमेशा कर्ता के रूप में रहें।", "ताकि वे केवल संस्कृत से लिए गए हों।"],
    "correct_option_index": 0,
    "explanation_en": "Unlike Vikari words, Avikari words (Avyay) do not undergo inflection (vikar).",
    "explanation_hi": "विकारी शब्दों के विपरीत अविकारी शब्द (अव्यय) में कोई विकार नहीं होता।"
  },
  {
    "question_en": "The word 'shāyad' (Perhaps), which is an Urdu adverb, is which type of adverb according to meaning?",
    "question_hi": "'शायद' (Shaayad) शब्द, जो उर्दू क्रियाविशेषण है, अर्थ के अनुसार कौन-सा क्रियाविशेषण है?",
    "options_en": ["Ritivachak (Manner)", "Parinamavachak (Quantity)", "Kalavachak (Time)", "Sthanavachak (Place)"],
    "options_hi": ["रीतिवाचक", "परिणामवाचक", "कालवाचक", "स्थानवाचक"],
    "correct_option_index": 0,
    "explanation_en": "'Shāyad' (Perhaps) indicates the uncertain manner or way the action happens.",
    "explanation_hi": "'शायद' (Perhaps) क्रिया के होने की अनिश्चित रीति या ढंग को सूचित करता है।"
  },
  {
    "question_en": "The word 'ṭhīk' or 'sahī' (Correctly), an Urdu Tadbhava adverb of Arabic origin, falls under which adverb type?",
    "question_hi": "'ठीक' या 'सही' (Sahi) शब्द, जो अरबी मूल का उर्दू तद्भव क्रियाविशेषण है, किस क्रियाविशेषण भेद के अंतर्गत आता है?",
    "options_en": ["Kalavachak (Time)", "Sthanavachak (Place)", "Parinamavachak (Quantity)", "Ritivachak (Manner)"],
    "options_hi": ["कालवाचक", "स्थानवाचक", "परिणामवाचक", "रीतिवाचक"],
    "correct_option_index": 3,
    "explanation_en": "'Sahī' (Correctly) indicates the manner of doing the action.",
    "explanation_hi": "'सही' (Correctly) क्रिया करने के ढंग को दर्शाता है।"
  },
  {
    "question_en": "The word 'bālā bālā' (stealthily/quietly), which is an Urdu adverb, is used in what context?",
    "question_hi": "'बाला बाला' (Bala Bala) शब्द, जो उर्दू क्रियाविशेषण है, इसका प्रयोग किस संदर्भ में किया जाता है?",
    "options_en": ["Place", "Manner", "Reason", "Time"],
    "options_hi": ["स्थान", "रीति", "कारण", "समय"],
    "correct_option_index": 1,
    "explanation_en": "'Bālā bālā' (stealthily/quietly) indicates the manner of doing the action.",
    "explanation_hi": "'बाला बाला' (stealthily/quietly) क्रिया करने के तरीके को दर्शाता है।"
  },
  {
    "question_en": "'Tatsama' adverb words generally come directly into Hindi from which language?",
    "question_hi": "'तत्सम' क्रिया विशेषण शब्द प्रायः किस भाषा से सीधे हिंदी में आते हैं?",
    "options_en": ["Persian", "Arabic", "Sanskrit", "English"],
    "options_hi": ["फ़ारसी", "अरबी", "संस्कृत", "अंग्रेजी"],
    "correct_option_index": 2,
    "explanation_en": "Tatsama words come directly into Hindi from Sanskrit.",
    "explanation_hi": "तत्सम शब्द संस्कृत से सीधे हिंदी में आते हैं।"
  },
  {
    "question_en": "If an adverb is derived from the word 'yathā' (as), from which category does it come?",
    "question_hi": "यदि कोई क्रिया विशेषण 'यथा' (Yathaa) शब्द से बना है, तो वह किस श्रेणी से आया है?",
    "options_en": ["Urdu Tadbhava", "Sanskrit Tatsama", "Compound Adverb", "Tadbhava"],
    "options_hi": ["उर्दू तद्भव", "संस्कृत तत्सम", "यौगिक क्रिया विशेषण", "तद्भव"],
    "correct_option_index": 1,
    "explanation_en": "'Yathā' is a Tatsama adverb.",
    "explanation_hi": "'यथा' तत्सम क्रिया विशेषण है।"
  },
  {
    "question_en": "Which of the following parts of speech, like adverbs, falls into the category of Avikari words (Avyay)?",
    "question_hi": "निम्नलिखित में से कौन-सा शब्द-भेद, क्रिया विशेषण के समान, अविकारी शब्द (अव्यय) की श्रेणी में आता है?",
    "options_en": ["Noun (Sangya)", "Adjective (Visheshan)", "Postposition (Sambandhsuchak)", "Pronoun (Sarvanam)"],
    "options_hi": ["संज्ञा", "विशेषण", "सम्बन्धसूचक", "सर्वनाम"],
    "correct_option_index": 2,
    "explanation_en": "Postpositions (Sambandhsuchak) are Avikari words.",
    "explanation_hi": "सम्बन्धसूचक अविकारी शब्द है।"
  },
  {
    "question_en": "'Shakuntala van mein padi mili thi' (Shakuntala was found lying in the forest) - In this sentence, if we need to find the place of the action, which adverb would be used?",
    "question_hi": "'शकुंतला वन में पड़ी मिली थी' - इस वाक्य में यदि हमें क्रिया के स्थान का पता लगाना हो, तो किस क्रिया विशेषण का प्रयोग होगा?",
    "options_en": ["Jab (When)", "Jaldi (Quickly)", "Kahān (Where)", "Kitnā (How much)"],
    "options_hi": ["जब", "जल्दी", "कहाँ", "कितना"],
    "correct_option_index": 2,
    "explanation_en": "'Kahān' (Where) is the interrogative form of the Adverb of Place.",
    "explanation_hi": "'कहाँ' स्थानवाचक क्रिया विशेषण का प्रश्नवाचक रूप है।"
  },
  {
    "question_en": "The words 'jhīl' (lake) and 'nadī' (river) are what type of parts of speech, falling into the opposite category from adverbs?",
    "question_hi": "'झील' और 'नदी' शब्द किस प्रकार के शब्द-भेद हैं, जो क्रियाविशेषण से विपरीत श्रेणी में आते हैं?",
    "options_en": ["Pronoun", "Adjective", "Vikari Noun (Declinable Noun)", "Avyay (Indeclinable)"],
    "options_hi": ["सर्वनाम", "विशेषण", "विकारी संज्ञा", "अव्यय"],
    "correct_option_index": 2,
    "explanation_en": "Nouns (like jhīl, nadī) are Vikari (declinable) words [Previous context].",
    "explanation_hi": "संज्ञा (जैसे झील, नदी) विकारी शब्द हैं [Previous context]।"
  },
  {
    "question_en": "What is the main function of an 'Sthanavachak Kriyavisheshan' (Adverb of Place)?",
    "question_hi": "'स्थानवाचक क्रियाविशेषण' का मुख्य कार्य क्या होता है?",
    "options_en": ["To modify the verb", "To indicate the place of the action", "To indicate the time of the action", "To indicate the type of noun"],
    "options_hi": ["क्रिया की विशेषता बताना", "क्रिया के स्थान को बताना", "क्रिया का समय बताना", "संज्ञा का प्रकार बताना"],
    "correct_option_index": 1,
    "explanation_en": "An Adverb of Place indicates the location where the action takes place.",
    "explanation_hi": "स्थानवाचक क्रिया विशेषण क्रिया के होने के स्थान को बताता है।"
  },
  {
    "question_en": "'Vah dhīre-dhīre chal rahā hai' (He is walking slowly) — In the adverbial phrase in this sentence, what is 'chal rahā hai'?",
    "question_hi": "'वह धीरे-धीरे चल रहा है'— इस वाक्य में क्रियाविशेषण पदबंध में 'चल रहा है' क्या है?",
    "options_en": ["Subject", "Verb", "Noun", "Adjective"],
    "options_hi": ["कर्ता", "क्रिया", "संज्ञा", "विशेषण"],
    "correct_option_index": 1,
    "explanation_en": "'Chal rahā hai' (is walking) is the verb.",
    "explanation_hi": "'चल रहा है' क्रिया है।"
  },
  {
    "question_en": "The postposition 'par' (on/at) is optionally used with words like 'kahān', 'yahān', 'vahān'. 'Par' is a marker for which case (Karak)?",
    "question_hi": "'कहाँ', 'यहाँ', 'वहाँ' जैसे शब्दों में 'पर' विभक्ति का प्रयोग वैकल्पिक रूप से होता है। यह 'पर' किस कारक का चिन्ह है?",
    "options_en": ["Objective (Karma)", "Instrumental (Karan)", "Dative (Sampradan)", "Locative (Adhikaran)"],
    "options_hi": ["कर्म कारक", "करण कारक", "सम्प्रदान कारक", "अधिकरण कारक"],
    "correct_option_index": 3,
    "explanation_en": "The markers for the Locative case (Adhikaran karak) are 'mein, pai, par' (in, on, at).",
    "explanation_hi": "अधिकरण कारक का चिन्ह 'में, पै, पर' होता है।"
  },
  {
    "question_en": "'Sārthak' (meaningful) adverbs (expressing meaning) share a similar quality with which part of speech?",
    "question_hi": "'सार्थक' क्रियाविशेषण (अर्थ को व्यक्त करने वाला) किस शब्द-भेद के समान गुण रखता है?",
    "options_en": ["Noun", "Verb", "Adjective", "Pronoun"],
    "options_hi": ["संज्ञा", "क्रिया", "विशेषण", "सर्वनाम"],
    "correct_option_index": 2,
    "explanation_en": "An adverb describes the quality (guna) of a verb, just as an adjective describes the quality of a noun.",
    "explanation_hi": "क्रियाविशेषण क्रिया की विशेषता (गुण) बताता है, जैसे विशेषण संज्ञा की विशेषता बताता है।"
  },
  {
    "question_en": "Words like 'āj' (today) and 'kal' (tomorrow/yesterday), which indicate time, are categorized under which type of Adverb of Time?",
    "question_hi": "'आज' और 'कल' शब्द जो काल का बोध कराते हैं, उन्हें किस प्रकार के कालवाचक क्रियाविशेषण की श्रेणी में रखा जाता है?",
    "options_en": ["Duration (Avadhivachak)", "Point in time (Samayavachak)", "Frequency (Barambartavachak)", "None of these"],
    "options_hi": ["अवधिवाचक", "समयवाचक", "बारंबारतावाचक", "इनमें से कोई नहीं"],
    "correct_option_index": 1,
    "explanation_en": "(No clear classification in sources, but 'āj', 'kal' are time indicators).",
    "explanation_hi": "(स्रोतों में स्पष्ट वर्गीकरण नहीं है, पर 'आज', 'कल' समय सूचक हैं)।"
  },
  {
    "question_en": "If words like 'ūpar' (above) and 'nīche' (below) are used in an Adverb of Place, which sub-type do they represent?",
    "question_hi": "यदि 'स्थानवाचक क्रियाविशेषण' में 'ऊपर' और 'नीचे' जैसे शब्दों का प्रयोग हो, तो वे किस उपभेद को दर्शाते हैं?",
    "options_en": ["Directional (Dishavachak)", "Positional (Sthitiyachak)", "Temporal (Kalavachak)", "Interrogative (Prashnavachak)"],
    "options_hi": ["दिशावाचक", "स्थितियाचक", "कालवाचक", "प्रश्नवाचक"],
    "correct_option_index": 1,
    "explanation_en": "'Ūpar' (above) and 'nīche' (below) indicate position.",
    "explanation_hi": "'ऊपर' और 'नीचे' स्थिति बताते हैं।"
  },
  {
    "question_en": "'Tadbhava' adverb words come into Hindi transformed from which language?",
    "question_hi": "'तद्भव' क्रियाविशेषण शब्द किस भाषा से रूपांतरित होकर हिंदी में आते हैं?",
    "options_en": ["Arabic", "Persian", "Sanskrit", "English"],
    "options_hi": ["अरबी", "फ़ारसी", "संस्कृत", "अंग्रेजी"],
    "correct_option_index": 2,
    "explanation_en": "Tadbhava words come transformed from Sanskrit (e.g., adya to āj).",
    "explanation_hi": "तद्भव शब्द संस्कृत से रूपांतरित होकर आते हैं (जैसे अद्य से आज)।"
  },
  {
    "question_en": "The Urdu adverb 'ākhir' (finally/at last) is a Tadbhava form derived from which Arabic word?",
    "question_hi": "उर्दू क्रियाविशेषण 'आखिर' (Aakhir) किस अरबी शब्द से तद्भव रूप में आया है?",
    "options_en": ["'jald'", "'sahīh'", "'ākhir'", "'nazdīk'"],
    "options_hi": ["'जल्द'", "'सहीह्'", "'आखिर'", "'नजदीक'"],
    "correct_option_index": 2,
    "explanation_en": "'Ākhir' is a Tadbhava form derived from the Arabic word 'ākhir'.",
    "explanation_hi": "'आखिर' अरबी शब्द 'आखिर' से तद्भव रूप में आया है।"
  },
  {
    "question_en": "In 'saghan jāl' (dense net), what is the word 'saghan' (dense) from a grammatical perspective?",
    "question_hi": "'सघन जाल' (Saghan Jaal) में 'सघन' शब्द व्याकरण की दृष्टि से क्या है?",
    "options_en": ["Adverb", "Noun", "Adjective", "Pronoun"],
    "options_hi": ["क्रियाविशेषण", "संज्ञा", "विशेषण", "सर्वनाम"],
    "correct_option_index": 2,
    "explanation_en": "'Saghan' (dense) describes the quality of 'jāl' (net - noun), it is not an adverb.",
    "explanation_hi": "'सघन' (घनत्व) जाल (संज्ञा) की विशेषता बता रहा है, यह क्रियाविशेषण नहीं है।"
  },
  {
    "question_en": "The word 'bilkul' (absolutely), which is an Urdu adverb, will fall under which adverb type?",
    "question_hi": "'बिलकुल' (Bilqul) शब्द जो उर्दू क्रियाविशेषण है, किस क्रियाविशेषण भेद के अंतर्गत आएगा?",
    "options_en": ["Ritivachak (Manner)", "Parinamavachak (Quantity)", "Kalavachak (Time)", "Sthanavachak (Place)"],
    "options_hi": ["रीतिवाचक", "परिणामवाचक", "कालवाचक", "स्थानवाचक"],
    "correct_option_index": 1,
    "explanation_en": "'Bilkul' (absolutely) indicates either quantity (completely) or certainty (manner), but is more often considered quantitative.",
    "explanation_hi": "'बिलकुल' मात्रा या निश्चितता (ढंग) दोनों को इंगित करता है, पर अधिक मात्रा में परिणामवाचक माना जाता है।"
  },
  {
    "question_en": "Repeated words like 'śanaiḥ śanaiḥ' (slowly slowly) are used in which adverb type?",
    "question_hi": "'सनैः शनैः' (Shanaih Shanaih) जैसे पुनरुक्त शब्दों का प्रयोग किस क्रियाविशेषण भेद में होता है?",
    "options_en": ["Sthanavachak (Place)", "Ritivachak (Manner)", "Kalavachak (Time)", "Parinamavachak (Quantity)"],
    "options_hi": ["स्थानवाचक", "रीतिवाचक", "कालवाचक", "परिणामवाचक"],
    "correct_option_index": 1,
    "explanation_en": "'Śanaiḥ' (slowly) is an Adverb of Manner.",
    "explanation_hi": "'शनैः' (धीरे) रीतिवाचक है।"
  },
  {
    "question_en": "Which of the following is NOT an Adverb of Time (Kalavachak)?",
    "question_hi": "निम्नलिखित में से कौन-सा कालवाचक क्रियाविशेषण नहीं है?",
    "options_en": ["Sarvadā (Always)", "Āj (Today)", "Parsoṇ (Day after tomorrow/before yesterday)", "Nagīch (Near)"],
    "options_hi": ["सर्वदा", "आज", "परसों", "नगीच"],
    "correct_option_index": 3,
    "explanation_en": "'Nagīch' (Near) is an Adverb of Place.",
    "explanation_hi": "'नगीच' स्थानवाचक है।"
  },
  {
    "question_en": "'Quartz' is a noun. If an adverb 'atyadhik' (excessively) is used, under which type will it fall?",
    "question_hi": "'क्वाट्ज़' (Quartz) संज्ञा है, लेकिन यदि कोई क्रिया विशेषण 'अत्यधिक' शब्द का प्रयोग करती है, तो वह किस भेद के तहत आएगी?",
    "options_en": ["Ritivachak (Manner)", "Parinamavachak (Quantity)", "Kalavachak (Time)", "Sthanavachak (Place)"],
    "options_hi": ["रीतिवाचक", "परिणामवाचक", "कालवाचक", "स्थानवाचक"],
    "correct_option_index": 1,
    "explanation_en": "'Atyadhik' (excessively) indicates quantity.",
    "explanation_hi": "'अत्यधिक' (excessively) मात्रा को सूचित करता है।"
  },
  {
    "question_en": "What is the origin of the word 'sahī' (correctly) in the list of Urdu adverbs?",
    "question_hi": "उर्दू क्रियाविशेषणों की सूची में 'सही' शब्द का मूल क्या है?",
    "options_en": ["Arabic 'sahīh'", "Persian 'sa'", "Sanskrit 'sam'", "Hindi 'sach'"],
    "options_hi": ["अरबी 'सहीह्'", "फारसी 'स'", "संस्कृत 'सम'", "हिंदी 'सच'"],
    "correct_option_index": 0,
    "explanation_en": "'Sahī' is a Tadbhava form derived from Arabic 'sahīh'.",
    "explanation_hi": "'सही' अरबी 'सहीह्' से तद्भव रूप में आया है।"
  },
  {
    "question_en": "If the words 'kyā' (what) and 'kuchh' (some) are used as Avyay (indeclinables) (as suggested in one source), what would their function be?",
    "question_hi": "यदि किसी वाक्य में 'क्या' और 'कुछ' शब्द अव्यय के रूप में प्रयोग हों (जैसा कि एक स्रोत में सुझाया गया है), तो उनका कार्य क्या होगा?",
    "options_en": ["Describing a noun", "Affecting the verb", "Only asking a question", "Only showing certainty"],
    "options_hi": ["संज्ञा की विशेषता बताना", "क्रिया को प्रभावित करना", "केवल प्रश्न पूछना", "केवल निश्चय करना"],
    "correct_option_index": 1,
    "explanation_en": "Avyay, in the form of adverbs, affect the verb.",
    "explanation_hi": "अव्यय क्रियाविशेषण के रूप में क्रिया को प्रभावित करते हैं।"
  },
  {
    "question_en": "What is the fundamental difference between 'Pronoun' (Sarvanam) and 'Adverb' (Kriyavisheshan)?",
    "question_hi": "'सर्वनाम' और 'क्रियाविशेषण' में मौलिक अंतर क्या है?",
    "options_en": ["Pronoun is Vikari (declinable), Adverb is Avikari (indeclinable).", "Adverb is Vikari, Pronoun is Avikari.", "Both are Vikari.", "Both are Avikari."],
    "options_hi": ["सर्वनाम विकारी है, क्रियाविशेषण अविकारी।", "क्रियाविशेषण विकारी है, सर्वनाम अविकारी।", "दोनों विकारी हैं।", "दोनों अविकारी हैं।"],
    "correct_option_index": 0,
    "explanation_en": "Pronoun is a Vikari word, while Adverb is an Avikari word [Previous context, 165].",
    "explanation_hi": "सर्वनाम विकारी शब्द है, जबकि क्रियाविशेषण अविकारी शब्द है [Previous context, 165]।"
  },
  {
    "question_en": "What is the most decisive factor in identifying an adverb?",
    "question_hi": "क्रियाविशेषण की पहचान करने के लिए सबसे निर्णायक तत्व क्या है?",
    "options_en": ["The root form of the word", "The gender of the word", "Its direct relation to the verb", "The length of the sentence"],
    "options_hi": ["शब्द का मूल रूप", "शब्द का लिंग", "क्रिया से उसका सीधा संबंध", "वाक्य की लंबाई"],
    "correct_option_index": 2,
    "explanation_en": "An adverb modifies (describes) a verb.",
    "explanation_hi": "क्रियाविशेषण क्रिया की विशेषता बताता है।"
  },
  {
    "question_en": "Pronouns that take the suffix 'hī' for emphasis (avadhāraṇ) (like 'vahī', 'yahī'), in adverbs derived from them, what meaning can 'hī' be used for?",
    "question_hi": "'सर्वनाम' जो अवधारण (निश्चितता) के लिए 'ही' प्रत्यय लेते हैं (जैसे- 'वही', 'यही'), उनसे बने क्रियाविशेषण में 'ही' का प्रयोग किस अर्थ में किया जा सकता है?",
    "options_en": ["Adverb of Manner", "Emphatic particle (Avyay)", "Definite Adverb of Time", "Definite Adverb of Place"],
    "options_hi": ["रीतिवाचक", "बलदायक अव्यय", "निश्चित कालवाचक", "निश्चित स्थानवाचक"],
    "correct_option_index": 1,
    "explanation_en": "'Hī' is an Avyay (particle) that provides emphasis.",
    "explanation_hi": "'ही' एक अव्यय है जो बल प्रदान करता है।"
  },
  {
    "question_en": "'Shakuntala van mein padi mili thi' (Shakuntala was found lying in the forest) — In this sentence, the phrase 'van mein' (in the forest) functions as what type of adverb?",
    "question_hi": "'शकुंतला वन में पड़ी मिली थी'—इस वाक्य में, 'वन में' वाक्यांश किस प्रकार के क्रियाविशेषण का कार्य करता है?",
    "options_en": ["Ritivachak (Manner)", "Kalavachak (Time)", "Sthanavachak (Place)", "Parinamavachak (Quantity)"],
    "options_hi": ["रीतिवाचक", "कालवाचक", "स्थानवाचक", "परिणामवाचक"],
    "correct_option_index": 2,
    "explanation_en": "'Van mein' (in the forest) indicates the place of the action.",
    "explanation_hi": "'वन में' क्रिया के स्थान को बताता है।"
  },
  {
    "question_en": "Why can the word 'jaldī' (quickly) (Tadbhava from Persian 'jald') be placed in both Adverb of Manner and Adverb of Time categories?",
    "question_hi": "'जल्दी' शब्द (जो फारसी 'जल्द' से तद्भव है) को रीतिवाचक और कालवाचक दोनों में क्यों रखा जा सकता है?",
    "options_en": ["Because it indicates place.", "Because it indicates both the intensity (manner) and time of the action.", "Because it is a Tatsama word.", "Because it is a Vikari word."],
    "options_hi": ["क्योंकि यह स्थान बताता है।", "क्योंकि यह क्रिया की तीव्रता (रीति) और समय (काल) दोनों बताता है।", "क्योंकि यह एक तत्सम शब्द है।", "क्योंकि यह विकारी शब्द है।"],
    "correct_option_index": 1,
    "explanation_en": "(Grammatically, 'jaldī' can indicate the speed/manner or the promptness in time).",
    "explanation_hi": "(व्याकरण में 'जल्दी' समय की तीव्रता या ढंग बताता है)।"
  },
  {
    "question_en": "The word 'satat' (continuously), which is a Tadbhava form from Sanskrit 'satatam', is which type of adverb?",
    "question_hi": "'सतत' (Satat) शब्द जो संस्कृत 'सततम्' से तद्भव रूप में आया है, कौन-सा क्रियाविशेषण है?",
    "options_en": ["Parinamavachak (Quantity)", "Kalavachak (Time)", "Sthanavachak (Place)", "Ritivachak (Manner)"],
    "options_hi": ["परिणामवाचक", "कालवाचक", "स्थानवाचक", "रीतिवाचक"],
    "correct_option_index": 1,
    "explanation_en": "'Satat' (continuously/always) is an Adverb of Time.",
    "explanation_hi": "'सतत' (continuously/always) कालवाचक है।"
  },
  {
    "question_en": "Why are adverb words called 'Avyay'?",
    "question_hi": "क्रिया विशेषण शब्द 'अव्यय' क्यों कहलाते हैं?",
    "options_en": ["Because they come in place of nouns.", "Because there is no 'vyay' (change/expenditure) in their form.", "Because they are only for verbs.", "Because they function as adjectives."],
    "options_hi": ["क्योंकि वे संज्ञा के स्थान पर आते हैं।", "क्योंकि उनके रूप में कोई व्यय (परिवर्तन) नहीं होता।", "क्योंकि वे केवल क्रिया के लिए होते हैं।", "क्योंकि वे विशेषण का कार्य करते हैं।"],
    "correct_option_index": 1,
    "explanation_en": "Avyay (a + vyay) means that in which there is no inflection (vikar).",
    "explanation_hi": "अव्यय (अ + व्यय) अर्थात् जिसमें विकार न हो।"
  },
  {
    "question_en": "The word 'hamesha' (always) (Urdu Tadbhava) is which type of adverb according to meaning?",
    "question_hi": "'हमेशा' शब्द (उर्दू तद्भव) अर्थ के अनुसार किस प्रकार का क्रियाविशेषण है?",
    "options_en": ["Ritivachak (Manner)", "Sthanavachak (Place)", "Kalavachak (Time)", "Parinamavachak (Quantity)"],
    "options_hi": ["रीतिवाचक", "स्थानवाचक", "कालवाचक", "परिणामवाचक"],
    "correct_option_index": 2,
    "explanation_en": "'Hamesha' (always) indicates the continuity of time.",
    "explanation_hi": "'हमेशा' (always) समय की निरंतरता बताता है।"
  },
  {
    "question_en": "Which Sanskrit Tatsama adverb could be the opposite meaning of 'śanaiḥ' (slowly), meaning 'suddenly'?",
    "question_hi": "'शनैः' (धीरे) का विपरीत अर्थ वाला शब्द (अचानक) कौन-सा संस्कृत तत्सम क्रियाविशेषण हो सकता है?",
    "options_en": ["Sarvatra (Everywhere)", "Sahasā (Suddenly)", "Sākṣāt (Directly)", "Yathā (As)"],
    "options_hi": ["सर्वत्र", "सहसा", "साक्षात्", "यथा"],
    "correct_option_index": 1,
    "explanation_en": "'Sahasā' (suddenly) is an Adverb of Manner.",
    "explanation_hi": "'सहसा' (suddenly) रीतिवाचक है।"
  },
  {
    "question_en": "The adverb 'sākṣāt' (Directly/In person) falls under which type?",
    "question_hi": "क्रियाविशेषण 'साक्षात्' (Saakshaat) किस भेद के अंतर्गत आता है?",
    "options_en": ["Kalavachak (Time)", "Parinamavachak (Quantity)", "Ritivachak (Manner)", "Sthitiyachak (Positional)"],
    "options_hi": ["कालवाचक", "परिणामवाचक", "रीतिवाचक", "स्थितियाचक"],
    "correct_option_index": 2,
    "explanation_en": "'Sākṣāt' (directly) indicates the manner of the action.",
    "explanation_hi": "'साक्षात्' (directly) क्रिया के ढंग को दर्शाता है।"
  },
  {
    "question_en": "If an adverb indicates 'jahān' (where) or 'kahān' (where) (Adverb of Place), which characteristic of the verb does it specify?",
    "question_hi": "यदि कोई क्रिया विशेषण 'जहाँ' या 'कहाँ' (स्थानवाचक) का बोध कराता है, तो वह क्रिया की किस विशेषता को बताता है?",
    "options_en": ["Certainty", "Uncertainty", "Direction", "Place"],
    "options_hi": ["निश्चितता", "अनिश्चितता", "दिशा", "स्थान"],
    "correct_option_index": 3,
    "explanation_en": "These words indicate the place of the action.",
    "explanation_hi": "ये शब्द क्रिया के स्थान को इंगित करते हैं।"
  },
  {
    "question_en": "The 'Tadbhava' Urdu adverb 'sahī' (correctly) is transformed from which Arabic word?",
    "question_hi": "'तद्भव' उर्दू क्रियाविशेषण 'सही' (Sahi) का रूपांतरण किस अरबी शब्द से हुआ है?",
    "options_en": ["nazdīk", "ākhir", "sahīh", "zarūr"],
    "options_hi": ["नजदीक", "आखिर", "सहीह्", "ज़रूर"],
    "correct_option_index": 2,
    "explanation_en": "'Sahī' is a Tadbhava form derived from Arabic 'sahīh'.",
    "explanation_hi": "'सही' अरबी 'सहीह्' से तद्भव रूप में आया है।"
  },
  {
    "question_en": "Why is the use of the postposition 'par' (on/at) optional with 'kahān', 'yahān', 'vahān'?",
    "question_hi": "'कहाँ', 'यहाँ', 'वहाँ' के साथ 'पर' विभक्ति का प्रयोग वैकल्पिक क्यों है?",
    "options_en": ["Because they are primarily adverbs, not nouns.", "Because they only indicate time.", "Because 'par' is a genitive case marker.", "Because 'par' is an adverb."],
    "options_hi": ["क्योंकि ये मूलतः क्रियाविशेषण हैं, न कि संज्ञा।", "क्योंकि ये केवल काल बताते हैं।", "क्योंकि 'पर' संबंध कारक है।", "क्योंकि 'पर' क्रियाविशेषण है।"],
    "correct_option_index": 0,
    "explanation_en": "They are primarily adverbs, but can take a postposition when used in the locative case.",
    "explanation_hi": "ये मूलतः क्रियाविशेषण हैं, लेकिन अधिकरण कारक के रूप में प्रयुक्त होने पर विभक्ति ले सकते हैं।"
  },
  {
    "question_en": "If adverbs are words like 'thoṛā' (a little) or 'adhik' (more), what type of adverbs would they be?",
    "question_hi": "यदि क्रिया विशेषण 'थोड़ा' या 'अधिक' जैसे शब्द हैं, तो वे किस प्रकार के क्रियाविशेषण होंगे?",
    "options_en": ["Ritivachak (Manner)", "Kalavachak (Time)", "Parinamavachak (Quantity)", "Sthitiyachak (Positional)"],
    "options_hi": ["रीतिवाचक", "कालवाचक", "परिणामवाचक", "स्थितियाचक"],
    "correct_option_index": 2,
    "explanation_en": "These indicate quantity (parinam).",
    "explanation_hi": "ये मात्रा (परिणाम) बताते हैं।"
  },
  {
    "question_en": "'Main āj jāūngā' (I will go today) — If 'āj' (today) is removed from this sentence, what effect will it have on the verb?",
    "question_hi": "'मैं आज जाऊँगा'— इस वाक्य में 'आज' को हटाने पर क्रिया पर क्या प्रभाव पड़ेगा?",
    "options_en": ["The gender of the verb will change.", "The place of the verb will change.", "The time of the verb will not be determined.", "The verb will be transformed."],
    "options_hi": ["क्रिया का लिंग बदल जाएगा।", "क्रिया का स्थान बदल जाएगा।", "क्रिया के समय का निर्धारण नहीं होगा।", "क्रिया का रूपांतरण हो जाएगा।"],
    "correct_option_index": 2,
    "explanation_en": "'Āj' (today) is an Adverb of Time.",
    "explanation_hi": "'आज' कालवाचक है।"
  },
  {
    "question_en": "If the repeated word 'bār-bār' (again and again) is considered an Adverb of Time, what type of frequency does it indicate?",
    "question_hi": "'बार-बार' पुनरुक्त शब्द को यदि कालवाचक माना जाए, तो यह किस प्रकार की आवृत्ति को दर्शाता है?",
    "options_en": ["Duration of time", "Beginning of time", "Repetition of time", "Definite time"],
    "options_hi": ["समय की अवधि", "समय की शुरुआत", "समय की पुनरावृत्ति", "निश्चित समय"],
    "correct_option_index": 2,
    "explanation_en": "'Bārambār' (bār-bār) indicates the frequency of time.",
    "explanation_hi": "'बारंबार' (बार-बार) समय की आवृत्ति दर्शाता है।"
  },
  {
    "question_en": "Which suffix is used in the word 'dhyānapūrvak' (attentively)?",
    "question_hi": "'ध्यानपूर्वक' शब्द में कौन-सा प्रत्यय प्रयुक्त हुआ है?",
    "options_en": ["dhyān", "pūrvak", "vak", "All of the above"],
    "options_hi": ["ध्यान", "पूर्वक", "वक", "उपर्युक्त सभी"],
    "correct_option_index": 1,
    "explanation_en": "The Adverb of Manner is formed by adding the suffix 'pūrvak' to the noun 'dhyān'.",
    "explanation_hi": "'ध्यान' संज्ञा में 'पूर्वक' प्रत्यय लगाकर रीतिवाचक क्रियाविशेषण बना है।"
  },
  {
    "question_en": "The word 'vahān' (there), which indicates place, is an example of which part of speech?",
    "question_hi": "'वहाँ' (Vahaan) शब्द, जो स्थान का बोध कराता है, किस प्रकार के शब्द-भेद का उदाहरण है?",
    "options_en": ["Vikari Adjective", "Pronoun", "Adverb of Place", "Conjunction"],
    "options_hi": ["विकारी विशेषण", "सर्वनाम", "स्थानवाचक क्रियाविशेषण", "समुच्चयबोधक"],
    "correct_option_index": 2,
    "explanation_en": "Adverb of Place.",
    "explanation_hi": "स्थानवाचक क्रियाविशेषण।"
  },
  {
    "question_en": "'Shakuntala' (noun) and 'yah' (pronoun) are both Vikari (declinable) words. Why is an adverb 'Avikari' (indeclinable)?",
    "question_hi": "'शकुंतला' (संज्ञा) और 'यह' (सर्वनाम) दोनों ही विकारी शब्द हैं। क्रियाविशेषण 'अविकारी' क्यों है?",
    "options_en": ["Because the characteristic of the verb does not depend on gender/number.", "Because it always comes in place of the subject.", "Because it comes before the verb.", "Because it only tells the time."],
    "options_hi": ["क्योंकि क्रिया की विशेषता लिंग/वचन पर निर्भर नहीं करती।", "क्योंकि यह सदैव कर्ता के स्थान पर आता है।", "क्योंकि यह क्रिया से पूर्व आता है।", "क्योंकि यह केवल काल को बताता है।"],
    "correct_option_index": 0,
    "explanation_en": "Avikari words do not undergo inflection (vikar) due to gender, number, or case.",
    "explanation_hi": "अविकारी शब्दों में लिंग, वचन या कारक के कारण विकार नहीं आता।"
  },
  {
    "question_en": "'Śanaiḥ' (slowly) and 'jaldī' (quickly) can both be Adverbs of Manner, but what is the origin of 'śanaiḥ'?",
    "question_hi": "'शनैः' (धीरे) और 'जल्दी' (जल्द) दोनों ही रीतिवाचक हो सकते हैं, लेकिन 'शनैः' का मूल स्रोत क्या है?",
    "options_en": ["Arabic", "Persian", "Sanskrit Tatsama", "Tadbhava"],
    "options_hi": ["अरबी", "फारसी", "संस्कृत तत्सम", "तद्भव"],
    "correct_option_index": 2,
    "explanation_en": "'Śanaiḥ' is a Tatsama adverb.",
    "explanation_hi": "'शनैः' तत्सम क्रिया विशेषण है।"
  },
  {
    "question_en": "A 'kachhuvā' (tortoise - noun) walks 'dhīre-dhīre' (adverb). What is 'dhīre-dhīre' indicating here?",
    "question_hi": "'कछुवा' (संज्ञा) धीरे-धीरे (क्रियाविशेषण) चलता है। यहाँ 'धीरे-धीरे' क्या बता रहा है?",
    "options_en": ["Quality of the subject", "Manner of the verb", "Result of the verb", "Place of the noun"],
    "options_hi": ["कर्ता का गुण", "क्रिया का तरीका", "क्रिया का परिणाम", "संज्ञा का स्थान"],
    "correct_option_index": 1,
    "explanation_en": "Adverb of Manner.",
    "explanation_hi": "रीतिवाचक क्रियाविशेषण।"
  },
  {
    "question_en": "The word 'kuchh' (some), mentioned in the list of Avyay, would be which type of adverb if used with a verb?",
    "question_hi": "'कुछ' शब्द, जिसका उल्लेख अव्यय की सूची में है, यदि क्रिया के साथ प्रयोग हो तो कौन-सा क्रियाविशेषण होगा?",
    "options_en": ["Ritivachak (Manner)", "Parinamavachak (Quantity)", "Sthanavachak (Place)", "Kalavachak (Time)"],
    "options_hi": ["रीतिवाचक", "परिणामवाचक", "स्थानवाचक", "कालवाचक"],
    "correct_option_index": 1,
    "explanation_en": "'Kuchh' (Some amount) indicates quantity or measure.",
    "explanation_hi": "'कुछ' (Some amount) मात्रा या परिमाण बताता है।"
  },
  {
    "question_en": "Why are both 'vyartha' (Uselessly) and 'vastutaḥ' (Actually), Tatsama adverbs, considered Adverbs of Manner?",
    "question_hi": "'व्यर्थ' (Vyartha) और 'वस्तुतः' (Vastutah) दोनों तत्सम क्रियाविशेषणों में रीतिवाचक होने का क्या कारण है?",
    "options_en": ["They indicate the quantity of the action.", "They indicate the manner (rīti) of the action.", "They indicate the place of the action.", "They indicate the time of the action."],
    "options_hi": ["वे क्रिया की मात्रा बताते हैं।", "वे क्रिया होने के ढंग (रीति) को बताते हैं।", "वे क्रिया के स्थान को बताते हैं।", "वे क्रिया का काल बताते हैं।"],
    "correct_option_index": 1,
    "explanation_en": "Both indicate the manner or method of the action.",
    "explanation_hi": "दोनों ही क्रिया की रीति या पद्धति को दर्शाते हैं।"
  },
  {
    "question_en": "If an Adverb of Place is used to indicate direction, how does it differ from a Positional adverb?",
    "question_hi": "यदि 'स्थानवाचक क्रियाविशेषण' का प्रयोग दिशा सूचित करने के लिए हो, तो वह स्थितियाचक से किस प्रकार भिन्न होगा?",
    "options_en": ["It indicates distance.", "It indicates the direction of movement.", "It only indicates time.", "It only indicates a fixed position."],
    "options_hi": ["वह दूरी बताता है।", "वह गति की दिशा बताता है।", "वह केवल काल बताता है।", "वह केवल निश्चित स्थिति बताता है।"],
    "correct_option_index": 1,
    "explanation_en": "Directional indicates the direction of motion, while Positional only indicates a static position.",
    "explanation_hi": "दिशावाचक गति की दिशा बताता है, जबकि स्थितियाचक केवल स्थिर स्थिति बताता है।"
  },
  {
    "question_en": "What is the meaning of the 'Tatsama' adverb 'akasmāt'?",
    "question_hi": "'तत्सम' क्रियाविशेषणों में 'अकस्मात्' का अर्थ क्या है?",
    "options_en": ["Always", "Suddenly", "Nowhere", "Slowly"],
    "options_hi": ["हमेशा", "अचानक", "कहीं नहीं", "धीरे"],
    "correct_option_index": 1,
    "explanation_en": "'Akasmāt' (Suddenly).",
    "explanation_hi": "'अकस्मात्' (Suddenly)।"
  },
  {
    "question_en": "How is the Persian word for 'hamesha' (always) transliterated, from which the Tadbhava form is derived?",
    "question_hi": "'हमेशा' (Hameshah) शब्द का तद्भव रूपांतरण फारसी भाषा में किस प्रकार होता है?",
    "options_en": ["hamesha", "hameshāh", "hameshe", "hamāsā"],
    "options_hi": ["हमेशा", "हमेशह्", "हमेशे", "हमासा"],
    "correct_option_index": 1,
    "explanation_en": "The Tadbhava 'hamesha' is derived from 'hameshāh' (Persian).",
    "explanation_hi": "'हमेशह्' (फ़ा.) से तद्भव 'हमेशा' बना है।"
  },
  {
    "question_en": "Which one is an example of 'Ritivachak Kriyavisheshan' (Adverb of Manner)?",
    "question_hi": "'रीतिवाचक क्रियाविशेषण' का उदाहरण कौन सा है?",
    "options_en": ["Anyatra (Elsewhere)", "Śanaiḥ (Slowly)", "Sarvadā (Always)", "Khūb (Much/Well)"],
    "options_hi": ["अन्यत्र", "शनैः", "सर्वदा", "खूब"],
    "correct_option_index": 1,
    "explanation_en": "'Śanaiḥ' indicates manner (slowly).",
    "explanation_hi": "'शनैः' रीति (धीरे) बताता है।"
  },
  {
    "question_en": "Among 'yahān' (here), 'vahān' (there), 'kahān' (where), 'ūnche' (high), 'nīche' (low), which adverb can also be interrogative?",
    "question_hi": "'यहाँ', 'वहाँ', 'कहाँ', 'ऊँचे', 'नीचे' में से कौन-सा क्रियाविशेषण प्रश्नवाचक भी हो सकता है?",
    "options_en": ["Yahān (Here)", "Kahān (Where)", "Ūnche (High)", "Nīche (Low)"],
    "options_hi": ["यहाँ", "कहाँ", "ऊँचे", "नीचे"],
    "correct_option_index": 1,
    "explanation_en": "'Kahān' (Where) is used to ask questions about place.",
    "explanation_hi": "'कहाँ' स्थानवाचक प्रश्न पूछने के लिए प्रयुक्त होता है।"
  },
  {
    "question_en": "'GDP' is a noun. If the adverb 'adhik' (more) is used, under which type will it fall?",
    "question_hi": "'जी.डी.पी.' (GDP) एक संज्ञा है। यदि क्रियाविशेषण 'अधिक' (Adhik) का प्रयोग हो, तो वह किस भेद के अंतर्गत आएगा?",
    "options_en": ["Sthanavachak (Place)", "Ritivachak (Manner)", "Parinamavachak (Quantity)", "Kalavachak (Time)"],
    "options_hi": ["स्थानवाचक", "रीतिवाचक", "परिणामवाचक", "कालवाचक"],
    "correct_option_index": 2,
    "explanation_en": "'Adhik' (more) indicates quantity or measure.",
    "explanation_hi": "'अधिक' मात्रा या परिमाण बताता है।"
  },
  {
    "question_en": "From a grammatical perspective, why is 'Adjective' (Visheshan) also kept separate from Vikari words like adverbs?",
    "question_hi": "व्याकरणिक दृष्टि से, क्रियाविशेषण के साथ 'विशेषण' को भी विकारी शब्दों से अलग क्यों रखा जाता है?",
    "options_en": ["Adjectives are Avyay (indeclinable).", "Adjectives are not Vikari (declinable) like nouns.", "Adjectives sometimes take the place of nouns.", "Adjectives also modify verbs."],
    "options_hi": ["विशेषण अव्यय होते हैं।", "विशेषण, संज्ञा के समान विकारी नहीं होते।", "विशेषण कभी-कभी संज्ञा का स्थान लेते हैं।", "विशेषण भी क्रिया की विशेषता बताते हैं।"],
    "correct_option_index": 2,
    "explanation_en": "Adjectives are not Avikari, but they are grouped with Vikari words (noun, pronoun, verb), while adverbs are Avikari. Also, adjectives can sometimes function as nouns.",
    "explanation_hi": "विशेषण अविकारी नहीं हैं, लेकिन उन्हें विकारी शब्दों (संज्ञा, सर्वनाम, क्रिया) के साथ एक वर्ग में रखा जाता है, जबकि क्रियाविशेषण अविकारी होते हैं।"
  },
  {
    "question_en": "Which error is reduced in sentences by using 'Pronouns' (Sarvanam) and 'Adverbs' (Kriyavisheshan)?",
    "question_hi": "'सर्वनाम' और 'क्रियाविशेषण' के प्रयोग से वाक्यों में कौन-सा दोष कम होता है?",
    "options_en": ["Tense related", "Repetition of noun", "Gender related", "Number related"],
    "options_hi": ["काल संबंधी", "संज्ञा की पुनरुक्ति", "लिंग संबंधी", "वचन संबंधी"],
    "correct_option_index": 1,
    "explanation_en": "Pronouns come in place of nouns (preventing repetition).",
    "explanation_hi": "सर्वनाम संज्ञा के स्थान पर आता है (पुनरुक्ति रोकता है)।"
  }
];

export default kriyavisheshanQuestions;