import type { QuizQuestion } from '../../../types';
/*
INSTRUCTIONS TO ADD QUESTIONS:

You can use the following prompt with an AI (like Gemini) to generate questions in the correct format.
Replace the [TOPIC] and [NUMBER_OF_QUESTIONS] placeholders with your desired values. For your request, use [Alankar (अलंकार) in Hindi Grammar] and [100].

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
    "question_en": "What is the element that enhances the beauty of poetry called?",
    "question_hi": "काव्य की शोभा बढ़ाने वाले उपादान को क्या कहा जाता है?",
    "options_en": ["Ras (Aesthetic pleasure)", "Chhand (Meter)", "Alankar (Figure of speech)", "Dhvani (Sound)"],
    "options_hi": ["रस", "छंद", "अलंकार", "ध्वनि"],
    "correct_option_index": 2,
    "explanation_en": "That which adorns or beautifies is called Alankar.",
    "explanation_hi": "जो अलंकृत या भूषित करे उसे ही अलंकार कहते हैं।"
}

====================================================================================================

Once you have the generated array, paste it below, replacing the empty array [].
*/

const alankarQuestions: QuizQuestion[] = [
  {
    "question_en": "What is the element that enhances the beauty of poetry called?",
    "question_hi": "काव्य की शोभा बढ़ाने वाले उपादान को क्या कहा जाता है?",
    "options_en": ["Ras (Aesthetic pleasure)", "Chhand (Meter)", "Alankar (Figure of speech)", "Dhvani (Sound)"],
    "options_hi": ["रस", "छंद", "अलंकार", "ध्वनि"],
    "correct_option_index": 2,
    "explanation_en": "That which adorns or beautifies is called Alankar.",
    "explanation_hi": "जो अलंकृत या भूषित करे उसे ही अलंकार कहते हैं।"
  },
  {
    "question_en": "Which one is NOT among the three types of Alankar mentioned by Acharya Vamana?",
    "question_hi": "आचार्य वामन द्वारा उल्लेखित अलंकार के तीन प्रकारों में से एक कौन सा नहीं है?",
    "options_en": ["Shabdalankar (Word-based)", "Arthalamkar (Meaning-based)", "Rasalankar (Ras-based)", "Ubhayalankar (Dual-based)"],
    "options_hi": ["शब्दालंकार", "अर्थालंकार", "रसालंकार", "उभयालंकार"],
    "correct_option_index": 2,
    "explanation_en": "There are 3 types of Alankar: Shabdalankar, Arthalamkar, and Ubhayalankar.",
    "explanation_hi": "अलंकार के 3 प्रकार होते हैं: शब्दालंकार, अर्थालंकार और उभयालंकार।"
  },
  {
    "question_en": "What is that Alankar called whose charm remains even after replacing the word with its synonym?",
    "question_hi": "उस अलंकार को क्या कहते हैं जिसका चमत्कार शब्द के पर्याय को रखने पर भी बना रहता है?",
    "options_en": ["Shabdalankar", "Upma Alankar (Simile)", "Arthalamkar", "Yamak Alankar (Pun)"],
    "options_hi": ["शब्दालंकार", "उपमालंकार", "अर्थालंकार", "यमक अलंकार"],
    "correct_option_index": 2,
    "explanation_en": "When the charm of the Alankar lies in the meaning instead of the word, it is Arthalamkar.",
    "explanation_hi": "जब अलंकार का चमत्कार शब्द के स्थान पर अर्थ में निहित हो तो वह अर्थालंकार होता है।"
  },
  {
    "question_en": "Where the same letter (varna) is repeated more than once in a sentence, which Alankar is this the definition of?",
    "question_hi": "जहाँ वाक्य में समान वर्णों की आवृत्ति एक से अधिक बार हो, यह परिभाषा किस अलंकार की है?",
    "options_en": ["Yamak (Pun)", "Shlesh (Paronomasia)", "Anupras (Alliteration)", "Vakrokti (Indirect speech)"],
    "options_hi": ["यमक", "श्लेष", "अनुप्रास", "वक्रोक्ति"],
    "correct_option_index": 2,
    "explanation_en": "This is the definition of Anupras Alankar (Alliteration).",
    "explanation_hi": "यह अनुप्रास अलंकार की परिभाषा है।"
  },
  {
    "question_en": "Which of the following Alankars does not fall into the category of Shabdalankar?",
    "question_hi": "निम्न में से कौन सा अलंकार शब्दालंकार की श्रेणी में नहीं आता है?",
    "options_en": ["Yamak (Pun)", "Shlesh (Paronomasia)", "Utpreksha (Poetic fancy)", "Anupras (Alliteration)"],
    "options_hi": ["यमक", "श्लेष", "उत्प्रेक्षा", "अनुप्रास"],
    "correct_option_index": 2,
    "explanation_en": "Utpreksha is an Arthalamkar, while Yamak, Shlesh, and Anupras are Shabdalankars.",
    "explanation_hi": "उत्प्रेक्षा अर्थालंकार है, जबकि यमक, श्लेष, अनुप्रास शब्दालंकार हैं।"
  },
  {
    "question_en": "Upma, Rupak, Utpreksha, Virodhabhas, and Udaharan all fall under which class of Alankar?",
    "question_hi": "उपमा, रूपक, उत्प्रेक्षा, विरोधाभास और उदाहरण, ये सभी किस अलंकार वर्ग के अंतर्गत आते हैं?",
    "options_en": ["Shabdalankar", "Ubhayalankar", "Arthalamkar", "Ras"],
    "options_hi": ["शब्दालंकार", "उभयालंकार", "अर्थालंकार", "रस"],
    "correct_option_index": 2,
    "explanation_en": "Upma (Simile), Rupak (Metaphor), Utpreksha (Poetic fancy), Virodhabhas (Contradiction), Udaharan (Example) etc., are Arthalamkars.",
    "explanation_hi": "उपमा, रूपक, उत्प्रेक्षा, विरोधाभास, उदाहरण आदि अर्थालंकार हैं।"
  },
  {
    "question_en": "If the charm of an Alankar is found in both the word and the meaning, it is called _________.",
    "question_hi": "यदि अलंकार का चमत्कार शब्द और अर्थ दोनों में पाया जाए तो उसे _________ कहा जाता है।",
    "options_en": ["Shabdalankar", "Arthalamkar", "Ubhayalankar", "Paramparit Rupak"],
    "options_hi": ["शब्दालंकार", "अर्थालंकार", "उभयालंकार", "परंपरित रूपक"],
    "correct_option_index": 2,
    "explanation_en": "Where the charm of the Alankar is found in both the word and the meaning, it is Ubhayalankar.",
    "explanation_hi": "जहाँ अलंकार का चमत्कार शब्द और अर्थ दोनों में पाया जाए, वहाँ उभयालंकार होता है।"
  },
  {
    "question_en": "Why is Shlesh Alankar (Paronomasia) placed in the category of Ubhayalankar?",
    "question_hi": "श्लेष अलंकार को उभयालंकार की श्रेणी में क्यों रखा जाता है?",
    "options_en": ["It depends only on the word.", "It depends only on the meaning.", "It involves paronomasia based on both word and meaning.", "It does not depend on anything."],
    "options_hi": ["यह केवल शब्द पर आश्रित होता है।", "यह केवल अर्थ पर आश्रित होता है।", "यह शब्द और अर्थ दोनों के आधार पर श्लेष होता है।", "यह किसी पर आश्रित नहीं होता।"],
    "correct_option_index": 2,
    "explanation_en": "Shlesh falls into the category of Ubhayalankar. Based on the word, it is 'Shabd Shlesh', and based on the meaning, it is 'Arth Shlesh'.",
    "explanation_hi": "श्लेष उभयालंकार की श्रेणी में आता है। शब्द के आधार पर शब्द श्लेष तथा अर्थ के आधार पर अर्थ श्लेष होता है।"
  },
  {
    "question_en": "In the four parts of Upma Alankar (Simile), what is 'the subject of description or that which is being compared' called?",
    "question_hi": "उपमा अलंकार के चार अंगों में से 'जो वर्णन का विषय हो या जिसको तुलना की जाए' उसे क्या कहते हैं?",
    "options_en": ["Upamana (Object of comparison)", "Sadharan Dharma (Common property)", "Upameya (Subject of comparison)", "Vachak Shabd (Comparative word)"],
    "options_hi": ["उपमान", "साधारण धर्म", "उपमेय", "वाचक शब्द"],
    "correct_option_index": 2,
    "explanation_en": "Upameya is that which is being compared.",
    "explanation_hi": "उपमेय वह है जिसकी तुलना की जाए।"
  },
  {
    "question_en": "What part of Upma Alankar is 'that to which the Upameya is compared', i.e., the superior object?",
    "question_hi": "उपमेय की तुलना जिससे की जाती है, अर्थात जो श्रेष्ठ वस्तु हो, उसे उपमा अलंकार का कौन सा अंग कहते हैं?",
    "options_en": ["Upameya", "Sadharan Dharma", "Vachak Shabd", "Upamana"],
    "options_hi": ["उपमेय", "साधारण धर्म", "वाचक शब्द", "उपमान"],
    "correct_option_index": 3,
    "explanation_en": "Upamana is that with which the Upameya is compared.",
    "explanation_hi": "उपमान वह है जिससे उपमेय की तुलना की जाए।"
  },
  {
    "question_en": "Words like 'sā', 'sī', 'se', 'saris', 'sam', and 'samān' are examples of which part of Upma Alankar?",
    "question_hi": "'सा', 'सी', 'से', 'सरिस', 'सम' और 'समान' जैसे शब्द उपमा अलंकार के किस अंग के उदाहरण हैं?",
    "options_en": ["Upamana", "Upameya", "Vachak Shabd (Comparative word)", "Sadharan Dharma"],
    "options_hi": ["उपमान", "उपमेय", "वाचक शब्द", "साधारण धर्म"],
    "correct_option_index": 2,
    "explanation_en": "Words that express the comparison are called Vachak Shabd.",
    "explanation_hi": "जिन शब्दों से तुलना दर्शायी जाती है, वे वाचक शब्द कहलाते हैं।"
  },
  {
    "question_en": "In Upma Alankar, what is 'the common quality for which the comparison is made' called?",
    "question_hi": "उपमा अलंकार में, 'जिस समान गुण के कारण तुलना की जाए' उसे क्या कहते हैं?",
    "options_en": ["Upamana", "Upameya", "Sadharan Guna Dharma (Common property)", "Vachak Shabd"],
    "options_hi": ["उपमान", "उपमेय", "साधारण गुण धर्म", "वाचक शब्द"],
    "correct_option_index": 2,
    "explanation_en": "Sadharan Guna Dharma (Common property).",
    "explanation_hi": "साधारण गुण धर्म।"
  },
  {
    "question_en": "'Face is beautiful like the moon.' (Mukh chandramā ke samān sundar hai) - In this example, 'face' (Mukh) is the Upameya and 'moon' (Chandramā) is the Upamana. What is 'like' (samān)?",
    "question_hi": "'मुख चन्द्रमा के समान सुन्दर है।' - इस उदाहरण में, 'मुख' उपमेय है और 'चन्द्रमा' उपमान है। 'समान' क्या है?",
    "options_en": ["Sadharan Dharma (Common property)", "Upameya (Subject)", "Vachak Shabd (Comparative word)", "Alankar (Figure of speech)"],
    "options_hi": ["साधारण धर्म", "उपमेय", "वाचक शब्द", "अलंकार"],
    "correct_option_index": 2,
    "explanation_en": "'Samān' (like) is the word expressing the comparison.",
    "explanation_hi": "'समान' तुलना दर्शाने वाला शब्द है।"
  },
  {
    "question_en": "When the Upamana (object of comparison) is superimposed identically (without distinction) on the Upameya (subject), which Alankar is it?",
    "question_hi": "जब उपमेय में उपमान का अभेद रूप से आरोप किया जाता है, वहाँ कौन-सा अलंकार होता है?",
    "options_en": ["Upma (Simile)", "Utpreksha (Poetic fancy)", "Rupak (Metaphor)", "Virodhabhas (Contradiction)"],
    "options_hi": ["उपमा", "उत्प्रेक्षा", "रूपक", "विरोधाभास"],
    "correct_option_index": 2,
    "explanation_en": "In Rupak Alankar (Metaphor), the Upamana is superimposed identically on the Upameya.",
    "explanation_hi": "रूपक अलंकार में उपमेय में उपमान का अभेद रूप से आरोप किया जाता है।"
  },
  {
    "question_en": "Which of the three types of Rupak Alankar involves the superimposition of the parts of the Upamana onto the parts of the Upameya?",
    "question_hi": "रूपक अलंकार के तीन भेदों में से कौन सा भेद है जिसमें उपमान के अंगों का भी आरोप उपमेय के अंगों पर किया जाता है?",
    "options_en": ["Nirang Rupak", "Paramparit Rupak", "Sang Rupak", "Purnopma"],
    "options_hi": ["निरंग रूपक", "परंपरित रूपक", "सांग रूपक", "पूर्णोपमा"],
    "correct_option_index": 2,
    "explanation_en": "Sang Rupak is a type of Rupak (Metaphor).",
    "explanation_hi": "सांग रूपक रूपक का एक भेद है।"
  },
  {
    "question_en": "What is the type of Rupak Alankar called in which the parts of the Upamana are NOT superimposed?",
    "question_hi": "रूपक अलंकार का वह भेद जिसमें उपमान के अंगों का आरोप नहीं किया जाता है, वह क्या कहलाता है?",
    "options_en": ["Paramparit Rupak", "Sang Rupak", "Nirang Rupak", "Shlesh Rupak"],
    "options_hi": ["परंपरित रूपक", "सांग रूपक", "निरंग रूपक", "श्लेष रूपक"],
    "correct_option_index": 2,
    "explanation_en": "Nirang Rupak is a type of Rupak (Metaphor).",
    "explanation_hi": "निरंग रूपक रूपक का एक भेद है।"
  },
  {
    "question_en": "When a possibility (sambhavana) of the Upamana is expressed in the Upameya, which Alankar is it?",
    "question_hi": "जब उपमेय में उपमान की संभावना व्यक्त की जाती है, तब कौन-सा अलंकार होता है?",
    "options_en": ["Rupak (Metaphor)", "Upma (Simile)", "Virodhabhas (Contradiction)", "Utpreksha (Poetic fancy)"],
    "options_hi": ["रूपक", "उपमा", "विरोधाभास", "उत्प्रेक्षा"],
    "correct_option_index": 3,
    "explanation_en": "Utpreksha Alankar (Poetic fancy).",
    "explanation_hi": "उत्प्रेक्षा अलंकार।"
  },
  {
    "question_en": "What are the indicative words (Vachak Shabd) of Utpreksha Alankar?",
    "question_hi": "उत्प्रेक्षा अलंकार के वाचक शब्द कौन-कौन से हैं?",
    "options_en": ["sā, sī, se", "manu, mānau, janu, jānau", "iva, khalu", "Both (b) and (c)"],
    "options_hi": ["सा, सी, से", "मनु, मानौ, जनु, जानौ", "इव, खलु", "(b) और (c) दोनों"],
    "correct_option_index": 3,
    "explanation_en": "Words like manu, mānau, janu, jānau, manuj, nishchay, prāyaḥ, bahudhā, iva, khalu are used.",
    "explanation_hi": "मनु, मानौ, जनु, जानौ, मनुज, निश्चय, प्रायः, बहुधा, इव, खलु आदि शब्द प्रयुक्त किए जाते हैं।"
  },
  {
    "question_en": "In the three types of Utpreksha Alankar, what does 'Vastutpreksha' imply?",
    "question_hi": "उत्प्रेक्षा अलंकार के तीन भेदों में 'वस्तुत्प्रेक्षा' से क्या तात्पर्य है?",
    "options_en": ["Possibility of a result in a non-result", "Possibility of a cause in a non-cause", "Possibility of the Upameya in an object", "Identical superimposition"],
    "options_hi": ["अफल में फल की संभावना", "अहेतु में हेतु की संभावना", "किसी वस्तु में उपमेय की संभावना", "अभेद आरोप"],
    "correct_option_index": 2,
    "explanation_en": "(1) Vastutpreksha (Possibility of the Upameya in an object).",
    "explanation_hi": "(1) वस्तुत्प्रेक्षा।"
  },
  {
    "question_en": "Which type of Utpreksha Alankar involves the 'possibility of a cause in a non-cause' (ahetu mein hetu)?",
    "question_hi": "उत्प्रेक्षा अलंकार का वह भेद कौन-सा है जिसमें 'अहेतु में हेतु की संभावना' की जाए?",
    "options_en": ["Vastutpreksha", "Phalotpreksha", "Hetutpreksha", "Sang Rupak"],
    "options_hi": ["वस्तुत्प्रेक्षा", "फलोत्प्रेक्षा", "हेतुत्प्रेक्षा", "सांग रूपक"],
    "correct_option_index": 2,
    "explanation_en": "(2) Hetutpreksha.",
    "explanation_hi": "(2) हेतुत्प्रेक्षा।"
  },
  {
    "question_en": "What is the type of Utpreksha called that involves the 'possibility of a result in a non-result' (aphal mein phal)?",
    "question_hi": "उत्प्रेक्षा का वह भेद जिसमें 'अफल में फल की संभावना' की जाती है, क्या कहलाता है?",
    "options_en": ["Hetutpreksha", "Phalotpreksha", "Vastutpreksha", "Nirang Rupak"],
    "options_hi": ["हेतुत्प्रेक्षा", "फलोत्प्रेक्षा", "वस्तुत्प्रेक्षा", "निरंग रूपक"],
    "correct_option_index": 1,
    "explanation_en": "(3) Phalotpreksha.",
    "explanation_hi": "(3) फलोत्प्रेक्षा।"
  },
  {
    "question_en": "In the line 'Sohat oḍhai pīta paṭu syāma salone gāta. Manau nīlamani saila para ātapa parayau prabhāta.', which Alankar is present due to the word 'manau'?",
    "question_hi": "'सोहत ओढ़ै पीत पटु स्याम सलौने गात। मनौ नीलमनि सैल पर आतप परयौ प्रभात।' - इस पंक्ति में 'मनौ' शब्द के प्रयोग के कारण कौन-सा अलंकार है?",
    "options_en": ["Rupak (Metaphor)", "Upma (Simile)", "Utpreksha (Poetic fancy)", "Yamak (Pun)"],
    "options_hi": ["रूपक", "उपमा", "उत्प्रेक्षा", "यमक"],
    "correct_option_index": 2,
    "explanation_en": "'Manau' is an indicative word (Vachak Shabd) of Utpreksha, expressing possibility.",
    "explanation_hi": "'मनौ' उत्प्रेक्षा का वाचक शब्द है, जो संभावना व्यक्त करता है।"
  },
  {
    "question_en": "When there is an illusion of contradiction (virodh) in a poem without any actual contradiction, which Alankar is it?",
    "question_hi": "जब किसी काव्य में वास्तविक विरोध न होते हुए भी विरोध का आभास होता है, तो वहाँ कौन-सा अलंकार होता है?",
    "options_en": ["Upma (Simile)", "Rupak (Metaphor)", "Virodhabhas (Contradiction)", "Utpreksha (Poetic fancy)"],
    "options_hi": ["उपमा", "रूपक", "विरोधाभास", "उत्प्रेक्षा"],
    "correct_option_index": 2,
    "explanation_en": "Virodhabhas Alankar (Contradiction).",
    "explanation_hi": "विरोधाभास अलंकार।"
  },
  {
    "question_en": "'Yā anurāgī chitta kī gati samujhai nahi koya. Jyoṃ-jyoṃ būḍai syāma raṃga tyoṃ-tyoṃ ujjvala hoya.' - Which Alankar is in this example?",
    "question_hi": "'या अनुरागी चित्त की गति समुझै नहिं कोय। ज्यों-ज्यों बूडै स्याम रंग त्यों-त्यों उज्ज्वल होय।' - इस उदाहरण में कौन सा अलंकार है?",
    "options_en": ["Rupak (Metaphor)", "Utpreksha (Poetic fancy)", "Virodhabhas (Contradiction)", "Udaharan (Example)"],
    "options_hi": ["रूपक", "उत्प्रेक्षा", "विरोधाभास", "उदाहरण"],
    "correct_option_index": 2,
    "explanation_en": "Becoming 'brighter' (ujjval) upon 'drowning' (būḍai) in 'black' (syāma) color gives the illusion of contradiction.",
    "explanation_hi": "श्याम रंग में डूबने पर उज्ज्वल होना, विरोध का आभास देता है।"
  },
  {
    "question_en": "When one statement is made and then a second, similar statement is given to confirm it, which Alankar is it?",
    "question_hi": "जब एक बात कह कर उसकी पुष्टि हेतु दूसरा समान कथन कहा जाए, तब कौन-सा अलंकार होता है?",
    "options_en": ["Virodhabhas (Contradiction)", "Upma (Simile)", "Udaharan Alankar (Example)", "Yamak (Pun)"],
    "options_hi": ["विरोधाभास", "उपमा", "उदाहरण अलंकार", "यमक"],
    "correct_option_index": 2,
    "explanation_en": "Udaharan Alankar (Example).",
    "explanation_hi": "उदाहरण अलंकार।"
  },
  {
    "question_en": "What is necessarily repeated in Anupras Alankar (Alliteration)?",
    "question_hi": "अनुप्रास अलंकार में क्या आवश्यक रूप से दोहराया जाता है?",
    "options_en": ["The whole word", "The meaning", "The same letter or vowel", "The meter (chhand)"],
    "options_hi": ["पूरा शब्द", "अर्थ", "समान वर्ण या स्वर", "छंद"],
    "correct_option_index": 2,
    "explanation_en": "There is a repetition of the same letters (varnas) more than once.",
    "explanation_hi": "समान वर्णों की आवृत्ति एक से अधिक बार होती है।"
  },
  {
    "question_en": "Which Alankar is in 'Chāru chandra kī chanchala kiraṇeṃ'?",
    "question_hi": "'चारु चंद्र की चंचल किरणें' में कौन सा अलंकार है?",
    "options_en": ["Yamak (Pun)", "Shlesh (Paronomasia)", "Anupras (Alliteration)", "Rupak (Metaphor)"],
    "options_hi": ["यमक", "श्लेष", "अनुप्रास", "रूपक"],
    "correct_option_index": 2,
    "explanation_en": "The letter 'cha' (च) is repeated.",
    "explanation_hi": "'च' वर्ण की आवृत्ति है।"
  },
  {
    "question_en": "In Shabdalankar, the charm is inherent in which element?",
    "question_hi": "शब्दालंकार में चमत्कार किस तत्व पर निहित होता है?",
    "options_en": ["The depth of meaning", "Only the word", "The implied meaning (bhāvārth)", "The Ras (aesthetic pleasure)"],
    "options_hi": ["अर्थ की गहराई पर", "केवल शब्द पर", "भावार्थ पर", "रस पर"],
    "correct_option_index": 1,
    "explanation_en": "In Shabdalankar, the charm is inherent in the word.",
    "explanation_hi": "शब्दालंकार में चमत्कार शब्द में निहित होता है।"
  },
  {
    "question_en": "In Arthalamkar, the charm is inherent in what?",
    "question_hi": "अर्थालंकार में चमत्कार किस पर निहित होता है?",
    "options_en": ["The letters of the word", "The meaning", "The verb", "The vowel"],
    "options_hi": ["शब्द के वर्ण पर", "अर्थ पर", "क्रिया पर", "स्वर पर"],
    "correct_option_index": 1,
    "explanation_en": "In Arthalamkar, the charm is inherent in the meaning instead of the word.",
    "explanation_hi": "अर्थालंकार में चमत्कार शब्द के स्थान पर अर्थ में निहित होता है।"
  },
  {
    "question_en": "In 'Upma' (Simile), similarity or comparison is shown between two objects based on what?",
    "question_hi": "'उपमा' में किन दो वस्तुओं में समानता या तुलना प्रदर्शित की जाती है?",
    "options_en": ["Color, form, action", "Nature", "Quality", "All of the above"],
    "options_hi": ["रंग, रूप, क्रिया", "स्वभाव", "गुण", "उपरोक्त सभी"],
    "correct_option_index": 3,
    "explanation_en": "Similarity or comparison is shown due to color, form, quality, action, and nature, etc.",
    "explanation_hi": "रंग, रूप, गुण, क्रिया और स्वभाव आदि के कारण समानता या तुलना प्रदर्शित की जाती है।"
  },
  {
    "question_en": "What is the type of Upma Alankar called where one or more of the parts (Upameya, Upamana, Vachak Shabd, Sadharan Dharma) are missing?",
    "question_hi": "उपमा अलंकार का वह भेद जिसमें उपमेय, उपमान, वाचक शब्द और साधारण धर्म में से कोई एक या एक से अधिक अंग लुप्त हों?",
    "options_en": ["Purnopma (Complete Simile)", "Sang Rupak", "Nirang Rupak", "Luptopma (Incomplete Simile)"],
    "options_hi": ["पूर्णोपमा", "सांग रूपक", "निरंग रूपक", "लुप्तोपमा"],
    "correct_option_index": 3,
    "explanation_en": "Luptopma (Incomplete Simile).",
    "explanation_hi": "लुप्तोपमा।"
  },
  {
    "question_en": "What is the mandatory condition for 'Sang Rupak' in Rupak Alankar (Metaphor)?",
    "question_hi": "रूपक अलंकार में 'सांग रूपक' के लिए अनिवार्य शर्त क्या है?",
    "options_en": ["Possibility of Upamana in Upameya", "Identical superimposition along with the superimposition of the parts of the Upamana", "Only comparison of Upameya and Upamana", "Presence of Sadharan Dharma in Upameya"],
    "options_hi": ["उपमेय में उपमान की संभावना", "अभेद आरोप के साथ उपमान के अंगों का भी आरोप", "उपमेय और उपमान की केवल तुलना", "उपमेय में साधारण धर्म की उपस्थिति"],
    "correct_option_index": 1,
    "explanation_en": "Sang Rupak.",
    "explanation_hi": "सांग रूपक।"
  },
  {
    "question_en": "Utpreksha Alankar (Poetic fancy) is identified by which words that denote possibility?",
    "question_hi": "उत्प्रेक्षा अलंकार की पहचान किन शब्दों से होती है जो संभावना का बोध कराते हैं?",
    "options_en": ["sā, sam", "jyoṃ, tyoṃ", "mānau, janu, nishchay", "yadi, magar"],
    "options_hi": ["सा, सम", "ज्यों, त्यों", "मानौ, जनु, निश्चय", "यदि, मगर"],
    "correct_option_index": 2,
    "explanation_en": "mānau, janu, nishchay are indicative words (Vachak Shabd) of Utpreksha.",
    "explanation_hi": "मानौ, जनु, निश्चय उत्प्रेक्षा के वाचक शब्द हैं।"
  },
  {
    "question_en": "In 'Nirang Rupak', how is the Upamana superimposed on the Upameya?",
    "question_hi": "'निरंग रूपक' में उपमेय पर उपमान का आरोप किस प्रकार किया जाता है?",
    "options_en": ["Including the superimposition of parts", "Without the superimposition of parts", "With possibility", "With an illusion of contradiction"],
    "options_hi": ["अंगों के आरोप सहित", "अंगों के आरोप के बिना", "संभावना सहित", "विरोध आभास सहित"],
    "correct_option_index": 1,
    "explanation_en": "In Nirang Rupak, the parts of the Upamana are not superimposed.",
    "explanation_hi": "निरंग रूपक में उपमान के अंगों का आरोप न किया जाए।"
  },
  {
    "question_en": "'Paramparit Rupak' is a type of Rupak Alankar in which one metaphor is what to another metaphor?",
    "question_hi": "'परंपरित रूपक' रूपक अलंकार का वह भेद है जिसमें एक रूपक दूसरे रूपक पर क्या होता है?",
    "options_en": ["Dependent", "Opposite", "Independent", "Comparative"],
    "options_hi": ["आश्रित", "विरोधी", "स्वतंत्र", "तुलनात्मक"],
    "correct_option_index": 0,
    "explanation_en": "Paramparit Rupak (Chained Metaphor).",
    "explanation_hi": "परंपरित रूपक।"
  },
  {
    "question_en": "In Virodhabhas Alankar (Contradiction), why does the contradiction arise?",
    "question_hi": "विरोधाभास अलंकार में विरोध किस कारण उत्पन्न होता है?",
    "options_en": ["Due to actual contradiction", "Due to the illusion of contradiction", "Due to the charm of the word", "Due to ambiguity of meaning"],
    "options_hi": ["वास्तविक विरोध के कारण", "विरोध के आभास के कारण", "शब्द चमत्कार के कारण", "अर्थ की अस्पष्टता के कारण"],
    "correct_option_index": 1,
    "explanation_en": "There is an illusion of contradiction, although there is no actual contradiction.",
    "explanation_hi": "वास्तविक विरोध न होते हुए भी विरोध का आभास होता है।"
  },
  {
    "question_en": "Where is 'Shlesh' Alankar (Paronomasia) categorized?",
    "question_hi": "'श्लेष' अलंकार की स्थिति कहाँ मानी जाती है?",
    "options_en": ["Shabdalankar", "Arthalamkar", "Ubhayalankar", "All of the above"],
    "options_hi": ["शब्दालंकार", "अर्थालंकार", "उभयालंकार", "उपरोक्त सभी"],
    "correct_option_index": 2,
    "explanation_en": "Shlesh falls into the category of Ubhayalankar.",
    "explanation_hi": "श्लेष उभयालंकार की श्रेणी में आता है।"
  },
  {
    "question_en": "Who considers Alankar helpful in 'enhancing the implied meanings' (bhāvārtho kā utkarṣ) and 'making the experience of form, quality, and action more intense'?",
    "question_hi": "अलंकार को 'भावार्थों का उत्कर्ष' और 'रूप, गुण, क्रिया का अधिक तीव्र अनुभव कराने' में सहायक कौन मानता है?",
    "options_en": ["Acharya Bharata", "Acharya Vamana", "Goswami Tulsidas", "Jaishankar Prasad"],
    "options_hi": ["आचार्य भरत", "आचार्य वामन", "गोस्वामी तुलसीदास", "जयशंकर प्रसाद"],
    "correct_option_index": 1,
    "explanation_en": "The view of Acharya Vamana.",
    "explanation_hi": "आचार्य वामन का मत।"
  },
  {
    "question_en": "Which of the following is NOT mandatory for Upma Alankar (Simile)?",
    "question_hi": "उपमा अलंकार के लिए निम्नलिखित में से क्या अनिवार्य नहीं है?",
    "options_en": ["Upameya (Subject)", "Upamana (Object)", "Vachak Shabd (Comparative word)", "Shabdalankar (Word-based alankar)"],
    "options_hi": ["उपमेय", "उपमान", "वाचक शब्द", "शब्दालंकार"],
    "correct_option_index": 3,
    "explanation_en": "Upma has four parts. Upma is an Arthalamkar, not a Shabdalankar.",
    "explanation_hi": "उपमा के चार अंग होते हैं। उपमा अर्थालंकार है, न कि शब्दालंकार।"
  },
  {
    "question_en": "In Utpreksha Alankar, what is the indicative word 'khalu' used for?",
    "question_hi": "उत्प्रेक्षा अलंकार में प्रयुक्त होने वाला वाचक शब्द 'खलु' का प्रयोग किसलिए होता है?",
    "options_en": ["Comparison", "Superimposition", "Possibility", "Contradiction"],
    "options_hi": ["तुलना", "आरोप", "संभावना", "विरोध"],
    "correct_option_index": 2,
    "explanation_en": "'Khalu' is an indicative word (Vachak Shabd) of Utpreksha that denotes possibility.",
    "explanation_hi": "खलु उत्प्रेक्षा का वाचक शब्द है जो संभावना दर्शाता है।"
  },
  {
    "question_en": "In 'Charaṇa-saroja pakhārana lāgā', which Alankar is present due to the identical superimposition of 'saroja' (lotus - Upamana) on 'charaṇa' (feet - Upameya)?",
    "question_hi": "'चरण-सरोज पखारन लागा' में 'चरण' (उपमेय) पर 'सरोज' (उपमान) का अभेद आरोप होने के कारण कौन-सा अलंकार है?",
    "options_en": ["Upma (Simile)", "Utpreksha (Poetic fancy)", "Rupak (Metaphor)", "Anupras (Alliteration)"],
    "options_hi": ["उपमा", "उत्प्रेक्षा", "रूपक", "अनुप्रास"],
    "correct_option_index": 2,
    "explanation_en": "Rupak Alankar (Metaphor).",
    "explanation_hi": "रूपक अलंकार।"
  },
  {
    "question_en": "Which Shabdalankar (word-based alankar) is it where the charm is in the word, and if the word is replaced by a synonym, the charm is lost?",
    "question_hi": "वह शब्दालंकार कौन सा है जिसमें चमत्कार शब्द में निहित होता है और शब्द का पर्याय रखने पर चमत्कार समाप्त हो जाता है?",
    "options_en": ["Anupras (Alliteration)", "Arthalamkar (Meaning-based)", "Rupak (Metaphor)", "Shlesh (Paronomasia)"],
    "options_hi": ["अनुप्रास", "अर्थालंकार", "रूपक", "श्लेष"],
    "correct_option_index": 3,
    "explanation_en": "(Shlesh is listed under Shabdalankar, and this definition of Shabdalankar applies to all Shabdalankars, including Shlesh.)",
    "explanation_hi": "(श्लेष को शब्दालंकार के तहत सूचीबद्ध किया गया है, और शब्दालंकार की यह परिभाषा श्लेष सहित सभी शब्दालंकारों पर लागू होती है।)"
  },
  {
    "question_en": "If the indicative words 'janu' or 'jānau' are used in a sentence, they are indicative of which Alankar?",
    "question_hi": "यदि किसी वाक्य में 'जनु' या 'जानौ' वाचक शब्द का प्रयोग हो, तो यह किस अलंकार का सूचक है?",
    "options_en": ["Upma (Simile)", "Rupak (Metaphor)", "Utpreksha (Poetic fancy)", "Udaharan (Example)"],
    "options_hi": ["उपमा", "रूपक", "उत्प्रेक्षा", "उदाहरण"],
    "correct_option_index": 2,
    "explanation_en": "'Janu' and 'jānau' are indicative words (Vachak Shabd) of Utpreksha.",
    "explanation_hi": "जनु, जानौ उत्प्रेक्षा के वाचक शब्द हैं।"
  },
  {
    "question_en": "In the types of Utpreksha, what does 'Phalotpreksha' represent?",
    "question_hi": "उत्प्रेक्षा के भेदों में 'फलोत्प्रेक्षा' क्या दर्शाता है?",
    "options_en": ["Possibility of a cause", "Possibility of an object", "Possibility of a result", "Possibility of identity"],
    "options_hi": ["हेतु की संभावना", "वस्तु की संभावना", "फल की संभावना", "अभेद की संभावना"],
    "correct_option_index": 2,
    "explanation_en": "Possibility of a result in a non-result (aphal mein phal).",
    "explanation_hi": "अफल में फल की संभावना।"
  },
  {
    "question_en": "'Vīpsā' and 'Punaruktiprakāsha' are listed under which class of Alankar?",
    "question_hi": "'वीप्सा' और 'पुनरुक्तिप्रकाश' किस अलंकार वर्ग के अंतर्गत सूचीबद्ध हैं?",
    "options_en": ["Arthalamkar", "Rupak", "Ubhayalankar", "Shabdalankar"],
    "options_hi": ["अर्थालंकार", "रूपक", "उभयालंकार", "शब्दालंकार"],
    "correct_option_index": 3,
    "explanation_en": "Both of these are Shabdalankars.",
    "explanation_hi": "ये दोनों शब्दालंकार हैं।"
  },
  {
    "question_en": "In Upma Alankar (Simile), the indicative word 'saris' is used to represent which part?",
    "question_hi": "उपमा अलंकार में 'सरिस' वाचक शब्द का उपयोग किस अंग को दर्शाने के लिए होता है?",
    "options_en": ["Upameya (Subject)", "Upamana (Object)", "Sadharan Dharma (Common property)", "Vachak Shabd (Comparative word)"],
    "options_hi": ["उपमेय", "उपमान", "साधारण धर्म", "वाचक शब्द"],
    "correct_option_index": 3,
    "explanation_en": "'Saris' is a Vachak Shabd (comparative word).",
    "explanation_hi": "सरिस वाचक शब्द है।"
  },
  {
    "question_en": "Examples like 'Kanak kanak te sau gunī', where a word is repeated with different meanings, confirm which Alankar?",
    "question_hi": "'कनक कनक ते सौ गुनी' जैसे उदाहरण किस अलंकार को पुष्ट करते हैं, जहाँ एक शब्द की आवृत्ति भिन्न अर्थों में हो?",
    "options_en": ["Anupras (Alliteration)", "Shlesh (Paronomasia)", "Yamak (Pun)", "Virodhabhas (Contradiction)"],
    "options_hi": ["अनुप्रास", "श्लेष", "यमक", "विरोधाभास"],
    "correct_option_index": 2,
    "explanation_en": "This is a prime example of Shabdalankar (Yamak), where a word is repeated and the meanings are different.",
    "explanation_hi": "यह शब्दालंकार का एक मुख्य उदाहरण है, जहाँ शब्द की आवृत्ति होती है और अर्थ भिन्न होते हैं।"
  },
  {
    "question_en": "In 'Udaharan Alankar' (Example), why is a second statement given after the first one?",
    "question_hi": "'उदाहरण अलंकार' में एक बात कहने के बाद दूसरा कथन क्यों दिया जाता है?",
    "options_en": ["To show contradiction", "To express possibility", "To confirm (validate)", "To superimpose"],
    "options_hi": ["विरोध दर्शाने के लिए", "संभावना व्यक्त करने के लिए", "पुष्टि करने के लिए", "आरोप लगाने के लिए"],
    "correct_option_index": 2,
    "explanation_en": "One statement is made and then a second, similar statement is given to confirm it.",
    "explanation_hi": "एक बात कह कर उसकी पुष्टि हेतु दूसरा समान कथन कहा जाए।"
  },
  {
    "question_en": "What qualities are necessary for an 'Upamana' (Object of comparison)?",
    "question_hi": "'उपमान' के लिए किन गुणों का होना आवश्यक है?",
    "options_en": ["Ordinary object", "Superiority and fame", "Activity", "Similarity of letters"],
    "options_hi": ["साधारण वस्तु", "श्रेष्ठता और प्रसिद्धि", "क्रियात्मकता", "वर्णों की समानता"],
    "correct_option_index": 1,
    "explanation_en": "The Upamana is the superior object to which the comparison is made.",
    "explanation_hi": "उपमान श्रेष्ठ वस्तु होती है जिससे तुलना की जाती है।"
  },
  {
    "question_en": "'Purnopma' (Complete Simile) is the type of Upma in which how many parts of the simile are present?",
    "question_hi": "'पूर्णोपमा' उपमा का वह भेद है जिसमें उपमा के कितने अंग उपस्थित होते हैं?",
    "options_en": ["One", "Two", "Three", "All four"],
    "options_hi": ["एक", "दो", "तीन", "चारों"],
    "correct_option_index": 3,
    "explanation_en": "In Purnopma, all four parts are described.",
    "explanation_hi": "पूर्णोपमा में चारों अंग वर्णित होते हैं।"
  },
  {
    "question_en": "'Vakrokti' (Indirect speech) is listed under which class of Alankar?",
    "question_hi": "'वक्रोक्ति' किस अलंकार वर्ग के तहत सूचीबद्ध है?",
    "options_en": ["Arthalamkar", "Shabdalankar", "Ubhayalankar", "Ras"],
    "options_hi": ["अर्थालंकार", "शब्दालंकार", "उभयालंकार", "रस"],
    "correct_option_index": 1,
    "explanation_en": "Vakrokti is a Shabdalankar.",
    "explanation_hi": "वक्रोक्ति शब्दालंकार है।"
  },
  {
    "question_en": "Which indicative words of Utpreksha Alankar convey a sense of 'certainty' along with possibility?",
    "question_hi": "उत्प्रेक्षा अलंकार के वे कौन से वाचक शब्द हैं जो संभावना के साथ 'निश्चितता' का भाव दर्शाते हैं?",
    "options_en": ["manuj", "iva, khalu", "nishchay, prāyaḥ", "sā, sī"],
    "options_hi": ["मनुज", "इव, खलु", "निश्चय, प्रायः", "सा, सी"],
    "correct_option_index": 2,
    "explanation_en": "nishchay (certainly), prāyaḥ (often), bahudhā (mostly).",
    "explanation_hi": "निश्चय, प्रायः, बहुधा।"
  },
  {
    "question_en": "If an example of Upma (Simile) is missing the Upamana (Object of comparison), what type of simile would it be?",
    "question_hi": "यदि उपमा के किसी उदाहरण में उपमान अनुपस्थित हो, तो यह उपमा का कौन सा भेद कहलाएगा?",
    "options_en": ["Purnopma", "Nirangopma", "Luptopma", "Sangopma"],
    "options_hi": ["पूर्णोपमा", "निरंगोपमा", "लुप्तोपमा", "सांगोपमा"],
    "correct_option_index": 2,
    "explanation_en": "When one or more parts are missing, it is Luptopma.",
    "explanation_hi": "एक या एकाधिक अंग लुप्त होने पर लुप्तोपमा।"
  },
  {
    "question_en": "Which type of Rupak Alankar (Metaphor) does not allow one metaphor to be established without the help of another?",
    "question_hi": "रूपक अलंकार का वह भेद कौन-सा है जो एक रूपक को दूसरे रूपक की सहायता के बिना सिद्ध नहीं होने देता?",
    "options_en": ["Nirang Rupak", "Sang Rupak", "Paramparit Rupak", "Shlesh"],
    "options_hi": ["निरंग रूपक", "सांग रूपक", "परंपरित रूपक", "श्लेष"],
    "correct_option_index": 2,
    "explanation_en": "Paramparit Rupak (Chained Metaphor).",
    "explanation_hi": "परंपरित रूपक।"
  },
  {
    "question_en": "In Virodhabhas Alankar (Contradiction), what is the nature of the 'contradiction'?",
    "question_hi": "विरोधाभास अलंकार में 'विरोध' कैसा होता है?",
    "options_en": ["Always real", "Only apparent/illusory", "Based only on words", "Logical"],
    "options_hi": ["हमेशा वास्तविक", "केवल आभासी", "केवल शब्द पर आधारित", "तर्कसंगत"],
    "correct_option_index": 1,
    "explanation_en": "It is only an illusion of contradiction, not an actual contradiction.",
    "explanation_hi": "वास्तविक विरोध न होते हुए भी विरोध का आभास होता है।"
  },
  {
    "question_en": "Which of the following qualities is LEAST necessary for 'Anupras' Alankar (Alliteration)?",
    "question_hi": "निम्नलिखित में से कौन-सा गुण 'अनुप्रास' अलंकार के लिए सबसे कम आवश्यक है?",
    "options_en": ["Repetition of letters", "Repetition of vowels", "Rhythm of the meter (chhand)", "Being a Shabdalankar"],
    "options_hi": ["वर्णों की आवृत्ति", "स्वर की आवृत्ति", "छंद की गति", "शब्दालंकार होना"],
    "correct_option_index": 2,
    "explanation_en": "Anupras is directly related to letter repetition, whereas the rhythm of the meter is not a part of the Alankar itself.",
    "explanation_hi": "अनुप्रास का सीधा संबंध वर्ण आवृत्ति से है, जबकि छंद की गति अलंकार का अंग नहीं है।"
  },
  {
    "question_en": "Select the correct order of the parts of Upma Alankar (Simile):",
    "question_hi": "उपमा अलंकार के अंगों के सही क्रम का चयन करें:",
    "options_en": ["Upamana, Upameya, Sadharan Dharma, Vachak Shabd", "Upameya, Upamana, Vachak Shabd, Sadharan Dharma", "Vachak Shabd, Upameya, Upamana, Sadharan Dharma", "Sadharan Dharma, Upameya, Upamana, Vachak Shabd"],
    "options_hi": ["उपमान, उपमेय, साधारण धर्म, वाचक शब्द", "उपमेय, उपमान, वाचक शब्द, साधारण धर्म", "वाचक शब्द, उपमेय, उपमान, साधारण धर्म", "साधारण धर्म, उपमेय, उपमान, वाचक शब्द"],
    "correct_option_index": 1,
    "explanation_en": "Upameya, Upamana, Vachak Shabd, Sadharan Dharma.",
    "explanation_hi": "उपमेय, उपमान, वाचक शब्द, साधारण धर्म।"
  },
  {
    "question_en": "For Arthalamkar, what is NOT required for the charm?",
    "question_hi": "अर्थालंकार में चमत्कार के लिए किसकी आवश्यकता नहीं होती है?",
    "options_en": ["Upameya (Subject)", "Upamana (Object)", "Specific order of words", "Sadharan Dharma (Common property)"],
    "options_hi": ["उपमेय", "उपमान", "शब्द का विशिष्ट क्रम", "साधारण धर्म"],
    "correct_option_index": 2,
    "explanation_en": "In Arthalamkar, the charm is inherent in the meaning; the word order/choice is secondary.",
    "explanation_hi": "अर्थालंकार में चमत्कार अर्थ में निहित होता है, शब्द क्रम/चुनाव गौण है।"
  },
  {
    "question_en": "In 'Shlesh' Alankar (Paronomasia), what is 'Shabd Shlesh' (Word-based Paronomasia) based on?",
    "question_hi": "'श्लेष' अलंकार में 'शब्द श्लेष' किस पर आधारित होता है?",
    "options_en": ["Change of meaning", "The word remaining fixed", "Upameya-Upamana relationship", "Illusion of contradiction"],
    "options_hi": ["अर्थ के परिवर्तन पर", "शब्द के स्थिर रहने पर", "उपमेय-उपमान संबंध पर", "विरोध के आभास पर"],
    "correct_option_index": 1,
    "explanation_en": "Shlesh is an Ubhayalankar in which there is paronomasia 'based on the word'.",
    "explanation_hi": "श्लेष उभयालंकार है जिसमें 'शब्द के आधार पर' श्लेष होता है।"
  },
  {
    "question_en": "In 'Kanak kanak te sau gunī', what do the words 'vah' (vah khāyai baurāt hai) and 'yah' (yah pāye baurāy) represent, respectively?",
    "question_hi": "'कनक कनक ते सौ गुनी' में प्रयुक्त 'वह' (वह खायै बौरात है) और 'यह' (यह पाये बौराय) शब्द क्रमशः क्या दर्शाते हैं?",
    "options_en": ["Intoxication and Kanak", "Datura and Gold", "Gold and Intoxication", "Intoxication and Datura"],
    "options_hi": ["मादकता और कनक", "धतूरा और सोना", "सोना और मादकता", "मादकता और धतूरा"],
    "correct_option_index": 1,
    "explanation_en": "'Vah' (eating it) refers to Datura (thorn-apple), and 'yah' (getting it) refers to Gold.",
    "explanation_hi": "'वह' (खाना) धतूरा है और 'यह' (पाना) सोना है।"
  },
  {
    "question_en": "'Rupak' Alankar (Metaphor) is categorized as which type of Alankar?",
    "question_hi": "'रूपक' अलंकार को किस प्रकार के अलंकार की श्रेणी में रखा जाता है?",
    "options_en": ["Shabdalankar", "Ubhayalankar", "Arthalamkar", "Yamak Alankar"],
    "options_hi": ["शब्दालंकार", "उभयालंकार", "अर्थालंकार", "यमक अलंकार"],
    "correct_option_index": 2,
    "explanation_en": "Rupak is an Arthalamkar.",
    "explanation_hi": "रूपक अर्थालंकार है।"
  },
  {
    "question_en": "In contrast to 'Purnopma' (Complete Simile), how is the poetic beauty created in 'Luptopma' (Incomplete Simile)?",
    "question_hi": "'पूर्णोपमा' के विपरीत, 'लुप्तोपमा' में अलंकारिक सौंदर्य किस कारण उत्पन्न होता है?",
    "options_en": ["Due to excess of parts", "Due to presence of parts", "Due to absence of parts", "Due to superimposition on Upameya"],
    "options_hi": ["अंगों की अधिकता से", "अंगों की उपस्थिति से", "अंगों के अभाव से", "उपमेय पर आरोप से"],
    "correct_option_index": 2,
    "explanation_en": "In Luptopma, one or more parts are missing (lupta).",
    "explanation_hi": "लुप्तोपमा में एक या एकाधिक अंग लुप्त होते हैं।"
  },
  {
    "question_en": "This is the main quality of which Alankar: 'Something is said, but something else is understood' (This can be inferred from Shabdalankar)?",
    "question_hi": "'कहा कुछ जाए और समझा कुछ और जाए' (इसका अनुमान शब्दालंकार से लगाया जा सकता है) यह किस अलंकार का मुख्य गुण है?",
    "options_en": ["Anupras (Alliteration)", "Vakrokti (Indirect speech)", "Virodhabhas (Contradiction)", "Shlesh (Paronomasia)"],
    "options_hi": ["अनुप्रास", "वक्रोक्ति", "विरोधाभास", "श्लेष"],
    "correct_option_index": 1,
    "explanation_en": "Vakrokti is a Shabdalankar, which means understanding a statement in a different sense than intended.",
    "explanation_hi": "वक्रोक्ति शब्दालंकार है, जिसका तात्पर्य कथन को किसी अन्य अर्थ में समझना होता है।"
  },
  {
    "question_en": "What is the main function of 'Sadharan Dharma' (Common property) in Upma (Simile)?",
    "question_hi": "उपमा में 'साधारण धर्म' का मुख्य कार्य क्या है?",
    "options_en": ["To establish the subject of comparison", "To establish the basis (factor) of comparison", "To generate comparative words", "To show the absence of comparison"],
    "options_hi": ["तुलना के विषय को स्थापित करना", "तुलना के कारक को स्थापित करना", "तुलनावाचक शब्दों को जन्म देना", "तुलना के अभाव को दर्शाना"],
    "correct_option_index": 1,
    "explanation_en": "This is the common quality (Guna) which is the reason for the comparison.",
    "explanation_hi": "यह वह समान गुण है जिसके कारण तुलना की जाती है।"
  },
  {
    "question_en": "What is the fundamental difference between 'Nirang Rupak' and 'Sang Rupak'?",
    "question_hi": "'निरंग रूपक' और 'सांग रूपक' में मौलिक अंतर क्या है?",
    "options_en": ["Number of words", "Superimposition of the parts of the Upamana", "Ambiguity of meaning", "Rhythm of the meter"],
    "options_hi": ["शब्दों की संख्या", "उपमान के अंगों का आरोप", "अर्थ की अस्पष्टता", "छंद की गति"],
    "correct_option_index": 1,
    "explanation_en": "Sang Rupak includes the superimposition of parts; Nirang Rupak does not.",
    "explanation_hi": "सांग रूपक में अंगों का आरोप होता है, निरंग रूपक में नहीं।"
  },
  {
    "question_en": "In Utpreksha (Poetic fancy), what kind of possibility does 'Vastutpreksha' focus on?",
    "question_hi": "उत्प्रेक्षा में 'वस्तुत्प्रेक्षा' किस प्रकार की संभावना पर केंद्रित होती है?",
    "options_en": ["Cause", "Result", "Object", "Action"],
    "options_hi": ["कारण", "फल", "वस्तु", "क्रिया"],
    "correct_option_index": 2,
    "explanation_en": "(1) Vastutpreksha (Possibility in an object).",
    "explanation_hi": "(1) वस्तुत्प्रेक्षा।"
  },
  {
    "question_en": "If the words 'jyoṃ' or 'tyoṃ' are used in a line and create a situation of contradiction, which Alankar will it be?",
    "question_hi": "यदि किसी पंक्ति में 'ज्यों' या 'त्यों' शब्द का प्रयोग हो और वह विरोधाभास की स्थिति उत्पन्न करे, तो अलंकार कौन-सा होगा?",
    "options_en": ["Utpreksha", "Upma", "Virodhabhas", "Rupak"],
    "options_hi": ["उत्प्रेक्षा", "उपमा", "विरोधाभास", "रूपक"],
    "correct_option_index": 2,
    "explanation_en": "Virodhabhas (Contradiction).",
    "explanation_hi": "विरोधाभास।"
  },
  {
    "question_en": "According to Acharya Vamana, how do Alankars enhance the 'Shri' (beauty) of poetry?",
    "question_hi": "आचार्य वामन के अनुसार, अलंकार 'काव्य की श्री' या शोभा में किस तरह वृद्धि करते हैं?",
    "options_en": ["Only by charm of sound", "Only by charm of meaning", "Acharya Vamana said they enhance the beauty.", "Only by change of meter"],
    "options_hi": ["केवल ध्वनि चमत्कार से", "केवल अर्थ चमत्कार से", "आचार्य वामन ने शोभा वृद्धि की बात कही है।", "केवल छंद परिवर्तन से"],
    "correct_option_index": 2,
    "explanation_en": "Alankars enhance the beauty (Shobha) of poetry.",
    "explanation_hi": "अलंकार काव्य की शोभा बढ़ाते हैं।"
  },
  {
    "question_en": "Which of the following is NOT included in Shabdalankar?",
    "question_hi": "शब्दालंकार में निम्नलिखित में से किसे शामिल नहीं किया जाता है?",
    "options_en": ["Anupras (Alliteration)", "Yamak (Pun)", "Upma (Simile)", "Punaruktiprakasha"],
    "options_hi": ["अनुप्रास", "यमक", "उपमा", "पुनरुक्तिप्रकाश"],
    "correct_option_index": 2,
    "explanation_en": "Upma (Simile) is an Arthalamkar.",
    "explanation_hi": "उपमा अर्थालंकार है।"
  },
  {
    "question_en": "Which Alankar falls into the category of Ubhayalankar?",
    "question_hi": "उभयालंकार की श्रेणी में कौन सा अलंकार आता है?",
    "options_en": ["Yamak", "Shlesh", "Anupras", "Upma"],
    "options_hi": ["यमक", "श्लेष", "अनुप्रास", "उपमा"],
    "correct_option_index": 1,
    "explanation_en": "Shlesh is an Ubhayalankar.",
    "explanation_hi": "श्लेष उभयालंकार है।"
  },
  {
    "question_en": "If a poet, while using Alankar, emphasizes the 'intense experience of form, quality, and action', which Acharya's view is he following?",
    "question_hi": "यदि अलंकार का प्रयोग करते समय कवि 'रूप, गुण, क्रिया' के तीव्र अनुभव पर जोर दे, तो वह किस आचार्य के मत का अनुसरण कर रहा है?",
    "options_en": ["Bharata Muni", "Acharya Vamana", "Keshavdas", "Ramchandra Shukla"],
    "options_hi": ["भरत मुनि", "आचार्य वामन", "केशवदास", "रामचंद्र शुक्ल"],
    "correct_option_index": 1,
    "explanation_en": "Statement by Acharya Vamana.",
    "explanation_hi": "आचार्य वामन का कथन।"
  },
  {
    "question_en": "What is true for 'Hetutpreksha' in Utpreksha Alankar?",
    "question_hi": "'उत्प्रेक्षा' अलंकार में 'हेतुत्प्रेक्षा' के लिए क्या सत्य है?",
    "options_en": ["It is an identical superimposition.", "It is the possibility of a result in a non-result.", "It is the possibility of a cause in a non-cause.", "It is based on common properties."],
    "options_hi": ["यह अभेद आरोप होता है।", "यह अफल में फल की संभावना है।", "यह अहेतु में हेतु की संभावना है।", "यह समान गुण पर आधारित है।"],
    "correct_option_index": 2,
    "explanation_en": "Hetutpreksha (Possibility of a cause in a non-cause).",
    "explanation_hi": "हेतुत्प्रेक्षा।"
  },
  {
    "question_en": "In the types of Rupak Alankar, what is the basis for 'Paramparit Rupak' (Chained Metaphor)?",
    "question_hi": "रूपक अलंकार के भेदों में 'परंपरित रूपक' के लिए क्या आधार है?",
    "options_en": ["Superimposition of the parts of the Upamana", "One metaphor being dependent on another", "Absence of Upameya and Upamana", "Use of comparative words"],
    "options_hi": ["उपमान के अंगों का आरोप", "एक रूपक का दूसरे पर आश्रित होना", "उपमेय और उपमान का लुप्त होना", "तुलनावाचक शब्दों का प्रयोग"],
    "correct_option_index": 1,
    "explanation_en": "Paramparit Rupak (Chained Metaphor).",
    "explanation_hi": "परंपरित रूपक।"
  },
  {
    "question_en": "If all four parts of a simile (Upma) are present in a verse, what type will it be called?",
    "question_hi": "यदि उपमा के चारों अंग किसी छंद में विद्यमान हों तो वह भेद क्या कहलाएगा?",
    "options_en": ["Luptopma", "Purnopma", "Sangopma", "Nirangopma"],
    "options_hi": ["लुप्तोपमा", "पूर्णोपमा", "सांगोपमा", "निरंगोपमा"],
    "correct_option_index": 1,
    "explanation_en": "Purnopma (Complete Simile).",
    "explanation_hi": "पूर्णोपमा।"
  },
  {
    "question_en": "In Anupras Alankar (Alliteration), what does 'varna' (letter) mean?",
    "question_hi": "अनुप्रास अलंकार में 'वर्ण' का क्या अर्थ है?",
    "options_en": ["Word", "Letter/Syllable", "Emotion", "Meaning"],
    "options_hi": ["शब्द", "अक्षर", "भाव", "अर्थ"],
    "correct_option_index": 1,
    "explanation_en": "'Varna' refers to the letter (akshar).",
    "explanation_hi": "वर्ण से तात्पर्य अक्षर से है।"
  },
  {
    "question_en": "Why are Alankars like 'Punaruktiprakasha' and 'Vīpsā' considered Shabdalankars?",
    "question_hi": "'पुनरुक्तिप्रकाश' और 'वीप्सा' जैसे अलंकारों को किस कारण शब्दालंकार माना जाता है?",
    "options_en": ["They arise from the repetition of words.", "They are based on the similarity of meaning.", "They are only types of Utpreksha.", "They only create contradiction."],
    "options_hi": ["ये शब्दों के दोहराव से उत्पन्न होते हैं।", "ये अर्थ की समानता पर आधारित हैं।", "ये केवल उत्प्रेक्षा के भेद हैं।", "ये केवल विरोधाभास उत्पन्न करते हैं।"],
    "correct_option_index": 0,
    "explanation_en": "They are Shabdalankars, and their charm is inherent in the word.",
    "explanation_hi": "ये शब्दालंकार हैं और इनका चमत्कार शब्द में निहित होता है।"
  },
  {
    "question_en": "Where 'the possibility of the Upamana is expressed in the Upameya', which indicative word for 'possibility' is most commonly used?",
    "question_hi": "'जहाँ उपमेय में उपमान की संभावना व्यक्त की जाती है' यहाँ 'संभावना' के लिए कौन सा वाचक शब्द सबसे अधिक प्रयुक्त होता है?",
    "options_en": ["sam", "jyoṃ", "mānau", "sī"],
    "options_hi": ["सम", "ज्यों", "मानौ", "सी"],
    "correct_option_index": 2,
    "explanation_en": "mānau, manu, janu, jānau.",
    "explanation_hi": "मानौ, मनु, जनु, जानौ।"
  },
  {
    "question_en": "What does 'abheda' (identical/without distinction) mean in the context of Rupak Alankar (Metaphor)?",
    "question_hi": "रूपक अलंकार में प्रयुक्त 'अभेद' का अर्थ क्या है?",
    "options_en": ["Without difference", "With difference", "Comparison", "Possibility"],
    "options_hi": ["भेद रहित", "भेद सहित", "तुलना", "संभावना"],
    "correct_option_index": 0,
    "explanation_en": "Identical superimposition (abheda ārop) (without difference).",
    "explanation_hi": "अभेद रूप से आरोप (भेद रहित)।"
  },
  {
    "question_en": "The 'Sadharan Dharma' (Common property) of a simile (Upma) is related to which elements?",
    "question_hi": "'साधारण धर्म' का संबंध उपमा के किन तत्वों से होता है?",
    "options_en": ["Only form and color", "Only quality and action", "Form, color, quality, action, nature", "Only the comparative word"],
    "options_hi": ["केवल रूप और रंग", "केवल गुण और क्रिया", "रूप, रंग, गुण, क्रिया, स्वभाव", "केवल वाचक शब्द"],
    "correct_option_index": 2,
    "explanation_en": "The definition of Upma mentions similarity in all of these.",
    "explanation_hi": "उपमा की परिभाषा में इन सभी में समानता का उल्लेख है।"
  },
  {
    "question_en": "In Utpreksha Alankar, what does 'aphal' (non-result) mean, as used in Phalotpreksha?",
    "question_hi": "उत्प्रेक्षा अलंकार में 'अफल' का क्या अर्थ है, जिसका प्रयोग फलोत्प्रेक्षा में होता है?",
    "options_en": ["Like a result", "That which is not a result", "Cause", "Reason (Hetu)"],
    "options_hi": ["फल के समान", "जो फल न हो", "कारण", "हेतु"],
    "correct_option_index": 1,
    "explanation_en": "Possibility of a result in a non-result (aphal mein phal) (i.e., possibility of a result in that which is not a result).",
    "explanation_hi": "अफल में फल की संभावना (अर्थात जो फल न हो उसमें फल की संभावना)।"
  },
  {
    "question_en": "In 'Virodhabhas' Alankar (Contradiction), how is the sense of contradiction resolved?",
    "question_hi": "'विरोधाभास' अलंकार में विरोध की प्रतीति किस प्रकार समाप्त होती है?",
    "options_en": ["By changing the word's synonym", "By understanding the deeper meaning", "By accepting the Upamana", "By assuming the possibility"],
    "options_hi": ["शब्द के पर्याय बदलने पर", "अर्थ की गहराई समझने पर", "उपमान को स्वीकार करने पर", "संभावना मान लेने पर"],
    "correct_option_index": 1,
    "explanation_en": "The contradiction is only apparent; upon understanding the real meaning, the contradiction is resolved.",
    "explanation_hi": "विरोध केवल आभासी होता है; वास्तविक अर्थ समझने पर विरोध समाप्त हो जाता है।"
  },
  {
    "question_en": "For an Arthalamkar, why can a word be replaced by its synonym?",
    "question_hi": "अर्थालंकार के लिए, शब्द के स्थान पर उसका पर्याय क्यों रखा जा सकता है?",
    "options_en": ["Because the word has no importance.", "Because the charm is inherent in the meaning.", "Because the meter (chhand) gets disrupted.", "Because the Rupak Alankar is destroyed."],
    "options_hi": ["क्योंकि शब्द का कोई महत्व नहीं होता है।", "क्योंकि अर्थ में ही चमत्कार निहित होता है।", "क्योंकि छंद बिगड़ जाता है।", "क्योंकि रूपक अलंकार नष्ट हो जाता है।"],
    "correct_option_index": 1,
    "explanation_en": "The charm of an Arthalamkar is inherent in the meaning.",
    "explanation_hi": "अर्थालंकार का चमत्कार अर्थ में निहित होता है।"
  },
  {
    "question_en": "If the indicative word 'bahudhā' (often/mostly) is used in a poetic line, which Alankar will it be?",
    "question_hi": "यदि किसी काव्य पंक्ति में 'बहुधा' वाचक शब्द का प्रयोग हो, तो कौन सा अलंकार होगा?",
    "options_en": ["Upma (Simile)", "Rupak (Metaphor)", "Virodhabhas (Contradiction)", "Utpreksha (Poetic fancy)"],
    "options_hi": ["उपमा", "रूपक", "विरोधाभास", "उत्प्रेक्षा"],
    "correct_option_index": 3,
    "explanation_en": "'Bahudhā' is an indicative word (Vachak Shabd) of Utpreksha.",
    "explanation_hi": "बहुधा उत्प्रेक्षा का वाचक शब्द है।"
  },
  {
    "question_en": "Which Alankar is it where one statement is confirmed by giving a second, similar statement using an indicative word like 'jaise' (as/like)?",
    "question_hi": "वह अलंकार जिसमें एक बात की पुष्टि के लिए 'जैसे' वाचक शब्द का प्रयोग कर दूसरा समान कथन कहा जाए?",
    "options_en": ["Upma (Simile)", "Rupak (Metaphor)", "Utpreksha (Poetic fancy)", "Udaharan (Example)"],
    "options_hi": ["उपमा", "रूपक", "उत्प्रेक्षा", "उदाहरण"],
    "correct_option_index": 3,
    "explanation_en": "Udaharan Alankar (Example).",
    "explanation_hi": "उदाहरण अलंकार।"
  },
  {
    "question_en": "On what basis is 'Vakrokti' (Indirect speech) a Shabdalankar?",
    "question_hi": "'वक्रोक्ति' अलंकार किस आधार पर शब्दालंकार है?",
    "options_en": ["On the repetition of letters", "On the charm of the words", "On the Upameya-Upamana relationship", "On the illusion of contradiction"],
    "options_hi": ["वर्णों की आवृत्ति पर", "शब्दों के चमत्कार पर", "उपमेय-उपमान संबंध पर", "विरोध के आभास पर"],
    "correct_option_index": 1,
    "explanation_en": "The charm of a Shabdalankar is inherent in the word.",
    "explanation_hi": "शब्दालंकार का चमत्कार शब्द में निहित होता है।"
  },
  {
    "question_en": "In Upma Alankar (Simile), 'form' (rūp) and 'nature' (svabhāv) are considered equal under which part?",
    "question_hi": "उपमा अलंकार में 'रूप' और 'स्वभाव' को किस अंग के तहत समान माना जाता है?",
    "options_en": ["Upameya (Subject)", "Upamana (Object)", "Vachak Shabd (Comparative word)", "Sadharan Dharma (Common property)"],
    "options_hi": ["उपमेय", "उपमान", "वाचक शब्द", "साधारण धर्म"],
    "correct_option_index": 3,
    "explanation_en": "Sadharan Dharma (Common property).",
    "explanation_hi": "साधारण धर्म।"
  },
  {
    "question_en": "In 'Nirang Rupak', on what is the identical superimposition of the Upamana made?",
    "question_hi": "'निरंग रूपक' में उपमान का अभेद आरोप किस पर किया जाता है?",
    "options_en": ["Only on the Upameya", "On the parts of both Upameya and Upamana", "On the Sadharan Dharma", "On the Vachak Shabd"],
    "options_hi": ["केवल उपमेय पर", "उपमेय और उपमान दोनों के अंगों पर", "साधारण धर्म पर", "वाचक शब्द पर"],
    "correct_option_index": 0,
    "explanation_en": "In Nirang Rupak, the parts of the Upamana are not superimposed, only the Upamana on the Upameya.",
    "explanation_hi": "निरंग रूपक में उपमान के अंगों का आरोप नहीं होता है, केवल उपमेय पर ही आरोप होता है।"
  },
  {
    "question_en": "Which of the indicative words of Utpreksha Alankar gives the sense of 'definitely' or 'certainly'?",
    "question_hi": "उत्प्रेक्षा अलंकार के वाचक शब्दों में से कौन-सा शब्द 'निश्चित ही' का भाव देता है?",
    "options_en": ["janu", "manuj", "nishchay", "iva"],
    "options_hi": ["जनु", "मनुज", "निश्चय", "इव"],
    "correct_option_index": 2,
    "explanation_en": "Nishchay (certainly).",
    "explanation_hi": "निश्चय।"
  },
  {
    "question_en": "Why is 'Yamak' Alankar (Pun) called a Shabdalankar?",
    "question_hi": "'यमक' अलंकार शब्दालंकार क्यों कहलाता है?",
    "options_en": ["Because it brings charm to the meaning of words.", "Because it brings charm to the usage of words.", "Because it opposes Arthalamkar.", "Because it goes with the meter (chhand)."],
    "options_hi": ["क्योंकि यह शब्दों के अर्थ में चमत्कार लाता है।", "क्योंकि यह शब्दों के प्रयोग में चमत्कार लाता है।", "क्योंकि यह अर्थालंकार का विरोध करता है।", "क्योंकि यह छंद के साथ चलता है।"],
    "correct_option_index": 1,
    "explanation_en": "Yamak is a Shabdalankar whose charm is inherent in the word.",
    "explanation_hi": "यमक शब्दालंकार है जिसका चमत्कार शब्द में निहित होता है।"
  },
  {
    "question_en": "If the indicative word 'mānau' were not present in an Utpreksha Alankar, what relationship would be established between the Upameya and Upamana?",
    "question_hi": "यदि उत्प्रेक्षा अलंकार में 'मानौ' वाचक शब्द न होता, तो उपमेय और उपमान के बीच क्या संबंध स्थापित होता?",
    "options_en": ["Identical superimposition (Rupak)", "Mere comparison (Upma)", "Absence of possibility", "Contradiction (Virodhabhas)"],
    "options_hi": ["अभेद आरोप", "मात्र तुलना", "संभावना का अभाव", "विरोधाभास"],
    "correct_option_index": 2,
    "explanation_en": "The indicative word (Vachak Shabd) denotes the possibility. In its absence, the sense of possibility would be lost.",
    "explanation_hi": "वाचक शब्द संभावना को दर्शाता है। उसके अभाव में संभावना का बोध नहीं होगा।"
  },
  {
    "question_en": "The repetition of 'kanak' in 'Kanak kanak te sau gunī' is an example of which type of Alankar?",
    "question_hi": "'कनक कनक ते सौ गुनी' में 'कनक' की आवृत्ति किस प्रकार के अलंकार का उदाहरण है?",
    "options_en": ["Arthalamkar", "Shabdalankar", "Ubhayalankar", "Ordinary Alankar"],
    "options_hi": ["अर्थालंकार", "शब्दालंकार", "उभयालंकार", "साधारण अलंकार"],
    "correct_option_index": 1,
    "explanation_en": "Yamak (Shabdalankar).",
    "explanation_hi": "यमक (शब्दालंकार)।"
  },
  {
    "question_en": "For Upma Alankar (Simile), which part is used to demonstrate the similarity of 'form' (rūp) and 'color' (rang)?",
    "question_hi": "उपमा अलंकार के लिए 'रूप' और 'रंग' की समानता प्रदर्शित करने के लिए किस अंग की सहायता ली जाती है?",
    "options_en": ["Upamana (Object)", "Upameya (Subject)", "Sadharan Dharma (Common property)", "Vachak Shabd (Comparative word)"],
    "options_hi": ["उपमान", "उपमेय", "साधारण धर्म", "वाचक शब्द"],
    "correct_option_index": 2,
    "explanation_en": "Sadharan Dharma includes color and form.",
    "explanation_hi": "साधारण धर्म में रंग और रूप शामिल हैं।"
  },
  {
    "question_en": "If there is a 'possibility of a cause in a non-cause' (ahetu mein hetu) in Utpreksha, it falls under which type?",
    "question_hi": "यदि उत्प्रेक्षा में 'अहेतु में हेतु' की संभावना हो, तो यह किस भेद के अंतर्गत आता है?",
    "options_en": ["Vastutpreksha", "Phalotpreksha", "Hetutpreksha", "Sang Rupak"],
    "options_hi": ["वस्तुत्प्रेक्षा", "फलोत्प्रेक्षा", "हेतुत्प्रेक्षा", "सांग रूपक"],
    "correct_option_index": 2,
    "explanation_en": "Hetutpreksha.",
    "explanation_hi": "हेतुत्प्रेक्षा।"
  },
  {
    "question_en": "According to Acharya Vamana, what is the main purpose of Alankar in poetry?",
    "question_hi": "आचार्य वामन के अनुसार, अलंकार का मुख्य उद्देश्य काव्य में क्या करना है?",
    "options_en": ["To follow rules", "Clarity of meaning", "To provide intense experience", "Only entertainment"],
    "options_hi": ["नियमों का पालन करना", "अर्थ की स्पष्टता", "तीव्र अनुभव कराना", "केवल मनोरंजन"],
    "correct_option_index": 2,
    "explanation_en": "Helpful in 'making the experience of form, quality, and action more intense'.",
    "explanation_hi": "'रूप, गुण और क्रिया का अधिक तीव्र अनुभव कराने' में सहायक।"
  },
  {
    "question_en": "Which type of Rupak Alankar requires another metaphor to establish the first one?",
    "question_hi": "रूपक अलंकार का वह भेद जिसमें एक रूपक को सिद्ध करने के लिए दूसरा रूपक आवश्यक हो?",
    "options_en": ["Sang Rupak", "Nirang Rupak", "Paramparit Rupak", "Purnopma"],
    "options_hi": ["सांग रूपक", "निरंग रूपक", "परंपरित रूपक", "पूर्णोपमा"],
    "correct_option_index": 2,
    "explanation_en": "Paramparit Rupak (Chained Metaphor).",
    "explanation_hi": "परंपरित रूपक।"
  },
  {
    "question_en": "Which of the following is an Arthalamkar?",
    "question_hi": "निम्नलिखित में से कौन-सा अलंकार अर्थालंकार है?",
    "options_en": ["Anupras (Alliteration)", "Yamak (Pun)", "Virodhabhas (Contradiction)", "Vīpsā (Repetition)"],
    "options_hi": ["अनुप्रास", "यमक", "विरोधाभास", "वीप्सा"],
    "correct_option_index": 2,
    "explanation_en": "Virodhabhas is an Arthalamkar.",
    "explanation_hi": "विरोधाभास अर्थालंकार है।"
  },
  {
    "question_en": "In Shlesh (Paronomasia), what does 'Arth Shlesh' (Meaning-based Paronomasia) depend on?",
    "question_hi": "श्लेष में 'अर्थ श्लेष' किस पर निर्भर करता है?",
    "options_en": ["Change of word", "Synonym of the word", "Meaning of the sentence", "Repetition of the letter"],
    "options_hi": ["शब्द के परिवर्तन पर", "शब्द के पर्याय पर", "वाक्य के अर्थ पर", "वर्ण की आवृत्ति पर"],
    "correct_option_index": 2,
    "explanation_en": "Arth Shlesh is based on the meaning.",
    "explanation_hi": "अर्थ श्लेष अर्थ के आधार पर होता है।"
  },
  {
    "question_en": "If the indicative words 'iva' and 'khalu' are used in a poetic line, they are an example of which Alankar?",
    "question_hi": "यदि किसी पंक्ति में 'इव' और 'खलु' वाचक शब्द का प्रयोग हो, तो वह किस अलंकार का उदाहरण होगा?",
    "options_en": ["Rupak (Metaphor)", "Upma (Simile)", "Virodhabhas (Contradiction)", "Utpreksha (Poetic fancy)"],
    "options_hi": ["रूपक", "उपमा", "विरोधाभास", "उत्प्रेक्षा"],
    "correct_option_index": 3,
    "explanation_en": "'Iva' and 'khalu' are indicative words (Vachak Shabd) of Utpreksha.",
    "explanation_hi": "इव, खलु उत्प्रेक्षा के वाचक शब्द हैं।"
  },
  {
    "question_en": "In 'Sohat oḍhai pīta paṭu syāma salone gāta' (Q. 22), 'syāma salone gāta' (Shri Krishna's dark, lovely body) is an example of which part of which Alankar?",
    "question_hi": "'सोहत ओढ़ै पीत पटु स्याम सलौने गात' (Q. 22) में 'श्याम सलौने गात' किस अलंकार के किस अंग का उदाहरण है?",
    "options_en": ["Sadharan Dharma of Upma", "Upameya of Utpreksha", "Upamana of Rupak", "Sadharan Dharma of Virodhabhas"],
    "options_hi": ["उपमा का साधारण धर्म", "उत्प्रेक्षा का उपमेय", "रूपक का उपमान", "विरोधाभास का साधारण धर्म"],
    "correct_option_index": 1,
    "explanation_en": "'Syāma salone gāta' (Krishna's dark body) is the Upameya (subject) upon which the possibility of the Neelmani mountain (Upamana) is expressed.",
    "explanation_hi": "'श्याम सलौने गात' (श्रीकृष्ण का साँवला शरीर) वह उपमेय है जिस पर नीलमणि पर्वत की संभावना व्यक्त की गई है।"
  },
  {
    "question_en": "Which element dominates in 'Punaruktiprakasha' and 'Vakrokti' Alankars?",
    "question_hi": "'पुनरुक्तिप्रकाश' और 'वक्रोक्ति' अलंकारों में किस तत्व का प्रभुत्व होता है?",
    "options_en": ["Meaning (Artha)", "Word (Shabd)", "Ras (Aesthetic pleasure)", "Emotion (Bhav)"],
    "options_hi": ["अर्थ", "शब्द", "रस", "भाव"],
    "correct_option_index": 1,
    "explanation_en": "Both are Shabdalankars.",
    "explanation_hi": "दोनों शब्दालंकार हैं।"
  }
];
export default alankarQuestions;