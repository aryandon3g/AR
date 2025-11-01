import type { QuizQuestion } from '../../../types';

const kaalQuestions: QuizQuestion[] = [
  {
    "question_en": "What is the form of the verb called that indicates doubt about the occurrence of an action in the past?",
    "question_hi": "क्रिया के जिस रूप से भूतकाल में कार्य होने में संदेह का बोध हो, उसे क्या कहते हैं?",
    "options_en": ["Past Imperfect", "Doubtful Past", "Recent Past", "Conditional Past"],
    "options_hi": ["अपूर्ण भूतकाल", "संदिग्ध भूतकाल", "आसन्न भूतकाल", "हेतुहेतुमद् भूतकाल"],
    "correct_option_index": 1,
    "explanation_en": "(B) Doubtful Past (Sandigdh Bhutkal): The doubtful past tense indicates the form of a past tense verb where there is doubt about the occurrence of the action.",
    "explanation_hi": "(B) संदिग्ध भूतकाल: संदिग्ध भूतकाल भूतकाल की क्रिया के उस रूप को दर्शाता है जिससे कार्य के होने में संदेह हो।"
  },
  {
    "question_en": "'If he had studied, he would have passed.' This sentence belongs to which type of past tense?",
    "question_hi": "'यदि वह पढ़ता तो उत्तीर्ण हो जाता।' यह वाक्य भूतकाल के किस भेद से संबंधित है?",
    "options_en": ["Simple Past", "Past Imperfect", "Doubtful Past", "Conditional Past"],
    "options_hi": ["सामान्य भूतकाल", "अपूर्ण भूतकाल", "संदिग्ध भूतकाल", "हेतुहेतुमद् भूतकाल"],
    "correct_option_index": 3,
    "explanation_en": "(D) Conditional Past (Hetuhetumad Bhutkal): The form of the verb which shows that an action was supposed to happen in the past but could not due to some reason is called Conditional Past.",
    "explanation_hi": "(D) हेतुहेतुमद् भूतकाल: क्रिया के जिस रूप से पता चलता है कि भूतकाल में क्रिया होने वाली थी, पर किसी कारण न हो सकी, उसे हेतुहेतुमद् भूतकाल कहते हैं।"
  },
  {
    "question_en": "Which case marker is necessarily used with the subject in the past tense (Simple, Recent, Perfect, Doubtful, Conditional) of transitive verbs?",
    "question_hi": "सकर्मक क्रियाओं के भूतकाल (सामान्य, आसन्न, पूर्ण, संदिग्ध, हेतुहेतुमद्) में कर्ता के साथ कौन सा कारक चिह्न अवश्य लगता है?",
    "options_en": ["ko", "se", "ne", "Ø (zero marker)"],
    "options_hi": ["को", "से", "ने", "Ø (लुप्त)"],
    "correct_option_index": 2,
    "explanation_en": "(C) ne: In the past tenses (Simple Past, Recent Past, Past Perfect, Doubtful Past, second form of Conditional Past) of transitive verbs, the postposition 'ne' is used with the subject.",
    "explanation_hi": "(C) ने: सकर्मक क्रियाओं के भूतकाल (सामान्य भूत, आसन्न भूत, पूर्ण भूत, संदिग्ध भूत, हेतुहेतुमद् का द्वितीय रूप) में कर्ता के साथ 'ने' परसर्ग लगता है।"
  },
  {
    "question_en": "'Mohan eats mango (ne).' Why is this sentence incorrect from the perspective of tense?",
    "question_hi": "'मोहन ने आम खाता है।' यह वाक्य काल की दृष्टि से शुद्ध क्यों नहीं है?",
    "options_en": ["The object is not definite.", "The use of 'ne' is prohibited in the present tense of transitive verbs.", "The verb is singular.", "The subject is Mohan."],
    "options_hi": ["कर्म निश्चित नहीं है।", "सकर्मक क्रिया के वर्तमान काल में 'ने' का प्रयोग वर्जित है।", "क्रिया एकवचन है।", "कर्ता मोहन है।"],
    "correct_option_index": 1,
    "explanation_en": "(B) The use of 'ne' is prohibited in the present tense of transitive verbs.: With transitive verbs, 'ne' is not used in the present and future tenses.",
    "explanation_hi": "(B) सकर्मक क्रिया के वर्तमान काल में 'ने' का प्रयोग वर्जित है।: सकर्मक क्रियाओं के साथ वर्तमान और भविष्य काल में 'ने' का प्रयोग नहीं लगता है।"
  },
  {
    "question_en": "When the postposition 'ne' is with the subject and 'ko' is with the object, in what form does the verb remain (in 'bhāve-prayog' - impersonal construction)?",
    "question_hi": "जब कर्ता के साथ 'ने' और कर्म के साथ 'को' परसर्ग लगा हो, तो क्रिया किस काल में किस रूप में रहती है (भावे-प्रयोग)?",
    "options_en": ["Agrees with the gender-number of the object.", "In third person, masculine, singular (only in past tense).", "Agrees with the gender-number of the subject.", "Always feminine plural."],
    "options_hi": ["कर्म के लिंग-वचन के अनुसार।", "अन्य पुरुष, पुल्लिंग, एकवचन में (केवल भूतकाल में)।", "कर्ता के लिंग-वचन के अनुसार।", "सदा स्त्रीलिंग बहुवचन में।"],
    "correct_option_index": 1,
    "explanation_en": "(B) In third person, masculine, singular (only in past tense).: When the marker 'ne' is with the subject and 'ko' is with the object, the verb's person-gender-number agree neither with the subject nor the object; it always remains in the third person, masculine, singular (bhāve-prayog), mentioned in tenses formed from the past participle.",
    "explanation_hi": "(B) अन्य पुरुष, पुल्लिंग, एकवचन में (केवल भूतकाल में)।: जब कर्ता के साथ 'ने' चिह्न और कर्म के साथ 'को' लगा रहता है, तो क्रिया का पुरुष-लिंग-वचन न कर्ता के अनुसार होता है न कर्म के, और यह क्रिया सदा अन्य पुरुष, पुल्लिंग, एकवचन में रहती है (भावे-प्रयोग), जिसका उल्लेख भूतकालिक कृदंत से बने काल में होता है।"
  },
  {
    "question_en": "'The boys used to go play kabaddi daily.' Which tense does this sentence represent?",
    "question_hi": "'लड़के रोज कबड्डी खेलने जाया करते थे।' यह वाक्य क्रिया के किस काल को दर्शाता है?",
    "options_en": ["Past Imperfect", "Past Habitual Compound Verb", "Simple Present", "Past Perfect"],
    "options_hi": ["अपूर्ण भूतकाल", "भूतकालिक अभ्यासबोधक संयुक्त क्रिया", "सामान्य वर्तमान काल", "पूर्ण भूतकाल"],
    "correct_option_index": 1,
    "explanation_en": "(B) Past Habitual Compound Verb: This sentence uses a habitual compound verb (like 'jāyā karte the' - used to go) to indicate a habitual action in the past.",
    "explanation_hi": "(B) भूतकालिक अभ्यासबोधक संयुक्त क्रिया: यह वाक्य अभ्यासबोधक संयुक्त क्रिया (जैसे: 'जाया करते थे') के माध्यम से भूतकाल में किसी कार्य के अभ्यास (habitual action) को दर्शाता है।"
  },
  {
    "question_en": "In 'The train is about to arrive (ko hai).', what does the Dative case of the verb 'hona' (to be) with the verbal noun ('aane ko') indicate?",
    "question_hi": "'गाड़ी आने को है।' में 'होना' क्रिया का संप्रदान कारक (क्रियार्थक संज्ञा के साथ) क्या सूचित करता है?",
    "options_en": ["Possibility", "Desire", "Readiness or Remainder", "Incompleteness"],
    "options_hi": ["संभावना", "इच्छा", "तत्परता या शेष", "अपूर्णता"],
    "correct_option_index": 2,
    "explanation_en": "(C) Readiness or Remainder: The Dative case of a verbal noun (here: 'aane ko') with the verb 'hona' indicates readiness or something remaining to be done (e.g., The procession was about to start).",
    "explanation_hi": "(C) तत्परता या शेष: 'होना' क्रिया के साथ क्रियार्थक संज्ञा का संप्रदान कारक (यहाँ: 'आने को') तत्परता या शेष का अर्थ सूचित करता है (जैसे: बारात चलने को हुई)।"
  },
  {
    "question_en": "The incompletion of an action in the present time is indicated by which subtype of the present tense?",
    "question_hi": "वर्तमान काल में क्रिया के होने की असंभाव्यता (असमाप्ति) किस भेद द्वारा सूचित होती है?",
    "options_en": ["Simple Present", "Present Perfect", "Present Imperfect/Continuous", "Doubtful Present"],
    "options_hi": ["सामान्य वर्तमान", "पूर्ण वर्तमान", "अपूर्ण वर्तमान", "संदिग्ध वर्तमान"],
    "correct_option_index": 2,
    "explanation_en": "(C) Present Imperfect/Continuous (Apūrṇa Vartamān): The form of the verb which indicates the incompletion (ongoing nature) of an action in the present time is called Present Imperfect (e.g., Hari is going).",
    "explanation_hi": "(C) अपूर्ण वर्तमान: क्रिया के जिस रूप से वर्तमान समय में क्रिया के होने की असमाप्ति सूचित होती है, उसे अपूर्ण वर्तमान काल कहते हैं (जैसे: हरि जा रहा है)।"
  },
  {
    "question_en": "'Perhaps he might have come yesterday.' This sentence is an example of which tense and mood?",
    "question_hi": "'वहाँ शायद वह कल आया होगा।' यह वाक्य किस काल और विधा का उदाहरण है?",
    "options_en": ["Probable Past", "Doubtful Past", "Present Perfect", "Simple Future"],
    "options_hi": ["संभाव्य भूतकाल", "संदिग्ध भूतकाल", "पूर्ण वर्तमान काल", "सामान्य भविष्यत् काल"],
    "correct_option_index": 1,
    "explanation_en": "(B) Doubtful Past (Sandigdh Bhutkal): This sentence expresses doubt about a past action (aaya hoga - might have come), hence it is Doubtful Past.",
    "explanation_hi": "(B) संदिग्ध भूतकाल: यह वाक्य भूतकाल की क्रिया में संदेह व्यक्त करता है (आया होगा), अतः यह संदिग्ध भूतकाल है।"
  },
  {
    "question_en": "'You read', 'I should go', 'He should see.' These verbs respectively indicate which mood and tense?",
    "question_hi": "'तुम पढ़ो', 'मैं जाऊँ', 'वह देखे।' ये क्रियाएँ क्रमशः किस विधा (Mood) और काल को दर्शाती हैं?",
    "options_en": ["Dubitative, Present Tense", "Conditional, Future Tense", "Direct Imperative/Subjunctive, Present Tense", "Probable Future Tense"],
    "options_hi": ["संदेहार्थ, वर्तमान काल", "संकेतार्थ, भविष्यत् काल", "प्रत्यक्ष विधिकाला (आज्ञार्थ/सामान्य), वर्तमान काल", "संभाव्य भविष्यत् काल"],
    "correct_option_index": 2,
    "explanation_en": "(C) Direct Imperative/Subjunctive, Present Tense: These forms represent the general forms of the Direct Imperative/Subjunctive Mood (Pratyakṣa Vidhikālā).",
    "explanation_hi": "(C) प्रत्यक्ष विधिकाला (आज्ञार्थ/सामान्य), वर्तमान काल: ये रूप क्रिया के प्रत्यक्ष विधिकाल (Direct Imperative/Mood) के सामान्य रूप हैं।"
  },
  {
    "question_en": "Select the auxiliary verb form that indicates the Present Perfect tense:",
    "question_hi": "पूर्ण वर्तमान काल को सूचित करने वाले सहायक क्रिया पद का चयन कीजिए:",
    "options_en": ["raha hai", "hoga", "tha", "hai"],
    "options_hi": ["रहा है", "होगा", "था", "है"],
    "correct_option_index": 3,
    "explanation_en": "(D) hai: The Present Perfect indicates that a past action has been completed in the present (e.g., Water has fallen! The servant has come). Some authors also call this Recent Past (Āsanna Bhūt).",
    "explanation_hi": "(D) है: पूर्ण वर्तमान काल से सूचित होता है कि भूतकाल का कार्य वर्तमान काल में समाप्त हुआ है (जैसे: पानी गिरा है! नौकर आया है)। कुछ लेखक इसे आसन्न भूतकाल भी कहते हैं।"
  },
  {
    "question_en": "The verb form 'vah chalta ho' (he might be walking) is indicative of which tense?",
    "question_hi": "'वह चलता हो' क्रिया रूप किस काल का द्योतक है?",
    "options_en": ["Past Imperfect", "Doubtful Past", "Probable Present", "Simple Conditional"],
    "options_hi": ["अपूर्ण भूतकाल", "संदिग्ध भूतकाल", "संभाव्य वर्तमान काल", "सामान्य संकेतार्थ काल"],
    "correct_option_index": 2,
    "explanation_en": "(C) Probable Present (Sambhāvya Vartamān): The Probable Present is formed by combining the present participle with the auxiliary verb 'ho', indicating a higher probability of the action happening in the present.",
    "explanation_hi": "(C) संभाव्य वर्तमान काल: वर्तमान कालिक कृदंत के साथ सहायक क्रिया 'हो' के योग से संभाव्य वर्तमान काल बनता है, जिससे वर्तमान में क्रिया के होने की संभावना अधिक रहती है।"
  },
  {
    "question_en": "'The girl was reading.' Which type of past tense does this verb indicate?",
    "question_hi": "'लड़की पढ़ रही थी।' यह क्रिया किस प्रकार का भूतकाल दर्शाती है?",
    "options_en": ["Simple Past", "Past Perfect", "Past Imperfect/Continuous", "Conditional Past"],
    "options_hi": ["सामान्य भूत", "पूर्ण भूत", "अपूर्ण भूत", "हेतुहेतुमद् भूत"],
    "correct_option_index": 2,
    "explanation_en": "(C) Past Imperfect/Continuous (Apūrṇa Bhūt): Past Imperfect indicates that the action was ongoing in the past but its completion was not indicated.",
    "explanation_hi": "(C) अपूर्ण भूत: अपूर्ण भूतकाल से सूचित होता है कि भूतकाल में कार्य हो रहा था, पर समाप्ति नहीं हुई थी।"
  },
  {
    "question_en": "'I have passed the examination (masc.) in the first division.' The tense-related error in this sentence is based on verb gender-number agreement. What is the correct verb form?",
    "question_hi": "'मैंने प्रथम श्रेणी में परीक्षा पास किया है।' इस वाक्य की काल संबंधी अशुद्धि का शुद्धिकरण क्रिया के लिंग-वचन पर आधारित है। शुद्ध क्रिया रूप क्या होगा?",
    "options_en": ["paas kiya tha.", "paas kiya hoga.", "paas ki hai.", "paas ki hongi."],
    "options_hi": ["पास किया था।", "पास किया होगा।", "पास की है।", "पास की होंगी।"],
    "correct_option_index": 2,
    "explanation_en": "(C) paas ki hai.: In the Simple Past (and Recent Past/Present Perfect) of transitive verbs (where 'ne' is used with the subject), the verb form agrees with the object ('parīkṣā' - examination, feminine). Hence, 'ki hai' is correct.",
    "explanation_hi": "(C) पास की है।: सकर्मक क्रिया के सामान्य भूतकाल में क्रिया का रूप कर्म (परीक्षा, स्त्रीलिंग) के अनुसार बदलता है। आसन्न भूतकाल (परीक्षा पास की है) में भी यह नियम लागू होता है।"
  },
  {
    "question_en": "The form of the verb which indicates that an action will happen in the coming time is which tense?",
    "question_hi": "क्रिया के जिस रूप से आने वाले समय में कार्य का होना सूचित होता है, वह कौन सा काल है?",
    "options_en": ["Present Tense", "Past Tense", "Future Tense", "None of these"],
    "options_hi": ["वर्तमान काल", "भूतकाल", "भविष्यत् काल", "इनमें से कोई नहीं"],
    "correct_option_index": 2,
    "explanation_en": "(C) Future Tense: The form of the verb which indicates that the action will be completed in the future is called the Future Tense.",
    "explanation_hi": "(C) भविष्यत् काल: क्रिया का वह रूप जिससे यह ज्ञात होता है कि कार्य आने वाले समय में संपन्न होगा, उसे भविष्यत् काल कहते हैं।"
  },
  {
    "question_en": "To change 'Maine pustak padhi' (I read the book - Simple Past) to Past Perfect, which auxiliary verb form will be used?",
    "question_hi": "'मैंने पुस्तक पढ़ी' (सामान्य भूतकाल) को पूर्ण भूतकाल में बदलने के लिए किस सहायक क्रिया पद का प्रयोग होगा?",
    "options_en": ["hoon/hain", "hoga/hongi", "tha/thi/the", "raha/rahi/rahe"],
    "options_hi": ["हूँ/हैं", "होगा/होंगी", "था/थी/थे", "रहा/रही/रहे"],
    "correct_option_index": 2,
    "explanation_en": "(C) tha/thi/the: To form the Past Perfect, 'tha, thi, the' are added to the Simple Past forms based on gender and number.",
    "explanation_hi": "(C) था/थी/थे: पूर्ण भूतकाल बनाने के लिए, सामान्य भूतकाल के रूपों में लिंग और वचन के आधार पर 'था, थी, थे' लगाकर पूर्णभूत के रूप बनाए जाते हैं।"
  },
  {
    "question_en": "How does the independent adjectival use of the past participle differ from the Recent Past tense?",
    "question_hi": "भूतकालिक कृदंत का स्वतंत्र विशेषण के रूप में प्रयोग, आसन्न भूतकाल से किस प्रकार भिन्न होता है?",
    "options_en": ["The participle verb doesn't take 'hai' or 'hoon'.", "The past participle takes 'tha'.", "It denotes a present state, not the recent completion of an action.", "It only comes with imperfect verbs."],
    "options_hi": ["कृदंत क्रिया में 'है' या 'हूँ' नहीं लगता।", "कृदंत भूतकाल में 'था' लगता है।", "यह वर्तमान स्थिति का बोध कराता है, न कि क्रिया की आसन्न समाप्ति का।", "यह केवल अपूर्ण क्रियाओं के साथ आता है।"],
    "correct_option_index": 2,
    "explanation_en": "(C) It denotes a present state, not the recent completion of an action.: In 'Raja baithe hain' (The king is seated), the past participle ('baithe') is an independent adjective denoting a current state. Mistaking this for Recent Past by combining it with the verb is an error.",
    "explanation_hi": "(C) यह वर्तमान स्थिति का बोध कराता है, न कि क्रिया की आसन्न समाप्ति का।: 'राजा बैठे हैं' (बैठे हुए हैं) में भूतकालिक कृदंत स्वतंत्र विशेषण है, जो वर्तमान स्थिति का बोध कराता है। इसे क्रिया के साथ मिलाकर आसन्न भूतकाल मानना भूल है।"
  },
  {
    "question_en": "Which is an example of 'Probable Future Tense' (expressing possibility or wish)?",
    "question_hi": "'संभाव्य भविष्यत् काल' (संभावना या इच्छा) का उदाहरण कौन सा है?",
    "options_en": ["I will go.", "If he comes, then I shall go.", "He might be coming.", "He was coming."],
    "options_hi": ["मैं जाऊँगा।", "वह आवे तो मैं जाऊँ।", "वह आता होगा।", "वह आ रहा था।"],
    "correct_option_index": 1,
    "explanation_en": "(B) If he comes, then I shall go.: The Probable Future tense expresses estimation, wish, duty, etc. Option (B) shows a condition related to future action.",
    "explanation_hi": "(B) वह आवे तो मैं जाऊँ।: संभाव्य भविष्यत् काल के रूप में अनुमान, इच्छा, कर्तव्य आदि का बोध होता है। विकल्प (B) भविष्य की क्रिया से संबंधित शर्त दिखाता है।"
  },
  {
    "question_en": "'vah chalta tha / chalti thi' (he/she used to walk) is an example of which tense form?",
    "question_hi": "'वह चलता था/चलती थी' यह क्रिया रूप किस काल का उदाहरण है?",
    "options_en": ["Simple Past", "Doubtful Past", "Past Imperfect/Habitual Past", "Simple Present"],
    "options_hi": ["सामान्य भूतकाल", "संदिग्ध भूतकाल", "अपूर्ण भूतकाल", "सामान्य वर्तमान काल"],
    "correct_option_index": 2,
    "explanation_en": "(C) Past Imperfect/Habitual Past (Apūrṇa Bhūt): The Past Imperfect (formed from the present participle) appears as 'chalta tha / chalti thi'.",
    "explanation_hi": "(C) अपूर्ण भूतकाल: अपूर्ण भूतकाल (वर्तमानकालिक कृदंत से बना) चलता था/चलती थी के रूप में आता है।"
  },
  {
    "question_en": "'The sun is setting (raha hai) in the west daily.' What is the tense-related error in this sentence?",
    "question_hi": "'सूरज प्रतिदिन पश्चिम में डूब रहा है।' इस वाक्य में काल संबंधी क्या दोष है?",
    "options_en": ["The verb's gender is wrong.", "Use of Present Continuous instead of Simple Present.", "Incorrect use of 'mein' postposition.", "Use of 'raha hai' is prohibited in present tense."],
    "options_hi": ["क्रिया का लिंग गलत है।", "सामान्य वर्तमान काल की जगह अपूर्ण वर्तमान का प्रयोग।", "'में' परसर्ग का गलत प्रयोग।", "वर्तमान काल में 'रहा है' का प्रयोग वर्जित।"],
    "correct_option_index": 1,
    "explanation_en": "(B) Use of Present Continuous instead of Simple Present.: For actions that happen daily/habitually, the Simple Present (ḍūbtā hai - sets) should be used, not the Present Continuous (ḍūb rahā hai - is setting).",
    "explanation_hi": "(B) सामान्य वर्तमान काल की जगह अपूर्ण वर्तमान का प्रयोग।: जो कार्य प्रतिदिन/नित्य होता है, उसके लिए सामान्य वर्तमान काल (डूबता है) का प्रयोग होना चाहिए, न कि अपूर्ण वर्तमान (डूब रहा है) का।"
  },
  {
    "question_en": "According to the state (avasthā) of the verb's tense, how many total subtypes are recognized in Hindi?",
    "question_hi": "हिंदी में क्रिया के काल की अवस्था के अनुसार उसके कुल कितने भेद माने जाते हैं?",
    "options_en": ["16", "12", "6", "3"],
    "options_hi": ["16", "12", "6", "3"],
    "correct_option_index": 2,
    "explanation_en": "(C) 6: Based on the three states (General/Simple, Imperfect, Perfect) of the three main tenses (Present, Past, Future), six main subtypes are recognized (including Simple Future).",
    "explanation_hi": "(C) 6: तीनों कालों (वर्तमान, भूत, भविष्यत्) की तीन अवस्थाओं (सामान्य, अपूर्ण, पूर्ण) के आधार पर छः मुख्य भेद माने जाते हैं, (सामान्य भविष्यत् को मिलाकर)।"
  },
  {
    "question_en": "'If you had come, I would have gone.' This sentence indicates which mood and tense?",
    "question_hi": "'यदि आप आते तो मैं जाता।' यह वाक्य क्रिया के किस विधा और काल को दर्शाता है?",
    "options_en": ["Imperative Tense", "Probable Present", "Conditional Past (Hetuhetumad Bhut)", "Doubtful Future"],
    "options_hi": ["आज्ञार्थ काल", "संभाव्य वर्तमान", "संकेतार्थ भूतकाल (हेतुहेतुमद् भूत)", "संदिग्ध भविष्यत्"],
    "correct_option_index": 2,
    "explanation_en": "(C) Conditional Past (Hetuhetumad Bhut): The conditional mood (Sanketārth) is the form of the verb that indicates the incompletion of two causally related actions. In the past tense, it is called Hetuhetumad Bhutkal.",
    "explanation_hi": "(C) संकेतार्थ भूतकाल (हेतुहेतुमद् भूत): संकेतार्थ क्रिया का वह रूप जिससे कार्य-कारण का संबंध रखने वाली दो क्रियाओं की अशुद्धि सूचित होती है, उसे संकेतार्थ कहते हैं। भूतकाल में इसे हेतुहेतुमद् भूतकाल कहा जाता है।"
  },
  {
    "question_en": "'The servant has finished sweeping the room.' This sentence shows which type of compound verb?",
    "question_hi": "'नौकर कोठा झाड़ चुका है।' यह वाक्य किस संयुक्त क्रिया के भेद को दर्शाता है?",
    "options_en": ["Inceptive", "Habitual", "Completive", "Potential"],
    "options_hi": ["आरंभबोधक", "अभ्यासबोधक", "पूर्णताबोधक", "शक्तिबोधक"],
    "correct_option_index": 2,
    "explanation_en": "(C) Completive (Pūrṇatābodhak): The compound verb that indicates the completion of an action is called Completive compound verb (e.g., The servant has finished sweeping; Mother has finished cooking).",
    "explanation_hi": "(C) पूर्णताबोधक: जिस संयुक्त क्रिया से कार्य की पूर्णता का बोध होता है, उसे पूर्णताबोधक संयुक्त क्रिया कहते हैं (जैसे: नौकर कोठा झाड़ चुका है, माँ रसोई बना चुकी है)।"
  },
  {
    "question_en": "In which of the following tense forms is there no change (vikār) due to gender?",
    "question_hi": "निम्नलिखित में से किस काल के रूप में लिंग के कारण कोई विकार नहीं होता है?",
    "options_en": ["Recent Past", "Past Imperfect", "Probable Future", "Simple Present"],
    "options_hi": ["आसन्न भूतकाल", "अपूर्ण भूतकाल", "संभाव्य भविष्यत् काल", "सामान्य वर्तमान काल"],
    "correct_option_index": 2,
    "explanation_en": "(C) Probable Future (Sambhāvya Bhaviṣyat): Like personal pronouns, verbs have three persons. In the forms of the Imperfect Future and the Imperative/Subjunctive Moods, there is no change due to gender (e.g., main jāūn/jāe/jāen).",
    "explanation_hi": "(C) संभाव्य भविष्यत् काल: क्रिया के पुरुषवाचक सर्वनामों के समान तीन पुरुष होते हैं। अपूर्ण भविष्यत् और विधिकाले के रूपों में लिंग के कारण कोई विकार नहीं होता है (जैसे: मैं जाऊँ/जाए/जाएँ)।"
  },
  {
    "question_en": "'Nowadays he might be reading the book.' This sentence falls under which subtype of the present tense?",
    "question_hi": "'आजकल वह पुस्तक पढ़ता होगा।' यह वाक्य वर्तमान काल के किस उपभेद में आता है?",
    "options_en": ["Probable Present", "Simple Present", "Doubtful Present", "Present Imperfect"],
    "options_hi": ["संभाव्य वर्तमान", "सामान्य वर्तमान", "संदिग्ध वर्तमान", "अपूर्ण वर्तमान"],
    "correct_option_index": 2,
    "explanation_en": "(C) Doubtful Present (Sandigdh Vartamān): The Doubtful Present indicates doubt about the occurrence of an action in the present time (paṛhtā hogā / paṛhtī hogī).",
    "explanation_hi": "(C) संदिग्ध वर्तमान: संदिग्ध वर्तमान काल से वर्तमान काल में क्रिया के होने में संदेह पाया जाता है। (पढ़ता होगा/पढ़ती होगी)।"
  },
  {
    "question_en": "'The bus fell from the bridge, we got this news late.' Based on tense and number, what is the correction for the verb ('milī' - got, fem. sing.) error?",
    "question_hi": "'बस पुल से गिर गई, हमें यह समाचार देर से मिला।' इस वाक्य में क्रिया ('मिली') की अशुद्धि का सुधार काल और वचन के आधार पर क्या होगा?",
    "options_en": ["milīn", "milā", "mil gayā", "mil gaī"],
    "options_hi": ["मिलीं", "मिला", "मिल गया", "मिल गई"],
    "correct_option_index": 1,
    "explanation_en": "(B) milā: Here the verb should agree with 'samāchār' (news - masc. sing.), not 'der' (delay - fem.). Correct form: hameṃ yah samāchār der se milā.",
    "explanation_hi": "(B) मिला: यहाँ क्रिया (समाचार, पुल्लिंग एकवचन) के अनुसार होनी चाहिए, न कि 'देर' (स्त्रीलिंग) के अनुसार। शुद्ध रूप: हमें यह समाचार देर से मिला।"
  },
  {
    "question_en": "Which of the following tenses is formed from the past participle (bhūtkālik kṛdant)?",
    "question_hi": "निम्नलिखित में से कौन सा काल, भूतकालिक कृदंत से बना है?",
    "options_en": ["Simple Present", "Recent Past", "Probable Future", "Present Imperfect"],
    "options_hi": ["सामान्य वर्तमान काल", "आसन्न भूतकाल", "संभाव्य भविष्यत् काल", "अपूर्ण वर्तमान काल"],
    "correct_option_index": 1,
    "explanation_en": "(B) Recent Past (Āsanna Bhūt): Tenses formed from the past participle include: Simple Past, Recent Past (Present Perfect), Past Perfect, Probable Past, Doubtful Past, and Imperfect Conditional.",
    "explanation_hi": "(B) आसन्न भूतकाल: भूतकालिक कृदंत से बनने वाले काल हैं: सामान्य भूत, आसन्न भूत (पूर्ण वर्तमान), पूर्ण भूत, संभाव्य भूत, संदिग्ध भूत और अपूर्ण संकेतार्थ काल।"
  },
  {
    "question_en": "What would be the Past Perfect form of the intransitive verb 'chalnā' (to walk) in the impersonal construction ('bhāve-prayog')?",
    "question_hi": "अकर्मक क्रिया 'चलना' का भावे-प्रयोग में पूर्ण भूतकाल का रूप क्या होगा?",
    "options_en": ["chalā jātā hogā.", "chalā gayā thā.", "chalā jātā hai.", "chal gayā."],
    "options_hi": ["चला जाता होगा।", "चला गया था।", "चला जाता है।", "चल गया।"],
    "correct_option_index": 1,
    "explanation_en": "(B) chalā gayā thā.: The impersonal construction ('bhāve-prayog') of intransitive verbs is similar to the passive voice. In the Past Perfect, the impersonal form appears as 'mujhse... unse chalā gayā thā' (It was walked by me... by them).",
    "explanation_hi": "(B) चला गया था।: अकर्मक क्रियाओं का भावे-प्रयोग कर्मवाच्य के समान होता है। पूर्ण भूतकाल में भावे-प्रयोग का रूप 'मुझसे... उनसे चला गया था' के रूप में आता है।"
  },
  {
    "question_en": "Why is the 'ne' postposition not used in 'vah paṛhtā to' (If he had studied - Conditional Past, first form)?",
    "question_hi": "'वह पढ़ता तो' (हेतुहेतुमद् भूत, प्रथम रूप) में 'ने' परसर्ग का प्रयोग क्यों नहीं होता?",
    "options_en": ["The verb is intransitive.", "The verb is compound.", "The effect of the verb falls on the subject.", "The verb is in Past Imperfect or the first form of Conditional Past."],
    "options_hi": ["क्रिया अकर्मक है।", "क्रिया संयुक्त है।", "क्रिया का फल कर्ता पर पड़ता है।", "क्रिया अपूर्ण भूतकाल या हेतुहेतुमद् भूत के प्रथम रूप की है।"],
    "correct_option_index": 3,
    "explanation_en": "(D) The verb is in Past Imperfect or the first form of Conditional Past.: The 'ne' marker is not used with the subject in the Past Imperfect and the first form of the Conditional Past.",
    "explanation_hi": "(D) क्रिया अपूर्ण भूतकाल या हेतुहेतुमद् भूत के प्रथम रूप की है।: अपूर्ण भूतकाल और हेतुहेतुमद् भूत (प्रथम रूप) के कर्ता के साथ 'ने' चिह्न नहीं लगता।"
  },
  {
    "question_en": "Which of the following verbs is an example of the Present Continuous (Apūrṇa Vartamān)?",
    "question_hi": "निम्नलिखित में से कौन सी क्रिया तत्कालिक वर्तमान (अपूर्ण वर्तमान) का उदाहरण है?",
    "options_en": ["The boy was writing.", "The boy finished writing.", "The boy is writing.", "The boy will write."],
    "options_hi": ["बालक लिख रहा था।", "बालक लिख चुका।", "बालक लिख रहा है।", "बालक लिखेगा।"],
    "correct_option_index": 2,
    "explanation_en": "(C) The boy is writing.: The form of the verb which indicates that the action is ongoing in the present time is called Present Continuous (Apūrṇa Vartamān), e.g., I am reading, he is writing.",
    "explanation_hi": "(C) बालक लिख रहा है।: क्रिया के जिस रूप से कार्य का वर्तमान समय में जारी रहने की सूचना मिलती है, उसे अपूर्ण वर्तमान काल (या तत्कालिक वर्तमान) कहते हैं, जैसे: मैं पढ़ रहा हूँ, वह लिख रहा है।"
  }
];

export default kaalQuestions;
