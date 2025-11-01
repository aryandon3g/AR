import type { QuizQuestion } from '../../../types';

/*
INSTRUCTIONS TO ADD QUESTIONS:

You can use the following prompt with an AI (like Gemini) to generate questions in the correct format.
Replace the [TOPIC] and [NUMBER_OF_QUESTIONS] placeholders with your desired values. For your request, use [Sarvnam (Pronouns) in Hindi Grammar] and [100].

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
    "question_en": "What is the most fundamental definition of a pronoun (Sarvnam) in grammar?",
    "question_hi": "व्याकरण में सर्वनाम की सबसे मौलिक परिभाषा क्या है?",
    "options_en": ["Words that describe a verb.", "Words that are used in place of a noun.", "Words that do not bring change to a sentence.", "Words that only function as adjectives."],
    "options_hi": ["ऐसे शब्द जो क्रिया की विशेषता बताते हैं।", "ऐसे शब्द जो संज्ञा के स्थान पर प्रयोग होते हैं।", "ऐसे शब्द जो वाक्य में परिवर्तन नहीं लाते।", "ऐसे शब्द जो केवल विशेषण का कार्य करते हैं।"],
    "correct_option_index": 1,
    "explanation_en": "A pronoun (Sarvnam) is used in place of a noun.",
    "explanation_hi": "सर्वनाम का उपयोग संज्ञा के स्थान पर होता है।"
}

====================================================================================================

Once you have the generated array, paste it below, replacing the empty array [].
*/

const sarvnamQuestions: QuizQuestion[] = [
  {
    "question_en": "What is the most fundamental definition of a pronoun (Sarvnam) in grammar?",
    "question_hi": "व्याकरण में सर्वनाम की सबसे मौलिक परिभाषा क्या है?",
    "options_en": ["Words that describe a verb.", "Words that are used in place of a noun.", "Words that do not bring change to a sentence.", "Words that only function as adjectives."],
    "options_hi": ["ऐसे शब्द जो क्रिया की विशेषता बताते हैं।", "ऐसे शब्द जो संज्ञा के स्थान पर प्रयोग होते हैं।", "ऐसे शब्द जो वाक्य में परिवर्तन नहीं लाते।", "ऐसे शब्द जो केवल विशेषण का कार्य करते हैं।"],
    "correct_option_index": 1,
    "explanation_en": "A pronoun (Sarvnam) is used in place of a noun.",
    "explanation_hi": "सर्वनाम का उपयोग संज्ञा के स्थान पर होता है।"
  },
  {
    "question_en": "In the given quote ('Yah Shakuntala van mein padi mili thi.'), how is the word 'Yah' (This) used?",
    "question_hi": "दिए गए उद्धरण ('यह शकुंतला वन में पड़ी मिली थी।') में 'यह' शब्द का प्रयोग किस रूप में हुआ है?",
    "options_en": ["Adjective", "Verb", "In place of a noun", "Indeclinable (Avyay)"],
    "options_hi": ["विशेषण", "क्रिया", "संज्ञा के स्थान पर", "अव्यय"],
    "correct_option_index": 2,
    "explanation_en": "The word 'Yah' (This) is used in place of the noun (Shakuntala).",
    "explanation_hi": "'यह' शब्द संज्ञा (शकुंतला) के स्थान पर आया है।"
  },
  {
    "question_en": "What is the grammatical category of a pronoun, which implies that its form changes according to gender, number, and case?",
    "question_hi": "सर्वनाम की व्याकरणिक कोटि क्या है, जिसका तात्पर्य है कि इसके रूप लिंग, वचन और कारक के अनुसार बदलते हैं?",
    "options_en": ["Avikari (Indeclinable)", "Avyay (Indeclinable)", "Vikari (Declinable/Inflected)", "Adverb"],
    "options_hi": ["अविकारी", "अव्यय", "विकारी", "क्रियाविशेषण"],
    "correct_option_index": 2,
    "explanation_en": "A pronoun is one of those 'Vikari' (declinable) words whose forms undergo change (vikar) (it is used in place of a noun, and nouns are 'Vikari').",
    "explanation_hi": "सर्वनाम उन विकारी शब्दों में से है जिनके रूप में विकार (रूपांतर) होता है (यह संज्ञा के स्थान पर प्रयोग होता है, और संज्ञा विकारी होती है)।"
  },
  {
    "question_en": "In what context is 'Sarvnam Dosh' (Pronoun Error) used?",
    "question_hi": "'सर्वनाम दोष' (Sarvnam Dosh) का प्रयोग किस संदर्भ में किया जाता है?",
    "options_en": ["When the form of the verb changes.", "When the use of the noun is improper.", "When an incorrect form of a pronoun is used in a sentence.", "When the adjective is used incorrectly."],
    "options_hi": ["जब क्रिया का रूप बदल जाता है।", "जब संज्ञा का प्रयोग अनुचित हो।", "जब वाक्य में सर्वनाम के अशुद्ध रूप का प्रयोग हो।", "जब विशेषण का प्रयोग गलत हो।"],
    "correct_option_index": 2,
    "explanation_en": "'Pronoun Error' is mentioned in the practice of correcting incorrect sentences.",
    "explanation_hi": "अशुद्ध वाक्यों के शोधन के अभ्यास में 'सर्वनाम दोष' का उल्लेख है।"
  },
  {
    "question_en": "What is true for a Pronominal Adjective (Sarvnamik Visheshan)?",
    "question_hi": "सार्वनामिक विशेषण (Pronominal Adjective) के लिए क्या सत्य है?",
    "options_en": ["It always comes after the noun.", "It comes in place of the noun.", "It comes with the noun and describes it.", "It is used only for the verb."],
    "options_hi": ["यह हमेशा संज्ञा के बाद आता है।", "यह संज्ञा के स्थान पर आता है।", "यह संज्ञा के साथ आकर उसकी विशेषता बताता है।", "इसका प्रयोग केवल क्रिया के लिए होता है।"],
    "correct_option_index": 2,
    "explanation_en": "Pronominal adjectives come with the noun as original pronouns or compound pronouns.",
    "explanation_hi": "सार्वनामिक विशेषण मूल सर्वनाम या यौगिक सर्वनाम के रूप में संज्ञा के साथ आते हैं।"
  },
  {
    "question_en": "What is the characteristic of the 'Original Pronoun' (Mool Sarvnam) type of pronominal adjective?",
    "question_hi": "सार्वनामिक विशेषण के 'मूल सर्वनाम' भेद की विशेषता क्या है?",
    "options_en": ["They are formed by adding suffixes.", "They come with the noun without any modification.", "They only denote action.", "They are always used in the form 'jaisa/vaisa'."],
    "options_hi": ["वे प्रत्यय लगाकर बनते हैं।", "वे बिना किसी रूपांतर के संज्ञा के साथ आते हैं।", "वे केवल क्रिया का बोध कराते हैं।", "वे हमेशा 'जैसा/वैसा' के रूप में प्रयुक्त होते हैं।"],
    "correct_option_index": 1,
    "explanation_en": "Original pronouns come with the noun without any modification, e.g., 'vah ghar' (that house), 'koi naukar' (some servant).",
    "explanation_hi": "मूल सर्वनाम बिना किसी रूपांतर के संज्ञा के साथ आते हैं, जैसे: 'वह घर', 'कोई नौकर'।"
  },
  {
    "question_en": "How are 'Compound Pronouns' (Yaugik Sarvnam) formed?",
    "question_hi": "'यौगिक सर्वनाम' (Yaugik Sarvnaam) किस प्रकार बनते हैं?",
    "options_en": ["By adding prefixes", "By adding suffixes to original pronouns", "By Sandhi (joining)", "By Samas (compounding)"],
    "options_hi": ["उपसर्ग जोड़कर", "मूल सर्वनामों में प्रत्यय लगाकर", "संधि द्वारा", "समास द्वारा"],
    "correct_option_index": 1,
    "explanation_en": "Compound pronouns are formed by adding suffixes to original pronouns.",
    "explanation_hi": "यौगिक सर्वनाम, मूल सर्वनामों में प्रत्यय लगाने से बनते हैं।"
  },
  {
    "question_en": "In 'Jaisa desh vaisa bhesh' (Like country, like attire), the words 'jaisa' and 'vaisa' belong to which type of pronominal adjective?",
    "question_hi": "'जैसा देश वैसा भेष' में प्रयुक्त 'जैसा' और 'वैसा' शब्द सार्वनामिक विशेषण के किस भेद में आते हैं?",
    "options_en": ["Original Pronoun", "Compound Pronoun", "Proper Pronoun", "Demonstrative Pronoun"],
    "options_hi": ["मूल सर्वनाम", "यौगिक सर्वनाम", "व्यक्तिवाचक सर्वनाम", "निश्चयवाचक सर्वनाम"],
    "correct_option_index": 1,
    "explanation_en": "These are pronouns formed by adding suffixes to original pronouns.",
    "explanation_hi": "ये वे सर्वनाम हैं जो मूल सर्वनामों में प्रत्यय लगाकर बनते हैं।"
  },
  {
    "question_en": "The word 'vah' (that) in 'vah ladka' (that boy) is an example of which type of pronominal adjective?",
    "question_hi": "'वह लड़का' में प्रयुक्त 'वह' शब्द किस प्रकार के सार्वनामिक विशेषण का उदाहरण है?",
    "options_en": ["Compound", "Relative", "Original Pronoun", "Verbal"],
    "options_hi": ["यौगिक", "संबंधवाचक", "मूल सर्वनाम", "क्रियार्थक"],
    "correct_option_index": 2,
    "explanation_en": "'Vah ladka' (that boy) is an example of an original pronoun, which comes with the noun without modification.",
    "explanation_hi": "'वह लड़का' मूल सर्वनाम का उदाहरण है, जो बिना किसी रूपांतर के संज्ञा के साथ आया है।"
  },
  {
    "question_en": "When parsing the word 'Main' (I) in 'Main (sārthī) rās khīnchtā hūn' (I (charioteer) pull the reins), which inflection will be mentioned?",
    "question_hi": "'मैं (सारथी) रास खींचता हूँ।' में 'मैं' शब्द का पद-परिचय करते समय किस विकार का उल्लेख होगा?",
    "options_en": ["Only Gender", "Only Case", "Gender, Number, and Case", "Number and Adjective"],
    "options_hi": ["केवल लिंग", "केवल कारक", "लिंग, वचन और कारक", "वचन और विशेषण"],
    "correct_option_index": 2,
    "explanation_en": "In the parsing (pad-parichay) of a noun (and the pronoun used in its place), mentioning gender, number, and case is necessary.",
    "explanation_hi": "संज्ञा (और उसके स्थान पर प्रयुक्त सर्वनाम) के पद-परिचय में लिंग, वचन और कारक का उल्लेख आवश्यक होता है।"
  },
  {
    "question_en": "Which of the following words is NOT an original pronominal adjective?",
    "question_hi": "निम्नलिखित में से कौन-सा शब्द मूल सार्वनामिक विशेषण नहीं है?",
    "options_en": ["Vah (That)", "Koi (Some)", "Kuchh (Some)", "Kaisa (What kind of)"],
    "options_hi": ["वह", "कोई", "कुछ", "कैसा"],
    "correct_option_index": 3,
    "explanation_en": "'Kaisa' is a compound pronoun, while 'vah', 'koi', and 'kuchh' are original pronouns.",
    "explanation_hi": "'कैसा' यौगिक सर्वनाम है, जबकि 'वह', 'कोई' और 'कुछ' मूल सर्वनाम हैं।"
  },
  {
    "question_en": "In 'koi naukar' (some servant) and 'kuchh kām' (some work), what type of pronouns are 'koi' and 'kuchh'?",
    "question_hi": "'कोई नौकर' और 'कुछ काम' में प्रयुक्त 'कोई' और 'कुछ' किस प्रकार के सर्वनाम हैं?",
    "options_en": ["Compound Pronoun", "Original Pronominal Adjective", "Abstract Noun", "Adjective"],
    "options_hi": ["यौगिक सर्वनाम", "मूल सार्वनामिक विशेषण", "भाववाचक संज्ञा", "विशेषण"],
    "correct_option_index": 1,
    "explanation_en": "They have come with the noun without modification.",
    "explanation_hi": "ये बिना रूपांतर के संज्ञा के साथ आए हैं।"
  },
  {
    "question_en": "If the word 'koi' (someone) is used in place of a noun (e.g., 'Koi āyā hai' - 'Someone has come'), what will it be considered?",
    "question_hi": "यदि 'कोई' शब्द संज्ञा के स्थान पर प्रयोग हो रहा है (जैसे: 'कोई आया है'), तो यह किस रूप में माना जाएगा?",
    "options_en": ["Only Adjective", "Pronoun", "Adverb", "Indeclinable (Avyay)"],
    "options_hi": ["केवल विशेषण", "सर्वनाम", "क्रियाविशेषण", "अव्यय"],
    "correct_option_index": 1,
    "explanation_en": "A pronoun is used in place of a noun.",
    "explanation_hi": "सर्वनाम संज्ञा के स्थान पर प्रयोग होता है।"
  },
  {
    "question_en": "In the sentence 'Tumhein yah kām karne mein kyā karnā hai?' (What do you have to do in this work?), 'Tumhein' (You) falls under which part of speech?",
    "question_hi": "'तुम्हें यह काम करने में क्या करना है?' इस वाक्य में 'तुम्हें' किस शब्द-भेद के अंतर्गत आता है?",
    "options_en": ["Noun", "Adjective", "Verb", "Pronoun"],
    "options_hi": ["संज्ञा", "विशेषण", "क्रिया", "सर्वनाम"],
    "correct_option_index": 3,
    "explanation_en": "'Tumhein' (modified form of 'Tum') is used in place of a noun.",
    "explanation_hi": "'तुम्हें' (तुम का रूपांतरित रूप) संज्ञा के स्थान पर प्रयुक्त होता है।"
  },
  {
    "question_en": "Which of the following words is a compound pronominal adjective?",
    "question_hi": "निम्नलिखित में से कौन-सा शब्द यौगिक सार्वनामिक विशेषण है?",
    "options_en": ["Vah (That)", "Utnā (That much)", "Kuchh (Some)", "Yah (This)"],
    "options_hi": ["वह", "उतना", "कुछ", "यह"],
    "correct_option_index": 1,
    "explanation_en": "'Utnā' is a compound pronoun formed by adding a suffix.",
    "explanation_hi": "'उतना' प्रत्यय लगाकर बना यौगिक सर्वनाम है।"
  },
  {
    "question_en": "Why is the definition 'a word whose form undergoes vikar (change)' also valid for pronouns?",
    "question_hi": "'जिस शब्द के रूप में विकार (परिवर्तन) होता है'— यह परिभाषा सर्वनाम के लिए भी मान्य क्यों है?",
    "options_en": ["Because pronouns always remain unchanged.", "Because it comes in place of a noun, and nouns are declinable (vikari).", "Because a pronoun is an indeclinable (avyay).", "Because a pronoun only affects the verb."],
    "options_hi": ["क्योंकि सर्वनाम हमेशा अपरिवर्तित रहता है।", "क्योंकि यह संज्ञा के स्थान पर आता है और संज्ञा विकारी होती है।", "क्योंकि सर्वनाम एक अव्यय है।", "क्योंकि सर्वनाम केवल क्रिया को प्रभावित करता है।"],
    "correct_option_index": 1,
    "explanation_en": "A pronoun comes in place of a noun, and nouns are declinable (vikari).",
    "explanation_hi": "सर्वनाम संज्ञा के स्थान पर आता है, और संज्ञा विकारी होती है।"
  },
  {
    "question_en": "The compound pronominal adjective 'kaisā' (what kind of) in 'kaisā ghar' (what kind of house) is formed by adding a suffix to which original pronoun?",
    "question_hi": "'कैसा घर' में 'कैसा' शब्द 'किस' मूल सर्वनाम से प्रत्यय लगाकर बना है?",
    "options_en": ["Yah (This)", "Vah (That)", "Koi (Some)", "Not mentioned in the source"],
    "options_hi": ["यह", "वह", "कोई", "स्रोत में उल्लेख नहीं"],
    "correct_option_index": 3,
    "explanation_en": "The sources only provide 'kaisā ghar' as an example of a compound pronoun, but do not explicitly mention the original pronoun it is derived from.",
    "explanation_hi": "स्रोतों में केवल 'कैसा घर' को यौगिक सर्वनाम के उदाहरण के रूप में दिया गया है, पर मूल सर्वनाम जिससे यह बना है, उसका स्पष्ट उल्लेख नहीं है।"
  },
  {
    "question_en": "In 'Mujhse baṛhkar pāpī kaun hogā?' (Who could be a greater sinner than me?), 'Mujhse' (than me) falls under which part of speech?",
    "question_hi": "'मुझसे बढ़कर पापी कौन होगा?' (वाक्य 67 से) में 'मुझसे' किस शब्द-भेद के अंतर्गत आता है?",
    "options_en": ["Common Noun", "Adverb", "Pronoun", "Adjective"],
    "options_hi": ["जातिवाचक संज्ञा", "क्रियाविशेषण", "सर्वनाम", "विशेषण"],
    "correct_option_index": 2,
    "explanation_en": "'Mujhse' is the modified form of the pronoun 'Main' (I).",
    "explanation_hi": "'मुझसे' 'मैं' सर्वनाम का रूपांतरित रूप है।"
  },
  {
    "question_en": "In 'Tumhein yah kām karne mein kyā karnā hai?' (What do you have to do in this work?), the word 'kyā' (what) is used to know what?",
    "question_hi": "'तुम्हें यह काम करने में क्या करना है?' में 'क्या' शब्द का प्रयोग क्या जानने के लिए किया गया है?",
    "options_en": ["Relation", "Reason", "Question", "Certainty"],
    "options_hi": ["संबंध", "कारण", "प्रश्न", "निश्चय"],
    "correct_option_index": 2,
    "explanation_en": "'Kyā' (what) is used as an interrogative pronoun/pronominal adjective (although the type isn't mentioned, the function of asking a question is implied).",
    "explanation_hi": "'क्या' प्रश्नवाचक सर्वनाम/सार्वनामिक विशेषण के रूप में प्रयुक्त हुआ है (हालाँकि प्रकार का उल्लेख नहीं है, प्रश्न पूछने का कार्य निहित है)।"
  },
  {
    "question_en": "What is the difference between 'Yah' (Pronoun) and 'Yah' (Pronominal Adjective)?",
    "question_hi": "'यह' (सर्वनाम) और 'यह' (सार्वनामिक विशेषण) में क्या अंतर है?",
    "options_en": ["No difference.", "A pronoun replaces a noun; an adjective accompanies a noun.", "An adjective is always modified.", "A pronoun is always 'jaisa/vaisa'."],
    "options_hi": ["कोई अंतर नहीं।", "सर्वनाम संज्ञा के बदले आता है, विशेषण संज्ञा के साथ आता है।", "विशेषण हमेशा रूपांतरित होता है।", "सर्वनाम हमेशा 'जैसा/वैसा' होता है।"],
    "correct_option_index": 1,
    "explanation_en": "A pronoun comes in place of a noun, whereas a pronominal adjective comes with a noun.",
    "explanation_hi": "सर्वनाम संज्ञा के स्थान पर आता है, जबकि सार्वनामिक विशेषण संज्ञा के साथ आता है।"
  },
  {
    "question_en": "In which given quote is the pronoun 'Tum' (You) used similarly to the 'Second Person'?",
    "question_hi": "'तुम' सर्वनाम का प्रयोग दिए गए किस उद्धरण में 'द्वितीय पुरुष' के समान किया गया है?",
    "options_en": ["'Ham Bihariyon ko batāenge' (We will tell the Biharis)", "'Anil, aaj tumhein pūrī chhuṭṭī ke bād yahīn ruknā paṛegā' (Anil, today you have to stay here after the holiday)", "'Ve sab nirādar hain' (They are all disrespectful)", "'Vah āṭā pisāne gayā hai' (He has gone to get flour milled)"],
    "options_hi": ["'हम बिहारीयों को बताएँगे'", "'अनिल, आज तुम्हें पूरी छुट्टी के बाद यहीं रुकना पड़ेगा'", "'वे सब निरादर हैं'", "'वह आटा पिसाने गया है'"],
    "correct_option_index": 1,
    "explanation_en": "'Tumhein' (modified form of 'Tum') is used for the person being directly addressed.",
    "explanation_hi": "'तुम्हें' (तुम का रूपांतरित रूप) सीधे संबोधित व्यक्ति के लिए प्रयोग हुआ है।"
  },
  {
    "question_en": "How can the pronoun 'Ham' (We) be used?",
    "question_hi": "सर्वनाम शब्द 'हम' का प्रयोग किस रूप में हो सकता है?",
    "options_en": ["Only in place of a noun", "As the subject (Karta) case", "As plural", "All of the above"],
    "options_hi": ["केवल संज्ञा के स्थान पर", "कर्ता कारक के रूप में", "बहुवचन के रूप में", "उपरोक्त सभी"],
    "correct_option_index": 3,
    "explanation_en": "'Ham' (We) is a pronoun, used in place of a noun, used as the subject, and denotes plural.",
    "explanation_hi": "'हम' सर्वनाम है, जो संज्ञा के स्थान पर आता है, कर्ता के रूप में प्रयुक्त होता है, और बहुवचन का बोध कराता है।"
  },
  {
    "question_en": "The word 'Kaun' (Who) indicates which (potential) type of pronoun, the implied meaning of which is found in the sources?",
    "question_hi": "'कौन' शब्द का प्रयोग किस सर्वनाम भेद (संभावित) को इंगित करता है, जिसका अंतर्निहित अर्थ स्रोतों में मिलता है?",
    "options_en": ["Demonstrative (Nishchayavachak)", "Personal (Purushvachak)", "Interrogative (Prashnavachak)", "Reflexive (Nijvachak)"],
    "options_hi": ["निश्चयवाचक", "पुरुषवाचक", "प्रश्नवाचक", "निजवाचक"],
    "correct_option_index": 2,
    "explanation_en": "Although not named, 'Kaun' (who) is used to ask questions (e.g., 'Kaun āyā hai?' - 'Who has come?').",
    "explanation_hi": "यद्यपि नाम नहीं दिया गया, 'कौन' (who) का प्रयोग प्रश्न पूछने के लिए होता है (जैसे: 'कौन आया है')।"
  },
  {
    "question_en": "When parsing the pronoun 'Tumhein', which case (Karak) would be identified?",
    "question_hi": "'तुम्हें' सर्वनाम का पद-परिचय करते समय कौन-सा कारक चिन्हित किया जाएगा?",
    "options_en": ["Nominative (Karta)", "Objective (Karma) or Dative (Sampradan)", "Ablative (Apadan)", "Genitive (Sambandh)"],
    "options_hi": ["कर्ता", "कर्म या सम्प्रदान", "अपादान", "संबंध"],
    "correct_option_index": 1,
    "explanation_en": "Cases (Karak) change the form of nouns/pronouns. 'Tumhein' (modified form of 'Tum') is used in the Objective (Karma) or Dative (Sampradan) case (to you / for you).",
    "explanation_hi": "कारक संज्ञा के रूप में परिवर्तन करते हैं। 'तुम्हें' ('तुम' का रूपांतरित रूप) कर्म या सम्प्रदान कारक में प्रयोग होता है (तुझको/तुम्हारे लिए)।"
  },
  {
    "question_en": "When the (original pronoun) 'Yah' (This) is transformed into words like 'yahān' (here) or 'vahān' (there), what are they called?",
    "question_hi": "'यह' (मूल सर्वनाम) का रूपांतरण जब 'यहाँ' या 'वहाँ' जैसे शब्दों में होता है, तो वे क्या कहलाते हैं?",
    "options_en": ["Noun", "Indeclinable (Avyay)", "Adverb (Kriyavisheshan)", "Adjective"],
    "options_hi": ["संज्ञा", "अव्यय", "क्रियाविशेषण", "विशेषण"],
    "correct_option_index": 2,
    "explanation_en": "'Yahān'/'Vahān' (here/there) are adverbs of place (indirectly related to pronouns as they are demonstrative).",
    "explanation_hi": "यहाँ/वहाँ स्थानवाचक क्रियाविशेषण हैं (अप्रत्यक्ष रूप से सर्वनाम से संबंधित, चूंकि ये सांकेतिक हैं)।"
  },
  {
    "question_en": "What meaning might the compound pronominal adjective 'kaisā' (what kind of) indicate?",
    "question_hi": "यौगिक सार्वनामिक विशेषण 'कैसा' का क्या अर्थ हो सकता है?",
    "options_en": ["Quantity", "Quality or Type", "Number", "Place"],
    "options_hi": ["परिमाण", "गुण या प्रकार", "संख्या", "स्थान"],
    "correct_option_index": 1,
    "explanation_en": "e.g., 'kaisā ghar' (What kind of house) indicates quality or type.",
    "explanation_hi": "जैसे 'कैसा घर' (What kind of house) गुण या प्रकार को इंगित करता है।"
  },
  {
    "question_en": "If the word 'koi' (some) comes with a noun and describes it (e.g., 'koi naukar' - some servant), in what form does 'koi' appear?",
    "question_hi": "यदि 'कोई' शब्द संज्ञा के साथ आकर उसकी विशेषता बताए (जैसे: 'कोई नौकर'), तो 'कोई' किस रूप में आता है?",
    "options_en": ["Indefinite Pronoun", "Original Pronominal Adjective", "Reflexive Pronoun", "Adverb"],
    "options_hi": ["अनिश्चयवाचक सर्वनाम", "मूल सार्वनामिक विशेषण", "निजवाचक सर्वनाम", "क्रियाविशेषण"],
    "correct_option_index": 1,
    "explanation_en": "Original pronouns come with the noun without modification.",
    "explanation_hi": "मूल सर्वनाम बिना रूपांतर के संज्ञा के साथ आते हैं।"
  },
  {
    "question_en": "In 'utnā kām' (that much work), 'utnā' indicates what meaning relative to 'kitnā' (how much) or 'jitnā' (as much as)?",
    "question_hi": "'उतना काम' में 'उतना' शब्द 'कितना' या 'जितना' के सापेक्ष किस अर्थ को इंगित करता है?",
    "options_en": ["Place", "Time", "Quantity (Pariman)", "Reason"],
    "options_hi": ["स्थान", "समय", "परिमाण", "कारण"],
    "correct_option_index": 2,
    "explanation_en": "'Utnā kām' (That much work) indicates quantity (pariman).",
    "explanation_hi": "'उतना काम' (That much work) परिमाण को इंगित करता है।"
  },
  {
    "question_en": "In 'Ve sab nirādar hain.' (They are all disrespectful), 'Ve' (They) is an example of which type of pronoun?",
    "question_hi": "'वे सब निरादर हैं।' में 'वे' शब्द किस प्रकार के सर्वनाम का उदाहरण है?",
    "options_en": ["Indefinite (Anishchayavachak)", "Personal (Purushvachak) (Third Person)", "Reflexive (Nijvachak)", "Relative (Sambandhvachak)"],
    "options_hi": ["अनिश्चयवाचक", "पुरुषवाचक (अन्य पुरुष)", "निजवाचक", "संबंधवाचक"],
    "correct_option_index": 1,
    "explanation_en": "'Ve' (they) comes in place of a plural noun.",
    "explanation_hi": "'वे' (they) संज्ञा के बहुवचन के स्थान पर आता है।"
  },
  {
    "question_en": "A pronoun can indirectly assist in which inflection (vikar) of the verb?",
    "question_hi": "सर्वनाम का प्रयोग क्रिया के किस विकार में परोक्ष रूप से सहायक हो सकता है?",
    "options_en": ["Name of the verb", "Number and Person of the verb", "Action of the verb", "Only the speed of the verb"],
    "options_hi": ["क्रिया का नाम", "क्रिया के वचन और पुरुष", "क्रिया का व्यापार", "केवल क्रिया की गति"],
    "correct_option_index": 1,
    "explanation_en": "The number and person of the verb are determined by the subject (noun or pronoun).",
    "explanation_hi": "क्रिया के वचन और पुरुष का निर्धारण कर्ता (संज्ञा या सर्वनाम) के अनुसार होता है।"
  },
  {
    "question_en": "In 'Vah āṭā pisāne gayā hai.' (He has gone to get flour milled), 'Vah' (He) is an example of which pronoun?",
    "question_hi": "'वह आटा पिसाने गया है।' में 'वह' शब्द किस सर्वनाम का उदाहरण है?",
    "options_en": ["Demonstrative (Nishchayavachak)", "Personal (Purushvachak) (Third Person)", "Indefinite (Anishchayavachak)", "Reflexive (Nijvachak)"],
    "options_hi": ["निश्चयवाचक", "पुरुषवाचक (अन्य पुरुष)", "अनिश्चयवाचक", "निजवाचक"],
    "correct_option_index": 1,
    "explanation_en": "'Vah' (he/she) is used for a third person.",
    "explanation_hi": "'वह' (he/she) अन्य व्यक्ति के लिए प्रयुक्त होता है।"
  },
  {
    "question_en": "If the pronoun 'Ham' (We) is used in place of the First Person to show extreme respect (or humility), what noun words does the speaker/writer use for themselves?",
    "question_hi": "यदि 'हम' सर्वनाम का प्रयोग आदर की पराकाष्ठा सूचित करने के लिए उत्तम पुरुष के स्थान पर किया जाए, तो वक्ता/लेखक अपने लिए किन संज्ञा शब्दों का प्रयोग करता है?",
    "options_en": ["Tum, Aap (You)", "Das, Sevak (Slave, Servant)", "Ve, Yah (They, This)", "Koi, Kuchh (Some)"],
    "options_hi": ["तुम, आप", "दास, सेवक", "वे, यह", "कोई, कुछ"],
    "correct_option_index": 1,
    "explanation_en": "To show extreme respect (humility), the speaker/writer uses words like 'Das' (slave), 'Sevak' (servant) for themselves.",
    "explanation_hi": "आदर की पराकाष्ठा सूचित करने के लिए वक्ता/लेखक अपने लिए 'दास', 'सेवक' आदि शब्दों का प्रयोग करता है।"
  },
  {
    "question_en": "When the pronoun 'Tum' (You) is transformed into the plural (vachan), what change occurs in its pronunciation (or form)?",
    "question_hi": "'तुम' सर्वनाम का 'बहुवचन' में रूपांतरण होने पर उसके उच्चारण में क्या परिवर्तन आता है?",
    "options_en": ["An anusvara (dot) is added.", "The vowel becomes long.", "No change.", "Only the gender changes."],
    "options_hi": ["अनुस्वार आता है।", "स्वर दीर्घ हो जाता है।", "कोई परिवर्तन नहीं।", "केवल लिंग बदलता है।"],
    "correct_option_index": 0,
    "explanation_en": "An anusvara (nasalization) is added due to the inflection of number (e.g., 'karūn', 'laṛkoṇ') (also applies to pronouns).",
    "explanation_hi": "वचन के विकार के कारण अनुस्वार आता है (जैसे: 'करूँ', 'लड़कों') (सर्वनाम पर भी लागू)।"
  },
  {
    "question_en": "If the word 'sab' (all) is used as 'ham sab' (we all) or 've sab' (they all), under which part of speech does it fall?",
    "question_hi": "'सब' शब्द का प्रयोग यदि 'हम सब' या 'वे सब' के रूप में हो, तो वह किस शब्द-भेद के अंतर्गत आएगा?",
    "options_en": ["Numeral Adjective", "Quantitative Adjective", "An auxiliary to the pronoun", "Conjunction"],
    "options_hi": ["संख्यावाचक विशेषण", "परिमाणवाचक विशेषण", "सर्वनाम का सहायक", "समुच्चयबोधक"],
    "correct_option_index": 2,
    "explanation_en": "'Sab' (all) joins with the pronoun (ham/ve) to denote number.",
    "explanation_hi": "'सब' सर्वनाम (हम/वे) के साथ जुड़कर संख्या का बोध कराता है।"
  },
  {
    "question_en": "In 'Tumhein', the transformation of 'Tum' is due to accepting which case marker (karak chinh)?",
    "question_hi": "'तुम्हें' में 'तुम' का रूपांतरण किस कारक चिन्ह को ग्रहण करने के कारण हुआ है?",
    "options_en": ["'se' (from/by)", "'kā' (of)", "'ko' (to)", "'mein' (in)"],
    "options_hi": ["'से'", "'का'", "'को'", "'में'"],
    "correct_option_index": 2,
    "explanation_en": "'Tumhein' = Tum + Ko (Objective or Dative case).",
    "explanation_hi": "'तुम्हें' = तुम + को (कर्म या सम्प्रदान कारक)।"
  },
  {
    "question_en": "In which given context is the pronoun 'Ham' (We) used for the 'Nation'?",
    "question_hi": "'हम' सर्वनाम, दिए गए किस संदर्भ में 'राष्ट्र' के लिए प्रयुक्त हुआ है?",
    "options_en": ["'Kyā hamāre desh mein hālat isse kuchh alag hai?' (Is the situation in our country any different?)", "'Ham Bihariyon ko batāenge' (We will tell the Biharis)", "'Hamāre priya rachnākār' (Our dear creators)", "'Ham nahākar āte hain.' (We will come after bathing)"],
    "options_hi": ["'क्या हमारे देश में हालत इससे कुछ अलग है?'", "'हम बिहारीयों को बताएँगे'", "'हमारे प्रिय रचनाकार'", "'हम नहाकर आते हैं।'"],
    "correct_option_index": 2,
    "explanation_en": "'Hamāre' (Our) (transformation of 'Ham') [This is the closest context implying 'our nation's' creators].",
    "explanation_hi": "'हमारे' (हम का रूपांतरण)"
  },
  {
    "question_en": "In the (sentence) 'Tumhein yah kām' (You this work), 'Tumhein' is the subject. In what form is 'Yah' (kām) (This (work)) here?",
    "question_hi": "'तुम्हें यह काम' (वाक्य) में 'तुम्हें' कर्ता है। 'यह' (काम) यहाँ किस रूप में है?",
    "options_en": ["Noun", "Pronoun", "Adjective", "Compound Pronoun"],
    "options_hi": ["संज्ञा", "सर्वनाम", "विशेषण", "यौगिक सर्वनाम"],
    "correct_option_index": 1,
    "explanation_en": "'Yah' (This) does not accompany the noun (kām) [as an adjective], but rather determines the noun (kām). [Slight ambiguity, but it functions pronominally to point out the noun].",
    "explanation_hi": "यह संज्ञा (काम) के साथ न आकर, संज्ञा (काम) को निर्धारित कर रहा है।"
  },
  {
    "question_en": "The compound pronominal adjective 'kaisā' (what kind of) is helpful in asking what type of questions?",
    "question_hi": "यौगिक सार्वनामिक विशेषण 'कैसा' किस प्रकार के प्रश्नों में सहायक है?",
    "options_en": ["Determination", "Comparison", "Quality or State", "Separation"],
    "options_hi": ["निर्धारण", "तुलना", "गुण या अवस्था", "अलगाव"],
    "correct_option_index": 2,
    "explanation_en": "'Kaisā ghar' (What kind of house) helps in asking about the state or quality.",
    "explanation_hi": "'कैसा घर' अवस्था या गुण जानने में सहायक है।"
  },
  {
    "question_en": "When 'Koi' (original pronoun) is used with a noun, its meaning is often the same as the pronoun, but sometimes it has a special characteristic. What is the reason for this?",
    "question_hi": "'कोई' (मूल सर्वनाम) का प्रयोग संज्ञा के साथ होने पर उसका अर्थ बहुधा सर्वनामों के समान ही होता है, पर कहीं-कहीं उसमें कुछ विशेषता पाई जाती है। इसका क्या कारण है?",
    "options_en": ["It always shows certainty.", "It always remains indeclinable.", "It specifies the noun, either definitely or indefinitely.", "It is only interrogative."],
    "options_hi": ["वह हमेशा निश्चितता दर्शाता है।", "वह सदैव अविकारी रहता है।", "वह संज्ञा को निश्चित या अनिश्चित रूप से विशेषित करता है।", "यह केवल प्रश्नवाचक होता है।"],
    "correct_option_index": 2,
    "explanation_en": "The meaning of original pronominal adjectives is the same as pronouns, but sometimes they have some specialty (they specify the noun).",
    "explanation_hi": "मूल सार्वनामिक विशेषणों का अर्थ सर्वनामों के समान ही होता है, परंतु कहीं-कहीं उनमें कुछ विशेषता पाई जाती है।"
  },
  {
    "question_en": "If the case marker 'ko' (to) is elided from 'Tumhein' (Tum + ko), what form will the word 'Tum' (You) take?",
    "question_hi": "यदि 'तुम्हें' (तुम + को) में 'को' कारक चिन्ह लुप्त हो जाए, तो 'तुम' शब्द का रूप क्या रहेगा?",
    "options_en": ["Tum", "Tumhein", "Tumko", "Tumhīn"],
    "options_hi": ["तुम", "तुम्हें", "तुमको", "तुम्हीं"],
    "correct_option_index": 0,
    "explanation_en": "The 'ne' (nominative) marker is elided in the nominative case, and other markers can also be elided. 'Tumhein' is transformed *because* of the marker.",
    "explanation_hi": "कर्ता कारक में विभक्ति (ने) का लोप होता है, और कर्म/सम्प्रदान कारक में भी विभक्तियाँ लुप्त हो सकती हैं। 'तुम्हें' विभक्ति लगने के कारण रूपांतरित हुआ है।"
  },
  {
    "question_en": "In 'Ham dono' (We both) or 'Ham pānch' (We five), the pronoun 'Ham' (We) can be combined with what type of numerical adjective?",
    "question_hi": "'हम दोनों' या 'हम पाँच' में 'हम' सर्वनाम किस प्रकार के संख्यात्मक विशेषण के साथ संयुक्त हो सकता है?",
    "options_en": ["Fractional number", "Cardinal Adjective (Purnankbodhak)", "Ordinal number", "Qualitative Adjective"],
    "options_hi": ["अपूर्ण संख्या", "पूर्णांकबोधक विशेषण", "क्रमवाचक संख्या", "गुणवाचक विशेषण"],
    "correct_option_index": 1,
    "explanation_en": "The pronoun combines with adjectives denoting number (like two, five).",
    "explanation_hi": "सर्वनाम संख्या बताने वाले विशेषणों (जैसे दो, पाँच) के साथ संयुक्त होता है।"
  },
  {
    "question_en": "The pronoun 'Ham' (We) is often used in which case (Karak) that establishes its relation with the verb?",
    "question_hi": "'हम' सर्वनाम का प्रयोग अक्सर किस कारक के रूप में होता है, जो क्रिया के साथ संबंध स्थापित करता है?",
    "options_en": ["Objective (Karma)", "Locative (Adhikaran)", "Nominative (Karta)", "Ablative (Apadan)"],
    "options_hi": ["कर्म कारक", "अधिकरण कारक", "कर्ता कारक", "अपादान कारक"],
    "correct_option_index": 2,
    "explanation_en": "In most sentences, 'Ham' (We) is used as the Karta (Doer) (e.g., 'Ham jānte hain' - We know).",
    "explanation_hi": "अधिकांश वाक्यों में 'हम' कर्ता (Doer) के रूप में प्रयुक्त होता है (जैसे: 'हम जानते हैं')।"
  },
  {
    "question_en": "What is the Genitive (Sambandh) case form of the pronoun 'Ham' (We)?",
    "question_hi": "'हम' सर्वनाम का संबंध कारक रूप क्या है?",
    "options_en": ["Hamko (To us)", "Hamse (From/By us)", "Hamārā/Hamārī/Hamāre (Our)", "Hammein (In us)"],
    "options_hi": ["हमको", "हमसे", "हमारा/हमारी/हमारे", "हममें"],
    "correct_option_index": 2,
    "explanation_en": "The genitive case shows mutual relation between nouns, and its markers are 'kā', 'kī', 'ke'.",
    "explanation_hi": "संबंध कारक संज्ञाओं के बीच परस्पर संबंध बताता है, और इसका चिन्ह 'का', 'की', 'के' होता है।"
  },
  {
    "question_en": "Which of the following examples shows a compound pronominal adjective?",
    "question_hi": "निम्नलिखित में से कौन-सा उदाहरण यौगिक सार्वनामिक विशेषण को दर्शाता है?",
    "options_en": ["Yah ghar (This house)", "Vah kām (That work)", "Aisā ādmī (Such a man)", "Koi vastu (Some object)"],
    "options_hi": ["यह घर", "वह काम", "ऐसा आदमी", "कोई वस्तु"],
    "correct_option_index": 2,
    "explanation_en": "'Aisā' (Such) is formed by adding a suffix to an original pronoun.",
    "explanation_hi": "'ऐसा' मूल सर्वनाम में प्रत्यय लगाकर बना है।"
  },
  {
    "question_en": "In which given context is the (original pronoun) word 'Vah' (That) used as an adverb of place?",
    "question_hi": "'वह' शब्द (मूल सर्वनाम) का प्रयोग दिए गए किस संदर्भ में स्थानवाचक क्रियाविशेषण के रूप में होता है?",
    "options_en": ["'Vah āṭā pisāne gayā hai.' (He went to get flour milled)", "'Vah hamse alag rahtā hai.' (He lives separately from us)", "'Vah ghar' (That house)", "'Yahān/Vahān' (Here/There) (Adverb of place)"],
    "options_hi": ["'वह आटा पिसाने गया है।'", "'वह हमसे अलग रहता है।'", "'वह घर'", "'यहाँ/वहाँ' (स्थानवाचक)"],
    "correct_option_index": 3,
    "explanation_en": "Adverbs formed from pronouns.",
    "explanation_hi": "सर्वनाम से बने क्रियाविशेषण।"
  },
  {
    "question_en": "Why is a pronoun considered a way to avoid the error of noun repetition (punarukti)?",
    "question_hi": "सर्वनाम को संज्ञा की पुनरुक्ति के दोष से बचने का एक उपाय क्यों माना जाता है?",
    "options_en": ["So that the sentence can have figures of speech.", "So that the language remains concise and natural.", "So that there is no inflection (vikar) in the sentence.", "So that only the singular form is used."],
    "options_hi": ["ताकि वाक्य में अलंकार आ सके।", "ताकि भाषा संक्षिप्त और स्वाभाविक रहे।", "ताकि वाक्य में विकार न हो।", "ताकि केवल एकवचन का प्रयोग हो।"],
    "correct_option_index": 1,
    "explanation_en": "Pronouns avoid repeating the noun, making the sentence well-formed.",
    "explanation_hi": "सर्वनाम संज्ञा को दोहराने से बचाकर वाक्य को सुगठित बनाता है।"
  },
  {
    "question_en": "If 'Vah' (original pronoun) is used for the feminine singular, what will the form of the verb be?",
    "question_hi": "यदि 'वह' (मूल सर्वनाम) का प्रयोग स्त्रीलिंग एकवचन के लिए हो, तो क्रिया का रूप क्या होगा?",
    "options_en": ["jātā hai (goes - masc.)", "jātī hai (goes - fem.)", "jāte hain (go - plural/respect)", "jāte the (used to go - plural)"],
    "options_hi": ["जाता है", "जाती है", "जाते हैं", "जाते थे"],
    "correct_option_index": 1,
    "explanation_en": "The verb changes according to the gender/number of the pronoun.",
    "explanation_hi": "सर्वनाम के लिंग/वचन के अनुसार क्रिया में परिवर्तन होता है।"
  },
  {
    "question_en": "When is the (pronoun) 'Yah' (This) considered demonstrative (Nishchayavachak)?",
    "question_hi": "'यह' (सर्वनाम) का प्रयोग कब निश्चयवाचक माना जाता है?",
    "options_en": ["When it points to a distant object.", "When it points definitely to a nearby object or person.", "When it asks a question.", "When it establishes a relation."],
    "options_hi": ["जब यह किसी दूर की वस्तु को इंगित करता है।", "जब यह किसी पास की वस्तु या व्यक्ति को निश्चित रूप से इंगित करता है।", "जब यह प्रश्न पूछता है।", "जब यह संबंध स्थापित करता है।"],
    "correct_option_index": 1,
    "explanation_en": "'Yah' (This) shows proximity and certainty (e.g., 'This is Shakuntala').",
    "explanation_hi": "'यह' (This) निकटता और निश्चितता दर्शाता है (जैसे: 'यह शकुंतला')।"
  },
  {
    "question_en": "The pronoun 'Main' (I) transforms into 'Merā' (My) due to which case (Karak)?",
    "question_hi": "'मैं' (सर्वनाम) का रूपांतरण किस कारक के कारण 'मेरा' में होता है?",
    "options_en": ["Objective (Karma)", "Instrumental (Karan)", "Genitive (Sambandh)", "Locative (Adhikaran)"],
    "options_hi": ["कर्म कारक", "करण कारक", "संबंध कारक", "अधिकरण कारक"],
    "correct_option_index": 2,
    "explanation_en": "'Merā' (My) is the marker of the Genitive case.",
    "explanation_hi": "'मेरा' संबंध कारक का चिन्ह है।"
  },
  {
    "question_en": "What is the main reason for the transformation (rupantaran) of pronouns?",
    "question_hi": "सर्वनामों के रूपांतरण का मुख्य कारण क्या है?",
    "options_en": ["To introduce wordplay (Shabdalankar).", "To manipulate meaning, such as changing number and case.", "To keep the verb stable.", "To make it indeclinable (Avikari)."],
    "options_hi": ["(a) शब्दालंकार लाना", "(b) अर्थ में हेरफेर करना, जैसे वचन और कारक बदलना", "(c) क्रिया को स्थिर रखना", "(d) अविकारी बनाना"],
    "correct_option_index": 1,
    "explanation_en": "Transformation (rupantaran) manipulates the word's meaning, e.g., 'laṛkā' (boy) to 'laṛkoṇ' (boys'). (Note: Pronouns change for case/number, not gender).",
    "explanation_hi": "रूपांतरण से शब्द के अर्थ में हेरफेर होता है, जैसे 'लड़का' से 'लड़कों' (सर्वनाम में वचन और कारक बदलते हैं)।"
  },
  {
    "question_en": "In 'Yadi kisī (dher ij) kisī (oLrq dh) māṅg mein pratishat parivartan...' (If the percentage change in demand of some object...), what is the grammatical function of the word 'kisī' (some)?",
    "question_hi": "'यदि किसी (dher ij) किसी (oLrq dh) ek¡x esa izfr'kr ifjorZu...' में प्रयुक्त 'किसी' शब्द का व्याकरणिक कार्य क्या है?",
    "options_en": ["Adjective", "Indefinite Pronoun", "Conjunction", "Postposition"],
    "options_hi": ["विशेषण", "अनिश्चितता सूचक सर्वनाम", "समुच्चयबोधक", "संबंधसूचक"],
    "correct_option_index": 1,
    "explanation_en": "'Kisī' (some/any) is an indefinite pronoun (or pronominal adjective, indicating uncertainty of the noun).",
    "explanation_hi": "'किसी' अनिश्चितता सूचक सर्वनाम है (सर्वनाम, संज्ञा की अनिश्चितता बताता है)।"
  },
  {
    "question_en": "In which given context is the pronoun 'Tum' (You) used as a command or request?",
    "question_hi": "'तुम' सर्वनाम का प्रयोग दिए गए किस संदर्भ में आदेश या अनुरोध के रूप में किया गया है?",
    "options_en": ["'Tum is bāt ko kaun rakhegā.' (Who will keep this matter of yours?)", "'Tumne Vipin kī nāk mein dam kar rakhā hai.' (You have annoyed Vipin.)", "'Tumne to use nākoṇ chane chabwā diye.' (You made him suffer.)", "'Tum aaj 100 bār likhoge' (You will write this 100 times today)"],
    "options_hi": ["'तुम इस बात को कौन रखेगा।'", "'तुमने विपिन की नाक में दम कर रखा है।'", "'तुमने तो उसे नाकौं चने चबवा दिये।'", "'तुम आज 100 बार लिखोगे'"],
    "correct_option_index": 3,
    "explanation_en": "This context (teacher to monitor) has an imperative (command) mood.",
    "explanation_hi": "यह संदर्भ (मॉनिटर से शिक्षक) में आदेशात्मक भाव है।"
  },
  {
    "question_en": "Why is the pronoun 'Main' (I) used as the 'First Person' (Uttam Purush)?",
    "question_hi": "'मैं' सर्वनाम का प्रयोग 'उत्तम पुरुष' के रूप में क्यों होता है?",
    "options_en": ["Because the speaker/writer uses it for themselves.", "Because it is used for the person being directly addressed.", "Because it is used for another person.", "Because it asks a question."],
    "options_hi": ["क्योंकि यह वक्ता/लेखक स्वयं के लिए प्रयोग करता है।", "क्योंकि यह सीधे संबोधित व्यक्ति के लिए प्रयोग होता है।", "क्योंकि यह किसी अन्य व्यक्ति के लिए प्रयोग होता है।", "क्योंकि यह प्रश्न पूछता है।"],
    "correct_option_index": 0,
    "explanation_en": "'Main' (I) is the First Person.",
    "explanation_hi": "'मैं' उत्तम पुरुष है।"
  },
  {
    "question_en": "If the word 'koi' (someone) is used in place of a noun and its meaning is not 'definite', which pronoun type does it indicate?",
    "question_hi": "यदि 'कोई' शब्द संज्ञा के स्थान पर प्रयोग हो और उसका अर्थ 'निश्चित' न हो, तो वह किस सर्वनाम भेद को इंगित करता है?",
    "options_en": ["Demonstrative (Nishchayavachak)", "Personal (Purushvachak)", "Indefinite (Anishchayavachak)", "Interrogative (Prashnavachak)"],
    "options_hi": ["निश्चयवाचक", "पुरुषवाचक", "अनिश्चयवाचक", "प्रश्नवाचक"],
    "correct_option_index": 2,
    "explanation_en": "It denotes uncertainty.",
    "explanation_hi": "यह अनिश्चितता का बोध कराता है।"
  },
  {
    "question_en": "What number and person does the pronoun 'Ve' (They) represent?",
    "question_hi": "'वे' (सर्वनाम) का प्रयोग किस वचन और पुरुष को दर्शाता है?",
    "options_en": ["Singular, First Person", "Plural, Second Person", "Plural, Third Person", "Singular, Second Person"],
    "options_hi": ["एकवचन, उत्तम पुरुष", "बहुवचन, मध्यम पुरुष", "बहुवचन, अन्य पुरुष", "एकवचन, मध्यम पुरुष"],
    "correct_option_index": 2,
    "explanation_en": "'Ve' (they) is used for a third person or object in the plural.",
    "explanation_hi": "'वे' (they) अन्य व्यक्ति या वस्तु के लिए बहुवचन में प्रयुक्त होता है।"
  },
  {
    "question_en": "What is the plural form of the (original pronoun) 'Yah' (This)?",
    "question_hi": "'यह' (मूल सर्वनाम) का बहुवचन रूप क्या होगा?",
    "options_en": ["Vah (That)", "Ye (These)", "Koi (Some)", "Kuchh (Some)"],
    "options_hi": ["वह", "ये", "कोई", "कुछ"],
    "correct_option_index": 1,
    "explanation_en": "The plural of 'Yah' (singular) is 'Ye'.",
    "explanation_hi": "'यह' (एकवचन) का बहुवचन 'ये' होता है।"
  },
  {
    "question_en": "When parsing the pronoun 'Tumhein', what will its person (Purush) be?",
    "question_hi": "'तुम्हें' सर्वनाम का पद-परिचय करते समय उसका पुरुष क्या होगा?",
    "options_en": ["First Person (Uttam)", "Second Person (Madhyam)", "Third Person (Anya)", "Common Person (Samanya)"],
    "options_hi": ["उत्तम पुरुष", "मध्यम पुरुष", "अन्य पुरुष", "सामान्य पुरुष"],
    "correct_option_index": 1,
    "explanation_en": "'Tum' (Tumhein) is the Second Person.",
    "explanation_hi": "'तुम' (तुम्हें) मध्यम पुरुष है।"
  },
  {
    "question_en": "In the sentence 'Usne merī bāt bhī nahīn sunī.' (He/She didn't even listen to me), 'Usne' is the modified form of what?",
    "question_hi": "'उसने मेरी बात भी नहीं सुनी।' इस वाक्य में 'उसने' किसका रूपांतरित रूप है?",
    "options_en": ["Main (I)", "Yah (This)", "Tum (You)", "Vah (He/She/That)"],
    "options_hi": ["मैं", "यह", "तुम", "वह"],
    "correct_option_index": 3,
    "explanation_en": "'Vah' + 'ne' = Usne (Transformation in the Nominative case).",
    "explanation_hi": "'वह' + ने = उसने (कर्ता कारक में रूपांतरण)।"
  },
  {
    "question_en": "In the sentence 'Tumhein yah kām karne mein kyā karnā hai?', what might be the case (Karak) of 'yah kām' (this work)?",
    "question_hi": "'तुम्हें यह काम करने में क्या करना है?' इस वाक्य में 'यह' (काम) का कारक क्या होगा?",
    "options_en": ["Nominative (Karta)", "Objective (Karma)", "Genitive (Sambandh)", "Locative (Adhikaran)"],
    "options_hi": ["कर्ता", "कर्म", "संबंध", "अधिकरण"],
    "correct_option_index": 0,
    "explanation_en": "'Yah kām' (This work) is the subject (karta) of the sentence here. [Ambiguous: 'tumhein' is dative/subject, 'kya' is object, 'karna' is verb. 'yah kaam' is related to 'karne mein' (locative), but the prompt implies 'yah kaam' is the subject, matching option A].",
    "explanation_hi": "'यह काम' यहाँ वाक्य का कर्ता (विषय) है।"
  },
  {
    "question_en": "In 'hamārī bhāṣā' (our language), the word 'hamārī' is the transformation of the pronoun 'Ham' (We) in which case (Karak)?",
    "question_hi": "'हमारी भाषा' में 'हमारी' शब्द 'हम' सर्वनाम के किस कारक का रूपांतरण है?",
    "options_en": ["Objective (Karma)", "Instrumental (Karan)", "Genitive (Sambandh)", "Locative (Adhikaran)"],
    "options_hi": ["कर्म कारक", "करण कारक", "संबंध कारक", "अधिकरण कारक"],
    "correct_option_index": 2,
    "explanation_en": "'Hamārī' (Our) is the Genitive case.",
    "explanation_hi": "'हमारी' संबंध कारक है।"
  },
  {
    "question_en": "When using the pronoun 'Kaun' (Who) to ask a 'question', what determines the form of the verb?",
    "question_hi": "'कौन' (सर्वनाम) का प्रयोग करते हुए यदि 'प्रश्न' पूछना हो, तो क्रिया का रूप कौन निर्धारित करता है?",
    "options_en": ["The Subject/Pronoun (Karta/Sarvnam)", "The Object (Karma)", "The Tense (Kaal)", "The Adverb (Kriyavisheshan)"],
    "options_hi": ["कर्ता/सर्वनाम", "कर्म", "काल", "क्रियाविशेषण"],
    "correct_option_index": 0,
    "explanation_en": "The pronoun takes the place of the subject (Karta), which determines the form of the verb.",
    "explanation_hi": "सर्वनाम कर्ता का स्थान लेता है, जो क्रिया का रूप निर्धारित करता है।"
  },
  {
    "question_en": "In compound pronominal adjectives, which transformation is derived from the word 'kitnā' (how much)?",
    "question_hi": "यौगिक सार्वनामिक विशेषण में 'कितना' शब्द से बना रूपांतरण कौन सा है?",
    "options_en": ["Vah (That)", "Kaisā (What kind of)", "Utnā (That much)", "Koi (Some)"],
    "options_hi": ["वह", "कैसा", "उतना", "कोई"],
    "correct_option_index": 2,
    "explanation_en": "'Utnā' (that much) indicates quantity/amount.",
    "explanation_hi": "'उतना' परिमाण/मात्रा बताता है।"
  },
  {
    "question_en": "In which given quote is the pronoun 'Ve' (They) used for objects/things?",
    "question_hi": "'वे' सर्वनाम का प्रयोग दिए गए किस उद्धरण में वस्तुओं के लिए हुआ है?",
    "options_en": ["'Ve sab nirādar hain.' (They are all disrespectful)", "'Ve kānūn sāmājik nyāy kī chintāon ko kis had tak sambodhit karte hain?' (To what extent do those laws address social justice concerns?)", "'Ve apne sāptāhik vetan se vyay ko sīdhe kāṭ kar...' (They directly cut expenses from their weekly salary...)", "'Ve ise bāzār mein kharīd-bechā jā saktā hai.' (It [they] can be bought and sold in the market)"],
    "options_hi": ["'वे सब निरादर हैं।'", "'वे कानून सामाजिक न्याय की चिंताओं को किस हद तक संबोधित करते हैं?'", "'वे अपने साप्ताहिक वेतन से व्यय को सीधे काट कर...'", "'वे इसे बाजार में खरीद-बेचा जा सकता है।'"],
    "correct_option_index": 1,
    "explanation_en": "'Ve' (They/Those) is used for 'kānūn' (laws).",
    "explanation_hi": "'वे' (कानून) के लिए प्रयुक्त हुआ है।"
  },
  {
    "question_en": "What are the masculine and feminine forms of the pronoun 'Tumhein' (You)?",
    "question_hi": "'तुम्हें' सर्वनाम का पुल्लिंग और स्त्रीलिंग रूप क्या होता है?",
    "options_en": ["Masc: Tum, Fem: Tumhīn", "Masc: Tumhein, Fem: Tumhem̐", "It remains the same in both.", "Masc: Tū, Fem: Tum"],
    "options_hi": ["पुल्लिंग: तुम, स्त्रीलिंग: तुम्हीं", "पुल्लिंग: तुम्हें, स्त्रीलिंग: तुम्हेँ", "दोनों में समान रहता है।", "पुल्लिंग: तू, स्त्रीलिंग: तुम"],
    "correct_option_index": 2,
    "explanation_en": "Pronouns do not transform based on gender, but rather on number and case.",
    "explanation_hi": "सर्वनामों में लिंग के कारण रूपांतरण नहीं होता, बल्कि वचन और कारक के कारण होता है।"
  },
  {
    "question_en": "In which given context is the pronoun 'Ham' (We) used in a passive sense?",
    "question_hi": "'हम' सर्वनाम का उपयोग दिए गए किस संदर्भ में निष्क्रिय भाव को दर्शाता है?",
    "options_en": ["'Ham Bihariyon ko batāenge' (We will tell the Biharis)", "'Ham ek mahān loktāntrik prayog ke rūp mein khyāti milī hai.' (We have received fame as a great democratic experiment)", "'Ham jānte hain' (We know)", "'Ham unse apekṣā rakhte hain' (We expect from them)"],
    "options_hi": ["'हम बिहारीयों को बताएँगे'", "'हम एक महान लोकतांत्रिक प्रयोग के रूप में ख्याति मिली है।'", "'हम जानते हैं'", "'हम उनसे अपेक्षा रखते हैं'"],
    "correct_option_index": 1,
    "explanation_en": "'Ham' (We/India) is the object/recipient of the action (fame), not the doer (Passive context).",
    "explanation_hi": "'हम' (भारत) यहाँ क्रिया का विषय है, न कि कर्ता (Passive context)।"
  },
  {
    "question_en": "In 'hamārā desh' (our country), what is the word 'hamārā' called in grammar?",
    "question_hi": "'हमारा देश' में 'हमारा' शब्द, व्याकरण में क्या कहलाता है?",
    "options_en": ["Adverb", "Qualitative Adjective", "Genitive Pronominal Adjective", "Verb"],
    "options_hi": ["क्रियाविशेषण", "गुणवाचक विशेषण", "संबंधसूचक सार्वनामिक विशेषण", "क्रिया"],
    "correct_option_index": 2,
    "explanation_en": "'Hamārā' (Our) is the genitive case transformation of the pronoun 'Ham' (We), which accompanies the noun ('desh').",
    "explanation_hi": "'हमारा' सर्वनाम 'हम' का संबंध कारक रूपांतरण है, जो संज्ञा ('देश') के साथ आया है।"
  },
  {
    "question_en": "The plural form 'Ye' (These) of the pronoun 'Yah' (This) is used in which situation?",
    "question_hi": "'यह' सर्वनाम का बहुवचन रूप 'ये' किस परिस्थिति में प्रयोग होता है?",
    "options_en": ["Only for respect", "Only for time", "For more than one nearby object", "In place of the nominative case"],
    "options_hi": ["केवल आदर के लिए", "केवल समय के लिए", "एक से अधिक पास की वस्तुओं के लिए", "कर्ता कारक के स्थान पर"],
    "correct_option_index": 2,
    "explanation_en": "The plural of 'Yah' (This) is 'Ye' (These).",
    "explanation_hi": "'यह' का बहुवचन 'ये' होता है।"
  },
  {
    "question_en": "In the word 'Usne', the addition of 'ne' to the pronoun 'Vah' (He/She) indicates which case (Karak)?",
    "question_hi": "'उसने' शब्द में, 'वह' सर्वनाम के साथ 'ने' का योग किस कारक को इंगित करता है?",
    "options_en": ["Objective (Karma)", "Instrumental (Karan)", "Nominative (Karta)", "Dative (Sampradan)"],
    "options_hi": ["कर्म कारक", "करण कारक", "कर्ता कारक", "सम्प्रदान कारक"],
    "correct_option_index": 2,
    "explanation_en": "'Ne' is the marker for the Nominative case (Karta karak).",
    "explanation_hi": "'ने' कर्ता कारक का चिन्ह है।"
  },
  {
    "question_en": "If an adjective word is used in place of a pronoun (e.g., 'baṛoṇ kā sankalp' - the resolve of the elders), what does its grammatical function become?",
    "question_hi": "यदि विशेषण शब्द सर्वनाम के स्थान पर प्रयुक्त होता है (जैसे: 'बड़ों का संकल्प'), तो उसका व्याकरणिक कार्य क्या हो जाता है?",
    "options_en": ["It becomes a verb.", "It becomes an indeclinable (avyay).", "It becomes a noun.", "It remains only an adjective."],
    "options_hi": ["वह क्रिया बन जाता है।", "वह अव्यय बन जाता है।", "वह संज्ञा बन जाता है।", "वह केवल विशेषण रहता है।"],
    "correct_option_index": 2,
    "explanation_en": "Adjectives sometimes come in place of nouns.",
    "explanation_hi": "विशेषण कभी-कभी संज्ञा के स्थान पर आता है।"
  },
  {
    "question_en": "When the (genitive pronoun) 'Merā' (My) is used with the noun 'nām' (name), what form will it take?",
    "question_hi": "'मेरा' (संबंध कारक सर्वनाम) का प्रयोग संज्ञा 'नाम' के साथ होने पर वह किस रूप में प्रयुक्त होगा?",
    "options_en": ["nām (name)", "nām kā (of name)", "mere nām (my name)", "merī nām (my name - incorrect fem.)"],
    "options_hi": ["नाम", "नाम का", "मेरे नाम", "मेरी नाम"],
    "correct_option_index": 2,
    "explanation_en": "The genitive case changes according to the gender (and number) of the noun that follows, e.g., 'merā', 'merī', 'mere'. 'Nām' (name) often takes 'mere' in oblique cases (like 'mere nām par'). 'Merā nām' is also correct (nominative). [The question is slightly ambiguous, but 'mere nām' is a valid transformation].",
    "explanation_hi": "संबंध कारक लिंग के अनुसार बदलता है, जैसे: 'मेरा', 'मेरी', 'मेरे'।"
  },
  {
    "question_en": "If 'Kaun' (pronoun) is used to show 'uncertainty' (instead of a question), it is closest to which pronoun?",
    "question_hi": "'कौन' (सर्वनाम) का प्रयोग यदि 'अनिश्चितता' दर्शाने के लिए हो (प्रश्न के बजाय), तो वह किस सर्वनाम से निकटता रखता है?",
    "options_en": ["'Jo' (Who/Which - relative)", "'Kuchh' (Some - indefinite)", "'Tum' (You)", "'Yah' (This)"],
    "options_hi": ["'जो'", "'कुछ'", "'तुम'", "'यह'"],
    "correct_option_index": 1,
    "explanation_en": "'Kuchh' (Some) is indefinite.",
    "explanation_hi": "'कुछ' अनिश्चयवाचक है।"
  },
  {
    "question_en": "What is the difference between pronouns and verbs regarding transformation (rupantaran)?",
    "question_hi": "सर्वनाम और क्रिया में रूपांतरण के संदर्भ में क्या अंतर है?",
    "options_en": ["Pronouns do not transform due to gender, whereas verbs do.", "Verbs only transform due to case.", "Both pronouns and verbs only transform due to number.", "There is no transformation in either."],
    "options_hi": ["सर्वनाम में लिंग के कारण रूपांतरण नहीं होता, जबकि क्रिया में होता है।", "क्रिया में केवल कारक के कारण रूपांतरण होता है।", "सर्वनाम और क्रिया दोनों में केवल वचन के कारण रूपांतरण होता है।", "दोनों में कोई रूपांतरण नहीं होता।"],
    "correct_option_index": 0,
    "explanation_en": "Pronouns do not have gender inflection (their gender is determined by the noun they replace, which affects the verb).",
    "explanation_hi": "सर्वनाम में लिंग का विकार नहीं होता।"
  },
  {
    "question_en": "In 'kuchh kām' (some work), what characteristic of 'kām' (work) is the word 'kuchh' (some) describing?",
    "question_hi": "'कुछ काम' में 'कुछ' शब्द काम की किस विशेषता को बता रहा है?",
    "options_en": ["Definite number", "Indefinite quantity", "Certainty", "Place"],
    "options_hi": ["निश्चित संख्या", "अनिश्चित परिमाण", "निश्चितता", "स्थान"],
    "correct_option_index": 1,
    "explanation_en": "'Kuchh' (some) indicates an indefinite quantity.",
    "explanation_hi": "'कुछ' अनिश्चित परिमाण बताता है।"
  },
  {
    "question_en": "What will be the Genitive (Sambandh) case transformation of 'Vah' (He/She/That)?",
    "question_hi": "'वह' (सर्वनाम) का संबंध कारक रूपांतरण क्या होगा?",
    "options_en": ["Us (Him/Her/That - oblique)", "Unkā (His/Her/Their)", "Use (To him/her)", "Usmein (In him/her)"],
    "options_hi": ["उस", "उनका", "उसे", "उसमें"],
    "correct_option_index": 1,
    "explanation_en": "'Unkā/Unkī/Unke' (His/Her/Their/Its) are the genitive case forms.",
    "explanation_hi": "'उनका/उनकी/उनके' संबंध कारक हैं।"
  },
  {
    "question_en": "In which given context is the pronoun 'Ham' (We) used as an instrument or beneficiary?",
    "question_hi": "'हम' सर्वनाम का उपयोग दिए गए किस संदर्भ में साधन (Instrument) के रूप में हुआ है?",
    "options_en": ["'Ham keval kahne aur dikhāne ke liye ho.' (We are only for telling and showing.)", "'Ham Bihariyon ko batāenge' (We will tell the Biharis)", "'Vah hamāre liye vibhinn kārya karne ke liye upyogī hain.' (They are useful for doing various tasks for us.)", "'Ham apnī rāy pūrī kakṣā ke sāmne paṛhkar sunāenge.' (We will read our opinion aloud to the whole class.)"],
    "options_hi": ["'हम केवल कहने और दिखाने के लिए हो।'", "'हम बिहारीयों को बताएँगे'", "'वह हमारे लिए विभिन्न कार्य करने के लिए उपयोगी हैं।'", "'हम अपनी राय पूरी कक्षा के सामने पढ़कर सुनाएँगे।'"],
    "correct_option_index": 2,
    "explanation_en": "'Hamāre liye' (for us) is in the Dative (Sampradan) or Genitive case context.",
    "explanation_hi": "'हमारे लिए' (for us) सम्प्रदान या संबंध कारक के रूप में।"
  },
  {
    "question_en": "What type of relationship do 'Jaisā' (as) and 'Vaisā' (so) (compound pronouns) establish?",
    "question_hi": "'जैसा' और 'वैसा' (यौगिक सर्वनाम) किस प्रकार के संबंध को स्थापित करते हैं?",
    "options_en": ["Cause-Effect", "Definite-Indefinite", "Relative", "Question-Answer"],
    "options_hi": ["कारण-कार्य", "निश्चय-अनिश्चय", "संबंध", "प्रश्न-उत्तर"],
    "correct_option_index": 2,
    "explanation_en": "These are forms of the Relative Pronoun (e.g., 'Jaisā karoge, vaisā bharoge' - As you sow, so shall you reap).",
    "explanation_hi": "ये संबंधवाचक सर्वनाम के रूप हैं (जैसे 'जैसा करोगे, वैसा भरोगे')।"
  },
  {
    "question_en": "In the sentence 'Tumhein yah kām karne mein kyā karnā hai?', what could be the case (Karak) of 'kyā' (pronoun)?",
    "question_hi": "'तुम्हें यह काम करने में क्या करना है?' वाक्य में 'क्या' (सर्वनाम) का कारक क्या हो सकता है?",
    "options_en": ["Nominative (Karta)", "Objective (Karma)", "Instrumental (Karan)", "Dative (Sampradan)"],
    "options_hi": ["कर्ता", "कर्म", "करण", "सम्प्रदान"],
    "correct_option_index": 0,
    "explanation_en": "The interrogative pronoun here takes the place of the subject (Karta) (e.g., 'Yah kyā hai?' - What is this?). [Ambiguous: 'kya' could also be the object of 'karna'. But in 'kya karna hai', 'kya' often acts as the subject].",
    "explanation_hi": "प्रश्नवाचक सर्वनाम यहाँ कर्ता के स्थान पर आया है (जैसे: यह क्या है?)।"
  },
  {
    "question_en": "When using the pronoun 'Tum' (You) in a respectful (ādar) manner, which word is used?",
    "question_hi": "'तुम' सर्वनाम का प्रयोग 'आदर' के भाव में करने पर किस शब्द का प्रयोग किया जाता है?",
    "options_en": ["Main (I)", "Aap (You - formal)", "Vah (He/She)", "Ye (These)"],
    "options_hi": ["मैं", "आप", "वह", "ये"],
    "correct_option_index": 1,
    "explanation_en": "'Aap' is the respectful pronoun (Not directly in the source, but used in contrast to 'Tum').",
    "explanation_hi": "'आप' आदरसूचक सर्वनाम है (स्रोत में सीधे उल्लेख नहीं, पर 'तुम' के विपरीत प्रयुक्त)।"
  },
  {
    "question_en": "When 'Koi' (original pronoun) is used in place of a noun, it is considered declinable (vikari) because its form changes. What can be the changed form of 'Koi'?",
    "question_hi": "'कोई' (मूल सर्वनाम) का प्रयोग संज्ञा के स्थान पर होने पर वह विकारी माना जाता है क्योंकि उसका रूप बदलता है। 'कोई' का परिवर्तित रूप क्या हो सकता है?",
    "options_en": ["Koiyāṁ", "Kisī", "Ko", "Koiyoṇ"],
    "options_hi": ["कोईयाँ", "किसी", "को", "कोईयों"],
    "correct_option_index": 1,
    "explanation_en": "'Koi' transforms into 'Kisī' according to the case.",
    "explanation_hi": "'कोई' का रूपांतरण कारक के अनुसार 'किसी' में होता है।"
  },
  {
    "question_en": "When the pronoun 'Vah' (He/She) transforms into 'Uskā' (His/Her), what grammatical element is added to it?",
    "question_hi": "'वह' सर्वनाम, जब रूपांतरित होकर 'उसका' बन जाता है, तो कौन-सा व्याकरणिक तत्व उसमें जुड़ता है?",
    "options_en": ["Gender and Number", "Genitive case marker", "Adverb", "Adjective"],
    "options_hi": ["लिंग और वचन", "संबंध कारक का चिन्ह", "क्रिया विशेषण", "विशेषण"],
    "correct_option_index": 1,
    "explanation_en": "'kā' is the genitive case marker.",
    "explanation_hi": "'का' संबंध कारक चिन्ह है।"
  },
  {
    "question_en": "In 'kuchh kām' (some work), what part of speech is 'kām' (work)?",
    "question_hi": "'कुछ काम' में 'काम' शब्द क्या है?",
    "options_en": ["Verb", "Adjective", "Noun", "Indeclinable (Avyay)"],
    "options_hi": ["क्रिया", "विशेषण", "संज्ञा", "अव्यय"],
    "correct_option_index": 2,
    "explanation_en": "'Kām' (work) is a name (noun).",
    "explanation_hi": "'काम' एक नाम (संज्ञा) है।"
  },
  {
    "question_en": "What will be the transformed form of the pronoun 'Ham' (We) in the Objective case (Karma karak), when the postposition (vibhakti) is elided?",
    "question_hi": "'हम' सर्वनाम का कर्म कारक में रूपांतरित रूप क्या होगा, जब विभक्ति लुप्त हो?",
    "options_en": ["Hamein (To us)", "Ham (Us)", "Hamko (To us)", "Hamāre (Our)"],
    "options_hi": ["हमें", "हम", "हमको", "हमारे"],
    "correct_option_index": 1,
    "explanation_en": "In the objective case, when the marker 'ko' is elided, the form can remain 'Ham' (e.g., Rām ne ham bulāyā).",
    "explanation_hi": "कर्म कारक में विभक्ति 'को' का लोप होने पर रूप 'हम' रह सकता है (जैसे: राम ने हम बुलाया)।"
  },
  {
    "question_en": "In 'Hamein shānti vibhāg ke liye kuchh lākh ḍŏlar mil sakte hain.' (We can get a few lakh dollars for the peace department), 'Hamein' (We) is the transformed form of which pronoun?",
    "question_hi": "'हमें शांति विभाग के लिए कुछ लाख डॉलर मिल सकते हैं।' में 'हमें' किस सर्वनाम का रूपांतरित रूप है?",
    "options_en": ["Vah (He/She)", "Tum (You)", "Main (I)", "Ham (We)"],
    "options_hi": ["वह", "तुम", "मैं", "हम"],
    "correct_option_index": 3,
    "explanation_en": "'Ham' + ko/ke liye = Hamein (Objective/Dative).",
    "explanation_hi": "'हम' + को/के लिए = हमें (कर्म/सम्प्रदान)।"
  },
  {
    "question_en": "A pronoun (Sarvnam) falls under which part of speech?",
    "question_hi": "सर्वनाम किस शब्द-भेद के अंतर्गत आता है?",
    "options_en": ["Indeclinable (Avyay)", "Adverb (Kriyavisheshan)", "Declinable Word (Vikari Shabd)", "Postposition (Sambandhsuchak)"],
    "options_hi": ["अव्यय", "क्रियाविशेषण", "विकारी शब्द", "संबंधसूचक"],
    "correct_option_index": 2,
    "explanation_en": "Nouns, pronouns, adjectives, and verbs are declinable (vikari) words [Previous context; and it replaces a noun].",
    "explanation_hi": "संज्ञा, सर्वनाम, विशेषण और क्रिया विकारी शब्द हैं [Previous context; और यह संज्ञा के स्थान पर आता है]।"
  },
  {
    "question_en": "In 'aisā ādmī' (such a man), 'aisā' (such) is comparing the 'ādmī' (man) on what basis?",
    "question_hi": "'ऐसा आदमी' में 'ऐसा' शब्द 'आदमी' की तुलना किस आधार पर कर रहा है?",
    "options_en": ["Place", "Form or Type", "Definite Number", "Indefinite Quantity"],
    "options_hi": ["स्थान", "रूप या प्रकार", "निश्चित संख्या", "अनिश्चित परिमाण"],
    "correct_option_index": 1,
    "explanation_en": "'Aisā' (Like this/that kind) indicates form or type.",
    "explanation_hi": "'ऐसा' (Like this/that kind) रूप या प्रकार को इंगित करता है।"
  },
  {
    "question_en": "If the (pronoun) 'Tumhein' is used in the Vocative case (Sambodhan karak), which marker would be expected?",
    "question_hi": "'तुम्हें' (सर्वनाम) का प्रयोग यदि संबोधन कारक के रूप में किया जाए, तो कौन-सा चिन्ह अपेक्षित होगा?",
    "options_en": ["ne", "ko", "He/Are (O/Hey)", "kā"],
    "options_hi": ["ने", "को", "हे/अरे", "का"],
    "correct_option_index": 2,
    "explanation_en": "The vocative case markers are 'He', 'Are' (O, Hey).",
    "explanation_hi": "संबोधन कारक चिन्ह 'हे', 'अरे' होता है।"
  },
  {
    "question_en": "For which tense (Kaal) can the word 'Vah' (He/She) be used?",
    "question_hi": "'वह' शब्द का प्रयोग किस काल के लिए हो सकता है?",
    "options_en": ["Past Tense", "Present Tense", "Future Tense", "All of the above"],
    "options_hi": ["भूतकाल", "वर्तमान काल", "भविष्यत काल", "उपरोक्त सभी"],
    "correct_option_index": 3,
    "explanation_en": "It can be used in all three tenses by combining with a verb.",
    "explanation_hi": "क्रिया के साथ जुड़कर यह तीनों काल में प्रयुक्त हो सकता है।"
  },
  {
    "question_en": "When using 'Merā' (Genitive pronoun) based on 'gender', which form will NOT be created?",
    "question_hi": "'मेरा' (संबंध कारक सर्वनाम) का प्रयोग 'लिंग' के आधार पर करने पर कौन-सा रूप नहीं बनेगा?",
    "options_en": ["Merā (Masc. Sing.)", "Merī (Fem. Sing.)", "Mere (Masc. Plur.)", "Meriyoṇ (Fem. Plur.)"],
    "options_hi": ["मेरा (पुल्लिंग, एकवचन)", "मेरी (स्त्रीलिंग, एकवचन)", "मेरे (पुल्लिंग, बहुवचन)", "मेरियों (स्त्रीलिंग, बहुवचन)"],
    "correct_option_index": 3,
    "explanation_en": "Pronouns do not transform due to their own gender; they change according to the gender of the noun. The form 'Meriyoṇ' is not standard.",
    "explanation_hi": "सर्वनाम में लिंग के कारण रूपांतरण नहीं होता, यह संज्ञा के लिंग के अनुसार बदलता है, पर 'मेरियों' रूप मान्य नहीं है।"
  },
  {
    "question_en": "Compared to 'Koi' (original pronoun - someone), what does 'Kuchh' (original pronoun - some) generally denote?",
    "question_hi": "'कोई' (मूल सर्वनाम) की अपेक्षा 'कुछ' (मूल सर्वनाम) सामान्यतः किस वस्तु का बोध कराता है?",
    "options_en": ["Living being", "Verb", "Inanimate object or quantity", "Place"],
    "options_hi": ["प्राणी", "क्रिया", "अप्राणी वस्तु या परिमाण", "स्थान"],
    "correct_option_index": 2,
    "explanation_en": "'Kuchh kām' (some work) is used for quantity/inanimate objects.",
    "explanation_hi": "'कुछ काम' परिमाण/अप्राणी के लिए प्रयुक्त होता है।"
  },
  {
    "question_en": "What would be the First Person (Uttam Purush) transformation of the Second Person (Madhyam Purush) pronoun 'Tum' (You)?",
    "question_hi": "'तुम' सर्वनाम का उत्तम पुरुष में रूपांतरण क्या होगा?",
    "options_en": ["Vah (He/She)", "Main (I)", "Aap (You - formal)", "Koi (Some)"],
    "options_hi": ["वह", "मैं", "आप", "कोई"],
    "correct_option_index": 1,
    "explanation_en": "Changing the person (First, Second, Third) indicates the type of pronoun.",
    "explanation_hi": "पुरुष (उत्तम, मध्यम, अन्य) में परिवर्तन सर्वनाम के प्रकार को दर्शाता है।"
  },
  {
    "question_en": "What is the primary purpose of a 'Pronominal Adjective' (Sarvnamik Visheshan)?",
    "question_hi": "'सार्वनामिक विशेषण' का मूल उद्देश्य क्या है?",
    "options_en": ["Only to prevent noun repetition.", "To limit the scope of a noun or function as an adjective.", "To describe the verb.", "To form an abstract noun."],
    "options_hi": ["केवल संज्ञा की पुनरुक्ति रोकना।", "संज्ञा की व्याप्ति को सीमित करना या विशेषण का कार्य करना।", "क्रिया की विशेषता बताना।", "भाववाचक संज्ञा बनाना।"],
    "correct_option_index": 1,
    "explanation_en": "It comes with the noun (to specify it).",
    "explanation_hi": "यह संज्ञा के साथ आता है।"
  },
  {
    "question_en": "'Jisse' (From whom) and 'Usse' (From him/her) (pronouns) would fall into which category of pronouns?",
    "question_hi": "'जिससे' और 'उससे' (सर्वनाम) किस प्रकार के सर्वनाम की श्रेणी में आएंगे?",
    "options_en": ["Compound (Yaugik)", "Original (Mool)", "Definite (Nishchit)", "Indefinite (Anishchit)"],
    "options_hi": ["यौगिक", "मूल", "निश्चित", "अनिश्चित"],
    "correct_option_index": 0,
    "explanation_en": "These are formed by adding the case marker (suffix) 'se' to original pronouns like 'Jo' or 'Vah'.",
    "explanation_hi": "ये 'जो' या 'वह' जैसे मूल सर्वनामों में 'से' कारक चिन्ह (प्रत्यय) लगाकर बने हैं।"
  },
  {
    "question_en": "What is the Genitive (Sambandh) case transformation of 'Kaun' (Who)?",
    "question_hi": "'कौन' (सर्वनाम) का संबंध कारक रूपांतरण क्या होगा?",
    "options_en": ["Kisko (To whom)", "Kismein (In whom)", "Kiskā (Whose)", "Kisse (From/By whom)"],
    "options_hi": ["किसको", "किसमें", "किसका", "किससे"],
    "correct_option_index": 2,
    "explanation_en": "The genitive case marker is 'kā'.",
    "explanation_hi": "संबंध कारक चिन्ह 'का'।"
  },
  {
    "question_en": "In the sentence 'Vah āṭā pisāne gayā hai.' (He has gone to get flour milled), the pronoun 'Vah' denotes Masculine Singular, while what does the verb 'gayā hai' denote?",
    "question_hi": "दिए गए वाक्य 'वह आटा पिसाने गया है।' में 'वह' सर्वनाम पुल्लिंग एकवचन को दर्शाता है, जबकि 'गया है' क्रिया क्या दर्शाती है?",
    "options_en": ["Number of the verb", "Gender of the verb", "Person of the verb", "All of the above"],
    "options_hi": ["क्रिया का वचन", "क्रिया का लिंग", "क्रिया का पुरुष", "उपरोक्त सभी"],
    "correct_option_index": 3,
    "explanation_en": "The verb changes according to the gender, number, and person of the pronoun (subject).",
    "explanation_hi": "क्रिया सर्वनाम (कर्ता) के लिंग, वचन और पुरुष के अनुसार बदलती है।"
  },
  {
    "question_en": "If the pronoun 'Koi' (someone) were used in the dual number (if it were valid in Hindi), where would the anusvara (nasalization) appear?",
    "question_hi": "यदि 'कोई' सर्वनाम द्विवचन में प्रयोग हो (यदि यह हिंदी में मान्य होता), तो उस पर अनुस्वार कहाँ आता?",
    "options_en": ["At the beginning", "At the end", "In the middle", "Nowhere"],
    "options_hi": ["शुरुआत में", "अंत में", "बीच में", "कहीं नहीं"],
    "correct_option_index": 1,
    "explanation_en": "The anusvara (nasalization) due to number inflection comes at the end.",
    "explanation_hi": "वचन के विकार के कारण अनुस्वार अंत में आता है।"
  },
  {
    "question_en": "If 'Kuchh' (original pronoun) is used as a quantitative adjective, what part of speech will it accompany?",
    "question_hi": "'कुछ' (मूल सर्वनाम) का प्रयोग यदि परिमाणवाचक विशेषण के रूप में हो, तो वह किस शब्द-भेद के साथ आएगा?",
    "options_en": ["Verb", "Noun", "Indeclinable (Avyay)", "Postposition (Sambandhbodhak)"],
    "options_hi": ["क्रिया", "संज्ञा", "अव्यय", "संबंधबोधक"],
    "correct_option_index": 1,
    "explanation_en": "An adjective accompanies a noun.",
    "explanation_hi": "विशेषण संज्ञा के साथ आता है।"
  },
  {
    "question_en": "In 'Aap kyā sochte hain?' (What do you think?), 'kyā' (pronoun) indicates which person (Purush)?",
    "question_hi": "'आप क्या सोचते हैं?' में 'क्या' (सर्वनाम) किस पुरुष को इंगित करता है?",
    "options_en": ["First Person", "Second Person", "Third Person", "Common Person"],
    "options_hi": ["उत्तम पुरुष", "मध्यम पुरुष", "अन्य पुरुष", "सामान्य पुरुष"],
    "correct_option_index": 1,
    "explanation_en": "It is used with the person being directly addressed ('Aap').",
    "explanation_hi": "यह सीधे संबोधित व्यक्ति ('आप') के साथ प्रयुक्त हुआ है।"
  },
  {
    "question_en": "In which given context is the pronoun 'Ham' (We) used in the plural (Collective) sense?",
    "question_hi": "'हम' सर्वनाम का प्रयोग दिए गए किस संदर्भ में बहुवचन (Collective) के अर्थ में हुआ है?",
    "options_en": ["'Hamāre priya rachnākār' (Our dear creators)", "'Ham Bihariyon ko batāenge' (We will tell the Biharis)", "'Hamein is bāt ko svīkārnā hogā...' (We will have to accept this...)", "'All of the above'"],
    "options_hi": ["'हमारे प्रिय रचनाकार'", "'हम बिहारीयों को बताएँगे'", "'हम इस बात को स्वीकारना होगा...'", "'उपर्युक्त सभी'"],
    "correct_option_index": 3,
    "explanation_en": "The use of 'Ham' (We) is always in the plural sense (whether the speaker is alone or in a collective context).",
    "explanation_hi": "'हम' का प्रयोग हमेशा बहुवचन के अर्थ में होता है (चाहे वह वक्ता अकेला हो, या सामूहिक संदर्भ में हो)।"
  },
  {
    "question_en": "The pronoun 'Tumhein' remains unchanged based on gender, but what could be its transformation based on number?",
    "question_hi": "'तुम्हें' सर्वनाम लिंग के आधार पर अपरिवर्तित रहता है, लेकिन वचन के आधार पर इसका रूपांतरण क्या हो सकता है?",
    "options_en": ["Tum", "Tujhko", "Tumhārā", "Not mentioned in sources"],
    "options_hi": ["तुम", "तुझको", "तुम्हारा", "स्रोतों में उल्लेख नहीं"],
    "correct_option_index": 3,
    "explanation_en": "Although it goes from 'Tu' (sing.) to 'Tum' (plur.), 'Tum' itself can be singular (respectful) or plural, and the sources do not provide a clear example of number change *from* 'Tumhein'.",
    "explanation_hi": "हालाँकि यह 'तू' से 'तुम' में जाता है, लेकिन 'तुम' खुद एकवचन/बहुवचन (आदर) में समान रह सकता है, और स्रोतों में वचन परिवर्तन का स्पष्ट उदाहरण नहीं है।"
  },
  {
    "question_en": "By using a pronoun, what error (vikar) does the speaker avoid?",
    "question_hi": "सर्वनाम का उपयोग करने पर वक्ता किस विकार से बचता है?",
    "options_en": ["Verb error", "Repetition of the noun (Punarukti)", "Elision of case marker", "Exception of the adjective"],
    "options_hi": ["क्रिया विकार", "संज्ञा की पुनरुक्ति", "कारक चिन्ह का लोप", "विशेषण का अपवाद"],
    "correct_option_index": 1,
    "explanation_en": "The pronoun is used in place of the noun, which eliminates the error of repetition (Punaravritti dosh).",
    "explanation_hi": "सर्वनाम संज्ञा के स्थान पर प्रयोग होता है, जिससे पुनरावृत्ति दोष समाप्त होता है।"
  }
];

export default sarvnamQuestions;