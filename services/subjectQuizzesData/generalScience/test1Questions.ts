import type { QuizQuestion } from '../../../types';

const test1Questions: QuizQuestion[] = [

  {
    "question_en": "What is the S.I. unit of length?",
    "question_hi": "लम्बाई का S.I. मात्रक क्या है?",
    "options_en": ["Centimeter", "Meter", "Millimeter", "Kilometer"],
    "options_hi": ["सेंटीमीटर", "मीटर", "मिलीमीटर", "किलोमीटर"],
    "correct_option_index": 1,
    "explanation_en": "(B) Meter: The S.I. unit of length is the meter (m).",
    "explanation_hi": "(B) मीटर: लम्बाई का S.I. मात्रक मीटर (m) है।"
  },
  {
    "question_en": "Into how many equal parts is one meter (m) divided, which are called centimeters (cm)?",
    "question_hi": "एक मीटर (m) को कितने बराबर भागों में विभाजित किया जाता है, जिन्हें सेंटीमीटर (cm) कहते हैं?",
    "options_en": ["10", "100", "1000", "10000"],
    "options_hi": ["10", "100", "1000", "10000"],
    "correct_option_index": 1,
    "explanation_en": "(B) 100: Each meter is divided into 100 equal parts, called centimeters (cm).",
    "explanation_hi": "(B) 100: प्रत्येक मीटर को 100 बराबर भागों में विभाजित किया जाता है, जिन्हें सेंटीमीटर (cm) कहते हैं।"
  },
  {
    "question_en": "What is the force applied due to the action of muscles called?",
    "question_hi": "मांसपेशियों के संपर्क में आने के कारण लगने वाले बल को क्या कहते हैं?",
    "options_en": ["Gravitational force", "Frictional force", "Muscular force", "Magnetic force"],
    "options_hi": ["गुरुत्व बल", "घर्षण बल", "पेशीय बल", "चुंबकीय बल"],
    "correct_option_index": 2,
    "explanation_en": "(C) Muscular force: The force applied by animals (like bulls, horses) and archers is called Muscular Force.",
    "explanation_hi": "(C) पेशीय बल: पशु (जैसे बैल, घोड़े) और धनुर्धर जो बल लगाते हैं, वह पेशीय बल (Muscular Force) कहलाता है।"
  },
  {
    "question_en": "When we stop pedaling a bicycle, it gradually slows down and finally stops. What is the reason for this?",
    "question_hi": "जब हम साइकिल चलाना बंद कर देते हैं, तो वह धीरे-धीरे धीमी होकर अंत में रुक जाती है। इसका कारण क्या है?",
    "options_en": ["Gravitational force", "Frictional force", "Muscular force", "Magnetic force"],
    "options_hi": ["गुरुत्व बल", "घर्षण बल", "पेशीय बल", "चुंबकीय बल"],
    "correct_option_index": 1,
    "explanation_en": "(B) Frictional force: A ball rolling on the floor stopping, or a bicycle stopping when pedaling ceases, is due to Friction.",
    "explanation_hi": "(B) घर्षण बल: फर्श पर लुढ़कने वाली गेंद का रुकना, या पैडल मारना बंद करने पर साइकिल का रुकना, घर्षण (Friction) के कारण होता है।"
  },
  {
    "question_en": "Due to which force does the Earth attract every object towards itself?",
    "question_hi": "पृथ्वी हर वस्तु को अपनी ओर किस बल के कारण आकर्षित करती है?",
    "options_en": ["Muscular force", "Frictional force", "Gravitational force", "Contact force"],
    "options_hi": ["पेशीय बल", "घर्षण बल", "गुरुत्व बल", "संपर्क बल"],
    "correct_option_index": 2,
    "explanation_en": "(C) Gravitational force: Objects fall towards the Earth because it attracts them towards itself; this force is called gravitational force or gravity.",
    "explanation_hi": "(C) गुरुत्व बल: वस्तुएँ पृथ्वी की ओर गिरती हैं क्योंकि यह उन्हें अपनी ओर आकर्षित करती है, इस बल को गुरुत्व बल या गुरुत्व कहते हैं।"
  },
  {
    "question_en": "Due to which force does water in rivers flow downwards?",
    "question_hi": "नदियों में पानी नीचे की ओर किस बल के कारण बहता है?",
    "options_en": ["Frictional force", "Muscular force", "Gravitational force", "Electric force"],
    "options_hi": ["घर्षण बल", "पेशीय बल", "गुरुत्व बल", "विद्युत बल"],
    "correct_option_index": 2,
    "explanation_en": "(C) Gravitational force: It is due to the force of gravity that water in rivers flows downwards.",
    "explanation_hi": "(C) गुरुत्व बल: गुरुत्व बल के कारण ही नदियों में पानी नीचे की ओर बहता है।"
  },
  {
    "question_en": "What does Static Friction measure?",
    "question_hi": "स्थिर घर्षण (Static Friction) किसकी माप होती है?",
    "options_en": ["Force required for an object to slide", "Force required to keep an object moving", "Force applied to start motion from rest", "Force required to change an object's direction"],
    "options_hi": ["वस्तु को फिसलने के लिए आवश्यक बल", "वस्तु को गतिमान रखने के लिए आवश्यक बल", "रुकी हुई वस्तु को विराम से गति प्रारम्भ करने के लिए लगाया गया बल", "वस्तु की दिशा बदलने के लिए आवश्यक बल"],
    "correct_option_index": 2,
    "explanation_en": "(C) Force applied to start motion from rest: The force applied to an object to overcome friction and start its motion from rest is a measure of static friction.",
    "explanation_hi": "(C) रुकी हुई वस्तु को विराम से गति प्रारम्भ करने के लिए लगाया गया बल: किसी रुकी हुई वस्तु को विराम से गति प्रारम्भ करने की स्थिति में घर्षण पर पार पाने के लिए वस्तु पर लगाया जाने वाला बल स्थैतिक घर्षण की माप होती है।"
  },
  {
    "question_en": "How does Sliding Friction compare to Static Friction?",
    "question_hi": "फिसलने वाला घर्षण (Sliding Friction), स्थैतिक घर्षण से कैसा होता है?",
    "options_en": ["Much greater", "Slightly less", "Equal", "Double"],
    "options_hi": ["बहुत अधिक", "कुछ कम", "बराबर", "दोगुना"],
    "correct_option_index": 1,
    "explanation_en": "(B) Slightly less: Sliding friction is slightly less than static friction.",
    "explanation_hi": "(B) कुछ कम: सर्पी घर्षण (Sliding Friction) स्थैतिक घर्षण से कुछ कम होता है।"
  },
  {
    "question_en": "The force applied by an archer to draw a bow is an example of what?",
    "question_hi": "किसी धनुष को खींचने के लिए धनुर्धर द्वारा लगाया गया बल किसका उदाहरण है?",
    "options_en": ["Non-contact force", "Gravitational force", "Muscular force", "Frictional force"],
    "options_hi": ["असंपर्क बल", "गुरुत्व बल", "पेशीय बल", "घर्षण बल"],
    "correct_option_index": 2,
    "explanation_en": "(C) Muscular force: The force applied by an archer to draw a bow is an example of muscular force. It is also a contact force.",
    "explanation_hi": "(C) पेशीय बल: धनुष को खींचने के लिए धनुर्धर द्वारा लगाया गया बल पेशीय बल का उदाहरण है। यह एक संपर्क बल भी है।"
  },
  {
    "question_en": "When an arrow moves towards its target, what are the forces acting on it?",
    "question_hi": "तीर जब लक्ष्य की ओर गति करता है तो उस पर लगने वाले बल कौन से होते हैं?",
    "options_en": ["Only muscular force", "Only gravitational force", "Gravitational force and air friction", "Only air friction"],
    "options_hi": ["केवल पेशीय बल", "केवल गुरुत्व बल", "गुरुत्व बल तथा वायु का घर्षण", "केवल वायु का घर्षण"],
    "correct_option_index": 2,
    "explanation_en": "(C) Gravitational force and air friction: When an arrow moves towards its target, the forces acting on it are due to gravity and air friction.",
    "explanation_hi": "(C) गुरुत्व बल तथा वायु का घर्षण: जब तीर लक्ष्य की ओर गति करता है तो इस पर लगने वाले बल गुरुत्व तथा वायु के घर्षण के कारण होते हैं।"
  },
  {
    "question_en": "What is the formula for calculating Speed?",
    "question_hi": "चाल (Speed) की गणना करने का सूत्र क्या है?",
    "options_en": ["Speed = Total distance covered × Total time taken", "Speed = Total time taken ÷ Total distance covered", "Speed = Total distance covered ÷ Total time taken", "Speed = Velocity × Time"],
    "options_hi": ["चाल = तय की गई कुल दूरी × लिया गया कुल समय", "चाल = लिया गया कुल समय ÷ तय की गई कुल दूरी", "चाल = तय की गई कुल दूरी ÷ लिया गया कुल समय", "चाल = वेग × समय"],
    "correct_option_index": 2,
    "explanation_en": "(C) Speed = Total distance covered ÷ Total time taken: To obtain speed, divide the 'Total distance covered' by the 'Total time taken'.",
    "explanation_hi": "(C) चाल = तय की गई कुल दूरी ÷ लिया गया कुल समय: चाल प्राप्त करने के लिए 'तय की गई कुल दूरी' को 'लिए गए कुल समय' से विभाजित करते हैं।"
  },
  {
    "question_en": "What is the time taken by a Simple Pendulum to complete one oscillation called?",
    "question_hi": "सरल लोलक (Simple Pendulum) एक दोलन पूरा करने में जितना समय लेता है, उसे क्या कहते हैं?",
    "options_en": ["Velocity", "Time Period", "Oscillation Period", "Acceleration"],
    "options_hi": ["वेग", "आवर्तकाल", "दोलन काल", "त्वरण"],
    "correct_option_index": 1,
    "explanation_en": "(B) Time Period (Avartkal): The time a simple pendulum takes to complete one oscillation is called its time period.",
    "explanation_hi": "(B) आवर्तकाल: सरल लोलक एक दोलन पूरा करने में जितना समय लगाता है, उसे सरल लोलक का आवर्तकाल कहते हैं।"
  },
  {
    "question_en": "What were the devices used for measuring time in ancient times?",
    "question_hi": "प्राचीन काल में समय मापने के लिए उपयोग की जाने वाली युक्तियाँ कौन सी थीं?",
    "options_en": ["Sundial", "Water clock", "Sand clock", "All of the above"],
    "options_hi": ["धूपघड़ी", "जल घड़ी", "रेत घड़ी", "उपरोक्त सभी"],
    "correct_option_index": 3,
    "explanation_en": "(D) All of the above: Sundials, water clocks, and sand clocks are some examples of devices that were used to measure time.",
    "explanation_hi": "(D) उपरोक्त सभी: धूपघड़ी, जल घड़ी, रेत घड़ी इस प्रकार की युक्तियों के कुछ उदाहरण हैं जो समय मापने के लिए उपयोग किए जाते थे।"
  },
  {
    "question_en": "Under which subject does the study of 'Laws of Force and Motion' fall in Physics?",
    "question_hi": "भौतिकी (Physics) में 'बल और गति के नियम' का अध्ययन किस विषय के अंतर्गत आता है?",
    "options_en": ["Chemistry", "Biology", "General Science - Physics", "Astronomy"],
    "options_hi": ["रसायन विज्ञान", "जीव विज्ञान", "सामान्य विज्ञान - भौतिकी", "खगोल विज्ञान"],
    "correct_option_index": 2,
    "explanation_en": "(C) General Science - Physics: 'Laws of Force and Motion' is a topic under General Science Physics.",
    "explanation_hi": "(C) सामान्य विज्ञान - भौतिकी: 'बल और गति के नियम' जनरल साइंस फिजिक्स के तहत एक विषय है।"
  },
  {
    "question_en": "Under which subject does the study of 'Work Energy & Power' fall in Physics?",
    "question_hi": "भौतिकी में 'कार्य ऊर्जा और शक्ति' (Work Energy & Power) का अध्ययन किस विषय के अंतर्गत आता है?",
    "options_en": ["Biology", "Chemistry", "General Science - Physics", "Geology"],
    "options_hi": ["जीव विज्ञान", "रसायन विज्ञान", "सामान्य विज्ञान - भौतिकी", "भूविज्ञान"],
    "correct_option_index": 2,
    "explanation_en": "(C) General Science - Physics: 'Work Energy & Power' is a topic of General Science Physics.",
    "explanation_hi": "(C) सामान्य विज्ञान - भौतिकी: 'कार्य ऊर्जा और शक्ति' जनरल साइंस फिजिक्स का एक विषय है।"
  },
  {
    "question_en": "Under General Science, in which branch are 'Waves & Sound Waves' included?",
    "question_hi": "सामान्य विज्ञान के अंतर्गत, 'तरंगें और ध्वनि तरंगें' (Waves & Sound Waves) किस शाखा में शामिल हैं?",
    "options_en": ["Biology", "Chemistry", "Physics", "Astronomy"],
    "options_hi": ["जीव विज्ञान", "रसायन विज्ञान", "भौतिकी", "खगोल विज्ञान"],
    "correct_option_index": 2,
    "explanation_en": "(C) Physics: 'Waves & Sound Waves' is a topic of General Science Physics.",
    "explanation_hi": "(C) भौतिकी: 'तरंगें और ध्वनि तरंगें' जनरल साइंस फिजिक्स का एक विषय है।"
  },
  {
    "question_en": "According to Archimedes' principle, when an object is immersed in a fluid, it experiences an upward force equal to what?",
    "question_hi": "आर्कमिडीज के सिद्धांत के अनुसार, जब किसी वस्तु को तरल में डुबोया जाता है तो वह ऊपर की दिशा में एक बल का अनुभव करती है, जो किसके बराबर होता है?",
    "options_en": ["Volume of the object", "Weight of the fluid displaced by the object", "Density of the fluid", "Weight of the object"],
    "options_hi": ["वस्तु के आयतन के", "वस्तु द्वारा हटाए गए तरल के भार के", "तरल के घनत्व के", "वस्तु के भार के"],
    "correct_option_index": 1,
    "explanation_en": "(B) Weight of the fluid displaced by the object: That force is equal to the weight of the fluid displaced by the object.",
    "explanation_hi": "(B) वस्तु द्वारा हटाए गए तरल के भार के: वह बल वस्तु द्वारा हटाए गए तरल के भार के बराबर होता है।"
  },
  {
    "question_en": "The number of known elements is now over 100. How many of these elements are natural?",
    "question_hi": "ज्ञात तत्वों की संख्या अब तक 100 से अधिक है। इनमें से कितने तत्व प्राकृतिक हैं?",
    "options_en": ["50", "72", "92", "100"],
    "options_hi": ["50", "72", "92", "100"],
    "correct_option_index": 2,
    "explanation_en": "(C) 92: The number of elements known so far is more than 100, out of which 92 elements are natural.",
    "explanation_hi": "(C) 92: अभी तक ज्ञात तत्वों की संख्या 100 से अधिक है, जिनमें से 92 तत्व प्राकृतिक हैं।"
  },
  {
    "question_en": "Which two elements are found in a liquid state at room temperature?",
    "question_hi": "कमरे के तापमान पर (Room Temperature) द्रव अवस्था में पाए जाने वाले दो तत्व कौन से हैं?",
    "options_en": ["Bromine and Gallium", "Mercury and Cesium", "Mercury and Bromine", "Gallium and Mercury"],
    "options_hi": ["ब्रोमीन और गैलियम", "पारा और सीज़ियम", "पारा और ब्रोमीन", "गैलियम और पारा"],
    "correct_option_index": 2,
    "explanation_en": "(C) Mercury and Bromine: Mercury and Bromine are liquids at room temperature.",
    "explanation_hi": "(C) पारा और ब्रोमीन: पारा तथा ब्रोमीन कमरे के तापमान पर द्रव हैं।"
  },
  {
    "question_en": "Which elements turn into a liquid state at temperatures slightly above room temperature (303 K)?",
    "question_hi": "कौन से तत्व कमरे के तापमान (303 K) से कुछ अधिक तापमान पर द्रव अवस्था ले लेते हैं?",
    "options_en": ["Mercury and Bromine", "Gallium and Cesium", "Hydrogen and Helium", "Oxygen and Nitrogen"],
    "options_hi": ["पारा और ब्रोमीन", "गैलियम और सीज़ियम", "हाइड्रोजन और हीलियम", "ऑक्सीजन और नाइट्रोजन"],
    "correct_option_index": 1,
    "explanation_en": "(B) Gallium and Cesium: Gallium and Cesium elements turn into a liquid state at temperatures slightly above room temperature (303 K).",
    "explanation_hi": "(B) गैलियम और सीज़ियम: गैलियम तथा सीज़ियम तत्व कमरे के तापमान (303 K) से कुछ अधिक तापमान पर द्रव अवस्था ले लेते हैं।"
  },
  {
    "question_en": "Under which branch of General Science does the study of Chemical Reactions and Equations fall?",
    "question_hi": "रासायनिक अभिक्रियाओं और समीकरणों का अध्ययन सामान्य विज्ञान की किस शाखा के अंतर्गत आता है?",
    "options_en": ["Physics", "Chemistry", "Biology", "Geology"],
    "options_hi": ["भौतिकी", "रसायन विज्ञान", "जीव विज्ञान", "भूविज्ञान"],
    "correct_option_index": 1,
    "explanation_en": "(B) Chemistry: 'Chemical Reactions & Equations' and 'Modern Periodic Table' are topics of Chemistry.",
    "explanation_hi": "(B) रसायन विज्ञान: 'रासायनिक अभिक्रियाएं एवं समीकरण' और 'आधुनिक आवर्त सारणी' रसायन विज्ञान के विषय हैं।"
  },
  {
    "question_en": "Under which subject is 'Oxidation and Reduction' studied?",
    "question_hi": "'ऑक्सीकरण और अपचयन' (Oxidation and Reduction) किस विषय के तहत अध्ययन किया जाता है?",
    "options_en": ["Physics", "Biology", "Chemistry", "Mathematics"],
    "options_hi": ["भौतिकी", "जीव विज्ञान", "रसायन विज्ञान", "गणित"],
    "correct_option_index": 2,
    "explanation_en": "(C) Chemistry: Oxidation and Reduction are topics of General Science Chemistry.",
    "explanation_hi": "(C) रसायन विज्ञान: ऑक्सीकरण और अपचयन जनरल साइंस केमिस्ट्री के विषय हैं।"
  },
  {
    "question_en": "According to the scientific definition of a pure substance, what is a pure substance made of?",
    "question_hi": "शुद्ध पदार्थ की वैज्ञानिक परिभाषा के अनुसार, शुद्ध पदार्थ किससे मिलकर बना होता है?",
    "options_en": ["Two or more substances", "Only one type of particle", "Water, fat, and protein", "Particles of different chemical natures"],
    "options_hi": ["दो या दो से अधिक पदार्थ", "एक ही प्रकार के कणों से", "जल, वसा और प्रोटीन से", "विभिन्न रासायनिक प्रकृति के कणों से"],
    "correct_option_index": 1,
    "explanation_en": "(B) Only one type of particle: A pure substance is made up of only one type of particle, having the same chemical nature.",
    "explanation_hi": "(B) एक ही प्रकार के कणों से: एक शुद्ध पदार्थ एक ही प्रकार के कणों से मिलकर बना होता है, जिनकी समान रासायनिक प्रकृति हो।"
  },
  {
    "question_en": "Milk is a mixture of which substances?",
    "question_hi": "दूध किन पदार्थों का मिश्रण है?",
    "options_en": ["Water and protein", "Water, fat, and protein", "Only fat and protein", "Only water and fat"],
    "options_hi": ["जल और प्रोटीन", "जल, वसा और प्रोटीन", "केवल वसा और प्रोटीन", "केवल जल और वसा"],
    "correct_option_index": 1,
    "explanation_en": "(B) Water, fat, and protein: Milk is a mixture of water, fat, protein, etc., hence it is not pure from a scientific perspective.",
    "explanation_hi": "(B) जल, वसा और प्रोटीन: दूध जल, वसा, प्रोटीन आदि का मिश्रण है, इसलिए वैज्ञानिक दृष्टिकोण से शुद्ध नहीं है।"
  },
  {
    "question_en": "In a model of a fire extinguisher, what happens when vinegar is added to a baking soda solution?",
    "question_hi": "आग बुझाने वाले यंत्र के एक मॉडल में, बेकिंग सोडा के घोल में सिरका डालने पर क्या होता है?",
    "options_en": ["Temperature increases", "Foam is produced", "Color changes", "Nothing happens"],
    "options_hi": ["तापमान बढ़ जाता है", "झाग उत्पन्न होता है", "रंग बदल जाता है", "कुछ नहीं होता"],
    "correct_option_index": 1,
    "explanation_en": "(B) Foam is produced: Adding vinegar to a plate filled with baking soda causes a reaction that produces foam.",
    "explanation_hi": "(B) झाग उत्पन्न होता है: बेकिंग सोडा से भरी प्लेट में सिरका डालने पर झाग उत्पन्न करने वाली अभिक्रिया होती है।"
  },
  {
    "question_en": "In which era did the construction of the earliest cities of Mesopotamia begin?",
    "question_hi": "मेसोपोटामिया के प्राचीनतम नगरों का निर्माण किस युग में शुरू हुआ था?",
    "options_en": ["Iron Age", "Bronze Age", "Stone Age", "Copper Age"],
    "options_hi": ["लौह युग", "कांस्य युग", "पाषाण युग", "ताम्र युग"],
    "correct_option_index": 1,
    "explanation_en": "(B) Bronze Age: The construction of the earliest cities of Mesopotamia began in the Bronze Age, around 3000 BCE.",
    "explanation_hi": "(B) कांस्य युग: मेसोपोटामिया के प्राचीनतम नगरों का निर्माण कांस्य युग यानी लगभग 3000 ई.पू. में शुरू हो गया था।"
  },
  {
    "question_en": "Bronze is an alloy made from a mixture of which metals?",
    "question_hi": "कांस्य (Bronze) धातु किन धातुओं के मिश्रण से बनता है?",
    "options_en": ["Copper and Zinc", "Copper and Iron", "Copper and Tin", "Iron and Tin"],
    "options_hi": ["तांबा और जस्ता", "तांबा और लोहा", "तांबा और रांगा", "लोहा और रांगा"],
    "correct_option_index": 2,
    "explanation_en": "(C) Copper and Tin: Bronze is made from a mixture of copper and tin (rāṅgā).",
    "explanation_hi": "(C) तांबा और रांगा: कांसा, ताँबे और राँगे के मिश्रण से बनता है।"
  },
  {
    "question_en": "Who proposed that the first form of life must have come from pre-existing non-living organic molecules (like RNA, protein)?",
    "question_hi": "जीवन का पहला स्वरूप पूर्व-विद्यमान जीवन-रहित कार्बनिक अणुओं (जैसे RNA, प्रोटीन) से आया होगा, यह किसने प्रस्तावित किया?",
    "options_en": ["Darwin and Wallace", "Oparin and Haldane", "S.L. Miller", "John G. Richardson"],
    "options_hi": ["डार्विन और वालेस", "ओपेरिन और हाल्डेन", "एस.एल. मिलर", "जॉन जी. रिचर्डसन"],
    "correct_option_index": 1,
    "explanation_en": "(B) Oparin and Haldane: Scientists Oparin from Russia and Haldane from England proposed this.",
    "explanation_hi": "(B) ओपेरिन और हाल्डेन: रूस के ओपेरिन तथा इंग्लैंड के हाल्डेन नामक वैज्ञानिकों ने यह प्रस्तावित किया।"
  },
  {
    "question_en": "At what temperature did S.L. Miller simulate the conditions of primitive Earth in his laboratory?",
    "question_hi": "एस.एल. मिलर ने प्रयोगशाला में आदिम पृथ्वी की स्थिति को किस तापमान पर उत्पन्न किया था?",
    "options_en": ["100°C", "400°C", "800°C", "1000°C"],
    "options_hi": ["100°C", "400°C", "800°C", "1000°C"],
    "correct_option_index": 2,
    "explanation_en": "(C) 800°C: American scientist S.L. Miller, in 1953, created the conditions of the primitive Earth at a temperature of 800°C in his laboratory.",
    "explanation_hi": "(C) 800°C: अमेरिकी वैज्ञानिक एस.एल. मिलर ने 1953 में अपनी प्रयोगशाला में 800°C तापमान पर पृथ्वी की उस समय की स्थितियाँ पैदा कीं।"
  },
  {
    "question_en": "Under which branch of General Science does the study of 'Man-Made Substances' fall?",
    "question_hi": "'मानव निर्मित पदार्थ' (Man-Made Substances) का अध्ययन सामान्य विज्ञान की किस शाखा के अंतर्गत आता है?",
    "options_en": ["Physics", "Biology", "Chemistry", "Technology"],
    "options_hi": ["भौतिकी", "जीव विज्ञान", "रसायन विज्ञान", "प्रौद्योगिकी"],
    "correct_option_index": 2,
    "explanation_en": "(C) Chemistry: 'Man-Made Substances' is a topic under General Science Chemistry.",
    "explanation_hi": "(C) रसायन विज्ञान: 'मानव निर्मित पदार्थ' जनरल साइंस केमिस्ट्री के तहत एक विषय है।"
  },
  {
    "question_en": "Under which branch is the detailed study of the 'Cell' conducted in General Science?",
    "question_hi": "सामान्य विज्ञान में 'कोशिका' (Cell) का विस्तृत अध्ययन किस शाखा के तहत किया जाता है?",
    "options_en": ["Physics", "Chemistry", "Biology", "Geology"],
    "options_hi": ["भौतिकी", "रसायन विज्ञान", "जीव विज्ञान", "भूविज्ञान"],
    "correct_option_index": 2,
    "explanation_en": "(C) Biology: 'Cell' is an important topic of General Science Biology.",
    "explanation_hi": "(C) जीव विज्ञान: 'कोशिका' (Cell) जनरल साइंस बायोलॉजी का एक महत्वपूर्ण विषय है।"
  },
  {
    "question_en": "What is the most suitable diet for adolescence?",
    "question_hi": "किशोरावस्था के लिए सर्वाधिक उपयुक्त आहार क्या है?",
    "options_en": ["Chips, noodles, coke", "Roti, dal, vegetables", "Rice, noodles, burger", "Vegetarian tikki, chips, and lemon drink"],
    "options_hi": ["चिप्स, नूडल्स, कोक", "रोटी, दाल, सब्जियाँ", "चावल, नूडल्स, बर्गर", "शाकाहारी टिक्की, चिप्स तथा लेमन पेय"],
    "correct_option_index": 1,
    "explanation_en": "(B) Roti, dal, vegetables: Roti (chapati), dal (lentils), and vegetables are the most suitable diet for adolescence.",
    "explanation_hi": "(B) रोटी, दाल, सब्जियाँ: रोटी, दाल, सब्जियाँ किशोरावस्था के लिए सर्वोचित आहार है।"
  },
  {
    "question_en": "Increase in body weight and development of breasts in adolescents are symptoms of which stage?",
    "question_hi": "किशोरों में शारीरिक भार में वृद्धि होना और स्तनों का विकसित होना किस अवस्था के लक्षण हैं?",
    "options_en": ["Childhood", "Adolescence", "Old age", "Adulthood"],
    "options_hi": ["बचपन", "किशोरावस्था", "वृद्धावस्था", "युवावस्था"],
    "correct_option_index": 1,
    "explanation_en": "(B) Adolescence: Development of breasts and increase in body weight begin during the onset of Adolescence.",
    "explanation_hi": "(B) किशोरावस्था: किशोरावस्था की ओर बढ़ने पर (Adolescence) स्तनों का विकसित होना और शारीरिक भार में वृद्धि होना शुरू होता है।"
  },
  {
    "question_en": "The hormone secreted from which gland is mentioned in a crossword puzzle?",
    "question_hi": "कौन सी ग्रंथि से स्रावित हार्मोन (Hormone) का उल्लेख एक शब्द पहेली में किया गया है?",
    "options_en": ["Thyroid gland", "Pituitary gland", "Adrenal gland", "Pancreas gland"],
    "options_hi": ["थायरॉइड ग्रंथि", "पीयूष ग्रंथि", "एड्रिनल ग्रंथि", "अग्नाशय ग्रंथि"],
    "correct_option_index": 2,
    "explanation_en": "(C) Adrenal gland: The hormone secreted from the Adrenal gland is mentioned under the crossword puzzle.",
    "explanation_hi": "(C) एड्रिनल ग्रंथि: एड्रिनल ग्रंथि से स्रावित हार्मोन का उल्लेख शब्द पहेली के तहत किया गया है।"
  },
  {
    "question_en": "What is the transformation from larva to adult in a male frog called?",
    "question_hi": "नर मेंढक में लार्वा से वयस्क तक होने वाला परिवर्तन क्या कहलाता है?",
    "options_en": ["Fertilization", "Metamorphosis", "Reproduction", "Cloning"],
    "options_hi": ["निषेचन", "कायांतरण", "जनन", "क्लोनिंग"],
    "correct_option_index": 1,
    "explanation_en": "(B) Metamorphosis: The transformation from larva to adult in a frog is called Metamorphosis.",
    "explanation_hi": "(B) कायांतरण: मेंढक में लार्वा से वयस्क तक होने वाला परिवर्तन कायांतरण (Metamorphosis) कहलाता है।"
  },
  {
    "question_en": "What is another name for Endocrine Glands?",
    "question_hi": "अंतःस्रावी ग्रंथियों (Endocrine Glands) का दूसरा नाम क्या है?",
    "options_en": ["Exocrine glands", "Ductless glands", "Mixed glands", "Lacrimal glands"],
    "options_hi": ["बहिःस्रावी ग्रंथियाँ", "वाहिनी विहीन ग्रंथियाँ", "मिश्रित ग्रंथियाँ", "लैक्राइमल ग्रंथियाँ"],
    "correct_option_index": 1,
    "explanation_en": "(B) Ductless glands: Another name for Endocrine Glands is Ductless Glands.",
    "explanation_hi": "(B) वाहिनी विहीन ग्रंथियाँ: अंतःस्रावी ग्रंथियों का दूसरा नाम वाहिनी विहीन ग्रंथियाँ (Ductless Glands) है।"
  },
  {
    "question_en": "By what name is 'Water Hyacinth' known?",
    "question_hi": "'जलकुंभी' (Water Hyacinth) को किस नाम से जाना जाता है?",
    "options_en": ["Terror of Bengal", "Water Crisis", "Both A and B", "Aquatic weed"],
    "options_hi": ["बंगाल का आतंक", "जल की विपत्ति", "A और B दोनों", "जलीय खरपतवार"],
    "correct_option_index": 2,
    "explanation_en": "(C) Both A and B: Water Hyacinth is known as the 'great menace' ('Mahavipatti') of water bodies or the 'Terror of Bengal'.",
    "explanation_hi": "(C) A और B दोनों: जलकुंभी को जलाशयों की 'महाविपत्ति' (Water Crisis) या 'बंगाल के आतंक' के बारे में जाना जाता है।"
  },
  {
    "question_en": "What does Water Hyacinth extract from water, resulting in the death of fish?",
    "question_hi": "जलकुंभी पानी से क्या खींच लेती है, जिसके परिणामस्वरूप मछलियाँ मर जाती हैं?",
    "options_en": ["Hydrogen", "Nitrogen", "Oxygen", "Carbon dioxide"],
    "options_hi": ["हाइड्रोजन", "नाइट्रोजन", "ऑक्सीजन", "कार्बन डाइऑक्साइड"],
    "correct_option_index": 2,
    "explanation_en": "(C) Oxygen: Water Hyacinth draws oxygen from the water, resulting in the death of fish.",
    "explanation_hi": "(C) ऑक्सीजन: जलकुंभी जल से ऑक्सीजन खींच लेती है, जिसके परिणामस्वरूप मछलियाँ मर जाती हैं।"
  },
  {
    "question_en": "For what reason was Water Hyacinth introduced to India?",
    "question_hi": "जलकुंभी को भारतवर्ष में किस कारण लाया गया था?",
    "options_en": ["Due to its medicinal properties", "Due to its beautifully shaped flowers and leaves", "To promote fish farming", "To promote aquaculture"],
    "options_hi": ["इसके औषधीय गुणों के कारण", "इसके सुन्दर आकार के पुष्प तथा पत्तियों के कारण", "मत्स्य पालन को बढ़ावा देने के लिए", "जलीय कृषि को बढ़ावा देने के लिए"],
    "correct_option_index": 1,
    "explanation_en": "(B) Due to its beautifully shaped flowers and leaves: This plant was introduced to India solely because of its beautifully shaped flowers and leaves.",
    "explanation_hi": "(B) इसके सुन्दर आकार के पुष्प तथा पत्तियों के कारण: इस पादप का भारतवर्ष में आगमन मात्र इसमें सुंदर आकार के पुष्प तथा पत्तियों के कारण हुआ।"
  },
  {
    "question_en": "Upon bio-magnification of DDT in the food chain, what concentration of DDT reaches fish-eating birds?",
    "question_hi": "खाद्य श्रृंखला में DDT का जैव आवर्धन (Bio-magnification) होने पर मत्स्य-भक्षी पक्षी में DDT की सांद्रता कितनी हो जाती है?",
    "options_en": ["0.003 ppm", "0.004 ppm", "2 ppm", "25 ppm"],
    "options_hi": ["0.003 ppm", "0.004 ppm", "2 ppm", "25 ppm"],
    "correct_option_index": 3,
    "explanation_en": "(D) 25 ppm: Upon bio-magnification of DDT in the aquatic food chain, the concentration of DDT in fish-eating birds reaches up to 25 ppm (parts per million).",
    "explanation_hi": "(D) 25 ppm: जलीय खाद्य श्रृंखला में DDT का जैव आवर्धन होने पर, मत्स्य-भक्षी (मछली खाने वाले पक्षी) में DDT की सांद्रता 25 ppm (भाग प्रति दस लाख) तक पहुँच जाती है।"
  },
  {
    "question_en": "What is the effect of Thermal Wastewater in cold regions?",
    "question_hi": "तापीय अपशिष्ट जल (Thermal Wastewater) का शीत-क्षेत्रों पर क्या प्रभाव पड़ता है?",
    "options_en": ["Growth of plants and fish decreases", "Growth of plants and fish increases", "No effect", "Organisms cannot survive"],
    "options_hi": ["पौधों और मछलियों की वृद्धि कम होती है", "पौधों और मछलियों की वृद्धि अधिक होती है", "कोई प्रभाव नहीं पड़ता", "जीव जीवित नहीं रह पाते"],
    "correct_option_index": 1,
    "explanation_en": "(B) Growth of plants and fish increases: Thermal wastewater increases the growth of plants and fish in extremely cold regions.",
    "explanation_hi": "(B) पौधों और मछलियों की वृद्धि अधिक होती है: तापीय अपशिष्ट जल से अत्यंत शीत-क्षेत्रों में पौधों तथा मछलियों की वृद्धि अधिक होती है।"
  },
  {
    "question_en": "Which disease is caused by the deficiency of Vitamin A?",
    "question_hi": "विटामिन A की कमी से कौन सा रोग होता है?",
    "options_en": ["Beri-beri", "Scurvy", "Loss of vision/Night blindness", "Rickets"],
    "options_hi": ["बेरी-बेरी", "स्कर्वी", "क्षीणता दृष्टिहीनता", "रिकेट्स"],
    "correct_option_index": 2,
    "explanation_en": "(C) Loss of vision/Night blindness: Deficiency of Vitamin A causes loss of vision (Kṣīṇatā dṛṣṭihīnatā), including night blindness.",
    "explanation_hi": "(C) क्षीणता दृष्टिहीनता: विटामिन A की कमी से क्षीणता दृष्टिहीनता (Weak vision, night blindness) होती है।"
  },
  {
    "question_en": "Which disease causes weak muscles and lack of energy to work?",
    "question_hi": "कौन सा रोग दुर्बल पेशियाँ (Weak Muscles) और काम करने की ऊर्जा में कमी का कारण बनता है?",
    "options_en": ["Rickets", "Scurvy", "Beri-beri", "Goiter"],
    "options_hi": ["रिकेट्स", "स्कर्वी", "बेरी-बेरी", "घेंघा"],
    "correct_option_index": 2,
    "explanation_en": "(C) Beri-beri: Deficiency of Vitamin B1 causes Beri-beri, symptoms of which include weak muscles and lack of energy to work.",
    "explanation_hi": "(C) बेरी-बेरी: विटामिन B1 की कमी से बेरी-बेरी रोग होता है, जिसके लक्षण दुर्बल पेशियाँ और काम करने की ऊर्जा में कमी हैं।"
  },
  {
    "question_en": "Bleeding gums and longer time for wound healing are symptoms of deficiency of which vitamin?",
    "question_hi": "मसूढ़ों से खून निकलना और घाव भरने में अधिक समय लगना किस विटामिन की कमी के लक्षण हैं?",
    "options_en": ["Vitamin A", "Vitamin B1", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B1", "विटामिन C", "विटामिन D"],
    "correct_option_index": 2,
    "explanation_en": "(C) Vitamin C: Deficiency of Vitamin C causes Scurvy, symptoms of which include bleeding gums and longer time for wound healing.",
    "explanation_hi": "(C) विटामिन C: विटामिन C की कमी से स्कर्वी रोग होता है, जिसके लक्षण मसूढ़ों से खून निकलना और घाव भरने में अधिक समय लगना हैं।"
  },
  {
    "question_en": "Which disease is caused by Vitamin D deficiency, in which bones become soft and bent?",
    "question_hi": "विटामिन D की कमी से कौन सा रोग होता है, जिसमें अस्थियाँ मुलायम होकर मुड़ जाती हैं?",
    "options_en": ["Beri-beri", "Scurvy", "Rickets", "Goiter"],
    "options_hi": ["बेरी-बेरी", "स्कर्वी", "रिकेट्स", "घेंघा"],
    "correct_option_index": 2,
    "explanation_en": "(C) Rickets: Deficiency of Vitamin D causes Rickets, which includes softening and bending of bones.",
    "explanation_hi": "(C) रिकेट्स: विटामिन D की कमी से रिकेट्स होता है, जिसमें अस्थियों का मुलायम होकर मुड़ जाना शामिल है।"
  },
  {
    "question_en": "Weak bones and tooth decay are caused by the deficiency of which mineral?",
    "question_hi": "कमजोर अस्थियाँ और दंतक्षय (Tooth decay) किस खनिज लवण की कमी के कारण होता है?",
    "options_en": ["Iodine", "Calcium", "Iron", "Sodium"],
    "options_hi": ["आयोडीन", "कैल्शियम", "लौह", "सोडियम"],
    "correct_option_index": 1,
    "explanation_en": "(B) Calcium: Deficiency of Calcium causes weak bones and tooth decay.",
    "explanation_hi": "(B) कैल्शियम: कैल्शियम की कमी से कमजोर अस्थियाँ और दंतक्षय होता है।"
  },
  {
    "question_en": "Goiter disease is caused by the deficiency of which mineral?",
    "question_hi": "घेंघा (Goiter) रोग किस खनिज की कमी से होता है?",
    "options_en": ["Calcium", "Iron", "Iodine", "Phosphorus"],
    "options_hi": ["कैल्शियम", "लौह", "आयोडीन", "फास्फोरस"],
    "correct_option_index": 2,
    "explanation_en": "(C) Iodine: Deficiency of Iodine causes Goiter, in which the gland in the neck swells.",
    "explanation_hi": "(C) आयोडीन: आयोडीन की कमी से घेंघा (Goiter) रोग होता है, जिसमें गर्दन की ग्रंथि फूल जाती है।"
  },
  {
    "question_en": "Why do earthworms come out of the ground during heavy rain?",
    "question_hi": "केंचुए भारी वर्षा के समय जमीन से बाहर क्यों आते हैं?",
    "options_en": ["In search of food", "For reproduction", "Due to lack of space to breathe in water-filled burrows", "Due to decrease in temperature"],
    "options_hi": ["भोजन की तलाश में", "प्रजनन के लिए", "पानी से भरे बिलों में साँस लेने के लिए जगह न होने के कारण", "तापमान कम होने के कारण"],
    "correct_option_index": 2,
    "explanation_en": "(C) Due to lack of space to breathe in water-filled burrows: During heavy rain, pores and burrows in the soil get filled with water instead of air, so creatures living underground have to come to the surface to breathe.",
    "explanation_hi": "(C) पानी से भरे बिलों में साँस लेने के लिए जगह न होने के कारण: भारी वर्षा के समय, मिट्टी के छिद्रों और मांदों में वायु की जगह पानी भर जाता है, इसलिए जमीन के अंदर रहने वाले जीवों को साँस लेने के लिए जमीन पर आना पड़ता है।"
  },
  {
    "question_en": "What happens to the volume of the Chest Cavity during Inhalation?",
    "question_hi": "अंत:श्वसन (Inhalation) के समय वक्ष-गुहा (Chest Cavity) का आयतन कैसा होता है?",
    "options_en": ["Decreases", "Increases", "Remains the same", "First decreases then increases"],
    "options_hi": ["कम हो जाता है", "बढ़ जाता है", "समान रहता है", "पहले कम फिर अधिक"],
    "correct_option_index": 1,
    "explanation_en": "(B) Increases: During inhalation, the volume of the chest cavity increases.",
    "explanation_hi": "(B) बढ़ जाता है: अंत:श्वसन के समय वक्ष-गुहा का आयतन बढ़ जाता है।"
  },
  {
    "question_en": "What is a major reason for the increase in the incidence of respiratory and water-borne diseases in humans?",
    "question_hi": "मनुष्यों में साँस और जल-संक्रामक रोगों की घटनाएँ बढ़ने का एक प्रमुख कारण क्या है?",
    "options_en": ["Noise pollution", "Deterioration in water and air quality", "Soil pollution", "Overpopulation"],
    "options_hi": ["शोर प्रदूषण", "जल और वायु की गुणवत्ता में गिरावट", "मिट्टी का प्रदूषण", "अधिक जनसंख्या"],
    "correct_option_index": 1,
    "explanation_en": "(B) Deterioration in water and air quality: The deterioration of water and air quality (70 percent of water in India is polluted) has led to an increase in the incidence of respiratory and water-borne diseases.",
    "explanation_hi": "(B) जल और वायु की गुणवत्ता में गिरावट: जल और वायु की गुणवत्ता की गिरावट (भारत में 70 प्रतिशत जल प्रदूषित है) से साँस और जल-संक्रामक रोगों की घटनाएँ बढ़ी हैं।"
  },
  {
    "question_en": "Which of the following diseases is waterborne?",
    "question_hi": "निम्नलिखित में से कौन सा रोग जल जन्य (Waterborne) है?",
    "options_en": ["Conjunctivitis", "Diarrhea", "Respiratory infection", "Bronchitis"],
    "options_hi": ["नेत्रश्लेष्मला शोथ", "अतिसार", "श्वसन संक्रमण", "श्वासनली शोथ"],
    "correct_option_index": 1,
    "explanation_en": "(B) Diarrhea: Diarrhea (Atisār) is a waterborne disease.",
    "explanation_hi": "(B) अतिसार: अतिसार (Diarrhea) एक जल जन्य रोग है।"
  },
  {
    "question_en": "What is one cause of Acid Rain?",
    "question_hi": "अम्ल वर्षा (Acid Rain) का एक कारण क्या है?",
    "options_en": ["Water pollution", "Land pollution", "Noise pollution", "Air pollution"],
    "options_hi": ["जल प्रदूषण", "भूमि प्रदूषण", "शोर प्रदूषण", "वायु प्रदूषण"],
    "correct_option_index": 3,
    "explanation_en": "(D) Air pollution: One cause of acid rain is air pollution.",
    "explanation_hi": "(D) वायु प्रदूषण: अम्ल वर्षा का एक कारण वायु प्रदूषण है।"
  },
  {
    "question_en": "What is the typical volume of culture in a Bioreactor?",
    "question_hi": "बायोरिएक्टर (Bioreactor) में संवर्धन का आयतन सामान्यतः कितना होता है?",
    "options_en": ["10-100 liters", "100-1000 liters", "1000-10000 liters", "Less than 1 liter"],
    "options_hi": ["10-100 लीटर", "100-1000 लीटर", "1000-10000 लीटर", "1 लीटर से कम"],
    "correct_option_index": 1,
    "explanation_en": "(B) 100-1000 liters: Bioreactors were developed for large-scale production, where larger volumes of culture (100-1000 liters) could be processed.",
    "explanation_hi": "(B) 100-1000 लीटर: बायोरिएक्टर के विकास की आवश्यकता अधिक मात्रा में उत्पादन के लिए थी, जहाँ संवर्धन का अधिक आयतन (100-1000 लीटर) संशोधित किया जा सके।"
  },
  {
    "question_en": "What optimal conditions are required in a Bioreactor to obtain the desired product?",
    "question_hi": "बायोरिएक्टर में वांछित उत्पाद पाने के लिए किन अनुकूलतम परिस्थितियों की आवश्यकता होती है?",
    "options_en": ["Temperature and pH", "Substrate and salts", "Vitamins and oxygen", "All of the above"],
    "options_hi": ["तापमान और pH", "क्रियाधार और लवण", "विटामिन और ऑक्सीजन", "उपरोक्त सभी"],
    "correct_option_index": 3,
    "explanation_en": "(D) All of the above: A bioreactor provides optimal conditions like temperature, pH, substrate, salts, vitamins, and oxygen to obtain the desired product.",
    "explanation_hi": "(D) उपरोक्त सभी: बायोरिएक्टर वांछित उत्पाद पाने के लिए, तापमान, pH, क्रियाधार, लवण, विटामिन, ऑक्सीजन जैसी अनुकूलतम परिस्थितियाँ उपलब्ध कराता है।"
  },
  {
    "question_en": "Under which branch of General Science does the study of the 'Human Digestive System' fall?",
    "question_hi": "'मानव पाचन तंत्र' (Human Digestive System) का अध्ययन सामान्य विज्ञान की किस शाखा के अंतर्गत आता है?",
    "options_en": ["Physics", "Chemistry", "Biology", "Astronomy"],
    "options_hi": ["भौतिकी", "रसायन विज्ञान", "जीव विज्ञान", "खगोल विज्ञान"],
    "correct_option_index": 2,
    "explanation_en": "(C) Biology: 'Human Digestive System' is a topic of General Science Biology.",
    "explanation_hi": "(C) जीव विज्ञान: 'मानव पाचन तंत्र' जनरल साइंस बायोलॉजी का एक विषय है।"
  },
  {
    "question_en": "In which branch of General Science is the study of 'Human Diseases & Treatment' conducted?",
    "question_hi": "'मानव रोग और उपचार' (Human Diseases & Treatment) का अध्ययन सामान्य विज्ञान की किस शाखा में किया जाता है?",
    "options_en": ["Physics", "Chemistry", "Biology", "Political Science"],
    "options_hi": ["भौतिकी", "रसायन विज्ञान", "जीव विज्ञान", "राजनीति विज्ञान"],
    "correct_option_index": 2,
    "explanation_en": "(C) Biology: 'Human Diseases & Treatment' are topics of General Science Biology.",
    "explanation_hi": "(C) जीव विज्ञान: 'मानव रोग और उपचार' जनरल साइंस बायोलॉजी के विषय हैं।"
  },
  {
    "question_en": "Under which subject are 'Human Vitamin and Minerals' studied?",
    "question_hi": "'मानव विटामिन और खनिज' (Human Vitamin and Minerals) किस विषय के तहत अध्ययन किए जाते हैं?",
    "options_en": ["Physics", "Chemistry", "Biology", "Economics"],
    "options_hi": ["भौतिकी", "रसायन विज्ञान", "जीव विज्ञान", "अर्थशास्त्र"],
    "correct_option_index": 2,
    "explanation_en": "(C) Biology: 'Human Vitamin and Minerals' is a topic of General Science Biology.",
    "explanation_hi": "(C) जीव विज्ञान: 'मानव विटामिन और खनिज' जनरल साइंस बायोलॉजी का विषय है।"
  },
  {
    "question_en": "Under which branch of General Science is the study of 'Plant Kingdom' and 'Animal Kingdom' conducted?",
    "question_hi": "'पादप जगत' (Plant Kingdom) और 'जंतु जगत' (Animal Kingdom) का अध्ययन सामान्य विज्ञान की किस शाखा के तहत किया जाता है?",
    "options_en": ["Physics", "Chemistry", "Biology", "Sociology"],
    "options_hi": ["भौतिकी", "रसायन विज्ञान", "जीव विज्ञान", "समाजशास्त्र"],
    "correct_option_index": 2,
    "explanation_en": "(C) Biology: 'Plant Kingdom' and 'Animal Kingdom' are topics of General Science Biology.",
    "explanation_hi": "(C) जीव विज्ञान: 'पादप जगत' और 'जंतु जगत' जनरल साइंस बायोलॉजी के विषय हैं।"
  },
  {
    "question_en": "Under which branch does the study of the 'Modern Periodic Table' fall?",
    "question_hi": "'आधुनिक आवर्त सारणी' (Modern Periodic Table) का अध्ययन किस शाखा के अंतर्गत आता है?",
    "options_en": ["Physics", "Biology", "Chemistry", "Geography"],
    "options_hi": ["भौतिकी", "जीव विज्ञान", "रसायन विज्ञान", "भूगोल"],
    "correct_option_index": 2,
    "explanation_en": "(C) Chemistry: 'Modern Periodic Table' is a topic of General Science Chemistry.",
    "explanation_hi": "(C) रसायन विज्ञान: 'आधुनिक आवर्त सारणी' जनरल साइंस केमिस्ट्री के विषय हैं।"
  },
  {
    "question_en": "Under which science branch is the study of 'Halogens and Inert Gases' conducted?",
    "question_hi": "'हैलोजन और अक्रिय गैसें' (Halogens and Inert Gases) का अध्ययन किस विज्ञान शाखा के तहत किया जाता है?",
    "options_en": ["Physics", "Biology", "Chemistry", "Technology"],
    "options_hi": ["भौतिकी", "जीव विज्ञान", "रसायन विज्ञान", "प्रौद्योगिकी"],
    "correct_option_index": 2,
    "explanation_en": "(C) Chemistry: 'Halogens and Inert Gases' are topics of General Science Chemistry.",
    "explanation_hi": "(C) रसायन विज्ञान: 'हैलोजन और अक्रिय गैसें' जनरल साइंस केमिस्ट्री के विषय हैं।"
  },
  {
    "question_en": "Under which branch of General Science does the study of 'Optics' fall?",
    "question_hi": "'ऑप्टिक्स' (Optics) का अध्ययन सामान्य विज्ञान की किस शाखा के अंतर्गत आता है?",
    "options_en": ["Biology", "Chemistry", "Physics", "Astronomy"],
    "options_hi": ["जीव विज्ञान", "रसायन विज्ञान", "भौतिकी", "खगोल विज्ञान"],
    "correct_option_index": 2,
    "explanation_en": "(C) Physics: 'Optics' is a topic of General Science Physics.",
    "explanation_hi": "(C) भौतिकी: 'ऑप्टिक्स' (प्रकाशिकी) जनरल साइंस फिजिक्स का एक विषय है।"
  },
  {
    "question_en": "In which branch of General Science are the principles of 'Electricity' and 'Magnetism' included?",
    "question_hi": "'बिजली' (Electricity) और 'चुंबकत्व' (Magnetism) के सिद्धांत सामान्य विज्ञान की किस शाखा में शामिल हैं?",
    "options_en": ["Biology", "Chemistry", "Physics", "Geology"],
    "options_hi": ["जीव विज्ञान", "रसायन विज्ञान", "भौतिकी", "भूविज्ञान"],
    "correct_option_index": 2,
    "explanation_en": "(C) Physics: 'Electricity' and 'Magnetism' are topics of General Science Physics.",
    "explanation_hi": "(C) भौतिकी: 'बिजली' और 'चुंबकत्व' जनरल साइंस फिजिक्स के विषय हैं।"
  },
  {
    "question_en": "Under which branch do 'Basic Concepts of Fluids' fall?",
    "question_hi": "'द्रव्यों की बुनियादी अवधारणाएँ' (Basic Concepts of Fluids) किस शाखा के तहत आती हैं?",
    "options_en": ["Chemistry", "Biology", "Physics", "Mathematics"],
    "options_hi": ["रसायन विज्ञान", "जीव विज्ञान", "भौतिकी", "गणित"],
    "correct_option_index": 2,
    "explanation_en": "(C) Physics: 'Basic Concepts of Fluids' is a topic of General Science Physics.",
    "explanation_hi": "(C) भौतिकी: 'द्रव्यों की बुनियादी अवधारणाएँ' जनरल साइंस फिजिक्स का विषय है।"
  },
  {
    "question_en": "In which stage of landform development is downward cutting prominent?",
    "question_hi": "भू-आकृतियों के विकास की किस अवस्था में अधोमुख कटाव (Downward cutting) प्रमुख होता है?",
    "options_en": ["Maturity", "Old age", "Youth", "Early Maturity"],
    "options_hi": ["प्रौढ़ावस्था", "वृद्धावस्था", "युवावस्था", "प्रथम प्रौढ़ावस्था"],
    "correct_option_index": 2,
    "explanation_en": "(C) Youth: Downward cutting is prominent in the youth stage of landform development.",
    "explanation_hi": "(C) युवावस्था: स्थल रूप विकास की तरुणावस्था/युवावस्था में अधोमुख कटाव प्रमुख होता है।"
  },
  {
    "question_en": "Where are 'Mushroom Rocks' found?",
    "question_hi": "'मशरूम शैलें' (छत्रक शैलें) कहाँ पाई जाती हैं?",
    "options_en": ["River valley", "Glacier", "Desert", "Sea coast"],
    "options_hi": ["नदी घाटी में", "हिमनद में", "रेगिस्तान में", "समुद्र तट पर"],
    "correct_option_index": 2,
    "explanation_en": "(C) Desert: Mushroom Rocks are found in deserts.",
    "explanation_hi": "(C) रेगिस्तान में: छत्रक शैलें (Mushroom Rocks) रेगिस्तान (रेगिस्‍तान) में पाई जाती हैं।"
  },
  {
    "question_en": "Where is an 'Oxbow lake' found?",
    "question_hi": "'चापझील' (Oxbow lake) कहाँ पाई जाती है?",
    "options_en": ["Glacier", "River valley", "Desert", "Hard rock layer"],
    "options_hi": ["हिमनद में", "नदी घाटी में", "रेगिस्तान में", "कठोर संस्तर शैल"],
    "correct_option_index": 1,
    "explanation_en": "(B) River valley: Oxbow lakes are found in river valleys.",
    "explanation_hi": "(B) नदी घाटी में: चापझीलें नदी घाटी में पाई जाती हैं।"
  },
  {
    "question_en": "Which of the following gases is most abundant in the atmosphere?",
    "question_hi": "निम्नलिखित में से कौन सी गैस वायुमंडल में सबसे अधिक मात्रा में मौजूद है?",
    "options_en": ["Oxygen", "Argon", "Nitrogen", "Carbon dioxide"],
    "options_hi": ["ऑक्सीजन", "ऑर्गन", "नाइट्रोजन", "कार्बन डाइऑक्साइड"],
    "correct_option_index": 2,
    "explanation_en": "(C) Nitrogen: Nitrogen gas is the most abundant in the atmosphere.",
    "explanation_hi": "(C) नाइट्रोजन: नाइट्रोजन गैस वायुमंडल में सबसे अधिक मात्रा में मौजूद है।"
  },
  {
    "question_en": "Which layer of the atmosphere is important for human life?",
    "question_hi": "वायुमंडल की वह परत जो मानव जीवन के लिए महत्वपूर्ण है?",
    "options_en": ["Stratosphere", "Mesosphere", "Troposphere", "Ionosphere"],
    "options_hi": ["समतापमंडल", "मध्यमंडल", "क्षोभमंडल", "आयनमंडल"],
    "correct_option_index": 2,
    "explanation_en": "(C) Troposphere: The Troposphere is the atmospheric layer important for human life.",
    "explanation_hi": "(C) क्षोभमंडल: क्षोभमंडल वायुमंडलीय परत है जो मानव जीवन के लिए महत्वपूर्ण है।"
  },
  {
    "question_en": "At what height does the amount of oxygen become negligible?",
    "question_hi": "कितनी ऊँचाई पर ऑक्सीजन की मात्रा नगण्य (negligible) हो जाती है?",
    "options_en": ["90 kilometers", "100 kilometers", "120 kilometers", "150 kilometers"],
    "options_hi": ["90 किलोमीटर", "100 किलोमीटर", "120 किलोमीटर", "150 किलोमीटर"],
    "correct_option_index": 2,
    "explanation_en": "(C) 120 kilometers: The amount of oxygen becomes negligible at a height of 120 kilometers.",
    "explanation_hi": "(C) 120 किलोमीटर: 120 किलोमीटर की ऊँचाई पर ऑक्सीजन की मात्रा नगण्य हो जाती है।"
  },
  {
    "question_en": "Which gas is transparent to incoming solar radiation but opaque to outgoing terrestrial radiation?",
    "question_hi": "कौन सी गैस सौर विकिरण के लिए पारदर्शी है तथा पार्थिव विकिरण (पृथ्वी से निकलने वाला विकिरण) के लिए अपारदर्शी है?",
    "options_en": ["Oxygen", "Nitrogen", "Helium", "Carbon dioxide"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "कार्बन डाइऑक्साइड"],
    "correct_option_index": 3,
    "explanation_en": "(D) Carbon dioxide: Carbon dioxide is transparent to incoming solar radiation but opaque to outgoing terrestrial radiation.",
    "explanation_hi": "(D) कार्बन डाइऑक्साइड: कार्बन डाइऑक्साइड सौर विकिरण के लिए पारदर्शी है तथा पार्थिव विकिरण के लिए अपारदर्शी है।"
  },
  {
    "question_en": "Which of the following is a sequential process?",
    "question_hi": "निम्न में से कौन सी एक अनुक्रमिक प्रक्रिया (Sequential process) है?",
    "options_en": ["Deposition", "Volcanism", "Diastrophism", "Erosion"],
    "options_hi": ["निक्षेप", "ज्वालामुखी यता", "पटल विरूपण", "अपरदन"],
    "correct_option_index": 3,
    "explanation_en": "(D) Erosion: Under geomorphic processes, erosion is a sequential process.",
    "explanation_hi": "(D) अपरदन: भू-आकृतिक प्रक्रियाओं के तहत अपरदन एक अनुक्रमिक प्रक्रिया है।"
  },
  {
    "question_en": "The hydration process affects which of the following?",
    "question_hi": "हाइड्रेशन (जल योजन) प्रक्रिया निम्नलिखित में से किसे प्रभावित करती है?",
    "options_en": ["Granite", "Quartz", "Clay soil", "Salt"],
    "options_hi": ["ग्रेनाइट", "क्वार्ट्ज़", "चीका (क्ले) मिट्टी", "लवण"],
    "correct_option_index": 2,
    "explanation_en": "(C) Clay soil: The hydration process affects clay soil.",
    "explanation_hi": "(C) चीका (क्ले) मिट्टी: जल योजन प्रक्रिया चीका (Clay) मिट्टी को प्रभावित करती है।"
  },
  {
    "question_en": "Which industry requires heavy and bulky raw materials, along with coal and electrical energy?",
    "question_hi": "भारी और स्थूल कच्चे माल (Heavy and bulky raw materials) की आवश्यकता किस उद्योग को होती है, जिसके लिए कोयला और विद्युत ऊर्जा भी आवश्यक है?",
    "options_en": ["Aluminum smelting", "Paper industry", "Cement industry", "Iron and Steel industry"],
    "options_hi": ["एल्यूमीनियम प्रगलन", "कागज उद्योग", "सीमेंट उद्योग", "लौह एवं इस्पात उद्योग"],
    "correct_option_index": 2,
    "explanation_en": "(C) Cement industry: The cement industry requires heavy and bulky raw materials (limestone, silica, and gypsum) along with coal and electrical energy.",
    "explanation_hi": "(C) सीमेंट उद्योग: सीमेंट उद्योग को भारी व स्थूल कच्चे माल (चूना पत्थर, सिलिका और जिप्सम) के साथ-साथ कोयला तथा विद्युत ऊर्जा की आवश्यकता होती है।"
  },
  {
    "question_en": "Which industry uses Bauxite as a raw material?",
    "question_hi": "बॉक्साइट (Bauxite) को कच्चे माल के रूप में कौन सा उद्योग प्रयोग करता है?",
    "options_en": ["Cement", "Steel", "Aluminum smelting", "Paper"],
    "options_hi": ["सीमेंट", "स्टील", "एल्यूमीनियम प्रगलन", "कागज"],
    "correct_option_index": 2,
    "explanation_en": "(C) Aluminum smelting: The aluminum smelting industry uses bauxite as a raw material.",
    "explanation_hi": "(C) एल्यूमीनियम प्रगलन: एल्यूमीनियम प्रगलन उद्योग बॉक्साइट को कच्चे माल के रूप में प्रयोग करता है।"
  },
  {
    "question_en": "Which elements are mainly included in Manganese nodules?",
    "question_hi": "मैंगनीज ग्रंथियाँ (Manganese nodules) में मुख्य रूप से कौन से तत्व सम्मिलित होते हैं?",
    "options_en": ["Copper and Nickel", "Iron and Manganese", "Cobalt", "All of the above, mainly Iron and Manganese"],
    "options_hi": ["ताँबा और निकेल", "लोहा और मैंगनीज", "कोबाल्ट", "उपरोक्त सभी, मुख्य रूप से लोहा और मैंगनीज"],
    "correct_option_index": 3,
    "explanation_en": "(D) All of the above, mainly Iron and Manganese: Manganese nodules mainly contain iron and manganese, and usually also contain some amounts of copper, nickel, and cobalt.",
    "explanation_hi": "(D) उपरोक्त सभी, मुख्य रूप से लोहा और मैंगनीज: मैंगनीज ग्रंथियाँ मुख्यत: लोहा और मैंगनीज सम्मिलित करती हैं तथा इनमें आमतौर पर कुछ मात्रा में ताँबा, निकेल व कोबाल्ट भी होता है।"
  },
  {
    "question_en": "Under which branch does the study of 'Plant Morphology' fall?",
    "question_hi": "पादप आकृति विज्ञान (Plant Morphology) का अध्ययन किस शाखा के अंतर्गत आता है?",
    "options_en": ["Physics", "Chemistry", "Biology", "Geology"],
    "options_hi": ["भौतिकी", "रसायन विज्ञान", "जीव विज्ञान", "भूविज्ञान"],
    "correct_option_index": 2,
    "explanation_en": "(C) Biology: 'Plant Morphology' is a topic of General Science Biology.",
    "explanation_hi": "(C) जीव विज्ञान: 'पादप आकृति विज्ञान' (Plant Morphology) जनरल साइंस बायोलॉजी के विषय हैं।"
  },
  {
    "question_en": "In which branch of General Science is 'Plant Physiology' studied?",
    "question_hi": "पादप कार्यिकी (Plant Physiology) का अध्ययन सामान्य विज्ञान की किस शाखा में किया जाता है?",
    "options_en": ["Physics", "Chemistry", "Biology", "Economics"],
    "options_hi": ["भौतिकी", "रसायन विज्ञान", "जीव विज्ञान", "अर्थशास्त्र"],
    "correct_option_index": 2,
    "explanation_en": "(C) Biology: 'Plant Physiology' is a topic of General Science Biology.",
    "explanation_hi": "(C) जीव विज्ञान: 'पादप कार्यिकी' (Plant Physiology) जनरल साइंस बायोलॉजी के विषय हैं।"
  },
  {
    "question_en": "What is the main characteristic of 'Modern Manufacturing'?",
    "question_hi": "आधुनिक निर्माण (Modern Manufacturing) की प्रमुख विशेषता क्या है?",
    "options_en": ["Large capital and large organizations", "Complex technological machinery", "Extreme specialization and division of labor", "All of the above"],
    "options_hi": ["अत्यधिक पूंजी और बड़े संगठन", "जटिल प्रौद्योगिकी यंत्र", "अत्यधिक विशिष्टीकरण और श्रम विभाजन", "उपरोक्त सभी"],
    "correct_option_index": 3,
    "explanation_en": "(D) All of the above: Characteristics of modern manufacturing include complex technological machinery, extreme specialization/division of labor, large capital, large organizations, and administrative bureaucracy.",
    "explanation_hi": "(D) उपरोक्त सभी: आधुनिक निर्माण की विशेषताओं में जटिल प्रौद्योगिकी यंत्र, अत्यधिक विशिष्टीकरण/श्रम विभाजन, अधिक पूंजी, बड़े संगठन और प्रशासकीय अधिकारी-वर्ग शामिल हैं।"
  },
  {
    "question_en": "What is Humus, which increases the fertility of the topsoil?",
    "question_hi": "ह्यूमस (Humus) क्या है, जो मिट्टी की ऊपरी परत की उर्वरकता बढ़ाता है?",
    "options_en": ["Minerals found in soil", "Dead and decomposed organic matter", "Inorganic fertilizer", "Mixture of sand and silt"],
    "options_hi": ["मृदा में पाए जाने वाले खनिज", "मृत व अपघटित जैविक पदार्थ", "अकार्बनिक उर्वरक", "रेत और सिल्ट का मिश्रण"],
    "correct_option_index": 1,
    "explanation_en": "(B) Dead and decomposed organic matter: Humus is dead and decomposed organic matter that increases the fertility of the topsoil.",
    "explanation_hi": "(B) मृत व अपघटित जैविक पदार्थ: ह्यूमस मृत व अपघटित जैविक पदार्थ हैं जो मिट्टी की ऊपरी परत की उर्वरकता बढ़ाते हैं।"
  },
  {
    "question_en": "How is a 'Bioreactor' described?",
    "question_hi": "'बायोरिएक्टर' को किस रूप में वर्णित किया गया है?",
    "options_en": ["A medium for microbial growth", "A tank where temperature is controlled", "A vessel in which raw materials are biologically converted into specific products", "A device that only supplies oxygen"],
    "options_hi": ["सूक्ष्म जीवों के विकास का माध्यम", "एक टैंक जिसमें तापमान नियंत्रित होता है", "एक बर्तन के समान जिसमें कच्चे माल को जैविक रूप से विशिष्ट उत्पादों में परिवर्तित किया जाता है", "एक उपकरण जो केवल ऑक्सीजन की आपूर्ति करता है"],
    "correct_option_index": 2,
    "explanation_en": "(C) A vessel in which raw materials are biologically converted into specific products: A bioreactor is like a vessel in which raw materials are biologically converted into specific products (like enzymes) using microbes, plants, animals, or human cells.",
    "explanation_hi": "(C) एक बर्तन के समान जिसमें कच्चे माल को जैविक रूप से विशिष्ट उत्पादों में परिवर्तित किया जाता है: बायोरिएक्टर एक बर्तन के समान है, जिसमें सूक्ष्मजीवों, पौधों, जंतुओं व मानव कोशिकाओं का उपयोग करते हुए कच्चे माल को जैविक रूप से विशिष्ट उत्पादों (जैसे एन्जाइम) में परिवर्तित किया जाता है।"
  },
  {
    "question_en": "Under which branch does the study of 'Water in the Atmosphere' and 'Solar Radiation, Heat Balance & Temperature' fall?",
    "question_hi": "'वायुमंडल में जल' (Water in the Atmosphere) और 'सौर विकिरण, ऊष्मा संतुलन एवं तापमान' का अध्ययन किस शाखा के अंतर्गत आता है?",
    "options_en": ["Biology", "Physical Geography", "Economics", "Chemistry"],
    "options_hi": ["जीव विज्ञान", "भौतिक भूगोल", "अर्थशास्त्र", "रसायन विज्ञान"],
    "correct_option_index": 1,
    "explanation_en": "(B) Physical Geography: These topics fall under Physical Geography (Unit IV: Climate).",
    "explanation_hi": "(B) भौतिक भूगोल: ये विषय भौतिक भूगोल (इकाई IV: जलवायु) के अंतर्गत आते हैं।"
  },
  {
    "question_en": "Where are Tropical Deciduous Forests found, and what is the annual rainfall there?",
    "question_hi": "उष्णकटिबंधीय पर्णपाती वन (Tropical Deciduous Forests) कहाँ पाए जाते हैं जहाँ वार्षिक वर्षा कितनी होती है?",
    "options_en": ["Less than 50 cm", "70 to 200 cm", "More than 200 cm", "More than 400 cm"],
    "options_hi": ["50 सेंटीमीटर से कम", "70 से 200 सेंटीमीटर", "200 सेंटीमीटर से अधिक", "400 सेंटीमीटर से अधिक"],
    "correct_option_index": 1,
    "explanation_en": "(B) 70 to 200 cm: Tropical Deciduous Forests are found in regions where the annual rainfall is between 70 and 200 cm.",
    "explanation_hi": "(B) 70 से 200 सेंटीमीटर: उष्णकटिबंधीय पर्णपाती वन उन क्षेत्रों में पाए जाते हैं जहाँ वार्षिक वर्षा 70 से 200 सेंटीमीटर होती है।"
  },
  {
    "question_en": "Which type of forest is most abundant in India and is also called monsoon forest?",
    "question_hi": "भारत में किस प्रकार के वन बहुतायत में पाए जाते हैं, जिन्हें मानसूनी वन भी कहा जाता है?",
    "options_en": ["Tropical Evergreen Forest", "Montane Forest", "Tropical Deciduous Forest", "Thorn Forest"],
    "options_hi": ["उष्णकटिबंधीय सदाबहार वन", "पर्वतीय वन", "उष्णकटिबंधीय पर्णपाती वन", "कँटीले वन"],
    "correct_option_index": 2,
    "explanation_en": "(C) Tropical Deciduous Forest: Tropical Deciduous Forests are found in abundance in India.",
    "explanation_hi": "(C) उष्णकटिबंधीय पर्णपाती वन: भारतवर्ष में उष्णकटिबंधीय पर्णपाती वन बहुतायत में पाए जाते हैं।"
  },
  {
    "question_en": "How rapidly does Water Hyacinth perform its vegetative propagation?",
    "question_hi": "जलकुंभी अपने कायिक प्रवर्धन (vegetative propagation) को कितनी तेजी से करती है?",
    "options_en": ["At a moderate speed", "Slowly", "Rapidly", "Very slowly"],
    "options_hi": ["मध्यम गति से", "धीमी गति से", "द्रुत गति से", "बहुत धीमी गति से"],
    "correct_option_index": 2,
    "explanation_en": "(C) Rapidly: Water Hyacinth can perform vegetative propagation rapidly.",
    "explanation_hi": "(C) द्रुत गति से: जलकुंभी कायिक प्रवर्धन द्रुत गति से कर सकती है।"
  },
  {
    "question_en": "What result was astonishing in Rutherford's alpha particle scattering experiment?",
    "question_hi": "रदरफोर्ड के अल्फा कण प्रकीर्णन प्रयोग में क्या परिणाम आश्चर्यजनक था?",
    "options_en": ["All particles passed straight through", "Some particles were deflected by small angles", "One out of every 12000 particles rebounded", "Alpha particles were lighter than protons"],
    "options_hi": ["सभी कण सीधे निकल गए", "कुछ कण छोटे कोण से विक्षेपित हुए", "प्रत्येक 12000 कणों में से एक कण वापस आ गया", "अल्फा कण प्रोटॉन से हल्के थे"],
    "correct_option_index": 2,
    "explanation_en": "(C) One out of every 12000 particles rebounded: Astonishingly, one out of every 12000 particles rebounded.",
    "explanation_hi": "(C) प्रत्येक 12000 कणों में से एक कण वापस आ गया: आश्चर्यजनक रूप से प्रत्येक 12000 कणों में से एक कण वापस आ गया था।"
  },
  {
    "question_en": "Which principle did Archimedes discover after observing water overflowing when he stepped into a bathtub?",
    "question_hi": "आर्कमिडीज ने किस सिद्धांत की खोज नहाने के टब में घुसने पर पानी बाहर बहने को देखने के बाद की?",
    "options_en": ["Newton's Law", "Principle of Buoyancy", "Law of Gravitation", "Theory of Relativity"],
    "options_hi": ["न्यूटन का नियम", "उत्प्लावन बल का सिद्धांत", "गुरुत्वाकर्षण का नियम", "सापेक्षता का सिद्धांत"],
    "correct_option_index": 1,
    "explanation_en": "(B) Principle of Buoyancy: It was Archimedes' principle (Principle of Buoyancy), which he discovered after observing water overflowing when he stepped into a bathtub.",
    "explanation_hi": "(B) उत्प्लावन बल का सिद्धांत: यह आर्कमिडीज सिद्धांत था (उत्प्लावन बल का सिद्धांत), जिसे उन्होंने नहाने के टब में घुसने पर पानी बाहर बहने को देखने के बाद खोजा।"
  },
  {
    "question_en": "If there were no friction between the road and the tires of vehicles, what could not be done to the vehicles?",
    "question_hi": "यदि सड़क तथा वाहन के टायरों के बीच घर्षण न होता तो वाहनों को क्या नहीं किया जा सकता था?",
    "options_en": ["Start motion", "Stop", "Change direction", "All of the above"],
    "options_hi": ["गति आरंभ करना", "रोकना", "दिशा परिवर्तित करना", "उपरोक्त सभी"],
    "correct_option_index": 3,
    "explanation_en": "(D) All of the above: If there were no friction, vehicles could neither start moving, nor be stopped, nor change direction.",
    "explanation_hi": "(D) उपरोक्त सभी: यदि घर्षण न होता तो वाहनों की न तो गति आरंभ की जा सकती थी, न ही उन्हें रोका जा सकता था और न ही दिशा परिवर्तित की जा सकती थी।"
  },
  {
    "question_en": "Under which branch is the study of Force, Gravitation, and Pressure conducted in General Science?",
    "question_hi": "सामान्य विज्ञान में बल, गुरुत्वाकर्षण, और दाब (Force, Gravitation, and Pressure) का अध्ययन किस शाखा के तहत किया जाता है?",
    "options_en": ["Chemistry", "Biology", "Physics", "Geology"],
    "options_hi": ["रसायन विज्ञान", "जीव विज्ञान", "भौतिकी", "भूविज्ञान"],
    "correct_option_index": 2,
    "explanation_en": "(C) Physics: 'Gravitation & Pressure' are topics of General Science Physics.",
    "explanation_hi": "(C) भौतिकी: 'गुरुत्वाकर्षण एवं दाब' जनरल साइंस फिजिक्स के विषय हैं।"
  },
  {
    "question_en": "What is the role of Weathering in Soil formation?",
    "question_hi": "मृदा निर्माण (Soil formation) में अपक्षय (Weathering) की भूमिका क्या है?",
    "options_en": ["It is an essential prerequisite", "It is only an auxiliary factor", "It has no effect", "It is a passive factor"],
    "options_hi": ["यह एक आवश्यक अनिवार्यता है", "यह केवल एक सहायक कारक है", "इसका कोई प्रभाव नहीं है", "यह एक निष्क्रिय कारक है"],
    "correct_option_index": 0,
    "explanation_en": "(A) It is an essential prerequisite: The question asks if weathering is an essential prerequisite for soil formation. (Sources consider it a crucial factor).",
    "explanation_hi": "(A) यह एक आवश्यक अनिवार्यता है: यह प्रश्न पूछा गया है कि क्या मृदा निर्माण में अपक्षय एक आवश्यक अनिवार्यता है। (स्रोतों में इसे महत्वपूर्ण कारक माना गया है)।"
  },
  {
    "question_en": "Dry Deciduous Forests are found in vast parts of the country where the rainfall is how much?",
    "question_hi": "शुद्ध पर्णपाती वन (Dry Deciduous Forests) देश के उन विस्तृत भागों में मिलते हैं, जहाँ वर्षा कितनी होती है?",
    "options_en": ["100 to 200 cm", "70 to 100 cm", "50 to 70 cm", "Less than 50 cm"],
    "options_hi": ["100 से 200 सेंटीमीटर", "70 से 100 सेंटीमीटर", "50 से 70 सेंटीमीटर", "50 सेंटीमीटर से कम"],
    "correct_option_index": 1,
    "explanation_en": "(B) 70 to 100 cm: Dry deciduous forests are found in those vast parts of the country where rainfall is between 70 and 100 cm.",
    "explanation_hi": "(B) 70 से 100 सेंटीमीटर: शुष्क पर्णपाती वन देश के उन विस्तृत भागों में मिलते हैं, जहाँ वर्षा 70 से 100 सेंटीमीटर होती है।"
  },
  {
    "question_en": "Thorn Forests and Scrubs are found in regions where the rainfall is how much?",
    "question_hi": "कँटीले वन (Thorn Forests) और झाड़ियाँ उन क्षेत्रों में पाई जाती हैं जहाँ वर्षा कितनी होती है?",
    "options_en": ["More than 200 cm", "More than 100 cm", "Less than 70 cm", "70 to 100 cm"],
    "options_hi": ["200 सेंटीमीटर से अधिक", "100 सेंटीमीटर से अधिक", "70 सेंटीमीटर से कम", "70 से 100 सेंटीमीटर"],
    "correct_option_index": 2,
    "explanation_en": "(C) Less than 70 cm: In regions with less than 70 cm of rainfall, the natural vegetation consists of thorny trees and bushes.",
    "explanation_hi": "(C) 70 सेंटीमीटर से कम: जिन क्षेत्रों में 70 सेंटीमीटर से कम वर्षा होती है, वहाँ प्राकृतिक वनस्पति में कँटीले वन तथा झाड़ियाँ पाई जाती हैं।"
  },
  {
    "question_en": "In which region's ancient crystalline rocks are most of India's metallic minerals found?",
    "question_hi": "भारत में अधिकतम धात्विक खनिज किस क्षेत्र की प्राचीन क्रिस्टलीय शैलों में पाए जाते हैं?",
    "options_en": ["Northern Plains", "Peninsular Plateau region", "Himalayan region", "Western Coastal region"],
    "options_hi": ["उत्तरी मैदान", "प्रायद्वीपीय पठारी क्षेत्र", "हिमालय क्षेत्र", "पश्चिमी तटीय क्षेत्र"],
    "correct_option_index": 1,
    "explanation_en": "(B) Peninsular Plateau region: Most of the metallic minerals in India are found in the ancient crystalline rocks of the Peninsular Plateau region.",
    "explanation_hi": "(B) प्रायद्वीपीय पठारी क्षेत्र: भारत में अधिकांश धात्विक खनिज प्रायद्वीपीय पठारी क्षेत्र की प्राचीन क्रिस्टलीय शैलों में पाए जाते हैं।"
  },
  {
    "question_en": "Approximately 97 percent of coal reserves are found in the valleys of which rivers?",
    "question_hi": "कोयले का लगभग 97 प्रतिशत भाग किन नदी घाटियों में पाया जाता है?",
    "options_en": ["Ganga and Yamuna", "Damodar, Son, Mahanadi and Godavari", "Krishna and Kaveri", "Satluj and Beas"],
    "options_hi": ["गंगा और यमुना", "दामोदर, सोन, महानदी और गोदावरी", "कृष्णा और कावेरी", "सतलुज और ब्यास"],
    "correct_option_index": 1,
    "explanation_en": "(B) Damodar, Son, Mahanadi and Godavari: About 97 percent of coal reserves are found in the valleys of the Damodar, Son, Mahanadi and Godavari rivers.",
    "explanation_hi": "(B) दामोदर, सोन, महानदी और गोदावरी: कोयले का लगभग 97 प्रतिशत भाग दामोदर, सोन, महानदी और गोदावरी नदियों की घाटियों में पाया जाता है।"
  },
  {
    "question_en": "Where are the major petroleum reserves found?",
    "question_hi": "पेट्रोलियम के आरक्षित भंडार कहाँ पाए जाते हैं?",
    "options_en": ["Assam, Gujarat and Mumbai High", "Damodar Valley", "Krishna-Godavari basin", "Both A and C"],
    "options_hi": ["असम, गुजरात और मुंबई हाई", "दामोदर घाटी", "कृष्णा-गोदावरी बेसिन", "A और C दोनों"],
    "correct_option_index": 0,
    "explanation_en": "(A) Assam, Gujarat and Mumbai High: Petroleum reserves are located in Assam, Gujarat and Mumbai High (off-shore region in the Arabian Sea).",
    "explanation_hi": "(A) असम, गुजरात और मुंबई हाई: पेट्रोलियम के आरक्षित भंडार असम, गुजरात तथा मुंबई हाई (अरब सागर के अपतटीय क्षेत्र) में पाए जाते हैं।"
  },
  {
    "question_en": "In which of the following is Vegetative Propagation seen in plants?",
    "question_hi": "पादपों में कायिक प्रवर्धन (Vegetative Propagation) किसमें देखा जाता है?",
    "options_en": ["Potato, Ginger", "Agave", "Bryophyllum, Water Hyacinth", "All of the above"],
    "options_hi": ["आलू, अदरक", "अगेव", "ब्रायोफिलम, जलकुंभी", "उपरोक्त सभी"],
    "correct_option_index": 3,
    "explanation_en": "(D) All of the above: Sources list eyes of potato, rhizome of ginger, bulbil of Agave, leaf buds of Bryophyllum, and offset of Water Hyacinth as examples of vegetative propagation in flowering plants.",
    "explanation_hi": "(D) उपरोक्त सभी: स्रोतों में आलू की आँख, अदरक का प्रकंद, अगेव का बुलबिल, ब्रायोफिलम की पर्ण कलिकाएँ, और जल हाइसिंथ की भूस्तरिका को पुष्पी पौधों में कायिक प्रवर्धन के उदाहरण के रूप में सूचीबद्ध किया गया है।"
  },
  {
    "question_en": "How is 'Gross Value Added' (GVA) estimated?",
    "question_hi": "'सकल मूल्य वर्धित' (Gross Value Added - GVA) का अनुमान कैसे लगाया जाता है?",
    "options_en": ["By subtracting subsidies from GDP", "By adding indirect taxes to GDP", "By adding subsidies to and subtracting indirect taxes from GDP", "By adding only subsidies"],
    "options_hi": ["सकल घरेलू उत्पाद में सब्सिडी घटाकर", "सकल घरेलू उत्पाद में अप्रत्यक्ष करों को जोड़कर", "सकल घरेलू उत्पाद में सब्सिडी जोड़कर और अप्रत्यक्ष करों को घटाकर", "केवल सब्सिडी जोड़कर"],
    "correct_option_index": 2,
    "explanation_en": "(C) By adding subsidies to and subtracting indirect taxes from GDP: GVA is estimated from Gross Domestic Product (GDP) by adding subsidies on production and subtracting indirect taxes.",
    "explanation_hi": "(C) सकल घरेलू उत्पाद में सब्सिडी जोड़कर और अप्रत्यक्ष करों को घटाकर: सकल घरेलू उत्पाद (GDP) से GVA का अनुमान, उत्पादन पर सब्सिडी जोड़कर और अप्रत्यक्ष करों को घटाकर लगाया जाता है।"
  },
  {
    "question_en": "In the study of atomic structure, why did Rutherford not expect large deflections of alpha particles?",
    "question_hi": "परमाणु संरचना (Structure of Atom) के अध्ययन में रदरफोर्ड ने अल्फा कणों के बड़े विक्षेपण की आशा क्यों नहीं की थी?",
    "options_en": ["Alpha particles were lighter than protons", "Alpha particles were much heavier than gold atoms", "Alpha particles were positively charged", "Alpha particles passed outside the atom"],
    "options_hi": ["अल्फा कण प्रोटॉन से हल्के थे", "अल्फा कण सोने के परमाणु से बहुत भारी थे", "अल्फा कण धनाविष्ट थे", "अल्फा कण परमाणु के बाहर से निकल गए"],
    "correct_option_index": 1,
    "explanation_en": "(B) Alpha particles were much heavier than gold atoms: Alpha particles were much heavier than protons, so he did not expect large deflections.",
    "explanation_hi": "(B) अल्फा कण सोने के परमाणु से बहुत भारी थे: अल्फा कण प्रोटॉन से बहुत अधिक भारी थे, इसलिए उन्होंने इनके अधिक विक्षेपण की आशा नहीं की थी।"
  },
  {
    "question_en": "Which of the following problems can be solved under Mathematical Modelling?",
    "question_hi": "गणितीय प्रतिरूपण (Mathematical Modelling) के तहत निम्नलिखित में से किस समस्या का समाधान किया जा सकता है?",
    "options_en": ["Finding the mass of the Earth", "Estimating the yield of pulses in India", "Finding the amount of blood in a person's body", "All of the above"],
    "options_hi": ["पृथ्वी का द्रव्यमान ज्ञात करना", "भारत में दालों की उपज का अनुमान लगाना", "किसी व्यक्ति के शरीर में रक्त की मात्रा ज्ञात करना", "उपरोक्त सभी"],
    "correct_option_index": 3,
    "explanation_en": "(D) All of the above: All these problems (like Earth's mass, yield estimation, blood volume, population estimate for 2020) have been solved with the help of mathematical modelling.",
    "explanation_hi": "(D) उपरोक्त सभी: ये सभी समस्याएँ (जैसे पृथ्वी का द्रव्यमान, उपज का अनुमान, रक्त की मात्रा, 2020 में जनसंख्या का अनुमान) गणितीय प्रतिरूपण की सहायता से हल की गई हैं।"
  },
  {
    "question_en": "What is the number of infants dying before completing one year of age called?",
    "question_hi": "एक वर्ष की आयु पूरी करने से पहले मृत्यु की चपेट में आने वाले शिशुओं की संख्या को क्या कहते हैं?",
    "options_en": ["Child Mortality Rate", "Infant Mortality Rate", "Maternal Mortality Rate", "Birth Rate"],
    "options_hi": ["बाल मृत्यु दर", "शिशु मृत्यु दर", "मातृ मृत्यु दर", "जन्म दर"],
    "correct_option_index": 1,
    "explanation_en": "(B) Infant Mortality Rate: The number of infants dying before completing one year of age is called the Infant Mortality Rate.",
    "explanation_hi": "(B) शिशु मृत्यु दर: एक वर्ष की आयु पूरी करने से पहले मृत्यु की चपेट में आने वाले शिशुओं की संख्या को शिशु मृत्यु दर (Infant Mortality Rate) कहा जाता है।"
  },
  {
    "question_en": "Children and infants are more vulnerable due to lack of food, sanitation, and inadequate medical care, resulting in an infant mortality rate of 1 in 7 in India. In which context is this information given?",
    "question_hi": "बच्चे और शिशु भोजन के अभाव, साफ-सफाई की कमी और अपर्याप्त चिकित्सीय देखभाल की वजह से ज़्यादा चपेट में आते हैं, जिसके परिणामस्वरूप भारत में प्रति 7 में से 1 शिशु मृत्यु दर देखी जाती है। यह जानकारी किस संदर्भ में दी गई है?",
    "options_en": ["Developed countries", "Indian subcontinent", "Parts of Africa", "Sweden"],
    "options_hi": ["विकसित देशों", "भारतीय उपमहाद्वीप", "अफ्रीका के कुछ हिस्सों", "स्वीडन"],
    "correct_option_index": 1,
    "explanation_en": "(B) Indian subcontinent: The infant mortality rate in the Indian subcontinent is 1 in 7.",
    "explanation_hi": "(B) भारतीय उपमहाद्वीप: भारतीय उपमहाद्वीप में शिशु मृत्यु दर प्रति 7 में से 1 है।"
  }
]
;

export default test1Questions;
