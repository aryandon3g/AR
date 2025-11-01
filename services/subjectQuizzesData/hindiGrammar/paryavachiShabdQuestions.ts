import type { QuizQuestion } from '../../../types';

/*
INSTRUCTIONS TO ADD QUESTIONS:

You can use the following prompt with an AI (like Gemini) to generate questions in the correct format.
Replace the [TOPIC] and [NUMBER_OF_QUESTIONS] placeholders with your desired values. For your request, use [Paryayvachi/Samanarthi Shabd (Synonyms) in Hindi Grammar] and [100].

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
    "question_en": "What is the synonym for 'Agni' (Fire)?",
    "question_hi": "अग्नि का पर्यायवाची शब्द क्या है?",
    "options_en": ["Vyom (Sky)", "Vaji (Horse)", "Haya (Horse)", "Pavak (Fire)"],
    "options_hi": ["व्योम", "वाजि", "हय", "पावक"],
    "correct_option_index": 3,
    "explanation_en": "The synonym for 'Agni' (Fire) is 'Pavak'.",
    "explanation_hi": "'अग्नि' का पर्यायवाची 'पावक' होता है।"
}

====================================================================================================

Once you have the generated array, paste it below, replacing the empty array [].
*/

const synonymQuestions: QuizQuestion[] = [
  {
    "question_en": "What is the synonym for 'Agni' (Fire)?",
    "question_hi": "अग्नि का पर्यायवाची शब्द क्या है?",
    "options_en": ["Vyom (Sky)", "Vaji (Horse)", "Haya (Horse)", "Pavak (Fire)"],
    "options_hi": ["व्योम", "वाजि", "हय", "पावक"],
    "correct_option_index": 3,
    "explanation_en": "The synonym for 'Agni' (Fire) is 'Pavak'.",
    "explanation_hi": "'अग्नि' का पर्यायवाची 'पावक' होता है।"
  },
  {
    "question_en": "What is the synonym for 'Kamal' (Lotus)?",
    "question_hi": "कमल का पर्यायवाची शब्द क्या है?",
    "options_en": ["Rashmi (Ray)", "Saroj (Lotus)", "Pushpadhanva (Cupid)", "Bhanu (Sun)"],
    "options_hi": ["रश्मि", "सरोज", "पुष्पधन्वा", "भानु"],
    "correct_option_index": 1,
    "explanation_en": "The synonym for 'Kamal' (Lotus) is 'Saroj'.",
    "explanation_hi": "'कमल' का पर्यायवाची 'सरोज' है।"
  },
  {
    "question_en": "Which is the synonym for 'Vachal' (Talkative)?",
    "question_hi": "वाचाल का समानार्थी शब्द कौन-सा है?",
    "options_en": ["Gunvan (Virtuous)", "Vachaspati (Lord of Speech)", "Vagish (Lord of Speech/Eloquent)", "Anubhavi (Experienced)"],
    "options_hi": ["गुणवान", "वाचस्पति", "वागीश", "अनुभवी"],
    "correct_option_index": 2,
    "explanation_en": "For 'one who talks a lot' (Vachal), the words 'Vagish' or 'Vachaspati' are used.",
    "explanation_hi": "'जो बहुत बोलता हो' (वाचाल) के लिए 'वागीश' या 'वाचस्पति' शब्द प्रयुक्त होते हैं।"
  },
  {
    "question_en": "What is the synonym for 'Durjeya' (Difficult to conquer)?",
    "question_hi": "दुर्जेय (जिसे जीतना कठिन हो) का समानार्थी शब्द क्या है?",
    "options_en": ["Dushkar (Difficult/Arduous)", "Durbal (Weak)", "Dushan (Fault/Pollution)", "Dushkarmi (Evildoer)"],
    "options_hi": ["दुष्कर", "दुर्बल", "दूषण", "दुष्कर्मी"],
    "correct_option_index": 0,
    "explanation_en": "'Dushkar' (difficult/arduous) in the sense of difficulty, similar to 'Durgam' (difficult to traverse).",
    "explanation_hi": "'जिसे दूर करना कठिन हो' (दुर्गम) से मिलते-जुलते कठिनाई के अर्थ में 'दुष्कर'।"
  },
  {
    "question_en": "What is a synonym for 'one with a sharp intellect'?",
    "question_hi": "तीव्र बुद्धि वाले के लिए एक पर्यायवाची शब्द क्या है?",
    "options_en": ["Sahṛday (Kind-hearted)", "Vishvast (Trustworthy)", "Ājñākārī (Obedient)", "Kushagra Buddhi (Sharp-witted)"],
    "options_hi": ["सहृदय", "विश्वस्त", "आज्ञाकारी", "कुशाग्र बुद्धि"],
    "correct_option_index": 3,
    "explanation_en": "'Kushagra Buddhi' is a word for 'one with a sharp intellect'.",
    "explanation_hi": "'तीव्र बुद्धि वाला' के लिए 'कुशाग्र बुद्धि' एक शब्द है।"
  },
  {
    "question_en": "What is the Tadbhava form (synonym) of the Sanskrit word 'Adya'?",
    "question_hi": "अद्य (संस्कृत) शब्द का तद्भव रूप (समानार्थी) क्या है?",
    "options_en": ["Kal (Tomorrow/Yesterday)", "Parson (Day after tomorrow/before yesterday)", "Sadā (Always)", "Āj (Today)"],
    "options_hi": ["कल", "परसों", "सदा", "आज"],
    "correct_option_index": 3,
    "explanation_en": "The word 'Āj' (Today) is derived as a Tadbhava form from the Sanskrit 'Adya' [Derived from common grammatical knowledge related to 'kal', 'parson'].",
    "explanation_hi": "'आज' शब्द संस्कृत के 'अद्य' से तद्भव रूप में आया है (स्रोत में अप्रत्यक्ष रूप से) [Not in sources, but derived from common grammatical knowledge related to 'कल', 'परसों']।"
  },
  {
    "question_en": "What is the closest synonym for 'Kartṛtva' (the sense of doing an action/agency)?",
    "question_hi": "कर्तृत्व (क्रिया को करने का भाव) का निकटतम समानार्थी क्या है?",
    "options_en": ["Result", "Means/Instrument", "Power of action (Kriyashakti)", "Relation"],
    "options_hi": ["परिणाम", "साधन", "क्रियाशक्ति", "संबंध"],
    "correct_option_index": 2,
    "explanation_en": "'Kartṛtva' represents the sense of the 'Kartā' (doer/agent).",
    "explanation_hi": "कर्तृत्व 'कर्ता' के भाव को दर्शाता है।"
  },
  {
    "question_en": "What is the synonym for 'Utpīḍan' (Persecution), used in social contexts?",
    "question_hi": "उत्पीड़न का समानार्थी शब्द क्या है, जो सामाजिक संदर्भों में प्रयुक्त होता है?",
    "options_en": ["Migration", "Atrocities/Tyranny (Atyachar)", "Refugee", "Organization"],
    "options_hi": ["प्रवास", "अत्याचार", "शरणार्थी", "संगठन"],
    "correct_option_index": 1,
    "explanation_en": "Utpīḍan (Persecution) leads to displacement due to reasons like war, famine, etc.",
    "explanation_hi": "उत्पीड़न (Persecution) युद्ध, अकाल आदि के कारणों से विस्थापित होने को जन्म देता है।"
  },
  {
    "question_en": "Which is the synonym for 'Vividhatā' (Diversity)?",
    "question_hi": "विविधता का समानार्थी शब्द कौन-सा है?",
    "options_en": ["Uniformity", "Plurality/Variety (Bahulta)", "Narrowness", "Monotony"],
    "options_hi": ["एकरूपता", "बहुलता", "संकीर्णता", "नीरसता"],
    "correct_option_index": 1,
    "explanation_en": "The synonym for 'Vividhatā' (diverse) is 'Bahultā' or 'Vibhinnatā' (variety/difference).",
    "explanation_hi": "'विविधता' (diverse) का समानार्थी 'बहुलता' या 'विभिन्नता' है।"
  },
  {
    "question_en": "What is the synonym for 'Rājasva' (Revenue)?",
    "question_hi": "राजस्व (Revenue) का समानार्थी शब्द क्या है?",
    "options_en": ["Ticket", "Honorarium", "Treasury/Exchequer (Rajkosh)", "Bank statement"],
    "options_hi": ["टिकिट", "मानदेय", "राजकोष", "बैंक-पत्रक"],
    "correct_option_index": 2,
    "explanation_en": "The Hindi equivalent for 'Revenue' is 'Rājasva'. 'Rājkoṣīya' (fiscal) is related to it.",
    "explanation_hi": "'रेवेन्यू' का हिंदी समकक्ष 'राजस्व' है। 'राजकोषीय' इससे संबंधित है।"
  },
  {
    "question_en": "What is the synonym for 'Atikramaṇ' (Transgression/Encroachment)?",
    "question_hi": "अतिक्रमण (Transgression) का समानार्थी शब्द क्या है?",
    "options_en": ["Security", "Violation (Ullanghan)", "Prohibition", "Regulation"],
    "options_hi": ["सुरक्षा", "उल्लंघन", "निषेध", "नियमन"],
    "correct_option_index": 1,
    "explanation_en": "'Atikramaṇ' means crossing limits or violation.",
    "explanation_hi": "अतिक्रमण का अर्थ सीमा को लाँघना या उल्लंघन करना है।"
  },
  {
    "question_en": "What is a synonym for 'Sankaṭ' (Crisis)?",
    "question_hi": "संकट (Crisis) के लिए एक पर्यायवाची शब्द क्या है?",
    "options_en": ["Peace", "Calamity/Disaster (Vipada)", "Enthusiasm", "Happiness"],
    "options_hi": ["शांति", "विपदा", "उत्साह", "सुख"],
    "correct_option_index": 1,
    "explanation_en": "A word indicating a state of crisis.",
    "explanation_hi": "संकट की स्थिति को दर्शाने वाला शब्द।"
  },
  {
    "question_en": "What is the closest synonym for 'Abhivyakti' (Expression)?",
    "question_hi": "अभिव्यक्ति का निकटतम समानार्थी क्या है?",
    "options_en": ["Conference", "Transmission", "Manifestation/Disclosure (Prakatan)", "Residence"],
    "options_hi": ["सम्मेलन", "संचरण", "प्रकटन", "निवास"],
    "correct_option_index": 2,
    "explanation_en": "'Abhivyakti' (Expression) means to manifest or reveal.",
    "explanation_hi": "अभिव्यक्ति (Expression) का अर्थ है प्रकट करना।"
  },
  {
    "question_en": "What is the synonym for 'Sharaṇārthī' (Refugee)?",
    "question_hi": "शरणार्थी (Refugee) का समानार्थी क्या है?",
    "options_en": ["Migrant", "Displaced (Visthāpit)", "Citizen", "Resident"],
    "options_hi": ["प्रवासी", "विस्थापित", "नागरिक", "निवासी"],
    "correct_option_index": 1,
    "explanation_en": "Refugees are displaced due to war or persecution.",
    "explanation_hi": "शरणार्थी युद्ध या उत्पीड़न के कारण विस्थापित होते हैं।"
  },
  {
    "question_en": "What is the synonym for 'Avikārī' word (Indeclinable)?",
    "question_hi": "अविकारी शब्द का पर्यायवाची क्या है?",
    "options_en": ["Vikārī (Declinable)", "Kriyā (Verb)", "Sangyā (Noun)", "Avyay (Indeclinable)"],
    "options_hi": ["विकारी", "क्रिया", "संज्ञा", "अव्यय"],
    "correct_option_index": 3,
    "explanation_en": "Avikārī words are also called Avyay.",
    "explanation_hi": "अविकारी शब्दों को अव्यय भी कहते हैं।"
  },
  {
    "question_en": "What is the synonym for 'Punarāvalokan' (Review)?",
    "question_hi": "पुनरावलोकन का समानार्थी शब्द क्या है?",
    "options_en": ["Recombination", "Review/Critique (Samīkṣā)", "Re-editing", "Reorganization"],
    "options_hi": ["पुनर्संयोजन", "समीक्षा", "पुनर्संपादन", "पुनर्गठन"],
    "correct_option_index": 1,
    "explanation_en": "'Punarāvalokan' (Review) means 'Samīkṣā'.",
    "explanation_hi": "पुनरावलोकन (Review) का अर्थ है समीक्षा।"
  },
  {
    "question_en": "What is the correct synonym for 'Ājīvan' (Lifelong)?",
    "question_hi": "आजीवन (Ajeevan) का सही समानार्थी क्या है?",
    "options_en": ["Ādyopānt (From beginning to end)", "Yāvatjīvan (Throughout life)", "Anādi (Without beginning)", "Yugānt (End of an era)"],
    "options_hi": ["आद्योपांत", "यावत्जीवन", "अनादि", "युगांत"],
    "correct_option_index": 1,
    "explanation_en": "'From beginning to end' or 'throughout life' (Ājīvan).",
    "explanation_hi": "'आदि से लेकर अंत तक' या 'पूरे जीवन भर' (आजीवन)।"
  },
  {
    "question_en": "What is the synonym for 'Nirādar' (Disrespect)?",
    "question_hi": "निरादर का समानार्थी शब्द क्या है?",
    "options_en": ["Respect", "Contempt/Scorn (Tiraskār)", "Respect (Ādar)", "Favor"],
    "options_hi": ["सम्मान", "तिरस्कार", "आदर", "उपकार"],
    "correct_option_index": 1,
    "explanation_en": "The feeling of 'Nirādar' (Disrespect) is Tiraskār.",
    "explanation_hi": "निरादर (Disrespect) का भाव तिरस्कार है।"
  },
  {
    "question_en": "What is the synonym for 'Āshray' (Shelter)?",
    "question_hi": "आश्रय का पर्यायवाची क्या है?",
    "options_en": ["Place/Abode (Ṭhikānā)", "Contempt", "Uncontrolled", "Without shelter"],
    "options_hi": ["ठिकाना", "तिरस्कार", "निरंकुश", "अनाश्रित"],
    "correct_option_index": 0,
    "explanation_en": "Āshray/Nivās (Shelter/Residence).",
    "explanation_hi": "आश्रय/निवास।"
  },
  {
    "question_en": "What is the correct synonym for 'Dakṣa' (Adept/Skilled)?",
    "question_hi": "दक्ष (Adept) के लिए सही समानार्थी क्या है?",
    "options_en": ["Simple", "Proficient (Nipuṇ)", "Strange", "Ordinary"],
    "options_hi": ["सरल", "निपुण", "विचित्र", "साधारण"],
    "correct_option_index": 1,
    "explanation_en": "Dakṣa or Pravīṇ (Adept or Proficient).",
    "explanation_hi": "दक्ष या प्रवीण।"
  },
  {
    "question_en": "What word can be used for a dense forest?",
    "question_hi": "घने जंगल के लिए प्रयुक्त शब्द क्या हो सकता है?",
    "options_en": ["Sparse (Viral)", "Dense (Saghan)", "Dry (Shuṣk)", "Mangrove"],
    "options_hi": ["विरल", "सघन", "शुष्क", "मैंग्रोव"],
    "correct_option_index": 1,
    "explanation_en": "Saghan (Density).",
    "explanation_hi": "सघन (घनत्व)।"
  },
  {
    "question_en": "What is the synonym for 'Kalpit' (Fictitious)?",
    "question_hi": "कल्पित (Fictitious) का समानार्थी क्या है?",
    "options_en": ["Concocted/Imaginary (Managaḍhant)", "Accused", "True", "Dedicated"],
    "options_hi": ["मनगढ़ंत", "आरोपित", "सत्य", "समर्पित"],
    "correct_option_index": 0,
    "explanation_en": "The Hindi equivalent for 'Fictitious' is 'Kalpit' (Managaḍhant).",
    "explanation_hi": "'फिक्शियस' का हिंदी समकक्ष 'कल्पित' (मनगढ़ंत) है।"
  },
  {
    "question_en": "What is the synonym for 'Niḥshulk' (Free of charge)?",
    "question_hi": "निःशुल्क (Free) का समानार्थी शब्द क्या है?",
    "options_en": ["With charge", "Free (Muft)", "Compulsory", "Independent"],
    "options_hi": ["सशुल्क", "मुफ्त", "अनिवार्य", "स्वतंत्र"],
    "correct_option_index": 1,
    "explanation_en": "Niḥshulk (Free of charge).",
    "explanation_hi": "निःशुल्क।"
  },
  {
    "question_en": "What is the synonym for 'Abhinandan' (Welcome/Greeting)?",
    "question_hi": "अभिनंदन (Abhinandan) का समानार्थी क्या है?",
    "options_en": ["Namaste", "Greeting (Abhivādan)", "Welcome (Svāgat)", "Bowing (Naman)"],
    "options_hi": ["नमस्ते", "अभिवादन", "स्वागत", "नमन"],
    "correct_option_index": 2,
    "explanation_en": "Abhinandan (Welcome).",
    "explanation_hi": "अभिनंदन।"
  },
  {
    "question_en": "Which could be the opposite word for 'Sanyam' (Self-restraint)?",
    "question_hi": "संयम (Self-restraint) का विपरीत शब्द कौन सा हो सकता है?",
    "options_en": ["Contentment", "Restraint", "Lack of restraint (Asanyam)", "Complete"],
    "options_hi": ["संतोष", "संयम", "असंयम", "पूर्ण"],
    "correct_option_index": 2,
    "explanation_en": "The sense of restraint (indirectly).",
    "explanation_hi": "संयम का भाव (अप्रत्यक्ष रूप से)।"
  },
  {
    "question_en": "What is the synonym for 'Tatva' (Element/Essence)?",
    "question_hi": "तत्व (Tatva) का पर्यायवाची क्या है?",
    "options_en": ["Principle", "Essence (Sār)", "Individual", "Community"],
    "options_hi": ["सिद्धांत", "सार", "व्यष्टि", "समुदाय"],
    "correct_option_index": 1,
    "explanation_en": "Tatva (Essentials/Essence).",
    "explanation_hi": "तत्त्व (Essentials/Essence)।"
  },
  {
    "question_en": "What is the synonym for 'Vyay' (Expenditure)?",
    "question_hi": "व्यय (Vyay) का समानार्थी शब्द क्या है?",
    "options_en": ["Income", "Expense (Kharch)", "Saving", "Profit"],
    "options_hi": ["आय", "खर्च", "संचय", "लाभ"],
    "correct_option_index": 1,
    "explanation_en": "Vyay (Spending/Expenditure).",
    "explanation_hi": "व्यय (Spending/Expenditure)।"
  },
  {
    "question_en": "What is the synonym for 'Āshrit' (Dependent)?",
    "question_hi": "आश्रित (Dependent) का समानार्थी क्या है?",
    "options_en": ["Reliant (Nirbhar)", "Independent", "Master", "Defeated"],
    "options_hi": ["निर्भर", "स्वतंत्र", "स्वामी", "पराजित"],
    "correct_option_index": 0,
    "explanation_en": "Nirbhar (Dependent/Reliant).",
    "explanation_hi": "निर्भर (Dependent/Reliant)।"
  },
  {
    "question_en": "What is the synonym for 'Sanvidā' (Contract)?",
    "question_hi": "संविदा (Contract) का पर्यायवाची शब्द क्या है?",
    "options_en": ["Law", "Agreement/Contract (Anubandh)", "Regulation", "Right"],
    "options_hi": ["कानून", "अनुबंध", "नियमन", "अधिकार"],
    "correct_option_index": 1,
    "explanation_en": "Sāmājik Anubandh (Social Agreement/Contract).",
    "explanation_hi": "सामाजिक अनुबंध (Agreement/Contract)।"
  },
  {
    "question_en": "What is the synonym for 'Viyog' (Separation)?",
    "question_hi": "वियोग (Separation) का समानार्थी क्या है?",
    "options_en": ["Union", "Separation/Estrangement (Algāv)", "Distance", "Attraction"],
    "options_hi": ["संयोग", "अलगाव", "दूरी", "आकर्षण"],
    "correct_option_index": 1,
    "explanation_en": "Viyog (Separation) (Apadan context - separation).",
    "explanation_hi": "वियोग (Apadan context)।"
  },
  {
    "question_en": "What is the synonym for 'Sulabh' (Easily available/Accessible)?",
    "question_hi": "सुलभ (Easily available) का समानार्थी क्या है?",
    "options_en": ["Inaccessible", "Easy/Simple (Sahaj)", "Simple (Saral)", "Difficult"],
    "options_hi": ["दुर्गम", "सहज", "सरल", "दुष्कर"],
    "correct_option_index": 2,
    "explanation_en": "Sulabh (Accessible). [Saral is a closer synonym here than Sahaj].",
    "explanation_hi": "सुलभ।"
  },
  {
    "question_en": "What is the synonym for 'Atyadhik' (Excessive)?",
    "question_hi": "अत्यधिक (Excessive) का समानार्थी क्या है?",
    "options_en": ["Little", "Less", "Extreme/Very (Ati)", "Sufficient"],
    "options_hi": ["थोड़ा", "न्यून", "अति", "पर्याप्त"],
    "correct_option_index": 2,
    "explanation_en": "Atyadhik (Too much/Extremely).",
    "explanation_hi": "अत्यधिक (Too much/Extremely)।"
  },
  {
    "question_en": "What is the synonym for 'Sampūrṇa' (Complete/Whole)?",
    "question_hi": "संपूर्ण का समानार्थी क्या है?",
    "options_en": ["Part", "Entire/Whole (Samagra)", "Incomplete", "Limited"],
    "options_hi": ["अंश", "समग्र", "अधूरा", "सीमित"],
    "correct_option_index": 1,
    "explanation_en": "Sampūrṇa (Complete/Total).",
    "explanation_hi": "संपूर्ण (Complete/Total)।"
  },
  {
    "question_en": "What is the synonym for 'Santuṣṭ' (Satisfied)?",
    "question_hi": "संतुष्ट का पर्यायवाची शब्द क्या है?",
    "options_en": ["Dissatisfied", "Happy/Pleased (Prasanna)", "Sad", "Certain"],
    "options_hi": ["असंतुष्ट", "प्रसन्न", "दुःखी", "निश्चित"],
    "correct_option_index": 1,
    "explanation_en": "'Santuṣṭi' (Satisfied/Happy).",
    "explanation_hi": "'संतुष्टि' (Satisfied/Happy)।"
  },
  {
    "question_en": "What is the synonym for 'Sankalp' (Resolve/Resolution)?",
    "question_hi": "संकल्प (Resolve) का पर्यायवाची क्या है?",
    "options_en": ["Thought", "Determination (Nishchay)", "Doubt", "Illusion"],
    "options_hi": ["विचार", "निश्चय", "संशय", "भ्रम"],
    "correct_option_index": 1,
    "explanation_en": "Sankalp (Determination/Resolution).",
    "explanation_hi": "संकल्प (Determination/Resolution)।"
  },
  {
    "question_en": "What is the synonym for 'Vidyamān' (Existing/Present)?",
    "question_hi": "विद्यमान का समानार्थी क्या है?",
    "options_en": ["Absent", "Current", "Present/Available (Maujūd)", "Zero"],
    "options_hi": ["अनुपस्थित", "वर्तमान", "मौजूद", "शून्य"],
    "correct_option_index": 2,
    "explanation_en": "Vidyamān (Existing/Present).",
    "explanation_hi": "विद्यमान (Existing/Present)।"
  },
  {
    "question_en": "What is the synonym for 'Parivartanshīl' (Changeable)?",
    "question_hi": "परिवर्तनशील का पर्यायवाची क्या है?",
    "options_en": ["Stable", "Transformed (Rūpāntarit)", "Certain", "Indeclinable (Avikārī)"],
    "options_hi": ["स्थिर", "रूपांतरित", "निश्चित", "अविकारी"],
    "correct_option_index": 1,
    "explanation_en": "Parivartanshīl or Rūpāntarit (Changing/Transformed).",
    "explanation_hi": "परिवर्तनशील या रूपांतरित (Changing/Transformed)।"
  },
  {
    "question_en": "What is the synonym for 'Vyāpti' (Extent/Scope)?",
    "question_hi": "व्याप्ति का समानार्थी क्या है?",
    "options_en": ["Contraction", "Expansion/Extent (Vistār)", "Limit", "Certainty"],
    "options_hi": ["संकुचन", "विस्तार", "सीमा", "निश्चितता"],
    "correct_option_index": 1,
    "explanation_en": "Vyāpti (Extent/Scope).",
    "explanation_hi": "व्याप्ति (Extent/Scope)।"
  },
  {
    "question_en": "What is the synonym for 'Kṣati' (Damage/Loss)?",
    "question_hi": "क्षति (Damage) का पर्यायवाची क्या है?",
    "options_en": ["Profit", "Loss/Harm (Hāni)", "Security", "Increase"],
    "options_hi": ["लाभ", "हानि", "सुरक्षा", "वृद्धि"],
    "correct_option_index": 1,
    "explanation_en": "Kṣati (Loss/Harm).",
    "explanation_hi": "क्षति (Loss/Harm)।"
  },
  {
    "question_en": "What is the synonym for 'Nirādhār' (Baseless/Unsupported)?",
    "question_hi": "निराधार (Baseless) का समानार्थी क्या है?",
    "options_en": ["Baseless (Ādhārhīn)", "Supported", "Unproven", "Without shelter (Nirāshray)"],
    "options_hi": ["आधारहीन", "सआधार", "अप्रमाणित", "निराश्रय"],
    "correct_option_index": 3,
    "explanation_en": "Nirādhār (Without support). [Ādhārhīn is also a synonym, but Nirāshray fits the 'without support' nuance].",
    "explanation_hi": "निराधार (Without support)।"
  },
  {
    "question_en": "What is the synonym for 'Nirīkṣak' (Inspector/Supervisor)?",
    "question_hi": "निरीक्षक का समानार्थी क्या है?",
    "options_en": ["Manager", "Supervisor (Paryavekṣak)", "Assistant", "Employee"],
    "options_hi": ["प्रबंधक", "पर्यवेक्षक", "सहायक", "कर्मचारी"],
    "correct_option_index": 1,
    "explanation_en": "Nirīkṣak (Supervisor/Inspector).",
    "explanation_hi": "निरीक्षक (Supervisor/Inspector)।"
  },
  {
    "question_en": "What is the synonym for 'Punarukti' (Repetition)?",
    "question_hi": "पुनरुक्ति (Repetition) का समानार्थी क्या है?",
    "options_en": ["Frequency (Āvṛtti)", "Repetition/Repeating (Dohrāav)", "Combination", "Transformation"],
    "options_hi": ["आवृत्ति", "दोहराव", "संयोजन", "रूपांतरण"],
    "correct_option_index": 1,
    "explanation_en": "Punarukti (Repetition/Duplication).",
    "explanation_hi": "पुनरुक्ति (Repetition/Duplication)।"
  },
  {
    "question_en": "What is the synonym for 'Yatna' (Effort)?",
    "question_hi": "यत्न (Yatna) का समानार्थी क्या है?",
    "options_en": ["Rest", "Effort/Attempt (Prayās)", "Success", "Defeat"],
    "options_hi": ["विश्राम", "प्रयास", "सफलता", "हार"],
    "correct_option_index": 1,
    "explanation_en": "Yatna (Effort/Attempt).",
    "explanation_hi": "यत्न (Effort/Attempt)।"
  },
  {
    "question_en": "What is the synonym for 'Svatantratā' (Freedom)?",
    "question_hi": "स्वतंत्रता का पर्यायवाची क्या है?",
    "options_en": ["Bondage", "Liberation (Mukti)", "Control", "Slave"],
    "options_hi": ["बंधन", "मुक्ति", "नियंत्रण", "गुलाम"],
    "correct_option_index": 1,
    "explanation_en": "Svatantratā (Freedom/Liberation).",
    "explanation_hi": "स्वतंत्रता।"
  },
  {
    "question_en": "What is the synonym for the word 'Nishīth'?",
    "question_hi": "निशीथ (Nishith) शब्द का समानार्थी क्या है?",
    "options_en": ["Day", "Midnight (Ardharātri)", "Morning", "Evening"],
    "options_hi": ["दिन", "अर्धरात्रि", "सुबह", "संध्या"],
    "correct_option_index": 1,
    "explanation_en": "The meaning of 'Nishīth' is midnight or ardharātri [Non-source standard meaning].",
    "explanation_hi": "'निशीथ' का अर्थ मध्यरात्रि या अर्धरात्रि है [Non-source standard meaning]।"
  },
  {
    "question_en": "What is the idiomatic synonym for 'Vismay' (Astonishment)?",
    "question_hi": "विस्मय (Astonishment) का समानार्थी मुहावरे के रूप में क्या है?",
    "options_en": ["Jumping for joy (Balliyon uchhalna)", "Celebrating (Ghee ke diye jalana)", "Biting finger under teeth (Dānton tale ungli dabāna)", "Annoying someone (Nāk mein dam karna)"],
    "options_hi": ["बल्लियों उछलना", "घी के दीये जलाना", "दाँतों तले उंगली दबाना", "नाक में दम करना"],
    "correct_option_index": 2,
    "explanation_en": "To be astonished (Āshcharya karna).",
    "explanation_hi": "आश्चर्य करना।"
  },
  {
    "question_en": "What is the synonym for 'Shram' (Labour)?",
    "question_hi": "श्रम (Labour) का पर्यायवाची क्या है?",
    "options_en": ["Rest", "Hard work (Mehnat)", "Knowledge", "Wealth"],
    "options_hi": ["विश्राम", "मेहनत", "ज्ञान", "धन"],
    "correct_option_index": 1,
    "explanation_en": "Shram (Toil/Hard work).",
    "explanation_hi": "श्रम (Toil/Hard work)।"
  },
  {
    "question_en": "What is the synonym for 'Duḥkhī' (Sad), used in the context of pain/suffering?",
    "question_hi": "दुःखी का समानार्थी क्या है, जो पीड़ा के संदर्भ में प्रयुक्त हो?",
    "options_en": ["Happy", "Afflicted/Pained (Kaṣṭit)", "Calm", "Cheerful"],
    "options_hi": ["सुखी", "कष्टित", "शांत", "हंसमुख"],
    "correct_option_index": 1,
    "explanation_en": "Duḥkhī (Sad/Afflicted).",
    "explanation_hi": "दुःखी।"
  },
  {
    "question_en": "What is the synonym for 'Virodh' (Opposition)?",
    "question_hi": "विरोध (Opposition) का समानार्थी क्या है?",
    "options_en": ["Support", "Cooperation", "Resistance (Pratirodh)", "Compromise"],
    "options_hi": ["समर्थन", "सहयोग", "प्रतिरोध", "समझौता"],
    "correct_option_index": 2,
    "explanation_en": "Virodh (Resistance/Defiance).",
    "explanation_hi": "विरोध (Resistance/Defiance)।"
  },
  {
    "question_en": "What is the synonym for 'Sanrakṣaṇ' (Protection/Conservation)?",
    "question_hi": "संरक्षण (Protection) का पर्यायवाची क्या है?",
    "options_en": ["Loss", "Defense/Saving (Bachāv)", "Destruction", "Neglect"],
    "options_hi": ["हानि", "बचाव", "विनाश", "उपेक्षा"],
    "correct_option_index": 1,
    "explanation_en": "Sanrakṣaṇ (Protection/Defense).",
    "explanation_hi": "संरक्षण।"
  },
  {
    "question_en": "What is the synonym for 'Shatru' (Enemy)?",
    "question_hi": "शत्रु का समानार्थी शब्द क्या है?",
    "options_en": ["Friend", "Servant", "Foe (Ripu)", "Ally"],
    "options_hi": ["मित्र", "सेवक", "रिपु", "सहयोगी"],
    "correct_option_index": 2,
    "explanation_en": "Shatru (Enemy/Foe).",
    "explanation_hi": "शत्रु।"
  },
  {
    "question_en": "What is the synonym for 'Samṛddhi' (Prosperity)?",
    "question_hi": "समृद्धि (Prosperity) का पर्यायवाची क्या है?",
    "options_en": ["Poverty", "Well-being/Happiness (Khushahālī)", "Sorrow", "Laziness"],
    "options_hi": ["गरीबी", "खुशहाली", "दुःख", "आलस्य"],
    "correct_option_index": 1,
    "explanation_en": "Samṛddhi (Prosperity/Well-being).",
    "explanation_hi": "समृद्धि।"
  },
  {
    "question_en": "What is the synonym for 'Bhavan' (Building)?",
    "question_hi": "भवन का समानार्थी क्या है?",
    "options_en": ["House (Makān)", "Forest", "Sky", "Earth"],
    "options_hi": ["मकान", "जंगल", "आकाश", "धरती"],
    "correct_option_index": 0,
    "explanation_en": "Bhavan (House/Building).",
    "explanation_hi": "भवन (House/Building)।"
  },
  {
    "question_en": "What is the synonym for 'Avalokan' (Observation)?",
    "question_hi": "अवलोकन (Observation) का पर्यायवाची क्या है?",
    "options_en": ["Seeing (Dekhnā)", "Reading", "Forgetting", "Writing"],
    "options_hi": ["देखना", "पढ़ना", "भूलना", "लिखना"],
    "correct_option_index": 0,
    "explanation_en": "Avalokan (Viewing/Seeing).",
    "explanation_hi": "अवलोकन (Viewing/Seeing)।"
  },
  {
    "question_en": "What is the synonym for 'Avikasit' (Undeveloped)?",
    "question_hi": "अविकसित का समानार्थी क्या है?",
    "options_en": ["Developed", "Underdeveloped (Alparūpit)", "Advanced", "Complete"],
    "options_hi": ["विकसित", "अल्परूपित", "उन्नत", "पूर्ण"],
    "correct_option_index": 1,
    "explanation_en": "(Underdeveloped).",
    "explanation_hi": "(Underdeveloped)।"
  },
  {
    "question_en": "What is the synonym for 'Atyant' (Extremely)?",
    "question_hi": "अत्यंत (Extremely) का पर्यायवाची क्या है?",
    "options_en": ["Little", "Negligible", "Supreme/Utmost (Param)", "Ordinary"],
    "options_hi": ["थोड़ा", "नगण्य", "परम", "साधारण"],
    "correct_option_index": 2,
    "explanation_en": "Atyant (Very/Greatest).",
    "explanation_hi": "अत्यंत (Very/Greatest)।"
  },
  {
    "question_en": "What is the synonym for 'Pravāh' (Flow)?",
    "question_hi": "प्रवाह (Flow) का समानार्थी क्या है?",
    "options_en": ["Stagnation", "Stop", "Flow/Current (Bahāv)", "Stable"],
    "options_hi": ["जमाव", "रोक", "बहाव", "स्थिर"],
    "correct_option_index": 2,
    "explanation_en": "Pravāh (Current/Movement).",
    "explanation_hi": "प्रवाह (Current/Movement)।"
  },
  {
    "question_en": "What is the synonym for 'Āgrah' (Request/Insistence)?",
    "question_hi": "आग्रह (Request) का समानार्थी क्या है?",
    "options_en": ["Order", "Request/Plea (Nivedan)", "Prohibition", "Force"],
    "options_hi": ["आदेश", "निवेदन", "मनाही", "बल"],
    "correct_option_index": 1,
    "explanation_en": "(Indirectly from 'polite greeting').",
    "explanation_hi": "(अप्रत्यक्ष रूप से 'विनम्र अभिवादन' से)।"
  },
  {
    "question_en": "What is the synonym for 'Vachan' (Word/Promise)?",
    "question_hi": "वचन का समानार्थी क्या है?",
    "options_en": ["Verb", "Case", "Promise (Pratijñā)", "Gender"],
    "options_hi": ["क्रिया", "कारक", "प्रतिज्ञा", "लिंग"],
    "correct_option_index": 2,
    "explanation_en": "Vachan (Promise/Word).",
    "explanation_hi": "वचन (Promise/Word)।"
  },
  {
    "question_en": "What is the synonym for 'Sugam' (Easy access/Accessible)?",
    "question_hi": "सुगम (Easy access) का पर्यायवाची क्या है?",
    "options_en": ["Difficult", "Easy/Convenient (Sahaj)", "Inaccessible", "Obstacle"],
    "options_hi": ["कठिन", "सहज", "दुर्गम", "बाधा"],
    "correct_option_index": 1,
    "explanation_en": "Sugam (Accessible/Easy).",
    "explanation_hi": "सुगम।"
  },
  {
    "question_en": "What is the synonym for 'Aparyāpt' (Insufficient)?",
    "question_hi": "अपर्याप्त (Insufficient) का समानार्थी क्या है?",
    "options_en": ["Complete", "More", "Less/Scanty (Kam)", "Sufficient"],
    "options_hi": ["पूर्ण", "अधिक", "कम", "पर्याप्त"],
    "correct_option_index": 2,
    "explanation_en": "Aparyāpt (Inadequate/Scanty).",
    "explanation_hi": "अपर्याप्त (Inadequate/Scanty)।"
  },
  {
    "question_en": "What is the synonym for 'Gulm'?",
    "question_hi": "गुल्म का समानार्थी शब्द क्या है?",
    "options_en": ["Tree", "Bush/Shrub (Jhāṛī)", "Mountain", "River"],
    "options_hi": ["वृक्ष", "झाड़ी", "पर्वत", "नदी"],
    "correct_option_index": 1,
    "explanation_en": "Jhāṛiyāṇ (Bushes/Shrubs).",
    "explanation_hi": "झाड़ियाँ (Bushes/Shrubs)।"
  },
  {
    "question_en": "What is the synonym for 'Vilop' (Extinction/Disappearance)?",
    "question_hi": "विलोप (Extinction) का पर्यायवाची क्या है?",
    "options_en": ["Origin", "Destruction/End (Nāsh)", "Development", "Life"],
    "options_hi": ["उत्पत्ति", "नाश", "विकास", "जीवन"],
    "correct_option_index": 1,
    "explanation_en": "Vilop (Destruction/Disappearance).",
    "explanation_hi": "विलोप (Destruction/Disappearance)।"
  },
  {
    "question_en": "What is the synonym for 'Ākānkṣā' (Aspiration)?",
    "question_hi": "आकांक्षा (Aspiration) का समानार्थी क्या है?",
    "options_en": ["Despair", "Desire/Wish (Ichchhā)", "Doubt", "Fear"],
    "options_hi": ["निराशा", "इच्छा", "संदेह", "भय"],
    "correct_option_index": 1,
    "explanation_en": "Ākānkṣā (Desire/Longing).",
    "explanation_hi": "आकांक्षा (Desire/Longing)।"
  },
  {
    "question_en": "What is the synonym for 'Prāmāṇik' (Authentic)?",
    "question_hi": "प्रामाणिक (Authentic) का पर्यायवाची क्या है?",
    "options_en": ["False", "Verified (Satyāpit)", "Concocted", "Fictitious"],
    "options_hi": ["झूठा", "सत्यापित", "मनगढ़ंत", "कल्पित"],
    "correct_option_index": 1,
    "explanation_en": "Prāmāṇik (Verified/Genuine).",
    "explanation_hi": "प्रामाणिक (Verified/Genuine)।"
  },
  {
    "question_en": "What is the synonym for 'Ghanā' (Dense)?",
    "question_hi": "घना (Dense) का समानार्थी क्या है?",
    "options_en": ["Sparse", "Light", "Dense (Saghan)", "Less"],
    "options_hi": ["विरल", "हल्का", "सघन", "कम"],
    "correct_option_index": 2,
    "explanation_en": "Saghan (Thick/Compact).",
    "explanation_hi": "सघन (Thick/Compact)।"
  },
  {
    "question_en": "What is the synonym for 'Vividh' (Various)?",
    "question_hi": "विविध (Various) का समानार्थी क्या है?",
    "options_en": ["One", "Many/Numerous (Anek)", "Rare", "Complete"],
    "options_hi": ["एक", "अनेक", "दुर्लभ", "पूर्ण"],
    "correct_option_index": 1,
    "explanation_en": "Vividh (Manifold/Different).",
    "explanation_hi": "विविध (Manifold/Different)।"
  },
  {
    "question_en": "What is the synonym for 'Duṣkāl' (Drought/Famine)?",
    "question_hi": "दुष्काल (Drought/Famine) का पर्यायवाची क्या है?",
    "options_en": ["Rain", "Famine (Akāl)", "Calamity", "Excessive rain"],
    "options_hi": ["वर्षा", "अकाल", "विपदा", "अतिवृष्टि"],
    "correct_option_index": 1,
    "explanation_en": "Akāl (Scarcity/Famine).",
    "explanation_hi": "अकाल (Scarcity/Famine)।"
  },
  {
    "question_en": "What is the synonym for 'Kaṭhor' (Hard/Strict)?",
    "question_hi": "कठोर (Hard) का समानार्थी क्या है?",
    "options_en": ["Soft", "Hard/Strict (Sakht)", "Liquid", "Smooth"],
    "options_hi": ["नरम", "सख्त", "तरल", "चिकना"],
    "correct_option_index": 1,
    "explanation_en": "Kaṭhor (Strict/Rigid).",
    "explanation_hi": "कठोर (Strict/Rigid)।"
  },
  {
    "question_en": "Which idiom has a similar meaning to 'Tiraskār' (Disrespect/Scorn)?",
    "question_hi": "तिरस्कार (Disrespect) का मुहावरा (समान भाव) कौन-सा है?",
    "options_en": ["To speak angrily (Angar ugalna)", "To not even look up (Ānkh uṭhā kar na dekhnā)", "To celebrate (Ghee ke diye jalana)", "To grind teeth (Dānt pīsnā)"],
    "options_hi": ["अंगार उगलना", "आँख उठा कर न देखना", "घी के दीये जलाना", "दाँत पीसना"],
    "correct_option_index": 1,
    "explanation_en": "To scorn/disrespect.",
    "explanation_hi": "तिरस्कार करना।"
  },
  {
    "question_en": "What is the synonym for 'Bhūkampa' (Earthquake)?",
    "question_hi": "भूकंप (Earthquake) का समानार्थी क्या है?",
    "options_en": ["Volcano", "Earth shaking (Dharatī kānpanā)", "Tsunami", "Tectonic"],
    "options_hi": ["ज्वालामुखी", "धरती काँपना", "सुनामी", "विवर्तनिक"],
    "correct_option_index": 1,
    "explanation_en": "Bhūkampa (Earth's shaking).",
    "explanation_hi": "भूकंप (Earth's shaking)।"
  },
  {
    "question_en": "What is the synonym for 'Adṛśya' (Invisible)?",
    "question_hi": "अदृश्य (Invisible) का समानार्थी क्या है?",
    "options_en": ["Visible", "Hidden/Out of sight (Ojhal)", "Secret", "Manifest"],
    "options_hi": ["दृश्य", "ओझल", "गुप्त", "प्रकट"],
    "correct_option_index": 1,
    "explanation_en": "(Hidden/Out of sight).",
    "explanation_hi": "(Hidden/Out of sight)।"
  },
  {
    "question_en": "What is the synonym for 'Nirvāsan' (Exile/Banishment)?",
    "question_hi": "निर्वासन का समानार्थी क्या है?",
    "options_en": ["Housing", "Residence", "Expulsion (Niṣkāsan)", "Freedom"],
    "options_hi": ["आवास", "निवास", "निष्कासन", "स्वतंत्रता"],
    "correct_option_index": 2,
    "explanation_en": "(Banishment/Expulsion).",
    "explanation_hi": "(Banishment/Expulsion)।"
  },
  {
    "question_en": "In the word Kripacharya, what is the implied meaning of 'Kripa'?",
    "question_hi": "कृपाचार्य शब्द में 'कृपा' का भावार्थ क्या है?",
    "options_en": ["Donation", "Mercy (Dayā)", "Anger", "Education"],
    "options_hi": ["दान", "दया", "क्रोध", "शिक्षा"],
    "correct_option_index": 1,
    "explanation_en": "Kripacharya (Grace/Mercy).",
    "explanation_hi": "कृपाचार्य (Grace/Mercy)।"
  },
  {
    "question_en": "What is the synonym for 'Utpād' (Output/Product)?",
    "question_hi": "उत्पाद (Output) का पर्यायवाची क्या है?",
    "options_en": ["Production (Utpādan)", "Input", "Demand", "Profit"],
    "options_hi": ["उत्पादन", "निवेश", "मांग", "लाभ"],
    "correct_option_index": 0,
    "explanation_en": "Utpād/Utpādan (Product/Production).",
    "explanation_hi": "उत्पाद/उत्पादन (Product/Production)।"
  },
  {
    "question_en": "What is the synonym for 'Ākarṣaṇ' (Attraction)?",
    "question_hi": "आकर्षण (Attraction) का समानार्थी क्या है?",
    "options_en": ["Pull/Draw (Khinchāv)", "Repulsion", "Force", "Retaliation"],
    "options_hi": ["खिंचाव", "प्रतिकर्षण", "बल", "प्रतिकार"],
    "correct_option_index": 0,
    "explanation_en": "Ākarṣaṇ (Pull/Force).",
    "explanation_hi": "आकर्षण (Pull/Force)."
  },
  {
    "question_en": "What is the synonym for 'Puṇya' (Virtue/Merit)?",
    "question_hi": "पुण्य (Punya) का समानार्थी क्या है?",
    "options_en": ["Sin", "Righteousness/Duty (Dharma)", "Sorrow", "Desire"],
    "options_hi": ["पाप", "धर्म", "दुःख", "इच्छा"],
    "correct_option_index": 1,
    "explanation_en": "Puṇya (Virtue/Merit).",
    "explanation_hi": "पुण्य (Virtue/Merit)।"
  },
  {
    "question_en": "What is the synonym for 'Aspṛśyatā' (Untouchability)?",
    "question_hi": "अस्पृश्यता (Untouchability) का समानार्थी क्या है?",
    "options_en": ["Untouchability (Chhuāchhūt)", "Equality", "Bondage", "Right"],
    "options_hi": ["छुआछूत", "समता", "बंधन", "अधिकार"],
    "correct_option_index": 0,
    "explanation_en": "Aspṛśyatā (Discrimination/Taboo).",
    "explanation_hi": "अस्पृश्यता (Discrimination/Taboo)।"
  },
  {
    "question_en": "What is the synonym for 'Vaikalpik' (Alternative/Optional)?",
    "question_hi": "वैकल्पिक (Alternative) का पर्यायवाची क्या है?",
    "options_en": ["Certain", "Other (Anya)", "Main", "Mandatory"],
    "options_hi": ["निश्चित", "अन्य", "मुख्य", "अनिवार्य"],
    "correct_option_index": 1,
    "explanation_en": "Vaikalpik (Other option).",
    "explanation_hi": "वैकल्पिक (Other option)।"
  },
  {
    "question_en": "What is the synonym for 'Agrasar' (Proceeding/Advancing)?",
    "question_hi": "अग्रसर (Proceeding) का समानार्थी क्या है?",
    "options_en": ["Retreating", "Moving forward (Āge baṛhnā)", "Stopping", "Running away"],
    "options_hi": ["पीछे हटना", "आगे बढ़ना", "रुकना", "भाग जाना"],
    "correct_option_index": 1,
    "explanation_en": "Agrasar (Moving forward).",
    "explanation_hi": "अग्रसर (Moving forward)।"
  },
  {
    "question_en": "'Vyom' is a synonym for what?",
    "question_hi": "व्योम (Vyom) किसका पर्यायवाची है?",
    "options_en": ["Fire", "Lotus", "Sky (Ākāsh)", "Earth"],
    "options_hi": ["अग्नि", "कमल", "आकाश", "पृथ्वी"],
    "correct_option_index": 2,
    "explanation_en": "(Used in options).",
    "explanation_hi": "(विकल्प में प्रयुक्त)।"
  },
  {
    "question_en": "Diarrhoea ('Atisār') falls into which category of diseases?",
    "question_hi": "अतिसार (Diarrhoea) किस प्रकार के रोगों में आता है?",
    "options_en": ["Respiratory", "Water borne", "Eye related", "Air borne"],
    "options_hi": ["श्वास संबंधी", "जल जनित", "नेत्र संबंधी", "वायु जनित"],
    "correct_option_index": 1,
    "explanation_en": "Atisār/Dast (Water borne disease).",
    "explanation_hi": "अतिसार/दस्त (Water borne disease)।"
  },
  {
    "question_en": "What is the synonym for 'Sugandhit' (Fragrant)?",
    "question_hi": "सुगंधित (Fragrant) का समानार्थी क्या है?",
    "options_en": ["Without fragrance", "Aromatic (Khushbūdār)", "Beautiful", "Foul-smelling"],
    "options_hi": ["सुगंध से रहित", "खुशबूदार", "सुंदर", "बदबूदार"],
    "correct_option_index": 1,
    "explanation_en": "Sugandhit (Aromatic).",
    "explanation_hi": "सुगंधित (Aromatic)।"
  },
  {
    "question_en": "What is the synonym for 'Pariṇām' (Result)?",
    "question_hi": "परिणाम (Result) का पर्यायवाची क्या है?",
    "options_en": ["Cause", "Fruit/Outcome (Phal)", "Action", "Trade"],
    "options_hi": ["कारण", "फल", "क्रिया", "व्यापार"],
    "correct_option_index": 1,
    "explanation_en": "Pariṇām (Outcome/Effect).",
    "explanation_hi": "परिणाम (Outcome/Effect)।"
  },
  {
    "question_en": "What is the synonym for 'Paramparā' (Tradition)?",
    "question_hi": "परंपरा (Tradition) का समानार्थी क्या है?",
    "options_en": ["Novelty", "Modernity", "Custom/Practice (Rīti)", "Change"],
    "options_hi": ["नवीनता", "आधुनिकता", "रीति", "परिवर्तन"],
    "correct_option_index": 2,
    "explanation_en": "Paramparā (Custom/Practice).",
    "explanation_hi": "परंपरा (Custom/Practice)।"
  },
  {
    "question_en": "What is the synonym for 'Ghoṭālā' (Scam)?",
    "question_hi": "घोटाला (Scam) का समानार्थी क्या है?",
    "options_en": ["Honesty", "Embezzlement (Gaban)", "Saving", "Management"],
    "options_hi": ["ईमानदारी", "गबन", "बचत", "प्रबंधन"],
    "correct_option_index": 1,
    "explanation_en": "Financial irregularity and embezzlement of public funds.",
    "explanation_hi": "वित्तीय अनियमितता और सार्वजनिक धन का गबन (Embezzlement)।"
  },
  {
    "question_en": "What could be the opposite word for 'Āsakti' (Attachment)?",
    "question_hi": "आसक्ति (Attachment) का विपरीत शब्द क्या हो सकता है?",
    "options_en": ["Detachment (Virakti)", "Love", "Affection", "Delusion"],
    "options_hi": ["विरक्ति", "प्रेम", "अनुराग", "मोह"],
    "correct_option_index": 0,
    "explanation_en": "(The meaning of Āsakti is implicitly contained in the sources, e.g., abstract noun).",
    "explanation_hi": "(आसक्ति का अर्थ स्रोतों में अप्रत्यक्ष रूप से निहित है, जैसे भाववाचक संज्ञा)।"
  },
  {
    "question_en": "What is the synonym for 'Aprakaṭ' (Hidden/Unmanifest)?",
    "question_hi": "अप्रकट (Hidden) का पर्यायवाची क्या है?",
    "options_en": ["Expressed", "Secret (Gupt)", "Manifest", "Known"],
    "options_hi": ["व्यक्त", "गुप्त", "प्रकट", "ज्ञात"],
    "correct_option_index": 1,
    "explanation_en": "(Unknown/Secret).",
    "explanation_hi": "(Unknown/Secret)।"
  },
  {
    "question_en": "What is the synonym for 'Nirvāh' (Sustenance/Maintenance)?",
    "question_hi": "निर्वाह (Sustenance) का समानार्थी क्या है?",
    "options_en": ["Renunciation", "Upkeep/Maintenance (Pālan)", "Opposition", "Separation"],
    "options_hi": ["त्याग", "पालन", "विरोध", "वियोग"],
    "correct_option_index": 1,
    "explanation_en": "Nirvāh/Gujar (Maintenance/Support).",
    "explanation_hi": "निर्वाह/गुजर (Maintenance/Support)।"
  },
  {
    "question_en": "What is the synonym for 'Āhvān' (Call/Summoning)?",
    "question_hi": "आव्हान (Avhaan) का समानार्थी क्या है?",
    "options_en": ["Call/Invitation (Bulāvā)", "Calm", "Renunciation", "Stopping"],
    "options_hi": ["बुलावा", "शांत", "त्याग", "रोकना"],
    "correct_option_index": 0,
    "explanation_en": "Āhvān (Call/Summoning).",
    "explanation_hi": "आह्वान (Call/Summoning)।"
  },
  {
    "question_en": "What is the synonym for 'Avilamb' (Immediately/Without delay)?",
    "question_hi": "अविलंब (Immediately) का समानार्थी क्या है?",
    "options_en": ["Late", "Quickly/Promptly (Shīghra)", "Tomorrow", "Never"],
    "options_hi": ["देरी से", "शीघ्र", "कल", "कभी नहीं"],
    "correct_option_index": 1,
    "explanation_en": "(Similar to 'Fauran').",
    "explanation_hi": "(फौरन के समान)।"
  },
  {
    "question_en": "What is the synonym for 'Ārdra' (Wet/Moist)?",
    "question_hi": "आर्द्र (Wet) का पर्यायवाची क्या है?",
    "options_en": ["Dry", "Moist/Damp (Nam)", "Hot", "Cool"],
    "options_hi": ["सूखा", "नम", "गर्म", "शीतल"],
    "correct_option_index": 1,
    "explanation_en": "Ārdra (Moist/Humid).",
    "explanation_hi": "आर्द्र (Moist/Humid)।"
  },
  {
    "question_en": "What is the synonym for 'Nirdoṣ' (Faultless/Innocent)?",
    "question_hi": "निर्दोष (Faultless) का समानार्थी क्या है?",
    "options_en": ["Guilty", "Blameless/Pure (Niḥspṛh)", "Crime", "Criminal"],
    "options_hi": ["दोषी", "निःस्पृह", "अपराध", "अपराधी"],
    "correct_option_index": 1,
    "explanation_en": "(Blameless/Pure).",
    "explanation_hi": "(Blameless/Pure)।"
  },
  {
    "question_en": "What is the synonym for 'Punargaṭhan' (Reorganization)?",
    "question_hi": "पुनर्गठन (Reorganization) का समानार्थी क्या है?",
    "options_en": ["Disintegration", "Recombination/Restructuring (Punarsanyojan)", "Annihilation", "Destroyed"],
    "options_hi": ["विघटन", "पुनर्संयोजन", "संहार", "नष्ट"],
    "correct_option_index": 1,
    "explanation_en": "Punarsanyojan (Recomposition/Restructuring).",
    "explanation_hi": "पुनर्संयोजन (Recomposition/Restructuring)।"
  },
  {
    "question_en": "What is the synonym for 'Vaiśvik' (Global)?",
    "question_hi": "वैश्विक (Global) का समानार्थी क्या है?",
    "options_en": ["Local", "International (Antarrāṣṭrīya)", "Regional", "National"],
    "options_hi": ["स्थानीय", "अंतर्राष्ट्रीय", "क्षेत्रीय", "राष्ट्रीय"],
    "correct_option_index": 1,
    "explanation_en": "Vaiśvik (World/International).",
    "explanation_hi": "वैश्विक (World/International)।"
  },
  {
    "question_en": "What is the synonym for 'Anuchit' (Improper/Unfair)?",
    "question_hi": "अनुचित (Improper) का पर्यायवाची क्या है?",
    "options_en": ["Proper", "Inconsistent/Inappropriate (Asangat)", "Equal", "Justified"],
    "options_hi": ["उचित", "असंगत", "समान", "न्यायसंगत"],
    "correct_option_index": 1,
    "explanation_en": "Anuchit/Asangat (Inappropriate/Inconsistent).",
    "explanation_hi": "अनुचित/असंगत (Inappropriate/Inconsistent)।"
  },
  {
    "question_en": "What is the synonym for 'Nirantar' (Continuous)?",
    "question_hi": "निरंतर (Continuous) का समानार्थी क्या है?",
    "options_en": ["Sometimes", "Continuous/Constant (Satat)", "Intermittently", "Today"],
    "options_hi": ["कभी-कभी", "सतत", "रुक-रुक कर", "आज"],
    "correct_option_index": 1,
    "explanation_en": "Nirantar (Perpetual/Constant).",
    "explanation_hi": "निरंतर (Perpetual/Constant)।"
  },
  {
    "question_en": "What is the antonym (in the sense of most difficult) for 'Sulabh' (easily available)?",
    "question_hi": "सुलभ का विलोम (कठिनतम अर्थ) क्या है?",
    "options_en": ["Simple", "Easy", "Difficult to obtain (Duṣprāpya)", "Ease"],
    "options_hi": ["सरल", "सहज", "दुष्प्राप्य", "सहजता"],
    "correct_option_index": 2,
    "explanation_en": "'Sulabh' means easily available. 'Duṣprāpya' means difficult to obtain.",
    "explanation_hi": "'सुलभ' का अर्थ है जो आसानी से उपलब्ध हो।"
  },
  {
    "question_en": "What is the synonym for 'Akṣat' (Unharmed/Intact)?",
    "question_hi": "अक्षत का समानार्थी क्या है?",
    "options_en": ["Broken", "Without damage (Kṣati rahit)", "Fragmented", "Injured"],
    "options_hi": ["टूटा हुआ", "क्षति रहित", "खंडित", "विक्षत"],
    "correct_option_index": 1,
    "explanation_en": "Akṣat (i.e., without damage).",
    "explanation_hi": "अक्षत (अर्थात बिना क्षति के)।"
  },
  {
    "question_en": "What is the synonym for 'Anivārya' (Mandatory/Compulsory)?",
    "question_hi": "अनिवार्य (Mandatory) का समानार्थी क्या है?",
    "options_en": ["Optional", "Voluntary", "Necessary/Essential (Āvaśyak)", "Easy"],
    "options_hi": ["वैकल्पिक", "ऐच्छिक", "आवश्यक", "सहज"],
    "correct_option_index": 2,
    "explanation_en": "Anivārya (Essential/Compulsory).",
    "explanation_hi": "अनिवार्य (Essential/Compulsory)।"
  }
];

export default synonymQuestions;