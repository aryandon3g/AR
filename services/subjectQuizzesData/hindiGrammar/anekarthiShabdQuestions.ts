import type { QuizQuestion } from '../../../types';

/*
INSTRUCTIONS TO ADD QUESTIONS:

You can use the following prompt with an AI (like Gemini) to generate questions in the correct format.
Replace the [TOPIC] and [NUMBER_OF_QUESTIONS] placeholders with your desired values. For your request, use [Anekarthi Shabd (अनेकार्थी शब्द) in Hindi Grammar] and [100].

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
    "question_en": "Which of the following is NOT a meaning of the word 'Ank'?",
    "question_hi": "निम्नलिखित में से कौन सा 'अंक' शब्द का अनेकार्थी नहीं है?",
    "options_en": ["Lap", "Mark/Number", "Chapter/Act", "Sun"],
    "options_hi": ["गोद", "चिन्ह/संख्या", "अध्याय/सर्ग", "सूर्य"],
    "correct_option_index": 3,
    "explanation_en": "The meanings of 'Ank' include lap, mark/number, and chapter/act of a play. 'Sun' is not a meaning of 'Ank'.",
    "explanation_hi": "'अंक' के अनेकार्थी अर्थों में गोद, चिन्ह/संख्या, और नाटक का अध्याय/सर्ग शामिल हैं। 'सूर्य' 'अंक' का अर्थ नहीं है।"
}

====================================================================================================

Once you have the generated array, paste it below, replacing the empty array [].
*/

const anekarthiShabdQuestions: QuizQuestion[] = [
  {
    "question_en": "Select the correct group of polysemous meanings for the word 'Pad' (पद).",
    "question_hi": "पद शब्द के लिए सही अनेकार्थी समूह का चयन करें:",
    "options_en": ["Place, Rank, Promise", "Sound, Matra, Status", "Jurisdiction/Post, Foot, Word", "Action, Cause, Name"],
    "options_hi": ["स्थान, दर्जा, वचन", "ध्वनि, मात्रा, स्थिति", "अधिकार-क्षेत्र, चरण, शब्द", "क्रिया, कारण, नाम"],
    "correct_option_index": 2,
    "explanation_en": "(c) Jurisdiction/Post, Foot, Word: 'Pad' can mean 'place/post' (like an administrative post), 'foot' (like charan sparsh - touching feet), and 'word' (like shabd-bhed - parts of speech).",
    "explanation_hi": "(c) अधिकार-क्षेत्र, चरण, शब्द: पद का अर्थ 'स्थान/अधिकार-क्षेत्र' (जैसे प्रशासनिक पद), 'चरण' (पैर) (जैसे चरण स्पर्श), और 'शब्द' (जैसे शब्द-भेद) होता है।"
  },
  {
    "question_en": "What is the correct group of polysemous forms for the word 'Kar' (कर)?",
    "question_hi": "कर शब्द के अनेकार्थी रूपों का सही समूह क्या है?",
    "options_en": ["Eye, Ear, Hand", "Hand, Tax, Ray", "Cause, Power, Action", "Edge, Time, Fruit"],
    "options_hi": ["आँख, कान, हाथ", "हाथ, टैक्स, किरण", "कारण, शक्ति, क्रिया", "किनारा, समय, फल"],
    "correct_option_index": 1,
    "explanation_en": "(b) Hand, Tax, Ray: 'Kar' means 'hand' (haath paanv maarna - to struggle), 'tax' (revenue/kar), and 'ray' (of light - less common meaning).",
    "explanation_hi": "(b) हाथ, टैक्स, किरण: कर का अर्थ 'हाथ' (हाथ पाँव मारना), 'टैक्स' (राजस्व/कर), और 'किरण' (अप्रकट अर्थ) होता है।"
  },
  {
    "question_en": "What is included in the polysemous forms of the word 'Bhed' (भेद)?",
    "question_hi": "भेद शब्द के अनेकार्थी रूपों में क्या शामिल है?",
    "options_en": ["Difference, Sum, Doubt", "Type, Secret, Division/Discord", "Limit, Cause, Purpose", "Result, Essence, Principle"],
    "options_hi": ["अंतर, योग, संशय", "प्रकार, रहस्य, फूट", "सीमा, कारण, उद्देश्य", "परिणाम, सार, सिद्धांत"],
    "correct_option_index": 1,
    "explanation_en": "(b) Type, Secret, Division/Discord: 'Bhed' means 'type' (types of adverbs), 'secret' (daal mein kaala hona - something fishy), and 'division/discord' (less common).",
    "explanation_hi": "(b) प्रकार, रहस्य, फूट: भेद का अर्थ 'प्रकार' (क्रियाविशेषण के भेद), 'रहस्य' (दाल में काला होना), और 'फूट/विवाद' (अप्रकट) होता है।"
  },
  {
    "question_en": "Which meaning of the word 'Varn' (वर्ण) applies in both grammatical and social contexts?",
    "question_hi": "वर्ण शब्द का कौन-सा अर्थ व्याकरण और समाज दोनों के संदर्भ में आता है?",
    "options_en": ["Letter, Color, Caste", "Word, Sentence, Gender", "Quality, Fault, Action", "Time, Tense, Place"],
    "options_hi": ["अक्षर, रंग, जाति", "शब्द, वाक्य, लिंग", "गुण, दोष, क्रिया", "समय, काल, स्थान"],
    "correct_option_index": 0,
    "explanation_en": "(a) Letter, Color, Caste: 'Varn' means 'letter' (alphabetic character) and 'color/caste' (in a social context).",
    "explanation_hi": "(a) अक्षर, रंग, जाति: वर्ण का अर्थ 'अक्षर' (अनुनासिक वर्ण) और 'रंग/जाति' (सामाजिक संदर्भ में) होता है।"
  },
  {
    "question_en": "Which group is most suitable for the word 'Ras' (रस)?",
    "question_hi": "रस शब्द के लिए कौन-सा समूह सबसे उपयुक्त है?",
    "options_en": ["Color, Water, Taste", "Essence, Taste, Emotion/Sentiment", "Distance, Light, Time", "Promise, Work, Knowledge"],
    "options_hi": ["रंग, पानी, स्वाद", "सार, स्वाद, भावना", "दूरी, प्रकाश, काल", "वचन, कार्य, ज्ञान"],
    "correct_option_index": 1,
    "explanation_en": "(b) Essence, Taste, Emotion/Sentiment: 'Ras' means 'emotion/sentiment' (like Vatsalya Ras, Shringar Ras) and 'essence/taste' (less common).",
    "explanation_hi": "(b) सार, स्वाद, भावना: रस का अर्थ 'भावना' (वात्सल्य रस, श्रृंगार रस) और 'सार/स्वाद' (अप्रकट) होता है।"
  },
  {
    "question_en": "What is included in the polysemous group for the word 'Kaal' (काल)?",
    "question_hi": "काल शब्द के अनेकार्थी समूह में क्या शामिल है?",
    "options_en": ["Manner, Place, Quantity", "Result, Purpose, Meaning", "Time, Death, Yama (God of Death)", "Type, Adjective, Name"],
    "options_hi": ["रीति, स्थान, मात्रा", "परिणाम, उद्देश्य, अर्थ", "समय, मृत्यु, यमराज", "प्रकार, विशेषण, नाम"],
    "correct_option_index": 2,
    "explanation_en": "(c) Time, Death, Yama (God of Death): 'Kaal' means 'time/tense' (past tense, present tense) and 'death/Yama' (less common).",
    "explanation_hi": "(c) समय, मृत्यु, यमराज: काल का अर्थ 'समय' (भूतकाल, वर्तमान काल) और 'मृत्यु/यमराज' (अप्रकट) होता है।"
  },
  {
    "question_en": "Which is the correct polysemous group for the word 'Patra' (पत्र)?",
    "question_hi": "पत्र शब्द के लिए सही अनेकार्थी समूह कौन-सा है?",
    "options_en": ["Metal, Paper, Money", "Leaf, Letter, Document", "Cloth, Face, Ear", "Fruit, Flower, Root"],
    "options_hi": ["धातु, कागज, धन", "पत्ता, चिट्ठी, दस्तावेज", "वस्त्र, मुख, कान", "फल, फूल, जड़"],
    "correct_option_index": 1,
    "explanation_en": "(b) Leaf, Letter, Document: 'Patra' means 'leaf' (like a tree leaf), 'letter/document' (legal document), and 'bank-note'.",
    "explanation_hi": "(b) पत्ता, चिट्ठी, दस्तावेज: पत्र का अर्थ 'पत्ता' (जैसे वृक्ष का पत्ता), 'चिट्ठी/दस्तावेज' (वैधानिक पत्र), और 'बैंक-पत्रक' होता है।"
  },
  {
    "question_en": "What are the various meanings of the word 'Arth' (अर्थ)?",
    "question_hi": "अर्थ शब्द के विविध अर्थ क्या हैं?",
    "options_en": ["Meaning, Money, Purpose", "Knowledge, Education, Religion", "Time, Number, Quantity", "Expansion, Place, Direction"],
    "options_hi": ["मतलब, धन, प्रयोजन", "ज्ञान, शिक्षा, धर्म", "समय, संख्या, मात्रा", "विस्तार, स्थान, दिशा"],
    "correct_option_index": 0,
    "explanation_en": "(a) Meaning, Money, Purpose: 'Arth' means 'meaning' (correct meaning), 'money/wealth' (economic), and 'purpose' (objective).",
    "explanation_hi": "(a) मतलब, धन, प्रयोजन: अर्थ का अर्थ 'मतलब' (सही अर्थ), 'धन/पैसा' (आर्थिक), और 'प्रयोजन' (उद्देश्य) होता है।"
  },
  {
    "question_en": "Which is the correct polysemous group for the word 'Dal' (दल)?",
    "question_hi": "दल शब्द के लिए सही अनेकार्थी समूह कौन-सा है?",
    "options_en": ["Hand, Foot, Face", "Group, Leaf, Army", "Cause, Goal, Secret", "Knowledge, King, Subjects"],
    "options_hi": ["हाथ, पैर, मुख", "समूह, पत्ता, सेना", "कारण, लक्ष्य, भेद", "ज्ञान, राजा, प्रजा"],
    "correct_option_index": 1,
    "explanation_en": "(b) Group, Leaf, Army: 'Dal' means 'group/party' (Congress legislative party), and 'leaf' or 'army/group' (like a group of flowers).",
    "explanation_hi": "(b) समूह, पत्ता, सेना: दल का अर्थ 'समूह/पार्टी' (कांग्रेस विधायक दल), और 'पत्ता' या 'सेना/समूह' (जैसे फूलों का दल) होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Teer' (तीर)?",
    "question_hi": "तीर शब्द के अनेकार्थी रूप कौन-से हैं?",
    "options_en": ["Eye, Mouth", "Arrow, Bank/Shore", "Anger, Peace", "Fire, Water"],
    "options_hi": ["आँख, मुख", "बाण, किनारा", "क्रोध, शांति", "आग, पानी"],
    "correct_option_index": 1,
    "explanation_en": "(b) Arrow, Bank/Shore: 'Teer' means 'arrow' (like an archer shoots an arrow) and 'bank/shore' (less common).",
    "explanation_hi": "(b) बाण, किनारा: तीर का अर्थ 'बाण' (जैसे धनुर्धर तीर लगाती है) और 'किनारा/तट' (अप्रकट) होता है।"
  },
  {
    "question_en": "What is the polysemous group for the word 'Ank' (अंक)?",
    "question_hi": "अंक शब्द का अनेकार्थी समूह क्या है?",
    "options_en": ["Number, Letter, Mathematics", "Number, Chapter, Lap", "Sign, Place, Time", "Writing, Picture, Form"],
    "options_hi": ["संख्या, अक्षर, गणित", "संख्या, अध्याय, गोद", "चिन्ह, स्थान, काल", "लेखन, चित्र, रूप"],
    "correct_option_index": 1,
    "explanation_en": "(b) Number, Chapter, Lap: 'Ank' means 'number', 'chapter/act' (of a play), and 'lap' (less common).",
    "explanation_hi": "(b) संख्या, अध्याय, गोद: अंक का अर्थ 'संख्या', 'अध्याय/पाठ', और 'गोद' (अप्रकट) होता है।"
  },
  {
    "question_en": "In what context can the polysemous meaning of the word 'Guru' (गुरु) be used?",
    "question_hi": "गुरु शब्द का अनेकार्थी अर्थ किस संदर्भ में प्रयुक्त हो सकता है?",
    "options_en": ["Student, Friend, Servant", "Teacher, Heavy, Superior", "King, Minister, Commander", "Mother, Father, Sister"],
    "options_hi": ["छात्र, मित्र, सेवक", "शिक्षक, भारी, श्रेष्ठ", "राजा, मंत्री, सेनापति", "माता, पिता, बहन"],
    "correct_option_index": 1,
    "explanation_en": "(b) Teacher, Heavy, Superior: 'Guru' means 'teacher' (Guru Drona) and 'heavy/superior' (less common).",
    "explanation_hi": "(b) शिक्षक, भारी, श्रेष्ठ: गुरु का अर्थ 'शिक्षक' (गुरु द्रोण) और 'भारी/श्रेष्ठ' (अप्रकट) होता है।"
  },
  {
    "question_en": "Choose the appropriate polysemous group for the word 'Haar' (हार).",
    "question_hi": "हार शब्द के लिए उपयुक्त अनेकार्थी समूह चुनें:",
    "options_en": ["Profit, Loss, Success", "Victory, Defeat, Garland", "Defeat, Garland, Fatigue", "Courage, Strength, Power"],
    "options_hi": ["लाभ, हानि, सफलता", "जीत, पराजय, माला", "पराजय, माला, थकना", "साहस, बल, शक्ति"],
    "correct_option_index": 2,
    "explanation_en": "(c) Defeat, Garland, Fatigue: 'Haar' means 'defeat' (win-loss) and 'garland/necklace' (less common). 'Fatigue' is also a less common meaning.",
    "explanation_hi": "(c) पराजय, माला, थकना: हार का अर्थ 'पराजय' (हार-जीत) और 'माला/गले का हार' (अप्रकट) होता है। 'थकना' भी एक अर्थ है।"
  },
  {
    "question_en": "Which is the polysemous group for the word 'Dand' (दंड)?",
    "question_hi": "दंड शब्द का अनेकार्थी समूह कौन-सा है?",
    "options_en": ["Punishment, Stick, Fine", "Justice, Rule, Law", "Right, Duty, Sacrifice", "Water, Earth, Air"],
    "options_hi": ["सज़ा, डंडा, जुर्माना", "न्याय, नियम, कानून", "अधिकार, कर्तव्य, त्याग", "जल, पृथ्वी, वायु"],
    "correct_option_index": 0,
    "explanation_en": "(a) Punishment, Stick, Fine: 'Dand' means 'punishment' (like beating) and 'stick/staff' (less common). 'Fine' is related to punishment.",
    "explanation_hi": "(a) सज़ा, डंडा, जुर्माना: दंड का अर्थ 'सज़ा' (जैसे मार से) और 'डंडा/लकड़ी' (अप्रकट) होता है। जुर्माना भी दंड का एक रूप है।"
  },
  {
    "question_en": "The various meanings of the word 'Rang' (रंग) include:",
    "question_hi": "रंग शब्द के विविध अर्थों में शामिल हैं:",
    "options_en": ["Song, Dance, Happiness", "Color/Hue, Splendor, Fun/Merriment", "Verb, Adjective, Indeclinable", "Time, Tense, Number"],
    "options_hi": ["गीत, नृत्य, खुशी", "वर्ण, शोभा, मस्ती", "क्रिया, विशेषण, अव्यय", "समय, काल, वचन"],
    "correct_option_index": 1,
    "explanation_en": "(b) Color/Hue, Splendor, Fun/Merriment: 'Rang' means 'color/hue', 'splendor/effect' (like rang jamna - to make an impression), and 'fun/entertainment' (less common).",
    "explanation_hi": "(b) वर्ण, शोभा, मस्ती: रंग का अर्थ 'वर्ण/रंग', 'शोभा/प्रभाव' (जैसे रंग जमना), और 'मस्ती/मनोरंजन' (अप्रकट) होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Uttar' (उत्तर)?",
    "question_hi": "उत्तर शब्द का अनेकार्थी रूप क्या है?",
    "options_en": ["Answer, Direction (North), Later/Subsequent", "Question, Time, Verb", "Noun, Pronoun, Adjective", "Side, Opposition, Middle"],
    "options_hi": ["जवाब, दिशा, बाद का", "प्रश्न, काल, क्रिया", "संज्ञा, सर्वनाम, विशेषण", "पक्ष, विपक्ष, मध्य"],
    "correct_option_index": 0,
    "explanation_en": "(a) Answer, Direction (North), Later/Subsequent: 'Uttar' means 'answer' (answer the question), 'direction' (North-East), and 'later/subsequent' (the latter part).",
    "explanation_hi": "(a) जवाब, दिशा, बाद का: उत्तर का अर्थ 'जवाब' (उत्तर दें), 'दिशा' (उत्तर-पूर्व), और 'बाद का' (बाद का भाग) होता है।"
  },
  {
    "question_en": "What is the polysemous group for the word 'Kanak' (कनक)?",
    "question_hi": "कनक शब्द के लिए अनेकार्थी समूह क्या है?",
    "options_en": ["Silver, Iron, Copper", "Gold, Datura, Wheat", "Water, Earth, Sky", "Light, Sound, Darkness"],
    "options_hi": ["चांदी, लोहा, तांबा", "सोना, धतूरा, गेहूँ", "जल, पृथ्वी, आकाश", "प्रकाश, ध्वनि, अंधकार"],
    "correct_option_index": 1,
    "explanation_en": "(b) Gold, Datura, Wheat: 'Kanak' famously means 'gold' and 'datura' (a poisonous plant). 'Wheat' is another meaning.",
    "explanation_hi": "(b) सोना, धतूरा, गेहूँ: कनक का अर्थ 'सोना' (अप्रकट) और 'धतूरा' (अप्रकट, प्रसिद्ध अनेकार्थी शब्द) तथा 'गेहूँ' होता है।"
  },
  {
    "question_en": "Select the polysemous forms of the word 'Bal' (बल).",
    "question_hi": "बल शब्द के अनेकार्थी रूपों का चयन करें:",
    "options_en": ["Strength, Army, Force", "Wealth, Honor, Respect", "Justice, Religion, Truth", "Cause, Action, Promise"],
    "options_hi": ["शक्ति, सेना, जोर", "धन, मान, सम्मान", "न्याय, धर्म, सत्य", "कारण, क्रिया, वचन"],
    "correct_option_index": 0,
    "explanation_en": "(a) Strength, Army, Force: 'Bal' means 'strength/force' and 'army' (like the strength of an army).",
    "explanation_hi": "(a) शक्ति, सेना, जोर: बल का अर्थ 'शक्ति/जोर' और 'सेना' (जैसे सेना का बल) होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Madhu' (मधु)?",
    "question_hi": "मधु शब्द का अनेकार्थी रूप क्या है?",
    "options_en": ["Water, Milk, Curd", "Honey, Wine, Spring", "Knowledge, Meditation, Austerity", "Happiness, Sorrow, Anger"],
    "options_hi": ["जल, दूध, दही", "शहद, शराब, वसंत", "ज्ञान, ध्यान, तपस्या", "सुख, दुःख, क्रोध"],
    "correct_option_index": 1,
    "explanation_en": "(b) Honey, Wine, Spring: 'Madhu' means 'honey/nectar', 'wine', and 'spring season' (related to plants/nature).",
    "explanation_hi": "(b) शहद, शराब, वसंत: मधु का अर्थ 'शहद/रस', 'शराब' तथा 'वसंत ऋतु' होता है (वनस्पतियों से संबंधित भाव)।"
  },
  {
    "question_en": "What is the correct polysemous group for the word 'Gati' (गति)?",
    "question_hi": "गति शब्द के लिए सही अनेकार्थी समूह क्या है?",
    "options_en": ["Place, Time, Distance", "Speed/Movement, Salvation, State/Condition", "Stopping, Walking, Running", "Seeing, Hearing, Speaking"],
    "options_hi": ["स्थान, समय, दूरी", "चाल, मोक्ष, दशा", "रुकना, चलना, भागना", "देखना, सुनना, बोलना"],
    "correct_option_index": 1,
    "explanation_en": "(b) Speed/Movement, Salvation, State/Condition: 'Gati' means 'speed/movement' (speed of an arrow) and 'state/condition' or 'salvation' (less common).",
    "explanation_hi": "(b) चाल, मोक्ष, दशा: गति का अर्थ 'चाल/रफ़्तार' (तीर की गति) और 'दशा/मोक्ष' (अप्रकट) होता है।"
  },
  {
    "question_en": "What are the polysemous meanings of the word 'Maan' (मान)?",
    "question_hi": "मान शब्द के अनेकार्थी अर्थ क्या हैं?",
    "options_en": ["Sacrifice, Separation, Sorrow", "Respect, Measure, Sulking", "Cause, Effect, Time", "Knowledge, Action, Devotion"],
    "options_hi": ["त्याग, वियोग, शोक", "सम्मान, माप, रूठना", "कारण, कार्य, समय", "ज्ञान, कर्म, भक्ति"],
    "correct_option_index": 1,
    "explanation_en": "(b) Respect, Measure, Sulking: 'Maan' means 'respect', 'measure/value' (manometry), and 'sulking' (less common).",
    "explanation_hi": "(b) सम्मान, माप, रूठना: मान का अर्थ 'सम्मान', 'माप/परिणाम' (मानवमिति), और 'रूठना' (अप्रकट) होता है।"
  },
  {
    "question_en": "What is included in the polysemous forms of the word 'Saar' (सार)?",
    "question_hi": "सार शब्द के अनेकार्थी रूपों में क्या शामिल है?",
    "options_en": ["Conclusion, Essence, Iron", "Gold, Silver, Copper", "Water, Air, Earth", "End, Beginning, Middle"],
    "options_hi": ["निष्कर्ष, तत्व, लोहा", "सोना, चांदी, तांबा", "जल, वायु, पृथ्वी", "अंत, शुरुआत, मध्य"],
    "correct_option_index": 0,
    "explanation_en": "(a) Conclusion, Essence, Iron: 'Saar' means 'conclusion/essence', 'public' (public funds), and 'iron/strong' (less common).",
    "explanation_hi": "(a) निष्कर्ष, तत्व, लोहा: सार का अर्थ 'निष्कर्ष/तत्व', 'सार्वजनिक' (सार्वजनिक धन), और 'लोहा/मजबूत' (अप्रकट) होता है।"
  },
  {
    "question_en": "What are the polysemous words for 'Shukla' (शुक्ल)?",
    "question_hi": "शुक्ल (Shukla) का अनेकार्थी शब्द क्या है?",
    "options_en": ["Black", "White, Bright lunar fortnight, Bright", "Red", "Yellow"],
    "options_hi": ["काला", "सफेद, शुक्ल पक्ष, उज्जवल", "लाल", "पीला"],
    "correct_option_index": 1,
    "explanation_en": "(b) White, Bright lunar fortnight, Bright: 'Shukla' means 'white/bright' (used in options for color) and 'fortnight' (Shukla Paksha - bright lunar fortnight).",
    "explanation_hi": "(b) सफेद, शुक्ल पक्ष, उज्जवल: शुक्ल का अर्थ 'सफेद/उज्जवल' (स्रोतों में रंग के विकल्प में प्रयुक्त) और 'पक्ष' (शुक्ल पक्ष) होता है।"
  },
  {
    "question_en": "Choose the appropriate polysemous group for the word 'Poorv' (पूर्व).",
    "question_hi": "पूर्व शब्द के लिए उपयुक्त अनेकार्थी समूह चुनें:",
    "options_en": ["South, West, North", "Before, Direction (East), Ancient", "Middle, End, Beginning", "Tense, Time, Opportunity"],
    "options_hi": ["दक्षिण, पश्चिम, उत्तर", "पहले, दिशा, प्राचीन", "मध्य, अंत, शुरुआत", "काल, समय, अवसर"],
    "correct_option_index": 1,
    "explanation_en": "(b) Before, Direction (East), Ancient: 'Poorv' means 'before' (pre-planned), 'direction (East)' (North-East), and 'ancient' (less common).",
    "explanation_hi": "(b) पहले, दिशा, प्राचीन: पूर्व का अर्थ 'पहले' (पूर्व नियोजित), 'दिशा' (उत्तर-पूर्व), और 'प्राचीन' (अप्रकट) होता है।"
  },
  {
    "question_en": "Select the polysemous forms of the word 'Ghan' (घन).",
    "question_hi": "घन शब्द के अनेकार्थी रूपों का चयन करें:",
    "options_en": ["Cloud, Hammer, Dense", "Wealth, Property, Profit", "Number, Sum, Difference", "Cause, Prevention, Treatment"],
    "options_hi": ["बादल, हथौड़ा, सघन", "धन, संपत्ति, लाभ", "संख्या, योग, अंतर", "कारण, निवारण, उपचार"],
    "correct_option_index": 0,
    "explanation_en": "(a) Cloud, Hammer, Dense: 'Ghan' means 'dense' (density), 'cloud' (less common), and 'hammer' (less common).",
    "explanation_hi": "(a) बादल, हथौड़ा, सघन: घन का अर्थ 'सघन' (घनत्व), 'बादल' (अप्रकट), और 'हथौड़ा' (अप्रकट) होता है।"
  },
  {
    "question_en": "What is the correct polysemous group for the word 'Ambar' (अंबर)?",
    "question_hi": "अंबर शब्द का सही अनेकार्थी समूह क्या है?",
    "options_en": ["Fire, Water", "Sky, Cloth", "Earth, Netherworld", "Air, Light"],
    "options_hi": ["अग्नि, जल", "आकाश, वस्त्र", "पृथ्वी, पाताल", "वायु, प्रकाश"],
    "correct_option_index": 1,
    "explanation_en": "(b) Sky, Cloth: 'Ambar' means 'sky' and 'cloth'.",
    "explanation_hi": "(b) आकाश, वस्त्र: अंबर का अर्थ 'आकाश' और 'वस्त्र' होता है।"
  },
  {
    "question_en": "What is the appropriate polysemous group for the word 'Teerth' (तीर्थ)?",
    "question_hi": "तीर्थ शब्द के लिए उपयुक्त अनेकार्थी समूह क्या है?",
    "options_en": ["River, Mountain, Forest", "Ghat, Holy place, Sacred", "Journey, Path, Distance", "Knowledge, Experience, Education"],
    "options_hi": ["नदी, पर्वत, वन", "घाट, धर्मक्षेत्र, पवित्र", "यात्रा, मार्ग, दूरी", "ज्ञान, अनुभव, शिक्षा"],
    "correct_option_index": 1,
    "explanation_en": "(b) Ghat, Holy place, Sacred: 'Teerth' means 'holy place' (pilgrimage site) and 'ghat' (bank of a river/sea).",
    "explanation_hi": "(b) घाट, धर्मक्षेत्र, पवित्र: तीर्थ का अर्थ 'धर्मक्षेत्र/पवित्र स्थान' (तीर्थ-स्थल) और 'घाट' (नदी/समुद्र का) होता है।"
  },
  {
    "question_en": "What could be the polysemous forms of the word 'Dweep' (द्वीप)?",
    "question_hi": "द्वीप शब्द का अनेकार्थी रूप क्या हो सकता है?",
    "options_en": ["Water, Land", "Mountain, River", "Island, Elephant", "Jungle, City"],
    "options_hi": ["जल, भूमि", "पर्वत, नदी", "टापू, हाथी", "जंगल, शहर"],
    "correct_option_index": 2,
    "explanation_en": "(c) Island, Elephant: 'Dweep' means 'island' (Andaman Nicobar Islands) and is also used for 'elephant' (less common).",
    "explanation_hi": "(c) टापू, हाथी: द्वीप का अर्थ 'टापू' (अंडमान निकोबार द्वीप समूह) और हाथी के लिए भी प्रयुक्त होता है (अप्रकट)।"
  },
  {
    "question_en": "What are the polysemous meanings of the word 'Yog' (योग)?",
    "question_hi": "योग शब्द के अनेकार्थी अर्थ क्या हैं?",
    "options_en": ["Separation, Distance, Sacrifice", "Sum/Addition, Method/Means, Meditation", "Mathematics, Science, Geography", "Birth, Death, Life"],
    "options_hi": ["वियोग, दूरी, त्याग", "जोड़, उपाय, ध्यान", "गणित, विज्ञान, भूगोल", "जन्म, मृत्यु, जीवन"],
    "correct_option_index": 1,
    "explanation_en": "(b) Sum/Addition, Method/Means, Meditation: 'Yog' means 'sum/addition' (like yoga) and 'method/means' or 'meditation' (Manoyog - concentration).",
    "explanation_hi": "(b) जोड़, उपाय, ध्यान: योग का अर्थ 'जोड़' (जैसे योग) और 'उपाय/ध्यान' (मनोयोग) होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Sukh' (सुख)?",
    "question_hi": "सुख शब्द का अनेकार्थी रूप क्या है?",
    "options_en": ["Joy, Happiness, Heaven", "Sorrow, Pain, Suffering", "Profit, Loss, Result", "Cause, Action, Adjective"],
    "options_hi": ["आनंद, खुशी, स्वर्ग", "दुःख, कष्ट, पीड़ा", "लाभ, हानि, परिणाम", "कारण, क्रिया, विशेषण"],
    "correct_option_index": 0,
    "explanation_en": "(a) Joy, Happiness, Heaven: 'Sukh' means 'joy/happiness' (happy person) and 'heaven' (less common).",
    "explanation_hi": "(a) आनंद, खुशी, स्वर्ग: सुख का अर्थ 'आनंद' (सुखी व्यक्ति) और 'स्वर्ग' (अप्रकट) होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Ravi' (रवि)?",
    "question_hi": "रवि शब्द के अनेकार्थी रूप कौन-से हैं?",
    "options_en": ["Sun, Fire, Jewel", "Moon, Star, Sky", "River, Ocean, Mountain", "Day, Night, Evening"],
    "options_hi": ["सूर्य, आग, मणि", "चंद्रमा, तारा, आकाश", "नदी, सागर, पर्वत", "दिन, रात, संध्या"],
    "correct_option_index": 0,
    "explanation_en": "(a) Sun, Fire, Jewel: 'Ravi' means 'sun' (where Ravi doesn't reach) and 'fire' or 'jewel' (less common).",
    "explanation_hi": "(a) सूर्य, आग, मणि: रवि का अर्थ 'सूर्य' (जहाँ न पहुँचे रवि) और 'आग' या 'मणि' (अप्रकट) होता है।"
  },
  {
    "question_en": "Choose the appropriate polysemous group for the word 'Mool' (मूल).",
    "question_hi": "मूल शब्द के लिए उपयुक्त अनेकार्थी समूह चुनें:",
    "options_en": ["Fruit, Leaf, Stem", "Root, Basis, Origin/Beginning", "Result, Conclusion, End", "Number, Measure, Place"],
    "options_hi": ["फल, पत्ता, तना", "जड़, आधार, आरंभ", "परिणाम, निष्कर्ष, अंत", "संख्या, माप, स्थान"],
    "correct_option_index": 1,
    "explanation_en": "(b) Root, Basis, Origin/Beginning: 'Mool' means 'root' (root pronoun), 'basis' (value), and 'origin/beginning' (less common).",
    "explanation_hi": "(b) जड़, आधार, आरंभ: मूल का अर्थ 'जड़' (मूल सर्वनाम), 'आधार' (मूल्य), और 'आरंभ' (अप्रकट) होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Kshetra' (क्षेत्र)?",
    "question_hi": "क्षेत्र शब्द के अनेकार्थी रूप क्या हैं?",
    "options_en": ["Area, Field, Body", "Time, Tense, Distance", "Cause, Effect, Manner", "Group, Caste, Religion"],
    "options_hi": ["इलाका, खेत, शरीर", "समय, काल, दूरी", "कारण, कार्य, रीति", "समूह, जाति, धर्म"],
    "correct_option_index": 0,
    "explanation_en": "(a) Area, Field, Body: 'Kshetra' means 'area' (urban area), 'field' (agricultural field), and 'body' (less common).",
    "explanation_hi": "(a) इलाका, खेत, शरीर: क्षेत्र का अर्थ 'इलाका' (शहरी क्षेत्र), 'खेत' (कृषि क्षेत्र), और 'शरीर' (अप्रकट) होता है।"
  },
  {
    "question_en": "What is the correct polysemous group for the word 'Vaar' (वार)?",
    "question_hi": "वार शब्द के लिए सही अनेकार्थी समूह क्या है?",
    "options_en": ["Peace, Love, Happiness", "Day, Attack, Sacrifice", "Time, Result, Limit", "Knowledge, Education, Meditation"],
    "options_hi": ["शांति, प्रेम, खुशी", "दिन, हमला, बलिदान", "समय, परिणाम, सीमा", "ज्ञान, शिक्षा, ध्यान"],
    "correct_option_index": 1,
    "explanation_en": "(b) Day, Attack, Sacrifice: 'Vaar' means 'day' (days of the week), 'attack' (strike of a sword), and 'sacrifice' (vaarna - to sacrifice).",
    "explanation_hi": "(b) दिन, हमला, बलिदान: वार का अर्थ 'दिन' (सप्ताह के वार), 'हमला' (तलवार का वार), और 'बलिदान' (वारना) होता है।"
  },
  {
    "question_en": "What are the polysemous words for 'Anal' (अनल)?",
    "question_hi": "अनल का अनेकार्थी शब्द क्या है?",
    "options_en": ["Air", "Water", "Fire, God of Fire (Agni)", "Nectar"],
    "options_hi": ["वायु", "जल", "आग, अग्निदेव", "अमृत"],
    "correct_option_index": 2,
    "explanation_en": "(c) Fire, God of Fire (Agni): A synonym for Agni (fire) is 'Paavak'; 'Anal' is also a synonym for Agni (fire is mentioned in sources).",
    "explanation_hi": "(c) आग, अग्निदेव: अग्नि का पर्यायवाची 'पावक' है, 'अनल' भी अग्नि का पर्यायवाची है (स्रोतों में अग्नि का उल्लेख)।"
  },
  {
    "question_en": "Which is the correct polysemous group for the word 'Kosh' (कोष)?",
    "question_hi": "कोष शब्द के लिए सही अनेकार्थी समूह कौन-सा है?",
    "options_en": ["Book, Knowledge, Science", "King, Subjects, Justice", "Treasury, Sheath, Dictionary", "Gold, Silver, Diamond"],
    "options_hi": ["पुस्तक, ज्ञान, विज्ञान", "राजा, प्रजा, न्याय", "खजाना, म्यान, शब्दकोष", "सोना, चांदी, हीरा"],
    "correct_option_index": 2,
    "explanation_en": "(c) Treasury, Sheath, Dictionary: 'Kosh' means 'treasury' (royal treasury) and 'dictionary/sheath'.",
    "explanation_hi": "(c) खजाना, म्यान, शब्दकोष: कोष का अर्थ 'खजाना' (राजकोष) और 'शब्दकोष/म्यान' होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Vachan' (वचन)?",
    "question_hi": "वचन शब्द के अनेकार्थी रूप कौन-से हैं?",
    "options_en": ["Verb, Tense, Place", "Number, Promise, Statement", "Gender, Case, Noun", "Adjective, Indeclinable, Prefix"],
    "options_hi": ["क्रिया, काल, स्थान", "संख्या, प्रतिज्ञा, कथन", "लिंग, कारक, संज्ञा", "विशेषण, अव्यय, उपसर्ग"],
    "correct_option_index": 1,
    "explanation_en": "(b) Number, Promise, Statement: 'Vachan' means 'number' (singular/plural) and 'promise/statement' (to give one's word).",
    "explanation_hi": "(b) संख्या, प्रतिज्ञा, कथन: वचन का अर्थ 'संख्या' (एकवचन/बहुवचन) और 'प्रतिज्ञा/कथन' (वचन देना) होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Ang' (अंग)?",
    "question_hi": "अंग शब्द के अनेकार्थी रूप क्या हैं?",
    "options_en": ["Face, Hand, Foot", "Part of the body, Part, Assistant", "Time, Distance, Measure", "Color, Form, Speed"],
    "options_hi": ["मुख, हाथ, पैर", "शरीर का हिस्सा, भाग, सहायक", "काल, दूरी, माप", "रंग, रूप, गति"],
    "correct_option_index": 1,
    "explanation_en": "(b) Part of the body, Part, Assistant: 'Ang' means 'part of the body' (parts of Ras) and 'part' or 'assistant'.",
    "explanation_hi": "(b) शरीर का हिस्सा, भाग, सहायक: अंग का अर्थ 'शरीर का हिस्सा' (रस के अंग) और 'भाग' या 'सहायक' होता है।"
  },
  {
    "question_en": "What could be the polysemous forms of the word 'Taatparya' (तात्पर्य)?",
    "question_hi": "तात्पर्य (Taatparya) शब्द का अनेकार्थी रूप क्या हो सकता है?",
    "options_en": ["Meaning, Intention, Goal", "Cause, Action, Result", "Place, Time, Distance", "Quality, Fault, Feature"],
    "options_hi": ["मतलब, अभिप्राय, लक्ष्य", "कारण, क्रिया, फल", "स्थान, समय, दूरी", "गुण, दोष, विशेषता"],
    "correct_option_index": 0,
    "explanation_en": "(a) Meaning, Intention, Goal: 'Taatparya' means 'meaning/intention' and 'goal' (less common).",
    "explanation_hi": "(a) मतलब, अभिप्राय, लक्ष्य: तात्पर्य का अर्थ 'मतलब/अभिप्राय' और 'लक्ष्य' (अप्रकट) होता है।"
  },
  {
    "question_en": "Choose the appropriate polysemous group for the word 'Phal' (फल).",
    "question_hi": "फल शब्द के लिए उपयुक्त अनेकार्थी समूह चुनें:",
    "options_en": ["Result, Fruit, Spearhead", "Seed, Root, Leaf", "Cause, Action, Speed", "Knowledge, Austerity, Religion"],
    "options_hi": ["परिणाम, मेवा, भाला", "बीज, जड़, पत्ता", "कारण, क्रिया, गति", "ज्ञान, तपस्या, धर्म"],
    "correct_option_index": 0,
    "explanation_en": "(a) Result, Fruit, Spearhead: 'Phal' means 'result' and 'fruit/spearhead' (less common).",
    "explanation_hi": "(a) परिणाम, मेवा, भाला: फल का अर्थ 'परिणाम' और 'मेवा/भाला' (अप्रकट) होता है।"
  },
  {
    "question_en": "What could be the polysemous forms of the word 'Tap' (तप)?",
    "question_hi": "तप शब्द का अनेकार्थी रूप क्या हो सकता है?",
    "options_en": ["Austerity, Heat, Religion", "Water, Air, Sky", "Peace, Knowledge, Action", "Truth, Falsehood, Love"],
    "options_hi": ["तपस्या, गर्मी, धर्म", "जल, वायु, आकाश", "शांति, ज्ञान, क्रिया", "सत्य, झूठ, प्रेम"],
    "correct_option_index": 0,
    "explanation_en": "(a) Austerity, Heat, Religion: 'Tap' means 'austerity' (No austerity like truth) and 'heat' (taap). 'Religion' can also be a related meaning.",
    "explanation_hi": "(a) तपस्या, गर्मी, धर्म: तप का अर्थ 'तपस्या' (साँच बराबर तप नहीं) और 'गर्मी' (ताप) होता है। धर्म भी एक अर्थ हो सकता है।"
  },
  {
    "question_en": "What is the correct polysemous group for the word 'Kavi' (कवि)?",
    "question_hi": "कवि शब्द के लिए सही अनेकार्थी समूह क्या है?",
    "options_en": ["Writer, Scholar, Speaker", "Leader, Soldier, Officer", "King, Minister, Subjects", "God, Demon, Human"],
    "options_hi": ["लेखक, विद्वान, वक्ता", "नेता, सैनिक, अधिकारी", "राजा, मंत्री, प्रजा", "देवता, दानव, मानव"],
    "correct_option_index": 0,
    "explanation_en": "(a) Writer, Scholar, Speaker: 'Kavi' means 'writer/poet' (Where the sun cannot reach, the poet reaches) and 'scholar/speaker' (less common).",
    "explanation_hi": "(a) लेखक, विद्वान, वक्ता: कवि का अर्थ 'लेखक/रचनाकार' (जहाँ न पहुँचे रवि वहाँ पहुँचे कवि) और 'विद्वान/वक्ता' (अप्रकट) होता है।"
  },
  {
    "question_en": "What are the polysemous words for 'Bhedbhav' (भेदभाव)?",
    "question_hi": "भेदभाव का अनेकार्थी शब्द क्या है?",
    "options_en": ["Equality", "Difference, Opposition/Discrimination", "Cooperation", "Support"],
    "options_hi": ["समानता", "अंतर, विरोध", "सहयोग", "समर्थन"],
    "correct_option_index": 1,
    "explanation_en": "(b) Difference, Opposition/Discrimination: 'Bhedbhav' means 'difference/distinction', and 'opposition/discrimination' (less common).",
    "explanation_hi": "(b) अंतर, विरोध: भेदभाव का अर्थ 'अंतर/फर्क', और 'विरोध/पक्षपात' (अप्रकट) होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Bhag' (भाग)?",
    "question_hi": "भाग शब्द के अनेकार्थी रूप क्या हैं?",
    "options_en": ["Adding, Subtracting, Multiplying", "Part/Share, Division, Fate/Luck", "Running, Walking, Stopping", "Seeing, Hearing, Speaking"],
    "options_hi": ["जोड़ना, घटाना, गुणा करना", "हिस्सा, विभाजन, भाग्य", "दौड़ना, चलना, रुकना", "देखना, सुनना, बोलना"],
    "correct_option_index": 1,
    "explanation_en": "(b) Part/Share, Division, Fate/Luck: 'Bhag' means 'part/share' (one part), and 'division/fate/luck' (less common).",
    "explanation_hi": "(b) हिस्सा, विभाजन, भाग्य: भाग का अर्थ 'हिस्सा/अंश' (एक भाग), और 'विभाजन/भाग्य' (अप्रकट) होता है।"
  },
  {
    "question_en": "What are the polysemous words for 'Teevra' (तीव्र)?",
    "question_hi": "तीव्र (Teavra) का अनेकार्थी शब्द क्या है?",
    "options_en": ["Slow, Mild", "Fast, Intense, Excellent", "Weak, Feeble", "Long, Short"],
    "options_hi": ["धीमा, मंद", "तेज, प्रचंड, श्रेष्ठ", "कमजोर, दुर्बल", "लंबा, छोटा"],
    "correct_option_index": 1,
    "explanation_en": "(b) Fast, Intense, Excellent: 'Teevra' means 'fast' (sharp intellect) and 'intense/excellent' (less common).",
    "explanation_hi": "(b) तेज, प्रचंड, श्रेष्ठ: तीव्र का अर्थ 'तेज' (तीव्र बुद्धि) और 'प्रचंड/श्रेष्ठ' (अप्रकट) होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Manav' (मानव)?",
    "question_hi": "मानव शब्द का अनेकार्थी रूप क्या है?",
    "options_en": ["God", "Human, A species", "Demon", "Animal"],
    "options_hi": ["देवता", "मनुष्य, एक जाति", "राक्षस", "पशु"],
    "correct_option_index": 1,
    "explanation_en": "(b) Human, A species: 'Manav' means 'human' and 'a species' (human race).",
    "explanation_hi": "(b) मनुष्य, एक जाति: मानव का अर्थ 'मनुष्य' और 'एक जाति' (मानव जाति) होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Sutra' (सूत्र)?",
    "question_hi": "सूत्र शब्द के अनेकार्थी रूप कौन-से हैं?",
    "options_en": ["Thread, Book", "Thread, Rule, Clue/Hint", "Water, Air, Soil", "Seed, Fruit, Flower"],
    "options_hi": ["धागा, किताब", "धागा, नियम, संकेत", "जल, वायु, मिट्टी", "बीज, फल, फूल"],
    "correct_option_index": 1,
    "explanation_en": "(b) Thread, Rule, Clue/Hint: 'Sutra' means 'rule/aphorism' (Purushasukta) and 'thread/clue/hint' (less common).",
    "explanation_hi": "(b) धागा, नियम, संकेत: सूत्र का अर्थ 'नियम/सिद्धांत' (पुरुषसूक्त) और 'धागा/संकेत' (अप्रकट) होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Jal' (जल)?",
    "question_hi": "जल शब्द के अनेकार्थी रूप क्या हैं?",
    "options_en": ["Water, Coolness, Luster/Shine", "Fire, Air, Earth", "Sunlight, Shade, Night", "Knowledge, Meditation, Devotion"],
    "options_hi": ["पानी, शीतलता, चमक", "आग, हवा, पृथ्वी", "धूप, छाँव, रात", "ज्ञान, ध्यान, भक्ति"],
    "correct_option_index": 0,
    "explanation_en": "(a) Water, Coolness, Luster/Shine: 'Jal' means 'water' (water from a spring) and 'luster/shine' (like the shine of a pearl - Rahiman pani rakhiye).",
    "explanation_hi": "(a) पानी, शीतलता, चमक: जल का अर्थ 'पानी' (झरने का जल) और 'चमक' (जैसे मोती की चमक-रहिमन पानी राखिए) होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Sadhna' (साधना)?",
    "question_hi": "साधना (Saadhna) शब्द का अनेकार्थी रूप क्या है?",
    "options_en": ["Effort", "Austerity, Accomplishment, Practice", "Rest", "Sacrifice"],
    "options_hi": ["प्रयास", "तपस्या, पूर्ति, अभ्यास", "विश्राम", "त्याग"],
    "correct_option_index": 1,
    "explanation_en": "(b) Austerity, Accomplishment, Practice: 'Sadhna' means 'austerity/spiritual practice' and 'accomplishment/practice' (less common).",
    "explanation_hi": "(b) तपस्या, पूर्ति, अभ्यास: साधना का अर्थ 'तपस्या' और 'पूर्ति/अभ्यास' (अप्रकट) होता है।"
  },
  {
    "question_en": "What are the polysemous words for 'Utpad' (उत्पाद)?",
    "question_hi": "उत्पाद (Utpad) का अनेकार्थी शब्द क्या है?",
    "options_en": ["Production, Result, Produce", "Investment, Profit, Expense", "Cause, Effect, Distance", "Time, Place, Manner"],
    "options_hi": ["उत्पादन, परिणाम, उपज", "निवेश, लाभ, खर्च", "कारण, प्रभाव, दूरी", "समय, स्थान, रीति"],
    "correct_option_index": 0,
    "explanation_en": "(a) Production, Result, Produce: 'Utpad' means 'product/production' and 'produce' (agricultural produce).",
    "explanation_hi": "(a) उत्पादन, परिणाम, उपज: उत्पाद का अर्थ 'वस्तु/उत्पादन' और 'उपज' (कृषि उत्पाद) होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Vakra' (वक्र)?",
    "question_hi": "वक्र (Vakra) शब्द का अनेकार्थी रूप क्या है?",
    "options_en": ["Straight", "Crooked, Cruel, Saturn", "Long", "Short"],
    "options_hi": ["सीधा", "टेढ़ा, क्रूर, शनि", "लंबा", "छोटा"],
    "correct_option_index": 1,
    "explanation_en": "(b) Crooked, Cruel, Saturn: 'Vakra' means 'crooked' (less common) and 'cruel/Saturn' (less common).",
    "explanation_hi": "(b) टेढ़ा, क्रूर, शनि: वक्र का अर्थ 'टेढ़ा' (अप्रकट) और 'क्रूर/शनि' (अप्रकट) होता है।"
  },
  {
    "question_en": "Choose the correct polysemous group for the word 'Paksh' (पक्ष).",
    "question_hi": "पक्ष शब्द के लिए सही अनेकार्थी समूह चुनें:",
    "options_en": ["Wing, Side, Fortnight", "Opposition, Protest, Enmity", "Justice, Rule, Religion", "Tense, Time, Opportunity"],
    "options_hi": ["पंख, तरफ, पखवाड़ा", "विपक्ष, विरोध, शत्रुता", "न्याय, नियम, धर्म", "काल, समय, अवसर"],
    "correct_option_index": 0,
    "explanation_en": "(a) Wing, Side, Fortnight: 'Paksh' means 'side' (support in one's favor), and 'wing' or 'fortnight' (lunar fortnight).",
    "explanation_hi": "(a) पंख, तरफ, पखवाड़ा: पक्ष का अर्थ 'तरफ' (अपने पक्ष में समर्थन), और 'पंख' या 'पखवाड़ा' (चंद्रमा का पक्ष) होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Vaas' (वास)?",
    "question_hi": "वास (Vaas) शब्द का अनेकार्थी रूप क्या है?",
    "options_en": ["Going", "Residence, Fragrance, Cloth", "Coming", "Sitting"],
    "options_hi": ["जाना", "निवास, महक, वस्त्र", "आना", "बैठना"],
    "correct_option_index": 1,
    "explanation_en": "(b) Residence, Fragrance, Cloth: 'Vaas' means 'residence' (aavaas - housing) and 'fragrance' or 'cloth' (less common).",
    "explanation_hi": "(b) निवास, महक, वस्त्र: वास का अर्थ 'निवास' (आवास) और 'महक' या 'वस्त्र' (अप्रकट) होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Sangathan' (संगठन)?",
    "question_hi": "संगठन (Sanganthan) शब्द का अनेकार्थी रूप क्या है?",
    "options_en": ["Disintegration", "Group, Combination, Organization", "Destruction", "Separation"],
    "options_hi": ["विघटन", "समूह, संयोजन, संस्था", "विनाश", "अलगाव"],
    "correct_option_index": 1,
    "explanation_en": "(b) Group, Combination, Organization: 'Sangathan' means 'group/organization', and 'combination' (composition of the atmosphere).",
    "explanation_hi": "(b) समूह, संयोजन, संस्था: संगठन का अर्थ 'समूह/संस्था', और 'संयोजन' (वायुमंडल का संघटन) होता है।"
  },
  {
    "question_en": "What is included in the polysemous forms of the word 'Aadi' (आदि)?",
    "question_hi": "आदि शब्द के अनेकार्थी रूपों में क्या शामिल है?",
    "options_en": ["End, Middle, Pause", "Cause, Purpose, Action", "Beginning, Etcetera, First", "Fault, Quality, Deed"],
    "options_hi": ["अंत, मध्य, विराम", "कारण, उद्देश्य, क्रिया", "आरंभ, इत्यादि, प्रथम", "दोष, गुण, कर्म"],
    "correct_option_index": 2,
    "explanation_en": "(c) Beginning, Etcetera, First: 'Aadi' means 'beginning' (Aadikaal - ancient period), and 'etcetera' (etc. included). 'First' is also a meaning.",
    "explanation_hi": "(c) आरंभ, इत्यादि, प्रथम: आदि का अर्थ 'आरंभ' (आदिकाल), और 'इत्यादि' (आदि शामिल हैं) होता है। 'प्रथम' भी एक अर्थ है।"
  },
  {
    "question_en": "What is the polysemous group for the word 'Ark' (अर्क)?",
    "question_hi": "अर्क शब्द का अनेकार्थी समूह क्या है?",
    "options_en": ["Sun, Earth", "Moon, Star", "Sun, Extract (Juice), Indra", "Fire, Water, Air"],
    "options_hi": ["सूर्य, पृथ्वी", "चंद्रमा, तारा", "सूर्य, काढ़ा (रस), इंद्र", "आग, पानी, हवा"],
    "correct_option_index": 2,
    "explanation_en": "(c) Sun, Extract (Juice), Indra: 'Ark' means 'sun', 'extract/juice', and 'Indra'.",
    "explanation_hi": "(c) सूर्य, काढ़ा (रस), इंद्र: अर्क का अर्थ 'सूर्य', 'काढ़ा/रस' और 'इंद्र' होता है।"
  },
  {
    "question_en": "What are the polysemous forms of 'Uttardayi' (उत्तरदायी)?",
    "question_hi": "उत्तरदायी (Uttardayi) का अनेकार्थी रूप क्या है?",
    "options_en": ["Independent", "Responsible, Cause", "Careless", "Inactive"],
    "options_hi": ["स्वतंत्र", "जवाबदेह, कारण", "लापरवाह", "निष्क्रिय"],
    "correct_option_index": 1,
    "explanation_en": "(b) Responsible, Cause: 'Uttardayi' means 'responsible/accountable', and 'cause' (the factor responsible for something).",
    "explanation_hi": "(b) जवाबदेह, कारण: उत्तरदायी का अर्थ 'जवाबदेह', और 'कारण' (किसी चीज के लिए उत्तरदायी कारक) होता है।"
  },
  {
    "question_en": "What could be the polysemous words for 'Kshetraphal' (क्षेत्रफल)?",
    "question_hi": "क्षेत्रफल (Kshetrafal) का अनेकार्थी शब्द क्या हो सकता है?",
    "options_en": ["Result of area, Measurement/Area", "Cause, Force", "Distance, Velocity", "Time, Tense"],
    "options_hi": ["क्षेत्र का परिणाम, माप", "कारण, बल", "दूरी, वेग", "समय, काल"],
    "correct_option_index": 0,
    "explanation_en": "(a) Result of area, Measurement/Area: 'Kshetraphal' means 'result/measurement of area' (geographical area).",
    "explanation_hi": "(a) क्षेत्र का परिणाम, माप: क्षेत्रफल का अर्थ 'क्षेत्र का परिणाम/माप' (भौगोलिक क्षेत्रफल) होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Shrinkhala' (श्रृंखला)?",
    "question_hi": "श्रृंखला (Shrinkhala) शब्द के अनेकार्थी रूप क्या हैं?",
    "options_en": ["Alone", "Link, Row, Mountain Range", "Beginning", "End"],
    "options_hi": ["अकेला", "कड़ी, पंक्ति, पर्वतमाला", "शुरू", "अंत"],
    "correct_option_index": 1,
    "explanation_en": "(b) Link, Row, Mountain Range: 'Shrinkhala' means 'mountain range' (Vindhyachal range) and 'link/row/chain' (production chain).",
    "explanation_hi": "(b) कड़ी, पंक्ति, पर्वतमाला: श्रृंखला का अर्थ 'पर्वतमाला' (विंध्याचल श्रृंखला) और 'कड़ी/पंक्ति' (उत्पादन श्रृंखला) होता है।"
  },
  {
    "question_en": "What are the polysemous words for 'Moolya' (मूल्य)?",
    "question_hi": "मूल्य (Moolya) का अनेकार्थी शब्द क्या है?",
    "options_en": ["Price, Respect, Principle/Value", "Cause, Profit, Loss", "Shape, Color, Form", "Place, Time, Manner"],
    "options_hi": ["कीमत, आदर, सिद्धांत", "कारण, लाभ, हानि", "आकार, रंग, रूप", "स्थान, समय, रीति"],
    "correct_option_index": 0,
    "explanation_en": "(a) Price, Respect, Principle/Value: 'Moolya' means 'price' (price of goods), and 'respect/principle/value' (moral values).",
    "explanation_hi": "(a) कीमत, आदर, सिद्धांत: मूल्य का अर्थ 'कीमत' (वस्तुओं का मूल्य), और 'आदर/सिद्धांत' (नैतिक मूल्य) होता है।"
  },
  {
    "question_en": "What are the polysemous words for 'Shushk' (शुष्क)?",
    "question_hi": "शुष्क (Shushk) का अनेकार्थी शब्द क्या है?",
    "options_en": ["Dry, Dull/Uninteresting", "Wet, Moist", "Hot, Cold", "Big, Small"],
    "options_hi": ["सूखा, नीरस", "गीला, नम", "गरम, ठंडा", "बड़ा, छोटा"],
    "correct_option_index": 0,
    "explanation_en": "(a) Dry, Dull/Uninteresting: 'Shushk' means 'dry' (arid region), and 'dull/uninteresting' (less common).",
    "explanation_hi": "(a) सूखा, नीरस: शुष्क का अर्थ 'सूखा' (शुष्क प्रदेश), और 'नीरस' (अप्रकट) होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Var' (वर)?",
    "question_hi": "वर शब्द के अनेकार्थी रूप क्या हैं?",
    "options_en": ["Bride", "Bridegroom, Best/Excellent, Boon", "Disciple", "Servant"],
    "options_hi": ["वधु", "दूल्हा, श्रेष्ठ, वरदान", "शिष्य", "सेवक"],
    "correct_option_index": 1,
    "explanation_en": "(b) Bridegroom, Best/Excellent, Boon: 'Var' means 'boon' and 'bridegroom/best/excellent'.",
    "explanation_hi": "(b) दूल्हा, श्रेष्ठ, वरदान: वर का अर्थ 'वरदान' और 'दूल्हा/श्रेष्ठ' होता है।"
  },
  {
    "question_en": "What are the polysemous words for 'Bhagavat' (भागवत)?",
    "question_hi": "भागवत (Bhaagavat) का अनेकार्थी शब्द क्या है?",
    "options_en": ["Religious text, Fortunate, Devotee of Krishna", "God, Demon", "Truth, Falsehood", "Sin, Virtue"],
    "options_hi": ["धार्मिक ग्रंथ, भाग्यवान, कृष्ण का भक्त", "ईश्वर, दानव", "सत्य, असत्य", "पाप, पुण्य"],
    "correct_option_index": 0,
    "explanation_en": "(a) Religious text, Fortunate, Devotee of Krishna: 'Bhagavat' (less common, well-known polysemous word related to Krishna Bhakti).",
    "explanation_hi": "(a) धार्मिक ग्रंथ, भाग्यवान, कृष्ण का भक्त: भागवत (अप्रकट, प्रसिद्ध अनेकार्थी शब्द, कृष्णभक्ति शाखा से संबंधित)।"
  },
  {
    "question_en": "What are the polysemous words for 'Satya' (सत्य)?",
    "question_hi": "सत्य (Satya) का अनेकार्थी शब्द क्या है?",
    "options_en": ["Lie", "Truth, Oath, God", "Love", "Anger"],
    "options_hi": ["झूठ", "सच्चाई, शपथ, ईश्वर", "प्रेम", "क्रोध"],
    "correct_option_index": 1,
    "explanation_en": "(b) Truth, Oath, God: 'Satya' means 'truth' (No austerity like truth), and 'God/oath' (less common).",
    "explanation_hi": "(b) सच्चाई, शपथ, ईश्वर: सत्य का अर्थ 'सच्चाई' (साँच बराबर तप नहीं), और 'ईश्वर/शपथ' (अप्रकट) होता है।"
  },
  {
    "question_en": "What are the polysemous words for 'Vaasna' (वासना)?",
    "question_hi": "वासना (Vaasna) का अनेकार्थी शब्द क्या है?",
    "options_en": ["Desire, Impression/Subconscious tendency, Fragrance", "Peace, Patience, Knowledge", "Sacrifice, Austerity, Renunciation", "Dharma, Artha, Moksha"],
    "options_hi": ["इच्छा, संस्कार, महक", "शांति, धैर्य, ज्ञान", "त्याग, तपस्या, वैराग्य", "धर्म, अर्थ, मोक्ष"],
    "correct_option_index": 0,
    "explanation_en": "(a) Desire, Impression/Subconscious tendency, Fragrance: 'Vaasna' means 'desire' (less common), 'impression/tendency', and 'fragrance' (related to 'Vaas').",
    "explanation_hi": "(a) इच्छा, संस्कार, महक: वासना का अर्थ 'इच्छा' (अप्रकट), 'संस्कार', और 'महक' (वास से संबंधित) होता है।"
  },
  {
    "question_en": "What are the polysemous words for 'Sangrah' (संग्रह)?",
    "question_hi": "संग्रह (Sangrah) का अनेकार्थी शब्द क्या है?",
    "options_en": ["Sacrifice", "Collection, Accumulation, Group", "Destruction", "Leaving"],
    "options_hi": ["त्याग", "इकट्ठा करना, संचय, समूह", "विनाश", "छोड़ना"],
    "correct_option_index": 1,
    "explanation_en": "(b) Collection, Accumulation, Group: 'Sangrah' means 'to collect' and 'accumulation' (accumulation of capital). 'Group' is also a meaning.",
    "explanation_hi": "(b) इकट्ठा करना, संचय, समूह: संग्रह का अर्थ 'इकट्ठा करना' और 'संचय' (पूंजी का संचय) होता है। 'समूह' भी एक अर्थ है।"
  },
  {
    "question_en": "What are the polysemous words for 'Adhikaar' (अधिकार)?",
    "question_hi": "अधिकार (Adhikaar) का अनेकार्थी शब्द क्या है?",
    "options_en": ["Duty", "Right, Possession, Ownership", "Rule", "Law"],
    "options_hi": ["कर्तव्य", "हक़, कब्जा, स्वामीत्व", "नियम", "कानून"],
    "correct_option_index": 1,
    "explanation_en": "(b) Right, Possession, Ownership: 'Adhikaar' means 'right', and 'possession/control' (control over forest area).",
    "explanation_hi": "(b) हक़, कब्जा, स्वामीत्व: अधिकार का अर्थ 'हक़', और 'कब्जा/नियंत्रण' (वन क्षेत्र पर नियंत्रण) होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Shakti' (शक्ति)?",
    "question_hi": "शक्ति (Shakti) शब्द का अनेकार्थी रूप क्या है?",
    "options_en": ["Softness", "Power, Goddess, Ability", "Fear", "Happiness"],
    "options_hi": ["कोमलता", "बल, देवी, क्षमता", "डर", "खुशी"],
    "correct_option_index": 1,
    "explanation_en": "(b) Power, Goddess, Ability: 'Shakti' means 'power/ability' (political power), and 'Goddess' (Durga).",
    "explanation_hi": "(b) बल, देवी, क्षमता: शक्ति का अर्थ 'बल/क्षमता' (राजनीतिक शक्ति), और 'देवी' (दुर्गा) होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Parva' (पर्व)?",
    "question_hi": "पर्व (Parva) शब्द के अनेकार्थी रूप क्या हैं?",
    "options_en": ["Tree", "Mountain, Festival, Chapter", "River", "Ocean"],
    "options_hi": ["वृक्ष", "पर्वत, त्यौहार, अध्याय", "नदी", "समुद्र"],
    "correct_option_index": 1,
    "explanation_en": "(b) Mountain, Festival, Chapter: 'Parva' means 'festival' (our festivals), and 'chapter/mountain'.",
    "explanation_hi": "(b) पर्वत, त्यौहार, अध्याय: पर्व का अर्थ 'त्यौहार' (हमारे त्यौहार), और 'अध्याय/पर्वत' होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Kaksha' (कक्षा)?",
    "question_hi": "कक्षा (Kaksha) शब्द का अनेकार्थी रूप क्या है?",
    "options_en": ["Room, Class, Group", "Time, Tense, Place", "Cause, Effect, Manner", "Book, Knowledge, Education"],
    "options_hi": ["कमरा, श्रेणी, समूह", "समय, काल, स्थान", "कारण, कार्य, रीति", "पुस्तक, ज्ञान, शिक्षा"],
    "correct_option_index": 0,
    "explanation_en": "(a) Room, Class, Group: 'Kaksha' means 'class/grade' (class-wise), and 'room/group/orbit'.",
    "explanation_hi": "(a) कमरा, श्रेणी, समूह: कक्षा का अर्थ 'श्रेणी' (कक्षावार), और 'कमरा/समूह/परिधि' होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Soot' (सूत)?",
    "question_hi": "सूत शब्द के अनेकार्थी रूप कौन-से हैं?",
    "options_en": ["Thread, Cloth", "Son, Charioteer, Thread", "Seed, Flower, Fruit", "Water, Fire, Air"],
    "options_hi": ["धागा, कपड़ा", "पुत्र, सारथी, धागा", "बीज, फूल, फल", "जल, अग्नि, वायु"],
    "correct_option_index": 1,
    "explanation_en": "(b) Son, Charioteer, Thread: 'Soot' means 'son', 'charioteer' (less common), and 'thread' (like cotton clothes).",
    "explanation_hi": "(b) पुत्र, सारथी, धागा: सूत का अर्थ 'पुत्र', 'सारथी' (अप्रकट), और 'धागा' (जैसे सूती कपड़े) होता है।"
  },
  {
    "question_en": "What is the polysemous group for the word 'Hans' (हंस)?",
    "question_hi": "हंस शब्द का अनेकार्थी समूह क्या है?",
    "options_en": ["Crow, Parrot", "Bird (Swan), Soul, Sun", "Water, Earth", "Sky, Netherworld"],
    "options_hi": ["कौवा, तोता", "पक्षी, आत्मा, सूर्य", "जल, पृथ्वी", "आकाश, पाताल"],
    "correct_option_index": 1,
    "explanation_en": "(b) Bird (Swan), Soul, Sun: Related to 'Hans' (swan/bird) and 'Hansna' (to laugh), and also means 'soul/sun'.",
    "explanation_hi": "(b) पक्षी, आत्मा, सूर्य: हंस (पक्षी) और हंसना (क्रिया) से संबंधित, तथा 'आत्मा/सूर्य' होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Ali' (अलि)?",
    "question_hi": "अलि (Ali) शब्द के अनेकार्थी रूप क्या हैं?",
    "options_en": ["Bumblebee, Female friend, Scorpion", "Enemy, Friend, Ally", "King, Minister, Servant", "Flower, Leaf, Fruit"],
    "options_hi": ["भौंरा, सखी, बिच्छू", "शत्रु, मित्र, सहयोगी", "राजा, मंत्री, सेवक", "फूल, पत्ता, फल"],
    "correct_option_index": 0,
    "explanation_en": "(a) Bumblebee, Female friend, Scorpion: 'Ali' means 'bumblebee', 'female friend' (sakhi - less common), and 'scorpion'.",
    "explanation_hi": "(a) भौंरा, सखी, बिच्छू: अलि का अर्थ 'भौंरा', 'सखी' (अप्रकट), और 'बिच्छू' होता है।"
  },
  {
    "question_en": "What is the correct polysemous group for the word 'Kargha' (करघा)?",
    "question_hi": "करघा (Kargha) शब्द के लिए सही अनेकार्थी समूह क्या है?",
    "options_en": ["Weaving tool, Machine/Loom", "Hand, Foot", "Cloth, Thread", "Power, Strength"],
    "options_hi": ["बुनाई का उपकरण, यंत्र", "हाथ, पैर", "वस्त्र, धागा", "शक्ति, बल"],
    "correct_option_index": 0,
    "explanation_en": "(a) Weaving tool, Machine/Loom: 'Kargha' (handloom, powerloom) and 'machine/apparatus'.",
    "explanation_hi": "(a) बुनाई का उपकरण, यंत्र: करघा (हथकरघा, बिजलीकरघा) और 'यंत्र' (उपकरण) होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Par' (पर)?",
    "question_hi": "पर शब्द के अनेकार्थी रूप क्या हैं?",
    "options_en": ["Wing, On/Above, But", "Below, Behind, Ahead", "Place, Time, Direction", "Verb, Noun, Adjective"],
    "options_hi": ["पंख, ऊपर, परन्तु", "नीचे, पीछे, आगे", "स्थान, समय, दिशा", "क्रिया, संज्ञा, विशेषण"],
    "correct_option_index": 0,
    "explanation_en": "(a) Wing, On/Above, But: 'Par' means 'wing' (like a bird's wing), 'on/above' (like on the roof), and 'but' (conjunction).",
    "explanation_hi": "(a) पंख, ऊपर, परन्तु: पर का अर्थ 'पंख' (जैसे चिड़िया के पर), 'ऊपर' (जैसे छत पर), और 'परन्तु' (लेकिन) होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Aatma' (आत्मा)?",
    "question_hi": "आत्मा (Aatma) शब्द के अनेकार्थी रूप क्या हैं?",
    "options_en": ["Body", "Soul/Self, Mind, Brahman", "Wealth", "Knowledge"],
    "options_hi": ["शरीर", "जीव, मन, ब्रह्म", "धन", "ज्ञान"],
    "correct_option_index": 1,
    "explanation_en": "(b) Soul/Self, Mind, Brahman: 'Aatma' means 'soul/self' (human soul) and 'mind/Brahman'.",
    "explanation_hi": "(b) जीव, मन, ब्रह्म: आत्मा का अर्थ 'जीव' (मानव की आत्मा) और 'मन/ब्रह्म' होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Koti' (कोटि)?",
    "question_hi": "कोटी (Koti) शब्द का अनेकार्थी रूप क्या है?",
    "options_en": ["House", "Crore (10 million), Category, Tip of a bow", "Fort", "Mountain"],
    "options_hi": ["घर", "करोड़, श्रेणी, धनुष का सिरा", "किला", "पहाड़"],
    "correct_option_index": 1,
    "explanation_en": "(b) Crore (10 million), Category, Tip of a bow: 'Koti' means 'crore' (10 million) and 'category/tip/edge'.",
    "explanation_hi": "(b) करोड़, श्रेणी, धनुष का सिरा: कोटी का अर्थ 'करोड़' और 'श्रेणी/सिरा' होता है।"
  },
  {
    "question_en": "What are the polysemous words for 'Apeksha' (अपेक्षा)?",
    "question_hi": "अपेक्षा (Apeksha) का अनेकार्थी शब्द क्या है?",
    "options_en": ["Neglect (Upeksha)", "Need, Comparison, Hope/Expectation", "Despair", "Sacrifice"],
    "options_hi": ["उपेक्षा", "आवश्यकता, तुलना, आशा", "निराशा", "त्याग"],
    "correct_option_index": 1,
    "explanation_en": "(b) Need, Comparison, Hope/Expectation: 'Apeksha' means 'in comparison to' and 'need/hope/expectation'.",
    "explanation_hi": "(b) आवश्यकता, तुलना, आशा: अपेक्षा का अर्थ 'तुलना' (की अपेक्षा) और 'आवश्यकता/आशा' (उम्मीद) होता है।"
  },
  {
    "question_en": "What are the polysemous words for 'Bhagya' (भाग्य)?",
    "question_hi": "भागवत (Bhagya) का अनेकार्थी शब्द क्या है? (Note: Question uses Bhagavat but options suggest Bhagya)",
    "options_en": ["Fate, Luck, Part/Share", "Religion, Karma, Knowledge", "Sacrifice, Austerity, Restraint", "Place, Time, Distance"],
    "options_hi": ["भाग्य, किस्मत, हिस्सा", "धर्म, कर्म, ज्ञान", "त्याग, तपस्या, संयम", "स्थान, समय, दूरी"],
    "correct_option_index": 0,
    "explanation_en": "(a) Fate, Luck, Part/Share: 'Bhagya' means 'fate/luck' (your luck has opened), and 'part/share'. ('Bhagavat' relates to Lord Vishnu/Krishna or his devotee).",
    "explanation_hi": "(a) भाग्य, किस्मत, हिस्सा: भाग्य का अर्थ 'किस्मत' (तेरे भाग्य खुल गए), और 'हिस्सा' (भागवत - भाग का स्वामी)। (प्रश्न में भागवत है, पर विकल्प भाग्य के अर्थ दे रहे हैं)।"
  },
  {
    "question_en": "What are the polysemous words for 'Adhiniyam' (अधिनियम)?",
    "question_hi": "अधिनियम (Adhiniyam) का अनेकार्थी शब्द क्या है?",
    "options_en": ["Law, Rule, System", "Sacrifice, Dedication, Devotion", "Knowledge, Meditation, Austerity", "Happiness, Sorrow, Anger"],
    "options_hi": ["कानून, नियम, व्यवस्था", "त्याग, समर्पण, भक्ति", "ज्ञान, ध्यान, तपस्या", "सुख, दुःख, क्रोध"],
    "correct_option_index": 0,
    "explanation_en": "(a) Law, Rule, System: 'Adhiniyam' means 'Act/Law' (Statistics Act) and 'rule/system'.",
    "explanation_hi": "(a) कानून, नियम, व्यवस्था: अधिनियम का अर्थ 'कानून' (सांख्यिकी अधिनियम) और 'नियम/व्यवस्था' होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Maanak' (मानक)?",
    "question_hi": "मानक (Maanak) शब्द का अनेकार्थी रूप क्या है?",
    "options_en": ["Standard, Ideal, Level", "Contempt, Disrespect", "Doubt, Suspicion", "Knowledge, Education"],
    "options_hi": ["मापदंड, आदर्श, स्तर", "तिरस्कार, निरादर", "संशय, संदेह", "ज्ञान, शिक्षा"],
    "correct_option_index": 0,
    "explanation_en": "(a) Standard, Ideal, Level: 'Maanak' means 'standard/criterion' and 'ideal/level'.",
    "explanation_hi": "(a) मापदंड, आदर्श, स्तर: मानक का अर्थ 'मापदंड' और 'आदर्श/स्तर' होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Achal' (अचल)?",
    "question_hi": "अचल शब्द के अनेकार्थी रूप क्या हैं?",
    "options_en": ["Moving", "Mountain, Stationary, Fixed", "Water", "Fire"],
    "options_hi": ["गतिशील", "पर्वत, स्थिर, निश्चित", "जल", "अग्नि"],
    "correct_option_index": 1,
    "explanation_en": "(b) Mountain, Stationary, Fixed: 'Achal' means 'immovable/fixed' (immovable property), and 'mountain'.",
    "explanation_hi": "(b) पर्वत, स्थिर, निश्चित: अचल का अर्थ 'स्थिर/निश्चित' (अचल संपत्ति), और 'पर्वत' होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Prasaad' (प्रसाद)?",
    "question_hi": "प्रसाद (Prasaad) शब्द का अनेकार्थी रूप क्या है?",
    "options_en": ["Grace, Offering, Palace", "Sorrow, Grief, Anger", "Sacrifice, Separation, Distance", "Knowledge, Meditation, Austerity"],
    "options_hi": ["कृपा, भेंट, महल", "दुख, शोक, क्रोध", "त्याग, वियोग, दूरी", "ज्ञान, ध्यान, तपस्या"],
    "correct_option_index": 0,
    "explanation_en": "(a) Grace, Offering, Palace: 'Prasaad' means 'grace/offering' (like temple prasad) and 'palace' (related to the name Jaishankar Prasad).",
    "explanation_hi": "(a) कृपा, भेंट, महल: प्रसाद का अर्थ 'कृपा/भेंट' (जैसे प्रसाद) और 'महल' (जयशंकर प्रसाद-नाम से संबंधित) होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Jad' (जड़)?",
    "question_hi": "जड़ शब्द के अनेकार्थी रूप क्या हैं?",
    "options_en": ["Root, Foolish, Lifeless/Inert", "Conscious, Living", "Knowledge, Intellect", "Effort, Result"],
    "options_hi": ["मूल, मूर्ख, निर्जीव", "चेतन, सजीव", "ज्ञान, बुद्धि", "प्रयास, फल"],
    "correct_option_index": 0,
    "explanation_en": "(a) Root, Foolish, Lifeless/Inert: 'Jad' means 'root' (uproot), 'foolish' (less common), and 'lifeless/inert' (less common).",
    "explanation_hi": "(a) मूल, मूर्ख, निर्जीव: जड़ का अर्थ 'मूल' (जड़ से उखड़ना), 'मूर्ख' (अप्रकट), और 'निर्जीव' (अप्रकट) होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Mudraa' (मुद्रा)?",
    "question_hi": "मुद्रा (Mudraa) शब्द के अनेकार्थी रूप क्या हैं?",
    "options_en": ["Coin, Expression/Posture, Stamp/Seal", "Gold, Silver, Metal", "Knowledge, Austerity, Meditation", "Time, Place, Speed"],
    "options_hi": ["सिक्का, भाव, छाप", "सोना, चांदी, धातु", "ज्ञान, तपस्या, ध्यान", "समय, स्थान, गति"],
    "correct_option_index": 0,
    "explanation_en": "(a) Coin, Expression/Posture, Stamp/Seal: 'Mudraa' means 'coin/currency' (paper currency), and 'expression/posture' (acting posture) or 'stamp/seal'.",
    "explanation_hi": "(a) सिक्का, भाव, छाप: मुद्रा का अर्थ 'सिक्का/धन' (कागजी मुद्रा), और 'भाव/छाप' (अभिनय की मुद्रा) होता है।"
  },
  {
    "question_en": "What are the polysemous words for 'Sang' (संग)?",
    "question_hi": "संग (Sang) का अनेकार्थी शब्द क्या है?",
    "options_en": ["Alone", "With, Group", "Sacrifice", "Distance"],
    "options_hi": ["अकेला", "साथ, समूह", "त्याग", "दूरी"],
    "correct_option_index": 1,
    "explanation_en": "(b) With, Group: 'Sang' means 'with/together' (mutually), and 'group' (less common).",
    "explanation_hi": "(b) साथ, समूह: संग का अर्थ 'साथ' (पारस्परिक रूप से), और 'समूह' (अप्रकट) होता है।"
  },
  {
    "question_en": "What are the polysemous words for 'Komal' (कोमल)?",
    "question_hi": "कोमल (Komal) का अनेकार्थी शब्द क्या है?",
    "options_en": ["Hard", "Soft, Sweet, Gentle/Calm", "Fast", "Slow"],
    "options_hi": ["कठोर", "मुलायम, मधुर, शांत", "तेज", "धीमा"],
    "correct_option_index": 1,
    "explanation_en": "(b) Soft, Sweet, Gentle/Calm: 'Komal' means 'soft' (less common) and 'sweet/gentle/calm' (less common).",
    "explanation_hi": "(b) मुलायम, मधुर, शांत: कोमल का अर्थ 'मुलायम' (अप्रकट) और 'मधुर/शांत' (अप्रकट) होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Ayan' (अयन)?",
    "question_hi": "अयन (Ayan) शब्द के अनेकार्थी रूप क्या हैं?",
    "options_en": ["Path, Solstice/Sun's movement, Home", "Day, Night, Evening", "Air, Water, Fire", "Knowledge, Meditation, Austerity"],
    "options_hi": ["मार्ग, सूर्य की गति, घर", "दिन, रात, संध्या", "हवा, पानी, आग", "ज्ञान, ध्यान, तपस्या"],
    "correct_option_index": 0,
    "explanation_en": "(a) Path, Solstice/Sun's movement, Home: 'Ayan' means 'path' (like Ramayana) and 'sun's movement/solstice' (Uttarayan/Dakshinayan). 'Home' is also a meaning.",
    "explanation_hi": "(a) मार्ग, सूर्य की गति, घर: अयन का अर्थ 'मार्ग' (जैसे रामायण) और 'सूर्य की गति' (उत्तरायण/दक्षिणायन) होता है। 'घर' भी एक अर्थ है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Daam' (दाम)?",
    "question_hi": "दाम शब्द के अनेकार्थी रूप क्या हैं?",
    "options_en": ["Price, Rope, Garland", "Profit, Loss, Doubt", "Knowledge, Education, Wealth", "Time, Place, Distance"],
    "options_hi": ["कीमत, रस्सी, माला", "लाभ, हानि, संशय", "ज्ञान, शिक्षा, धन", "समय, स्थान, दूरी"],
    "correct_option_index": 0,
    "explanation_en": "(a) Price, Rope, Garland: 'Daam' means 'price' (price of stones), and 'rope/garland' (less common).",
    "explanation_hi": "(a) कीमत, रस्सी, माला: दाम का अर्थ 'कीमत' (गुठलियों के दाम), और 'रस्सी/माला' (अप्रकट) होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Pavan' (पवन)?",
    "question_hi": "पवन (Pavan) शब्द का अनेकार्थी रूप क्या है?",
    "options_en": ["Water", "Air/Wind, Deity, Pure", "Fire", "Earth"],
    "options_hi": ["जल", "वायु, देवता, शुद्ध", "आग", "पृथ्वी"],
    "correct_option_index": 1,
    "explanation_en": "(b) Air/Wind, Deity, Pure: 'Pavan' means 'air/wind', and 'deity/pure'.",
    "explanation_hi": "(b) वायु, देवता, शुद्ध: पवन का अर्थ 'वायु' (हवा), और 'देवता/शुद्ध' होता है।"
  },
  {
    "question_en": "What could be the polysemous forms of the word 'Karod' (करोड़)?",
    "question_hi": "करोड़ (Karod) शब्द का अनेकार्थी रूप क्या हो सकता है?",
    "options_en": ["Ten million, Vast number", "Small group", "Small number", "Zero"],
    "options_hi": ["दस मिलियन, विशाल संख्या", "छोटा समूह", "कम संख्या", "शून्य"],
    "correct_option_index": 0,
    "explanation_en": "(a) Ten million, Vast number: 'Karod' means ten million and 'a vast number'.",
    "explanation_hi": "(a) दस मिलियन, विशाल संख्या: करोड़ (10 मिलियन) और 'विशाल संख्या' होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Dharm' (धर्म)?",
    "question_hi": "धर्म शब्द के अनेकार्थी रूप क्या हैं?",
    "options_en": ["Sin, Lie", "Duty, Nature, Religion/Sect", "Peace, Happiness", "Sacrifice, Renunciation"],
    "options_hi": ["पाप, झूठ", "कर्तव्य, स्वभाव, संप्रदाय", "शांति, खुशी", "त्याग, वैराग्य"],
    "correct_option_index": 1,
    "explanation_en": "(b) Duty, Nature, Religion/Sect: 'Dharm' means 'duty/nature' (standards of dharma), and 'religion/sect'.",
    "explanation_hi": "(b) कर्तव्य, स्वभाव, संप्रदाय: धर्म का अर्थ 'कर्तव्य/स्वभाव' (धर्म के मापदंड), और 'संप्रदाय' होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Grah' (ग्रह)?",
    "question_hi": "ग्रह शब्द के अनेकार्थी रूप कौन-से हैं?",
    "options_en": ["Planet, Seizure/Grasp, Rahu-Ketu", "Sun, Moon, Earth", "Knowledge, Meditation, Austerity", "Happiness, Sorrow, Anger"],
    "options_hi": ["तारा, कब्जा, राहु-केतु", "सूर्य, चंद्रमा, पृथ्वी", "ज्ञान, ध्यान, तपस्या", "सुख, दुःख, क्रोध"],
    "correct_option_index": 0,
    "explanation_en": "(a) Planet, Seizure/Grasp, Rahu-Ketu: 'Grah' means 'planet' (Earth is a blue planet), and 'seizure/grasp' (kidnapping) or 'Rahu-Ketu' (celestial bodies in astrology).",
    "explanation_hi": "(a) तारा, कब्जा, राहु-केतु: ग्रह का अर्थ 'तारा/पिंड' (पृथ्वी नीला ग्रह), और 'कब्जा' (अपहरण) या 'राहु-केतु' होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Udaar' (उदार)?",
    "question_hi": "उदार (Udaar) शब्द का अनेकार्थी रूप क्या है?",
    "options_en": ["Narrow", "Generous, Liberal, Simple", "Miserly", "Hard"],
    "options_hi": ["संकीर्ण", "श्रेष्ठ, दानी, सरल", "कृपण", "कठोर"],
    "correct_option_index": 1,
    "explanation_en": "(b) Generous, Liberal, Simple: 'Udaar' means 'generous/noble' (liberal constitution), and 'simple'.",
    "explanation_hi": "(b) श्रेष्ठ, दानी, सरल: उदार का अर्थ 'श्रेष्ठ/दानी' (उदार संविधान), और 'सरल' होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Gun' (गुण)?",
    "question_hi": "गुण (Gun) शब्द के अनेकार्थी रूप क्या हैं?",
    "options_en": ["Fault (Dosh)", "Quality/Virtue, Rope, Skill", "Deficiency", "Evil"],
    "options_hi": ["दोष", "विशेषता, रस्सी, हुनर", "कमी", "बुराई"],
    "correct_option_index": 1,
    "explanation_en": "(b) Quality/Virtue, Rope, Skill: 'Gun' means 'quality/virtue' (merits-demerits), and 'rope/skill'.",
    "explanation_hi": "(b) विशेषता, रस्सी, हुनर: गुण का अर्थ 'विशेषता' (गुण-अवगुण), और 'रस्सी/हुनर' होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Raaj' (राज)?",
    "question_hi": "राज (Raaj) शब्द के अनेकार्थी रूप क्या हैं?",
    "options_en": ["Rule, King, Secret", "Subjects, Servant, Minister", "Wealth, Property, Profit", "Place, Time, Manner"],
    "options_hi": ["शासन, राजा, रहस्य", "प्रजा, सेवक, मंत्री", "धन, संपत्ति, लाभ", "स्थान, समय, रीति"],
    "correct_option_index": 0,
    "explanation_en": "(a) Rule, King, Secret: 'Raaj' means 'rule/government' (Panchayat Raj), and 'secret' (memory of a secret). 'King' is related.",
    "explanation_hi": "(a) शासन, राजा, रहस्य: राज का अर्थ 'शासन/अधिकार' (पंचायत राज), और 'रहस्य' (राज की स्मृति) होता है। राजा भी संबंधित है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Vigrah' (विग्रह)?",
    "question_hi": "विग्रह (Vigrah) शब्द के अनेकार्थी रूप क्या हैं?",
    "options_en": ["Joining (Sandhi)", "Quarrel, Body, Separation/Analysis", "Addition", "Peace"],
    "options_hi": ["संधि", "लड़ाई, शरीर, विभाजन", "जोड़", "शांति"],
    "correct_option_index": 1,
    "explanation_en": "(b) Quarrel, Body, Separation/Analysis: 'Vigrah' means 'separation/analysis' (Samas-vigrah - compound analysis) and 'quarrel/body'.",
    "explanation_hi": "(b) लड़ाई, शरीर, विभाजन: विग्रह का अर्थ 'विभाजन' (समास-विग्रह) और 'लड़ाई/शरीर' होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Chayan' (चयन)?",
    "question_hi": "चयन (Chayan) शब्द का अनेकार्थी रूप क्या है?",
    "options_en": ["Rejection", "Selection, Choosing, Group", "Leaving", "Opposition"],
    "options_hi": ["अस्वीकृति", "चुनाव, चुनना, समूह", "छोड़ना", "विरोध"],
    "correct_option_index": 1,
    "explanation_en": "(b) Selection, Choosing, Group: 'Chayan' means 'selection' (selection of ministers), and 'choosing/group'.",
    "explanation_hi": "(b) चुनाव, चुनना, समूह: चयन का अर्थ 'चुनाव' (मंत्रियों का चयन), और 'चुनना/समूह' होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Aksh' (अक्ष)?",
    "question_hi": "अक्ष (Aksha) शब्द के अनेकार्थी रूप क्या हैं?",
    "options_en": ["Wheel, Eye, Axis", "Head, Foot, Hand", "Knowledge, Meditation, Austerity", "Happiness, Sorrow, Anger"],
    "options_hi": ["पहिया, आँख, धुरी", "सिर, पैर, हाथ", "ज्ञान, ध्यान, तपस्या", "सुख, दुःख, क्रोध"],
    "correct_option_index": 0,
    "explanation_en": "(a) Wheel, Eye, Axis: 'Aksh' means 'axis' (latitude), and 'wheel/eye'.",
    "explanation_hi": "(a) पहिया, आँख, धुरी: अक्ष का अर्थ 'धुरी' (अक्षांश), और 'पहिया/आँख' होता है।"
  },
  {
    "question_en": "What are the polysemous forms of the word 'Agra' (अग्र)?",
    "question_hi": "अग्र (Agra) शब्द का अनेकार्थी रूप क्या है?",
    "options_en": ["Behind", "Ahead, Tip, Chief/Foremost", "Middle", "End"],
    "options_hi": ["पीछे", "आगे, सिरा, प्रमुख", "मध्य", "अंत"],
    "correct_option_index": 1,
    "explanation_en": "(b) Ahead, Tip, Chief/Foremost: 'Agra' means 'ahead' (agrasar - proceed), and 'tip/chief/foremost'.",
    "explanation_hi": "(b) आगे, सिरा, प्रमुख: अग्र का अर्थ 'आगे' (अग्रसर), और 'सिरा/प्रमुख' होता है।"
  }
];

export default anekarthiShabdQuestions;
