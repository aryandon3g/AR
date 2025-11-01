import type { QuizQuestion } from '../../../types';

const kaarakQuestions: QuizQuestion[] = [
  {
    "question_en": "'The girl wrote letter.' To correct this sentence regarding case and verb agreement, which case marker will be mandatory with the subject?",
    "question_hi": "'लड़की पत्र लिखा।' इस वाक्य को कारक और क्रिया अन्वय की दृष्टि से शुद्ध करने पर कर्ता के साथ कौन सा कारक चिह्न अनिवार्य होगा?",
    "options_en": ["ko", "ne", "se", "Ø (zero marker)"],
    "options_hi": ["को", "ने", "से", "Ø (लुप्त)"],
    "correct_option_index": 1,
    "explanation_en": "(B) ne: In the past tense form of a transitive verb (likha - wrote), the use of the marker 'ne' with the subject is mandatory. Correct: 'लड़की ने पत्र लिखा।'",
    "explanation_hi": "(B) ने: सकर्मक क्रिया (लिखा) के भूतकालिक रूप में कर्ता के साथ 'ने' चिह्न का प्रयोग अनिवार्य होता है।"
  },
  {
    "question_en": "'Mohan eats mango (ne).' Why is the use of the postposition 'ne' grammatically incorrect in this sentence?",
    "question_hi": "'मोहन ने आम खाता है।' इस वाक्य में 'ने' परसर्ग का प्रयोग व्याकरणिक दृष्टि से क्यों अशुद्ध है?",
    "options_en": ["The subject (Mohan) is masculine.", "The verb is not transitive.", "The verb is in the present tense.", "The object (mango) is inanimate."],
    "options_hi": ["कर्ता (मोहन) पुल्लिंग है।", "क्रिया सकर्मक नहीं है।", "क्रिया वर्तमान काल की है।", "कर्म (आम) निर्जीव है।"],
    "correct_option_index": 2,
    "explanation_en": "(C) The verb is in the present tense.: Even with transitive verbs, the postposition 'ne' is not used in the present tense or future tense.",
    "explanation_hi": "(C) क्रिया वर्तमान काल की है।: सकर्मक क्रियाओं के साथ भी वर्तमान काल या भविष्य काल में 'ने' परसर्ग का प्रयोग नहीं किया जाता है।"
  },
  {
    "question_en": "'The teacher gave education the boys.' What is the main case-related error in this sentence?",
    "question_hi": "'अध्यापक लड़कों को शिक्षा दी।' इस वाक्य में निहित कारक संबंधी मुख्य अशुद्धि क्या है?",
    "options_en": ["The verb's gender is faulty.", "Unnecessary use of 'ko'.", "Omission of the necessary 'ne' postposition.", "Not using the plural form for 'shiksha'."],
    "options_hi": ["क्रिया का लिंग दोषपूर्ण है।", "'को' का अनावश्यक प्रयोग।", "आवश्यक 'ने' परसर्ग का लोप।", "'शिक्षा' का बहुवचन न होना।"],
    "correct_option_index": 2,
    "explanation_en": "(C) Omission of the necessary 'ne' postposition.: In the past tense with a transitive verb (di - gave), it is mandatory to use the 'ne' case marker (postposition) with the subject (adhyapak - teacher). Correct form: 'अध्यापक ने लड़कों को शिक्षा दी'.",
    "explanation_hi": "(C) आवश्यक 'ने' परसर्ग का लोप।: सकर्मक क्रिया (दी) के भूतकाल में कर्ता (अध्यापक) के साथ 'ने' कारक (परसर्ग) लगाना अनिवार्य होता है। शुद्ध रूप: 'अध्यापक ने लड़कों को शिक्षा दी'।"
  },
  {
    "question_en": "'Mother fed food to the children.' Why are the gender and number of the verb (khilaya - fed) masculine singular in this sentence?",
    "question_hi": "'मां ने बच्चों को खाना खिलाया।' इस वाक्य में क्रिया (खिलाया) का लिंग और वचन पुल्लिंग एकवचन में क्यों है?",
    "options_en": [
      "Because the subject (mother) is feminine, the verb is masculine.",
      "Because the object (children) is animate.",
      "When the subject has 'ne' and the object has 'ko', the verb is always third person, masculine, singular.",
      "This is an example of passive voice."
    ],
    "options_hi": [
      "कर्ता (मां) स्त्रीलिंग है, इसलिए क्रिया पुल्लिंग में आई।",
      "कर्म (बच्चों को) सजीव है।",
      "कर्ता के साथ 'ने' और कर्म के साथ 'को' होने पर क्रिया सदा अन्य पुरुष, पुल्लिंग, एकवचन में रहती है।",
      "यह कर्मवाच्य का उदाहरण है।"
    ],
    "correct_option_index": 2,
    "explanation_en": "(C) When the subject has 'ne' and the object has 'ko', the verb is always third person, masculine, singular.: When the postposition 'ne' is with the subject and 'ko' is with the object, the verb agrees neither with the subject nor the object; instead, the verb always remains in the third person, masculine, singular form (known as 'bhāve prayog' or impersonal construction).",
    "explanation_hi": "(C) कर्ता के साथ 'ने' और कर्म के साथ 'को' होने पर क्रिया सदा अन्य पुरुष, पुल्लिंग, एकवचन में रहती है।: जब कर्ता के साथ 'ने' और कर्म के साथ 'को' परसर्ग लगा हो, तो क्रिया का अन्वय न कर्ता के अनुसार होता है न कर्म के अनुसार, बल्कि वह क्रिया सदा अन्य पुरुष, पुल्लिंग, एकवचन में रहती है (भावे-प्रयोग)।"
  },
  {
    "question_en": "Which of the following case markers ('se') is used for separation (viyog) as well as comparison?",
    "question_hi": "निम्नलिखित में से किस कारक चिह्न का प्रयोग अलग होने (वियोग) के साथ-साथ तुलना करने के लिए भी किया जाता है?",
    "options_en": ["Instrumental Case (se)", "Ablative Case (se)", "Genitive Case (ka)", "Dative Case (ko)"],
    "options_hi": ["करण कारक (से)", "अपादान कारक (से)", "संबंध कारक (का)", "सम्प्रदान कारक (को)"],
    "correct_option_index": 1,
    "explanation_en": "(B) Ablative Case (se): The Ablative case marker 'se' is used to show separation (leaf fell from the tree) and also for comparison (e.g., Ramesh is taller than Suresh).",
    "explanation_hi": "(B) अपादान कारक (से): अपादान कारक का प्रयोग अलग होने के भाव (पेड़ से पत्ता गिरा) के अलावा तुलना करने के लिए भी होता है (जैसे: रमेश सुरेश से बड़ा है)।"
  },
  {
    "question_en": "'Hurry up, fill water from the tap.' Which case is used in 'nal se' (from the tap) in this sentence?",
    "question_hi": "'जल्दी करो नल से पानी भर लो।' इस वाक्य में 'नल से' में कौन सा कारक प्रयुक्त हुआ है?",
    "options_en": ["Ablative Case", "Instrumental Case", "Locative Case", "Objective Case"],
    "options_hi": ["अपादान कारक", "करण कारक", "अधिकरण कारक", "कर्म कारक"],
    "correct_option_index": 1,
    "explanation_en": "(B) Instrumental Case: Here, 'tap' (nal) is used as the instrument/means of the action (filling). The Instrumental case indicates the means (by/with).",
    "explanation_hi": "(B) करण कारक: 'नल' यहाँ क्रिया (भरना) के साधन के रूप में प्रयुक्त हुआ है। करण कारक साधन (के द्वारा) का बोध कराता है।"
  },
  {
    "question_en": "'The boy is afraid of the dark.' Identify the case in this sentence:",
    "question_hi": "'बालक अंधेरे से डरता है।' इस वाक्य में कारक की पहचान कीजिए:",
    "options_en": ["Instrumental Case", "Ablative Case", "Genitive Case", "Objective Case"],
    "options_hi": ["करण कारक", "अपादान कारक", "संबंध कारक", "कर्म कारक"],
    "correct_option_index": 1,
    "explanation_en": "(B) Ablative Case: The Ablative postposition 'se' is also used to express fear (dar) or envy/malice.",
    "explanation_hi": "(B) अपादान कारक: अपादान कारक 'से' परसर्ग का प्रयोग भय (डर) या ईर्ष्या-द्वेष बताने के लिए भी होता है।"
  },
  {
    "question_en": "'Dinanath goes to school daily (ko).' What is the error related to the case marker in this sentence?",
    "question_hi": "'दीनानाथ प्रतिदिन पाठशाला को जाता है।' इस वाक्य में कारक चिह्न संबंधी क्या दोष है?",
    "options_en": ["'ko' is used instead of the nominative case.", "'jaata hai' is intransitive, so 'ko' should not be used.", "'ko' postposition is unnecessary.", "'mein' should be used with 'pathshala'."],
    "options_hi": ["'को' का प्रयोग कर्ता कारक के स्थान पर हुआ है।", "'जाता है' अकर्मक है, इसलिए 'को' नहीं आएगा।", "'को' परसर्ग अनावश्यक है।", "'पाठशाला' के साथ 'में' आना चाहिए।"],
    "correct_option_index": 2,
    "explanation_en": "(C) 'ko' postposition is unnecessary.: With verbs indicating movement towards a place (destination), the postposition 'ko' is often omitted. Correct form: 'दीनानाथ प्रतिदिन पाठशाला जाता है'.",
    "explanation_hi": "(C) 'को' परसर्ग अनावश्यक है।: क्रिया के साथ कर्म के रूप में स्थान (Destination) बताने वाले शब्दों के साथ अक्सर 'को' परसर्ग का प्रयोग नहीं होता है। शुद्ध रूप: 'दीनानाथ प्रतिदिन पाठशाला जाता है'।"
  },
  {
    "question_en": "'The police caught the thief (ko).' Which case is 'chor ko' (the thief) in this sentence?",
    "question_hi": "'पुलिस ने चोर को पकड़ लिया।' इस वाक्य में 'चोर को' में कौन सा कारक है?",
    "options_en": ["Dative Case", "Objective Case", "Ablative Case", "Instrumental Case"],
    "options_hi": ["सम्प्रदान कारक", "कर्म कारक", "अपादान कारक", "करण कारक"],
    "correct_option_index": 1,
    "explanation_en": "(B) Objective Case: 'Thief' (chor) is the animate object upon which the action of the subject (police) falls. The marker 'ko' is generally used with animate objects.",
    "explanation_hi": "(B) कर्म कारक: 'चोर' सजीव कर्म है, जिस पर कर्ता की क्रिया का फल पड़ा। सजीव कर्म के साथ प्रायः 'को' का प्रयोग होता है।"
  },
  {
    "question_en": "Even though the Dative case विभक्ति is 'ke liye' (for), which case marker is often accepted in Hindi in the sense of the Dative case?",
    "question_hi": "कारक की विभक्ति 'के लिए' होने पर भी, हिंदी में प्रायः कौन सा कारक चिह्न संप्रदान कारक के अर्थ में भी मान्य होता है?",
    "options_en": ["se", "ko", "ka", "par"],
    "options_hi": ["से", "को", "का", "पर"],
    "correct_option_index": 1,
    "explanation_en": "(B) ko: The sign for the Dative case is 'ke liye', but in Hindi, the marker 'ko' is also accepted, especially to avoid making the sentence unnecessarily long.",
    "explanation_hi": "(B) को: सम्प्रदान कारक का चिह्न 'के लिए' है, किंतु हिंदी में 'को' चिह्न भी मान्य है, खासकर जब वाक्य का आकार अनावश्यक रूप से लंबा न करना हो।"
  },
  {
    "question_en": "'The king gave wealth to the Brahmin (ko).' Which case is used in 'Brahmin ko' in this sentence?",
    "question_hi": "'राजा ने ब्राह्मण को धन दिया।' इस वाक्य में 'ब्राह्मण को' में कौन सा कारक प्रयुक्त हुआ है?",
    "options_en": ["Objective Case", "Dative Case", "Genitive Case", "Locative Case"],
    "options_hi": ["कर्म कारक", "सम्प्रदान कारक", "संबंध कारक", "अधिकरण कारक"],
    "correct_option_index": 1,
    "explanation_en": "(B) Dative Case: Due to the sense of giving (daan), this is the Dative case. When both an object and a recipient (Dative) are present, 'ko' can be used for the Dative.",
    "explanation_hi": "(B) सम्प्रदान कारक: दान (देने) का भाव होने के कारण यह संप्रदान कारक है। जब कर्म और संप्रदान दोनों आते हैं, तब संप्रदान में 'को' का प्रयोग हो सकता है।"
  },
  {
    "question_en": "'You mean eating mangoes (se).' Why is the postposition 'se' considered Ablative case in this sentence?",
    "question_hi": "'तुम्हें आम खाने से मतलब।' इस वाक्य में 'से' परसर्ग अपादान कारक क्यों माना जाता है?",
    "options_en": ["There is a sense of separation.", "There is a sense of instrument.", "There is a sense of comparison or basis.", "The instrumental case marker is omitted."],
    "options_hi": ["यहाँ अलगाव का भाव है।", "यहाँ साधन (Instrument) का भाव है।", "यहाँ तुलना या आधार का भाव है।", "यहाँ करण कारक का लोप हुआ है।"],
    "correct_option_index": 2,
    "explanation_en": "(C) There is a sense of comparison or basis.: The Ablative case is also used to express the basis of 'comparison', 'love', or other mental states/concerns.",
    "explanation_hi": "(C) यहाँ तुलना या आधार का भाव है।: अपादान कारक का प्रयोग 'तुलना', 'प्रेम' या किसी अन्य मनोभाव के आधार को व्यक्त करने के लिए भी होता है।"
  },
  {
    "question_en": "'Sitik secured first position in the examination (mein).' What does the Locative case indicate in this sentence?",
    "question_hi": "'सीतिक ने परीक्षा में प्रथम स्थान प्राप्त किया।' इस वाक्य में अधिकरण कारक क्या दर्शाता है?",
    "options_en": ["Time", "Distance", "Basis/Location", "Instrument"],
    "options_hi": ["समय", "दूरी", "आधार", "साधन"],
    "correct_option_index": 2,
    "explanation_en": "(C) Basis/Location: The Locative case indicates the time, place, or basis of the action. Here, 'examination' (pariksha) is the basis/context for the action (securing position).",
    "explanation_hi": "(C) आधार: अधिकरण कारक क्रिया के समय, स्थान या आधार का बोध कराता है। 'परीक्षा' यहाँ क्रिया (स्थान प्राप्त करने) का आधार है।"
  },
  {
    "question_en": "What kind of basis does the Locative case marker 'mein' (in) indicate?",
    "question_hi": "अधिकरण कारक की 'में' विभक्ति किस प्रकार के आधार का बोध कराती है?",
    "options_en": ["External basis", "Internal basis (abhyantar)", "Locational basis", "Verbal basis"],
    "options_hi": ["बाह्य आधार", "अभ्यंतर (भीतरी) आधार", "स्थानवाचक आधार", "क्रियार्थक आधार"],
    "correct_option_index": 1,
    "explanation_en": "(B) Internal basis (abhyantar): In the Locative case, the marker 'mein' indicates an internal basis, while 'par' indicates an external basis.",
    "explanation_hi": "(B) अभ्यंतर (भीतरी) आधार: अधिकरण कारक में 'में' विभक्ति अभ्यंतर (भीतरी) आधार और 'पर' विभक्ति बाह्य (बाहरी) आधार का बोध कराती है।"
  },
  {
    "question_en": "'Ram's sister reads.' According to whose gender and number does the Genitive case marker 'ki' (of) agree in this sentence?",
    "question_hi": "'राम की बहन पढ़ती है।' इस वाक्य में संबंध कारक की विभक्ति 'की' किसके लिंग और वचन के अनुसार आई है?",
    "options_en": ["According to the subject (Ram).", "According to the related noun (sister).", "According to the verb (reads).", "It is always feminine singular."],
    "options_hi": ["कर्ता (राम) के अनुसार।", "संबंध वाली संज्ञा (बहन) के अनुसार।", "क्रिया (पढ़ती है) के अनुसार।", "यह हमेशा स्त्रीलिंग एकवचन होती है।"],
    "correct_option_index": 1,
    "explanation_en": "(B) According to the related noun (sister).: The Genitive case marker (ka, ki, ke) changes according to the gender and number of the noun it relates to (the possessed noun).",
    "explanation_hi": "(B) संबंध वाली संज्ञा (बहन) के अनुसार।: संबंध कारक की विभक्ति (का, की, के) संबंध वाली संज्ञा (जिससे संबंध जोड़ा जाता है) के लिंग और वचन के अनुसार बदलती है।"
  },
  {
    "question_en": "'We put its solution beyond the limit (ke bahar).' The use of the Genitive marker 'ke' with the word 'bahar' (outside) presents an exception to which rule?",
    "question_hi": "'हम उसका उपाय सीमा के बाहर कर देते हैं।' इस वाक्य में संबंध कारक 'के' का प्रयोग 'बाहर' शब्द के साथ किस नियम का अपवाद प्रस्तुत करता है?",
    "options_en": ["Noun Adjective", "Adjective of Time", "Adverb of Place", "Adverb of Manner"],
    "options_hi": ["संज्ञा विशेषण", "कालवाचक विशेषण", "स्थानवाचक क्रियाविशेषण", "रीतिवाचक क्रियाविशेषण"],
    "correct_option_index": 2,
    "explanation_en": "(C) Adverb of Place: Adverbs of place like 'jahān', 'kahān', etc., optionally take 'par', whereas here 'bahar' takes 'ke' (though considered a 'bhūsambodhan' error in sentence correction, 'ke bahar' functions like a postpositional phrase).",
    "explanation_hi": "(C) स्थानवाचक क्रियाविशेषण: 'जहाँ', 'कहाँ', 'यहाँ', 'वहाँ', 'ऊँचे', 'नीचे' जैसे स्थानवाचक क्रियाविशेषणों के साथ 'पर' परसर्ग विकल्प से आता है, जबकि यहाँ 'बाहर' के साथ 'के' आया है (वाक्य शुद्धि के अंतर्गत यह भूसंबोधन दोष भी कहलाता है, लेकिन यहाँ 'के बाहर' एक संबंधसूचक अव्यय के समान प्रयुक्त है)।"
  },
  {
    "question_en": "'Mohan lota katora.' (Mohan pot bowl) This sentence suffers from which case-related error?",
    "question_hi": "'मोहन लोटा कटोरा।' यह वाक्य कारक की किस त्रुटि से ग्रस्त है?",
    "options_en": ["Omission of Locative case", "Omission of postposition (Genitive case)", "Omission of Objective case", "Omission of Instrumental case"],
    "options_hi": ["अधिकरण कारक लोप", "विभक्ति लोप (संबंध कारक)", "कर्म कारक लोप", "करण कारक लोप"],
    "correct_option_index": 1,
    "explanation_en": "(B) Omission of postposition (Genitive case): The relationship between 'lota' (pot) and 'katora' (bowl) is unclear. Correct form could be 'Lote ka katora' (Bowl of the pot) or some other relation.",
    "explanation_hi": "(B) विभक्ति लोप (संबंध कारक): 'लोटा' और 'कटोरा' के बीच संबंध स्पष्ट नहीं है। शुद्ध रूप: 'लोटे का कटोरा' (या कोई अन्य संबंध)।"
  },
  {
    "question_en": "The inflected (oblique) form of which of the following cases in Hindi grammar is found only in the singular, not the plural?",
    "question_hi": "निम्नलिखित में से किस कारक के विकृत रूप हिंदी व्याकरण में केवल एकवचन में ही मिलते हैं, न कि बहुवचन में?",
    "options_en": ["Indefinite pronoun 'koi' (someone)", "Personal pronoun 'tum' (you)", "Relative pronoun 'jo' (who/which)", "Interrogative pronoun 'kya' (what)"],
    "options_hi": ["अनिश्चयवाचक सर्वनाम 'कोई'", "पुरुषवाचक सर्वनाम 'तुम'", "संबंधवाचक सर्वनाम 'जो'", "प्रश्नवाचक सर्वनाम 'क्या'"],
    "correct_option_index": 0,
    "explanation_en": "(A) Indefinite pronoun 'koi' (someone): The inflected form of 'koi' is 'kisi', which is singular. It does not have a distinct inflected form in the plural (though 'kinhīn' is used, it's not strictly considered the pronoun's inflected form).",
    "explanation_hi": "(A) अनिश्चयवाचक सर्वनाम 'कोई': 'कोई' का विकृत रूप 'किसी' है, जो एकवचन है। बहुवचन में इसका विकृत रूप नहीं होता (यानी 'किन्हीं' का प्रयोग होने पर भी वह सर्वनाम नहीं माना जाता)।"
  },
  {
    "question_en": "When is the Nominative case marker 'ne' used in the past tense with intransitive verbs?",
    "question_hi": "कर्ता कारक का प्रयोग अकर्मक क्रियाओं के भूतकाल में कब किया जाता है?",
    "options_en": ["Always used.", "Never used.", "Only in the present tense.", "In the 'bhāve-prayog' (impersonal construction)."],
    "options_hi": ["हमेशा किया जाता है।", "कभी नहीं किया जाता है।", "केवल वर्तमान काल में।", "क्रिया के भावे-प्रयोग में।"],
    "correct_option_index": 1,
    "explanation_en": "(B) Never used.: The marker 'ne' is generally not used with the subject of intransitive verbs.",
    "explanation_hi": "(B) कभी नहीं किया जाता है।: अकर्मक क्रियाओं के कर्ता के साथ 'ने' चिह्न का प्रयोग नहीं होता है।"
  },
  {
    "question_en": "'This excerpt is taken of 'Sur's Verses'.' What change is necessary to correct the Instrumental case in this sentence?",
    "question_hi": "'यह अवतरण 'सूर के पद' का लिया गया है।' इस वाक्य में करण कारक की शुद्धि के लिए क्या परिवर्तन आवश्यक है?",
    "options_en": ["Replace 'ka' with 'ke'.", "Replace 'liya gaya hai' with 'hoga'.", "Replace 'ka' with the Ablative marker 'se'.", "The sentence is correct, no change needed."],
    "options_hi": ["'का' की जगह 'के' आएगा।", "'लिया गया है' की जगह 'होगा' आएगा।", "'का' की जगह अपादान कारक 'से' आएगा।", "वाक्य शुद्ध है, कोई परिवर्तन नहीं।"],
    "correct_option_index": 2,
    "explanation_en": "(C) Replace 'ka' with the Ablative marker 'se'.: The excerpt has been taken/separated *from* 'Sur's Verses'. Therefore, the Ablative case should be used here. Correct form: 'यह अवतरण 'सूर के पद' से लिया गया है'.",
    "explanation_hi": "(C) 'का' की जगह अपादान कारक 'से' आएगा।: अवतरण को 'सूर के पद' से अलग (लिया/obtained) किया गया है। इसलिए यहाँ अपादान कारक का प्रयोग होना चाहिए। शुद्ध रूप: 'यह अवतरण 'सूर के पद' से लिया गया है'।"
  },
  {
    "question_en": "'Raju gives two rupees to Roshan (ko).' Why is 'Roshan ko' considered Dative case in this sentence?",
    "question_hi": "'राजु रोशन को दो रुपये देता है।' इस वाक्य में 'रोशन को' संप्रदान कारक क्यों है?",
    "options_en": ["Because it is an animate object.", "Because the verb 'deta hai' (gives) is transitive.", "Because 'Roshan' is the person to whom something is given.", "Because 'ko' always indicates Dative."],
    "options_hi": ["क्योंकि वह सजीव कर्म है।", "क्योंकि 'देता है' क्रिया सकर्मक है।", "क्योंकि 'रोशन' वह व्यक्ति है जिसे दिया जाता है।", "क्योंकि 'को' हमेशा संप्रदान को दर्शाता है।"],
    "correct_option_index": 2,
    "explanation_en": "(C) Because 'Roshan' is the person to whom something is given.: The Dative case indicates for whom something is done or to whom something is given. Here, rupees are given to Roshan.",
    "explanation_hi": "(C) क्योंकि 'रोशन' वह व्यक्ति है जिसे दिया जाता है।: सम्प्रदान कारक वह है जिसके लिए कुछ किया जाता है या जिसे दिया जाता है। यहाँ, रोशन को रुपये दिए गए।"
  },
  {
    "question_en": "'You can rise high.' Which case is 'tum' (you) in this sentence?",
    "question_hi": "'तुम ऊँचे उठ सकते हो।' इस वाक्य में 'तुम' में कौन सा कारक है?",
    "options_en": ["Objective Case", "Nominative Case", "Ablative Case", "Locative Case"],
    "options_hi": ["कर्म कारक", "कर्ता कारक", "अपादान कारक", "अधिकरण कारक"],
    "correct_option_index": 1,
    "explanation_en": "(B) Nominative Case: The doer of the action (uth sakte ho - can rise) is the Nominative case, and the second-person pronoun 'tum' is the subject.",
    "explanation_hi": "(B) कर्ता कारक: क्रिया (उठ सकते हो) को करने वाला कर्ता कारक होता है, और मध्यम पुरुष सर्वनाम 'तुम' कर्ता है।"
  },
  {
    "question_en": "Pronoun inflected forms like 'mere ko' (to me) and 'mere se' (from me) are considered what type of errors in Hindi grammar?",
    "question_hi": "'मेरे को' और 'मेरे से' जैसे सर्वनाम विकृत रूप (Vibhakti form) हिंदी व्याकरण में किस प्रकार के दोष माने जाते हैं?",
    "options_en": ["Verb agreement error", "Postposition-related error", "Number-related error", "Gender-related error"],
    "options_hi": ["क्रिया अन्वय दोष", "परसर्ग संबंधी अशुद्धि", "वचन संबंधी दोष", "लिंग संबंधी दोष"],
    "correct_option_index": 1,
    "explanation_en": "(B) Postposition-related error: Errors related to postpositions often occur in the use of case markers with pronouns, e.g., 'vah mere ko bula raha tha' should be 'vah mujhe bula raha tha'.",
    "explanation_hi": "(B) परसर्ग संबंधी अशुद्धि: सर्वनामों के साथ विभक्ति के प्रयोग में अक्सर परसर्ग संबंधी अशुद्धि होती है, जैसे 'वह मेरे को बुला रहा था' की जगह 'वह मुझे बुला रहा था'।"
  },
  {
    "question_en": "Which of the following nouns remains in the infinitive form of the verb and occurs in the singular of all cases except the vocative?",
    "question_hi": "निम्नलिखित में से कौन सी संज्ञा, क्रिया के साधारण रूप में रहती है और संबोधन को छोड़कर सभी कारक के एकवचन में आती है?",
    "options_en": ["Abstract Noun", "Verbal Noun", "Proper Noun", "Common Noun"],
    "options_hi": ["भाववाचक संज्ञा", "क्रियार्थक संज्ञा", "व्यक्तिवाचक संज्ञा", "जातिवाचक संज्ञा"],
    "correct_option_index": 1,
    "explanation_en": "(B) Verbal Noun: Verbal nouns (kriyārthak saṃjñā) remain in the infinitive form of the verb and occur in the singular of all cases except the vocative (e.g., padhna - reading, likhna - writing).",
    "explanation_hi": "(B) क्रियार्थक संज्ञा: क्रियार्थक संज्ञाएँ क्रिया के साधारण रूप में रहती हैं और संबोधन को छोड़कर सभी कारक के एकवचन में आती हैं। (उदा. पढ़ना, लिखना)"
  },
  {
    "question_en": "What is the main difference between the Instrumental case marker 'se' and the Ablative case marker 'se'?",
    "question_hi": "करण कारक की विभक्ति 'से' और अपादान कारक की विभक्ति 'से' में मुख्य अंतर क्या है?",
    "options_en": ["Instrumental 'se' for animate, Ablative 'se' for inanimate.", "Instrumental 'se' is instrument, Ablative 'se' is separation.", "Instrumental 'se' is mandatory, Ablative 'se' is optional.", "Instrumental 'se' only comes in past tense."],
    "options_hi": ["करण 'से' सजीव के लिए और अपादान 'से' निर्जीव के लिए।", "करण 'से' साधन है, अपादान 'से' अलगाव है।", "करण 'से' अनिवार्य है, अपादान 'से' वैकल्पिक।", "करण 'से' केवल भूतकाल में आता है।"],
    "correct_option_index": 1,
    "explanation_en": "(B) Instrumental 'se' is instrument, Ablative 'se' is separation.: The Instrumental 'se' is used for the means/instrument of doing the action, whereas the Ablative 'se' is used for separation (viyog) or comparison.",
    "explanation_hi": "(B) करण 'से' साधन है, अपादान 'से' अलगाव है।: करण कारक का 'से' परसर्ग क्रिया को करने के साधन में, जबकि अपादान का 'से' अलग होने (वियोग) या तुलना के लिए प्रयोग किया जाता है।"
  },
  {
    "question_en": "When can the 'ne' marker appear even with the subject of intransitive verbs?",
    "question_hi": "अकर्मक क्रियाओं के कर्ता के साथ भी 'ने' चिह्न कब लग सकता है?",
    "options_en": ["In the future tense.", "In the impersonal construction (bhāve-prayog) (e.g., bathing, sneezing, coughing) in tenses formed from the past participle.", "Only in the present tense.", "When the subject is animate."],
    "options_hi": ["भविष्य काल में।", "भावे-प्रयोग (जैसे: मैंने नहाना, छींकना, खाँसना) के भूतकालिक कृदंत से बने कालों में।", "केवल वर्तमान काल में।", "जब कर्ता सजीव हो।"],
    "correct_option_index": 1,
    "explanation_en": "(B) In the impersonal construction (bhāve-prayog) (e.g., bathing, sneezing, coughing) in tenses formed from the past participle.: The 'ne' marker appears in tenses formed from the past participle of certain intransitive verbs like nahānā (to bathe), chhīṅknā (to sneeze), khāṅsnā (to cough) (e.g., Maine nahāyā, Rogī ne khāṅsā hogā), which is called bhāve-prayog.",
    "explanation_hi": "(B) भावे-प्रयोग (जैसे: मैंने नहाना, छींकना, खाँसना) के भूतकालिक कृदंत से बने कालों में।: नहाना, छींकना, खाँसना आदि अकर्मक क्रियाओं के भूतकालिक कृदंत से बने कालों में 'ने' चिह्न आता है (जैसे: मैंने नहाया, रोगी ने खाँसा होगा), जिसे भावे-प्रयोग कहते हैं।"
  },
  {
    "question_en": "Which of the following sentences is correct from the perspective of the Genitive case?",
    "question_hi": "निम्नलिखित में से कौन सा वाक्य संबंध कारक की दृष्टि से शुद्ध है?",
    "options_en": [
      "My father is the principal to this school.",
      "My father is the principal of (ka) this school.",
      "My father is the principal of (ke) this school.",
      "My father is principal on this school."
    ],
    "options_hi": [
      "मेरे पिता जी इस विद्यालय को प्रधानाचार्य हैं।",
      "मेरे पिता जी इस विद्यालय का प्रधानाचार्य हैं।",
      "मेरे पिता जी इस विद्यालय के प्रधानाचार्य हैं।",
      "इस विद्यालय पर मेरे पिता जी प्रधानाचार्य हैं।"
    ],
    "correct_option_index": 2,
    "explanation_en": "(C) My father is the principal of (ke) this school.: The Genitive marker 'ke' agrees with 'pradhānāchārya' (Principal - masculine, respectful plural/singular).",
    "explanation_hi": "(C) मेरे पिता जी इस विद्यालय के प्रधानाचार्य हैं।: संबंध कारक 'के' का प्रयोग 'प्रधानाचार्य' (पुल्लिंग, आदरसूचक) के अनुसार हुआ है, जो शुद्ध है।"
  },
  {
    "question_en": "'The students read the lesson (ne).' Why is the Nominative case marker 'ne' used in this sentence?",
    "question_hi": "'छात्रों ने पाठ पढ़ा।' इस वाक्य में कर्ता कारक की विभक्ति 'ने' का प्रयोग क्यों हुआ है?",
    "options_en": [
      "The subject (students) is plural.",
      "The verb (padha) is masculine.",
      "The verb is transitive and in the past tense, and the object does not have 'ko'.",
      "The subject is animate."
    ],
    "options_hi": [
      "कर्ता (छात्रों) बहुवचन है।",
      "क्रिया (पढ़ा) पुल्लिंग है।",
      "क्रिया सकर्मक और भूतकाल की है, तथा कर्म के साथ 'को' नहीं है।",
      "कर्ता सजीव है।"
    ],
    "correct_option_index": 2,
    "explanation_en": "(C) The verb is transitive and in the past tense, and the object does not have 'ko'.: 'Ne' is used with past tense forms of transitive verbs. In this case, the verb's gender-number agree with the object (path - lesson).",
    "explanation_hi": "(C) क्रिया सकर्मक और भूतकाल की है, तथा कर्म के साथ 'को' नहीं है।: सकर्मक क्रियाओं के भूतकालिक रूपों में 'ने' का प्रयोग होता है। इस स्थिति में क्रिया का लिंग-वचन कर्म (पाठ) के अनुसार होता है।"
  },
  {
    "question_en": "'The boy read the book (ne).' Why do some grammarians consider this sentence passive voice ('karmaṇi prayog') based on its form?",
    "question_hi": "'लड़के ने पुस्तक पढ़ी।' इस वाक्य को कुछ वैयाकरण रूप के अनुसार कर्मवाच्य क्यों मानते हैं?",
    "options_en": [
      "Because the effect of the verb falls on the boy.",
      "Because the verb's person, gender, and number agree with the object (book).",
      "Because the object is prominent.",
      "Because it is similar to the Sanskrit sentence 'bālakaḥ pustikāṃ paṭhitavān'."
    ],
    "options_hi": [
      "क्योंकि इसमें क्रिया का फल लड़के पर पड़ा।",
      "क्योंकि क्रिया का पुरुष, लिंग, वचन कर्म (पुस्तक) के अनुसार है।",
      "क्योंकि इसमें कर्म की प्रधानता है।",
      "क्योंकि यह संस्कृत के वाक्य 'बालकः पुस्तिकां पठितवान्' के समान है।"
    ],
    "correct_option_index": 1,
    "explanation_en": "(B) Because the verb's person, gender, and number agree with the object (book).: According to Sanskrit grammatical criteria, the verb 'paṛhī' is passive because its person, gender, and number agree with the object (pustak - book).",
    "explanation_hi": "(B) क्योंकि क्रिया का पुरुष, लिंग, वचन कर्म (पुस्तक) के अनुसार है।: संस्कृत व्याकरण के लक्षण के अनुसार 'पढ़ी' क्रिया कर्मवाच्य है, क्योंकि इसका पुरुष, लिंग, वचन कर्म (पुस्तक) के अनुसार है।"
  },
  {
    "question_en": "Which of the following postpositions (case markers) can be involved in number-related errors?",
    "question_hi": "निम्नलिखित में से कौन सा परसर्ग (कारक चिह्न) वचन संबंधी अशुद्धि के अंतर्गत आता है?",
    "options_en": ["'se' (Ablative)", "'ko' (Objective)", "'ne' (Nominative)", "'mein' (Locative)"],
    "options_hi": ["'से' (अपादान)", "'को' (कर्म)", "'ने' (कर्ता)", "'में' (अधिकरण)"],
    "correct_option_index": 3,
    "explanation_en": "(D) 'mein' (Locative): Postpositions can also be involved in number-related errors. Correcting 'Mujhe das rupaya chahiye' to 'Mujhe das rupaye chahiye' (number error) falls under postpositional errors. Locative 'mein' is often involved in number changes (e.g., ghar mein vs gharon mein).",
    "explanation_hi": "(D) 'में' (अधिकरण): विभक्तियाँ (परसर्ग) वचन संबंधी अशुद्धियों का कारण भी होती हैं। 'मुझे दस रुपया चाहिए' का शुद्ध रूप 'मुझे दस रुपये चाहिए' (वचन अशुद्धि) विभक्ति की अशुद्धियों के अंतर्गत आता है। (अधिकरण 'में' भी अक्सर वचन परिवर्तन में शामिल होता है)।"
  }
];

export default kaarakQuestions;
