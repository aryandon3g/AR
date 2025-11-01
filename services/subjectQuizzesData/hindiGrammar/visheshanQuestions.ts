import type { QuizQuestion } from '../../../types';

const visheshanQuestions: QuizQuestion[] = [
  {
    "question_en": "What is a word called that describes the quality (visheshta) of a noun or pronoun?",
    "question_hi": "जो शब्द किसी संज्ञा या सर्वनाम की विशेषता बताता है, उसे क्या कहते हैं?",
    "options_en": ["Adverb (Kriyavisheshan)", "Visheshya (The noun/pronoun being qualified)", "Adjective (Visheshan)", "Pravisheshan (Intensifier)"],
    "options_hi": ["क्रियाविशेषण", "विशेष्य", "विशेषण", "प्रविशेषण"],
    "correct_option_index": 2,
    "explanation_en": "A word that describes the quality of a noun or pronoun is called an adjective (Visheshan).",
    "explanation_hi": "जो शब्द संज्ञा या सर्वनाम की विशेषता बताता है, उसे विशेषण कहते हैं।"
  },
  {
    "question_en": "Fundamentally, how many types of adjectives are there?",
    "question_hi": "विशेषण के मूलतः कितने भेद होते हैं?",
    "options_en": ["Three", "Four", "Five", "Two"],
    "options_hi": ["तीन", "चार", "पाँच", "दो"],
    "correct_option_index": 1,
    "explanation_en": "There are four main types of adjectives: Gunavachak (Qualitative), Sankhyavachak (Numeral), Parimanavachak (Quantitative), and Sarvanamik (Pronominal).",
    "explanation_hi": "विशेषण के चार भेद होते हैं: गुणवाचक, संख्यावाचक, परिमाणवाचक, और सार्वनामिक विशेषण।"
  },
  {
    "question_en": "In the sentence 'वह बहुत परिश्रमी है।' (He is very hardworking), what is the word 'बहुत' (very) called, which describes the adjective?",
    "question_hi": "'वह बहुत परिश्रमी है।' वाक्य में 'बहुत' शब्द क्या कहलाता है, जो विशेषण की विशेषता बताता है?",
    "options_en": ["Adverb (Kriyavisheshan)", "Predicative Adjective (Vidheya Visheshan)", "Pravisheshan (Intensifier)", "Sub-adjective (Upvisheshan)"],
    "options_hi": ["क्रियाविशेषण", "विधेय विशेषण", "प्रविशेषण", "उपविशेषण"],
    "correct_option_index": 2,
    "explanation_en": "Words that describe the quality of an adjective itself are called 'Pravisheshan' (Intensifiers), e.g., 'बहुत' (very) in 'बहुत परिश्रमी' (very hardworking).",
    "explanation_hi": "ऐसे शब्द जो विशेषण की विशेषता बतलाते हैं, प्रविशेषण कहलाते हैं (जैसे: बहुत परिश्रमी)।"
  },
  {
    "question_en": "What are the respective types of adjectives in 'सफेद चादर' (white sheet), 'पाँच छात्र' (five students), and 'कुछ फल' (some fruits)?",
    "question_hi": "'सफेद चादर', 'पाँच छात्र', और 'कुछ फल' में क्रमशः विशेषणों का प्रकार क्या है?",
    "options_en": ["Qualitative, Numeral, Quantitative", "Numeral, Qualitative, Pronominal", "Quantitative, Numeral, Qualitative", "Pronominal, Qualitative, Numeral"],
    "options_hi": ["गुणवाचक, संख्यावाचक, परिमाणवाचक", "संख्यावाचक, गुणवाचक, सार्वनामिक", "परिमाणवाचक, संख्यावाचक, गुणवाचक", "सार्वनामिक, गुणवाचक, संख्यावाचक"],
    "correct_option_index": 0,
    "explanation_en": "'सफेद' (white) denotes color (Qualitative), 'पाँच' (five) denotes number (Numeral), and 'कुछ' (some) denotes amount (Quantitative).",
    "explanation_hi": "'सफेद' रंग (गुणवाचक), 'पाँच' संख्या (संख्यावाचक), और 'कुछ' परिमाण (परिमाणवाचक) को दर्शाता है।"
  },
  {
    "question_en": "When pronouns like 'यह' (this), 'वह' (that), 'जो' (which), and 'कौन' (who/what) are used as adjectives in a sentence, what are they called?",
    "question_hi": "'यह', 'वह', 'जो', और 'कौन' जैसे सर्वनाम जब वाक्य में विशेषण के रूप में प्रयुक्त होते हैं, तो उन्हें क्या कहते हैं?",
    "options_en": ["Reflexive Adjective (Nijvachak)", "Demonstrative/Pronominal Adjective (Sanketvachak)", "Definite Pronoun (Nishchayavachak Sarvanam)", "Proper Adjective (Vyaktivachak Visheshan)"],
    "options_hi": ["निजवाचक विशेषण", "संकेतवाचक विशेषण", "निश्चयवाचक सर्वनाम", "व्यक्तिवाचक विशेषण"],
    "correct_option_index": 1,
    "explanation_en": "Sarvanamik Visheshan (Pronominal Adjectives) are also called Sanketvachak Visheshan (Demonstrative Adjectives).",
    "explanation_hi": "सार्वनामिक विशेषण को संकेतवाचक विशेषण भी कहा जाता है।"
  },
  {
    "question_en": "In 'गरीब आदमी' (poor man), the adjective 'गरीब' (poor) falls under which sub-type of Qualitative Adjective (Gunavachak)?",
    "question_hi": "'गरीब आदमी' में 'गरीब' विशेषण, गुणवाचक विशेषण के किस उपभेद के अंतर्गत आता है?",
    "options_en": ["Nature (Swabhav)", "Merit-Demerit (Gun-Dosh)", "Condition-State-Status (Dasha-Sthiti-Avastha)", "Place (Sthan)"],
    "options_hi": ["स्वभाव", "गुण-दोष", "दशा-स्थिति-अवस्था", "स्थान"],
    "correct_option_index": 2,
    "explanation_en": "The word 'गरीब' (poor) is included with 'दुबला' (thin), 'रोगी' (sick), 'कमजोर' (weak) as adjectives describing condition, state, or status.",
    "explanation_hi": "'गरीब' शब्द 'दुबला', 'रोगी', 'कमजोर' के साथ दशा-स्थिति-अवस्था बताने वाले विशेषणों में शामिल है।"
  },
  {
    "question_en": "Words like 'क्षेत्रीय' (regional), 'पहाड़ी' (hilly), 'पूर्वी' (eastern) fall under which sub-type of Qualitative Adjective?",
    "question_hi": "गुणवाचक विशेषण के किस उपभेद में 'क्षेत्रीय', 'पहाड़ी', 'पूर्वी' जैसे शब्द आते हैं?",
    "options_en": ["Time-related (Kalvachak)", "Shape-related (Akarvachak)", "Nature-related (Swabhavvachak)", "Place-related (Sthanvachak)"],
    "options_hi": ["कालवाचक", "आकारवाचक", "स्वभाववाचक", "स्थानवाचक"],
    "correct_option_index": 3,
    "explanation_en": "'क्षेत्रीय' (regional), 'भीतरी' (internal), 'पहाड़ी' (hilly), 'पूर्वी' (eastern), 'ग्रामीण' (rural), 'कटकी' (from Cuttack) all denote place.",
    "explanation_hi": "'क्षेत्रीय', 'भीतरी', 'पहाड़ी', 'पूर्वी', 'ग्रामीण', 'कटकी' स्थान को दर्शाते हैं।"
  },
  {
    "question_en": "What type of Definite Numeral Adjectives are 'पहला' (first), 'दूसरा' (second), 'ग्यारहवाँ' (eleventh)?",
    "question_hi": "'पहला', 'दूसरा', 'ग्यारहवाँ' किस प्रकार के निश्चित संख्यावाचक विशेषण हैं?",
    "options_en": ["Cardinal (Poorna Sankhyabodhak)", "Multiplicative (Avrittivachak)", "Ordinal (Kramvachak)", "Collective (Samudayavachak)"],
    "options_hi": ["पूर्ण संख्याबोधक", "आवृत्तिवाचक", "क्रमवाचक", "समुदायवाचक"],
    "correct_option_index": 2,
    "explanation_en": "'पहला' (first), 'दूसरा' (second), 'ग्यारहवाँ' (eleventh), 'इक्कीसवीं' (twenty-first) are Ordinal (Kramvachak) adjectives.",
    "explanation_hi": "'पहला', 'दूसरा', 'ग्यारहवाँ', 'इक्कीसवीं' क्रमवाचक विशेषण हैं।"
  },
  {
    "question_en": "What is the sub-type of numeral adjective that includes 'दुगुना' (double), 'चौगुना' (fourfold), 'तिगुना' (triple) called?",
    "question_hi": "संख्यावाचक विशेषण का वह भेद जो 'दुगुना', 'चौगुना', 'तिगुना' को शामिल करता है, क्या कहलाता है?",
    "options_en": ["Ordinal (Kramvachak)", "Fractional (Apoornankbodhak)", "Multiplicative (Avrittivachak)", "Collective (Samudayavachak)"],
    "options_hi": ["क्रमवाचक", "अपूर्णांकबोधक", "आवृत्तिवाचक", "समुदायवाचक"],
    "correct_option_index": 2,
    "explanation_en": "'दुगुना' (double), 'चौगुना' (fourfold), 'तिहरा' (triple), 'चौहरा' (quadruple) fall under the Multiplicative (Avrittivachak) sub-type.",
    "explanation_hi": "'दुगुना', 'चौगुना', 'तिहरा', 'चौहरा' आवृत्तिवाचक उपभेद के अंतर्गत आते हैं।"
  },
  {
    "question_en": "What type of numeral adjectives are 'दोनों' (both), 'चारों' (all four), 'दसों' (all ten)?",
    "question_hi": "'दोनों', 'चारों', 'दसों' किस प्रकार के संख्यावाचक विशेषण हैं?",
    "options_en": ["Cardinal (Poorna Sankhyabodhak)", "Indefinite Numeral (Anishchit Sankhyavachak)", "Collective (Samudayavachak)", "Ordinal (Kramvachak)"],
    "options_hi": ["पूर्ण संख्याबोधक", "अनिश्चित संख्यावाचक", "समुदायवाचक", "क्रमवाचक"],
    "correct_option_index": 2,
    "explanation_en": "'दोनों' (both), 'चारों' (all four), 'दसों' (all ten), 'पच्चीसों' (all twenty-five) are called Collective (Samudayavachak) adjectives.",
    "explanation_hi": "'दोनों', 'चारों', 'दसों', 'पच्चीसों' समुदायवाचक विशेषण कहलाते हैं।"
  },
  {
    "question_en": "'कितना' (how much), 'थोड़ा' (a little), 'बहुत' (a lot), and 'ज्यादा' (more) are examples of which adjective, used for measure or weight of an object, substance, or place?",
    "question_hi": "'कितना', 'थोड़ा', 'बहुत', और 'ज्यादा' किस विशेषण के उदाहरण हैं, जो वस्तु, पदार्थ या जगह की नाप या तौल बताते हैं?",
    "options_en": ["Numeral Adjective (Sankhyavachak)", "Qualitative Adjective (Gunavachak)", "Quantitative Adjective (Parimanavachak)", "Pronominal Adjective (Sarvanamik)"],
    "options_hi": ["संख्यावाचक विशेषण", "गुणवाचक विशेषण", "परिमाणवाचक विशेषण", "सार्वनामिक विशेषण"],
    "correct_option_index": 2,
    "explanation_en": "'थोड़ा' (a little), 'ज्यादा' (more), 'कितना' (how much), 'बहुत' (a lot) are Quantitative (Parimanbodhak) adjectives.",
    "explanation_hi": "'थोड़ा', 'ज्यादा', 'कितना', 'बहुत' परिमाणबोधक विशेषण हैं।"
  },
  {
    "question_en": "When 'कुछ' (some), which is used for both quantity and number, indicates an indefinite amount, what is it called?",
    "question_hi": "'कुछ', जो मात्रा और संख्या दोनों के लिए प्रयोग होता है, अनिश्चित परिमाण बताने पर क्या कहलाता है?",
    "options_en": ["Indefinite Numeral (Anishchit Sankhyavachak)", "Indefinite Quantitative (Anishchit Parimanavachak)", "Definite Quantitative (Nishchit Parimanavachak)", "Fractional (Apoornankbodhak)"],
    "options_hi": ["अनिश्चित संख्यावाचक", "अनिश्चित परिमाणवाचक", "निश्चित परिमाणवाचक", "अपूर्णांकबोधक"],
    "correct_option_index": 1,
    "explanation_en": "In 'कुछ फल' (some fruits), 'कुछ' (some) indicates quantity. The word 'कुछ' can denote number, quantity, and indefiniteness.",
    "explanation_hi": "'कुछ फल' में 'कुछ' परिमाण बताता है। 'कुछ' शब्द से संख्या, परिमाण और अनिश्चय, तीनों का बोध होता है।"
  },
  {
    "question_en": "In 'परिश्रमी' (hardworking), 'शीला' (Sheela), and 'अति परिश्रमी' (very hardworking), which is the adjective?",
    "question_hi": "'परिश्रमी', 'शीला', और 'अति परिश्रमी' में विशेषण कौन सा है?",
    "options_en": ["परिश्रमी (hardworking)", "शीला (Sheela)", "अति परिश्रमी (very hardworking)", "(A) and (C) both"],
    "options_hi": ["परिश्रमी", "शीला", "अति परिश्रमी", "(A) और (C) दोनों"],
    "correct_option_index": 0,
    "explanation_en": "'परिश्रमी' is the adjective. 'अति परिश्रमी' consists of a 'Pravisheshan' (Intensifier 'अति') and an adjective ('परिश्रमी'). 'शीला' is a proper noun. Therefore, 'परिश्रमी' is the correct answer.",
    "explanation_hi": "'परिश्रमी' विशेषण है। 'अति परिश्रमी' एक प्रविशेषण ('अति') और विशेषण ('परिश्रमी') का युग्म है। 'शीला' एक संज्ञा है। अतः, 'परिश्रमी' ही सही उत्तर है। (नोट: मूल व्याख्या को स्पष्ट किया गया है)।"
  },
  {
    "question_en": "Which adjective is formed from the noun 'कल्पना' (imagination) by dropping the final 'आ' and adding the 'इक' suffix?",
    "question_hi": "'कल्पना' संज्ञा के अंतिम स्वर 'आ' का लोप करके और 'इक' प्रत्यय लगाकर कौन सा विशेषण शब्द बनता है?",
    "options_en": ["काल्पनिक (imaginary)", "कल्पनाशील (imaginative)", "कल्पनायुक्त (with imagination)", "कल्पित (imagined)"],
    "options_hi": ["काल्पनिक", "कल्पनाशील", "कल्पनायुक्त", "कल्पित"],
    "correct_option_index": 0,
    "explanation_en": "Adding the 'इक' suffix to 'कल्पना' forms the adjective 'काल्पनिक' (the initial vowel 'अ' changes to 'आ').",
    "explanation_hi": "'कल्पना' में 'इक' प्रत्यय लगने से 'काल्पनिक' विशेषण बनता है (आदि स्वर 'अ' का 'आ' हो जाता है)।"
  },
  {
    "question_en": "Which adjective is formed from the noun 'नीति' (policy/ethics) by adding the 'इक' suffix, causing the initial vowel 'ई' to change to 'ऐ'?",
    "question_hi": "'नीति' संज्ञा में 'इक' प्रत्यय लगने पर आदि स्वर 'ई' का 'ऐ' होने से कौन सा विशेषण बनता है?",
    "options_en": ["नीतिक", "नैतिक (ethical)", "नीतीक", "नीती"],
    "options_hi": ["नीतिक", "नैतिक", "नीतीक", "नीती"],
    "correct_option_index": 1,
    "explanation_en": "Adding the 'इक' suffix to 'नीति' forms 'नैतिक' (the initial vowel 'ई' transforms to 'ऐ').",
    "explanation_hi": "'नीति' से 'इक' प्रत्यय लगने पर 'नैतिक' (आदि स्वर 'ई' का 'ऐ' में रूपांतरण)।"
  },
  {
    "question_en": "Which adjective is formed by adding the 'इक' suffix to the noun 'इच्छा' (wish)?",
    "question_hi": "संज्ञा शब्द 'इच्छा' से 'इक' प्रत्यय लगने पर कौन सा विशेषण शब्द बनता है?",
    "options_en": ["ऐच्छिक (optional/voluntary)", "इच्छित (desired)", "इच्छुक (willing)", "इच्छाई"],
    "options_hi": ["ऐच्छिक", "इच्छित", "इच्छुक", "इच्छाई"],
    "correct_option_index": 0,
    "explanation_en": "Adding the 'इक' suffix to 'इच्छा' causes the initial 'इ' to change to 'ऐ', forming 'ऐच्छिक'.",
    "explanation_hi": "'इच्छा' में 'इक' प्रत्यय लगने से 'इ' का 'ऐ' होकर 'ऐच्छिक' बनता है।"
  },
  {
    "question_en": "What adjective is formed by adding the 'इक' suffix to the noun 'संस्कृति' (culture)?",
    "question_hi": "'संस्कृति' संज्ञा से 'इक' प्रत्यय लगाकर बनने वाला विशेषण क्या है?",
    "options_en": ["सांस्कृतिक (cultural)", "संस्कृतिक", "संस्कृतमय", "संस्कृतशाली"],
    "options_hi": ["सांस्कृतिक", "संस्कृतिक", "संस्कृतमय", "संस्कृतशाली"],
    "correct_option_index": 0,
    "explanation_en": "The adjective formed from 'संस्कृति' (or 'संस्कृत') is 'सांस्कृतिक' (cultural).",
    "explanation_hi": "'संस्कृति' (या 'संस्कृत') से 'सांस्कृतिक' विशेषण बनता है।"
  },
  {
    "question_en": "Which adjective is formed from the noun 'विजय' (victory) by adding the 'इत' suffix, causing the final 'य' to be dropped?",
    "question_hi": "संज्ञा शब्द 'विजय' में 'इत' प्रत्यय लगाकर कौन सा विशेषण बनता है, जिसमें अंतिम 'य' का लोप हो जाता है?",
    "options_en": ["विजयी (victorious)", "विजित (conquered)", "विजयन", "विजयशाली (glorious)"],
    "options_hi": ["विजयी", "विजित", "विजयन", "विजयशाली"],
    "correct_option_index": 1,
    "explanation_en": "When the 'इत' suffix is added to the noun 'विजय', the 'य' is dropped, forming the adjective 'विजित' (conquered).",
    "explanation_hi": "'विजय' संज्ञा में 'इत' प्रत्यय लगने पर 'य' का लोप होकर 'विजित' विशेषण बनता है।"
  },
  {
    "question_en": "What adjective is formed by adding the 'ईय' suffix to the noun 'भारत' (India)?",
    "question_hi": "'भारत' संज्ञा से 'ईय' प्रत्यय लगाकर बनने वाला विशेषण क्या है?",
    "options_en": ["भरत", "भारतीय (Indian)", "भारत", "भारित"],
    "options_hi": ["भरत", "भारतीय", "भारत", "भारित"],
    "correct_option_index": 1,
    "explanation_en": "Adding the 'ईय' suffix to 'भारत' forms the adjective 'भारतीय' (Indian).",
    "explanation_hi": "'भारत' में 'ईय' प्रत्यय लगने से 'भारतीय' विशेषण का निर्माण होता है।"
  },
  {
    "question_en": "Which adjective is formed by adding the 'वान' suffix to the noun 'गुण' (quality)?",
    "question_hi": "'गुण' संज्ञा में 'वान' प्रत्यय लगाकर बनने वाला विशेषण कौन सा है?",
    "options_en": ["गुणशील (virtuous)", "गुणवान (virtuous/talented)", "गुणी (virtuous/talented)", "गुणात्मक (qualitative)"],
    "options_hi": ["गुणशील", "गुणवान", "गुणी", "गुणात्मक"],
    "correct_option_index": 1,
    "explanation_en": "Adding the 'वान' suffix to 'गुण' forms the adjective 'गुणवान'.",
    "explanation_hi": "'गुण' में 'वान' प्रत्यय लगने से 'गुणवान' विशेषण बनता है।"
  },
  {
    "question_en": "What adjective is formed by adding the 'वी' suffix to the noun 'तपस्' (austerity)?",
    "question_hi": "'तपस्' संज्ञा से 'वी' प्रत्यय लगाकर बनने वाला विशेषण क्या है?",
    "options_en": ["तपस्वी (ascetic)", "तपस्या (austerity)", "तपी (ascetic)", "तपशील"],
    "options_hi": ["तपस्वी", "तपस्या", "तपी", "तपशील"],
    "correct_option_index": 0,
    "explanation_en": "Adding the 'वी' suffix to 'तपस्' forms the adjective 'तपस्वी' (ascetic).",
    "explanation_hi": "'तपस्' से 'वी' प्रत्यय लगाकर 'तपस्वी' विशेषण का निर्माण होता है।"
  },
  {
    "question_en": "Which adjective is formed by adding the 'शाली' suffix to the noun 'प्रतिभा' (talent)?",
    "question_hi": "'प्रतिभा' संज्ञा से 'शाली' प्रत्यय लगाकर बनने वाला विशेषण कौन सा है?",
    "options_en": ["प्रतिभावान (talented)", "प्रतिभाशाली (talented)", "प्रतिभावन (talented)", "प्रतिभाशील"],
    "options_hi": ["प्रतिभावान", "प्रतिभाशाली", "प्रतिभावान", "प्रतिभाशील"],
    "correct_option_index": 1,
    "explanation_en": "Adding the 'शाली' suffix to 'प्रतिभा' forms the adjective 'प्रतिभाशाली'.",
    "explanation_hi": "'प्रतिभा' में 'शाली' प्रत्यय लगने से 'प्रतिभाशाली' विशेषण बनता है।"
  },
  {
    "question_en": "What adjective is formed by adding the 'आलु' suffix to the noun 'दया' (mercy)?",
    "question_hi": "संज्ञा शब्द 'दया' से 'आलु' प्रत्यय लगाकर बनने वाला विशेषण क्या है?",
    "options_en": ["दयनीय (pitiable)", "दयामय (merciful)", "दयालु (merciful/kind)", "दयावान (merciful/kind)"],
    "options_hi": ["दयनीय", "दयामय", "दयालु", "दयावान"],
    "correct_option_index": 2,
    "explanation_en": "Adding the 'आलु' suffix to 'दया' forms the adjective 'दयालु'.",
    "explanation_hi": "'दया' में 'आलु' प्रत्यय लगने से 'दयालु' विशेषण बनता है।"
  },
  {
    "question_en": "Which adjective is formed by adding the 'निष्ठ' suffix to the noun 'कर्तव्य' (duty)?",
    "question_hi": "'कर्तव्य' संज्ञा से 'निष्ठ' प्रत्यय लगाकर बनने वाला विशेषण कौन सा है?",
    "options_en": ["कर्तव्यपरायण (dutiful)", "कर्तव्यबोध (sense of duty)", "कर्तव्यशील (dutiful)", "कर्तव्यनिष्ठ (devoted to duty)"],
    "options_hi": ["कर्तव्यपरायण", "कर्तव्यबोध", "कर्तव्यशील", "कर्तव्यनिष्ठ"],
    "correct_option_index": 3,
    "explanation_en": "Adding the 'निष्ठ' suffix to 'कर्तव्य' forms the adjective 'कर्तव्यनिष्ठ'.",
    "explanation_hi": "'कर्तव्य' में 'निष्ठ' प्रत्यय लगाकर 'कर्तव्यनिष्ठ' विशेषण बनता है।"
  },
  {
    "question_en": "What adjective is formed by adding the 'सा' suffix to the pronoun 'वह' (that/he/she)?",
    "question_hi": "'वह' सर्वनाम से 'सा' प्रत्यय लगाकर बनने वाला विशेषण क्या है?",
    "options_en": ["वह जैसा (like that)", "वैसा (like that/such)", "वह सा (that-like)", "वह का (of that)"],
    "options_hi": ["वह जैसा", "वैसा", "वह सा", "वह का"],
    "correct_option_index": 1,
    "explanation_en": "Adjectives are formed by adding 'जैसा' or 'सा' suffixes to pronouns, such as 'वैसा' from 'वह'.",
    "explanation_hi": "सर्वनाम शब्दों के साथ 'जैसा', 'सा' प्रत्यय लगाने से विशेषण बनते हैं, जैसे 'वह' से 'वैसा'।"
  },
  {
    "question_en": "What adjective is formed from the verb 'पढ़ना' (to read) by adding the 'आकू' suffix?",
    "question_hi": "'पढ़ना' क्रिया से 'आकू' प्रत्यय लगाकर बनने वाला विशेषण क्या है?",
    "options_en": ["पढ़ाऊ (teacherly)", "पढ़ाकू (studious/bookworm)", "पाठक (reader)", "पढ़ने वाला (one who reads)"],
    "options_hi": ["पढ़ाऊ", "पढ़ाकू", "पाठक", "पढ़ने वाला"],
    "correct_option_index": 1,
    "explanation_en": "By replacing the final 'ना' of the verb 'पढ़ना' with the 'आकू' suffix, the adjective 'पढ़ाकू' is formed.",
    "explanation_hi": "'पढ़ना' क्रिया के अंतिम 'ना' को हटाकर (और मूल 'अ' को 'आ' में बदलकर) 'आकू' प्रत्यय लगाने से 'पढ़ाकू' विशेषण बनता है।"
  },
  {
    "question_en": "What adjective is formed from the verb 'बनना' (to become/to be made) by adding the 'आवटी' suffix?",
    "question_hi": "'बनना' क्रिया से 'आवटी' प्रत्यय लगाकर बनने वाला विशेषण क्या है?",
    "options_en": ["बनावटी (artificial/fake)", "बनाया (made)", "बनाने वाला (one who makes)", "बनी (was made)"],
    "options_hi": ["बनावटी", "बनाया", "बनाने वाला", "बनी"],
    "correct_option_index": 0,
    "explanation_en": "By removing the final 'ना' from the verb 'बनना' and adding the 'आवटी' suffix, the adjective 'बनावटी' is formed.",
    "explanation_hi": "'बनना' क्रिया के अंतिम 'ना' को हटाकर 'आवटी' प्रत्यय लगाने से 'बनावटी' विशेषण बनता है।"
  },
  {
    "question_en": "Which adjective is formed from the verb 'भूलना' (to forget) by removing the final 'ना' and adding the 'अक्कड़' suffix?",
    "question_hi": "'भूलना' क्रिया के अंतिम 'ना' को हटाकर 'अक्कड़' प्रत्यय लगाने से कौन सा विशेषण बनता है?",
    "options_en": ["भुलैया (labyrinth)", "भुलाऊ (deceptive)", "भुलक्कड़ (forgetful)", "भूलनसार (forgetful)"],
    "options_hi": ["भुलैया", "भुलाऊ", "भुलक्कड़", "भूलनसार"],
    "correct_option_index": 2,
    "explanation_en": "The adjective 'भुलक्कड़' (forgetful) is formed from the verb 'भूलना' (to forget).",
    "explanation_hi": "'भूलना' क्रिया से 'भुलक्कड़' विशेषण बनता है।"
  },
  {
    "question_en": "What adjective is formed by adding the 'ई' suffix to the adverb (Avyay) 'बाहर' (outside)?",
    "question_hi": "'बाहर' (अव्यय) शब्द से 'ई' प्रत्यय लगाकर बनने वाला विशेषण क्या है?",
    "options_en": ["बाहर वाला (the outside one)", "बाहरक", "बाहरी (external/outer)", "बाह्य (external)"],
    "options_hi": ["बाहर वाला", "बाहरक", "बाहरी", "बाह्य"],
    "correct_option_index": 2,
    "explanation_en": "Adding the 'ई' suffix to the adverb 'बाहर' (outside) forms the adjective 'बाहरी' (external).",
    "explanation_hi": "'बाहर' अव्यय से 'ई' प्रत्यय लगाकर 'बाहरी' विशेषण बनता है।"
  },
  {
    "question_en": "When the adjective 'अगला' (next) is formed from the adverb 'आगे' (ahead) by adding 'ला', what does the shortening of the initial vowel 'आ' to 'अ' represent?",
    "question_hi": "'आगे' (अव्यय) शब्द से 'ला' प्रत्यय लगाकर बनने वाले विशेषण 'अगला' में, आदि स्वर 'आ' का 'अ' हो जाना क्या दर्शाता है?",
    "options_en": ["Elision of final vowel", "Lengthening of initial vowel", "Shortening of initial vowel (Hrasvikaran)", "Consonant Sandhi"],
    "options_hi": ["अंतिम स्वर का लोप", "आदि स्वर का दीर्घीकरण", "आदि स्वर का ह्रस्वीकरण", "व्यंजन संधि"],
    "correct_option_index": 2,
    "explanation_en": "In some adverbs, when the 'ला' suffix is added, the initial vowel is shortened (e.g., 'आ' becomes 'अ' in 'आगे' to 'अगला').",
    "explanation_hi": "कुछ अव्यय शब्दों में 'ला' प्रत्यय लगाने पर आदि स्वर ह्रस्व हो जाता है (जैसे 'आगे' से 'अगला' में 'आ' का 'अ')।"
  },
  {
    "question_en": "What is the abstract noun (Bhavvachak Sangya) formed from the adjective 'मीठा' (sweet)?",
    "question_hi": "'मीठा' विशेषण से निर्मित भाववाचक संज्ञा क्या है?",
    "options_en": ["मीठापन (sweetness)", "मिठास (sweetness)", "मधुरता (sweetness)", "मीठाई (sweet)"],
    "options_hi": ["मीठापन", "मिठास", "मधुरता", "मीठाई"],
    "correct_option_index": 1,
    "explanation_en": "The abstract noun 'मिठास' (sweetness) is formed from the adjective 'मीठा' (sweet).",
    "explanation_hi": "'मीठा' विशेषण से 'मिठास' भाववाचक संज्ञा बनती है।"
  },
  {
    "question_en": "What abstract noun is formed from the adjective 'स्वस्थ' (healthy) by adding the 'य' suffix, causing the initial 'अ' to become 'आ'?",
    "question_hi": "'स्वस्थ' विशेषण से 'य' प्रत्यय लगाकर बनने वाली भाववाचक संज्ञा क्या है, जिसमें आदि स्वर 'अ' का 'आ' हो जाता है?",
    "options_en": ["स्वस्थता (healthiness)", "स्वास्थ्य (health)", "स्वस्थ्य", "स्वस्था"],
    "options_hi": ["स्वस्थता", "स्वास्थ्य", "स्वस्थ्य", "स्वस्था"],
    "correct_option_index": 1,
    "explanation_en": "From 'स्वस्थ', 'स्वास्थ्य' is formed (when the 'य' suffix is added, the initial vowel 'अ' becomes 'आ' and the final consonant becomes half).",
    "explanation_hi": "'स्वस्थ' से 'स्वास्थ्य' (यहाँ 'य' प्रत्यय लगने पर आदि स्वर 'अ' का 'आ' तथा अंतिम वर्ण आधा हो जाता है)।"
  },
  {
    "question_en": "What abstract noun is formed from the adjective 'गरीब' (poor)?",
    "question_hi": "'गरीब' विशेषण से बनने वाली भाववाचक संज्ञा क्या है?",
    "options_en": ["गरीबता (poverty)", "गरीबी (poverty)", "दरिद्रता (poverty)", "गरीबपन (poverty)"],
    "options_hi": ["गरीबता", "गरीबी", "दरिद्रता", "गरीबपन"],
    "correct_option_index": 1,
    "explanation_en": "The abstract noun 'गरीबी' (poverty) is formed from the adjective 'गरीब' (poor).",
    "explanation_hi": "'गरीब' विशेषण से 'गरीबी' भाववाचक संज्ञा बनती है।"
  },
  {
    "question_en": "What abstract noun is formed from the adjective 'वीर' (brave) by adding the 'य' suffix?",
    "question_hi": "'वीर' विशेषण से 'य' प्रत्यय लगाकर बनने वाली भाववाचक संज्ञा क्या है?",
    "options_en": ["वीरत्व (bravery)", "वीर्य (virility/semen/potency)", "वीरता (bravery)", "धैर्य (patience)"],
    "options_hi": ["वीरत्व", "वीर्य", "वीरता", "धैर्य"],
    "correct_option_index": 1,
    "explanation_en": "Following the same rule where 'धीर' (patient) + 'य' becomes 'धैर्य' (patience), 'वीर' (brave) + 'य' becomes 'वीर्य' (virility/potency).",
    "explanation_hi": "'धीर' से 'य' लगाकर 'धैर्य' बनता है, उसी नियम पर 'वीर' से 'वीर्य' बनने की प्रक्रिया हो सकती है।"
  },
  {
    "question_en": "By adding the 'ई' suffix to adjectives like 'ईमानदार' (honest), 'चालाक' (clever), and 'गरीब' (poor), what type of noun is formed?",
    "question_hi": "'ईमानदार', 'चालाक', और 'गरीब' जैसे विशेषण शब्दों में 'ई' प्रत्यय लगाकर कौन सी संज्ञा बनाई जाती है?",
    "options_en": ["Common Noun (Jativachak Sangya)", "Abstract Noun (Bhavvachak Sangya)", "Material Noun (Dravyavachak Sangya)", "Proper Noun (Vyaktivachak Sangya)"],
    "options_hi": ["जातिवाचक संज्ञा", "भाववाचक संज्ञा", "द्रव्यवाचक संज्ञा", "व्यक्तिवाचक संज्ञा"],
    "correct_option_index": 1,
    "explanation_en": "From 'ईमानदार' (honest) comes 'ईमानदारी' (honesty), from 'चालाक' (clever) comes 'चालाकी' (cleverness), and from 'गरीब' (poor) comes 'गरीबी' (poverty) - all are abstract nouns.",
    "explanation_hi": "'ईमानदार' से ईमानदारी, 'चालाक' से चालाकी, और 'गरीब' से गरीबी (भाववाचक संज्ञाएँ) बनती हैं।"
  },
  {
    "question_en": "When an adjective comes after the 'Visheshya' (noun or pronoun), what type of adjective is it called?",
    "question_hi": "जब विशेषण, विशेष्य (संज्ञा या सर्वनाम) के बाद आता है, तो वह किस प्रकार का विशेषण कहलाता है?",
    "options_en": ["Attributive Adjective (Uddeshya Visheshan)", "Predicative Adjective (Vidheya Visheshan)", "Pravisheshan (Intensifier)", "Adjective-Visheshya"],
    "options_hi": ["उद्देश्य विशेषण", "विधेय विशेषण", "प्रविशेषण", "विशेषण-विशेष्य"],
    "correct_option_index": 1,
    "explanation_en": "When an adjective comes after the 'Visheshya' and (often) before the verb, it is called a Predicative Adjective (Vidheya Visheshan).",
    "explanation_hi": "विशेषण जब क्रिया से पहले और विशेष्य के बाद आता है, तो विधेय विशेषण कहलाता है।"
  },
  {
    "question_en": "With the exception of adjectives like 'दुबला' (thin), what change do other adjectives generally not undergo?",
    "question_hi": "'दुबला' विशेषण को छोड़कर अन्य विशेषणों में क्या विकार नहीं होता है?",
    "options_en": ["According to Gender", "According to Number", "According to Case", "No change"],
    "options_hi": ["लिंग के अनुसार", "वचन के अनुसार", "कारक के अनुसार", "कोई विकार नहीं"],
    "correct_option_index": 3,
    "explanation_en": "Adjectives ending in '-ā' (like 'छोटा', 'बड़ा') change according to the gender/number/case of the 'Visheshya', but other adjectives (except exceptions like 'दुबला') generally do not change.",
    "explanation_hi": "अकारांत विशेषण (जैसे 'छोटा', 'बड़ा') विशेष्य के लिंग-वचन-कारक के अनुसार बदलते हैं, लेकिन 'दुबला' जैसे अन्य विशेषणों को छोड़कर (आमतौर पर) कोई विकार नहीं होता है।"
  },
  {
    "question_en": "In 'निज देश' (one's own country) and 'पराया देश' (another's country), what types of adjectives are 'निज' and 'पराया'?",
    "question_hi": "'निज देश' और 'पराया देश' में 'निज' और 'पराया' किस प्रकार के विशेषण हैं?",
    "options_en": ["Personal (Purushvachak)", "Reflexive (Nijvachak)", "Pronominal Adjective (Sarvanamik Visheshan)", "Qualitative (Gunavachak)"],
    "options_hi": ["पुरुषवाचक", "निजवाचक", "सार्वनामिक विशेषण", "गुणवाचक"],
    "correct_option_index": 2,
    "explanation_en": "'निज' (one's own) and 'पराया' (other's) are also Pronominal Adjectives, as they are often used like adjectives.",
    "explanation_hi": "'निज' और 'पराया' भी सार्वनामिक विशेषण हैं, क्योंकि इनका प्रयोग बहुधा विशेषण के समान होता है।"
  },
  {
    "question_en": "What is the abstract noun formed by adding the 'आहट' suffix to the adjective 'कड़वा' (bitter)?",
    "question_hi": "'कड़वा' विशेषण से 'आहट' प्रत्यय लगाकर बनने वाली भाववाचक संज्ञा क्या है?",
    "options_en": ["कड़वाई (bitterness)", "कड़वापन (bitterness)", "कड़वाहट (bitterness)", "कड़वास (bitterness)"],
    "options_hi": ["कड़वाई", "कड़वापन", "कड़वाहट", "कड़वास"],
    "correct_option_index": 2,
    "explanation_en": "The abstract noun 'कड़वाहट' (bitterness) is formed from 'कड़वा' (bitter).",
    "explanation_hi": "'कड़वा' से 'कड़वाहट' भाववाचक संज्ञा बनती है।"
  },
  {
    "question_en": "Which of the following words is not originally an adjective (i.e., not derived from a noun or pronoun)?",
    "question_hi": "निम्नलिखित में से कौन सा शब्द मूल रूप से विशेषण नहीं है? (प्रश्न को स्पष्ट किया गया)",
    "options_en": ["अच्छा (good)", "कोमल (soft)", "सरल (simple)", "मूर्खता (foolishness)"],
    "options_hi": ["अच्छा", "कोमल", "सरल", "मूर्खता"],
    "correct_option_index": 3,
    "explanation_en": "'अच्छा' (good), 'कोमल' (soft), and 'सरल' (simple) are original adjectives. 'मूर्खता' (foolishness) is an abstract noun formed from the adjective 'मूर्ख' (foolish).",
    "explanation_hi": "'अच्छा', 'कोमल', 'सरल' मूल रूप से विशेषण हैं। 'मूर्खता' 'मूर्ख' विशेषण से बनी भाववाचक संज्ञा है।"
  },
  {
    "question_en": "Words like 'अनेक' (many), 'बहुत' (many/much), 'सब' (all) often imply the plural in which type of numeral adjective?",
    "question_hi": "'अनेक', 'बहुत', 'सब' आदि शब्द किस संख्यावाचक विशेषण में बहुधा बहुवचन का बोध कराते हैं?",
    "options_en": ["Definite Numeral (Nishchit Sankhyavachak)", "Indefinite Numeral (Anishchit Sankhyavachak)", "Multiplicative (Avrittivachak)", "Fractional (Apoornankbodhak)"],
    "options_hi": ["निश्चित संख्यावाचक", "अनिश्चित संख्यावाचक", "आवृत्तिवाचक", "अपूर्णांकबोधक"],
    "correct_option_index": 1,
    "explanation_en": "'बहुत' (many) and 'अनेक' (many) are Indefinite Numeral adjectives, and they often imply the plural (e.g., अनेक दुकानें - many shops, बहुत घर - many houses).",
    "explanation_hi": "'बहुत' और 'अनेक' अनिश्चित संख्यावाचक विशेषण हैं, और इनमें बहुधा बहुवचन का बोध होता है (जैसे: अनेक दुकानें, बहुत घर)।"
  },
  {
    "question_en": "If an adjective is formed by adding an 'ईय' suffix (like 'राष्ट्रीय' from 'राष्ट्र'), what type of Taddhit suffix is this called?",
    "question_hi": "यदि किसी शब्द के अंत में 'ईय' प्रत्यय लगाकर विशेषण बनता है, जैसे 'राष्ट्रीय' (राष्ट्र + ईय), तो यह किस प्रकार का तद्धित प्रत्यय कहलाता है?",
    "options_en": ["Abstract (Bhavvachak Taddhit)", "Kridanta Taddhit", "Place-related (Sthanvachak Taddhit)", "Relational (Sambandhvachak Taddhit)"],
    "options_hi": ["भाववाचक तद्धित", "कृदंत तद्धित", "स्थानवाचक तद्धित", "संबंधवाचक तद्धित"],
    "correct_option_index": 3,
    "explanation_en": "The 'ईय' suffix forms relational adjectives (Sambandhbodhak) like 'राष्ट्रीय' (national), 'क्षेत्रीय' (regional), 'भारतीय' (Indian).",
    "explanation_hi": "'ईय' प्रत्यय 'राष्ट्रीय', 'क्षेत्रीय', 'भारतीय' जैसे संबंधबोधक विशेषणों का निर्माण करते हैं।"
  },
  {
    "question_en": "The abstract noun 'सफेदी' (whiteness) is formed from which adjective?",
    "question_hi": "'सफेदी' (भाववाचक संज्ञा) किस विशेषण शब्द से बनी है?",
    "options_en": ["सफेद (white)", "सफेदा (white lead)", "सफेदन", "सफेदीपन"],
    "options_hi": ["सफेद", "सफेदा", "सफेदन", "सफेदीपन"],
    "correct_option_index": 0,
    "explanation_en": "The abstract noun 'सफेदी' (whiteness) is formed from the adjective 'सफेद' (white).",
    "explanation_hi": "'सफेद' विशेषण से 'सफेदी' भाववाचक संज्ञा बनती है।"
  },
  {
    "question_en": "In what sense is the word 'कितने' (how many) sometimes used as a numeral adjective?",
    "question_hi": "'कितने' शब्द का प्रयोग कभी-कभी संख्याबोधक विशेषण के रूप में किस अर्थ में होता है?",
    "options_en": ["In the sense of 'more' (ज्यादा)", "In the sense of 'less' (कम)", "In the sense of 'many' or 'several' (बहुत या कई)", "In the sense of 'one' (एक)"],
    "options_hi": ["'ज्यादा' के अर्थ में", "'कम' के अर्थ में", "'बहुत' या 'कई' के अर्थ में", "'एक' के अर्थ में"],
    "correct_option_index": 2,
    "explanation_en": "'कितने' is sometimes used in the sense of 'many' or 'several' (e.g., 'कितने ही ईश्वर को नहीं मानते' - 'Many do not believe in God').",
    "explanation_hi": "'कितने' का उपयोग कभी-कभी 'कई' के अर्थ में होता है (जैसे: कितने ही ईश्वर को नहीं मानते)।"
  },
  {
    "question_en": "Which adjective is formed by adding the 'य' suffix to the noun 'क्षमा' (forgiveness)?",
    "question_hi": "संज्ञा शब्द 'क्षमा' से 'य' प्रत्यय लगाकर कौन सा विशेषण बनता है?",
    "options_en": ["क्षमाशील (forgiving)", "क्षम्य (forgivable)", "क्षमावान (forgiving)", "क्षमाकर (forgiving)"],
    "options_hi": ["क्षमाशील", "क्षम्य", "क्षमावान", "क्षमाकर"],
    "correct_option_index": 1,
    "explanation_en": "When the 'य' suffix is added to the noun 'क्षमा', the final vowel is dropped, forming the adjective 'क्षम्य' (forgivable).",
    "explanation_hi": "'क्षमा' संज्ञा में 'य' प्रत्यय लगाने पर अंतिम स्वर का लोप होकर 'क्षम्य' विशेषण बनता है।"
  },
  {
    "question_en": "What is the abstract noun formed from the adjective 'ऊँचा' (high)?",
    "question_hi": "'ऊँचा' विशेषण से बनने वाली भाववाचक संज्ञा क्या है?",
    "options_en": ["ऊँची (high, fem.)", "ऊँचाई (height)", "ऊँचेपन (highness)", "ऊंचाईपन"],
    "options_hi": ["ऊँची", "ऊँचाई", "ऊँचेपन", "ऊंचाईपन"],
    "correct_option_index": 1,
    "explanation_en": "The abstract noun 'ऊँचाई' (height) is formed by adding the 'ई' suffix to the adjective 'ऊँचा' (high).",
    "explanation_hi": "'ऊँचा' विशेषण में 'ई' प्रत्यय लगाकर 'ऊँचाई' भाववाचक संज्ञा बनती है।"
  },
  {
    "question_en": "Which of the following words does NOT fall under the sub-type of adjectives describing 'Gun-Dosh' (merits-demerits)?",
    "question_hi": "निम्नलिखित में से कौन सा शब्द गुण-दोष बताने वाले विशेषण के अंतर्गत नहीं आता है?",
    "options_en": ["पवित्र (holy)", "भला (good)", "मोटा (fat/thick)", "दयालु (kind)"],
    "options_hi": ["पवित्र", "भला", "मोटा", "दयालु"],
    "correct_option_index": 2,
    "explanation_en": "'मोटा' (fat/thick) falls under 'आकार-प्रकार' (shape-size), whereas 'पवित्र' (holy), 'भला' (good), and 'दयालु' (kind - nature) fall under 'गुण-दोष' (merits-demerits).",
    "explanation_hi": "'मोटा' आकार-प्रकार के अंतर्गत आता है, जबकि पवित्र, भला, दयालु (स्वभाव) गुण-दोष के अंतर्गत आते हैं।"
  },
  {
    "question_en": "If the pronoun 'आप' (you) is used as 'आप जैसा' (like you), this falls under which word-formation category?",
    "question_hi": "यदि विशेषण शब्द 'आप' का प्रयोग 'आप जैसा' के रूप में किया जाता है, तो यह किस शब्द-भेद के अंतर्गत आता है?",
    "options_en": ["Adjective formation from Nouns", "Adjective formation from Verbs", "Adjective formation from Adverbs (Avyay)", "Adjective formation from Pronouns"],
    "options_hi": ["संज्ञा शब्दों से विशेषण निर्माण", "क्रिया शब्दों से विशेषण निर्माण", "अव्यय शब्दों से विशेषण निर्माण", "सर्वनाम शब्दों से विशेषण निर्माण"],
    "correct_option_index": 3,
    "explanation_en": "'आप जैसा' (like you) is an example of adjective formation from pronouns.",
    "explanation_hi": "'आप जैसा' सर्वनाम शब्दों से विशेषण निर्माण का उदाहरण है।"
  },
  {
    "question_en": "When the 'Visheshya' (qualified noun) of an adjective is omitted (e.g., 'बड़े-बड़े' - the big ones), what happens?",
    "question_hi": "वह स्थिति जब उपर्युक्त सर्वनाम, विशेषण बनकर आते हैं और विशेष्य का लोप हो जाता है (जैसे: बड़े-बड़े) तो क्या होता है?",
    "options_en": ["They are called adverbs.", "They are often used as nouns.", "They are called intensifiers (Pravisheshan).", "Their form is changed."],
    "options_hi": ["उन्हें क्रियाविशेषण कहते हैं।", "उनका प्रयोग प्रायः संज्ञा के समान होता है।", "उन्हें प्रविशेषण कहते हैं।", "उनका रूप परिवर्तित हो जाता है।"],
    "correct_option_index": 1,
    "explanation_en": "When the 'Visheshya' (qualified noun) of an adjective is omitted, the adjective itself is often used as a noun (e.g., 'बड़े-बड़े बड़ाई नहीं छोड़ते हैं' - 'The great ones do not stop boasting').",
    "explanation_hi": "जब विशेषणों के विशेष्यों का लोप होता है, तब उनका प्रयोग प्रायः संज्ञा के समान होता है (जैसे: बड़े-बड़े बड़ाई नहीं छोड़ते हैं)।"
  },
  {
    "question_en": "When the word 'कुछ' (some) is used as a quantitative adjective, what does it indicate?",
    "question_hi": "'कुछ' शब्द का प्रयोग परिमाणवाचक विशेषण में होता है, तो वह किन चीजों का बोध कराता है?",
    "options_en": ["Number", "Measure, weight, or amount", "Only indefiniteness", "Only quality"],
    "options_hi": ["संख्या", "नाप, तौल या माप", "केवल अनिश्चय", "केवल गुण"],
    "correct_option_index": 1,
    "explanation_en": "Quantitative adjectives (Parimanavachak Visheshan) are those that indicate the measure, weight, or amount of an object, substance, or place (e.g., 'कुछ फल' - some fruits).",
    "explanation_hi": "परिमाणवाचक विशेषण वे हैं जो किसी वस्तु, पदार्थ या जगह की नाप, तौल या माप का बोध कराते हैं (जैसे: कुछ फल)।"
  }
];

export default visheshanQuestions;
