import type { QuizQuestion } from '../../../types';

/*
INSTRUCTIONS TO ADD QUESTIONS:

You can use the following prompt with an AI (like Gemini) to generate questions in the correct format.
Replace the [TOPIC] and [NUMBER_OF_QUESTIONS] placeholders with your desired values. For your request, use [Vilom Shabd (विलोम शब्द) in Hindi Grammar] and [100].

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
    "question_en": "What is the correct antonym of the word 'Nyay' (Justice)?",
    "question_hi": "'न्याय' शब्द का सही विलोम क्या है?",
    "options_en": ["Incorrect Justice", "Arrangement", "Injustice", "Bad Justice"],
    "options_hi": ["अपन्याय", "विन्याय", "अन्याय", "कुन्याय"],
    "correct_option_index": 2,
    "explanation_en": "The antonym of 'Nyay' (Justice) is 'Anyay' (Injustice), which is formed by adding the prefix 'A-'.",
    "explanation_hi": "'अ' उपसर्ग के योग से 'न्याय' का विलोम 'अन्याय' बनता है।"
}

====================================================================================================

Once you have the generated array, paste it below, replacing the empty array [].
*/

const vilomQuestions: QuizQuestion[] = [
  {
    "question_en": "What is the correct antonym of the word 'Nyay' (Justice)?",
    "question_hi": "'न्याय' शब्द का सही विलोम क्या है?",
    "options_en": ["Incorrect Justice", "Arrangement", "Injustice", "Bad Justice"],
    "options_hi": ["अपन्याय", "विन्याय", "अन्याय", "कुन्याय"],
    "correct_option_index": 2,
    "explanation_en": "The antonym of 'Nyay' (Justice) is 'Anyay' (Injustice), which is formed by adding the prefix 'A-'.",
    "explanation_hi": "'अ' उपसर्ग के योग से 'न्याय' का विलोम 'अन्याय' बनता है।"
  },
  {
    "question_en": "What is the opposite word for 'Purna' (Complete)?",
    "question_hi": "'पूर्ण' शब्द का विपरीतार्थक शब्द क्या है?",
    "options_en": ["Less", "Incomplete", "Little", "Empty"],
    "options_hi": ["न्यून", "अपूर्ण", "अल्प", "रिक्ति"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Purna' (Complete) is 'Apurna' (Incomplete), which is formed by adding the prefix 'A-'.",
    "explanation_hi": "'अ' उपसर्ग के योग से 'पूर्ण' का विलोम 'अपूर्ण' बनता है।"
  },
  {
    "question_en": "What will be the antonym of the word 'Sabhya' (Civilized)?",
    "question_hi": "'सभ्य' शब्द का विलोम क्या होगा?",
    "options_en": ["Wicked", "Uncivilized", "Un-civilized (alternate)", "Insipid"],
    "options_hi": ["दुर्जन", "असभ्य", "अपसभ्य", "निरस"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Sabhya' (Civilized) is 'Asabhya' (Uncivilized), formed by adding the prefix 'A-'.",
    "explanation_hi": "'सभ्य' का विलोम 'असभ्य' है, जो 'अ' उपसर्ग के योग से बना है।"
  },
  {
    "question_en": "What is the antonym of 'Sadharan' (Ordinary)?",
    "question_hi": "'साधारण' का विलोम क्या है?",
    "options_en": ["Extraordinary", "Special", "Abandonment", "Trifling"],
    "options_hi": ["असाधारण", "विशेष", "परित्याग", "तुच्छ"],
    "correct_option_index": 0,
    "explanation_en": "The opposite word for 'Sadharan' (Ordinary) is 'Asadharan' (Extraordinary).",
    "explanation_hi": "'साधारण' का विपरीतार्थक शब्द 'असाधारण' होता है।"
  },
  {
    "question_en": "Choose the antonym of 'Prasanna' (Happy):",
    "question_hi": "'प्रसन्न' का विलोम शब्द छाँटिए:",
    "options_en": ["Grief", "Unhappy", "Joy", "Sorrow"],
    "options_hi": ["विषाद", "अप्रसन्न", "हर्ष", "दुख"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Prasanna' (Happy) is 'Aprasanna' (Unhappy), formed by adding the prefix 'A-'.",
    "explanation_hi": "'प्रसन्न' का विलोम 'अप्रसन्न' है, जो 'अ' उपसर्ग के योग से बना है।"
  },
  {
    "question_en": "What is the proper antonym of 'Tript' (Satisfied)?",
    "question_hi": "'तृप्त' का उचित विलोम शब्द क्या है?",
    "options_en": ["Unsatisfied", "Dissatisfied (alternate)", "Content", "Dissatisfied"],
    "options_hi": ["अतृप्त", "वितृप्त", "संतुष्ट", "असंतुष्ट"],
    "correct_option_index": 0,
    "explanation_en": "The antonym of the word 'Tript' (Satisfied) is 'Atript' (Unsatisfied).",
    "explanation_hi": "'तृप्त' शब्द का विलोम 'अतृप्त' होता है।"
  },
  {
    "question_en": "What is the correct antonym of 'Swasth' (Healthy)?",
    "question_hi": "'स्वस्थ' का सही विलोम क्या है?",
    "options_en": ["Diseased", "Unhealthy", "Sick", "Weak"],
    "options_hi": ["रुग्ण", "अस्वस्थ", "बीमार", "दुर्बल"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Swasth' (Healthy) is 'Aswasth' (Unhealthy), formed by adding the prefix 'A-'.",
    "explanation_hi": "'अ' उपसर्ग के योग से 'स्वस्थ' का विलोम 'अस्वस्थ' बनता है।"
  },
  {
    "question_en": "What will be the antonym of the word 'Gyan' (Knowledge)?",
    "question_hi": "'ज्ञान' शब्द का विलोम क्या होगा?",
    "options_en": ["Ignorance", "Un-arrived", "Order", "Science"],
    "options_hi": ["अज्ञान", "अनागत", "आज्ञा", "विज्ञान"],
    "correct_option_index": 0,
    "explanation_en": "The antonym of 'Gyan' (Knowledge) is 'Agyan' (Ignorance), formed by adding the prefix 'A-'.",
    "explanation_hi": "'अ' उपसर्ग के योग से 'ज्ञान' का विलोम 'अज्ञान' होता है।"
  },
  {
    "question_en": "What is the correct antonym of the word 'Aadar' (Respect)?",
    "question_hi": "'आदर' शब्द का सही विलोम क्या है?",
    "options_en": ["Scorn", "Disrespect (Niradar)", "Disrespect (Anadar)", "Disgrace"],
    "options_hi": ["तिरस्कार", "निरादर", "अनादर", "बेआबरू"],
    "correct_option_index": 2,
    "explanation_en": "The antonym of 'Aadar' is 'Anadar'. While 'Tiraskar' and 'Niradar' are related, 'Anadar' is directly formed using the 'An-' prefix.",
    "explanation_hi": "'आदर' का विलोम 'अनादर' है। स्रोत में तिरस्कार, निरादर, तथा अनादर भी उपलब्ध हैं; 'अनादर' सीधे 'अन' उपसर्ग से निर्मित है।"
  },
  {
    "question_en": "What will be the antonym of 'Uchit' (Appropriate)?",
    "question_hi": "'उचित' का विलोम शब्द क्या होगा?",
    "options_en": ["Inappropriate", "Bad Policy", "Humble", "Wrong Policy"],
    "options_hi": ["अनुचित", "दुर्नीति", "विनीत", "कुनीति"],
    "correct_option_index": 0,
    "explanation_en": "The antonym of 'Uchit' (Appropriate) is 'Anuchit' (Inappropriate), formed by adding the prefix 'An-'.",
    "explanation_hi": "'अन' उपसर्ग के योग से 'उचित' का विलोम 'अनुचित' बनता है।"
  },
  {
    "question_en": "What is the opposite word for 'Ichha' (Desire)?",
    "question_hi": "'इच्छा' का विपरीतार्थक शब्द क्या है?",
    "options_en": ["Unwillingness", "Aspiration", "Wish", "Detached"],
    "options_hi": ["अनिच्छा", "अभिलाषा", "कामना", "निर्लिप्त"],
    "correct_option_index": 0,
    "explanation_en": "The antonym of 'Ichha' (Desire) is 'Anichha' (Unwillingness).",
    "explanation_hi": "'इच्छा' का विलोम 'अनिच्छा' है।"
  },
  {
    "question_en": "What is the antonym of 'Udaar' (Generous)?",
    "question_hi": "'उदार' का विलोम शब्द क्या है?",
    "options_en": ["Cruel", "Ungenerous/Illiberal", "Harsh", "Narrow-minded"],
    "options_hi": ["निष्ठुर", "अनुदार", "कठोर", "संकीर्ण"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Udaar' (Generous) is 'Anudaar' (Ungenerous).",
    "explanation_hi": "'उदार' का विलोम 'अनुदार' है।"
  },
  {
    "question_en": "What is the correct antonym of 'Aagat' (Arrived)?",
    "question_hi": "'आगत' का सही विलोम शब्द क्या है?",
    "options_en": ["Past", "Not Arrived/Future", "Welcome", "Departure"],
    "options_hi": ["विगत", "अनागत", "स्वागत", "गमन"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Aagat' (Arrived) is 'Anagat' (Not arrived / The future).",
    "explanation_hi": "'आगत' (आया हुआ) का विलोम 'अनागत' (न आया हुआ/भविष्य) होता है।"
  },
  {
    "question_en": "Choose the antonym of 'Isht' (Desired/Favorable):",
    "question_hi": "'इष्ट' का विलोम शब्द छाँटिए:",
    "options_en": ["Unwilling", "Undesirable/Harmful", "Aspiration", "Ill-fated"],
    "options_hi": ["अनिच्छुक", "अनिष्ट", "अभिलाषा", "दुर्भावी"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Isht' (Desired) is 'Anisht' (Undesirable/Harmful).",
    "explanation_hi": "'इष्ट' का विलोम 'अनिष्ट' है।"
  },
  {
    "question_en": "What is the correct antonym of 'Yash' (Fame)?",
    "question_hi": "'यश' का सही विलोम शब्द क्या है?",
    "options_en": ["No Fame", "Infamy", "Bad Name", "Culpable"],
    "options_hi": ["अयश", "अपयश", "दुर्नाम", "निंदनीय"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Yash' (Fame) is 'Apyash' (Infamy), formed with the prefix 'Ap-'.",
    "explanation_hi": "'यश' का विलोम 'अपयश' है, जो 'अप' उपसर्ग से बना है।"
  },
  {
    "question_en": "What is the antonym of 'Kirti' (Glory)?",
    "question_hi": "'कीर्ति' का विलोम क्या है?",
    "options_en": ["Notorious", "Disgrace", "Ill-fame", "Calamity"],
    "options_hi": ["कुख्यात", "अपकीर्ति", "कुकीर्ति", "विपदा"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Kirti' (Glory) is 'Apkirti' (Disgrace).",
    "explanation_hi": "'कीर्ति' का विलोम 'अपकीर्ति' है।"
  },
  {
    "question_en": "What will be the opposite word for 'Maan' (Respect)?",
    "question_hi": "'मान' शब्द का विपरीतार्थक शब्द क्या होगा?",
    "options_en": ["Comparison", "Insult/Disrespect", "Self-respect", "Arrogance"],
    "options_hi": ["उपमान", "अपमान", "स्वाभिमान", "गुमान"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Maan' (Respect) is 'Apmaan' (Insult).",
    "explanation_hi": "'मान' का विलोम 'अपमान' है।"
  },
  {
    "question_en": "What will be the antonym of 'Shakun' (Omen)?",
    "question_hi": "'शकुन' का विलोम क्या होगा?",
    "options_en": ["No Omen", "Bad Omen", "Evil Omen", "Inauspicious"],
    "options_hi": ["निशकुन", "अपशकुन", "दुर्शकुन", "अशुभ"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Shakun' (Omen) is 'Apshakun' (Bad Omen).",
    "explanation_hi": "'शकुन' का विलोम 'अपशकुन' है।"
  },
  {
    "question_en": "What is the opposite word for 'Unnati' (Progress)?",
    "question_hi": "'उन्नति' का विपरीतार्थक शब्द क्या है?",
    "options_en": ["Downfall", "Decline", "Rise", "Low"],
    "options_hi": ["पतन", "अवनति", "उत्थान", "निम्न"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Unnati' (Progress) is 'Avanati' (Decline), formed with the prefix 'Av-'.",
    "explanation_hi": "'अव' उपसर्ग के योग से 'उन्नति' का विलोम 'अवनति' बनता है।"
  },
  {
    "question_en": "What is the correct antonym of 'Aaroh' (Ascent)?",
    "question_hi": "'आरोह' का सही विलोम क्या है?",
    "options_en": ["Descent", "Climbing (alternate)", "Concave", "Pause"],
    "options_hi": ["अवरोह", "उत्तरोह", "अवतल", "विराम"],
    "correct_option_index": 0,
    "explanation_en": "The antonym of 'Aaroh' (Ascent) is 'Avroah' (Descent).",
    "explanation_hi": "'आरोह' का विलोम 'अवरोह' है।"
  },
  {
    "question_en": "What will be the antonym of 'Suputra' (Good Son)?",
    "question_hi": "'सुपुत्र' का विलोम शब्द क्या होगा?",
    "options_en": ["Sonless", "Bad Son", "Evil Son", "No Son"],
    "options_hi": ["पुत्रहीन", "कुपुत्र", "दुर्पुत्र", "अपुत्र"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Suputra' (Good Son) is 'Kuputra' (Bad Son), formed with the prefix 'Ku-'.",
    "explanation_hi": "'कु' उपसर्ग के योग से 'सुपुत्र' का विलोम 'कुपुत्र' बनता है।"
  },
  {
    "question_en": "What is the opposite word for 'Sumarg' (Good Path)?",
    "question_hi": "'सुमार्ग' का विपरीतार्थक शब्द क्या है?",
    "options_en": ["Wrong Path (Kupath)", "Wrong Path (Kumarg)", "Wrong Path (Apmarg)", "Other Path"],
    "options_hi": ["कुपथ", "कुमार्ग", "अपमार्ग", "वीमार्ग"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Sumarg' (Good Path) is 'Kumarg' (Wrong Path).",
    "explanation_hi": "'सुमार्ग' का विलोम 'कुमार्ग' है।"
  },
  {
    "question_en": "The correct antonym of 'Vikhyat' (Famous) is:",
    "question_hi": "'विख्यात' का सही विलोम है:",
    "options_en": ["Unknown", "Notorious", "Famous", "Known"],
    "options_hi": ["अनाज्ञात", "कुख्यात", "विख्यात", "ज्ञात"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Vikhyat' (Famous, for good reasons) is 'Kukhyat' (Notorious, for bad reasons).",
    "explanation_hi": "'विख्यात' का विलोम 'कुख्यात' है।"
  },
  {
    "question_en": "What is the antonym of 'Saubhagya' (Good Fortune)?",
    "question_hi": "'सौभाग्य' का विलोम शब्द क्या है?",
    "options_en": ["Misfortune", "No Fortune", "Unfortunate", "Without Fortune"],
    "options_hi": ["दुर्भाग्य", "अभाग", "अभाग्य", "निभाग्य"],
    "correct_option_index": 0,
    "explanation_en": "The antonym of 'Saubhagya' (Good Fortune) is 'Durbhagya' (Misfortune), formed with the prefix 'Dur-'.",
    "explanation_hi": "'दुर्' उपसर्ग के योग से 'सौभाग्य' का विलोम 'दुर्भाग्य' बनता है।"
  },
  {
    "question_en": "What is the antonym of 'Sadgati' (Good State/Salvation)?",
    "question_hi": "'सद्गति' का विलोम क्या है?",
    "options_en": ["Bad State/Plight", "Bad State (Kugati)", "Good Virtue", "No State"],
    "options_hi": ["दुर्गति", "कुगति", "सद्गुण", "अगति"],
    "correct_option_index": 0,
    "explanation_en": "The antonym of 'Sadgati' (Good state) is 'Durgati' (Bad state/Plight).",
    "explanation_hi": "'सद्गति' का विलोम 'दुर्गति' है।"
  },
  {
    "question_en": "What is the correct antonym of 'Saakar' (With Form)?",
    "question_hi": "'साकार' का सही विलोम क्या है?",
    "options_en": ["Baseless", "Formless", "Deformity", "Other Form"],
    "options_hi": ["निराधार", "निराकार", "विकार", "पराकार"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Saakar' (With Form) is 'Nirakar' (Formless), formed with the prefix 'Nir-'.",
    "explanation_hi": "'साकार' का विलोम 'निराकार' है, जो 'निर्' उपसर्ग से बना है।"
  },
  {
    "question_en": "What is the antonym of 'Sabal' (Strong)?",
    "question_hi": "'सबल' का विलोम क्या है?",
    "options_en": ["Weak (Nirbal)", "Without Strength", "Weak (Kamzor)", "Feeble"],
    "options_hi": ["निर्बल", "सबलहीन", "कमजोर", "दुर्बल"],
    "correct_option_index": 0,
    "explanation_en": "The antonym of 'Sabal' (Strong) is 'Nirbal' (Weak).",
    "explanation_hi": "'सबल' का विलोम 'निर्बल' है।"
  },
  {
    "question_en": "What is the antonym of 'Sakshar' (Literate)?",
    "question_hi": "'साक्षर' का विलोम शब्द क्या है?",
    "options_en": ["Letter", "Illiterate", "Un-lettered", "Detachment"],
    "options_hi": ["अक्षर", "निरक्षर", "अनक्षर", "विरक्ति"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Sakshar' (Literate) is 'Nirakshar' (Illiterate).",
    "explanation_hi": "'साक्षर' का विलोम 'निरक्षर' है।"
  },
  {
    "question_en": "What is the opposite word for 'Swadheen' (Independent)?",
    "question_hi": "'स्वाधीन' का विपरीतार्थक शब्द क्या है?",
    "options_en": ["Dependent (Partantra)", "Subordinate", "Dependent (Paradheen)", "Foreign"],
    "options_hi": ["परतंत्र", "अधीन", "पराधीन", "परकीय"],
    "correct_option_index": 2,
    "explanation_en": "The antonym of 'Swadheen' (Independent) is 'Paradheen' (Dependent), formed with the prefix 'Par-'.",
    "explanation_hi": "'पर' उपसर्ग के योग से 'स्वाधीन' का विलोम 'पराधीन' बनता है।"
  },
  {
    "question_en": "What is the antonym of 'Swakiya' (One's Own)?",
    "question_hi": "'स्वकीय' का विलोम शब्द क्या है?",
    "options_en": ["Personal", "Belonging to Another", "Abandonment", "Detached"],
    "options_hi": ["निजकीय", "परकीय", "परित्याग", "विरक्त"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Swakiya' (One's Own) is 'Parkiya' (Belonging to Another).",
    "explanation_hi": "'स्वकीय' का विलोम 'परकीय' है।"
  },
  {
    "question_en": "What is the antonym of 'Swatantra' (Independent)?",
    "question_hi": "'स्वतंत्र' का विलोम शब्द क्या है?",
    "options_en": ["Subservient", "Dependent", "Helpless", "Self-reliant"],
    "options_hi": ["परवश", "परतंत्र", "विवश", "स्वावलंबन"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Swatantra' (Independent) is 'Partantra' (Dependent).",
    "explanation_hi": "'स्वतंत्र' का विलोम 'परतंत्र' है।"
  },
  {
    "question_en": "What is the antonym of 'Ghaat' (Attack)?",
    "question_hi": "'घात' का विलोम शब्द क्या है?",
    "options_en": ["Accident", "Counter-attack", "Trauma/Attack", "Conflict"],
    "options_hi": ["अपघात", "प्रतिघात", "आघात", "संघात"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Ghaat' (Attack) is 'Pratighaat' (Counter-attack), formed with the prefix 'Prati-'.",
    "explanation_hi": "'प्रति' उपसर्ग के योग से 'घात' का विलोम 'प्रतिघात' बनता है।"
  },
  {
    "question_en": "What is the opposite word for 'Anukool' (Favorable)?",
    "question_hi": "'अनुकूल' का विपरीतार्थक शब्द क्या है?",
    "options_en": ["Unfavorable", "Averse", "Against", "Opposition"],
    "options_hi": ["प्रतिकूल", "विमुख", "विरुद्ध", "विरोध"],
    "correct_option_index": 0,
    "explanation_en": "The antonym of 'Anukool' (Favorable) is 'Pratikool' (Unfavorable).",
    "explanation_hi": "'अनुकूल' का विलोम 'प्रतिकूल' है।"
  },
  {
    "question_en": "What is the correct antonym of 'Anurag' (Affection/Attachment)?",
    "question_hi": "'अनुराग' का सही विलोम क्या है?",
    "options_en": ["Aversion", "Detachment", "Malice", "Renunciation"],
    "options_hi": ["विरक्ति", "विराग", "द्वेष", "वैराग्य"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Anurag' (Attachment) is 'Virag' (Detachment). 'Virakti' (Aversion) is also related.",
    "explanation_hi": "'अनुराग' का विलोम 'विराग' है, जबकि 'विरक्त' (विशेषण) भी संबंधित है।"
  },
  {
    "question_en": "What will be the antonym of 'Sanyog' (Union/Coincidence)?",
    "question_hi": "'संयोग' का विलोम शब्द क्या होगा?",
    "options_en": ["Separation", "Aversion", "Separation (Algaav)", "Repulsion"],
    "options_hi": ["वियोग", "विरक्ति", "अलगाव", "विकर्षण"],
    "correct_option_index": 0,
    "explanation_en": "The antonym of 'Sanyog' (Union) is 'Viyog' (Separation), formed with the prefix 'Vi-'.",
    "explanation_hi": "'वि' उपसर्ग के योग से 'संयोग' का विलोम 'वियोग' बनता है।"
  },
  {
    "question_en": "What is the antonym of 'Vishleshan' (Analysis)?",
    "question_hi": "'विश्लेषण' का विलोम शब्द क्या है?",
    "options_en": ["Synthesis", "Description", "Separation", "Union"],
    "options_hi": ["संश्लेषण", "विवरण", "विच्छेद", "संयोग"],
    "correct_option_index": 0,
    "explanation_en": "The antonym of 'Vishleshan' (Analysis) is 'Sanshleshan' (Synthesis).",
    "explanation_hi": "'विश्लेषण' का विलोम 'संश्लेषण' है।"
  },
  {
    "question_en": "The antonym of 'Aakarshan' (Attraction) is:",
    "question_hi": "'आकर्षण' का विलोम शब्द है:",
    "options_en": ["Non-attraction", "Repulsion", "Hatred", "Detraction"],
    "options_hi": ["अनाकर्षण", "विकर्षण", "घृणा", "अपकर्षण"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Aakarshan' (Attraction) is 'Vikarshan' (Repulsion), formed with the prefix 'Vi-'.",
    "explanation_hi": "'वि' उपसर्ग के योग से 'आकर्षण' का विलोम 'विकर्षण' बनता है।"
  },
  {
    "question_en": "What is the opposite word for 'Sankalp' (Resolve)?",
    "question_hi": "'संकल्प' का विपरीतार्थक शब्द क्या है?",
    "options_en": ["Alternative", "Dejected", "Unimaginable", "Bad concept"],
    "options_hi": ["विकल्प", "विमन", "अकल्प", "अपकल्प"],
    "correct_option_index": 0,
    "explanation_en": "The antonym of 'Sankalp' (Resolve) is 'Vikalp' (Alternative).",
    "explanation_hi": "'संकल्प' का विलोम 'विकल्प' है।"
  },
  {
    "question_en": "What will be the antonym of 'Izzat' (Honor)?",
    "question_hi": "'इज्जत' का विलोम क्या होगा?",
    "options_en": ["Dishonor (Beizzat)", "Disrespect", "Dishonor (Beizzti)", "Insult"],
    "options_hi": ["बेइज्जत", "अनादर", "बेइज्जती", "अपमान"],
    "correct_option_index": 0,
    "explanation_en": "The antonym of 'Izzat' (Honor) is 'Beizzat' (Dishonored), formed with the prefix 'Be-'.",
    "explanation_hi": "'बे' उपसर्ग के योग से 'इज्जत' का विलोम 'बेइज्जत' बनता है।"
  },
  {
    "question_en": "What is the antonym of the word 'Bekhauf' (Fearless)?",
    "question_hi": "'बेख़ौफ़' शब्द का विलोम क्या है?",
    "options_en": ["Afraid", "Fear", "With Fear", "Fearless (Nirbhay)"],
    "options_hi": ["भयभीत", "ख़ौफ़", "सख़ौफ़", "निर्भय"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Khauf' (Fear) is 'Bekhauf' (Fearless). Therefore, the antonym of 'Bekhauf' is 'Khauf'.",
    "explanation_hi": "'ख़ौफ़' (डर) का विलोम 'बेख़ौफ़' (बिना डर के) है।"
  },
  {
    "question_en": "What will be the antonym of 'Kritagya' (Grateful)?",
    "question_hi": "'कृतज्ञ' का विलोम शब्द क्या होगा?",
    "options_en": ["Abandonable", "Ungrateful", "Favor", "Harm"],
    "options_hi": ["त्याज्य", "कृतघ्न", "अनुग्रह", "अपकार"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Kritagya' (one who acknowledges favors) is 'Kritaghn' (one who does not acknowledge favors).",
    "explanation_hi": "'कृतज्ञ' (उपकार मानने वाला) का विलोम 'कृतघ्न' (उपकार न मानने वाला) होता है।"
  },
  {
    "question_en": "What is the opposite word for 'Timir' (Darkness)?",
    "question_hi": "'तिमिर' का विपरीतार्थक शब्द क्या है?",
    "options_en": ["Darkness", "Affection", "Light", "Night"],
    "options_hi": ["अंधकार", "स्नेह", "प्रकाश", "निशा"],
    "correct_option_index": 2,
    "explanation_en": "The antonym of 'Timir' (Darkness) is 'Prakash' (Light).",
    "explanation_hi": "'तिमिर' (अंधकार) का विलोम 'प्रकाश' है।"
  },
  {
    "question_en": "Choose the opposite word for 'Stuti' (Praise):",
    "question_hi": "'स्तुति' का विपरीतार्थक शब्द चुनिए:",
    "options_en": ["Censure/Condemnation", "Praise", "Malice", "Hatred"],
    "options_hi": ["निंदा", "प्रशंसा", "द्वेष", "घृणा"],
    "correct_option_index": 0,
    "explanation_en": "The antonym of 'Stuti' (Praise) is 'Ninda' (Censure/Condemnation).",
    "explanation_hi": "'स्तुति' का विलोम 'निंदा' है।"
  },
  {
    "question_en": "The opposite word for 'Kanishth' (Junior) is:",
    "question_hi": "'कनिष्ठ' का विपरीतार्थक शब्द है:",
    "options_en": ["Small", "Younger", "Senior", "Great"],
    "options_hi": ["लघु", "छोटा", "ज्येष्ठ", "महान"],
    "correct_option_index": 2,
    "explanation_en": "The antonym of 'Kanishth' (Junior) is 'Jyeshth' (Senior).",
    "explanation_hi": "'कनिष्ठ' (छोटा) का विलोम 'ज्येष्ठ' (बड़ा) होता है।"
  },
  {
    "question_en": "What is the antonym of 'Bahirang' (External)?",
    "question_hi": "'बहिरंग' का विलोम शब्द क्या है?",
    "options_en": ["Endocrine", "Internal/Intimate", "Multi-colored", "Colorless"],
    "options_hi": ["अंतःस्रावी", "अंतरंग", "बहुरंग", "विरंग"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Antarang' (Internal) is 'Bahirang' (External).",
    "explanation_hi": "'अंतरंग' का विलोम 'बहिरंग' होता है।"
  },
  {
    "question_en": "What is the antonym of 'Krishna' (Dark)?",
    "question_hi": "'कृष्ण' का विलोम शब्द क्या है?",
    "options_en": ["Black", "Shukla (White/Bright)", "Red", "Yellow"],
    "options_hi": ["काला", "शुक्ल", "लाल", "पीला"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Krishna' (Dark, as in the dark fortnight of the moon) is 'Shukla' (White/Bright, as in the bright fortnight).",
    "explanation_hi": "'कृष्ण' (काला या अंधकार) का विलोम 'शुक्ल' (सफेद या प्रकाश) होता है।"
  },
  {
    "question_en": "What is the antonym of 'Aalok' (Light)?",
    "question_hi": "'आलोक' का विलोम शब्द क्या है?",
    "options_en": ["Ignorance", "Timir (Darkness)", "Darkness", "Knowledge"],
    "options_hi": ["अज्ञान", "तिमिर", "अंधकार", "ज्ञान"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Aalok' (Light) is 'Timir' (Darkness).",
    "explanation_hi": "'आलोक' (प्रकाश) का विलोम 'तिमिर' है।"
  },
  {
    "question_en": "The antonym of 'Utthan' (Rise) is:",
    "question_hi": "'उत्थान' का विलोम शब्द है:",
    "options_en": ["Degradation", "Downfall", "Concave", "Excellence"],
    "options_hi": ["अधोगति", "पतन", "अवतल", "उत्कर्ष"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Utthan' (Rise) is 'Patan' (Downfall).",
    "explanation_hi": "'उत्थान' का विलोम 'पतन' होता है।"
  },
  {
    "question_en": "What is the antonym of 'Udayachal' (Sunrise Mountain)?",
    "question_hi": "'उदयाचल' का विलोम क्या है?",
    "options_en": ["Sunrise", "Sunset Mountain", "Sacrifice", "Excellence"],
    "options_hi": ["सूर्योदय", "अस्ताचल", "उत्सर्ग", "उत्कर्ष"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Udayachal' (mountain behind which the sun rises) is 'Astachal' (mountain behind which the sun sets).",
    "explanation_hi": "'उदयाचल' का विलोम 'अस्ताचल' है।"
  },
  {
    "question_en": "What is the opposite word for 'Utkrisht' (Excellent)?",
    "question_hi": "'उत्कृष्ट' का विपरीतार्थक शब्द क्या है?",
    "options_en": ["Inferior (Apkrisht)", "Inferior (Nikrisht)", "Ordinary", "Incomplete"],
    "options_hi": ["अपकृष्ट", "निकृष्ट", "साधारण", "अपूर्ण"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Utkrisht' (Excellent) is 'Nikrisht' (Inferior).",
    "explanation_hi": "'उत्कृष्ट' का विलोम 'निकृष्ट' होता है।"
  },
  {
    "question_en": "What is the antonym of 'Upchar' (Treatment)?",
    "question_hi": "'उपचार' का विलोम शब्द क्या है?",
    "options_en": ["Insipid", "Misdemeanor/Mistreatment", "Disorder", "Misconduct"],
    "options_hi": ["नि:सार", "अपचार", "विकार", "दुराचार"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Upchar' (Treatment) is 'Apchar' (Mistreatment/Misdemeanor).",
    "explanation_hi": "'उपचार' का विलोम 'अपचार' होता है।"
  },
  {
    "question_en": "What is the correct antonym of 'Adhamarna' (Debtor)?",
    "question_hi": "'अधमर्ण' का सही विलोम क्या है?",
    "options_en": ["Vile", "Creditor", "Excellent", "Borrower"],
    "options_hi": ["अधम", "उत्तमर्ण", "उत्तम", "ऋणी"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Adhamarna' (Debtor/one who takes a loan) is 'Uttamarna' (Creditor/one who gives a loan).",
    "explanation_hi": "'अधमर्ण' (कर्ज लेने वाला) का विलोम 'उत्तमर्ण' (कर्ज देने वाला) होता है।"
  },
  {
    "question_en": "What is the antonym of 'Adhityaka' (Plateau)?",
    "question_hi": "'अधित्यका' का विलोम शब्द क्या है?",
    "options_en": ["Cave", "Valley", "Valley (Ghati)", "Mountain"],
    "options_hi": ["गुफा", "उपत्यका", "घाटी", "पर्वत"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Adhityaka' (flat land on top of a mountain) is 'Upatyaka' (valley or foothills).",
    "explanation_hi": "'अधित्यका' (पहाड़ के ऊपर की समतल भूमि) का विलोम 'उपत्यका' (घाटी या तलहटी) है।"
  },
  {
    "question_en": "What will be the antonym of 'Gaman' (Departure)?",
    "question_hi": "'गमन' का विलोम शब्द क्या होगा?",
    "options_en": ["Coming", "Exit", "Arrival", "Departure (Prasthan)"],
    "options_hi": ["आना", "निर्गम", "आगमन", "प्रस्थान"],
    "correct_option_index": 2,
    "explanation_en": "The antonym of 'Gaman' (Departure) is 'Aagaman' (Arrival).",
    "explanation_hi": "'गमन' का विलोम 'आगमन' है।"
  },
  {
    "question_en": "What is the opposite word for 'Gaun' (Secondary)?",
    "question_hi": "'गौण' का विपरीतार्थक शब्द क्या है?",
    "options_en": ["Ordinary", "Primary/Main", "Excellent", "Demerit"],
    "options_hi": ["साधारण", "प्रमुख", "उत्कृष्ट", "अवगुण"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Gaun' (Secondary) is 'Pramukh' (Primary/Main).",
    "explanation_hi": "'गौण' का विलोम 'प्रमुख' होता है।"
  },
  {
    "question_en": "What is the antonym of 'Gaurav' (Dignity/Pride)?",
    "question_hi": "'गौरव' का विलोम शब्द क्या है?",
    "options_en": ["Levity/Smallness", "Insult", "Scorn", "Small"],
    "options_hi": ["लाघव", "अपमान", "तिरस्कार", "छोटा"],
    "correct_option_index": 0,
    "explanation_en": "The antonym of 'Gaurav' (Pride/Heaviness) is 'Laaghav' (Levity/Lightness).",
    "explanation_hi": "'गौरव' का विलोम 'लाघव' होता है।"
  },
  {
    "question_en": "What is the opposite word for 'Nutan' (New)?",
    "question_hi": "'नूतन' का विपरीतार्थक शब्द क्या है?",
    "options_en": ["New", "Ancient (Pracheen)", "Ancient (Puratan)", "Old"],
    "options_hi": ["नवीन", "प्राचीन", "पुरातन", "पुराना"],
    "correct_option_index": 2,
    "explanation_en": "The antonym of 'Nutan' (New) is 'Puratan' (Ancient).",
    "explanation_hi": "'नूतन' का विलोम 'पुरातन' है।"
  },
  {
    "question_en": "What is the antonym of 'Nirlajj' (Shameless)?",
    "question_hi": "'निर्लज्ज' का विलोम शब्द क्या है?",
    "options_en": ["Modest/Shameful", "Ashamed", "Shameless (Besharm)", "Shy"],
    "options_hi": ["सलज्ज", "लज्जित", "बेशर्म", "शर्मिला"],
    "correct_option_index": 0,
    "explanation_en": "The antonym of 'Nirlajj' (Shameless) is 'Salajj' (With shame/Modest).",
    "explanation_hi": "'निर्लज्ज' का विलोम 'सलज्ज' होता है।"
  },
  {
    "question_en": "What is the opposite word for 'Maukhik' (Oral)?",
    "question_hi": "'मौखिक' का विपरीतार्थक शब्द क्या है?",
    "options_en": ["Verbal", "Unwritten", "Written", "Impractical"],
    "options_hi": ["वाचिक", "अलिखित", "लिखित", "अव्यावहारिक"],
    "correct_option_index": 2,
    "explanation_en": "The antonym of 'Maukhik' (Oral) is 'Likhit' (Written).",
    "explanation_hi": "'मौखिक' का विलोम 'लिखित' होता है।"
  },
  {
    "question_en": "The opposite word for 'Samashti' (Collective) is:",
    "question_hi": "'समष्टि' का विपरीतार्थक शब्द है:",
    "options_en": ["Detailed", "Individual", "Collective", "Whole"],
    "options_hi": ["विस्तृत", "व्यष्टि", "समष्टिगत", "समग्र"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Samashti' (Collective) is 'Vyashti' (Individual).",
    "explanation_hi": "'समष्टि' (समूह) का विलोम 'व्यष्टि' (व्यक्ति) होता है।"
  },
  {
    "question_en": "What will be the antonym of 'Moksha' (Liberation)?",
    "question_hi": "'मोक्ष' का विलोम शब्द क्या होगा?",
    "options_en": ["Bondage", "Renunciation", "Nirvana", "Freedom"],
    "options_hi": ["बंधन", "वैराग्य", "निर्वाण", "मुक्ति"],
    "correct_option_index": 0,
    "explanation_en": "The antonym of 'Moksha' (Liberation) is 'Bandhan' (Bondage).",
    "explanation_hi": "'मोक्ष' का विलोम 'बंधन' होता है।"
  },
  {
    "question_en": "What is the antonym of 'Sagun' (With Attributes)?",
    "question_hi": "'सगुण' का विलोम शब्द क्या है?",
    "options_en": ["Without Attributes", "Without Quality", "Vice", "Demerit"],
    "options_hi": ["निर्गुण", "अगुण", "दुर्गुण", "अवगुण"],
    "correct_option_index": 0,
    "explanation_en": "The antonym of 'Sagun' (With attributes/qualities) is 'Nirgun' (Without attributes).",
    "explanation_hi": "'सगुण' का विलोम 'निर्गुण' होता है।"
  },
  {
    "question_en": "What is the antonym of 'Aadi' (Beginning)?",
    "question_hi": "'आदि' का विलोम शब्द क्या है?",
    "options_en": ["Infinite", "End (Iti)", "Final", "End (Ant)"],
    "options_hi": ["अनंत", "इति", "अंतिम", "अंत"],
    "correct_option_index": 3,
    "explanation_en": "The antonym of 'Aadi' (Beginning) is 'Ant' (End). 'Iti' also signifies the end.",
    "explanation_hi": "'आदि' का विलोम 'अंत' होता है। 'इति' भी अंत का बोधक है।"
  },
  {
    "question_en": "What will be the antonym of 'Abhigya' (Knowledgeable)?",
    "question_hi": "'अभिज्ञ' का विलोम शब्द क्या होगा?",
    "options_en": ["Less Knowing", "Ignorant", "Learned", "Ignorant (Agyani)"],
    "options_hi": ["अल्पज्ञ", "अनभिज्ञ", "ज्ञानी", "अज्ञानी"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Abhigya' (Knowledgeable) is 'Anabhigya' (Ignorant).",
    "explanation_hi": "'अभिज्ञ' का विलोम 'अनभिज्ञ' होता है।"
  },
  {
    "question_en": "The correct antonym of 'Uddhat' (Insolent/Arrogant) is:",
    "question_hi": "'उद्धत' का सही विलोम शब्द है:",
    "options_en": ["Insolent", "Humble/Polite", "Excellent", "Humility"],
    "options_hi": ["उद्दंड", "विनीत", "उत्कृष्ट", "विनम्रता"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Uddhat' (Insolent) is 'Vinit' (Humble/Polite).",
    "explanation_hi": "'उद्धत' का विलोम 'विनीत' होता है।"
  },
  {
    "question_en": "The opposite word for 'Agraj' (Elder Brother) is:",
    "question_hi": "'अग्रज' का विपरीतार्थक शब्द है:",
    "options_en": ["Younger Brother", "Small", "Superior", "Front"],
    "options_hi": ["अनुज", "छोटा", "श्रेष्ठ", "अग्र"],
    "correct_option_index": 0,
    "explanation_en": "The antonym of 'Agraj' (Elder brother) is 'Anuj' (Younger brother).",
    "explanation_hi": "'अग्रज' (बड़ा भाई) का विलोम 'अनुज' (छोटा भाई) है।"
  },
  {
    "question_en": "What will be the antonym of 'Pratyaksh' (Direct/Visible)?",
    "question_hi": "'प्रत्यक्ष' का विलोम शब्द क्या होगा?",
    "options_en": ["In front of", "Indirect/Invisible", "Opposite", "Not Indirect"],
    "options_hi": ["समक्ष", "परोक्ष", "विपक्ष", "अपरोक्ष"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Pratyaksh' (Direct/Visible) is 'Paroksh' (Indirect/Invisible).",
    "explanation_hi": "'प्रत्यक्ष' का विलोम 'परोक्ष' है।"
  },
  {
    "question_en": "What is the antonym of 'Jad' (Inert/Lifeless)?",
    "question_hi": "'जड़' का विलोम शब्द क्या है?",
    "options_en": ["Conscious/Animate", "Consciousness", "Alive", "Lifeless"],
    "options_hi": ["चेतन", "चेतनता", "सजीव", "अजीव"],
    "correct_option_index": 0,
    "explanation_en": "The antonym of 'Jad' (Inert) is 'Chetan' (Conscious/Animate).",
    "explanation_hi": "'जड़' का विलोम 'चेतन' होता है।"
  },
  {
    "question_en": "The antonym of 'Aitihasik' (Historical) is:",
    "question_hi": "'ऐतिहासिक' का विलोम शब्द है:",
    "options_en": ["Unliterary", "Historical", "Unhistorical", "Literary"],
    "options_hi": ["असाहित्यिक", "ऐतिहासिक", "अनैतिहासिक", "साहित्यिक"],
    "correct_option_index": 2,
    "explanation_en": "The antonym of 'Aitihasik' (Historical) is 'Anaitihasik' (Unhistorical).",
    "explanation_hi": "'ऐतिहासिक' का विलोम 'अनैतिहासिक' होता है।"
  },
  {
    "question_en": "What is the opposite word for 'Kshanik' (Momentary)?",
    "question_hi": "'क्षणिक' का विपरीतार्थक शब्द क्या है?",
    "options_en": ["Transient", "Perishable", "Eternal", "Time"],
    "options_hi": ["अनित्य", "नश्वर", "शाश्वत", "काल"],
    "correct_option_index": 2,
    "explanation_en": "The antonym of 'Kshanik' (Momentary) is 'Shashwat' (Eternal).",
    "explanation_hi": "'क्षणिक' (थोड़े समय का) का विलोम 'शाश्वत' (सदा रहने वाला) होता है।"
  },
  {
    "question_en": "What is the antonym of 'Aayat' (Import)?",
    "question_hi": "'आयात' का विलोम क्या है?",
    "options_en": ["Export", "To Send", "Homeland", "Imported"],
    "options_hi": ["निर्यात", "भेजना", "स्वदेश", "आयातित"],
    "correct_option_index": 0,
    "explanation_en": "The antonym of 'Aayat' (Import) is 'Niryat' (Export).",
    "explanation_hi": "'आयात' (बाहर से लाना) का विलोम 'निर्यात' (बाहर भेजना) होता है।"
  },
  {
    "question_en": "What is the opposite word for 'Aarambh' (Start)?",
    "question_hi": "'आरंभ' का विपरीतार्थक शब्द क्या है?",
    "options_en": ["Beginning", "End", "Without Beginning", "Not Arrived"],
    "options_hi": ["आदि", "अंत", "अनादि", "अनागत"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Aarambh' (Start) is 'Ant' (End).",
    "explanation_hi": "'आरंभ' का विलोम 'अंत' है।"
  },
  {
    "question_en": "What is the antonym of 'Aarambhik' (Initial)?",
    "question_hi": "'आरम्भिक' का विलोम शब्द क्या है?",
    "options_en": ["End", "Final", "Infinite", "Little"],
    "options_hi": ["अंत", "अंतिम", "अनंत", "अल्प"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Aarambhik' (Initial) is 'Antim' (Final).",
    "explanation_hi": "'आरम्भिक' का विलोम 'अंतिम' है।"
  },
  {
    "question_en": "What is the antonym of 'Alp' (Little/Few)?",
    "question_hi": "'अल्प' का विलोम क्या है?",
    "options_en": ["Excessive", "More", "Much", "Many"],
    "options_hi": ["अति", "अधिक", "ज्यादा", "बहु"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Alp' (Little) is 'Adhik' (More).",
    "explanation_hi": "'अल्प' का विलोम 'अधिक' है।"
  },
  {
    "question_en": "What is the opposite word for 'Ast' (Set, as in sunset)?",
    "question_hi": "'अस्त' का विपरीतार्थक शब्द क्या है?",
    "options_en": ["Rise", "East", "West", "Departure"],
    "options_hi": ["उदय", "पूर्व", "पश्चिम", "गमन"],
    "correct_option_index": 0,
    "explanation_en": "The antonym of 'Ast' (Set) is 'Uday' (Rise).",
    "explanation_hi": "'अस्त' का विलोम 'उदय' है।"
  },
  {
    "question_en": "What is the antonym of 'Upjau' (Fertile)?",
    "question_hi": "'उपजाऊ' का विलोम शब्द क्या है?",
    "options_en": ["Fertile (Uvar)", "Barren (Usar)", "Barren (Banjar)", "Infertile"],
    "options_hi": ["उर्वर", "ऊसर", "बंजर", "अनुपजाऊ"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Upjau' (Fertile) is 'Usar' (Barren).",
    "explanation_hi": "'उपजाऊ' का विलोम 'ऊसर' है।"
  },
  {
    "question_en": "What is the antonym of 'Prashna' (Question)?",
    "question_hi": "'प्रश्न' का विलोम शब्द क्या है?",
    "options_en": ["Discussion", "Answer", "Query", "Reply"],
    "options_hi": ["विमर्श", "उत्तर", "सवाल", "जवाब"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Prashna' (Question) is 'Uttar' (Answer).",
    "explanation_hi": "'प्रश्न' का विलोम 'उत्तर' होता है।"
  },
  {
    "question_en": "What is the antonym of 'Utsarjan' (Emission)?",
    "question_hi": "'उत्सर्जन' का विलोम शब्द क्या है?",
    "options_en": ["Repulsion", "Absorption", "Emission", "Reduction"],
    "options_hi": ["विकर्षण", "अवशोषण", "उत्सर्जन", "अपचयन"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Utsarjan' (Emission) is 'Avshoshan' (Absorption).",
    "explanation_hi": "'उत्सर्जन' का विलोम 'अवशोषण' होता है।"
  },
  {
    "question_en": "What is the antonym of 'Urdhva' (Upward)?",
    "question_hi": "'उर्ध्व' का विलोम क्या है?",
    "options_en": ["Down (Adha)", "Low/Down", "Up", "Down (Niche)"],
    "options_hi": ["अध", "निम्न", "ऊपर", "नीचे"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Urdhva' (Upward) is 'Nimna' (Low/Downward).",
    "explanation_hi": "'उर्ध्व' का विलोम 'निम्न' होता है।"
  },
  {
    "question_en": "What is the opposite word for 'Vidhva' (Widow)?",
    "question_hi": "'विधवा' का विपरीतार्थक शब्द क्या है?",
    "options_en": ["Wife", "Abandoned", "A woman whose husband is alive", "Concubine"],
    "options_hi": ["पत्नि", "परित्याग", "सधवा", "उपपत्नी"],
    "correct_option_index": 2,
    "explanation_en": "The antonym of 'Vidhva' (Widow) is 'Sadhva' (a woman whose husband is alive).",
    "explanation_hi": "'विधवा' का विलोम 'सधवा' होता है।"
  },
  {
    "question_en": "The antonym of 'Adha' (Down/Below) is:",
    "question_hi": "'अध' का विलोम शब्द है:",
    "options_en": ["Down", "Up", "Up/Above", "Vile"],
    "options_hi": ["नीचे", "ऊपर", "उपरि", "अधम"],
    "correct_option_index": 2,
    "explanation_en": "The antonym of 'Adha' (Below) is 'Upari' (Above).",
    "explanation_hi": "'अध' (नीचे) का विलोम 'उपरि' (ऊपर) है।"
  },
  {
    "question_en": "What is the correct antonym of 'Anivarya' (Compulsory)?",
    "question_hi": "'अनिवार्य' का सही विलोम क्या है?",
    "options_en": ["Personal", "Optional", "Necessary", "Incomplete"],
    "options_hi": ["वैयक्तिक", "वैकल्पिक", "आवश्यक", "अपूर्ण"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Anivarya' (Compulsory) is 'Vaikalpik' (Optional).",
    "explanation_hi": "'अनिवार्य' का विलोम 'वैकल्पिक' है।"
  },
  {
    "question_en": "What will be the antonym of 'Komal' (Soft)?",
    "question_hi": "'कोमल' का विलोम शब्द क्या होगा?",
    "options_en": ["Easy", "Hard", "Difficult", "Soft (Naram)"],
    "options_hi": ["सरल", "कठोर", "मुश्किल", "नरम"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Komal' (Soft) is 'Kathor' (Hard).",
    "explanation_hi": "'कोमल' का विलोम 'कठोर' है।"
  },
  {
    "question_en": "What is the antonym of 'Kadwa' (Bitter)?",
    "question_hi": "'कड़वा' का विलोम शब्द क्या है?",
    "options_en": ["Salty", "Sweet", "Sour", "Pungent"],
    "options_hi": ["नमकीन", "मीठा", "खट्टा", "तीखा"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Kadwa' (Bitter) is 'Meetha' (Sweet).",
    "explanation_hi": "'कड़वा' का विलोम 'मीठा' है।"
  },
  {
    "question_en": "What is the antonym of 'Kanjus' (Miserly)?",
    "question_hi": "'कंजूस' का विलोम शब्द क्या है?",
    "options_en": ["Generous", "Miser", "Rich", "Wealthy"],
    "options_hi": ["दानी", "कृपण", "धनवान", "अमीर"],
    "correct_option_index": 0,
    "explanation_en": "The antonym of 'Kanjus' (Miserly) is 'Daani' (Generous).",
    "explanation_hi": "'कंजूस' का विलोम 'दानी' है।"
  },
  {
    "question_en": "What is the antonym of 'Kathor' (Hard)?",
    "question_hi": "'कठोर' का विलोम शब्द क्या है?",
    "options_en": ["Soft", "Soft (Naram)", "Generous", "Easy"],
    "options_hi": ["कोमल", "नरम", "दानी", "सरल"],
    "correct_option_index": 0,
    "explanation_en": "The antonym of 'Kathor' (Hard) is 'Komal' (Soft).",
    "explanation_hi": "'कठोर' का विलोम 'कोमल' है।"
  },
  {
    "question_en": "What will be the antonym of 'Khara' (Pure/True)?",
    "question_hi": "'खरा' का विलोम शब्द क्या होगा?",
    "options_en": ["Good", "Fake/Adulterated", "True", "Fake"],
    "options_hi": ["अच्छा", "खोटा", "सत्य", "नकली"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Khara' (Pure/True) is 'Khota' (Fake/Adulterated).",
    "explanation_hi": "'खरा' (शुद्ध/सत्य) का विलोम 'खोटा' (झूठा/मिलावटी) है।"
  },
  {
    "question_en": "What is the antonym of 'Gupt' (Secret)?",
    "question_hi": "'गुप्त' का विलोम शब्द क्या है?",
    "options_en": ["Hidden", "Indirect", "Revealed/Public", "Hiding"],
    "options_hi": ["छुपा हुआ", "अप्रत्यक्ष", "प्रकट", "गोपन"],
    "correct_option_index": 2,
    "explanation_en": "The antonym of 'Gupt' (Secret) is 'Prakat' (Revealed).",
    "explanation_hi": "'गुप्त' का विलोम 'प्रकट' होता है।"
  },
  {
    "question_en": "What is the antonym of 'Chinta' (Worry)?",
    "question_hi": "'चिंता' का विलोम शब्द क्या है?",
    "options_en": ["Happiness", "Restlessness", "Worry-free", "Depression"],
    "options_hi": ["प्रसन्नता", "बेचैनी", "निश्चिंतता", "अवसाद"],
    "correct_option_index": 2,
    "explanation_en": "The antonym of 'Chinta' (Worry) is 'Nishchintata' (being worry-free).",
    "explanation_hi": "'चिंता' का विलोम 'निश्चिंतता' है, जो 'चैन' (peace) का विलोम 'बेचैन' (restless) से संबंधित है।"
  },
  {
    "question_en": "What is the antonym of 'Tyajya' (Abandonable)?",
    "question_hi": "'त्याज्य' का विलोम शब्द क्या है?",
    "options_en": ["Unacceptable", "Acceptable", "Favor", "Grabbing"],
    "options_hi": ["अग्राह्य", "स्वीकार्य", "अनुग्रह", "ग्राह्य"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Tyajya' (Abandonable) is 'Sweekarya' (Acceptable).",
    "explanation_hi": "'त्याज्य' का विलोम 'स्वीकार्य' है।"
  },
  {
    "question_en": "What is the antonym of 'Thos' (Solid)?",
    "question_hi": "'ठोस' का विलोम शब्द क्या है?",
    "options_en": ["Soft", "Thin", "Liquid", "Hard"],
    "options_hi": ["नरम", "पतला", "तरल", "कठोर"],
    "correct_option_index": 2,
    "explanation_en": "The antonym of 'Thos' (Solid) is 'Taral' (Liquid).",
    "explanation_hi": "'ठोस' का विलोम 'तरल' होता है।"
  },
  {
    "question_en": "What is the antonym of 'Teekshna' (Sharp)?",
    "question_hi": "'तीक्ष्ण' का विलोम शब्द क्या है?",
    "options_en": ["Dull/Slow", "Fast", "Dull-witted", "Clever"],
    "options_hi": ["मंद", "तेज", "मंदबुद्धि", "चालाक"],
    "correct_option_index": 0,
    "explanation_en": "The antonym of 'Teekshna' (Sharp) is 'Mand' (Dull/Slow).",
    "explanation_hi": "'तीक्ष्ण' का विलोम 'मंद' होता है।"
  },
  {
    "question_en": "What is the antonym of 'Nikas' (Exit)?",
    "question_hi": "'निकास' का विलोम शब्द क्या है?",
    "options_en": ["To Come", "Entrance", "Coming and Going", "Outside"],
    "options_hi": ["आना", "प्रवेश", "गमनागमन", "बाहर"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Nikas' (Exit) is 'Pravesh' (Entrance).",
    "explanation_hi": "'निकास' का विलोम 'प्रवेश' होता है।"
  },
  {
    "question_en": "What is the antonym of 'Nishchit' (Certain)?",
    "question_hi": "'निश्चित' का विलोम शब्द क्या है?",
    "options_en": ["Undecided", "Uncertain", "Without a doubt", "Known"],
    "options_hi": ["अनिर्णित", "अनिश्चित", "नि:संशय", "ज्ञात"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Nishchit' (Certain) is 'Anishchit' (Uncertain).",
    "explanation_hi": "'निश्चित' का विलोम 'अनिश्चित' है।"
  },
  {
    "question_en": "What is the opposite word for 'Nindaniya' (Condemnable)?",
    "question_hi": "'निंदनीय' का विपरीतार्थक शब्द क्या है?",
    "options_en": ["Critic", "Praiseworthy", "Condemnation", "Praise"],
    "options_hi": ["निंदक", "प्रशंसनीय", "निंदा", "तारीफ"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Nindaniya' (Condemnable) is 'Prashansaniya' (Praiseworthy).",
    "explanation_hi": "'निंदनीय' का विलोम 'प्रशंसनीय' है।"
  },
  {
    "question_en": "What is the antonym of 'Amrit' (Nectar)?",
    "question_hi": "'अमृत' का विलोम शब्द क्या है?",
    "options_en": ["Nectar (synonym)", "Poison", "Immortal", "To Die"],
    "options_hi": ["सुधा", "विष", "अमर", "मरना"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Amrit' (Nectar) is 'Vish' (Poison).",
    "explanation_hi": "'अमृत' का विलोम 'विष' होता है।"
  },
  {
    "question_en": "What is the antonym of 'Manav' (Human)?",
    "question_hi": "'मानव' का विलोम शब्द क्या है?",
    "options_en": ["Human (Manushya)", "Inhuman", "Demon", "Deity"],
    "options_hi": ["मनुष्य", "अमानवीय", "दानव", "देवता"],
    "correct_option_index": 2,
    "explanation_en": "The antonym of 'Manav' (Human) is 'Danav' (Demon).",
    "explanation_hi": "'मानव' का विलोम 'दानव' होता है।"
  },
  {
    "question_en": "What is the antonym of 'Raag' (Attachment/Melody)?",
    "question_hi": "'राग' का विलोम शब्द क्या है?",
    "options_en": ["Detachment (Virag)", "Malice/Aversion", "Affection", "Love"],
    "options_hi": ["विराग", "द्वेष", "अनुराग", "प्रेम"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Raag' (Attachment) is 'Dvesh' (Malice/Aversion).",
    "explanation_hi": "'राग' का विलोम 'द्वेष' है।"
  },
  {
    "question_en": "What is the antonym of 'Shok' (Grief)?",
    "question_hi": "'शोक' का विलोम शब्द क्या है?",
    "options_en": ["Sorrow", "Joy", "Anguish", "Worry"],
    "options_hi": ["दुख", "हर्ष", "क्षोभ", "चिंता"],
    "correct_option_index": 1,
    "explanation_en": "The antonym of 'Shok' (Grief) is 'Harsh' (Joy).",
    "explanation_hi": "'शोक' का विलोम 'हर्ष' है।"
  },
  {
    "question_en": "What is the opposite word for 'Sthir' (Stable)?",
    "question_hi": "'स्थिर' का विपरीतार्थक शब्द क्या है?",
    "options_en": ["Fickle/Unstable", "Disturbed", "Not Unstable", "Immobile"],
    "options_hi": ["चंचल", "विचलित", "अचंचल", "अचल"],
    "correct_option_index": 0,
    "explanation_en": "The antonym of 'Sthir' (Stable) is 'Chanchal' (Fickle/Unstable).",
    "explanation_hi": "'स्थिर' का विलोम 'चंचल' होता है।"
  }
];

export default vilomQuestions;
