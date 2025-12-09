import type { QuizQuestion } from '../../../types';

const test1Questions: QuizQuestion[] = [
   {
    question_en: "How much time did it take to prepare the Indian Constitution?",
    question_hi: "भारतीय संविधान को तैयार करने में कुल कितना समय लगा था?",
    options_en: [
      "2 years 10 months 12 days",
      "2 years 11 months 18 days",
      "3 years 5 months 20 days",
      "2 years 9 months 15 days"
    ],
    options_hi: [
      "2 साल 10 महीने 12 दिन",
      "2 साल 11 महीने 18 दिन",
      "3 साल 5 महीने 20 दिन",
      "2 साल 9 महीने 15 दिन"
    ],
    correct_option_index: 1,
    explanation_en: "The Constituent Assembly took 2 years, 11 months and 18 days to draft the Indian Constitution.",
    explanation_hi: "भारतीय संविधान को तैयार करने में संविधान सभा को 2 साल, 11 महीने और 18 दिन का समय लगा था।"
  },
  {
    question_en: "Who is called 'Father of the Indian Constitution'?",
    question_hi: "किसे 'भारतीय संविधान का पिता' (Father of the Constitution) कहा जाता है?",
    options_en: [
      "Jawaharlal Nehru",
      "Rajendra Prasad",
      "Dr. B. R. Ambedkar",
      "B. N. Rao"
    ],
    options_hi: [
      "जवाहरलाल नेहरू",
      "राजेंद्र प्रसाद",
      "डॉ. बी. आर. अम्बेडकर",
      "बी. एन. राव"
    ],
    correct_option_index: 2,
    explanation_en: "Dr. B. R. Ambedkar is called the Father of the Indian Constitution because he played an important role as the Chairman of the Drafting Committee.",
    explanation_hi: "डॉ. बी. आर. अम्बेडकर को भारतीय संविधान का पिता कहा जाता है क्योंकि उन्होंने प्रारूप समिति के अध्यक्ष के रूप में महत्वपूर्ण भूमिका निभाई थी।"
  },
  {
    question_en: "Who is the supreme custodian of the Indian Constitution?",
    question_hi: "भारतीय संविधान का सर्वोच्च संरक्षक (Custodian) कौन है?",
    options_en: [
      "Prime Minister",
      "Supreme Court (Supreme Court)",
      "President",
      "Parliament"
    ],
    options_hi: [
      "प्रधानमंत्री",
      "सर्वोच्च न्यायालय (Supreme Court)",
      "राष्ट्रपति",
      "संसद"
    ],
    correct_option_index: 1,
    explanation_en: "The Supreme Court is the supreme guardian and interpreter of the Indian Constitution, ensuring its supremacy.",
    explanation_hi: "सर्वोच्च न्यायालय भारतीय संविधान का सर्वोच्च संरक्षक और व्याख्याकार है, जो इसकी सर्वोच्चता सुनिश्चित करता है।"
  },
  {
    question_en: "Which feature of the Indian Constitution makes it the largest written constitution in the world?",
    question_hi: "भारतीय संविधान की कौन सी विशेषता इसे दुनिया का सबसे बड़ा लिखित संविधान बनाती है?",
    options_en: [
      "single citizenship",
      "written and largest constitution",
      "Mixture of stiffness and flexibility",
      "fundamental rights"
    ],
    options_hi: [
      "एकल नागरिकता",
      "लिखित और सबसे बड़ा संविधान",
      "कठोरता और लचीलेपन का मिश्रण",
      "मौलिक अधिकार"
    ],
    correct_option_index: 1,
    explanation_en: "The Indian Constitution is the longest written constitution in the world, containing a large number of articles, schedules and amendments.",
    explanation_hi: "भारतीय संविधान दुनिया का सबसे लंबा लिखित संविधान है, जिसमें बड़ी संख्या में अनुच्छेद, अनुसूचियां और संशोधन शामिल हैं।"
  },
  {
    question_en: "The concept of Single Citizenship has been taken from the Constitution of which country?",
    question_hi: "एकल नागरिकता (Single Citizenship) की अवधारणा किस देश के संविधान से ली गई है?",
    options_en: [
      "United States of America",
      "ireland",
      "Britain",
      "Australia"
    ],
    options_hi: [
      "संयुक्त राज्य अमेरिका",
      "आयरलैंड",
      "ब्रिटेन",
      "ऑस्ट्रेलिया"
    ],
    correct_option_index: 2,
    explanation_en: "The concept of single citizenship in the Indian Constitution has been taken from the British Constitution.",
    explanation_hi: "भारतीय संविधान में एकल नागरिकता की अवधारणा ब्रिटेन के संविधान से ली गई है।"
  },
  {
    question_en: "The voting age was reduced from 21 years to how much by the 61st Amendment (1989)?",
    question_hi: "61वें संशोधन (1989) द्वारा मतदान की आयु 21 वर्ष से घटाकर कितनी कर दी गई थी?",
    options_en: [
      "20 years",
      "18 years",
      "19 years",
      "25 years"
    ],
    options_hi: [
      "20 वर्ष",
      "18 वर्ष",
      "19 वर्ष",
      "25 वर्ष"
    ],
    correct_option_index: 1,
    explanation_en: "The voting age for Lok Sabha and State Assembly elections was reduced from 21 years to 18 years by the 61st Constitutional Amendment Act, 1989.",
    explanation_hi: "61वें संवैधानिक संशोधन अधिनियम, 1989 द्वारा लोकसभा और राज्य विधानसभा चुनावों के लिए मतदान की आयु 21 वर्ष से घटाकर 18 वर्ष कर दी गई थी।"
  },
  {
    question_en: "In which system of governance is the executive answerable to the legislature?",
    question_hi: "किस शासन प्रणाली में कार्यपालिका विधायिका के प्रति जवाबदेह होती है?",
    options_en: [
      "Presidential System",
      "Parliamentary System",
      "monarchy",
      "unitary system"
    ],
    options_hi: [
      "राष्ट्रपति प्रणाली (Presidential System)",
      "संसदीय प्रणाली (Parliamentary System)",
      "राजतंत्र",
      "एकात्मक प्रणाली"
    ],
    correct_option_index: 1,
    explanation_en: "In a parliamentary system, the executive (Council of Ministers) is collectively accountable to the legislature (Parliament), particularly the Lok Sabha.",
    explanation_hi: "संसदीय प्रणाली में, कार्यपालिका (मंत्रिपरिषद) सामूहिक रूप से विधायिका (संसद) के प्रति, विशेषकर लोकसभा के प्रति जवाबदेह होती है।"
  },
  {
    question_en: "When was the Objectives Resolution adopted by the Constituent Assembly?",
    question_hi: "संविधान सभा द्वारा उद्देश्य संकल्प (Objectives Resolution) को कब स्वीकार (adopted) किया गया था?",
    options_en: [
      "26 November 1949",
      "22 January 1947",
      "26 January 1950",
      "15 August 1947"
    ],
    options_hi: [
      "26 नवंबर 1949",
      "22 जनवरी 1947",
      "26 जनवरी 1950",
      "15 अगस्त 1947"
    ],
    correct_option_index: 1,
    explanation_en: "The Objectives Resolution, moved by Jawaharlal Nehru on 13 December 1946, was unanimously adopted by the Constituent Assembly on 22 January 1947.",
    explanation_hi: "जवाहरलाल नेहरू द्वारा 13 दिसंबर 1946 को पेश किए गए उद्देश्य संकल्प को संविधान सभा द्वारा 22 जनवरी 1947 को सर्वसम्मति से स्वीकार किया गया था।"
  },
  {
    question_en: "Which three words were added to the Preamble by the 42nd Constitutional Amendment Act, 1976?",
    question_hi: "42वें संवैधानिक संशोधन अधिनियम, 1976 द्वारा प्रस्तावना में कौन से तीन शब्द जोड़े गए थे?",
    options_en: [
      "justice, freedom, equality",
      "sovereign, republic, unity",
      "socialist, secular, integrity",
      "democracy, fraternity, sovereignty"
    ],
    options_hi: [
      "न्याय, स्वतंत्रता, समानता",
      "संप्रभु, गणराज्य, एकता",
      "समाजवादी, धर्मनिरपेक्ष, अखंडता",
      "लोकतंत्र, बंधुत्व, संप्रभुता"
    ],
    correct_option_index: 2,
    explanation_en: "The words 'socialist', 'secular' and 'integrity' were added to the Preamble of the Indian Constitution by the 42nd Constitutional Amendment Act, 1976.",
    explanation_hi: "42वें संवैधानिक संशोधन अधिनियम, 1976 द्वारा भारतीय संविधान की प्रस्तावना में 'समाजवादी', 'धर्मनिरपेक्ष' और 'अखंडता' शब्द जोड़े गए थे।"
  },
  {
    question_en: "The 'Text & Language' style of the Preamble has been taken from the Constitution of which country?",
    question_hi: "प्रस्तावना के 'पाठ और भाषा (Text & Language)' की शैली किस देश के संविधान से ली गई है?",
    options_en: [
      "United States of America",
      "ireland",
      "Australia",
      "Britain"
    ],
    options_hi: [
      "संयुक्त राज्य अमेरिका",
      "आयरलैंड",
      "ऑस्ट्रेलिया",
      "ब्रिटेन"
    ],
    correct_option_index: 2,
    explanation_en: "The idea of ​​the Preamble was inspired by the US Constitution, but its language and style are taken from the Constitution of Australia.",
    explanation_hi: "प्रस्तावना का विचार अमेरिकी संविधान से प्रेरित था, लेकिन इसकी भाषा और शैली ऑस्ट्रेलिया के संविधान से ली गई है।"
  },
  {
    question_en: "What is the meaning of the word 'Sovereign' used in the Preamble?",
    question_hi: "प्रस्तावना में प्रयुक्त शब्द 'संप्रभु (Sovereign)' का क्या अर्थ है?",
    options_en: [
      "rule without interference",
      "only internal strength",
      "supreme and supreme power",
      "hereditary ruler"
    ],
    options_hi: [
      "बिना किसी हस्तक्षेप के शासन",
      "केवल आंतरिक शक्ति",
      "सर्वोच्च और परम शक्ति",
      "वंशानुगत शासक"
    ],
    correct_option_index: 2,
    explanation_en: "'Sovereign' means that India is an independent state, not under the control of any external power, and free to conduct its own internal and external affairs. It possesses supreme and ultimate power.",
    explanation_hi: "'संप्रभु' का अर्थ है कि भारत एक स्वतंत्र राज्य है, किसी बाहरी शक्ति के नियंत्रण में नहीं है, और अपने आंतरिक और बाहरी मामलों को संचालित करने के लिए स्वतंत्र है। यह सर्वोच्च और परम शक्ति रखता है।"
  },
  {
    question_en: "Which scholar has called the Preamble 'the soul of the Constitution'?",
    question_hi: "किस विद्वान ने प्रस्तावना को 'संविधान की आत्मा' (the soul of the Constitution) कहा है?",
    options_en: [
      "N. A. palanquin owner",
      "Pandit Thakur Das Bhargava",
      "sir ernest barker",
      "Dr. B.R. Ambedkar"
    ],
    options_hi: [
      "एन. ए. पालकीवाला",
      "पंडित ठाकुर दास भार्गव",
      "सर अर्नेस्ट बार्कर",
      "डॉ. बी.आर. अम्बेडकर"
    ],
    correct_option_index: 1,
    explanation_en: "Pandit Thakur Das Bhargava, a member of the Constituent Assembly, called the Preamble the 'soul of the Constitution', the 'key of the Constitution' and 'a jewel embedded in the Constitution'.",
    explanation_hi: "संविधान सभा के सदस्य पंडित ठाकुर दास भार्गव ने प्रस्तावना को 'संविधान की आत्मा', 'संविधान की कुंजी' और 'संविधान में जड़ा एक गहना' कहा था।"
  },
  {
    question_en: "How many types of justice are mentioned in the Preamble of the Indian Constitution?",
    question_hi: "भारतीय संविधान की प्रस्तावना में कितने प्रकार के न्याय का उल्लेख किया गया है?",
    options_en: [
      "2 (social, economic)",
      "3 (social, economic, political)",
      "4 (social, economic, political, cultural)",
      "5 (Social, Economic, Political, Freedom, Equality)"
    ],
    options_hi: [
      "2 (सामाजिक, आर्थिक)",
      "3 (सामाजिक, आर्थिक, राजनीतिक)",
      "4 (सामाजिक, आर्थिक, राजनीतिक, सांस्कृतिक)",
      "5 (सामाजिक, आर्थिक, राजनीतिक, स्वतंत्रता, समानता)"
    ],
    correct_option_index: 1,
    explanation_en: "The Preamble of the Indian Constitution mentions three types of justice: social, economic and political.",
    explanation_hi: "भारतीय संविधान की प्रस्तावना में तीन प्रकार के न्याय का उल्लेख किया गया है: सामाजिक, आर्थिक और राजनीतिक।"
  },
  {
    question_en: "In which case did the Supreme Court hold that the Preamble is an integral part of the Constitution?",
    question_hi: "सर्वोच्च न्यायालय ने किस मामले में माना कि प्रस्तावना संविधान का अभिन्न अंग (Integral part) है?",
    options_en: [
      "Berubari Union Case (1960)",
      "D.S. Nakara vs Union of India (1983)",
      "LIC of India case (1995)",
      "S. R. Bommai case (1994)"
    ],
    options_hi: [
      "बेरुबारी संघ मामला (1960)",
      "डी. एस. नकारा बनाम भारत संघ (1983)",
      "एलआईसी ऑफ इंडिया मामला (1995)",
      "एस. आर. बोम्मई मामला (1994)"
    ],
    correct_option_index: 2,
    explanation_en: "In the LIC of India case (1995), the Supreme Court reiterated that the Preamble is an integral part of the Constitution. This confirms the decision in the Kesavananda Bharati case (1973), which had overturned the decision in the Berubari Union case (1960), which had held the Preamble not to be part of the Constitution.",
    explanation_hi: "एलआईसी ऑफ इंडिया मामले (1995) में, सर्वोच्च न्यायालय ने दोहराया कि प्रस्तावना संविधान का एक अभिन्न अंग है। यह केशवानंद भारती मामले (1973) के फैसले की पुष्टि करता है, जिसने बेरुबारी संघ मामले (1960) के फैसले को पलट दिया था, जिसमें प्रस्तावना को संविधान का हिस्सा नहीं माना गया था।"
  },
  {
    question_en: "According to Article 1 of the Indian Constitution, what is India?",
    question_hi: "भारतीय संविधान के अनुच्छेद 1 के अनुसार, भारत क्या है?",
    options_en: [
      "federation of states",
      "Union of States",
      "confederation of states",
      "unitary territory of states"
    ],
    options_hi: [
      "राज्यों का फेडरेशन",
      "राज्यों का संघ (Union of States)",
      "राज्यों का परिसंघ",
      "राज्यों का एकात्मक क्षेत्र"
    ],
    correct_option_index: 1,
    explanation_en: "Article 1 of the Indian Constitution states that 'India, that is, India, shall be a Union of States'. This means that the Indian Union is not the result of any agreement between the states, and the states have no right to secede from the union.",
    explanation_hi: "भारतीय संविधान का अनुच्छेद 1 कहता है कि 'भारत, अर्थात् इंडिया, राज्यों का एक संघ होगा'। इसका तात्पर्य है कि भारतीय संघ राज्यों के बीच किसी समझौते का परिणाम नहीं है, और राज्यों को संघ से अलग होने का कोई अधिकार नहीं है।"
  },
  {
    question_en: "Who has the power to admit or establish new states in the Indian Union?",
    question_hi: "भारतीय संघ में नए राज्यों को प्रवेश देने या स्थापित करने की शक्ति किसे प्राप्त है?",
    options_en: [
      "President",
      "supreme court",
      "Parliament",
      "state legislature"
    ],
    options_hi: [
      "राष्ट्रपति",
      "सर्वोच्च न्यायालय",
      "संसद",
      "राज्य विधानमंडल"
    ],
    correct_option_index: 2,
    explanation_en: "Article 2 of the Constitution empowers Parliament to admit or establish new States in the Union of India on such terms and conditions as it thinks fit.",
    explanation_hi: "संविधान का अनुच्छेद 2 संसद को भारत संघ में नए राज्यों को ऐसे नियमों और शर्तों पर प्रवेश देने या स्थापित करने का अधिकार देता है, जैसा वह उचित समझे।"
  },
  {
    question_en: "Under which article the Parliament can make changes in the area, boundaries or names of the existing states?",
    question_hi: "संसद किस अनुच्छेद के तहत मौजूदा राज्यों के क्षेत्र, सीमाओं या नामों में परिवर्तन कर सकती है?",
    options_en: [
      "Article 1",
      "Article 2",
      "Article 3",
      "Article 4"
    ],
    options_hi: [
      "अनुच्छेद 1",
      "अनुच्छेद 2",
      "अनुच्छेद 3",
      "अनुच्छेद 4"
    ],
    correct_option_index: 2,
    explanation_en: "Article 3 of the Constitution empowers Parliament to form a new State by separating territory from any State or by combining two or more States or parts of States or by annexing any territory to a part of a State; To increase the territory of a state; To reduce the area of ​​a state; changing the boundaries of a state; And changing the name of a state.",
    explanation_hi: "संविधान का अनुच्छेद 3 संसद को किसी राज्य से क्षेत्र को अलग करके या दो या अधिक राज्यों या राज्यों के हिस्सों को मिलाकर या किसी क्षेत्र को किसी राज्य के हिस्से से जोड़कर एक नया राज्य बनाने का अधिकार देता है; किसी राज्य के क्षेत्र को बढ़ाना; किसी राज्य के क्षेत्र को घटाना; किसी राज्य की सीमाओं को बदलना; और किसी राज्य का नाम बदलना।"
  },
  {
    question_en: "Who was the Chairman of the Commission constituted in 1953 to inquire into the linguistic reorganization of the States?",
    question_hi: "राज्यों के भाषाई पुनर्गठन की जाँच के लिए 1953 में गठित आयोग के अध्यक्ष कौन थे?",
    options_en: [
      "S.K. hold",
      "J.V.P.",
      "Vallabhbhai Patel",
      "Fazal Ali"
    ],
    options_hi: [
      "एस.के. धर",
      "जे.वी.पी.",
      "वल्लभभाई पटेल",
      "फजल अली"
    ],
    correct_option_index: 3,
    explanation_en: "Fazal Ali was the chairman of the States Reorganization Commission set up by the Government of India in 1953 to examine the linguistic reorganization of the states.",
    explanation_hi: "राज्यों के भाषाई पुनर्गठन की जांच के लिए 1953 में भारत सरकार द्वारा गठित राज्य पुनर्गठन आयोग के अध्यक्ष फजल अली थे।"
  },
  {
    question_en: "As a result of the States Reorganization Act, 1956, how many states and Union Territories (UTs) were formed?",
    question_hi: "राज्य पुनर्गठन अधिनियम, 1956 के परिणामस्वरूप, कितने राज्य और केंद्र शासित प्रदेश (UT) बने?",
    options_en: [
      "15 states and 5 UTs",
      "14 states and 7 UTs",
      "16 states and 5 UTs",
      "14 states and 6 union territories"
    ],
    options_hi: [
      "15 राज्य और 5 UT",
      "14 राज्य और 7 UT",
      "16 राज्य और 5 UT",
      "14 राज्य और 6 केंद्र शासित प्रदेश"
    ],
    correct_option_index: 3,
    explanation_en: "The States Reorganization Act, 1956 resulted in the creation of 14 states and 6 union territories.",
    explanation_hi: "राज्य पुनर्गठन अधिनियम, 1956 के परिणामस्वरूप 14 राज्य और 6 केंद्र शासित प्रदेशों का निर्माण हुआ।"
  },
  {
    question_en: "In which part of the Indian Constitution are the provisions related to citizenship?",
    question_hi: "भारतीय संविधान में नागरिकता से संबंधित प्रावधान किस भाग में हैं?",
    options_en: [
      "Part I (Articles 1-4)",
      "Part II (Articles 5-11)",
      "Part III (Articles 12-35)",
      "Part IV (Articles 36-51)"
    ],
    options_hi: [
      "भाग I (अनुच्छेद 1-4)",
      "भाग II (अनुच्छेद 5-11)",
      "भाग III (अनुच्छेद 12-35)",
      "भाग IV (अनुच्छेद 36-51)"
    ],
    correct_option_index: 1,
    explanation_en: "Part II (Articles 5 to 11) of the Indian Constitution deals with provisions related to citizenship.",
    explanation_hi: "भारतीय संविधान का भाग II (अनुच्छेद 5 से 11) नागरिकता से संबंधित प्रावधानों से संबंधित है।"
  },
  {
    question_en: "Who enforces or handles matters related to acquisition and termination of citizenship?",
    question_hi: "नागरिकता के अधिग्रहण और समाप्ति से संबंधित मामलों को लागू करने या देखने का कार्य कौन करता है?",
    options_en: [
      "Parliament",
      "supreme court",
      "Ministry of Home Affairs",
      "President"
    ],
    options_hi: [
      "संसद",
      "सर्वोच्च न्यायालय",
      "गृह मंत्रालय (Ministry of Home Affairs)",
      "राष्ट्रपति"
    ],
    correct_option_index: 2,
    explanation_en: "The Ministry of Home Affairs is the nodal ministry for all matters related to citizenship in India.",
    explanation_hi: "गृह मंत्रालय भारत में नागरिकता से संबंधित सभी मामलों के लिए नोडल मंत्रालय है।"
  },
  {
    question_en: "Under the Citizenship Act, 1955, how many ways are there to acquire citizenship?",
    question_hi: "नागरिकता अधिनियम, 1955 के तहत, नागरिकता प्राप्त करने के कितने तरीके हैं?",
    options_en: [
      "3",
      "4",
      "5",
      "6"
    ],
    options_hi: [
      "3",
      "4",
      "5",
      "6"
    ],
    correct_option_index: 2,
    explanation_en: "The Citizenship Act, 1955 provides five ways of acquiring Indian citizenship: by birth, by descent, by registration, by naturalization, and by incorporation.",
    explanation_hi: "नागरिकता अधिनियम, 1955 भारतीय नागरिकता प्राप्त करने के पांच तरीके प्रदान करता है: जन्म से, वंश से, पंजीकरण से, देशीयकरण से, और क्षेत्र के समावेशन से।"
  },
  {
    question_en: "Which of the following is not a method of losing citizenship under the Citizenship Act, 1955?",
    question_hi: "निम्नलिखित में से कौन सा नागरिकता अधिनियम, 1955 के तहत नागरिकता खोने का तरीका नहीं है?",
    options_en: [
      "Renunciation",
      "Termination",
      "Deprivation",
      "By Registration"
    ],
    options_hi: [
      "त्याग (Renunciation)",
      "समाप्ति (Termination)",
      "अभाव (Deprivation)",
      "पंजीकरण (Registration) द्वारा"
    ],
    correct_option_index: 3,
    explanation_en: "The Citizenship Act, 1955 provides three ways of losing citizenship: renunciation, termination and deprivation. Registration is a way to obtain citizenship, not to lose it.",
    explanation_hi: "नागरिकता अधिनियम, 1955 नागरिकता खोने के तीन तरीके बताता है: त्याग, समाप्ति और अभाव। पंजीकरण नागरिकता प्राप्त करने का एक तरीका है, न कि खोने का।"
  },
  {
    question_en: "Which fundamental right is available only to Indian citizens and not to foreigners?",
    question_hi: "कौन सा मौलिक अधिकार केवल भारतीय नागरिकों के लिए उपलब्ध है और विदेशियों (Aliens) के लिए नहीं?",
    options_en: [
      "Article 21",
      "Article 20",
      "Article 15",
      "Article 22"
    ],
    options_hi: [
      "अनुच्छेद 21",
      "अनुच्छेद 20",
      "अनुच्छेद 15",
      "अनुच्छेद 22"
    ],
    correct_option_index: 2,
    explanation_en: "Article 15 (Prohibition of discrimination on grounds of religion, race, caste, sex or place of birth), Article 16 (Equality of opportunity in matters of public employment), Article 19 (Protection of six rights with respect to freedom of speech, etc.), Article 29 (Protection of language, script and culture of minorities), and Article 30 (Right of minorities to establish and administer educational institutions of their choice) are available only to Indian citizens.",
    explanation_hi: "अनुच्छेद 15 (धर्म, मूलवंश, जाति, लिंग या जन्मस्थान के आधार पर भेदभाव का निषेध), अनुच्छेद 16 (सार्वजनिक रोजगार के मामलों में अवसर की समानता), अनुच्छेद 19 (भाषण आदि की स्वतंत्रता के संबंध में छह अधिकारों का संरक्षण), अनुच्छेद 29 (अल्पसंख्यकों की भाषा, लिपि और संस्कृति का संरक्षण), और अनुच्छेद 30 (अल्पसंख्यकों को अपनी पसंद के शैक्षणिक संस्थानों की स्थापना और प्रशासन का अधिकार) केवल भारतीय नागरिकों के लिए उपलब्ध हैं।"
  },
  {
    question_en: "What is the nature of fundamental rights?",
    question_hi: "मौलिक अधिकारों की प्रकृति कैसी है?",
    options_en: [
      "non-judicial",
      "Justiciable",
      "only moral",
      "not binding"
    ],
    options_hi: [
      "गैर-न्यायिक",
      "न्यायिक/न्यायसंगत (Justiciable)",
      "केवल नैतिक",
      "बाध्यकारी नहीं"
    ],
    correct_option_index: 1,
    explanation_en: "Fundamental rights are justiciable, meaning that they can be legally enforced by the courts if they are violated.",
    explanation_hi: "मौलिक अधिकार न्यायसंगत होते हैं, जिसका अर्थ है कि उनका उल्लंघन होने पर उन्हें अदालतों द्वारा कानूनी रूप से लागू किया जा सकता है।"
  },
  {
    question_en: "Which Article provides for Judicial Review (nullifying laws inconsistent with fundamental rights)?",
    question_hi: "कौन सा अनुच्छेद न्यायिक समीक्षा (Judicial Review) का प्रावधान करता है (मौलिक अधिकारों के साथ असंगत कानूनों को शून्य करता है)?",
    options_en: [
      "Article 12",
      "Article 13",
      "Article 14",
      "Article 19"
    ],
    options_hi: [
      "अनुच्छेद 12",
      "अनुच्छेद 13",
      "अनुच्छेद 14",
      "अनुच्छेद 19"
    ],
    correct_option_index: 1,
    explanation_en: "Article 13 declares that all laws which are inconsistent with or abridge the fundamental rights shall be void. It provides for the principle of judicial review.",
    explanation_hi: "अनुच्छेद 13 घोषणा करता है कि सभी कानून जो मौलिक अधिकारों के असंगत या उनका अल्पीकरण करते हैं, शून्य होंगे। यह न्यायिक समीक्षा के सिद्धांत का प्रावधान करता है।"
  },
  {
    question_en: "Which article of the Constitution deals with 'Abolition of Untouchability'?",
    question_hi: "संविधान का कौन सा अनुच्छेद 'अस्पृश्यता का उन्मूलन' से संबंधित है?",
    options_en: [
      "Article 14",
      "Article 16",
      "Article 17",
      "Article 18"
    ],
    options_hi: [
      "अनुच्छेद 14",
      "अनुच्छेद 16",
      "अनुच्छेद 17",
      "अनुच्छेद 18"
    ],
    correct_option_index: 2,
    explanation_en: "Article 17 abolishes 'untouchability' and prohibits its practice in any form. Enforcing any disability arising out of 'untouchability' would be a punishable offense as per law.",
    explanation_hi: "अनुच्छेद 17 'अस्पृश्यता' को समाप्त करता है और किसी भी रूप में इसके अभ्यास को प्रतिबंधित करता है। 'अस्पृश्यता' से उत्पन्न किसी भी अक्षमता को लागू करना कानून के अनुसार दंडनीय अपराध होगा।"
  },
  {
    question_en: "Dr. B.R. Which article did Ambedkar call the 'Soul of the Constitution'?",
    question_hi: "डॉ. बी.आर. अम्बेडकर ने किस अनुच्छेद को 'संविधान की आत्मा (Soul of the Constitution)' कहा था?",
    options_en: [
      "Article 19",
      "Article 21",
      "Article 32",
      "Article 14"
    ],
    options_hi: [
      "अनुच्छेद 19",
      "अनुच्छेद 21",
      "अनुच्छेद 32",
      "अनुच्छेद 14"
    ],
    correct_option_index: 2,
    explanation_en: "Dr. B.R. Ambedkar described Article 32 (right to constitutional remedies) as 'the most important article of the Constitution' and 'an article without which this Constitution would be void. This is the soul and heart of the Constitution', he said.",
    explanation_hi: "डॉ. बी.आर. अम्बेडकर ने अनुच्छेद 32 (संवैधानिक उपचारों का अधिकार) को 'संविधान का सबसे महत्वपूर्ण अनुच्छेद' और 'एक ऐसा अनुच्छेद जिसके बिना यह संविधान शून्य होगा। यह संविधान की आत्मा और हृदय है' कहा था।"
  },
  {
    question_en: "Which Article guarantees life and personal liberty?",
    question_hi: "कौन सा अनुच्छेद जीवन और व्यक्तिगत स्वतंत्रता की गारंटी देता है?",
    options_en: [
      "Article 19",
      "Article 21",
      "Article 22",
      "Article 32"
    ],
    options_hi: [
      "अनुच्छेद 19",
      "अनुच्छेद 21",
      "अनुच्छेद 22",
      "अनुच्छेद 32"
    ],
    correct_option_index: 1,
    explanation_en: "Article 21 states that 'No person shall be deprived of his life or personal liberty except according to procedure established by law'. This right has been interpreted broadly by the Supreme Court to include various aspects of a dignified life.",
    explanation_hi: "अनुच्छेद 21 कहता है कि 'किसी भी व्यक्ति को उसके जीवन या व्यक्तिगत स्वतंत्रता से कानून द्वारा स्थापित प्रक्रिया के अनुसार ही वंचित किया जाएगा'। सर्वोच्च न्यायालय द्वारा इस अधिकार की व्यापक व्याख्या की गई है जिसमें एक गरिमापूर्ण जीवन के विभिन्न पहलू शामिल हैं।"
  },
  {
    question_en: "Article 21A, which deals with free and compulsory education for children aged 6 to 14 years, was added by which amendment?",
    question_hi: "अनुच्छेद 21A, जो 6 से 14 वर्ष की आयु के बच्चों के लिए मुफ्त और अनिवार्य शिक्षा से संबंधित है, को किस संशोधन द्वारा जोड़ा गया था?",
    options_en: [
      "44th Amendment, 1978",
      "42nd amendment, 1976",
      "86th amendment, 2002",
      "93rd amendment, 2005"
    ],
    options_hi: [
      "44वां संशोधन, 1978",
      "42वां संशोधन, 1976",
      "86वां संशोधन, 2002",
      "93वां संशोधन, 2005"
    ],
    correct_option_index: 2,
    explanation_en: "Article 21A was added by the 86th Constitutional Amendment Act, 2002, which made free and compulsory education for children aged 6 to 14 years a fundamental right.",
    explanation_hi: "86वें संवैधानिक संशोधन अधिनियम, 2002 द्वारा अनुच्छेद 21A जोड़ा गया, जिसने 6 से 14 वर्ष की आयु के बच्चों के लिए मुफ्त और अनिवार्य शिक्षा को मौलिक अधिकार बना दिया।"
  },
  {
    question_en: "Which article prohibits employment of children in factories etc.?",
    question_hi: "कारखानों आदि में बच्चों के नियोजन का निषेध किस अनुच्छेद में है?",
    options_en: [
      "Article 21",
      "Article 23",
      "Article 24",
      "Article 25"
    ],
    options_hi: [
      "अनुच्छेद 21",
      "अनुच्छेद 23",
      "अनुच्छेद 24",
      "अनुच्छेद 25"
    ],
    correct_option_index: 2,
    explanation_en: "Article 24 prohibits the employment of children below the age of 14 years in any factory, mine or other hazardous activities.",
    explanation_hi: "अनुच्छेद 24, 14 वर्ष से कम आयु के बच्चों को किसी भी कारखाने, खदान या अन्य खतरनाक गतिविधियों में नियोजित करने पर प्रतिबंध लगाता है।"
  },
  {
    question_en: "Through which constitutional amendment the right to property was removed from the list of fundamental rights?",
    question_hi: "किस संवैधानिक संशोधन के माध्यम से संपत्ति के अधिकार को मौलिक अधिकारों की सूची से हटा दिया गया?",
    options_en: [
      "42nd amendment, 1976",
      "44th Amendment, 1978",
      "86th amendment, 2002",
      "103rd amendment, 2019"
    ],
    options_hi: [
      "42वां संशोधन, 1976",
      "44वां संशोधन, 1978",
      "86वां संशोधन, 2002",
      "103वां संशोधन, 2019"
    ],
    correct_option_index: 1,
    explanation_en: "By the 44th Constitutional Amendment Act, 1978, the Right to Property was removed from the list of fundamental rights and made a legal right under Article 300A in Part XII of the Constitution.",
    explanation_hi: "44वें संवैधानिक संशोधन अधिनियम, 1978 द्वारा संपत्ति के अधिकार को मौलिक अधिकारों की सूची से हटा दिया गया और इसे संविधान के भाग XII में अनुच्छेद 300A के तहत एक कानूनी अधिकार बना दिया गया।"
  },
  {
    question_en: "After being removed from the Fundamental Rights, the Right to Property is now a legal/constitutional right in which Article of the Constitution?",
    question_hi: "मौलिक अधिकारों से हटाए जाने के बाद, संपत्ति का अधिकार अब संविधान के किस अनुच्छेद में एक कानूनी/संवैधानिक अधिकार है?",
    options_en: [
      "Article 31",
      "article 300",
      "Article 300A (Part XII)",
      "Article 368"
    ],
    options_hi: [
      "अनुच्छेद 31",
      "अनुच्छेद 300",
      "अनुच्छेद 300A (भाग XII)",
      "अनुच्छेद 368"
    ],
    correct_option_index: 2,
    explanation_en: "After being removed from the list of fundamental rights by the 44th Amendment Act, 1978, the Right to Property is now a legal right under Article 300A in Part XII of the Constitution.",
    explanation_hi: "44वें संशोधन अधिनियम, 1978 द्वारा मौलिक अधिकारों की सूची से हटाए जाने के बाद, संपत्ति का अधिकार अब संविधान के भाग XII में अनुच्छेद 300A के तहत एक कानूनी अधिकार है।"
  },
  {
    question_en: "Under Article 25, who is included in the broad meaning of the word 'Hindu'?",
    question_hi: "अनुच्छेद 25 के तहत, 'हिन्दू' शब्द के व्यापक अर्थ में किसे शामिल किया गया है?",
    options_en: [
      "Hindu and Christian",
      "Muslim and Jain",
      "Sikh, Jain and Buddhist",
      "Hindu and Sikh"
    ],
    options_hi: [
      "हिंदू और ईसाई",
      "मुस्लिम और जैन",
      "सिख, जैन और बौद्ध",
      "हिंदू और सिख"
    ],
    correct_option_index: 2,
    explanation_en: "Explanation to Article 25 of the Constitution states that the term 'Hindu' will also include persons following Sikh, Jain or Buddhist religions.",
    explanation_hi: "संविधान के अनुच्छेद 25 की व्याख्या में कहा गया है कि 'हिंदू' शब्द के संदर्भ में सिख, जैन या बौद्ध धर्म मानने वाले व्यक्तियों को भी शामिल माना जाएगा।"
  },
  {
    question_en: "Which article gives the right to minorities to establish and administer educational institutions of their choice?",
    question_hi: "कौन सा अनुच्छेद अल्पसंख्यकों को अपनी पसंद के शैक्षणिक संस्थानों की स्थापना और प्रशासन का अधिकार देता है?",
    options_en: [
      "Article 29",
      "Article 30",
      "Article 25",
      "Article 19"
    ],
    options_hi: [
      "अनुच्छेद 29",
      "अनुच्छेद 30",
      "अनुच्छेद 25",
      "अनुच्छेद 19"
    ],
    correct_option_index: 1,
    explanation_en: "Article 30 gives the right to all minorities, whether based on religion or language, to establish and administer educational institutions of their choice.",
    explanation_hi: "अनुच्छेद 30 सभी अल्पसंख्यकों को, चाहे वे धर्म या भाषा पर आधारित हों, अपनी पसंद के शैक्षणिक संस्थानों की स्थापना और प्रशासन का अधिकार देता है।"
  },
  {
    question_en: "In which part of the Constitution the word 'Minority' is defined?",
    question_hi: "संविधान में 'अल्पसंख्यक (Minority)' शब्द को किस भाग में परिभाषित किया गया है?",
    options_en: [
      "Part III",
      "Part V",
      "Part IV",
      "nowhere defined"
    ],
    options_hi: [
      "भाग III",
      "भाग V",
      "भाग IV",
      "कहीं नहीं परिभाषित"
    ],
    correct_option_index: 3,
    explanation_en: "The word 'minority' has not been defined anywhere in the Indian Constitution.",
    explanation_hi: "भारतीय संविधान में 'अल्पसंख्यक' शब्द को कहीं भी परिभाषित नहीं किया गया है।"
  },
  {
    question_en: "Which Article provides for Protection against Arrest and Detention?",
    question_hi: "गिरफ्तारी और नज़रबंदी के खिलाफ संरक्षण (Protection against Detention) किस अनुच्छेद में है?",
    options_en: [
      "Article 21",
      "Article 22",
      "Article 20",
      "Article 19"
    ],
    options_hi: [
      "अनुच्छेद 21",
      "अनुच्छेद 22",
      "अनुच्छेद 20",
      "अनुच्छेद 19"
    ],
    correct_option_index: 1,
    explanation_en: "Article 22 provides protection to persons who have been arrested or detained. It provides certain procedural safeguards against arbitrary arrest and detention.",
    explanation_hi: "अनुच्छेद 22 उन व्यक्तियों को संरक्षण प्रदान करता है जिन्हें गिरफ्तार या हिरासत में लिया गया है। यह मनमानी गिरफ्तारी और हिरासत के खिलाफ कुछ प्रक्रियात्मक सुरक्षा उपाय प्रदान करता है।"
  },
  {
    question_en: "Under which article exemption from the necessity of paying taxation for the propagation or maintenance of religion is provided?",
    question_hi: "धर्म के प्रचार या रखरखाव के लिए कर (Taxation) देने की अनिवार्यता से मुक्ति किस अनुच्छेद के तहत प्रदान की जाती है?",
    options_en: [
      "Article 25",
      "Article 26",
      "Article 27",
      "Article 28"
    ],
    options_hi: [
      "अनुच्छेद 25",
      "अनुच्छेद 26",
      "अनुच्छेद 27",
      "अनुच्छेद 28"
    ],
    correct_option_index: 2,
    explanation_en: "Article 27 says that no person shall be compelled to pay any taxes the income of which is exclusively appropriated to the payment of the expenses of the propagation or maintenance of any particular religion or religious denomination.",
    explanation_hi: "अनुच्छेद 27 कहता है कि किसी भी व्यक्ति को ऐसे करों का भुगतान करने के लिए मजबूर नहीं किया जाएगा, जिनकी आय विशेष रूप से किसी विशेष धर्म या धार्मिक संप्रदाय के प्रचार या रखरखाव के खर्चों के भुगतान के लिए विनियोजित की जाती है।"
  },
  {
    question_en: "The concept of Directive Principles of State Policy (DPSP) is taken from the Constitution of which country?",
    question_hi: "राज्य के नीति निदेशक तत्वों (DPSP) की अवधारणा किस देश के संविधान से ली गई है?",
    options_en: [
      "USA",
      "Russia",
      "ireland",
      "Germany"
    ],
    options_hi: [
      "USA",
      "रूस",
      "आयरलैंड",
      "जर्मनी"
    ],
    correct_option_index: 2,
    explanation_en: "The concept of Directive Principles of State Policy (DPSP) is derived from the Constitution of Ireland.",
    explanation_hi: "राज्य के नीति निदेशक तत्वों (DPSP) की अवधारणा आयरलैंड के संविधान से ली गई है।"
  },
  {
    question_en: "Dr. B.R. What did Ambedkar address DPSP as?",
    question_hi: "डॉ. बी.आर. अम्बेडकर ने DPSP को क्या कहकर संबोधित किया था?",
    options_en: [
      "soul of the constitution",
      "Novel Features of the Constitution",
      "heart of the constitution",
      "Constitution identity card"
    ],
    options_hi: [
      "संविधान की आत्मा",
      "संविधान की नवीन विशेषताएं (Novel Features)",
      "संविधान का हृदय",
      "संविधान का पहचान पत्र"
    ],
    correct_option_index: 1,
    explanation_en: "Dr. B.R. Ambedkar had described the Directive Principles of Policy as 'novel features' of the Indian Constitution.",
    explanation_hi: "डॉ. बी.आर. अम्बेडकर ने नीति निदेशक तत्वों को भारतीय संविधान की 'नवीन विशेषताएं' (Novel Features) बताया था।"
  },
  {
    question_en: "What is the purpose of DPSP to establish?",
    question_hi: "DPSP का उद्देश्य क्या स्थापित करना है?",
    options_en: [
      "political democracy",
      "religious freedom",
      "Social and Economic Democracy (Welfare State)",
      "civil liberty"
    ],
    options_hi: [
      "राजनीतिक लोकतंत्र",
      "धार्मिक स्वतंत्रता",
      "सामाजिक और आर्थिक लोकतंत्र (कल्याणकारी राज्य)",
      "नागरिक स्वतंत्रता"
    ],
    correct_option_index: 2,
    explanation_en: "The objective of the Directive Principles of Policy is to establish a 'welfare state' in India by ensuring social and economic justice. They want to establish social and economic democracy.",
    explanation_hi: "नीति निदेशक तत्वों का उद्देश्य सामाजिक और आर्थिक न्याय सुनिश्चित करके भारत में एक 'कल्याणकारी राज्य' की स्थापना करना है। वे सामाजिक और आर्थिक लोकतंत्र स्थापित करना चाहते हैं।"
  },
  {
    question_en: "Which article provides for a Uniform Civil Code for the citizens?",
    question_hi: "नागरिकों के लिए एक समान नागरिक संहिता (Uniform Civil Code) किस अनुच्छेद में है?",
    options_en: [
      "Article 43",
      "Article 44",
      "Article 45",
      "Article 46"
    ],
    options_hi: [
      "अनुच्छेद 43",
      "अनुच्छेद 44",
      "अनुच्छेद 45",
      "अनुच्छेद 46"
    ],
    correct_option_index: 1,
    explanation_en: "Article 44 of the Constitution says that the State shall endeavor to ensure a uniform civil code for the citizens throughout the territory of India.",
    explanation_hi: "संविधान का अनुच्छेद 44 कहता है कि राज्य भारत के पूरे क्षेत्र में नागरिकों के लिए एक समान नागरिक संहिता सुनिश्चित करने का प्रयास करेगा।"
  },
  {
    question_en: "Which article was added by the 42nd Amendment, 1976 which deals with equal justice and providing free legal aid to the poor?",
    question_hi: "42वें संशोधन, 1976 द्वारा कौन सा अनुच्छेद जोड़ा गया था जो समान न्याय और गरीबों को मुफ्त कानूनी सहायता प्रदान करने से संबंधित है?",
    options_en: [
      "Article 39A",
      "Article 43A",
      "Article 48A",
      "Article 51A"
    ],
    options_hi: [
      "अनुच्छेद 39A",
      "अनुच्छेद 43A",
      "अनुच्छेद 48A",
      "अनुच्छेद 51A"
    ],
    correct_option_index: 0,
    explanation_en: "Article 39A was added by the 42nd Amendment Act, 1976, which directs the State to ensure equal justice and to provide free legal aid to the poor.",
    explanation_hi: "42वें संशोधन अधिनियम, 1976 द्वारा अनुच्छेद 39A जोड़ा गया, जो राज्य को समान न्याय सुनिश्चित करने और गरीबों को मुफ्त कानूनी सहायता प्रदान करने का निर्देश देता है।"
  },
  {
    question_en: "In which article the provision for protection and improvement of environment and protection of forests and wildlife was added?",
    question_hi: "पर्यावरण की रक्षा और सुधार तथा वन एवं वन्यजीवों की सुरक्षा का प्रावधान किस अनुच्छेद में जोड़ा गया था?",
    options_en: [
      "Article 39",
      "Article 47",
      "Article 48A",
      "Article 49"
    ],
    options_hi: [
      "अनुच्छेद 39",
      "अनुच्छेद 47",
      "अनुच्छेद 48A",
      "अनुच्छेद 49"
    ],
    correct_option_index: 2,
    explanation_en: "Article 48A, which mandates the State to protect and improve the environment and to safeguard forests and wildlife, was added by the 42nd Amendment Act, 1976.",
    explanation_hi: "अनुच्छेद 48A, जो राज्य को पर्यावरण की रक्षा और सुधार तथा वन एवं वन्यजीवों की सुरक्षा का आदेश देता है, 42वें संशोधन अधिनियम, 1976 द्वारा जोड़ा गया था।"
  },
  {
    question_en: "Which DPSP Article relates to the organization of Gram Panchayats?",
    question_hi: "ग्राम पंचायतों के संगठन से संबंधित DPSP अनुच्छेद कौन सा है?",
    options_en: [
      "Article 38",
      "Article 40",
      "Article 41",
      "Article 43"
    ],
    options_hi: [
      "अनुच्छेद 38",
      "अनुच्छेद 40",
      "अनुच्छेद 41",
      "अनुच्छेद 43"
    ],
    correct_option_index: 1,
    explanation_en: "Article 40 directs the State to organize Gram Panchayats and to confer on them such powers and authority as may be necessary to enable them to function as units of self-government.",
    explanation_hi: "अनुच्छेद 40 राज्य को ग्राम पंचायतों को संगठित करने और उन्हें ऐसी शक्तियां और अधिकार प्रदान करने का निर्देश देता है जो उन्हें स्वशासन की इकाइयों के रूप में कार्य करने में सक्षम बनाने के लिए आवश्यक हो।"
  },
  {
    question_en: "Which article is related to promotion of international peace and security?",
    question_hi: "अंतर्राष्ट्रीय शांति और सुरक्षा को बढ़ावा देने से संबंधित अनुच्छेद कौन सा है?",
    options_en: [
      "Article 49",
      "Article 50",
      "Article 51",
      "Article 39"
    ],
    options_hi: [
      "अनुच्छेद 49",
      "अनुच्छेद 50",
      "अनुच्छेद 51",
      "अनुच्छेद 39"
    ],
    correct_option_index: 2,
    explanation_en: "Article 51 directs the State to promote international peace and security, maintain just and honorable relations between nations, promote respect for international law and treaty obligations, and encourage the settlement of international disputes by arbitration.",
    explanation_hi: "अनुच्छेद 51 राज्य को अंतर्राष्ट्रीय शांति और सुरक्षा को बढ़ावा देने, राष्ट्रों के बीच न्यायपूर्ण और सम्मानजनक संबंध बनाए रखने, अंतर्राष्ट्रीय कानून और संधि दायित्वों के प्रति सम्मान को बढ़ावा देने और अंतर्राष्ट्रीय विवादों को मध्यस्थता द्वारा निपटाने के लिए प्रोत्साहित करने का निर्देश देता है।"
  },
  {
    question_en: "Fundamental Duties are contained in which part of the Constitution?",
    question_hi: "मौलिक कर्तव्य (Fundamental Duties) संविधान के किस भाग में निहित हैं?",
    options_en: [
      "Part III",
      "Part IV",
      "Part IV-A",
      "Part V"
    ],
    options_hi: [
      "भाग III",
      "भाग IV",
      "भाग IV-A",
      "भाग V"
    ],
    correct_option_index: 2,
    explanation_en: "The fundamental duties are contained in Part IV-A of the Indian Constitution, specifically Article 51A.",
    explanation_hi: "मौलिक कर्तव्य भारतीय संविधान के भाग IV-A में, विशेष रूप से अनुच्छेद 51A में निहित हैं।"
  },
  {
    question_en: "Which committee recommended the addition of fundamental duties?",
    question_hi: "मौलिक कर्तव्यों को जोड़ने की सिफारिश किस समिति ने की थी?",
    options_en: [
      "Rajamannar Committee",
      "Kelkar Committee",
      "golden lion committee",
      "Fazal Ali Commission"
    ],
    options_hi: [
      "राजमन्नार समिति",
      "केलकर समिति",
      "स्वर्ण सिंह समिति",
      "फजल अली आयोग"
    ],
    correct_option_index: 2,
    explanation_en: "The Fundamental Duties were added to the Constitution on the recommendation of the Swarn Singh Committee formed in 1976.",
    explanation_hi: "मौलिक कर्तव्यों को 1976 में गठित स्वर्ण सिंह समिति की सिफारिश पर संविधान में जोड़ा गया था।"
  },
  {
    question_en: "How many fundamental duties were initially added by the 42nd Amendment, 1976?",
    question_hi: "42वें संशोधन, 1976 द्वारा प्रारंभ में कितने मौलिक कर्तव्य जोड़े गए थे?",
    options_en: [
      "8",
      "9",
      "10",
      "11"
    ],
    options_hi: [
      "8",
      "9",
      "10",
      "11"
    ],
    correct_option_index: 2,
    explanation_en: "10 Fundamental Duties were initially added to the Constitution by the 42nd Constitutional Amendment Act, 1976. The 11th duty was added later in 2002.",
    explanation_hi: "42वें संवैधानिक संशोधन अधिनियम, 1976 द्वारा प्रारंभ में संविधान में 10 मौलिक कर्तव्य जोड़े गए थे। 11वां कर्तव्य बाद में 2002 में जोड़ा गया।"
  },
  {
    question_en: "What is the nature of fundamental duty?",
    question_hi: "मौलिक कर्तव्य की प्रकृति कैसी है?",
    options_en: [
      "Justiciable",
      "fully enforceable",
      "Non-judicial/moral liability",
      "legal rights"
    ],
    options_hi: [
      "न्यायिक (Justiciable)",
      "पूर्ण रूप से लागू करने योग्य",
      "गैर-न्यायिक/नैतिक दायित्व",
      "कानूनी अधिकार"
    ],
    correct_option_index: 2,
    explanation_en: "Fundamental Duties are non-judicial, meaning they cannot be enforced by courts. They are moral obligations to citizens.",
    explanation_hi: "मौलिक कर्तव्य गैर-न्यायिक होते हैं, जिसका अर्थ है कि उन्हें अदालतों द्वारा लागू नहीं किया जा सकता है। वे नागरिकों के लिए नैतिक दायित्व हैं।"
  },
  {
    question_en: "In which year was the 11th fundamental duty (opportunity for education) added?",
    question_hi: "11वां मौलिक कर्तव्य (शिक्षा का अवसर) किस वर्ष जोड़ा गया था?",
    options_en: [
      "1976",
      "2002",
      "1986",
      "2011"
    ],
    options_hi: [
      "1976",
      "2002",
      "1986",
      "2011"
    ],
    correct_option_index: 1,
    explanation_en: "The 11th Fundamental Duty, which obliges parents or guardians to provide opportunities for education to their child or ward between the age of six to fourteen years, was added by the 86th Constitutional Amendment Act, 2002.",
    explanation_hi: "11वां मौलिक कर्तव्य, जो माता-पिता या अभिभावकों को अपने बच्चे या वार्ड को छह से चौदह वर्ष की आयु के बीच शिक्षा के अवसर प्रदान करने के लिए बाध्य करता है, 86वें संवैधानिक संशोधन अधिनियम, 2002 द्वारा जोड़ा गया था।"
  },
  {
    question_en: "To whom are fundamental duties available?",
    question_hi: "मौलिक कर्तव्य किसके लिए उपलब्ध हैं?",
    options_en: [
      "For citizens and foreigners",
      "for foreigners only",
      "For citizens only",
      "not for anyone"
    ],
    options_hi: [
      "नागरिकों और विदेशियों के लिए",
      "केवल विदेशियों के लिए",
      "केवल नागरिकों के लिए",
      "किसी के लिए नहीं"
    ],
    correct_option_index: 2,
    explanation_en: "Fundamental duties apply only to citizens of India and not to foreigners.",
    explanation_hi: "मौलिक कर्तव्य केवल भारत के नागरिकों पर लागू होते हैं, विदेशियों पर नहीं।"
  },
  {
    question_en: "Which article of the Constitution says that 'There shall be a President of India'?",
    question_hi: "संविधान का कौन सा अनुच्छेद कहता है कि 'भारत का एक राष्ट्रपति होगा'?",
    options_en: [
      "Article 51",
      "Article 52",
      "Article 53",
      "Article 54"
    ],
    options_hi: [
      "अनुच्छेद 51",
      "अनुच्छेद 52",
      "अनुच्छेद 53",
      "अनुच्छेद 54"
    ],
    correct_option_index: 1,
    explanation_en: "Article 52 of the Indian Constitution states that 'There shall be a President of India'.",
    explanation_hi: "भारतीय संविधान का अनुच्छेद 52 कहता है कि 'भारत का एक राष्ट्रपति होगा'।"
  },
  {
    question_en: "What is the minimum age limit required for the post of President?",
    question_hi: "राष्ट्रपति पद के लिए आवश्यक न्यूनतम आयु सीमा क्या है?",
    options_en: [
      "30 years",
      "35 years",
      "25 years",
      "40 years"
    ],
    options_hi: [
      "30 वर्ष",
      "35 वर्ष",
      "25 वर्ष",
      "40 वर्ष"
    ],
    correct_option_index: 1,
    explanation_en: "To be eligible for election as President, a person must have completed 35 years of age.",
    explanation_hi: "राष्ट्रपति के रूप में चुनाव के लिए पात्र होने के लिए, एक व्यक्ति को 35 वर्ष की आयु पूरी करनी चाहिए।"
  },
  {
    question_en: "Who among the following is not included in the electoral college for the presidential election?",
    question_hi: "राष्ट्रपति चुनाव का निर्वाचक मंडल में निम्नलिखित में से कौन शामिल नहीं होता है?",
    options_en: [
      "elected members of lok sabha",
      "elected members of Rajya Sabha",
      "elected members of state legislative assemblies",
      "nominated members of parliament"
    ],
    options_hi: [
      "लोकसभा के निर्वाचित सदस्य",
      "राज्यसभा के निर्वाचित सदस्य",
      "राज्य विधान सभाओं के निर्वाचित सदस्य",
      "संसद के मनोनीत सदस्य"
    ],
    correct_option_index: 3,
    explanation_en: "The Presidential Electoral College consists of elected members of both Houses of Parliament and elected members of the State Legislative Assemblies and the Union Territories of Delhi and Puducherry. Nominated members of Parliament do not participate in elections.",
    explanation_hi: "राष्ट्रपति के निर्वाचक मंडल में संसद के दोनों सदनों के निर्वाचित सदस्य और राज्यों तथा दिल्ली व पुडुचेरी के केंद्र शासित प्रदेशों की विधानसभाओं के निर्वाचित सदस्य शामिल होते हैं। संसद के मनोनीत सदस्य चुनाव में भाग नहीं लेते हैं।"
  },
  {
    question_en: "What should be the minimum number of proposers and seconders for a presidential election candidate?",
    question_hi: "राष्ट्रपति चुनाव के उम्मीदवार के लिए कम से कम कितने निर्वाचक प्रस्तावक (Proposers) और अनुमोदक (Seconders) होने चाहिए?",
    options_en: [
      "20 proposers and 20 seconders",
      "50 proposers and 50 seconders",
      "100 proponents and 100 seconders",
      "25 proposers and 25 seconders"
    ],
    options_hi: [
      "20 प्रस्तावक और 20 अनुमोदक",
      "50 प्रस्तावक और 50 अनुमोदक",
      "100 प्रस्तावक और 100 अनुमोदक",
      "25 प्रस्तावक और 25 अनुमोदक"
    ],
    correct_option_index: 1,
    explanation_en: "A presidential election candidate must be proposed by at least 50 electors and approved by another 50 electors.",
    explanation_hi: "राष्ट्रपति चुनाव के उम्मीदवार को कम से कम 50 निर्वाचकों द्वारा प्रस्तावित और अन्य 50 निर्वाचकों द्वारा अनुमोदित किया जाना चाहिए।"
  },
  {
    question_en: "What is the security deposit required for a presidential candidate?",
    question_hi: "राष्ट्रपति पद के उम्मीदवार के लिए आवश्यक सुरक्षा जमा राशि (Security Deposit) कितनी है?",
    options_en: [
      "₹10,000",
      "₹15,000",
      "₹20,000",
      "₹25,000"
    ],
    options_hi: [
      "₹10,000",
      "₹15,000",
      "₹20,000",
      "₹25,000"
    ],
    correct_option_index: 1,
    explanation_en: "A presidential election candidate has to deposit a security deposit of ₹15,000 with the Reserve Bank of India.",
    explanation_hi: "राष्ट्रपति चुनाव के उम्मीदवार को भारतीय रिजर्व बैंक के पास ₹15,000 की सुरक्षा जमा राशि जमा करनी होती है।"
  },
  {
    question_en: "On what grounds can the President be removed from office?",
    question_hi: "राष्ट्रपति को किस आधार पर पद से हटाया जा सकता है?",
    options_en: [
      "disability",
      "financial misconduct",
      "violation of the constitution",
      "all of the above"
    ],
    options_hi: [
      "अक्षमता",
      "वित्तीय कदाचार",
      "संविधान का उल्लंघन",
      "उपरोक्त सभी"
    ],
    correct_option_index: 2,
    explanation_en: "The President can be removed from office only by impeachment on the ground of 'violation of the Constitution'.",
    explanation_hi: "राष्ट्रपति को केवल 'संविधान के उल्लंघन' के आधार पर महाभियोग द्वारा पद से हटाया जा सकता है।"
  },
  {
    question_en: "How many days' prior notice does the President have to give before starting the impeachment process?",
    question_hi: "महाभियोग की प्रक्रिया शुरू करने से पहले राष्ट्रपति को कितने दिनों की पूर्व सूचना देनी होती है?",
    options_en: [
      "7 days",
      "14 days",
      "28 days",
      "30 days"
    ],
    options_hi: [
      "7 दिन",
      "14 दिन",
      "28 दिन",
      "30 दिन"
    ],
    correct_option_index: 1,
    explanation_en: "The President has to give 14 days' prior notice before starting impeachment proceedings.",
    explanation_hi: "महाभियोग की कार्यवाही शुरू करने से पहले राष्ट्रपति को 14 दिन की पूर्व सूचना देनी होती है।"
  },
  {
    question_en: "In which article is the process of impeachment of the President?",
    question_hi: "राष्ट्रपति के महाभियोग (Impeachment) की प्रक्रिया किस अनुच्छेद में है?",
    options_en: [
      "Article 56",
      "Article 61",
      "Article 72",
      "Article 356"
    ],
    options_hi: [
      "अनुच्छेद 56",
      "अनुच्छेद 61",
      "अनुच्छेद 72",
      "अनुच्छेद 356"
    ],
    correct_option_index: 1,
    explanation_en: "Article 61 of the Constitution provides for the procedure for impeachment of the President.",
    explanation_hi: "संविधान का अनुच्छेद 61 राष्ट्रपति के महाभियोग की प्रक्रिया का प्रावधान करता है।"
  },
  {
    question_en: "The Ordinance Making Power of the President comes under which article?",
    question_hi: "राष्ट्रपति की अध्यादेश जारी करने की शक्ति (Ordinance Making Power) किस अनुच्छेद के तहत आती है?",
    options_en: [
      "Article 111",
      "Article 123",
      "Article 213",
      "Article 352"
    ],
    options_hi: [
      "अनुच्छेद 111",
      "अनुच्छेद 123",
      "अनुच्छेद 213",
      "अनुच्छेद 352"
    ],
    correct_option_index: 1,
    explanation_en: "Article 123 empowers the President to issue ordinances during the recess of Parliament.",
    explanation_hi: "अनुच्छेद 123 राष्ट्रपति को संसद के अवकाश के दौरान अध्यादेश जारी करने की शक्ति प्रदान करता है।"
  },
  {
    question_en: "What is the maximum duration of an ordinance issued by the President (if Parliament is not in session)?",
    question_hi: "राष्ट्रपति द्वारा जारी अध्यादेश की अधिकतम अवधि कितनी हो सकती है (यदि संसद सत्र में न हो)?",
    options_en: [
      "6 months",
      "6 weeks",
      "6 months and 6 weeks",
      "1 year"
    ],
    options_hi: [
      "6 महीने",
      "6 सप्ताह",
      "6 महीने और 6 सप्ताह",
      "1 वर्ष"
    ],
    correct_option_index: 2,
    explanation_en: "An ordinance issued by the President has the same force and effect as an Act of Parliament. It ceases to exist at the expiration of six weeks after Parliament reassembles, or if before the expiration of that period resolutions disapproving of it are passed by both Houses. The maximum life of an ordinance can be six months and six weeks.",
    explanation_hi: "राष्ट्रपति द्वारा जारी अध्यादेश का वही बल और प्रभाव होता है जो संसद के अधिनियम का होता है। यह संसद के पुनः समवेत होने के छह सप्ताह की समाप्ति पर, या यदि उस अवधि की समाप्ति से पहले दोनों सदनों द्वारा इसे अस्वीकृत करने वाले प्रस्ताव पारित किए जाते हैं, तो समाप्त हो जाता है। एक अध्यादेश का अधिकतम जीवन छह महीने और छह सप्ताह हो सकता है।"
  },
  {
    question_en: "In which article is the Pardoning Power of the President?",
    question_hi: "राष्ट्रपति की क्षमादान शक्ति (Pardoning Power) किस अनुच्छेद में है?",
    options_en: [
      "Article 71",
      "Article 72",
      "Article 74",
      "Article 78"
    ],
    options_hi: [
      "अनुच्छेद 71",
      "अनुच्छेद 72",
      "अनुच्छेद 74",
      "अनुच्छेद 78"
    ],
    correct_option_index: 1,
    explanation_en: "Article 72 empowers the President to pardon, defer, remit, remit or commute the sentence of any person convicted of any offence.",
    explanation_hi: "अनुच्छेद 72 राष्ट्रपति को किसी भी अपराध के लिए दोषी ठहराए गए किसी भी व्यक्ति की सजा को क्षमा, प्रविलंबन, विराम, परिहार या लघुकरण करने की शक्ति प्रदान करता है।"
  },
  {
    question_en: "Who is the supreme commander of the three defense forces (Navy, Army, Air Force)?",
    question_hi: "तीनों रक्षा बलों (जल सेना, थल सेना, वायु सेना) का सर्वोच्च कमांडर कौन होता है?",
    options_en: [
      "Prime Minister",
      "Defense Minister",
      "President",
      "Vice President"
    ],
    options_hi: [
      "प्रधानमंत्री",
      "रक्षा मंत्री",
      "राष्ट्रपति",
      "उपराष्ट्रपति"
    ],
    correct_option_index: 2,
    explanation_en: "The President of India is the supreme commander of the Indian Armed Forces (Army, Navy and Air Force).",
    explanation_hi: "भारत का राष्ट्रपति भारतीय सशस्त्र बलों (सेना, नौसेना और वायु सेना) का सर्वोच्च कमांडर होता है।"
  },
  {
    question_en: "Who takes the final decision on the disputes related to the election of the President or Vice President?",
    question_hi: "राष्ट्रपति या उपराष्ट्रपति के चुनाव से संबंधित विवादों का अंतिम निर्णय कौन लेता है?",
    options_en: [
      "Parliament",
      "election Commission",
      "Supreme Court (Supreme Court)",
      "high court"
    ],
    options_hi: [
      "संसद",
      "चुनाव आयोग",
      "सर्वोच्च न्यायालय (Supreme Court)",
      "उच्च न्यायालय"
    ],
    correct_option_index: 2,
    explanation_en: "All doubts and disputes relating to the election of the President or Vice-President shall be inquired into and decided by the Supreme Court, whose decision shall be final.",
    explanation_hi: "राष्ट्रपति या उपराष्ट्रपति के चुनाव से संबंधित सभी संदेहों और विवादों की जांच और निर्णय सर्वोच्च न्यायालय द्वारा किया जाएगा, जिसका निर्णय अंतिम होगा।"
  },
  {
    question_en: "If the post of President becomes vacant on completion of 5 years term, when should the elections be held?",
    question_hi: "यदि राष्ट्रपति का पद 5 वर्ष का कार्यकाल पूरा होने पर रिक्त हो जाता है, तो चुनाव कब होना चाहिए?",
    options_en: [
      "Within 6 months of vacancy",
      "The new President should be elected before the completion of his term",
      "after 6 months",
      "This is decided by the Election Commission"
    ],
    options_hi: [
      "रिक्ति के 6 माह के भीतर",
      "नए राष्ट्रपति का चुनाव कार्यकाल पूरा होने से पहले ही हो जाना चाहिए",
      "6 माह के बाद",
      "यह चुनाव आयोग तय करता है"
    ],
    correct_option_index: 1,
    explanation_en: "An election to fill the vacancy caused by the expiration of the term of office of the President must be held before the expiration of the term.",
    explanation_hi: "राष्ट्रपति के पद की अवधि समाप्त होने के कारण हुई रिक्ति को भरने के लिए चुनाव अवधि समाप्त होने से पहले ही पूरा कर लिया जाना चाहिए।"
  },
  {
    question_en: "How many integral parts are there in the Indian Parliament?",
    question_hi: "भारतीय संसद के कितने अभिन्न अंग (Integral parts) हैं?",
    options_en: [
      "2 (Lok Sabha, Rajya Sabha)",
      "3 (President, Lok Sabha, Rajya Sabha)",
      "4 (Lok Sabha, Rajya Sabha, Prime Minister, Council of Ministers)",
      "5 (Lok Sabha, Rajya Sabha, President, Vice President, Prime Minister)"
    ],
    options_hi: [
      "2 (लोकसभा, राज्यसभा)",
      "3 (राष्ट्रपति, लोकसभा, राज्यसभा)",
      "4 (लोकसभा, राज्यसभा, प्रधानमंत्री, मंत्रिपरिषद)",
      "5 (लोकसभा, राज्यसभा, राष्ट्रपति, उपराष्ट्रपति, प्रधानमंत्री)"
    ],
    correct_option_index: 1,
    explanation_en: "The Parliament of India has three integral parts: the President, the Lok Sabha (House of the People) and the Rajya Sabha (Council of States).",
    explanation_hi: "भारत की संसद के तीन अभिन्न अंग हैं: राष्ट्रपति, लोकसभा (जनता का सदन) और राज्यसभा (राज्यों की परिषद)।"
  },
  {
    question_en: "What is the maximum number of elected members in the Lok Sabha after the 104th Amendment (2019)?",
    question_hi: "104वें संशोधन (2019) के बाद लोकसभा में अधिकतम कितने निर्वाचित सदस्य हो सकते हैं?",
    options_en: [
      "552",
      "550",
      "530",
      "543"
    ],
    options_hi: [
      "552",
      "550",
      "530",
      "543"
    ],
    correct_option_index: 1,
    explanation_en: "Originally, the maximum strength of the Lok Sabha was 552 (530 from the states, 20 from the Union Territories, and 2 nominated Anglo-Indians). The 104th Amendment Act, 2019 abolished the provision of nominated Anglo-Indian members. Thus, the maximum number of elected members is 550 (530 from States and 20 from Union Territories).",
    explanation_hi: "मूल रूप से, लोकसभा की अधिकतम संख्या 552 थी (राज्यों से 530, केंद्र शासित प्रदेशों से 20, और 2 मनोनीत एंग्लो-इंडियन)। 104वें संशोधन अधिनियम, 2019 ने मनोनीत एंग्लो-इंडियन सदस्यों के प्रावधान को समाप्त कर दिया। इस प्रकार, निर्वाचित सदस्यों की अधिकतम संख्या 550 (राज्यों से 530 और केंद्र शासित प्रदेशों से 20) है।"
  },
  {
    question_en: "How many members are nominated by the President in Rajya Sabha?",
    question_hi: "राज्यसभा में राष्ट्रपति द्वारा कितने सदस्य मनोनीत किए जाते हैं?",
    options_en: [
      "2",
      "10",
      "12",
      "15"
    ],
    options_hi: [
      "2",
      "10",
      "12",
      "15"
    ],
    correct_option_index: 2,
    explanation_en: "The President nominates 12 members to the Rajya Sabha from among persons having special knowledge or practical experience in literature, science, arts and social service.",
    explanation_hi: "राष्ट्रपति राज्यसभा में साहित्य, विज्ञान, कला और समाज सेवा में विशेष ज्ञान या व्यावहारिक अनुभव रखने वाले व्यक्तियों में से 12 सदस्यों को मनोनीत करता है।"
  },
  {
    question_en: "Money Bill is related to which article of the Constitution?",
    question_hi: "धन विधेयक (Money Bill) संविधान के किस अनुच्छेद से संबंधित है?",
    options_en: [
      "Article 108",
      "Article 110",
      "Article 111",
      "Article 112"
    ],
    options_hi: [
      "अनुच्छेद 108",
      "अनुच्छेद 110",
      "अनुच्छेद 111",
      "अनुच्छेद 112"
    ],
    correct_option_index: 1,
    explanation_en: "Article 110 of the Constitution deals with the definition of money bill.",
    explanation_hi: "संविधान का अनुच्छेद 110 धन विधेयक की परिभाषा से संबंधित है।"
  },
  {
    question_en: "Money Bill can be introduced only in which House?",
    question_hi: "धन विधेयक केवल किस सदन में पेश किया जा सकता है?",
    options_en: [
      "Rajya Sabha",
      "Lok Sabha",
      "in any house",
      "in joint session"
    ],
    options_hi: [
      "राज्यसभा",
      "लोकसभा",
      "किसी भी सदन में",
      "संयुक्त सत्र में"
    ],
    correct_option_index: 1,
    explanation_en: "Money bills can be introduced only in the Lok Sabha and not in the Rajya Sabha.",
    explanation_hi: "धन विधेयक केवल लोकसभा में पेश किया जा सकता है, राज्यसभा में नहीं।"
  },
  {
    question_en: "What proportion of the total members is required to be present to start the proceedings of Parliament?",
    question_hi: "संसद की कार्यवाही शुरू करने के लिए कुल सदस्यों का कितना भाग उपस्थित होना आवश्यक है?",
    options_en: [
      "1/5 part",
      "1/8 part",
      "1/10 part",
      "1/4 part"
    ],
    options_hi: [
      "1/5 भाग",
      "1/8 भाग",
      "1/10 भाग",
      "1/4 भाग"
    ],
    correct_option_index: 2,
    explanation_en: "The quorum required for holding a meeting of any House of Parliament is one-tenth of the total number of members of the House.",
    explanation_hi: "संसद के किसी भी सदन की बैठक आयोजित करने के लिए गणपूर्ति सदन के कुल सदस्यों की संख्या का दसवां हिस्सा होती है।"
  },
  {
    question_en: "In which article is it stated that no expenditure can be made from the Consolidated Fund of India without the approval of the Parliament?",
    question_hi: "भारत की संचित निधि (Consolidated Fund of India) से बिना संसद की स्वीकृति के कोई भी खर्च नहीं किया जा सकता है, यह किस अनुच्छेद में है?",
    options_en: [
      "Article 267",
      "Article 266",
      "Article 112",
      "Article 280"
    ],
    options_hi: [
      "अनुच्छेद 267",
      "अनुच्छेद 266",
      "अनुच्छेद 112",
      "अनुच्छेद 280"
    ],
    correct_option_index: 1,
    explanation_en: "Article 266 deals with the Consolidated Fund of India and the public account and says that any money from the Consolidated Fund of India shall be appropriated only in accordance with law and for the purposes and manner provided in this Constitution.",
    explanation_hi: "अनुच्छेद 266 भारत की संचित निधि और सार्वजनिक खाते से संबंधित है और कहता है कि भारत की संचित निधि से कोई भी धन कानून के अनुसार और इस संविधान में प्रदान किए गए उद्देश्यों और तरीके से ही विनियोजित किया जाएगा।"
  },
  {
    question_en: "Who presides over the Joint Sitting of Parliament?",
    question_hi: "संसद के संयुक्त अधिवेशन (Joint Sitting) की अध्यक्षता कौन करता है?",
    options_en: [
      "President",
      "Vice President",
      "Lok Sabha Speaker",
      "Prime Minister"
    ],
    options_hi: [
      "राष्ट्रपति",
      "उपराष्ट्रपति",
      "लोकसभा अध्यक्ष",
      "प्रधानमंत्री"
    ],
    correct_option_index: 2,
    explanation_en: "The Speaker of the Lok Sabha presides over the joint sitting of both the Houses of Parliament. In his absence, the Deputy Speaker of the Lok Sabha presides. In his absence, the Deputy Chairman of the Rajya Sabha presides.",
    explanation_hi: "लोकसभा अध्यक्ष संसद के दोनों सदनों की संयुक्त बैठक की अध्यक्षता करता है। उनकी अनुपस्थिति में, लोकसभा का उपाध्यक्ष अध्यक्षता करता है। उनकी अनुपस्थिति में, राज्यसभा का उपसभापति अध्यक्षता करता है।"
  },
  {
    question_en: "Under the 91st Constitutional Amendment (2003), the maximum number of members of the Council of Ministers (including the PM) has been limited to what percentage of the total members of the Lok Sabha?",
    question_hi: "91वें संवैधानिक संशोधन (2003) के तहत मंत्रिपरिषद (PM सहित) की अधिकतम सदस्य संख्या लोकसभा के कुल सदस्यों के कितने प्रतिशत तक सीमित कर दी गई है?",
    options_en: [
      "10%",
      "15%",
      "20%",
      "25%"
    ],
    options_hi: [
      "10%",
      "15%",
      "20%",
      "25%"
    ],
    correct_option_index: 1,
    explanation_en: "The 91st Constitutional Amendment Act, 2003 limited the size of the Council of Ministers (including the Prime Minister) to 15% of the total strength of the Lok Sabha.",
    explanation_hi: "91वें संवैधानिक संशोधन अधिनियम, 2003 ने मंत्रिपरिषद (प्रधानमंत्री सहित) के आकार को लोकसभा की कुल शक्ति के 15% तक सीमित कर दिया।"
  },
  {
    question_en: "To whom is the Council of Ministers collectively responsible?",
    question_hi: "मंत्रिपरिषद सामूहिक रूप से (Collective Responsibility) किसके प्रति उत्तरदायी होती है?",
    options_en: [
      "President",
      "Rajya Sabha",
      "Lok Sabha",
      "Prime Minister"
    ],
    options_hi: [
      "राष्ट्रपति",
      "राज्यसभा",
      "लोकसभा",
      "प्रधानमंत्री"
    ],
    correct_option_index: 2,
    explanation_en: "Article 75 says that the Council of Ministers will be collectively responsible to the Lok Sabha.",
    explanation_hi: "अनुच्छेद 75 कहता है कि मंत्रिपरिषद सामूहिक रूप से लोकसभा के प्रति उत्तरदायी होगी।"
  },
  {
    question_en: "If a person is not a member of Parliament, what is the maximum period for which he can hold the post of minister?",
    question_hi: "यदि कोई व्यक्ति संसद का सदस्य नहीं है, तो वह अधिकतम कितने समय तक मंत्री पद पर रह सकता है?",
    options_en: [
      "3 months",
      "6 months",
      "9 months",
      "1 year"
    ],
    options_hi: [
      "3 महीने",
      "6 महीने",
      "9 महीने",
      "1 वर्ष"
    ],
    correct_option_index: 1,
    explanation_en: "No person who is a member of either House of Parliament may be appointed as a Minister, but he must become a member of either House within six months; Otherwise, he will no longer be a minister.",
    explanation_hi: "कोई भी व्यक्ति जो संसद के किसी भी सदन का सदस्य नहीं है, उसे मंत्री के रूप में नियुक्त किया जा सकता है, लेकिन उसे छह महीने के भीतर किसी भी सदन का सदस्य बनना होगा; अन्यथा, वह मंत्री नहीं रहेगा।"
  },
  {
    question_en: "In which language are the debates and records of the Lok Sabha printed?",
    question_hi: "लोकसभा के वाद-विवाद (Debates) और रिकॉर्ड किस भाषा में मुद्रित होते हैं?",
    options_en: [
      "english only",
      "hindi only",
      "In both Hindi and English languages",
      "hindi only"
    ],
    options_hi: [
      "केवल अंग्रेजी",
      "केवल हिंदी",
      "हिंदी और अंग्रेजी दोनों भाषाओं में",
      "केवल हिंदी"
    ],
    correct_option_index: 2,
    explanation_en: "The debates and records of the Lok Sabha are printed in both Hindi and English languages.",
    explanation_hi: "लोकसभा के वाद-विवाद और रिकॉर्ड हिंदी और अंग्रेजी दोनों भाषाओं में मुद्रित होते हैं।"
  },
  {
    question_en: "By whom is the Governor of the state appointed?",
    question_hi: "राज्य के राज्यपाल की नियुक्ति किसके द्वारा की जाती है?",
    options_en: [
      "Chief Minister",
      "Prime Minister",
      "President",
      "state legislature"
    ],
    options_hi: [
      "मुख्यमंत्री",
      "प्रधानमंत्री",
      "राष्ट्रपति",
      "राज्य विधानमंडल"
    ],
    correct_option_index: 2,
    explanation_en: "The Governor of the state is appointed by the President of India.",
    explanation_hi: "राज्य के राज्यपाल की नियुक्ति भारत के राष्ट्रपति द्वारा की जाती है।"
  },
  {
    question_en: "What is the minimum age limit to become Governor?",
    question_hi: "राज्यपाल बनने के लिए न्यूनतम आयु सीमा क्या है?",
    options_en: [
      "30 years",
      "35 years",
      "25 years",
      "40 years"
    ],
    options_hi: [
      "30 वर्ष",
      "35 वर्ष",
      "25 वर्ष",
      "40 वर्ष"
    ],
    correct_option_index: 1,
    explanation_en: "To be eligible for appointment as Governor, a person must have completed 35 years of age.",
    explanation_hi: "राज्यपाल के रूप में नियुक्ति के लिए पात्र होने के लिए, एक व्यक्ति को 35 वर्ष की आयु पूरी करनी चाहिए।"
  },
  {
    question_en: "The power of the Governor of the state to issue ordinance comes under which article?",
    question_hi: "राज्य के राज्यपाल की अध्यादेश जारी करने की शक्ति किस अनुच्छेद के तहत आती है?",
    options_en: [
      "Article 123",
      "Article 213",
      "Article 356",
      "Article 163"
    ],
    options_hi: [
      "अनुच्छेद 123",
      "अनुच्छेद 213",
      "अनुच्छेद 356",
      "अनुच्छेद 163"
    ],
    correct_option_index: 1,
    explanation_en: "Article 213 empowers the Governor to issue ordinances during the recess of the state legislature. This power is similar to the President's power to issue ordinances under Article 123.",
    explanation_hi: "अनुच्छेद 213 राज्यपाल को राज्य विधानमंडल के अवकाश के दौरान अध्यादेश जारी करने की शक्ति प्रदान करता है। यह शक्ति अनुच्छेद 123 के तहत राष्ट्रपति की अध्यादेश जारी करने की शक्ति के समान है।"
  },
  {
    question_en: "What is the minimum age limit to become a member of the Legislative Council?",
    question_hi: "विधान परिषद (Legislative Council) का सदस्य बनने के लिए न्यूनतम आयु सीमा क्या है?",
    options_en: [
      "25 years",
      "30 years",
      "35 years",
      "40 years"
    ],
    options_hi: [
      "25 वर्ष",
      "30 वर्ष",
      "35 वर्ष",
      "40 वर्ष"
    ],
    correct_option_index: 1,
    explanation_en: "To become a member of the Legislative Council, a person must be at least 30 years of age.",
    explanation_hi: "विधान परिषद का सदस्य बनने के लिए, एक व्यक्ति की आयु कम से कम 30 वर्ष होनी चाहिए।"
  },
  {
    question_en: "What proportion of the total members of the Legislative Council does the Governor nominate?",
    question_hi: "राज्यपाल विधान परिषद के कुल सदस्यों के कितने भाग को मनोनीत करता है?",
    options_en: [
      "1/5 part",
      "1/6 part",
      "1/3 part",
      "1/12 part"
    ],
    options_hi: [
      "1/5 भाग",
      "1/6 भाग",
      "1/3 भाग",
      "1/12 भाग"
    ],
    correct_option_index: 1,
    explanation_en: "The Governor nominates 1/6th of the total members of the Legislative Council from among persons having special knowledge or practical experience in literature, science, art, co-operative movement and social service.",
    explanation_hi: "राज्यपाल विधान परिषद के कुल सदस्यों के 1/6 भाग को साहित्य, विज्ञान, कला, सहकारी आंदोलन और समाज सेवा में विशेष ज्ञान या व्यावहारिक अनुभव रखने वाले व्यक्तियों में से मनोनीत करता है।"
  },
  {
    question_en: "Money Bill can be introduced in the state only with whose prior permission?",
    question_hi: "राज्य में धन विधेयक किसकी पूर्व अनुमति से ही पेश किया जा सकता है?",
    options_en: [
      "Chief Minister",
      "speaker of the assembly",
      "Governor",
      "high court"
    ],
    options_hi: [
      "मुख्यमंत्री",
      "विधानसभा अध्यक्ष",
      "राज्यपाल",
      "उच्च न्यायालय"
    ],
    correct_option_index: 2,
    explanation_en: "Money Bills in the State Legislature can be introduced only in the Assembly and only on the recommendation of the Governor.",
    explanation_hi: "राज्य विधानमंडल में धन विधेयक केवल विधानसभा में और केवल राज्यपाल की सिफारिश पर ही पेश किया जा सकता है।"
  },
  {
    question_en: "By whom is the Chief Minister appointed?",
    question_hi: "मुख्यमंत्री की नियुक्ति किसके द्वारा की जाती है?",
    options_en: [
      "Prime Minister",
      "Governor",
      "President",
      "state legislature"
    ],
    options_hi: [
      "प्रधानमंत्री",
      "राज्यपाल",
      "राष्ट्रपति",
      "राज्य विधानमंडल"
    ],
    correct_option_index: 1,
    explanation_en: "The Chief Minister is appointed by the Governor of the state.",
    explanation_hi: "मुख्यमंत्री की नियुक्ति राज्य के राज्यपाल द्वारा की जाती है।"
  },
  {
    question_en: "What is the source of emergency provisions in India?",
    question_hi: "भारत में आपातकाल के प्रावधानों का स्रोत क्या है?",
    options_en: [
      "United States of America",
      "Russia",
      "Government of India Act, 1935",
      "ireland"
    ],
    options_hi: [
      "संयुक्त राज्य अमेरिका",
      "रूस",
      "भारत सरकार अधिनियम, 1935",
      "आयरलैंड"
    ],
    correct_option_index: 2,
    explanation_en: "The emergency provisions in the Indian Constitution are mainly influenced by the Government of India Act, 1935.",
    explanation_hi: "भारतीय संविधान में आपातकालीन प्रावधान मुख्य रूप से भारत सरकार अधिनियम, 1935 से प्रभावित हैं।"
  },
  {
    question_en: "How many types of emergency are there provisions in the Indian Constitution?",
    question_hi: "भारतीय संविधान में कितने प्रकार के आपातकाल का प्रावधान है?",
    options_en: [
      "2",
      "3 (National, President's Rule, Financial)",
      "4",
      "5"
    ],
    options_hi: [
      "2",
      "3 (राष्ट्रीय, राष्ट्रपति शासन, वित्तीय)",
      "4",
      "5"
    ],
    correct_option_index: 1,
    explanation_en: "The Indian Constitution provides for three types of emergency: national emergency (Article 352), state emergency or President's rule (Article 356), and financial emergency (Article 360).",
    explanation_hi: "भारतीय संविधान में तीन प्रकार के आपातकाल का प्रावधान है: राष्ट्रीय आपातकाल (अनुच्छेद 352), राज्य आपातकाल या राष्ट्रपति शासन (अनुच्छेद 356), और वित्तीय आपातकाल (अनुच्छेद 360)।"
  },
  {
    question_en: "National Emergency is in which article?",
    question_hi: "राष्ट्रीय आपातकाल (National Emergency) किस अनुच्छेद में है?",
    options_en: [
      "Article 356",
      "Article 352",
      "Article 360",
      "Article 365"
    ],
    options_hi: [
      "अनुच्छेद 356",
      "अनुच्छेद 352",
      "अनुच्छेद 360",
      "अनुच्छेद 365"
    ],
    correct_option_index: 1,
    explanation_en: "Article 352 deals with declaration of national emergency.",
    explanation_hi: "अनुच्छेद 352 राष्ट्रीय आपातकाल की घोषणा से संबंधित है।"
  },
  {
    question_en: "After the 44th Amendment (1978), what is the internal basis for declaration of national emergency?",
    question_hi: "44वें संशोधन (1978) के बाद, राष्ट्रीय आपातकाल की घोषणा का आंतरिक आधार क्या है?",
    options_en: [
      "inner turmoil",
      "economic instability",
      "Armed Rebellion",
      "failure of the constitutional system"
    ],
    options_hi: [
      "आंतरिक अशांति",
      "आर्थिक अस्थिरता",
      "सशस्त्र विद्रोह (Armed Rebellion)",
      "संवैधानिक तंत्र की विफलता"
    ],
    correct_option_index: 2,
    explanation_en: "The term 'armed rebellion' was substituted for 'internal disturbance' as the ground for declaration of national emergency by the 44th Amendment Act, 1978.",
    explanation_hi: "44वें संशोधन अधिनियम, 1978 द्वारा राष्ट्रीय आपातकाल की घोषणा के आधार के रूप में 'आंतरिक अशांति' के स्थान पर 'सशस्त्र विद्रोह' शब्द को प्रतिस्थापित किया गया था।"
  },
  {
    question_en: "Who has the power to declare or revoke a national emergency?",
    question_hi: "राष्ट्रीय आपातकाल की घोषणा करने या उसे रद्द करने की शक्ति किसके पास है?",
    options_en: [
      "Prime Minister",
      "Home Minister",
      "President",
      "Parliament"
    ],
    options_hi: [
      "प्रधानमंत्री",
      "गृह मंत्री",
      "राष्ट्रपति",
      "संसद"
    ],
    correct_option_index: 2,
    explanation_en: "The President of India has the power to declare or revoke a national emergency.",
    explanation_hi: "भारत के राष्ट्रपति के पास राष्ट्रीय आपातकाल की घोषणा करने या उसे रद्द करने की शक्ति है।"
  },
  {
    question_en: "Which article is related to the failure of constitutional machinery in the state (President's Rule)?",
    question_hi: "राज्य में संवैधानिक तंत्र की विफलता (राष्ट्रपति शासन) से संबंधित अनुच्छेद कौन सा है?",
    options_en: [
      "Article 352",
      "Article 356",
      "Article 360",
      "Article 355"
    ],
    options_hi: [
      "अनुच्छेद 352",
      "अनुच्छेद 356",
      "अनुच्छेद 360",
      "अनुच्छेद 355"
    ],
    correct_option_index: 1,
    explanation_en: "Article 356 deals with the imposition of President's rule on the ground of failure of the constitutional machinery in the state.",
    explanation_hi: "अनुच्छेद 356 राज्य में संवैधानिक तंत्र की विफलता के आधार पर राष्ट्रपति शासन लगाने से संबंधित है।"
  },
  {
    question_en: "How many times has Financial Emergency (Article 360) been imposed in India?",
    question_hi: "भारत में वित्तीय आपातकाल (अनुच्छेद 360) कितनी बार लागू किया गया है?",
    options_en: [
      "Once",
      "twice",
      "three times",
      "Never"
    ],
    options_hi: [
      "एक बार",
      "दो बार",
      "तीन बार",
      "कभी नहीं"
    ],
    correct_option_index: 3,
    explanation_en: "Financial emergency has never been declared under Article 360 ​​in India till now.",
    explanation_hi: "भारत में अब तक अनुच्छेद 360 के तहत वित्तीय आपातकाल की घोषणा कभी नहीं की गई है।"
  },
  {
    question_en: "When National Emergency (Art 352) is imposed, the federal structure of India is transformed into which structure?",
    question_hi: "राष्ट्रीय आपातकाल (Art 352) लागू होने पर भारत का संघीय ढाँचा किस ढाँचे में परिवर्तित हो जाता है?",
    options_en: [
      "federalist",
      "Confederate",
      "Unitary",
      "Semi-federal"
    ],
    options_hi: [
      "महासंघीय",
      "परिसंघीय",
      "एकात्मक (Unitary)",
      "अर्ध-संघीय"
    ],
    correct_option_index: 2,
    explanation_en: "During a national emergency, India's federal structure changes to a unitary one, which means the central government gains sweeping powers over the states.",
    explanation_hi: "राष्ट्रीय आपातकाल के दौरान, भारत का संघीय ढाँचा एकात्मक में परिवर्तित हो जाता है, जिसका अर्थ है कि केंद्र सरकार को राज्यों पर व्यापक शक्तियाँ प्राप्त हो जाती हैं।"
  },
  {
    question_en: "The post of Vice-President is related to which article?",
    question_hi: "उपराष्ट्रपति (Vice-President) का पद किस अनुच्छेद से संबंधित है?",
    options_en: [
      "Article 62",
      "Article 63",
      "Article 72",
      "Article 75"
    ],
    options_hi: [
      "अनुच्छेद 62",
      "अनुच्छेद 63",
      "अनुच्छेद 72",
      "अनुच्छेद 75"
    ],
    correct_option_index: 1,
    explanation_en: "Article 63 of the Indian Constitution states that 'There shall be a Vice President of India'.",
    explanation_hi: "भारतीय संविधान का अनुच्छेद 63 कहता है कि 'भारत का एक उपराष्ट्रपति होगा'।"
  },
  {
    question_en: "Who appoints the Prime Minister?",
    question_hi: "प्रधानमंत्री की नियुक्ति कौन करता है?",
    options_en: [
      "by election",
      "President",
      "Lok Sabha",
      "Rajya Sabha"
    ],
    options_hi: [
      "चुनाव द्वारा",
      "राष्ट्रपति",
      "लोकसभा",
      "राज्यसभा"
    ],
    correct_option_index: 1,
    explanation_en: "The Prime Minister is appointed by the President of India.",
    explanation_hi: "प्रधानमंत्री की नियुक्ति भारत के राष्ट्रपति द्वारा की जाती है।"
  },
  {
    question_en: "Who appoints the Attorney General (AG), the highest law officer of the country?",
    question_hi: "देश के सर्वोच्च कानूनी अधिकारी (Highest Law Officer of Country) अटॉर्नी जनरल (AG) की नियुक्ति कौन करता है?",
    options_en: [
      "Chief Justice of India",
      "President",
      "Prime Minister",
      "Parliament"
    ],
    options_hi: [
      "भारत के मुख्य न्यायाधीश",
      "राष्ट्रपति",
      "प्रधानमंत्री",
      "संसद"
    ],
    correct_option_index: 1,
    explanation_en: "The Attorney General of India is appointed by the President of India.",
    explanation_hi: "भारत के अटॉर्नी जनरल की नियुक्ति भारत के राष्ट्रपति द्वारा की जाती है।"
  },
  {
    question_en: "To become Attorney General, one should have the same qualification which is required to become a judge of?",
    question_hi: "अटॉर्नी जनरल बनने के लिए वही योग्यता होनी चाहिए, जो किसके न्यायाधीश बनने के लिए आवश्यक है?",
    options_en: [
      "high court",
      "Governor",
      "supreme court",
      "District Courts"
    ],
    options_hi: [
      "उच्च न्यायालय",
      "राज्यपाल",
      "सर्वोच्च न्यायालय",
      "जिला न्यायालय"
    ],
    correct_option_index: 2,
    explanation_en: "A person who is qualified to be appointed a judge of the Supreme Court is eligible to be appointed as the Attorney General of India.",
    explanation_hi: "एक व्यक्ति जो सर्वोच्च न्यायालय का न्यायाधीश नियुक्त होने के लिए योग्य है, वह भारत के अटॉर्नी जनरल के रूप में नियुक्त होने के लिए पात्र है।"
  },
  {
    question_en: "Ministers hold office at whose personal pleasure?",
    question_hi: "मंत्री व्यक्तिगत रूप से किसके प्रसाद पर्यंत (Pleasure) पद धारण करते हैं?",
    options_en: [
      "Prime Minister",
      "Lok Sabha Speaker",
      "President",
      "Vice President"
    ],
    options_hi: [
      "प्रधानमंत्री",
      "लोकसभा अध्यक्ष",
      "राष्ट्रपति",
      "उपराष्ट्रपति"
    ],
    correct_option_index: 2,
    explanation_en: "Article 75 says that ministers hold office during the pleasure of the President.",
    explanation_hi: "अनुच्छेद 75 कहता है कि मंत्री राष्ट्रपति के प्रसाद पर्यंत पद धारण करते हैं।"
  },
  {
    question_en: "If the office of Vice President becomes vacant, who serves as Acting President?",
    question_hi: "यदि उपराष्ट्रपति का पद रिक्त हो जाता है, तो कौन कार्यवाहक राष्ट्रपति के रूप में कार्य करता है?",
    options_en: [
      "Prime Minister",
      "Attorney General",
      "Lok Sabha Speaker",
      "Chief Justice of India (CJI) or senior most judge"
    ],
    options_hi: [
      "प्रधानमंत्री",
      "महान्यायवादी",
      "लोकसभा अध्यक्ष",
      "भारत के मुख्य न्यायाधीश (CJI) या वरिष्ठतम न्यायाधीश"
    ],
    correct_option_index: 3,
    explanation_en: "If the office of the Vice President becomes vacant, the Chief Justice of India, or in his absence, the senior most judge of the Supreme Court, acts as Acting President.",
    explanation_hi: "यदि उपराष्ट्रपति का पद रिक्त हो जाता है, तो भारत के मुख्य न्यायाधीश, या उनकी अनुपस्थिति में, सर्वोच्च न्यायालय के वरिष्ठतम न्यायाधीश, कार्यवाहक राष्ट्रपति के रूप में कार्य करते हैं।"
  },
  {
    question_en: "By whom is the oath of office and secrecy administered to ministers?",
    question_hi: "मंत्रियों को पद और गोपनीयता की शपथ किसके द्वारा दिलाई जाती है?",
    options_en: [
      "Prime Minister",
      "Lok Sabha Speaker",
      "President",
      "Chief Justice of India"
    ],
    options_hi: [
      "प्रधानमंत्री",
      "लोकसभा अध्यक्ष",
      "राष्ट्रपति",
      "भारत के मुख्य न्यायाधीश"
    ],
    correct_option_index: 2,
    explanation_en: "The President administers the oath of office and secrecy to the ministers.",
    explanation_hi: "राष्ट्रपति मंत्रियों को पद और गोपनीयता की शपथ दिलाते हैं।"
  },
]

export default test1Questions;
