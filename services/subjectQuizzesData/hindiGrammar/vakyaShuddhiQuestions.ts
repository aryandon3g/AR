import type { QuizQuestion } from '../../../types';

const vakyaShuddhiQuestions: QuizQuestion[] = [
  {
    "question_en": "Identify the correctly spelled word:",
    "question_hi": "शुद्ध वर्तनी वाला शब्द पहचानिए:",
    "options_en": ["Paradarsini", "Pradarshani", "Pradarshini", "Paradarasani"],
    "options_hi": ["परदर्सिनी", "प्रदर्शनी", "प्रदर्शिनी", "परदरसनी"],
    "correct_option_index": 1,
    "explanation_en": "(B) Pradarshani: This question is based on spelling correction. From a spelling perspective, 'Pradarshani' (Exhibition) is correct.",
    "explanation_hi": "(B) प्रदर्शनी: यह प्रश्न वर्तनी की शुद्धि पर आधारित है। वर्तनी की दृष्टि से 'प्रदर्शनी' शुद्ध है।"
  },
  {
    "question_en": "Select the sentence below that is free from error related to the postposition 'ne' (ने):",
    "question_hi": "निम्नलिखित में उस वाक्य का चयन कीजिए जो ‘ने’ परसर्ग की अशुद्धि से मुक्त है:",
    "options_en": [
      "Mother read the book (incorrect object marking).",
      "Mother read the book.",
      "Mother read the book (redundant object marking).",
      "The boy played with the ball (incorrect 'ne' with intransitive)."
    ],
    "options_hi": [
      "माता जी को पुस्तक पढ़ी।",
      "माता जी ने पुस्तक पढ़ी।",
      "माता जी ने पुस्तक को पढ़ी।",
      "बालक ने गेंद से खेला।"
    ],
    "correct_option_index": 1,
    "explanation_en": "(B) Mother read the book.: The 'ne' particle is used with the subject in past tense forms derived from the past participle of transitive verbs. The verb's gender and number agree with the object ('पुस्तक', feminine). (C) has redundant 'ko', (D) uses 'ne' incorrectly with an intransitive verb 'khela'.",
    "explanation_hi": "(B) माता जी ने पुस्तक पढ़ी।: सकर्मक क्रिया के भूतकालिक कृदंत से बने काल में 'ने' कारक का प्रयोग होता है, और क्रिया का लिंग तथा वचन कर्म (पुस्तक, स्त्रीलिंग) के अनुसार होता है। (C) में 'को' अनावश्यक है, (D) में 'खेला' अकर्मक है, अतः 'ने' अशुद्ध है।"
  },
  {
    "question_en": "'There the king and queen fainted (masculine singular verb).' What is the most correct form of this sentence?",
    "question_hi": "'वहाँ राजा और रानी मूर्छित हो गया।' इस वाक्य का सर्वाधिक शुद्ध रूप क्या होगा?",
    "options_en": [
      "There the king and queen fainted (feminine singular).",
      "There the king and queen fainted (masculine plural).",
      "The king and queen fainted.",
      "There the king fainted and the queen fainted (incorrect structure)."
    ],
    "options_hi": [
      "वहाँ राजा और रानी मूर्छित हो गई।",
      "वहाँ राजा और रानी मूर्छित हो गए।",
      "राजा और रानी मूर्छित हुए।",
      "वहाँ राजा ने और रानी ने मूर्छित हुए।"
    ],
    "correct_option_index": 1,
    "explanation_en": "(B) There the king and queen fainted (masculine plural).: When two singular nouns of different genders (king - masc, queen - fem) are joined by a coordinating conjunction, the verb often takes the masculine plural form.",
    "explanation_hi": "(B) वहाँ राजा और रानी मूर्छित हो गए।: जब भिन्न-भिन्न लिंगों (राजा - पुल्लिंग, रानी - स्त्रीलिंग) की दो संज्ञाएँ एकवचन में हों और संयोजक समुच्चयबोधक से जुड़ी हों, तो क्रिया बहुधा पुल्लिंग बहुवचन में आती है।"
  },
  {
    "question_en": "'The teacher gave education the boys.' What is the grammatical error in this sentence?",
    "question_hi": "'शिक्षक लड़कों को शिक्षा दी।' इस वाक्य में व्याकरणिक दोष क्या है?",
    "options_en": [
      "Gender-related error",
      "Adverb-related error",
      "Absence of the required 'ne' postposition",
      "Ditransitive verb-related error"
    ],
    "options_hi": [
      "लिंग संबंधी दोष",
      "क्रिया-विशेषण संबंधी दोष",
      "आवश्यक 'ने' परसर्ग का अभाव",
      "द्विकर्मक क्रिया संबंधी दोष"
    ],
    "correct_option_index": 2,
    "explanation_en": "(C) Absence of the required 'ne' postposition: In the past tense with a transitive verb (di/dena - to give), it is mandatory to use the 'ne' particle with the subject. The correct sentence would be: 'शिक्षक ने लड़कों को शिक्षा दी' (The teacher gave education to the boys).",
    "explanation_hi": "(C) आवश्यक 'ने' परसर्ग का अभाव: सकर्मक क्रिया (दी/देना) के भूतकाल में कर्ता के साथ 'ने' कारक लगाना अनिवार्य होता है। शुद्ध वाक्य होगा: 'शिक्षक ने लड़कों को शिक्षा दी'। "
  },
  {
    "question_en": "'He is dependent on his work, therefore he had to climb on the mountains.' What is the grammatical rule for the use of the postposition 'par' (पर) in this sentence?",
    "question_hi": "'वह अपने काम पर निर्भर है, इसलिए उसे पहाड़ों पर चढ़ना पड़ा।' इस वाक्य में प्रयुक्त 'पर' परसर्ग का व्याकरणिक नियम क्या है?",
    "options_en": [
      "It only indicates an adverb.",
      "It is used in conjunction with the verb 'climb' (चढ़ना).",
      "It is used in conjunction with the word 'dependent' (निर्भर).",
      "It is used in conjunction with both 'climb' (चढ़ना) and 'dependent' (निर्भर)."
    ],
    "options_hi": [
      "यह केवल क्रिया-विशेषण को दर्शाता है।",
      "यह 'चढ़ना' क्रिया के योग में आया है।",
      "यह 'निर्भर' शब्द के योग में आया है।",
      "यह 'चढ़ना' और 'निर्भर' दोनों शब्दों के योग में आया है।"
    ],
    "correct_option_index": 3,
    "explanation_en": "(D) It is used in conjunction with both 'climb' (चढ़ना) and 'dependent' (निर्भर).: In idiomatic usage, 'par' can be used with both 'chadhna' (to climb on a mountain) and 'nirbhar' (to be dependent on someone), as evident from examples like 'पहाड़ पर चढ़ना' and 'मेरे आने पर निर्भर'.",
    "explanation_hi": "(D) यह 'चढ़ना' और 'निर्भर' दोनों शब्दों के योग में आया है।: मुहावरेदार प्रयोगों में, 'पर' का प्रयोग 'चढ़ना' (पहाड़ पर चढ़ना) और 'निर्भर' (किसी पर निर्भर होना) दोनों शब्दों के योग में हो सकता है, जैसा कि स्रोत में 'पहाड़ पर चढ़ना' और 'मेरे आने पर निर्भर' उदाहरणों से स्पष्ट है।"
  },
  {
    "question_en": "'I should do the work of eating.' (First person, singular). Which is the grammatically correct form without errors, using nasalization/anusvara correctly?",
    "question_hi": "'मैं खाने का काम करूँ।' (उत्तम पुरुष, एकवचन) का व्याकरणिक अशुद्धि-रहित रूप कौन सा है, जिसमें अनुनासिक/अनुस्वार का सही प्रयोग हो?",
    "options_en": [
      "Main khane ka kaam karu.",
      "Main khane ka kaam karoon.",
      "Main khane ka kaam karunga.",
      "Main khane ka kaam karen."
    ],
    "options_hi": [
      "मैं खाने का काम करू।",
      "मैं खाने का काम करूँ।",
      "मैं खाने का काम करूंगा।",
      "मैं खाने का काम करें।"
    ],
    "correct_option_index": 1,
    "explanation_en": "(B) Main khane ka kaam karoon.: The anusvara (nasal dot) that appears due to changes in person or number is pronounced as anunasik (nasalized vowel), e.g., karoon, hoon, hain.",
    "explanation_hi": "(B) मैं खाने का काम करूँ।: पुरुष अथवा वचन के विकार के कारण आने वाले अनुस्वार का उच्चारण अनुनासिक होता है, जैसे: करूँ, हूँ, हैं।"
  },
  {
    "question_en": "'You remained silent there, pressing your finger under your teeth.' What is the correct sentence in terms of idiomatic usage?",
    "question_hi": "'तुम दाँतों तले उँगली दबाकर वहाँ चुप रहे।' मुहावरे के प्रयोग की दृष्टि से शुद्ध वाक्य क्या है?",
    "options_en": [
      "You remained silent there without pressing your finger under your teeth.",
      "Everyone pressed their finger under their teeth at your words.",
      "Ram hid the matter by pressing his tongue.",
      "To bite one's teeth indicates extreme sorrow."
    ],
    "options_hi": [
      "तुम दाँतों तले उँगली दबाए बिना वहाँ चुप रहे।",
      "तुम्हारी बातों पर सब ने दाँतों तले उँगली दबा ली।",
      "राम ने अपनी जीभ दबाकर बात को छिपाया।",
      "दाँत-कातकर रह जाना अत्यंत दुःख का सूचक है।"
    ],
    "correct_option_index": 1,
    "explanation_en": "(B) Everyone pressed their finger under their teeth at your words.: The idiom 'daanton tale ungli dabana' means to express surprise or astonishment. Sentence (B) shows the correct context.",
    "explanation_hi": "(B) तुम्हारी बातों पर सब ने दाँतों तले उँगली दबा ली।: 'दाँतों तले उँगली दबाना' मुहावरे का अर्थ आश्चर्य या विस्मय व्यक्त करना है। वाक्य (B) सही संदर्भ दर्शाता है।"
  },
  {
    "question_en": "'I have called all the women and men from there.' Identify the correct form of this sentence:",
    "question_hi": "'मैंने वहाँ के सब स्त्री और पुरुष को बुलाया है।' इस वाक्य का शुद्ध रूप पहचानिए:",
    "options_en": [
      "I have called all the women and man from there (incorrect gender/number agreement).",
      "I have called all the women and men from there (incorrect verb number).",
      "I have called all the women and men from there.",
      "I called all the women and men from there (missing object marker)."
    ],
    "options_hi": [
      "मैंने वहाँ की सब स्त्रियाँ और पुरुष को बुलाया है।",
      "मैंने वहाँ के सब स्त्री और पुरुष को बुलाए।",
      "मैंने वहाँ के सब स्त्री और पुरुष को बुलाया।",
      "मैंने वहाँ के सब स्त्री और पुरुष बुलाए।"
    ],
    "correct_option_index": 2,
    "explanation_en": "(C) I have called all the women and men from there.: Words like 'sab' (all), 'koi' (any), 'kuchh' (some), and 'yah' (this), when used appositionally (here 'sab' with 'stri' and 'purush'), affect the sentence. Since the verb agrees with the object (group of women/men) which is treated as singular masculine here, 'bulaya' is correct.",
    "explanation_hi": "(C) मैंने वहाँ के सब स्त्री और पुरुष को बुलाया।: 'सब', 'कोई', 'कुछ', और 'यह' जैसे शब्द जब समानाधिकरण होकर आते हैं (जैसे यहाँ 'स्त्री' और 'पुरुष' के साथ 'सब'), तो वे वाक्य को प्रभावित करते हैं। चूँकि क्रिया कर्म (स्त्री/पुरुष समूह) के अनुसार एकवचन पुल्लिंग है, 'बुलाया' सही है।"
  },
  {
    "question_en": "Which of the following is the correctly spelled word?",
    "question_hi": "निम्नलिखित में शुद्ध वर्तनी वाला शब्द कौन सा है?",
    "options_en": ["Ārdra", "Ārda", "Ādrra", "Adra"],
    "options_hi": ["आर्द्र", "आर्द", "आद्र्र", "अद्र"],
    "correct_option_index": 0,
    "explanation_en": "(A) Ārdra: From a spelling perspective, 'Ārdra' (moist/wet) is correct.",
    "explanation_hi": "(A) आर्द्र: वर्तनी की दृष्टि से 'आर्द्र' (गीला) शुद्ध है।"
  },
  {
    "question_en": "Which of the following sentences suffers from an 'idiom error'?",
    "question_hi": "निम्नलिखित में कौन सा वाक्य 'मुहावरा दोष' से ग्रस्त है?",
    "options_en": [
      "The result of bad deeds is not good, it's like 'sowing babul trees and expecting mangoes'.",
      "He is such a simple person that 'elephant's teeth are different for eating and showing'.",
      "Obstacles arising right at the start of work is 'getting hailed on while shaving one's head'.",
      "A person with little knowledge being respected among fools is like 'what does a blind man want but two eyes'."
    ],
    "options_hi": [
      "बुरे काम का फल अच्छा नहीं होता, यह तो 'बोया पेड़ बबूल का आम कहाँ से खाए'।" ,
      "वह इतना सरल व्यक्ति है कि 'हाथी के दांत खाने के और दिखाने के और'।" ,
      "काम शुरू होते ही बाधा आना 'सिर मुँड़ाते ओले पड़ना' है।" ,
      "मूर्ख लोगों के बीच अल्प ज्ञानी का आदर होना 'अंधे क्या चाहे दो आँखें' जैसा है।"
    ],
    "correct_option_index": 3,
    "explanation_en": "(D) A person with little knowledge being respected among fools is like 'a one-eyed man is king among the blind'. The idiom is misused in (D). The correct proverb for 'a person with little knowledge among fools' is 'अंधों में काना राजा' (a one-eyed man is king among the blind), not 'अंधे क्या चाहे दो आँखें' (getting a desired thing).",
    "explanation_hi": "(D) मूर्ख लोगों के बीच अल्प ज्ञानी का आदर होना 'अंधों में काना राजा' जैसा है। (D) में मुहावरे का गलत प्रयोग है। 'मूर्खों में अल्पज्ञानी' के लिए सही लोकोक्ति 'अंधों में काना राजा' है, न कि 'अंधे क्या चाहे दो आँखें' (मनचाही वस्तु की प्राप्ति)।"
  },
  {
    "question_en": "What is the reason for the anusvara (nasal dot) in the word 'Ladkon' (लड़कों - boys, oblique plural)?",
    "question_hi": "'लड़कों' (बहुवचन) शब्द में जो अनुस्वार आता है, वह किस कारण होता है?",
    "options_en": [
      "Because it comes after a long vowel.",
      "Due to inflection for person or number.",
      "Due to final anusvara in Sanskrit words.",
      "Only for ease of writing."
    ],
    "options_hi": [
      "दीर्घ स्वर के पश्चात आने के कारण।",
      "पुरुष अथवा वचन के विकार के कारण।",
      "संस्कृत शब्दों में अंत्य अनुस्वार के कारण।",
      "केवल लेखन की सुविधा के कारण।"
    ],
    "correct_option_index": 1,
    "explanation_en": "(B) Due to inflection for person or number.: In Hindi, the anusvara that appears due to inflection for person or number is pronounced as anunasik (nasalized) (e.g., Ladkiyan, Ladkon).",
    "explanation_hi": "(B) पुरुष अथवा वचन के विकार के कारण।: हिंदी में पुरुष अथवा वचन के विकार के कारण आने वाले अनुस्वार का उच्चारण अनुनासिक होता है (जैसे: लड़कियाँ, लड़कों)।"
  },
  {
    "question_en": "'He turned to coal, burning with envy at your success.' Why is the use of 'ईर्ष्या से' (with envy) flawed in this sentence?",
    "question_hi": "'तुम्हारी सफलता पर वह ईर्ष्या से जल-भुनकर कोयला हो गया।' इस वाक्य में 'ईर्ष्या से' का प्रयोग दोषपूर्ण क्यों है?",
    "options_en": [
      "The verb's gender is incorrect.",
      "It is an unnecessary repetition of the idiom's meaning.",
      "'Turned to coal' should be 'turned to ash'.",
      "There is a noun-related error."
    ],
    "options_hi": [
      "क्रिया का लिंग गलत है।",
      "यह मुहावरे के अर्थ की अनावश्यक पुनरावृत्ति है।",
      "'कोयला हो गया' की जगह 'राख हो गया' होना चाहिए।",
      "इसमें संज्ञा संबंधी त्रुटि है।"
    ],
    "correct_option_index": 1,
    "explanation_en": "(B) It is an unnecessary repetition of the idiom's meaning.: The idiom 'jal-bhunkar koyla ho jaana' itself means 'to be filled with envy'. Therefore, adding 'īrṣyā se' (with envy) creates redundancy because the meaning is already inherent in the idiom.",
    "explanation_hi": "(B) यह मुहावरे के अर्थ की अनावश्यक पुनरावृत्ति है।: मुहावरे 'जल-भुनकर कोयला हो जाना' का अर्थ ही 'ईर्ष्या से भर जाना' है। अतः 'ईर्ष्या से' अनावश्यक शब्द दोष पैदा करता है, क्योंकि मुहावरे में वह अर्थ पहले से ही निहित है।"
  },
  {
    "question_en": "Identify the feminine suffix used in the word 'Naatin' (granddaughter), which is used for 'nārānta' (ending in -nā) nouns like 'Nānā' (maternal grandfather):",
    "question_hi": "'नातिन' शब्द में प्रयुक्त स्त्रीलिंग प्रत्यय की पहचान करें जो 'नारांत' (नाना) संज्ञाओं के लिए प्रयुक्त होता है:",
    "options_en": ["Ī", "Āin", "In", "Ānī"],
    "options_hi": ["ई", "आइन", "इन", "आनी"],
    "correct_option_index": 2,
    "explanation_en": "(C) In: To form 'Naatin' from 'Nānī' (maternal grandmother) or 'Nātī' (grandson), the suffix '-in' is added to the final vowel of some caste-denoting or non-human animate nouns (other than Brahmin) (e.g., Sunār -> Sunārin, Telī -> Telin, Nātī -> Nātin).",
    "explanation_hi": "(C) इन: 'नानी' या 'नाती' (पुरूष) से 'नातिन' बनाने के लिए, कुछ ब्राह्मणों से इतर वर्णवाचक या मनुष्येतर प्राणवाचक संज्ञाओं के अंत्य स्वर में 'इन' प्रत्यय लगाया जाता है (जैसे: सुनार -> सुनारिन, तेली -> तेलिन, नाती -> नातिन)।"
  },
  {
    "question_en": "When is the postposition 'par' (पर) used with the adverb of place 'kahān' (कहाँ - where)?",
    "question_hi": "'कहाँ' (स्थानवाचक क्रियाविशेषण) के साथ परसर्ग 'पर' का प्रयोग कब होता है?",
    "options_en": ["Always mandatory", "Never", "Optionally", "Only in the past tense"],
    "options_hi": ["सदैव अनिवार्य रूप से", "कभी नहीं", "विकल्प से (Optional)", "केवल भूतकाल में"],
    "correct_option_index": 2,
    "explanation_en": "(C) Optionally: With some adverbs of place like 'jahān', 'kahān', 'yahān', 'vahān', 'ūnche', 'nīche', the postposition 'par' is used optionally.",
    "explanation_hi": "(C) विकल्प से (Optional): 'जहाँ', 'कहाँ', 'यहाँ', 'वहाँ', 'ऊँचे', 'नीचे' जैसे कुछ स्थानवाचक क्रियाविशेषण के साथ 'पर' परसर्ग विकल्प से आता है, यानी यह वैकल्पिक होता है।"
  },
  {
    "question_en": "'They do not want to spoil their work (ko).' According to which rule is the postposition 'ko' (को) used with 'kaam' (work) in the sentence?",
    "question_hi": "'वे लोग अपने काम को ख़राब नहीं करना चाहते।' वाक्य में 'काम को' परसर्ग का प्रयोग किस नियम के अनुसार हुआ है?",
    "options_en": [
      "Due to an indefinite object.",
      "It is a proper noun object.",
      "It is a definite object.",
      "It is a nominal compound transitive verb."
    ],
    "options_hi": [
      "अनिश्चित कर्म के कारण।",
      "यह व्यक्तिवाचक कर्म है।",
      "यह निश्चित कर्म है।",
      "यह नामबोधक संयुक्त सकर्मक क्रिया है।"
    ],
    "correct_option_index": 2,
    "explanation_en": "(C) It is a definite object.: The postposition 'ko' is used with definite objects (e.g., 'The boy reads the letter (ko)' or 'spoil the work (ko)'). If the object is definite or a proper noun, 'ko' is used.",
    "explanation_hi": "(C) यह निश्चित कर्म है।: 'को' परसर्ग निश्चित कर्म के साथ आता है (जैसे: 'लड़का चिट्ठी को पढ़ता है' या 'काम को ख़राब करना')। यदि कर्म निश्चित या व्यक्तिवाचक हो तो 'को' का प्रयोग होता है।"
  },
  {
    "question_en": "'You always leave every work half-finished, and then desire the whole.' Which proverb is relevant here?",
    "question_hi": "'तुम हमेशा हर काम को आधा-अधूरा छोड़कर, फिर पूरी की कामना करते हो।' यहाँ किस लोकोक्ति का सही संदर्भ है?",
    "options_en": [
      "Elephant's teeth are different for eating and showing.",
      "Why need a mirror for a bracelet on the wrist.",
      "Poison is the antidote for poison.",
      "Leaving half to chase the whole, gets neither half nor whole."
    ],
    "options_hi": [
      "हाथी के दांत खाने के और दिखाने के और।",
      "हाथ कंगन को आरसी क्या।",
      "विषस्य विषमौषधम्।",
      "आधी छोड़ सारी को धावे, आधी मिले न सारी पावे।"
    ],
    "correct_option_index": 3,
    "explanation_en": "(D) Leaving half to chase the whole, gets neither half nor whole.: This proverb depicts the loss incurred due to excessive greed, where a person loses even the partial gain in pursuit of the full gain.",
    "explanation_hi": "(D) आधी छोड़ सारी को धावे, आधी मिले न सारी पावे।: यह लोकोक्ति अधिक लालच में पड़ने के कारण होने वाली हानि को दर्शाती है, जहाँ व्यक्ति पूरे लाभ के चक्कर में आधे लाभ को भी खो देता है।"
  },
  {
    "question_en": "What is the correct fractional adjective ('apūrṇāṅkbodhak viśeṣaṇ') representing 'one and a half part'?",
    "question_hi": "'एक और आधा भाग' को दर्शाने वाला शुद्ध अपूर्णांकबोधक विशेषण क्या है?",
    "options_en": ["Paun (Quarter less than)", "Sava (Quarter more than)", "Aḍhāī (Two and a half)", "Ḍeṛh (One and a half)"],
    "options_hi": ["पौन", "सवा", "अढ़ाई", "डेढ़"],
    "correct_option_index": 3,
    "explanation_en": "(D) Ḍeṛh (One and a half): Among fractional adjectives, 'ḍeṛh' means one whole and a half part (whereas 'aḍhāī' means 'two wholes and a half').",
    "explanation_hi": "(D) डेढ़: अपूर्णांकबोधक विशेषणों में, 'डेढ़' का अर्थ एक पूर्णांक और आधा भाग होता है (जबकि अढ़ाई का अर्थ 'दो पूर्णांक और आधा' होता है)।"
  },
  {
    "question_en": "'War means insecurity, destruction, and death! What security can war provide to anyone?' If we rewrite this as 'What security did war give to anyone?', what error would it introduce?",
    "question_hi": "'युद्ध का अर्थ है असुरक्षा, विध्वंस और मृत्यु! युद्ध किसी को क्या सुरक्षा दे पाएगा।' यदि हम इसे 'युद्ध ने किसी को क्या सुरक्षा दी' लिखें तो कौन सा दोष होगा?",
    "options_en": [
      "Gender error",
      "Number error",
      "Verb-Tense error",
      "Idiom error"
    ],
    "options_hi": [
      "लिंग दोष",
      "वचन दोष",
      "क्रिया-काल दोष",
      "मुहावरा दोष"
    ],
    "correct_option_index": 2,
    "explanation_en": "(C) Verb-Tense error: The original sentence is interrogative in future or simple present tense. Changing it to past tense ('dī') alters the meaning (from ability/future to past fact) and affects the appropriateness of the tense.",
    "explanation_hi": "(C) क्रिया-काल दोष: मूल वाक्य भविष्य काल या सामान्य वर्तमान काल का प्रश्नवाचक रूप है। यदि हम इसे भूतकाल में बदलें ('दी'), तो काल की शुद्धता प्रभावित होती है (प्रश्न का अर्थ बदल जाता है)।"
  },
  {
    "question_en": "'We put its solution beyond the limit.' What kind of error/usage does 'ke bāhar' (beyond) with 'upāy' (solution/means) show in this context?",
    "question_hi": "'हम उसका उपाय सीमा के बाहर कर देते हैं।' इस वाक्य में प्रयुक्त 'उपाय' के साथ 'के बाहर' किस प्रकार का दोष/प्रयोग दर्शाता है?",
    "options_en": [
      "Determination (Avadhāraṇ)",
      "Grammatical mistake/Misuse of case (Bhūsambodhan)",
      "Objective case error",
      "Genitive case error"
    ],
    "options_hi": [
      "अवधारण (Determination)",
      "भूसंबोधन (Grammatical mistake/Misuse of case)",
      "कर्म कारक दोष",
      "संबंध कारक दोष"
    ],
    "correct_option_index": 1,
    "explanation_en": "(B) Grammatical mistake/Misuse of case (Bhūsambodhan): According to the source, when unnecessary or incorrect postpositions are used with words like 'upāy' (or 'upyog' - use) (like 'sīmā ke bāhar' here is contextually incorrect), it falls under an error called 'Bhūsambodhan'.",
    "explanation_hi": "(B) भूसंबोधन (Grammatical mistake/Misuse of case): स्रोत के अनुसार, जब 'उपाय' (या उपयोग) जैसे शब्दों के साथ अनावश्यक या गलत परसर्ग का प्रयोग होता है (जैसे 'सीमा के बाहर' यहाँ संदर्भ के अनुसार अशुद्ध है), तो यह भूसंबोधन नामक त्रुटि के अंतर्गत आता है।"
  },
  {
    "question_en": "'It was difficult to differentiate between farmers and artisans.' Judge the correctness of this sentence based on the use of the verb 'fark karnā' (to differentiate):",
    "question_hi": "'किसानों और दस्तकारों के बीच फ़र्क करना मुश्किल होता था।' इस वाक्य की शुद्धता का निर्धारण 'फ़र्क करना' क्रिया के प्रयोग के आधार पर करें:",
    "options_en": [
      "'Fark karnā' is a nominal compound transitive verb.",
      "The sentence suffers from an adverbial error.",
      "The sentence is absolutely correct.",
      "'Fark karnā' should be replaced with 'antar jānnā' (to know the difference)."
    ],
    "options_hi": [
      "फ़र्क करना एक नामबोधक संयुक्त सकर्मक क्रिया है।",
      "यह वाक्य क्रिया-विशेषण की अशुद्धि से ग्रस्त है।",
      "यह वाक्य बिल्कुल शुद्ध है।",
      "फ़र्क करना' की जगह 'अंतर जानना' होना चाहिए।"
    ],
    "correct_option_index": 2,
    "explanation_en": "(C) The sentence is absolutely correct.: This sentence is used directly in the source. 'Fark karnā' or 'antar karnā' is a common and correct verb structure in Hindi.",
    "explanation_hi": "(C) यह वाक्य बिल्कुल शुद्ध है।: यह वाक्य स्रोत में सीधे प्रयुक्त हुआ है। 'फ़र्क करना' या 'अंतर करना' हिंदी में सामान्य और शुद्ध क्रिया संरचना है।"
  }
];

export default vakyaShuddhiQuestions;
