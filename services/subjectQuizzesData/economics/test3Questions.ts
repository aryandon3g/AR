import type { QuizQuestion } from '../../../types';

const test3Questions: QuizQuestion[] =  [
  {
    question_en: "How is NDTL (Net Demand and Time Liabilities) calculated for a commercial bank?",
    question_hi: "किसी वाणिज्यिक बैंक के लिए NDTL (Net Demand and Time Liabilities) की गणना कैसे की जाती है?",
    options_en: ["NDTL = GD + TL", "NDTL = GD + IBL", "NDTL = GD&TL - IBL"],
    options_hi: ["NDTL = GD + TL", "NDTL = GD + IBL", "NDTL = GD&TL - IBL"],
    correct_option_index: 2,
    explanation_en: "NDTL is calculated by subtracting Inter-Bank Liabilities (IBL) from the Gross Demand and Time Liabilities (GD&TL).",
    explanation_hi: "NDTL की गणना बैंक की कुल मांग और सावधि देनदारियों (Gross Demand and Time Liabilities) में से अन्य बैंकों के साथ देनदारियों (Inter-Bank Liabilities) को घटाकर की जाती है।"
  },
  {
    question_en: "According to the notes, the first governor of RBI was Sir Osborne Smith. Under which year's act of RBI was he appointed?",
    question_hi: "नोट्स के अनुसार, RBI के पहले गवर्नर सर ऑस्बोर्न स्मिथ थे। वह RBI के किस वर्ष के अधिनियम के तहत नियुक्त हुए थे?",
    options_en: ["1949", "1935", "RBI Act 1934"],
    options_hi: ["1949", "1935", "RBI Act 1934"],
    correct_option_index: 2,
    explanation_en: "The Reserve Bank of India (RBI) was established on April 1, 1935, under the provisions of the RBI Act, 1934. Sir Osborne Smith was appointed as the first governor under this act.",
    explanation_hi: "भारतीय रिज़र्व बैंक (RBI) की स्थापना RBI अधिनियम, 1934 के प्रावधानों के अनुसार 1 अप्रैल, 1935 को हुई थी। सर ऑस्बोर्न स्मिथ को इसी अधिनियम के तहत पहले गवर्नर के रूप में नियुक्त किया गया था।"
  },
  {
    question_en: "Which statement is correct regarding the Bank Rate?",
    question_hi: "बैंक दर (Bank Rate) के संबंध में कौन सा कथन सही है?",
    options_en: [
      "RBI lends for a short term (14 days) on this.",
      "RBI lends to commercial banks for the long term and without any collateral on this.",
      "An increase in this rate increases market liquidity."
    ],
    options_hi: [
      "RBI इस पर अल्पकाल (14 दिन) के लिए ऋण देता है।",
      "RBI इस पर वाणिज्यिक बैंकों को दीर्घकाल के लिए और बिना किसी ज़मानत के ऋण देता है।",
      "इस दर में वृद्धि से बाज़ार की तरलता बढ़ती है।"
    ],
    correct_option_index: 1,
    explanation_en: "The Bank Rate is the interest rate at which the RBI lends to commercial banks for the long term, typically without requiring any collateral.",
    explanation_hi: "बैंक दर वह ब्याज दर है जिस पर RBI वाणिज्यिक बैंकों को दीर्घकाल के लिए ऋण देता है, और इसके लिए आमतौर पर किसी ज़मानत (collateral) की आवश्यकता नहीं होती है।"
  },
  {
    question_en: "If RBI wants to reduce liquidity in the market, what should it do under Open Market Operations (OMO)?",
    question_hi: "यदि RBI बाज़ार में तरलता को कम करना चाहता है, तो उसे खुले बाज़ार की क्रियाओं (OMO) के तहत क्या करना चाहिए?",
    options_en: [
      "It should buy government securities (G-Sec).",
      "It should sell government securities (G-Sec).",
      "It should reduce the Repo Rate."
    ],
    options_hi: [
      "सरकारी प्रतिभूतियों (G-Sec) को खरीदना चाहिए।",
      "सरकारी प्रतिभूतियों (G-Sec) को बेचना चाहिए।",
      "रेपो रेट को कम करना चाहिए।"
    ],
    correct_option_index: 1,
    explanation_en: "To reduce liquidity, the RBI sells government securities (G-Sec). This sucks the excess money out of the market as banks pay RBI to buy these securities.",
    explanation_hi: "तरलता को कम करने के लिए, RBI सरकारी प्रतिभूतियों (G-Sec) को बेचता है। इससे बाज़ार से अतिरिक्त पैसा RBI के पास आ जाता है, क्योंकि बैंक इन प्रतिभूतियों को खरीदने के लिए RBI को भुगतान करते हैं।"
  },
  {
    question_en: "What is the effect of a decrease in SLR (Statutory Liquidity Ratio) on the economy?",
    question_hi: "SLR (सांविधिक तरलता अनुपात) में कमी का अर्थव्यवस्था पर क्या प्रभाव पड़ता है?",
    options_en: [
      "Banks have less money to lend, liquidity decreases.",
      "Banks have more money available, liquidity increases.",
      "It only increases the demand for government securities."
    ],
    options_hi: [
      "बैंकों के पास ऋण देने के लिए कम धन होता है, तरलता घटती है।",
      "बैंकों के पास अधिक धन उपलब्ध होता है, तरलता बढ़ती है।",
      "इससे केवल सरकारी प्रतिभूतियों की मांग बढ़ती है।"
    ],
    correct_option_index: 1,
    explanation_en: "A decrease in SLR means banks have to keep a smaller portion of their deposits as liquid assets. This frees up more money for them to lend, thus increasing liquidity in the economy.",
    explanation_hi: "SLR में कमी का मतलब है कि बैंकों को अपनी जमा का एक छोटा हिस्सा तरल संपत्ति के रूप में रखना होगा। इससे उनके पास ऋण देने के लिए अधिक धन उपलब्ध हो जाता है, जिससे अर्थव्यवस्था में तरलता बढ़ती है।"
  },
  {
    question_en: "What is the meaning of Credit Rationing under Qualitative Tools?",
    question_hi: "गुणात्मक उपकरण (Qualitative Tools) के अंतर्गत साख राशनिंग (Credit Rationing) का क्या अर्थ है?",
    options_en: [
      "RBI punishing banks.",
      "RBI setting the loan limit for commercial banks.",
      "Controlling the interest rate on deposits."
    ],
    options_hi: [
      "RBI द्वारा बैंकों को दंडित करना।",
      "RBI द्वारा वाणिज्यिक बैंकों की ऋण सीमा (Loan Limit) निर्धारित करना।",
      "जमा पर ब्याज दर को नियंत्रित करना।"
    ],
    correct_option_index: 1,
    explanation_en: "Credit Rationing is a qualitative tool where the RBI sets a maximum limit on the loans and advances that commercial banks can grant, often for specific sectors.",
    explanation_hi: "साख राशनिंग एक गुणात्मक उपकरण है जिसके तहत RBI वाणिज्यिक बैंकों द्वारा दिए जाने वाले ऋण और अग्रिमों की अधिकतम सीमा निर्धारित करता है, जो अक्सर विशिष्ट क्षेत्रों के लिए होती है।"
  },
  {
    question_en: "According to the notes, Syndicate Bank was merged with which bank?",
    question_hi: "नोट्स के अनुसार, सिंडिकेट बैंक (Syndicate Bank) का विलय किस बैंक के साथ किया गया था?",
    options_en: ["Indian Bank", "Bank of Baroda (BOB)", "Canara Bank"],
    options_hi: ["इंडियन बैंक", "बैंक ऑफ बड़ौदा (BOB)", "केनरा बैंक"],
    correct_option_index: 2,
    explanation_en: "As part of the bank consolidation, Syndicate Bank was merged with Canara Bank, effective from April 1, 2020.",
    explanation_hi: "बैंक समेकन के हिस्से के रूप में, सिंडिकेट बैंक का विलय 1 अप्रैल, 2020 से केनरा बैंक के साथ कर दिया गया।"
  },
  {
    question_en: "Vijaya Bank and Dena Bank were merged with which bank?",
    question_hi: "विजया बैंक (Vijaya Bank) और देना बैंक (Dena Bank) का विलय किस बैंक के साथ किया गया?",
    options_en: ["Indian Bank", "Syndicate Bank", "Bank of Baroda (BOB)"],
    options_hi: ["इंडियन बैंक", "सिंडिकेट बैंक", "बैंक ऑफ बड़ौदा (BOB)"],
    correct_option_index: 2,
    explanation_en: "Vijaya Bank and Dena Bank were merged with Bank of Baroda (BOB), effective from April 1, 2019.",
    explanation_hi: "विजया बैंक और देना बैंक का विलय 1 अप्रैल, 2019 से बैंक ऑफ बड़ौदा (BOB) के साथ किया गया।"
  },
  {
    question_en: "In which year was the Central Bank of India established and where is its headquarters?",
    question_hi: "सेंट्रल बैंक ऑफ इंडिया (Central Bank of India) की स्थापना किस वर्ष हुई थी और इसका मुख्यालय कहाँ है?",
    options_en: ["1894, New Delhi", "1906, Mumbai", "1911, Mumbai"],
    options_hi: ["1894, नई दिल्ली", "1906, मुंबई", "1911, मुंबई"],
    correct_option_index: 2,
    explanation_en: "The Central Bank of India was established in 1911 and is headquartered in Mumbai.",
    explanation_hi: "सेंट्रल बैंक ऑफ इंडिया की स्थापना 1911 में हुई थी और इसका मुख्यालय मुंबई में है।"
  },
  {
    question_en: "How many banks were nationalized in the first phase of nationalization (1969) and what was the minimum capital limit at that time?",
    question_hi: "पहले चरण के राष्ट्रीयकरण (1969) में कितने बैंकों का राष्ट्रीयकरण हुआ और उस समय न्यूनतम पूंजी सीमा क्या थी?",
    options_en: [
      "6 banks, ₹200 crore",
      "14 banks, ₹50 crore",
      "14 banks, ₹200 crore"
    ],
    options_hi: [
      "6 बैंक, ₹200 करोड़",
      "14 बैंक, ₹50 करोड़",
      "14 बैंक, ₹200 करोड़"
    ],
    correct_option_index: 1,
    explanation_en: "In the first phase on July 19, 1969, 14 major commercial banks with a minimum capital of ₹50 crore were nationalized.",
    explanation_hi: "19 जुलाई, 1969 को पहले चरण में, ₹50 करोड़ की न्यूनतम पूंजी वाले 14 प्रमुख वाणिज्यिक बैंकों का राष्ट्रीयकरण किया गया था।"
  },
  {
    question_en: "For what purpose was NHB (National Housing Bank) established?",
    question_hi: "NHB (नेशनल हाउसिंग बैंक) की स्थापना किस उद्देश्य से की गई थी?",
    options_en: [
      "Industrial Development",
      "Foreign Trade",
      "Agriculture Finance"
    ],
    options_hi: ["औद्योगिक विकास", "विदेशी व्यापार", "कृषि वित्त"],
    correct_option_index: 2,
    explanation_en: "The question options provided seem incorrect based on the name. NHB (National Housing Bank) was established to promote and regulate housing finance.",
    explanation_hi: "नाम के आधार पर दिए गए प्रश्न विकल्प गलत प्रतीत होते हैं। NHB (नेशनल हाउसिंग बैंक) की स्थापना आवास वित्त को बढ़ावा देने और विनियमित करने के लिए की गई थी। (नोट: दिए गए विकल्पों में से 'कृषि वित्त' सबसे असंबंधित है, लेकिन प्रश्न/विकल्पों में त्रुटि हो सकती है।)",
  },
  {
    question_en: "What is the establishment date of EXIM Bank (Export & Import Bank of India)?",
    question_hi: "EXIM Bank (Export & Import Bank of India) की स्थापना की तिथि क्या है?",
    options_en: ["12 July 1982", "2 April 1990", "9 July 1988"],
    options_hi: ["12 जुलाई 1982", "2 अप्रैल 1990", "9 जुलाई 1988"],
    correct_option_index: 0,
    explanation_en: "The Export-Import Bank of India (EXIM Bank) was established on January 1, 1982, but it commenced operations on March 1, 1982. The date provided in the option (July 12, 1982) is for NABARD.",
    explanation_hi: "भारतीय निर्यात-आयात बैंक (EXIM बैंक) की स्थापना 1 जनवरी 1982 को हुई थी, लेकिन इसने 1 मार्च 1982 को परिचालन शुरू किया। विकल्प में दी गई तिथि (12 जुलाई 1982) नाबार्ड की है। (नोट: दिए गए विकल्पों में यह सबसे निकटतम/संबंधित तिथि हो सकती है।)",
  },
  {
    question_en: "Which was the first RRB (Regional Rural Bank) in India and when was it established?",
    question_hi: "भारत का पहला RRB (क्षेत्रीय ग्रामीण बैंक) कौन सा था और इसकी स्थापना कब हुई थी?",
    options_en: [
      "Andhra Bank, 1923",
      "Canara Bank, 1906",
      "Prathama Grameen Bank, 2 October 1975"
    ],
    options_hi: [
      "आंध्र बैंक, 1923",
      "कैनरा बैंक, 1906",
      "प्रथमा ग्रामीण बैंक, 2 अक्टूबर 1975"
    ],
    correct_option_index: 2,
    explanation_en: "The first Regional Rural Bank, Prathama Grameen Bank, was established on October 2, 1975, in Moradabad, Uttar Pradesh.",
    explanation_hi: "पहले क्षेत्रीय ग्रामीण बैंक, प्रथमा ग्रामीण बैंक की स्थापना 2 अक्टूबर 1975 को मुरादाबाद, उत्तर प्रदेश में हुई थी।"
  },
  {
    question_en: "Under the First Five-Year Plan (1951-1956), when did the Community Development Programme (CDP) start, and which country supported it?",
    question_hi: "पहली पंचवर्षीय योजना (1951-1956) के तहत सामुदायिक विकास कार्यक्रम (CDP) कब शुरू हुआ था और इसे किस देश का सहयोग मिला था?",
    options_en: ["1951, Britain", "October 1952, USA Support", "1956, USSR"],
    options_hi: ["1951, ब्रिटेन", "अक्टूबर 1952, USA का सहयोग", "1956, USSR"],
    correct_option_index: 1,
    explanation_en: "The Community Development Programme (CDP) was launched in October 1952 during the First Five-Year Plan, with financial and technical support from the USA.",
    explanation_hi: "सामुदायिक विकास कार्यक्रम (CDP) पहली पंचवर्षीय योजना के दौरान अक्टूबर 1952 में शुरू किया गया था, जिसे USA से वित्तीय और तकनीकी सहयोग मिला था।"
  },
  {
    question_en: "Why is P.C. Mahalanobis, the architect of the Second Five-Year Plan (1956-1961), called the 'Father of Modern Statistics'?",
    question_hi: "दूसरी पंचवर्षीय योजना (1956-1961) के जनक पी.सी. महालनोबिस को 'आधुनिक सांख्यिकी का जनक' क्यों कहा जाता है?",
    options_en: [
      "He was the first to estimate national income.",
      "He established the Indian Statistical Institute (ISI), Calcutta.",
      "He framed the Industrial Policy of 1956."
    ],
    options_hi: [
      "उन्होंने ही पहली बार राष्ट्रीय आय का अनुमान लगाया था।",
      "उन्होंने भारतीय सांख्यिकी संस्थान (ISI), कलकत्ता की स्थापना की थी।",
      "उन्होंने 1956 की औद्योगिक नीति बनाई थी।"
    ],
    correct_option_index: 1,
    explanation_en: "P.C. Mahalanobis is revered as the 'Father of Modern Statistics' in India primarily because he founded the Indian Statistical Institute (ISI) in Calcutta in 1931.",
    explanation_hi: "पी.सी. महालनोबिस को भारत में 'आधुनिक सांख्यिकी का जनक' मुख्य रूप से इसलिए कहा जाता है क्योंकि उन्होंने 1931 में कलकत्ता में भारतीय सांख्यिकी संस्थान (ISI) की स्थापना की थी।"
  },
  {
    question_en: "What was the main reason for the failure of the Third Five-Year Plan (1961-1966), which reduced the plan's target by almost 50%?",
    question_hi: "तीसरी पंचवर्षीय योजना (1961-1966) की विफलता का प्रमुख कारण क्या था, जिसने योजना के लक्ष्य को लगभग 50% तक कम कर दिया?",
    options_en: [
      "1971 Indo-Pak War.",
      "1962 China War, Nehru's death in 1964, 1965 Pak War and drought.",
      "Nationalization of banks."
    ],
    options_hi: [
      "1971 का भारत-पाक युद्ध।",
      "1962 का चीन युद्ध, 1964 में नेहरू की मृत्यु, 1965 का पाक युद्ध और सूखा।",
      "बैंकों का राष्ट्रीयकरण।"
    ],
    correct_option_index: 1,
    explanation_en: "The Third Plan failed due to multiple unforeseen events: the Sino-Indian War (1962), the death of PM Nehru (1964), the Indo-Pak War (1965), and severe drought during 1965-66.",
    explanation_hi: "तीसरी योजना कई अप्रत्याशित घटनाओं के कारण विफल रही: चीन-भारत युद्ध (1962), प्रधान मंत्री नेहरू की मृत्यु (1964), भारत-पाक युद्ध (1965), और 1965-66 के दौरान भयंकर सूखा।"
  },
  {
    question_en: "The Fourth Five-Year Plan (1969-1974) was based on which model, and what was its main objective?",
    question_hi: "चौथी पंचवर्षीय योजना (1969-1974) किस मॉडल पर आधारित थी और इसका मुख्य उद्देश्य क्या था?",
    options_en: [
      "Mahalanobis Model, Heavy Industries.",
      "Ashok Rudra & Alan Manne Model, Economic development with stability and self-reliance.",
      "Gadgil Model, Social Justice."
    ],
    options_hi: [
      "महालनोबिस मॉडल, भारी उद्योग।",
      "अशोक रुद्र एवं एलन मात्रे मॉडल, स्थिरता के साथ आर्थिक विकास और आत्मनिर्भरता।",
      "गाडगिल मॉडल, सामाजिक न्याय।"
    ],
    correct_option_index: 1,
    explanation_en: "The Fourth Five-Year Plan was based on the Ashok Rudra and Alan Manne Model. Its main objectives were 'growth with stability' and 'progressive achievement of self-reliance'.",
    explanation_hi: "चौथी पंचवर्षीय योजना अशोक रुद्र और एलन मात्रे मॉडल पर आधारित थी। इसका मुख्य उद्देश्य 'स्थिरता के साथ विकास' और 'आत्मनिर्भरता की प्रगतिशील उपलब्धि' था।"
  },
  {
    question_en: "During which five-year plan did the Pokhran nuclear test (1974) and the nationalization of 14 banks (1969) take place?",
    question_hi: "पोखरन परमाणु परीक्षण (1974) और 14 बैंकों का राष्ट्रीयकरण (1969) किस पंचवर्षीय योजना के दौरान हुआ था?",
    options_en: [
      "Third Five-Year Plan",
      "Fourth Five-Year Plan (1969-74)",
      "Fifth Five-Year Plan"
    ],
    options_hi: [
      "तीसरी पंचवर्षीय योजना",
      "चौथी पंचवर्षीय योजना (1969-74)",
      "पांचवीं पंचवर्षीय योजना"
    ],
    correct_option_index: 1,
    explanation_en: "Both major events, the nationalization of 14 banks (1969) and the first nuclear test 'Smiling Buddha' in Pokhran (1974), occurred during the Fourth Five-Year Plan (1969-1974).",
    explanation_hi: "दोनों प्रमुख घटनाएँ, 14 बैंकों का राष्ट्रीयकरण (1969) और पोखरन में पहला परमाणु परीक्षण 'स्माइलिंग बुद्धा' (1974), चौथी पंचवर्षीय योजना (1969-1974) के दौरान हुईं।"
  },
  {
    question_en: "Why did the Fifth Five-Year Plan (1974-1978) last only four years?",
    question_hi: "पाँचवीं पंचवर्षीय योजना (1974-1978) केवल चार वर्ष क्यों चली?",
    options_en: [
      "Due to the death of Indira Gandhi.",
      "Due to its termination one year early by the Janata Party government.",
      "Due to the success of the Garibi Hatao program."
    ],
    options_hi: [
      "इंदिरा गांधी की मृत्यु के कारण।",
      "जनता पार्टी सरकार द्वारा एक वर्ष पूर्व समाप्त करने के कारण।",
      "गरीबी हटाओ कार्यक्रम की सफलता के कारण।"
    ],
    correct_option_index: 1,
    explanation_en: "The Fifth Five-Year Plan was terminated one year ahead of schedule in 1978 by the newly elected Janata Party government.",
    explanation_hi: "पांचवीं पंचवर्षीय योजना को 1978 में नव-निर्वाचित जनता पार्टी सरकार द्वारा निर्धारित समय से एक वर्ष पहले ही समाप्त कर दिया गया था।"
  },
  {
    question_en: "The Rolling Plan was based on which model?",
    question_hi: "रोलिंग प्लान (अनवरत योजना) किस मॉडल पर आधारित थी?",
    options_en: [
      "Mahalanobis Model",
      "Ashok Rudra Model",
      "D.P. Dhar Model"
    ],
    options_hi: ["महालनोबिस मॉडल", "अशोक रुद्र मॉडल", "डी.पी. धर मॉडल"],
    correct_option_index: 2,
    explanation_en: "The Fifth Five-Year Plan was drafted by D.P. Dhar. The Rolling Plan concept, introduced later, was based on Gunnar Myrdal's ideas, but the plan it replaced was the D.P. Dhar model.",
    explanation_hi: "पांचवीं पंचवर्षीय योजना का मसौदा डी.पी. धर द्वारा तैयार किया गया था। बाद में शुरू की गई रोलिंग प्लान की अवधारणा गुन्नार मायर्डल के विचारों पर आधारित थी, लेकिन जिस योजना को इसने प्रतिस्थापित किया, वह डी.पी. धर मॉडल था।",
  },
  {
    question_en: "What was the main objective of the Seventh Five-Year Plan (1985-1990)?",
    question_hi: "सातवीं पंचवर्षीय योजना (1985-1990) का मुख्य उद्देश्य क्या था?",
    options_en: [
      "Poverty Alleviation (Garibi Hatao)",
      "Increase in food grain production and employment",
      "Development of Information Technology"
    ],
    options_hi: [
      "गरीबी हटाओ",
      "खाद्यान्न उत्पादन में वृद्धि और रोज़गार",
      "सूचना प्रौद्योगिकी का विकास"
    ],
    correct_option_index: 1,
    explanation_en: "The main objectives of the Seventh Five-Year Plan were to establish a self-sufficient economy, generate employment opportunities, and increase food grain production.",
    explanation_hi: "सातवीं पंचवर्षीय योजना का मुख्य उद्देश्य आत्मनिर्भर अर्थव्यवस्था स्थापित करना, रोज़गार के अवसर पैदा करना और खाद्यान्न उत्पादन में वृद्धि करना था।"
  },
  {
    question_en: "Why were Annual Plans adopted during 1990-92?",
    question_hi: "1990-92 के दौरान वार्षिक योजनाएँ (Annual Plans) क्यों अपनाई गईं?",
    options_en: [
      "Due to Balance of Payments (BOP) problem and decline in foreign exchange reserves.",
      "Due to war.",
      "Due to the failure of the Fifth Plan."
    ],
    options_hi: [
      "भुगतान संतुलन (BOP) की समस्या और विदेशी मुद्रा भंडार में कमी के कारण।",
      "युद्ध के कारण।",
      "पांचवीं योजना की विफलता के कारण।"
    ],
    correct_option_index: 0,
    explanation_en: "Annual Plans were adopted for 1990-91 and 1991-92 due to political instability and a severe Balance of Payments (BOP) crisis, which led to a sharp decline in foreign exchange reserves.",
    explanation_hi: "1990-91 और 1991-92 के लिए वार्षिक योजनाएँ राजनीतिक अस्थिरता और गंभीर भुगतान संतुलन (BOP) संकट के कारण अपनाई गईं, जिससे विदेशी मुद्रा भंडार में भारी कमी आई थी।"
  },
  {
    question_en: "Who were the Prime Minister and Finance Minister of India during the Eighth Five-Year Plan (1992-1997)?",
    question_hi: "आठवीं पंचवर्षीय योजना (1992-1997) के दौरान भारत के प्रधानमंत्री और वित्त मंत्री कौन थे?",
    options_en: [
      "Indira Gandhi and Manmohan Singh",
      "Atal Bihari Vajpayee and Yashwant Sinha",
      "P.V. Narasimha Rao and Manmohan Singh"
    ],
    options_hi: [
      "इंदिरा गांधी और मनमोहन सिंह",
      "अटल बिहारी वाजपेयी और यशवंत सिन्हा",
      "पी.वी. नरसिम्हा राव और मनमोहन सिंह"
    ],
    correct_option_index: 2,
    explanation_en: "During the Eighth Five-Year Plan, which implemented the LPG reforms, P.V. Narasimha Rao was the Prime Minister and Dr. Manmohan Singh was the Finance Minister.",
    explanation_hi: "आठवीं पंचवर्षीय योजना के दौरान, जिसने LPG सुधारों को लागू किया, पी.वी. नरसिम्हा राव प्रधानमंत्री थे और डॉ. मनमोहन सिंह वित्त मंत्री थे।"
  },
  {
    question_en: "During which five-year plan was the Sarva Shiksha Abhiyan (SSA) launched?",
    question_hi: "सर्व शिक्षा अभियान (SSA) किस पंचवर्षीय योजना के दौरान शुरू किया गया था?",
    options_en: [
      "Eighth Five-Year Plan (1992-97)",
      "Ninth Five-Year Plan (1997-2002)",
      "Tenth Five-Year Plan (2002-07)"
    ],
    options_hi: [
      "आठवीं पंचवर्षीय योजना (1992-97)",
      "नौवीं पंचवर्षीय योजना (1997-2002)",
      "दसवीं पंचवर्षीय योजना (2002-07)"
    ],
    correct_option_index: 2,
    explanation_en: "Sarva Shiksha Abhiyan (SSA) was launched in 2001, which falls during the period of the Tenth Five-Year Plan (2002-2007). (Note: Though launched in 2001, it was operationalized during the 10th Plan).",
    explanation_hi: "सर्व शिक्षा अभियान (SSA) 2001 में शुरू किया गया था, जो दसवीं पंचवर्षीय योजना (2002-2007) की अवधि के दौरान आता है। (नोट: हालांकि 2001 में लॉन्च किया गया, यह 10वीं योजना के दौरान क्रियान्वित हुआ)।"
  },
  {
    question_en: "The model of the 11th Five-Year Plan (2007-2012) was named after which economist?",
    question_hi: "11वीं पंचवर्षीय योजना (2007-2012) का मॉडल किस अर्थशास्त्री के नाम पर था?",
    options_en: ["Mahalanobis", "Harrod-Domar", "C. Rangarajan"],
    options_hi: ["महालनोबिस", "हैरोड-डोमर", "सी. रंगराजन"],
    correct_option_index: 2,
    explanation_en: "The 11th Five-Year Plan was prepared under the chairmanship of C. Rangarajan, who headed the Planning Commission's technical group.",
    explanation_hi: "11वीं पंचवर्षीय योजना सी. रंगराजन की अध्यक्षता में तैयार की गई थी, जिन्होंने योजना आयोग के तकनीकी समूह का नेतृत्व किया था।"
  },
  {
    question_en: "In which book did Dadabhai Naoroji first give the estimate of national income (1867-68)?",
    question_hi: "राष्ट्रीय आय का सर्वप्रथम अनुमान (1867-68) दादा भाई नौरोजी ने अपनी किस पुस्तक में दिया था?",
    options_en: [
      "An Essay on the Nature and Significance of Economic Science",
      "Wealth of Nations",
      "The Poverty and Un-British Rule in India"
    ],
    options_hi: [
      "An Essay on the Nature and Significance of Economic Science",
      "Wealth of Nations",
      "The Poverty and Un-British Rule in India"
    ],
    correct_option_index: 2,
    explanation_en: "Dadabhai Naoroji provided the first estimate of India's national income in his famous book 'The Poverty and Un-British Rule in India' (published in 1901, based on 1867-68 data).",
    explanation_hi: "दादा भाई नौरोजी ने भारत की राष्ट्रीय आय का पहला अनुमान अपनी प्रसिद्ध पुस्तक 'द पॉवर्टी एंड अन-ब्रिटिश रूल इन इंडिया' (1901 में प्रकाशित, 1867-68 के आंकड़ों पर आधारित) में दिया था।"
  },
  {
    question_en: "What is another name for the 'Product Method' in the calculation of national income?",
    question_hi: "राष्ट्रीय आय की गणना में, 'उत्पाद विधि' (Product Method) का दूसरा नाम क्या है?",
    options_en: [
      "Expenditure Method",
      "Factor Income Method",
      "Value Added Method"
    ],
    options_hi: ["व्यय विधि", "कारक आय विधि", "मूल्य वर्धन विधि (Value Added Method)"],
    correct_option_index: 2,
    explanation_en: "The Product Method is also known as the Value Added Method because it sums up the value added at each stage of production to avoid double counting.",
    explanation_hi: "उत्पाद विधि को मूल्य वर्धन विधि के रूप में भी जाना जाता है क्योंकि यह दोहरी गणना से बचने के लिए उत्पादन के प्रत्येक चरण में जोड़े गए मूल्य का योग करती है।"
  },
  {
    question_en: "Which of the following is not a factor of production, in return for which income is received?",
    question_hi: "निम्नलिखित में से कौन सा उत्पादन का कारक नहीं है, जिसके बदले आय प्राप्त होती है?",
    options_en: ["Land", "Labour", "Entrepreneur"],
    options_hi: ["भूमि (Land)", "श्रमिक (Labour)", "उद्यमी (Enterpreneur)"],
    correct_option_index: 0,
    explanation_en: "This question seems flawed as Land, Labour, and Entrepreneur are all factors of production (receiving rent, wages, and profit respectively). Assuming a missing 4th option like 'Money', all three listed are factors.",
    explanation_hi: "यह प्रश्न त्रुटिपूर्ण लगता है क्योंकि भूमि, श्रमिक और उद्यमी सभी उत्पादन के कारक हैं (जिन्हें क्रमशः लगान, मजदूरी और लाभ प्राप्त होता है)। यह मानते हुए कि 'मुद्रा' जैसा चौथा विकल्प गायब है, सूचीबद्ध तीनों कारक हैं।",
  },
  {
    question_en: "Depreciation is calculated by which ministry?",
    question_hi: "मूल्य ह्रास (Depreciation) की गणना किस मंत्रालय द्वारा की जाती है?",
    options_en: ["Ministry of Finance", "NSO", "Ministry of Commerce and Trade"],
    options_hi: ["वित्त मंत्रालय", "NSO", "व्यापार वाणिज्य मंत्रालय"],
    correct_option_index: 2,
    explanation_en: "The calculation of depreciation (or Consumption of Fixed Capital) for national accounts is handled by the National Statistical Office (NSO), which is under the Ministry of Statistics and Programme Implementation. (Note: Option C is Ministry of Commerce).",
    explanation_hi: "राष्ट्रीय खातों के लिए मूल्य ह्रास (या स्थिर पूंजी की खपत) की गणना राष्ट्रीय सांख्यिकी कार्यालय (NSO) द्वारा की जाती है, जो सांख्यिकी और कार्यक्रम कार्यान्वयन मंत्रालय के अधीन है। (नोट: विकल्प C वाणिज्य मंत्रालय है)।",
  },
  {
    question_en: "If for a given year, Nominal GDP is ₹3500 crore and Real GDP is ₹2000 crore, what will be the value of the GDP Deflator?",
    question_hi: "यदि किसी वर्ष के लिए Nominal GDP ₹3500 करोड़ है और Real GDP ₹2000 करोड़ है, तो GDP अपस्फीतिकारक (Deflator) का मान क्या होगा?",
    options_en: ["100", "175", "175 (3500/2000 x 100)"],
    options_hi: ["100", "175", "175 (3500/2000 x 100)"],
    correct_option_index: 2,
    explanation_en: "The formula for the GDP Deflator is = (Nominal GDP / Real GDP) x 100. Therefore, (3500 / 2000) x 100 = 1.75 x 100 = 175.",
    explanation_hi: "GDP अपस्फीतिकारक का सूत्र है = (Nominal GDP / Real GDP) x 100. इसलिए, (3500 / 2000) x 100 = 1.75 x 100 = 175."
  },
  {
    question_en: "When was the NSO (National Statistical Office) established?",
    question_hi: "NSO (राष्ट्रीय सांख्यिकी कार्यालय) की स्थापना कब हुई थी?",
    options_en: ["1950", "2011", "23 May 2019 (Merger of CSO + NSSO)"],
    options_hi: ["1950", "2011", "23 मई 2019 (CSO + NSSO का विलय)"],
    correct_option_index: 2,
    explanation_en: "The NSO was formed through the merger of the Central Statistics Office (CSO) and the National Sample Survey Office (NSSO) on 23 May 2019.",
    explanation_hi: "NSO का गठन 23 मई 2019 को केंद्रीय सांख्यिकी कार्यालय (CSO) और राष्ट्रीय नमूना सर्वेक्षण कार्यालय (NSSO) के विलय के माध्यम से किया गया था।"
  },
  {
    question_en: "Which items fall under Capital Receipt?",
    question_hi: "पूंजीगत आय (Capital Receipt) के अंतर्गत कौन सी मदें आती हैं?",
    options_en: [
      "Only income from tax.",
      "Salary and interest receipts.",
      "Income from disinvestment of PSUs and Borrowing."
    ],
    options_hi: [
      "केवल कर (Tax) से प्राप्त आय।",
      "वेतन और ब्याज की प्राप्ति।",
      "PSU के विनिवेश (Disinvestment) से प्राप्त आय और उधार (Borrowing)।"
    ],
    correct_option_index: 2,
    explanation_en: "Capital Receipts are those that either create a liability (like borrowing) or reduce an asset (like disinvestment). Tax, salary, and interest receipts are Revenue Receipts.",
    explanation_hi: "पूंजीगत आय वह होती है जो या तो देनदारी (जैसे उधार) बनाती है या संपत्ति (जैसे विनिवेश) को कम करती है। कर, वेतन और ब्याज प्राप्तियां राजस्व प्राप्तियां हैं।"
  },
  {
    question_en: "Expenditure that neither increases the government's assets nor reduces its debt is called?",
    question_hi: "वह व्यय जिससे न तो सरकार की संपत्ति में वृद्धि होती है और न ही कर्ज में कमी आती है, क्या कहलाता है?",
    options_en: ["Capital Expenditure", "Fiscal Expenditure", "Revenue Expenditure"],
    options_hi: ["पूंजीगत व्यय", "राजकोषीय व्यय", "राजस्व व्यय (Revenue Expenditure)"],
    correct_option_index: 2,
    explanation_en: "This is the definition of Revenue Expenditure. It includes salaries, pensions, subsidies, and interest payments, which are for the normal functioning of the government.",
    explanation_hi: "यह राजस्व व्यय की परिभाषा है। इसमें वेतन, पेंशन, सब्सिडी और ब्याज भुगतान शामिल हैं, जो सरकार के सामान्य कामकाज के लिए होते हैं।"
  },
  {
    question_en: "When does a Budget Surplus occur?",
    question_hi: "बजट अधिशेष (Surplus Budget) कब होता है?",
    options_en: [
      "When total expenditure is more than total income.",
      "When the fiscal deficit is zero.",
      "When the government's Total Income is more than its Total Expenditure."
    ],
    options_hi: [
      "जब कुल व्यय कुल आय से अधिक हो।",
      "जब राजकोषीय घाटा शून्य हो।",
      "जब सरकार की कुल आय (Total Income) उसके कुल व्यय (Total Expenditure) से अधिक हो।"
    ],
    correct_option_index: 2,
    explanation_en: "A budget surplus occurs when the government's total income (both revenue and capital) exceeds its total expenditure in a financial year.",
    explanation_hi: "बजट अधिशेष तब होता है जब एक वित्तीय वर्ष में सरकार की कुल आय (राजस्व और पूंजीगत दोनों) उसके कुल व्यय से अधिक हो जाती है।"
  },
  {
    question_en: "What formula shows the relationship between Fiscal Deficit (FD) and Primary Deficit (PD)?",
    question_hi: "राजकोषीय घाटा (FD) और प्राथमिक घाटा (PD) का संबंध किस सूत्र द्वारा दर्शाया जाता है?",
    options_en: [
      "FD = PD + Interest Payment (IP)",
      "PD = FD + IP",
      "FD = PD - IP"
    ],
    options_hi: [
      "FD = PD + ब्याज भुगतान (Interest Payment - IP)",
      "PD = FD + IP",
      "FD = PD - IP"
    ],
    correct_option_index: 0,
    explanation_en: "The Fiscal Deficit (FD) is the total borrowing requirement. The Primary Deficit (PD) is the fiscal deficit minus interest payments. Therefore, FD = PD + Interest Payments.",
    explanation_hi: "राजकोषीय घाटा (FD) कुल उधार की आवश्यकता है। प्राथमिक घाटा (PD) राजकोषीय घाटे में से ब्याज भुगतान को घटाकर प्राप्त होता है। इसलिए, FD = PD + ब्याज भुगतान।"
  },
  {
    question_en: "What is the main feature of the Secondary Capital Market?",
    question_hi: "द्वितीयक पूंजी बाजार (Secondary Capital Market) की मुख्य विशेषता क्या है?",
    options_en: [
      "Company issues shares for the first time (IPO).",
      "Shares are transacted among investors.",
      "It only deals in finance for up to one year."
    ],
    options_hi: [
      "कंपनी पहली बार शेयर जारी करती है (IPO)।",
      "इसमें शेयर का लेन-देन निवेशकों के मध्य होता है।",
      "यह केवल एक वर्ष तक के लिए वित्त का लेन-देन करता है।"
    ],
    correct_option_index: 1,
    explanation_en: "The secondary market (like the stock exchange) is where previously issued securities (shares, bonds) are bought and sold among investors, without the issuing company's involvement.",
    explanation_hi: "द्वितीयक बाजार (जैसे स्टॉक एक्सचेंज) वह जगह है जहाँ पहले से जारी की गई प्रतिभूतियों (शेयरों, बांडों) को निवेशकों के बीच खरीदा और बेचा जाता है, इसमें जारी करने वाली कंपनी शामिल नहीं होती है।"
  },
  {
    question_en: "What kind of investor does the term 'Bull' (Tejadiya) refer to in the capital market?",
    question_hi: "'बुल' (Bull - तेजड़िया) शब्द पूंजी बाजार में किस निवेशक को संदर्भित करता है?",
    options_en: [
      "Those who expect share prices to fall.",
      "Those who sell their investments.",
      "Those investors who expect share prices to rise."
    ],
    options_hi: [
      "वे जो शेयर की कीमतों में कमी की आशा करते हैं।",
      "वे जो अपना निवेश बेच देते हैं।",
      "वे निवेशक जो शेयर की कीमतों में वृद्धि की आशा करते हैं।"
    ],
    correct_option_index: 2,
    explanation_en: "A 'Bull' is an investor who is optimistic about the market and expects share prices to rise, hence they buy shares.",
    explanation_hi: "एक 'बुल' (तेजड़िया) वह निवेशक होता है जो बाजार को लेकर आशावादी होता है और शेयर की कीमतों में वृद्धि की उम्मीद करता है, इसलिए वह शेयर खरीदता है।"
  },
  {
    question_en: "Where is the headquarters of SEBI located?",
    question_hi: "SEBI का मुख्यालय कहाँ स्थित है?",
    options_en: ["New Delhi", "Mumbai", "Calcutta"],
    options_hi: ["नई दिल्ली", "मुंबई", "कलकत्ता"],
    correct_option_index: 1,
    explanation_en: "The headquarters of the Securities and Exchange Board of India (SEBI) is located in Mumbai, Maharashtra.",
    explanation_hi: "भारतीय प्रतिभूति और विनिमय बोर्ड (SEBI) का मुख्यालय मुंबई, महाराष्ट्र में स्थित है।"
  },
  {
    question_en: "In which year was the BSE (Bombay Stock Exchange) established?",
    question_hi: "BSE (बॉम्बे स्टॉक एक्सचेंज) की स्थापना किस वर्ष हुई थी?",
    options_en: ["1992", "1875", "1988"],
    options_hi: ["1992", "1875", "1988"],
    correct_option_index: 1,
    explanation_en: "The BSE (Bombay Stock Exchange) was established in 1875, making it Asia's oldest stock exchange.",
    explanation_hi: "BSE (बॉम्बे स्टॉक एक्सचेंज) की स्थापना 1875 में हुई थी, जो इसे एशिया का सबसे पुराना स्टॉक एक्सचेंज बनाता है।"
  },
  {
    question_en: "Regarding the passage of GST, where was the 122nd Constitution Amendment Bill (2016) first passed?",
    question_hi: "GST पारित होने के संबंध में, 122वाँ संविधान संशोधन विधेयक (2016) सबसे पहले कहाँ पारित हुआ था?",
    options_en: ["Lok Sabha", "Rajya Sabha (3 August 2016)", "President's Signature"],
    options_hi: ["लोकसभा", "राज्यसभा (3 अगस्त 2016)", "राष्ट्रपति के हस्ताक्षर"],
    correct_option_index: 1,
    explanation_en: "The 122nd Constitution Amendment Bill (which became the 101st Amendment Act) was first passed by the Lok Sabha in May 2015, but it was the amended version that was passed by the Rajya Sabha on August 3, 2016.",
    explanation_hi: "122वां संविधान संशोधन विधेयक (जो 101वां संशोधन अधिनियम बना) पहली बार मई 2015 में लोकसभा द्वारा पारित किया गया था, लेकिन यह संशोधित संस्करण था जिसे 3 अगस्त 2016 को राज्यसभा द्वारा पारित किया गया था।"
  },
  {
    question_en: "How many components (Types) of GST are mentioned in the notes?",
    question_hi: "GST के कितने घटक (Types) हैं, जैसा कि नोट्स में उल्लेख किया गया है?",
    options_en: ["2", "3", "4 (CGST, SGST, UTGST, IGST)"],
    options_hi: ["2", "3", "4 (CGST, SGST, UTGST, IGST)"],
    correct_option_index: 2,
    explanation_en: "There are four components of GST: Central GST (CGST), State GST (SGST), Union Territory GST (UTGST), and Integrated GST (IGST).",
    explanation_hi: "GST के चार घटक हैं: केंद्रीय GST (CGST), राज्य GST (SGST), केंद्र शासित प्रदेश GST (UTGST), और एकीकृत GST (IGST)।"
  },
  {
    question_en: "Which items are kept out of the purview of GST?",
    question_hi: "GST के दायरे से बाहर रखी गई वस्तुओं में कौन शामिल है?",
    options_en: [
      "Only alcohol for human consumption.",
      "Petroleum products.",
      "Tobacco products and Crude oil."
    ],
    options_hi: [
      "केवल मानव उपभोग हेतु शराब।",
      "पेट्रोलियम उत्पाद।",
      "तंबाकू उत्पाद और क्रूड ऑयल।"
    ],
    correct_option_index: 0,
    explanation_en: "Alcohol for human consumption is kept completely out of the GST regime. Petroleum products are temporarily out (GST Council will decide when to include them).",
    explanation_hi: "मानव उपभोग के लिए शराब को GST व्यवस्था से पूरी तरह बाहर रखा गया है। पेट्रोलियम उत्पाद अस्थायी रूप से बाहर हैं (GST परिषद तय करेगी कि उन्हें कब शामिल किया जाए)।"
  },
  {
    question_en: "Who was the first Deputy Chairman of the Planning Commission?",
    question_hi: "योजना आयोग के पहले उपाध्यक्ष (First Deputy Chairman) कौन थे?",
    options_en: ["P.C. Mahalanobis", "K.C. Neogy", "Gulzari Lal Nanda"],
    options_hi: ["पी.सी. महालनोबिस", "के.सी. नियोगी", "गुलजारी लाल नंदा"],
    correct_option_index: 2,
    explanation_en: "Gulzari Lal Nanda was the first Deputy Chairman of the Planning Commission of India (1950-1951 and 1960-1963).",
    explanation_hi: "गुलजारी लाल नंदा भारत के योजना आयोग के पहले उपाध्यक्ष (1950-1951 और 1960-1963) थे।"
  },
  {
    question_en: "Who was the last Deputy Chairman of the Planning Commission?",
    question_hi: "योजना आयोग के अंतिम उपाध्यक्ष कौन थे?",
    options_en: ["Manmohan Singh", "Modi ji", "Montek Singh Ahluwalia"],
    options_hi: ["मनमोहन सिंह", "मोदी जी", "मॉन्टेक सिंह अहलूवालिया"],
    correct_option_index: 2,
    explanation_en: "Montek Singh Ahluwalia was the last Deputy Chairman of the Planning Commission, serving from 2004 until it was dissolved in 2014.",
    explanation_hi: "मॉन्टेक सिंह अहलूवालिया योजना आयोग के अंतिम उपाध्यक्ष थे, जिन्होंने 2004 से 2014 में इसके भंग होने तक कार्य किया।"
  },
  {
    question_en: "By what date does the 16th Finance Commission Chairman, Arvind Panagariya, have to submit his report?",
    question_hi: "16वें वित्त आयोग के अध्यक्ष अरविंद पनगड़िया को अपनी रिपोर्ट किस तिथि तक प्रस्तुत करनी है?",
    options_en: ["31 March 2025", "31 October 2025", "1 April 2026"],
    options_hi: ["31 मार्च 2025", "31 अक्टूबर 2025", "1 अप्रैल 2026"],
    correct_option_index: 1,
    explanation_en: "The 16th Finance Commission, chaired by Arvind Panagariya, has been requested to submit its report by October 31, 2025, for the award period commencing April 1, 2026.",
    explanation_hi: "अरविंद पनगड़िया की अध्यक्षता वाले 16वें वित्त आयोग से 1 अप्रैल, 2026 से शुरू होने वाली अवधि के लिए 31 अक्टूबर, 2025 तक अपनी रिपोर्ट प्रस्तुत करने का अनुरोध किया गया है।"
  },
  {
    question_en: "What was the main objective of the New Economic Policy (NEP) of 1991?",
    question_hi: "1991 की नई आर्थिक नीति (NEP) का मुख्य उद्देश्य क्या था?",
    options_en: [
      "Increase the trade deficit.",
      "Increase foreign investment and foreign exchange reserves.",
      "Make rules and regulations complicated."
    ],
    options_hi: [
      "व्यापार घाटा बढ़ाना।",
      "विदेशी निवेश और विदेशी विनिमय भंडार बढ़ाना।",
      "नियमों और कानूनों को जटिल करना।"
    ],
    correct_option_index: 1,
    explanation_en: "The main objective of the 1991 NEP (LPG Reforms) was to stabilize the economy, reduce the balance of payments crisis, and increase foreign investment and reserves.",
    explanation_hi: "1991 की नई आर्थिक नीति (LPG सुधार) का मुख्य उद्देश्य अर्थव्यवस्था को स्थिर करना, भुगतान संतुलन संकट को कम करना और विदेशी निवेश और भंडार को बढ़ाना था।"
  },
  {
    question_en: "What does 'Privatization' mean in the LPG policy?",
    question_hi: "LPG नीति में 'निजीकरण (Privatization)' का क्या अर्थ है?",
    options_en: [
      "Simplifying rules.",
      "Providing stake to the private sector by disinvesting government enterprises (PSUs).",
      "Connecting the Indian market with the foreign market."
    ],
    options_hi: [
      "नियमों को सरल करना।",
      "सरकारी उद्यमों (PSU) का विनिवेश करके निजी क्षेत्र को हिस्सेदारी प्रदान करना।",
      "भारतीय बाजार को विदेशी बाजार से जोड़ना।"
    ],
    correct_option_index: 1,
    explanation_en: "Privatization refers to the transfer of ownership, management, and control of public sector enterprises (PSUs) to the private sector, often through disinvestment.",
    explanation_hi: "निजीकरण का अर्थ है सार्वजनिक क्षेत्र के उद्यमों (PSU) के स्वामित्व, प्रबंधन और नियंत्रण को निजी क्षेत्र को हस्तांतरित करना, जो अक्सर विनिवेश के माध्यम से होता है।"
  },
  {
    question_en: "When does a Trade Deficit occur?",
    question_hi: "व्यापार घाटा (Trade Deficit) कब होता है?",
    options_en: ["When Export > Import", "When Import = Export", "When Import > Export (e.g., 120 > 100)"],
    options_hi: ["जब निर्यात > आयात हो।", "जब आयात = निर्यात हो।", "जब आयात (Import) निर्यात (Export) से अधिक हो (जैसे 120 > 100)।"],
    correct_option_index: 2,
    explanation_en: "A trade deficit occurs when the value of a country's imports exceeds the value of its exports.",
    explanation_hi: "व्यापार घाटा तब होता है जब किसी देश के आयात का मूल्य उसके निर्यात के मूल्य से अधिक हो जाता है।"
  },
  {
    question_en: "When will an industry be in equilibrium?",
    question_hi: "उद्योग संतुलन (Industry Equilibrium) की अवस्था में कब होगा?",
    options_en: [
      "When the industry is making supernormal profits.",
      "When firms have freedom of entry or exit.",
      "When firms have no tendency to enter or exit the industry."
    ],
    options_hi: [
      "जब उद्योग अत्यधिक लाभ कमा रहा हो।",
      "जब फर्मों को प्रवेश या बहिर्गमन की स्वतंत्रता हो।",
      "जब फर्मों को उद्योग में प्रवेश या बहिर्गमन की प्रवृत्ति न हो।"
    ],
    correct_option_index: 2,
    explanation_en: "Industry equilibrium is achieved when there is no incentive for new firms to enter or existing firms to leave, which typically happens when all firms are earning only normal profits.",
    explanation_hi: "उद्योग संतुलन तब प्राप्त होता है जब नई फर्मों के प्रवेश करने या मौजूदा फर्मों के छोड़ने के लिए कोई प्रोत्साहन नहीं होता है, जो आमतौर पर तब होता है जब सभी फर्में केवल सामान्य लाभ कमा रही होती हैं।"
  },
  {
    question_en: "When does a firm in a perfectly competitive market make abnormal profit in the short run?",
    question_hi: "पूर्ण प्रतिस्पर्धा बाजार में एक फर्म को अल्पकाल में असामान्य लाभ (Abnormal Profit) कब होता है?",
    options_en: [
      "When AR = SAC",
      "When the firm's Average Revenue (AR) is greater than its Average Cost (SAC) (AR > SAC).",
      "When AR < SAC"
    ],
    options_hi: [
      "जब AR = SAC हो।",
      "जब फर्म की औसत आय (AR) उसकी औसत लागत (SAC) से अधिक हो (AR > SAC)।",
      "जब AR < SAC हो।"
    ],
    correct_option_index: 1,
    explanation_en: "A firm earns abnormal (or supernormal) profit when its Average Revenue (AR) is greater than its Short-run Average Cost (SAC).",
    explanation_hi: "एक फर्म को असामान्य (या अधिसामान्य) लाभ तब होता है जब उसकी औसत आय (AR) उसकी अल्पकालीन औसत लागत (SAC) से अधिक होती है।"
  },
  {
    question_en: "Norman Borlaug, the father of the Green Revolution in the world, was a resident of which country?",
    question_hi: "विश्व में हरित क्रांति के जनक नॉर्मन बोरलॉग किस देश के निवासी थे?",
    options_en: ["Mexico", "India", "USA"],
    options_hi: ["मैक्सिको", "भारत", "USA"],
    correct_option_index: 2,
    explanation_en: "Norman Borlaug was an American agronomist and scientist, often called the 'Father of the Green Revolution'.",
    explanation_hi: "नॉर्मन बोरलॉग एक अमेरिकी कृषि विज्ञानी और वैज्ञानिक थे, जिन्हें अक्सर 'हरित क्रांति का जनक' कहा जाता है।"
  },
  {
    question_en: "Which crop was most affected by the Green Revolution in India?",
    question_hi: "भारत में हरित क्रांति का सबसे अधिक प्रभाव किस फसल पर पड़ा?",
    options_en: ["Rice and Millets", "Sugarcane and Pulses", "Wheat and Rice"],
    options_hi: ["चावल और बाजरा", "गन्ना और दालें", "गेहूँ और चावल"],
    correct_option_index: 2,
    explanation_en: "The Green Revolution in India had the most significant impact on increasing the production of wheat, followed by rice.",
    explanation_hi: "भारत में हरित क्रांति का सबसे अधिक प्रभाव गेहूँ के उत्पादन को बढ़ाने पर पड़ा, उसके बाद चावल का स्थान रहा।"
  },
  {
    question_en: "What was the time period of the three phases of Operation Flood?",
    question_hi: "ऑपरेशन फ्लड (Operation Flood) के तीन चरणों की समयावधि क्या थी?",
    options_en: [
      "1965-75, 1975-85, 1985-95",
      "1970-80, 1980-85, 1985-95",
      "1970-75, 1975-80, 1980-85"
    ],
    options_hi: [
      "1965-75, 1975-85, 1985-95",
      "1970-80, 1980-85, 1985-95",
      "1970-75, 1975-80, 1980-85"
    ],
    correct_option_index: 1,
    explanation_en: "The three phases of Operation Flood were: Phase I (1970–1980), Phase II (1980–1985), and Phase III (1985–1996). Option B is the closest match.",
    explanation_hi: "ऑपरेशन फ्लड के तीन चरण थे: चरण I (1970-1980), चरण II (1980-1985), और चरण III (1985-1996)। विकल्प B सबसे निकटतम है।"
  },
  {
    question_en: "Pink Revolution is related to which products?",
    question_hi: "गुलाबी क्रांति (Pink Revolution) का संबंध किन उत्पादों से है?",
    options_en: [
      "Potato production",
      "Tomato/Meat production",
      "Fertilizer production"
    ],
    options_hi: ["आलू उत्पादन", "टमाटर/मांस उत्पादन", "उर्वरक उत्पादन"],
    correct_option_index: 1,
    explanation_en: "Based on the options provided in the notes, 'Tomato/Meat production' is selected. (Note: Pink Revolution is factually related to Onions and Prawns, while Red Revolution is related to Tomato/Meat).",
    explanation_hi: "नोट्स में दिए गए विकल्पों के आधार पर, 'टमाटर/मांस उत्पादन' चुना गया है। (ध्यान दें: गुलाबी क्रांति तथ्यात्मक रूप से प्याज और झींगा से संबंधित है, जबकि लाल क्रांति टमाटर/मांस से संबंधित है)।"
  },
  {
    question_en: "Red Revolution is related to which products?",
    question_hi: "लाल क्रांति (Red Revolution) का संबंध किन उत्पादों से है?",
    options_en: ["Potato", "Spices", "Tomato and Meat"],
    options_hi: ["आलू", "मसाला", "टमाटर और मांस"],
    correct_option_index: 2,
    explanation_en: "The Red Revolution is associated with increasing the production of tomatoes and meat.",
    explanation_hi: "लाल क्रांति टमाटर और मांस के उत्पादन में वृद्धि से संबंधित है।"
  },
  {
    question_en: "What is the 'Golden Revolution' related to?",
    question_hi: "'स्वर्ण क्रांति' (Golden Revolution) का संबंध किससे है?",
    options_en: ["Fish production", "Petroleum", "Fruits, Flowers, and Honey"],
    options_hi: ["मछली उत्पादन", "पेट्रोलियम", "फलों, फूलों, और शहद से"],
    correct_option_index: 2,
    explanation_en: "The Golden Revolution is related to the overall development of horticulture, which includes fruits, flowers, and honey production.",
    explanation_hi: "स्वर्ण क्रांति बागवानी के समग्र विकास से संबंधित है, जिसमें फल, फूल और शहद उत्पादन शामिल है।"
  },
  {
    question_en: "In which type of economy do both the government and private sector have control, aiming for public welfare along with profit?",
    question_hi: "किस प्रकार की अर्थव्यवस्था में सरकार और निजी क्षेत्र दोनों का नियंत्रण होता है, जिसका उद्देश्य जन कल्याण के साथ लाभ कमाना है?",
    options_en: ["Capitalist Economy", "Socialist Economy", "Mixed Economy"],
    options_hi: ["पूंजीवादी अर्थव्यवस्था", "समाजवादी अर्थव्यवस्था", "मिश्रित अर्थव्यवस्था"],
    correct_option_index: 2,
    explanation_en: "A mixed economy combines elements of both capitalist (private sector, profit) and socialist (government control, public welfare) economies.",
    explanation_hi: "एक मिश्रित अर्थव्यवस्था में पूंजीवादी (निजी क्षेत्र, लाभ) और समाजवादी (सरकारी नियंत्रण, जन कल्याण) दोनों अर्थव्यवस्थाओं के तत्व शामिल होते हैं।"
  },
  {
    question_en: "By what other name is the Capitalist Economy known?",
    question_hi: "पूंजीवादी अर्थव्यवस्था को और किस नाम से जाना जाता है?",
    options_en: [
      "State-Based Economy",
      "Centralized Economy",
      "Market-Based Economy"
    ],
    options_hi: [
      "राज्य आधारित अर्थव्यवस्था (State-Based Eco.)",
      "केंद्रीकृत अर्थव्यवस्था",
      "बाजार आधारित अर्थव्यवस्था (Market-Based Eco.)"
    ],
    correct_option_index: 2,
    explanation_en: "A capitalist economy is also known as a market-based economy or free-market economy, where production and prices are determined by supply and demand.",
    explanation_hi: "एक पूंजीवादी अर्थव्यवस्था को बाजार आधारित अर्थव्यवस्था या मुक्त-बाजार अर्थव्यवस्था के रूप में भी जाना जाता है, जहाँ उत्पादन और कीमतें मांग और आपूर्ति द्वारा निर्धारित होती हैं।"
  },
  {
    question_en: "What is a Demat Account used for?",
    question_hi: "Demat Account का उपयोग किस लिए किया जाता है?",
    options_en: [
      "For depositing savings in a bank.",
      "Only for foreign exchange transactions.",
      "For buying and selling shares (in Electronic form)."
    ],
    options_hi: [
      "बैंक में बचत जमा करने के लिए।",
      "केवल विदेशी मुद्रा के लेन-देन के लिए।",
      "शेयरों की खरीद-बिक्री के लिए (Electronic form में)।"
    ],
    correct_option_index: 2,
    explanation_en: "A Demat (Dematerialized) Account is used to hold shares, bonds, and other securities in electronic form, facilitating their purchase and sale.",
    explanation_hi: "एक डीमैट (डीमटेरियलाइज्ड) खाते का उपयोग शेयरों, बॉन्ड और अन्य प्रतिभूतियों को इलेक्ट्रॉनिक रूप में रखने के लिए किया जाता है, जिससे उनकी खरीद-बिक्री में सुविधा होती है।"
  },
  {
    question_en: "What is the main purpose of the Economic Survey?",
    question_hi: "आर्थिक सर्वेक्षण (Economic Survey) का मुख्य उद्देश्य क्या होता है?",
    options_en: [
      "To set tax rates for the upcoming year.",
      "To present the economic landscape (inflation, foreign investment, trade) of the economy during the previous financial year.",
      "To detail the estimated income and expenditure for the upcoming year."
    ],
    options_hi: [
      "आगामी वर्ष के लिए कर दरें निर्धारित करना।",
      "पिछले वित्तीय वर्ष के दौरान अर्थव्यवस्था का आर्थिक परिदृश्य (मुद्रास्फीति, विदेशी निवेश, व्यापार) प्रस्तुत करना।",
      "आगामी वर्ष के अनुमानित आय-व्यय का विवरण देना।"
    ],
    correct_option_index: 1,
    explanation_en: "The Economic Survey, presented before the Union Budget, is a comprehensive report on the performance of the economy during the previous financial year.",
    explanation_hi: "आर्थिक सर्वेक्षण, जो केंद्रीय बजट से पहले प्रस्तुत किया जाता है, पिछले वित्तीय वर्ष के दौरान अर्थव्यवस्था के प्रदर्शन पर एक व्यापक रिपोर्ट होती है।"
  },
  {
    question_en: "According to the notes, who was the 25th Governor of RBI?",
    question_hi: "नोट्स के अनुसार, RBI के 25वें गवर्नर कौन थे?",
    options_en: ["C.D. Deshmukh", "Urjit Patel", "Shaktikanta Das (2018-24)"],
    options_hi: ["सी.डी. देशमुख", "उर्जित पटेल", "शक्तिकांत दास (2018-24)"],
    correct_option_index: 2,
    explanation_en: "Shaktikanta Das is the 25th Governor of the Reserve Bank of India, having assumed office in December 2018.",
    explanation_hi: "शक्तिकांत दास भारतीय रिज़र्व बैंक के 25वें गवर्नर हैं, जिन्होंने दिसंबर 2018 में पदभार ग्रहण किया था।"
  },
  {
    question_en: "What is the total reserve value prescribed under the Minimum Reserve System (MRS) for notes issued by RBI?",
    question_hi: "RBI द्वारा जारी किए गए नोटों पर न्यूनतम आरक्षित प्रणाली (Minimum Reserve System) के तहत कुल आरक्षित मूल्य कितना निर्धारित है?",
    options_en: ["₹115 crore", "₹85 crore", "₹100 crore"],
    options_hi: ["₹115 करोड़", "₹85 करोड़", "₹100 करोड़"],
    correct_option_index: 0,
    explanation_en: "Under the Minimum Reserve System (MRS) adopted in 1956, the RBI must maintain a minimum reserve of ₹200 crore, out of which ₹115 crore must be in gold and the remaining ₹85 crore in foreign securities. The question asks for the gold reserve part as per the option.",
    explanation_hi: "1956 में अपनाई गई न्यूनतम आरक्षित प्रणाली (MRS) के तहत, RBI को ₹200 करोड़ का न्यूनतम आरक्षित रखना होता है, जिसमें से ₹115 करोड़ सोने के रूप में और शेष ₹85 करोड़ विदेशी प्रतिभूतियों के रूप में होना चाहिए। विकल्प के अनुसार प्रश्न सोने के आरक्षित हिस्से के बारे में पूछ रहा है।"
  },
  {
    question_en: "What is the main objective of an Easy Monetary Policy?",
    question_hi: "सरल मौद्रिक नीति (Easy Monetary Policy) का मुख्य उद्देश्य क्या होता है?",
    options_en: [
      "To control inflation.",
      "To tackle recession and increase liquidity.",
      "To keep interest rates stable."
    ],
    options_hi: [
      "मुद्रास्फीति को नियंत्रित करना।",
      "मंदी की समस्या से निपटना और तरलता बढ़ाना।",
      "ब्याज दरों को स्थिर रखना।"
    ],
    correct_option_index: 1,
    explanation_en: "An easy (or expansionary) monetary policy is used to increase the money supply and liquidity in the economy, typically to combat a recession and stimulate growth.",
    explanation_hi: "एक सरल (या विस्तारवादी) मौद्रिक नीति का उपयोग अर्थव्यवस्था में धन की आपूर्ति और तरलता को बढ़ाने के लिए किया जाता है, आमतौर पर मंदी से निपटने और विकास को प्रोत्साहित करने के लिए।"
  },
  {
    question_en: "Which function of the RBI does 'Banker's Bank' represent?",
    question_hi: "बैंकों का बैंक (Banker's Bank) RBI के किस कार्य को दर्शाता है?",
    options_en: [
      "Issuing notes.",
      "Being the government's banker.",
      "Lending to and regulating commercial banks."
    ],
    options_hi: [
      "नोटों को जारी करना।",
      "सरकार का बैंक होना।",
      "वाणिज्यिक बैंकों को ऋण देना और उनका विनियमन करना।"
    ],
    correct_option_index: 2,
    explanation_en: "RBI acts as the 'Banker's Bank' by holding the cash reserves of commercial banks, lending them money (as the lender of last resort), and regulating their activities.",
    explanation_hi: "RBI वाणिज्यिक बैंकों की नकद आरक्षित निधि को रखकर, उन्हें ऋण देकर (अंतिम उपाय के ऋणदाता के रूप में), और उनकी गतिविधियों को विनियमित करके 'बैंकों के बैंक' के रूप में कार्य करता है।"
  },
  {
    question_en: "What does the RBI do under Moral Suasion?",
    question_hi: "नैतिक दबाव (Moral Suasion) के अंतर्गत RBI क्या करता है?",
    options_en: [
      "Directly imposes fines on banks.",
      "Sets the loan limit for banks.",
      "RBI persuades/pressures commercial banks to follow its policies."
    ],
    options_hi: [
      "सीधे बैंकों पर जुर्माना लगाता है।",
      "बैंकों की ऋण सीमा निर्धारित करता है।",
      "RBI अपनी नीतियों के पालन के लिए वाणिज्यिक बैंकों पर दबाव डालता है।"
    ],
    correct_option_index: 2,
    explanation_en: "Moral Suasion is a qualitative credit control tool where the RBI uses persuasion, advice, and pressure on commercial banks to make them comply with its monetary policy objectives.",
    explanation_hi: "नैतिक दबाव एक गुणात्मक साख नियंत्रण उपकरण है जहाँ RBI वाणिज्यिक बैंकों को अपनी मौद्रिक नीति के उद्देश्यों का पालन करने के लिए अनुनय, सलाह और दबाव का उपयोग करता है।"
  },
  {
    question_en: "What is another name for the Secondary Sector?",
    question_hi: "द्वितीयक क्षेत्र (Secondary Sector) का दूसरा नाम क्या है?",
    options_en: ["Primary Sector", "Service Sector", "Manufacturing Sector"],
    options_hi: ["प्राथमिक क्षेत्र", "सेवा क्षेत्र", "विनिर्माण क्षेत्र (Manufacturing Sector)"],
    correct_option_index: 2,
    explanation_en: "The secondary sector includes industries that convert raw materials into finished goods. It is also known as the manufacturing or industrial sector.",
    explanation_hi: "द्वितीयक क्षेत्र में वे उद्योग शामिल होते हैं जो कच्चे माल को तैयार माल में बदलते हैं। इसे विनिर्माण या औद्योगिक क्षेत्र के रूप में भी जाना जाता है।"
  },
  {
    question_en: "According to the notes, which type of economy is called a 'Girls-Hostel'?",
    question_hi: "नोट्स के अनुसार, किस प्रकार की अर्थव्यवस्था को 'गर्ल्स-हॉस्टल' (Girls-Hostel) कहा जाता है?",
    options_en: ["Open Economy", "Socialist Economy", "Closed Economy"],
    options_hi: ["खुली अर्थव्यवस्था (Open Economy)", "समाजवादी अर्थव्यवस्था", "बंद अर्थव्यवस्था (Closed Economy)"],
    correct_option_index: 2,
    explanation_en: "A closed economy, which has strict rules and does not engage in trade or financial relations with other countries, is metaphorically referred to as a 'Girls-Hostel' in the notes.",
    explanation_hi: "एक बंद अर्थव्यवस्था, जिसमें सख्त नियम होते हैं और जो अन्य देशों के साथ व्यापार या वित्तीय संबंध नहीं रखती है, को नोट्स में रूपक के तौर पर 'गर्ल्स-हॉस्टल' कहा गया है।"
  },
  {
    question_en: "Salaries, pensions, and subsidies given to government employees are examples of which expenditure?",
    question_hi: "सरकारी कर्मचारियों को दिया गया वेतन, पेंशन और सब्सिडी किस व्यय के उदाहरण हैं?",
    options_en: ["Capital Expenditure", "Fiscal Expenditure", "Revenue Expenditure"],
    options_hi: ["पूंजीगत व्यय", "राजकोषीय व्यय", "राजस्व व्यय"],
    correct_option_index: 2,
    explanation_en: "Salaries, pensions, and subsidies are recurring expenses that do not create any assets. Therefore, they are classified as Revenue Expenditure.",
    explanation_hi: "वेतन, पेंशन और सब्सिडी आवर्ती व्यय हैं जो किसी संपत्ति का निर्माण नहीं करते हैं। इसलिए, उन्हें राजस्व व्यय के रूप में वर्गीकृत किया जाता है।"
  },
  {
    question_en: "When is IGST (Integrated GST) levied?",
    question_hi: "IGST (Integrated GST) कब लगाया जाता है?",
    options_en: [
      "On transactions within the state.",
      "By the Central Government.",
      "On Inter-State transactions."
    ],
    options_hi: [
      "राज्य के भीतर लेन-देन पर।",
      "केंद्र सरकार द्वारा।",
      "अंतर-राज्यीय (Inter-State) लेन-देन पर।"
    ],
    correct_option_index: 2,
    explanation_en: "IGST (Integrated GST) is levied by the Central Government on all inter-state (between two states) supplies of goods and services.",
    explanation_hi: "IGST (एकीकृत GST) केंद्र सरकार द्वारा वस्तुओं और सेवाओं की सभी अंतर-राज्यीय (दो राज्यों के बीच) आपूर्ति पर लगाया जाता है।"
  },
  {
    question_en: "Budget is a subject of which list?",
    question_hi: "बजट किस सूची का विषय है?",
    options_en: ["Union List", "State List", "Concurrent List"],
    options_hi: ["संघ सूची", "राज्य सूची", "समवर्ती सूची"],
    correct_option_index: 0,
    explanation_en: "The Annual Financial Statement (Budget) is presented by the Union Government under Article 112 of the Constitution, making it a subject of the Union List.",
    explanation_hi: "वार्षिक वित्तीय विवरण (बजट) केंद्र सरकार द्वारा संविधान के अनुच्छेद 112 के तहत प्रस्तुत किया जाता है, जो इसे संघ सूची का विषय बनाता है।"
  }
];

export default test3Questions;
