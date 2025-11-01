import type { QuizQuestion } from '../../../types';

const test4Questions: QuizQuestion[] = [
  {
    question_en: "According to the notes, who is included in the symbol (Emblem) of RBI?",
    question_hi: "नोट्स के अनुसार, RBI के प्रतीक चिन्ह (Symbol) में कौन शामिल है?",
    options_en: ["Lion and Peepal Tree", "Palm Tree + Bengal Tiger", "Ashoka Pillar and Lion"],
    options_hi: ["शेर और पीपल का पेड़", "ताड़ का पेड़ (Palm Tree) + बंगाल टाइगर", "अशोक स्तंभ और शेर"],
    correct_option_index: 1,
    explanation_en: "The emblem of the Reserve Bank of India (RBI) features a Bengal Tiger standing in front of a Palm Tree.",
    explanation_hi: "भारतीय रिजर्व बैंक (RBI) के प्रतीक चिन्ह में एक ताड़ के पेड़ के सामने खड़ा एक बंगाल टाइगर शामिल है।"
  },
  {
    question_en: "Under which act does the RBI regulate and control the banking system in India?",
    question_hi: "RBI किस अधिनियम के तहत भारत में बैंकिंग प्रणाली का विनियमन एवं नियंत्रण करता है?",
    options_en: ["RBI Act 1934", "SEBI Act 1992", "Banking Regulation Act 1949"],
    options_hi: ["RBI Act 1934", "SEBI Act 1992", "Banking Regulation Act 1949"],
    correct_option_index: 2,
    explanation_en: "While the RBI was established under the RBI Act, 1934, it derives its powers to regulate and control the banking system from the Banking Regulation Act, 1949.",
    explanation_hi: "यद्यपि RBI की स्थापना RBI अधिनियम, 1934 के तहत हुई थी, लेकिन इसे बैंकिंग प्रणाली को विनियमित और नियंत्रित करने की शक्तियाँ बैंकिंग विनियमन अधिनियम, 1949 से प्राप्त होती हैं।"
  },
  {
    question_en: "How many members are appointed by the Government of India to the RBI's Monetary Policy Committee (MPC)?",
    question_hi: "RBI की मौद्रिक नीति समिति (MPC) में भारत सरकार द्वारा कितने सदस्य नियुक्त किए जाते हैं?",
    options_en: ["2 members", "3 members", "4 members"],
    options_hi: ["2 सदस्य", "3 सदस्य", "4 सदस्य"],
    correct_option_index: 1,
    explanation_en: "The MPC has a total of 6 members. 3 members are from the RBI (Governor, Deputy Governor, and one officer), and the other 3 members are appointed by the Government of India.",
    explanation_hi: "मौद्रिक नीति समिति (MPC) में कुल 6 सदस्य होते हैं। 3 सदस्य RBI से होते हैं (गवर्नर, डिप्टी गवर्नर और एक अधिकारी), और अन्य 3 सदस्यों की नियुक्ति भारत सरकार द्वारा की जाती है।"
  },
  {
    question_en: "If RBI adopts an Easy Monetary Policy to tackle a recession, what effect will it have on interest rates?",
    question_hi: "यदि RBI अर्थव्यवस्था में मंदी (Recession) की समस्या से निपटने के लिए सरल मौद्रिक नीति (Easy Monetary Policy) अपनाता है, तो वह ब्याज दरों पर क्या प्रभाव डालेगा?",
    options_en: ["Interest rates will increase and liquidity will decrease.", "Interest rates will remain stable.", "Interest rates will be reduced, which will increase liquidity."],
    options_hi: ["ब्याज दरें बढ़ेंगी और तरलता घटेगी।", "ब्याज दरें स्थिर रहेंगी।", "ब्याज दरों में कमी की जाएगी, जिससे तरलता बढ़ेगी।"],
    correct_option_index: 2,
    explanation_en: "To combat a recession, the RBI uses an easy (or accommodative) monetary policy. It cuts interest rates (like the repo rate) to make loans cheaper, which encourages borrowing and spending, thereby increasing the money supply (liquidity) in the economy.",
    explanation_hi: "मंदी से निपटने के लिए, RBI एक सरल (या उदार) मौद्रिक नीति का उपयोग करता है। यह ब्याज दरों (जैसे रेपो दर) में कटौती करता है ताकि ऋण सस्ता हो सके, जो उधार लेने और खर्च करने को प्रोत्साहित करता है, जिससे अर्थव्यवस्था में धन की आपूर्ति (तरलता) बढ़ जाती है।"
  },
  {
    question_en: "What is the maximum tenor of the Repo Rate according to the notes?",
    question_hi: "रेपो दर (Repo Rate) की अधिकतम अवधि नोट्स के अनुसार कितनी होती है?",
    options_en: ["90 days", "365 days", "Maximum 14 days"],
    options_hi: ["90 दिन", "365 दिन", "अधिकतम 14 दिन"],
    correct_option_index: 1,
    explanation_en: "While overnight repo is most common, the RBI also conducts Long Term Repo Operations (LTROs) which can have tenors of one year (365 days) or even three years, providing longer-term liquidity.",
    explanation_hi: "हालांकि ओवरनाइट रेपो सबसे आम है, RBI लॉन्ग टर्म रेपो ऑपरेशंस (LTROs) भी आयोजित करता है, जिसकी अवधि एक वर्ष (365 दिन) या तीन साल भी हो सकती है, जो दीर्घकालिक तरलता प्रदान करता है।"
  },
  {
    question_en: "In OMO (Open Market Operations), when the RBI sells (Sale) government securities (G-Sec), what is its objective?",
    question_hi: "OMC (खुले बाज़ार की क्रियाओं) में जब RBI सरकारी प्रतिभूतियों (G-Sec) को बेचता (Sale) है, तो उसका उद्देश्य क्या होता है?",
    options_en: ["To increase liquidity in the market.", "To promote credit creation.", "To reduce/absorb excess liquidity from the market."],
    options_hi: ["बाज़ार में तरलता बढ़ाना।", "साख सृजन को बढ़ावा देना।", "बाज़ार में अतिरिक्त तरलता को कम करना/अवशोषित करना।"],
    correct_option_index: 2,
    explanation_en: "When the RBI sells G-Secs, banks buy them and pay the RBI. This moves money from the banks to the RBI, effectively 'sucking out' or absorbing excess liquidity from the market.",
    explanation_hi: "जब RBI जी-सेक (G-Sec) बेचता है, तो बैंक उन्हें खरीदते हैं और RBI को भुगतान करते हैं। इससे पैसा बैंकों से RBI के पास चला जाता है, जो प्रभावी रूप से बाजार से अतिरिक्त तरलता को 'सोख' लेता है या अवशोषित कर लेता है।"
  },
  {
    question_en: "Under the MSF (Marginal Standing Facility) rate, what is the maximum percentage of their total deposits (NDTL) that commercial banks can borrow from the RBI for an overnight period?",
    question_hi: "MSF (Marginal Standing Facility) दर के तहत वाणिज्यिक बैंक अपनी कुल जमा (NDTL) का अधिकतम कितना प्रतिशत ऋण एक रात की अवधि के लिए RBI से ले सकते हैं?",
    options_en: ["2%", "0.5%", "Up to 1%"],
    options_hi: ["2%", "0.5%", "1% तक"],
    correct_option_index: 0,
    explanation_en: "Banks can borrow funds overnight from the RBI under the MSF. The limit for this borrowing is typically set as a percentage of their Net Demand and Time Liabilities (NDTL), which is currently 2%.",
    explanation_hi: "बैंक MSF के तहत RBI से रातों-रात धन उधार ले सकते हैं। इस उधार की सीमा आमतौर पर उनकी शुद्ध मांग और समय देयताओं (NDTL) के प्रतिशत के रूप में निर्धारित की जाती है, जो वर्तमान में 2% है।"
  },
  {
    question_en: "What does the qualitative tool 'Marginal Requirement' determine?",
    question_hi: "सींमात आवश्यकता (Marginal Requirement) गुणात्मक उपकरण के अंतर्गत क्या निर्धारित करता है?",
    options_en: ["Limit of total deposits.", "Difference in interest rate.", "The value of the collateral property is more than the sanctioned loan."],
    options_hi: ["कुल जमा की सीमा।", "ब्याज दर का अंतर।", "जमानत संपत्ति का मूल्य, स्वीकृत ऋण से अधिक होता है।"],
    correct_option_index: 2,
    explanation_en: "Marginal Requirement is the difference between the market value of the collateral (security) and the amount of the loan sanctioned. For example, if the margin is 20%, a loan of ₹80 is given against a collateral of ₹100.",
    explanation_hi: "सीमांत आवश्यकता (Marginal Requirement) का अर्थ है जमानत (संपत्ति) के बाजार मूल्य और स्वीकृत ऋण की राशि के बीच का अंतर। उदाहरण के लिए, यदि मार्जिन 20% है, तो ₹100 की जमानत पर ₹80 का ऋण दिया जाता है।"
  },
  {
    question_en: "In relation to a bank, what is formed by combining Demand Deposit (DD) and Time Deposit (TD)?",
    question_hi: "बैंक के संबंध में, मांग जमा (Demand Deposit - DD) और समय जमा (Time Deposit - TD) को मिलाकर क्या बनता है?",
    options_en: ["NDTL", "IBL", "GDTL (Gross Demand & Time Liabilities)"],
    options_hi: ["NDTL", "IBL", "GDTL (Gross Demand & Time Liabilities)"],
    correct_option_index: 2,
    explanation_en: "GDTL (Gross Demand and Time Liabilities) is the sum of a bank's total demand deposits and time deposits. NDTL (Net DTL) is calculated after subtracting inter-bank liabilities from GDTL.",
    explanation_hi: "GDTL (सकल मांग और सावधि देयताएं) एक बैंक की कुल मांग जमा और सावधि जमा का योग है। NDTL (शुद्ध DTL) की गणना GDTL में से अंतर-बैंक देनदारियों को घटाने के बाद की जाती है।"
  },
  {
    question_en: "In the second phase of nationalization (15 April 1980), how many banks were nationalized and what was the minimum capital limit at that time?",
    question_hi: "दूसरे चरण के राष्ट्रीयकरण (15 अप्रैल 1980) में कितने बैंकों का राष्ट्रीयकरण हुआ और उस समय न्यूनतम पूंजी की सीमा क्या थी?",
    options_en: ["14 banks, ₹50 crore", "14 banks, ₹200 crore", "6 banks, ₹200 crore"],
    options_hi: ["14 बैंक, ₹50 करोड़", "14 बैंक, ₹200 करोड़", "6 बैंक, ₹200 करोड़"],
    correct_option_index: 2,
    explanation_en: "On April 15, 1980, in the second phase of nationalization, 6 banks with deposits of ₹200 crore or more were nationalized. (The first phase in 1969 involved 14 banks with deposits of ₹50 crore or more).",
    explanation_hi: "15 अप्रैल 1980 को, राष्ट्रीयकरण के दूसरे चरण में, ₹200 करोड़ या उससे अधिक की जमा राशि वाले 6 बैंकों का राष्ट्रीयकरण किया गया। (1969 में पहले चरण में ₹50 करोड़ या उससे अधिक जमा वाले 14 बैंक शामिल थे)।"
  },
  {
    question_en: "In which year and where was Punjab National Bank (PNB) established?",
    question_hi: "पंजाब नेशनल बैंक (PNB) की स्थापना किस वर्ष और कहाँ हुई थी?",
    options_en: ["1906, Mumbai", "1911, Mumbai", "1894, New Delhi"],
    options_hi: ["1906, मुंबई", "1911, मुंबई", "1894, नई दिल्ली"],
    correct_option_index: 2,
    explanation_en: "Punjab National Bank (PNB) was established in 1894. Although it was originally founded in Lahore (now in Pakistan), its headquarters were moved to New Delhi after partition. This option correctly identifies the establishment year.",
    explanation_hi: "पंजाब नेशनल बैंक (PNB) की स्थापना 1894 में हुई थी। हालाँकि इसकी स्थापना मूल रूप से लाहौर (अब पाकिस्तान में) में हुई थी, लेकिन विभाजन के बाद इसका मुख्यालय नई दिल्ली स्थानांतरित कर दिया गया था। यह विकल्प स्थापना वर्ष को सही ढंग से पहचानता है।"
  },
  {
    question_en: "According to the notes, with which bank was Allahabad Bank merged?",
    question_hi: "नोट्स के अनुसार, इलाहाबाद बैंक (Allahabad Bank) का विलय किस बैंक के साथ हुआ था?",
    options_en: ["Canara Bank", "Bank of Baroda", "Indian Bank"],
    options_hi: ["केनरा बैंक", "बैंक ऑफ बड़ौदा", "इंडियन बैंक"],
    correct_option_index: 2,
    explanation_en: "As part of the major bank mergers effective from April 1, 2020, Allahabad Bank was merged with Indian Bank.",
    explanation_hi: "1 अप्रैल, 2020 से प्रभावी प्रमुख बैंक विलय के हिस्से के रूप में, इलाहाबाद बैंक का विलय इंडियन बैंक के साथ कर दिया गया।"
  },
  {
    question_en: "When was IDBI (Industrial Development Bank of India) established and what is its main function?",
    question_hi: "IDBI (Industrial Development Bank of India) की स्थापना कब हुई थी और इसका मुख्य कार्य क्या है?",
    options_en: ["1982, Agri finance", "1964, Industrial development", "1990, Small industries"],
    options_hi: ["1982, कृषि वित्त", "1964, औद्योगिक विकास", "1990, लघु उद्योग"],
    correct_option_index: 1,
    explanation_en: "IDBI was established in 1964 as a financial institution to provide credit and other facilities for the development of industries in India. (1982 is for NABARD, and 1990 is for SIDBI).",
    explanation_hi: "IDBI की स्थापना 1964 में भारत में उद्योगों के विकास के लिए ऋण और अन्य सुविधाएं प्रदान करने के लिए एक वित्तीय संस्थान के रूप में की गई थी। (1982 NABARD के लिए है, और 1990 SIDBI के लिए है)।"
  },
  {
    question_en: "When was the ordinance for the establishment of RRBs (Regional Rural Banks) issued?",
    question_hi: "RRB (क्षेत्रीय ग्रामीण बैंक) की स्थापना के लिए अध्यादेश (Ordinance) कब जारी किया गया था?",
    options_en: ["2 October 1975", "1976", "26 September 1975"],
    options_hi: ["2 अक्टूबर 1975", "1976", "26 सितंबर 1975"],
    correct_option_index: 2,
    explanation_en: "The ordinance for the establishment of RRBs was promulgated on 26th September 1975. The first RRBs were then established shortly after, on 2nd October 1975.",
    explanation_hi: "RRB की स्थापना के लिए अध्यादेश 26 सितंबर 1975 को जारी किया गया था। इसके तुरंत बाद 2 अक्टूबर 1975 को पहले RRB की स्थापना की गई।"
  },
  {
    question_en: "What were the target and achievement (respectively) of the First Five Year Plan (1951-56)?",
    question_hi: "पहली पंचवर्षीय योजना (1951-56) का लक्ष्य (Target) और प्राप्ति (Achieve) क्रमशः क्या था?",
    options_en: ["Target 4.5%, Achieve 4.34%", "Target 5.7%, Achieve 3.3%", "Target 2.1%, Achieve 3.6%"],
    options_hi: ["लक्ष्य 4.5%, प्राप्ति 4.34%", "लक्ष्य 5.7%, प्राप्ति 3.3%", "लक्ष्य 2.1%, प्राप्ति 3.6%"],
    correct_option_index: 2,
    explanation_en: "The First Five Year Plan had a target growth rate of 2.1% but was highly successful, achieving an actual growth rate of 3.6%.",
    explanation_hi: "पहली पंचवर्षीय योजना में 2.1% की लक्ष्य वृद्धि दर थी, लेकिन यह अत्यधिक सफल रही, जिसने 3.6% की वास्तविक वृद्धि दर हासिल की।"
  },
  {
    question_en: "On which river is the Bhakhra Nangal Project located, and what did Jawaharlal Nehru call it?",
    question_hi: "भाखड़ा नागल परियोजना (Bhakhra Nangal Project) किस नदी पर है और इसे जवाहर लाल नेहरू ने क्या कहा था?",
    options_en: ["Damodar River, Symbol of Industrial India", "Mahanadi, Symbol of Modern India", "Sutlej River, Temple of Modern India"],
    options_hi: ["दामोदर नदी, औद्योगिक भारत का प्रतीक", "महानदी, आधुनिक भारत का प्रतीक", "सतलुज नदी, आधुनिक भारत का मंदिर"],
    correct_option_index: 2,
    explanation_en: "The Bhakhra Nangal Project is a major multipurpose project on the Sutlej River. Jawaharlal Nehru famously referred to it as one of the 'Temples of Modern India'.",
    explanation_hi: "भाखड़ा नागल परियोजना सतलुज नदी पर एक प्रमुख बहुउद्देशीय परियोजना है। जवाहरलाल नेहरू ने प्रसिद्ध रूप से इसे 'आधुनिक भारत का मंदिर' कहा था।"
  },
  {
    question_en: "Why is P.C. Mahalanobis, the model-maker of the Second Five Year Plan (1956-61), called the 'Father of Modern Statistics'?",
    question_hi: "दूसरी पंचवर्षीय योजना (1956-61) के मॉडल पी.सी. महालनोबिस को 'आधुनिक सांख्यिकी का जनक' क्यों कहा जाता है?",
    options_en: ["He calculated national income.", "He started Indian Statistics Day (29 June).", "He established the Indian Statistical Institute (ISI), Calcutta."],
    options_hi: ["उन्होंने राष्ट्रीय आय की गणना की।", "उन्होंने भारतीय सांख्यिकी दिवस (29 जून) की शुरुआत की।", "उन्होंने भारतीय सांख्यिकी संस्थान (ISI), कलकत्ता की स्थापना की थी।"],
    correct_option_index: 2,
    explanation_en: "P.C. Mahalanobis is called the 'Father of Modern Statistics' in India primarily because he founded the Indian Statistical Institute (ISI) in Calcutta in 1931, a pioneering institution for statistical research and training.",
    explanation_hi: "पी.सी. महालनोबिस को भारत में 'आधुनिक सांख्यिकी का जनक' मुख्य रूप से इसलिए कहा जाता है क्योंकि उन्होंने 1931 में कलकत्ता में भारतीय सांख्यिकी संस्थान (ISI) की स्थापना की थी, जो सांख्यिकीय अनुसंधान और प्रशिक्षण के लिए एक अग्रणी संस्थान था।"
  },
  {
    question_en: "Which country collaborated in the establishment of the Rourkela (Odisha) Iron and Steel Industry?",
    question_hi: "राउरकेला (ओडिशा) लौह इस्पात उद्योग की स्थापना में किस देश का सहयोग मिला था?",
    options_en: ["Russia", "Britain", "Germany"],
    options_hi: ["रूस", "ब्रिटेन", "जर्मनी"],
    correct_option_index: 2,
    explanation_en: "The Rourkela Steel Plant was set up during the Second Five Year Plan with collaboration from West Germany (now Germany). (Russia collaborated for Bhilai, and Britain for Durgapur).",
    explanation_hi: "राउरकेला स्टील प्लांट की स्थापना दूसरी पंचवर्षीय योजना के दौरान पश्चिम जर्मनी (अब जर्मनी) के सहयोग से की गई थी। (रूस ने भिलाई के लिए और ब्रिटेन ने दुर्गापुर के लिए सहयोग किया)।"
  },
  {
    question_en: "The Fourth Five Year Plan (1969-74) was based on the Gadgil formula, and what other model is it known by?",
    question_hi: "चौथी पंचवर्षीय योजना (1969-74) गाडगिल फॉर्मूले पर आधारित थी, और इसे और किस मॉडल के नाम से जाना जाता था?",
    options_en: ["Mahalanobis Model", "D.P. Dhar Model", "Ashok Rudra & Alan Manne Model"],
    options_hi: ["महालनोबिस मॉडल", "डी.पी. धर मॉडल", "अशोक रुद्र एवं एलन मात्रे मॉडल"],
    correct_option_index: 2,
    explanation_en: "The Fourth Five Year Plan was based on the Gadgil Formula and is also associated with the A.S. Manne and Ashok Rudra model, which was an open-consistency model for the Indian economy.",
    explanation_hi: "चौथी पंचवर्षीय योजना गाडगिल फॉर्मूले पर आधारित थी और यह ए.एस. मात्रे और अशोक रुद्र मॉडल से भी जुड़ी है, जो भारतीय अर्थव्यवस्था के लिए एक ओपन-कंसिस्टेंसी मॉडल था।"
  },
  {
    question_en: "During which plan was the Minimum Needs Programme (MNP) introduced?",
    question_hi: "न्यूनतम आवश्यकता कार्यक्रम (Minimum Needs Programme) किस योजना के दौरान शुरू किया गया था?",
    options_en: ["Fourth Five Year Plan", "Fifth Five Year Plan (1974-78)", "Sixth Five Year Plan"],
    options_hi: ["चौथी पंचवर्षीय योजना", "पाँचवीं पंचवर्षीय योजना (1974-78)", "छठी पंचवर्षीय योजना"],
    correct_option_index: 1,
    explanation_en: "The Minimum Needs Programme (MNP) was introduced in the Fifth Five Year Plan (1974-78) with the objective of providing basic minimum needs to the people.",
    explanation_hi: "न्यूनतम आवश्यकता कार्यक्रम (MNP) पाँचवीं पंचवर्षीय योजना (1974-78) में लोगों को बुनियादी न्यूनतम ज़रूरतें प्रदान करने के उद्देश्य से शुरू किया गया था।"
  },
  {
    question_en: "What was the priority of the Sixth Five Year Plan (1980-85)?",
    question_hi: "छठी पंचवर्षीय योजना (1980-85) की प्राथमिकता क्या थी?",
    options_en: ["To reduce poverty and unemployment.", "Development of heavy industries.", "Inclusive growth."],
    options_hi: ["गरीबी और रोज़गार में कमी लाना।", "भारी उद्योगों का विकास।", "समावेशी विकास।"],
    correct_option_index: 0,
    explanation_en: "The Sixth Five Year Plan (1980-85) had the main objective of 'Garibi Hatao' (Poverty Eradication) and focused heavily on reducing poverty and generating employment.",
    explanation_hi: "छठी पंचवर्षीय योजना (1980-85) का मुख्य उद्देश्य 'गरीबी हटाओ' (गरीबी उन्मूलन) था और इसने गरीबी कम करने और रोजगार पैदा करने पर भारी ध्यान केंद्रित किया।"
  },
  {
    question_en: "During which Five Year Plan was IRDA (Insurance Regulatory and Development Authority) established (1999)?",
    question_hi: "इरादा (IRDA) की स्थापना (1999) किस पंचवर्षीय योजना के दौरान हुई थी?",
    options_en: ["Eighth Five Year Plan", "Ninth Five Year Plan (1997-2002)", "Tenth Five Year Plan"],
    options_hi: ["आठवीं पंचवर्षीय योजना", "नौवीं पंचवर्षीय योजना (1997-2002)", "दसवीं पंचवर्षीय योजना"],
    correct_option_index: 1,
    explanation_en: "The IRDA was established in 1999, which falls within the period of the Ninth Five Year Plan (1997-2002).",
    explanation_hi: "IRDA की स्थापना 1999 में हुई थी, जो नौवीं पंचवर्षीय योजना (1997-2002) की अवधि के अंतर्गत आती है।"
  },
  {
    question_en: "During which Five Year Plan was the Right to Information (RTI) Act (2005) implemented?",
    question_hi: "सूचना का अधिकार (RTI) अधिनियम (2005) किस पंचवर्षीय योजना के दौरान लागू हुआ था?",
    options_en: ["Ninth Five Year Plan", "Tenth Five Year Plan (2002-07)", "Eleventh Five Year Plan"],
    options_hi: ["नौवीं पंचवर्षीय योजना", "दसवीं पंचवर्षीय योजना (2002-07)", "ग्यारहवीं पंचवर्षीय योजना"],
    correct_option_index: 1,
    explanation_en: "The RTI Act was passed and implemented in 2005, which falls within the period of the Tenth Five Year Plan (2002-2007).",
    explanation_hi: "RTI अधिनियम 2005 में पारित और लागू किया गया था, जो दसवीं पंचवर्षीय योजना (2002-2007) की अवधि के अंतर्गत आता है।"
  },
  {
    question_en: "During which Five Year Plan was the NFSA, 2013 (National Food Security Act) implemented?",
    question_hi: "NFSA, 2013 (राष्ट्रीय खाद्य सुरक्षा अधिनियम) किस पंचवर्षीय योजना के दौरान लागू हुआ?",
    options_en: ["10th Plan", "11th Plan", "12th Five Year Plan (2012-17)"],
    options_hi: ["10वीं योजना", "11वीं योजना", "12वीं पंचवर्षीय योजना (2012-17)"],
    correct_option_index: 2,
    explanation_en: "The National Food Security Act (NFSA) was enacted in 2013, which falls within the period of the Twelfth Five Year Plan (2012-2017).",
    explanation_hi: "राष्ट्रीय खाद्य सुरक्षा अधिनियम (NFSA) 2013 में लागू किया गया था, जो बारहवीं पंचवर्षीय योजना (2012-2017) की अवधि के अंतर्गत आता है।"
  },
  {
    question_en: "Who made the first scientific estimate of national income (1931)?",
    question_hi: "राष्ट्रीय आय का सर्वप्रथम वैज्ञानिक अनुमान (1931) किसने लगाया था?",
    options_en: ["Dadabhai Naoroji", "P.C. Mahalanobis", "Dr. V.K.R.V. Rao"],
    options_hi: ["दादा भाई नौरोजी", "पी.सी. महालनोबिस", "डॉ. वी.के.आर.वी. राव"],
    correct_option_index: 2,
    explanation_en: "The first scientific estimate of India's national income was made by Dr. V.K.R.V. Rao for the year 1931-32. Dadabhai Naoroji made the first estimate, but it was not considered scientific.",
    explanation_hi: "भारत की राष्ट्रीय आय का पहला वैज्ञानिक अनुमान डॉ. वी.के.आर.वी. राव द्वारा वर्ष 1931-32 के लिए लगाया गया था। दादा भाई नौरोजी ने पहला अनुमान लगाया था, लेकिन इसे वैज्ञानिक नहीं माना गया।"
  },
  {
    question_en: "What is the financial year of the Government of India?",
    question_hi: "भारत सरकार का वित्तीय वर्ष (Financial Year) कब से कब तक होता है?",
    options_en: ["1 January to 31 December", "1 July to 30 June", "1 April to 31 March"],
    options_hi: ["1 जनवरी से 31 दिसंबर", "1 जुलाई से 30 जून", "1 अप्रैल से 31 मार्च"],
    correct_option_index: 2,
    explanation_en: "The financial year (or fiscal year) for the Government of India begins on 1st April and ends on 31st March of the following calendar year.",
    explanation_hi: "भारत सरकार के लिए वित्तीय वर्ष (या राजकोषीय वर्ष) 1 अप्रैल को शुरू होता है और अगले कैलेंडर वर्ष के 31 मार्च को समाप्त होता है।"
  },
  {
    question_en: "How many factors of production are included in the Factor Income Method?",
    question_hi: "कारक आय विधि (Factor Income Method) में उत्पादन के कितने कारक शामिल होते हैं?",
    options_en: ["3", "4 (Land, Labour, Capital, Entrepreneur)", "5"],
    options_hi: ["3", "4 (भूमि, श्रम, पूंजी, उद्यमी)", "5"],
    correct_option_index: 1,
    explanation_en: "The Factor Income Method calculates national income by summing the incomes received by the four factors of production: Land (gets rent), Labour (gets wages), Capital (gets interest), and Entrepreneur (gets profit).",
    explanation_hi: "कारक आय विधि उत्पादन के चार कारकों द्वारा प्राप्त आय को जोड़कर राष्ट्रीय आय की गणना करती है: भूमि (लगान मिलता है), श्रम (मजदूरी मिलती है), पूंजी (ब्याज मिलता है), और उद्यमी (लाभ मिलता है)।"
  },
  {
    question_en: "How is Net Domestic Product (NDP) calculated?",
    question_hi: "शुद्ध घरेलू उत्पाद (NDP) की गणना कैसे की जाती है?",
    options_en: ["NDP = GDP + Depreciation", "NDP = GDP - Depreciation", "NDP = GNP + Depreciation"],
    options_hi: ["NDP = GDP + मूल्य ह्रास", "NDP = GDP - मूल्य ह्रास", "NDP = GNP + मूल्य ह्रास"],
    correct_option_index: 1,
    explanation_en: "Net Domestic Product (NDP) is calculated by subtracting depreciation (consumption of fixed capital) from the Gross Domestic Product (GDP). It represents the net value of production.",
    explanation_hi: "शुद्ध घरेलू उत्पाद (NDP) की गणना सकल घरेलू उत्पाद (GDP) में से मूल्यह्रास (अचल पूंजी की खपत) को घटाकर की जाती है। यह उत्पादन के शुद्ध मूल्य को दर्शाता है।"
  },
  {
    question_en: "Which of the following items is not included in the calculation of national income?",
    question_hi: "निम्नलिखित में से कौन सी मद राष्ट्रीय आय की गणना में शामिल नहीं की जाती है?",
    options_en: ["Pocket Money", "Salary", "Rent"],
    options_hi: ["पॉकेट मनी", "वेतन", "किराया"],
    correct_option_index: 0,
    explanation_en: "Pocket money is a 'transfer payment' (income transferred without any productive service in return). It is not an 'earned income'. Salary (for labour) and Rent (for land) are factor incomes and are included in national income.",
    explanation_hi: "पॉकेट मनी एक 'हस्तांतरण भुगतान' है (बिना किसी उत्पादक सेवा के हस्तांतरित आय)। यह 'अर्जित आय' नहीं है। वेतन (श्रम के लिए) और किराया (भूमि के लिए) कारक आय हैं और राष्ट्रीय आय में शामिल हैं।"
  },
  {
    question_en: "What is the correct formula for the GDP Deflator?",
    question_hi: "GDP अपस्फीतिकारक (Deflator) का सही सूत्र क्या है?",
    options_en: ["(Real GDP / Nominal GDP) x 100", "(GNP / GDP) x 100", "(Nominal GDP / Real GDP) x 100"],
    options_hi: ["(Real GDP / Nominal GDP) x 100", "(GNP / GDP) x 100", "(Nominal GDP / Real GDP) x 100"],
    correct_option_index: 2,
    explanation_en: "The GDP Deflator is a measure of the price level. It is calculated as the ratio of Nominal GDP (at current prices) to Real GDP (at constant/base prices), multiplied by 100.",
    explanation_hi: "जीडीपी डिफ्लेटर मूल्य स्तर का एक माप है। इसकी गणना नॉमिनल जीडीपी (मौजूदा कीमतों पर) और रियल जीडीपी (स्थिर/आधार कीमतों पर) के अनुपात को 100 से गुणा करके की जाती है।"
  },
  {
    question_en: "The word 'Budget' is derived from which French word, meaning 'leather bag'?",
    question_hi: "बजट शब्द किस फ्रांसीसी शब्द से बना है, जिसका अर्थ 'चमड़े का थैला' है?",
    options_en: ["Fiscal", "Surplus", "Deficit"],
    options_hi: ["फिस्कल", "सरप्लस", "डेफिसिट"],
    correct_option_index: 0,
    explanation_en: "Note: None of the options are correct. The word 'Budget' comes from the Old French word 'Bougette', which means a small leather bag. The terms 'Fiscal', 'Surplus', and 'Deficit' are all related to the budget but are not its etymological origin.",
    explanation_hi: "नोट: कोई भी विकल्प सही नहीं है। 'बजट' शब्द पुरानी फ्रांसीसी शब्द 'Bougette' (बूजेट) से आया है, जिसका अर्थ है 'चमड़े का छोटा थैला'। 'फिस्कल', 'सरप्लस', और 'डेफिसिट' सभी बजट से संबंधित शब्द हैं, लेकिन वे इसकी व्युत्पत्ति (etymological origin) नहीं हैं।"
  },
  {
    question_en: "Who is called the 'Father of the Indian Budget'?",
    question_hi: "भारतीय बजट का जनक (Father of Indian Budget) किसे कहा जाता है?",
    options_en: ["R.K. Shanmukham Chetty", "John Mathai", "James Wilson (1860)"],
    options_hi: ["आर.के. षणमुखम चेट्टी", "जॉन मथाई", "जेम्स विल्सन (1860)"],
    correct_option_index: 2,
    explanation_en: "James Wilson presented the first-ever budget for India in 1860 during the British Raj. He is widely regarded as the 'Father of the Indian Budget'. R.K. Shanmukham Chetty presented the first budget of independent India.",
    explanation_hi: "जेम्स विल्सन ने 1860 में ब्रिटिश राज के दौरान भारत के लिए पहला बजट पेश किया था। उन्हें 'भारतीय बजट का जनक' माना जाता है। आर.के. षणमुखम चेट्टी ने स्वतंत्र भारत का पहला बजट पेश किया था।"
  },
  {
    question_en: "What is Capital Expenditure?",
    question_hi: "पूंजीगत व्यय (Capital Expenditure) क्या है?",
    options_en: ["An expense that reduces assets.", "An expense that increases debt.", "An expense that increases assets or reduces liabilities."],
    options_hi: ["वह खर्च जिससे संपत्ति में कमी हो।", "वह खर्च जिससे कर्ज बढ़ता हो।", "वह खर्च जिससे संपत्ति में वृद्धि हो या कर्ज में कमी आए।"],
    correct_option_index: 2,
    explanation_en: "Capital Expenditure (CapEx) is the money spent by the government on the creation of long-term assets (like roads, bridges, hospitals) or on the reduction of liabilities (like loan repayments).",
    explanation_hi: "पूंजीगत व्यय (CapEx) वह धन है जो सरकार द्वारा दीर्घकालिक संपत्ति (जैसे सड़क, पुल, अस्पताल) के निर्माण पर या देनदारियों (जैसे ऋण चुकौती) को कम करने पर खर्च किया जाता है।"
  },
  {
    question_en: "When does a Revenue Deficit occur?",
    question_hi: "राजस्व घाटा (Revenue Deficit) की स्थिति कब उत्पन्न होती है?",
    options_en: ["When total expenditure is more than total income.", "When the primary deficit is zero.", "When Revenue Expenditure (RE) is more than Revenue Income (RI) (RE > RI)."],
    options_hi: ["जब कुल व्यय कुल आय से अधिक हो।", "जब प्राथमिक घाटा शून्य हो।", "जब राजस्व व्यय (RE) राजस्व आय (RI) से अधिक हो (RE > RI)।"],
    correct_option_index: 2,
    explanation_en: "A Revenue Deficit is the situation where the government's total Revenue Expenditure (spending on day-to-day functions) exceeds its total Revenue Income (from taxes and other non-debt sources).",
    explanation_hi: "राजस्व घाटा वह स्थिति है जब सरकार का कुल राजस्व व्यय (दिन-प्रतिदिन के कार्यों पर खर्च) उसकी कुल राजस्व आय (करों और अन्य गैर-ऋण स्रोतों से) से अधिक हो जाता है।"
  },
  {
    question_en: "What is the meaning of Monetary Deficit (or Monetised Deficit)?",
    question_hi: "मौद्रिक घाटा (Monetary Deficit) का अर्थ क्या है?",
    options_en: ["Total borrowing of the government.", "Adding interest payments to the primary deficit.", "Borrowing from the RBI."],
    options_hi: ["सरकार की कुल उधारी।", "प्राथमिक घाटे में ब्याज भुगतान जोड़ना।", "RBI से लिया गया उधार।"],
    correct_option_index: 2,
    explanation_en: "Monetised Deficit refers to that part of the government's fiscal deficit which is financed by borrowing directly from the Reserve Bank of India (RBI). This practice was discontinued in India in 1997.",
    explanation_hi: "मौद्रिक घाटा सरकार के राजकोषीय घाटे के उस हिस्से को संदर्भित करता है जिसे सीधे भारतीय रिजर्व बैंक (RBI) से उधार लेकर वित्तपोषित किया जाता है। भारत में 1997 में इस प्रथा को बंद कर दिया गया था।"
  },
  {
    question_en: "In the Money Market, what is the maximum period for which finance is transacted?",
    question_hi: "मुद्रा बाजार (Money Market) में वित्त का लेन-देन अधिकतम कितनी अवधि के लिए होता है?",
    options_en: ["More than one year", "Up to 10 years", "365 days or less"],
    options_hi: ["एक वर्ष से अधिक", "10 वर्ष तक", "365 दिन या उससे कम"],
    correct_option_index: 2,
    explanation_en: "The Money Market deals with short-term borrowing and lending of funds, with instruments that have a maturity period of one year (365 days) or less.",
    explanation_hi: "मुद्रा बाजार धन के अल्पकालिक उधार और उधार से संबंधित है, जिसमें ऐसे उपकरण होते हैं जिनकी परिपक्वता अवधि एक वर्ष (365 दिन) या उससे कम होती है।"
  },
  {
    question_en: "What is the main characteristic of the Primary Capital Market?",
    question_hi: "प्राथमिक पूंजी बाजार (Primary Capital Market) की मुख्य पहचान क्या है?",
    options_en: ["Share transactions happen between investors.", "There is a direct relationship between the company and the investor.", "FPO transactions occur."],
    options_hi: ["शेयर का लेन-देन निवेशकों के मध्य होता है।", "इसमें कंपनी और निवेशक के मध्य सीधा संबंध होता है।", "इसमें FPO का लेन-देन होता है।"],
    correct_option_index: 1,
    explanation_en: "The Primary Market is where securities (like shares) are sold for the first time (e.g., IPO). This involves a direct transaction where the company issues shares and investors buy them directly from the company.",
    explanation_hi: "प्राथमिक बाजार वह जगह है जहाँ प्रतिभूतियों (जैसे शेयर) को पहली बार बेचा जाता है (जैसे, IPO)। इसमें एक सीधा लेन-देन शामिल होता है जहाँ कंपनी शेयर जारी करती है और निवेशक उन्हें सीधे कंपनी से खरीदते हैं।"
  },
  {
    question_en: "In the capital market, what kind of investor does the term 'Bear' refer to?",
    question_hi: "'बियर' (Bear - मंदड़िया) शब्द पूंजी बाजार में किस निवेशक को संदर्भित करता है?",
    options_en: ["Those who expect share prices to rise.", "Those investors who expect share prices to fall.", "Those who only issue FPOs."],
    options_hi: ["वे जो शेयर की कीमतों में वृद्धि की आशा करते हैं।", "वे निवेशक जो शेयर की कीमतों में कमी की आशा करते हैं।", "वे जो केवल FPO जारी करते हैं।"],
    correct_option_index: 1,
    explanation_en: "A 'Bear' (मंदड़िया) is an investor who has a pessimistic outlook and expects share prices to go down. (The opposite is a 'Bull' or तेजड़िया, who expects prices to rise).",
    explanation_hi: "एक 'बियर' (मंदड़िया) एक ऐसा निवेशक होता है जो निराशावादी दृष्टिकोण रखता है और शेयर की कीमतों में गिरावट की उम्मीद करता है। (इसका विपरीत 'बुल' या तेजड़िया होता है, जो कीमतों में वृद्धि की उम्मीद करता है)।"
  },
  {
    question_en: "On the recommendation of which committee was the NSE (National Stock Exchange) established?",
    question_hi: "NSE (नेशनल स्टॉक एक्सचेंज) की स्थापना किस समिति की सिफारिश पर हुई थी?",
    options_en: ["Narasimhan Committee", "Sivaraman Committee", "Pherwani Committee (1992)"],
    options_hi: ["नरसिम्हन समिति", "शिवरामन समिति", "फेरवनी समिति (1992)"],
    correct_option_index: 2,
    explanation_en: "The National Stock Exchange (NSE) was established in 1992 based on the recommendations of the Pherwani Committee.",
    explanation_hi: "नेशनल स्टॉक एक्सचेंज (NSE) की स्थापना 1992 में फेरवनी समिति की सिफारिशों के आधार पर की गई थी।"
  },
  {
    question_en: "What is the main function of SEBI?",
    question_hi: "SEBI का मुख्य कार्य क्या है?",
    options_en: ["To appoint the RBI Governor.", "To stop insider trading.", "To determine monetary policy."],
    options_hi: ["RBI गवर्नर की नियुक्ति करना।", "इनसाइडर ट्रेडिंग पर रोक लगाना।", "मौद्रिक नीति का निर्धारण करना।"],
    correct_option_index: 1,
    explanation_en: "SEBI (Securities and Exchange Board of India) is the regulator of the securities market. One of its key functions is to protect investors and prohibit fraudulent and unfair trade practices, such as insider trading.",
    explanation_hi: "SEBI (भारतीय प्रतिभूति और विनिमय बोर्ड) प्रतिभूति बाजार का नियामक है। इसका एक प्रमुख कार्य निवेशकों की रक्षा करना और इनसाइडर ट्रेडिंग जैसी धोखाधड़ी और अनुचित व्यापार प्रथाओं को रोकना है।"
  },
  {
    question_en: "Who was the first chairman of the GST Council?",
    question_hi: "GST परिषद के पहले अध्यक्ष कौन थे?",
    options_en: ["Nirmala Sitharaman", "Manmohan Singh", "Arun Jaitley"],
    options_hi: ["निर्मला सीतारमण", "मनमोहन सिंह", "अरुण जेटली"],
    correct_option_index: 2,
    explanation_en: "The GST Council is chaired by the Union Finance Minister. When GST was implemented in 2017, Arun Jaitley was the Union Finance Minister and thus became the first chairman of the GST Council.",
    explanation_hi: "GST परिषद की अध्यक्षता केंद्रीय वित्त मंत्री करते हैं। जब 2017 में GST लागू किया गया था, तब अरुण जेटली केंद्रीय वित्त मंत्री थे और इस प्रकार वे GST परिषद के पहले अध्यक्ष बने।"
  },
  {
    question_en: "How many components (Types) of GST are mentioned in the notes?",
    question_hi: "GST के कितने घटक (Types) नोट्स में बताए गए हैं?",
    options_en: ["2 (CGST, SGST)", "3 (CGST, SGST, IGST)", "4 (CGST, SGST, UTGST, IGST)"],
    options_hi: ["2 (CGST, SGST)", "3 (CGST, SGST, IGST)", "4 (CGST, SGST, UTGST, IGST)"],
    correct_option_index: 2,
    explanation_en: "There are four main components of GST in India: CGST (Central GST), SGST (State GST), UTGST (Union Territory GST - which replaces SGST in UTs), and IGST (Integrated GST).",
    explanation_hi: "भारत में GST के चार मुख्य घटक हैं: CGST (केंद्रीय GST), SGST (राज्य GST), UTGST (केंद्र शासित प्रदेश GST - जो केंद्र शासित प्रदेशों में SGST की जगह लेता है), और IGST (एकीकृत GST)।"
  },
  {
    question_en: "On what is UTGST (Union Territory GST) applied?",
    question_hi: "UTGST (Union Territory GST) किस पर लागू होता है?",
    options_en: ["On trade between two states.", "On goods controlled by the central government.", "On transactions happening within Union Territories."],
    options_hi: ["दो राज्यों के बीच व्यापार पर।", "केंद्र सरकार द्वारा नियंत्रित वस्तुओं पर।", "केंद्र शासित प्रदेशों (Union Territories) में होने वाले लेन-देन पर।"],
    correct_option_index: 2,
    explanation_en: "UTGST is levied on intra-UT transactions (supply of goods and services within a Union Territory) in UTs that do not have their own state legislature, such as Chandigarh, Ladakh, etc. It is collected in place of SGST.",
    explanation_hi: "UTGST उन केंद्र शासित प्रदेशों (जैसे चंडीगढ़, लद्दाख, आदि) के भीतर होने वाले लेन-देन (माल और सेवाओं की आपूर्ति) पर लगाया जाता है, जिनकी अपनी राज्य विधायिका नहीं है। यह SGST के स्थान पर एकत्र किया जाता है।"
  },
  {
    question_en: "Which model has India adopted for GST?",
    question_hi: "भारत ने GST के लिए किस मॉडल को अपनाया है?",
    options_en: ["French Model", "British Model", "Canadian Model"],
    options_hi: ["फ्रेंच मॉडल", "ब्रिटिश मॉडल", "कैनेडियन मॉडल"],
    correct_option_index: 2,
    explanation_en: "India has adopted a dual-GST model, which is based on the Canadian model. In this system, both the Centre and the States simultaneously levy GST on transactions.",
    explanation_hi: "भारत ने ड्यूल-जीएसटी (Dual-GST) मॉडल अपनाया है, जो कनाडाई मॉडल पर आधारित है। इस प्रणाली में, केंद्र और राज्य दोनों एक साथ लेन-देन पर GST लगाते हैं।"
  },
  {
    question_en: "On which date was the abolition of the Planning Commission announced?",
    question_hi: "योजना आयोग को किस तिथि को समाप्त करने की घोषणा की गई थी?",
    options_en: ["1 January 2015", "15 March 1950", "15 August 2014 (from the Red Fort)"],
    options_hi: ["1 जनवरी 2015", "15 मार्च 1950", "15 अगस्त 2014 (लाल किले से)"],
    correct_option_index: 2,
    explanation_en: "Prime Minister Narendra Modi, during his Independence Day speech from the Red Fort on 15th August 2014, announced his intention to dissolve the Planning Commission. It was subsequently replaced by NITI Aayog on 1st January 2015.",
    explanation_hi: "प्रधानमंत्री नरेंद्र मोदी ने 15 अगस्त 2014 को लाल किले से अपने स्वतंत्रता दिवस भाषण के दौरान योजना आयोग को भंग करने की अपनी मंशा की घोषणा की। बाद में 1 जनवरी 2015 को इसे NITI आयोग द्वारा प्रतिस्थापित कर दिया गया।"
  },
  {
    question_en: "On the recommendation of which committee was the Planning Commission established?",
    question_hi: "योजना आयोग की स्थापना किस समिति की सिफारिश पर हुई थी?",
    options_en: ["Narasimhan Committee", "K.C. Neogy Committee", "Sivaraman Committee"],
    options_hi: ["नरसिम्हन समिति", "के.सी. नियोगी समिति", "शिवरामन समिति"],
    correct_option_index: 1,
    explanation_en: "The Planning Commission was set up in March 1950 by a resolution of the Government of India on the recommendation of the K.C. Neogy Committee (the Advisory Planning Board) set up in 1946.",
    explanation_hi: "योजना आयोग की स्थापना मार्च 1950 में भारत सरकार के एक प्रस्ताव द्वारा की गई थी, जो 1946 में स्थापित के.सी. नियोगी समिति (सलाहकार योजना बोर्ड) की सिफारिश पर आधारित थी।"
  },
  {
    question_en: "What is the term of the Finance Commission?",
    question_hi: "वित्त आयोग (Finance Commission) का कार्यकाल कितने वर्ष का होता है?",
    options_en: ["2 years", "4 years", "5 years"],
    options_hi: ["2 साल", "4 साल", "5 वर्ष"],
    correct_option_index: 2,
    explanation_en: "The Finance Commission is constituted by the President of India under Article 280 of the Constitution, typically every five years, to make recommendations on the distribution of tax revenues.",
    explanation_hi: "वित्त आयोग का गठन भारत के राष्ट्रपति द्वारा संविधान के अनुच्छेद 280 के तहत किया जाता है, आमतौर पर हर पांच साल में, कर राजस्व के वितरण पर सिफारिशें करने के लिए।"
  },
  {
    question_en: "From which date will the recommendations of the 16th Finance Commission be applicable?",
    question_hi: "16वें वित्त आयोग की सिफारिशें किस तिथि से लागू होंगी?",
    options_en: ["31 October 2025", "From 1 April 2026 for the next 5 years", "31 December 2023"],
    options_hi: ["31 अक्टूबर 2025", "1 अप्रैल 2026 से आगामी 5 वर्षों तक", "31 दिसंबर 2023"],
    correct_option_index: 1,
    explanation_en: "The 16th Finance Commission has been constituted to make recommendations for the 5-year period (award period) commencing from 1st April 2026.",
    explanation_hi: "16वें वित्त आयोग का गठन 1 अप्रैल 2026 से शुरू होने वाली 5 साल की अवधि (पुरस्कार अवधि) के लिए सिफारिशें करने के लिए किया गया है।"
  },
  {
    question_en: "What does Liberalisation primarily involve?",
    question_hi: "उदारीकरण (Liberalisation) में मुख्य रूप से क्या शामिल है?",
    options_en: ["Disinvestment of government enterprises.", "Simplifying rules and laws and removing restrictions.", "Connecting the Indian market with foreign markets."],
    options_hi: ["सरकारी उद्यमों का विनिवेश करना।", "नियमों और कानूनों को सरल करना तथा प्रतिबंधों को हटाना।", "भारतीय बाजार को विदेशी बाजारों से जोड़ना।"],
    correct_option_index: 1,
    explanation_en: "Liberalisation refers to the economic policy of 'liberating' the economy from strict government controls. This includes delicensing, simplifying rules and regulations, and removing restrictions (like tariffs and quotas) on trade and industry.",
    explanation_hi: "उदारीकरण का तात्पर्य अर्थव्यवस्था को सख्त सरकारी नियंत्रणों से 'मुक्त' करने की आर्थिक नीति से है। इसमें लाइसेंस-प्रथा को समाप्त करना (delicensing), नियमों और विनियमों को सरल बनाना, और व्यापार और उद्योग पर प्रतिबंधों (जैसे टैरिफ और कोटा) को हटाना शामिल है।"
  },
  {
    question_en: "What was the main objective of Globalisation?",
    question_hi: "वैश्वीकरण (Globalisation) का मुख्य उद्देश्य क्या था?",
    options_en: ["To protect domestic industry.", "To connect the Indian market with foreign markets and adopt an open economy.", "To make foreign trade complex."],
    options_hi: ["घरेलू उद्योग की रक्षा करना।", "भारतीय बाजार को विदेशी बाजारों के साथ जोड़ना और खुली अर्थव्यवस्था अपनाना।", "विदेशी व्यापार को जटिल बनाना।"],
    correct_option_index: 1,
    explanation_en: "Globalisation is the process of integrating the domestic economy with the world economy. The main objective is to adopt an open economy, allowing free flow of trade, capital, technology, and services across borders.",
    explanation_hi: "वैश्वीकरण घरेलू अर्थव्यवस्था को विश्व अर्थव्यवस्था के साथ एकीकृत करने की प्रक्रिया है। इसका मुख्य उद्देश्य एक खुली अर्थव्यवस्था को अपनाना है, जिससे सीमाओं के पार व्यापार, पूंजी, प्रौद्योगिकी और सेवाओं का मुक्त प्रवाह हो सके।"
  },
  {
    question_en: "Which sector is also called the Manufacturing Sector?",
    question_hi: "किस क्षेत्र को विनिर्माण क्षेत्र (Manufacturing Sector) भी कहा जाता है?",
    options_en: ["Primary sector", "Secondary sector", "Tertiary sector"],
    options_hi: ["प्राथमिक क्षेत्र", "द्वितीयक क्षेत्र", "तृतीयक क्षेत्र"],
    correct_option_index: 1,
    explanation_en: "The Secondary Sector is also known as the industrial sector or manufacturing sector. It involves transforming raw materials (from the primary sector) into finished goods.",
    explanation_hi: "द्वितीयक क्षेत्र को औद्योगिक क्षेत्र या विनिर्माण क्षेत्र के रूप में भी जाना जाता है। इसमें कच्चे माल (प्राथमिक क्षेत्र से) को तैयार माल में बदलना शामिल है।"
  },
  {
    question_en: "What is the name of the book written by Karl Marx, the father of the Socialistic Economy, which is called the 'Bible of Socialism'?",
    question_hi: "समाजवादी अर्थव्यवस्था (Socialistic Economy) के जनक कार्ल मार्क्स द्वारा लिखी गई पुस्तक का क्या नाम है, जिसे 'समाजवाद की बाइबल' कहा जाता है?",
    options_en: ["Wealth of Nations", "Das Kapital", "An Essay on the Nature of Eco. Science"],
    options_hi: ["Wealth of Nations", "दास कैपिटल (Das Kapital)", "An Essay on the Nature of Eco. Science"],
    correct_option_index: 1,
    explanation_en: "'Das Kapital' (Capital) is the foundational text of socialist and communist theory, written by Karl Marx. 'Wealth of Nations' was written by Adam Smith, the father of capitalism.",
    explanation_hi: "'दास कैपिटल' (पूंजी) समाजवादी और साम्यवादी सिद्धांत का मूलभूत ग्रन्थ है, जिसे कार्ल मार्क्स ने लिखा है। 'वेल्थ ऑफ नेशंस' पूंजीवाद के जनक एडम स्मिथ द्वारा लिखी गई थी।"
  },
  {
    question_en: "In which type of economy is there individual ownership (private sector) of the factors of production?",
    question_hi: "किस प्रकार की अर्थव्यवस्था में उत्पादन के कारकों पर व्यक्तिगत स्वामित्व (निजी क्षेत्र) होता है?",
    options_en: ["Socialist economy", "Mixed economy", "Capitalist economy"],
    options_hi: ["समाजवादी अर्थव्यवस्था", "मिश्रित अर्थव्यवस्था", "पूंजीवादी अर्थव्यवस्था"],
    correct_option_index: 2,
    explanation_en: "A key feature of a Capitalist Economy (or market economy) is that the factors of production (land, labour, capital) are owned and controlled by private individuals and firms, not by the state.",
    explanation_hi: "पूंजीवादी अर्थव्यवस्था (या बाजार अर्थव्यवस्था) की एक प्रमुख विशेषता यह है कि उत्पादन के कारक (भूमि, श्रम, पूंजी) राज्य के बजाय निजी व्यक्तियों और फर्मों के स्वामित्व और नियंत्रण में होते हैं।"
  },
  {
    question_en: "According to the notes, which of the following is an example of a Developed Economy?",
    question_hi: "विकसित अर्थव्यवस्था (Developed Economy) का उदाहरण नोट्स के अनुसार कौन सा है?",
    options_en: ["Africa", "India", "USA, China, Japan, France"],
    options_hi: ["अफ्रीका", "भारत", "USA, चीन, जापान, फ्रांस"],
    correct_option_index: 2,
    explanation_en: "The USA, Japan, and France are considered developed economies, characterized by high GDP per capita and advanced infrastructure. India is a developing economy. (Note: China is often classified as a newly industrialized or upper-middle-income country).",
    explanation_hi: "USA, जापान और फ्रांस को विकसित अर्थव्यवस्था माना जाता है, जिनकी प्रति व्यक्ति जीडीपी उच्च और बुनियादी ढांचा उन्नत होता है। भारत एक विकासशील अर्थव्यवस्था है। (नोट: चीन को अक्सर एक नव-औद्योगीकृत या उच्च-मध्यम-आय वाला देश माना जाता है)।"
  },
  {
    question_en: "Who is considered the father of the Mixed Economy?",
    question_hi: "मिश्रित अर्थव्यवस्था (Mixed Economy) के जनक कौन माने जाते हैं?",
    options_en: ["Adam Smith", "Karl Marx", "John Maynard Keynes"],
    options_hi: ["एडम स्मिथ", "कार्ल मार्क्स", "जॉन मेनार्ड कीन्स"],
    correct_option_index: 2,
    explanation_en: "John Maynard Keynes is considered the father of the modern mixed economy. His theories (Keynesianism) advocated for a significant role for government intervention alongside the private sector to stabilize the economy.",
    explanation_hi: "जॉन मेनार्ड कीन्स को आधुनिक मिश्रित अर्थव्यवस्था का जनक माना जाता है। उनके सिद्धांतों (कीन्सियनवाद) ने अर्थव्यवस्था को स्थिर करने के लिए निजी क्षेत्र के साथ-साथ सरकारी हस्तक्षेप की महत्वपूर्ण भूमिका की वकालत की।"
  },
  {
    question_en: "When is a firm in equilibrium?",
    question_hi: "फर्म संतुलन की स्थिति में कब होती है?",
    options_en: ["When Marginal Cost (MC) is zero.", "When Marginal Revenue (MR) is zero.", "When Marginal Revenue (MR) is equal to Marginal Cost (MC) (MR = MC)."],
    options_hi: ["जब सीमांत लागत (MC) शून्य हो।", "जब सीमांत आय (MR) शून्य हो।", "जब सीमांत आय (MR) सीमांत लागत (MC) के बराबर हो (MR = MC)।"],
    correct_option_index: 2,
    explanation_en: "A firm achieves profit-maximizing equilibrium at the output level where its Marginal Revenue (MR) equals its Marginal Cost (MC), and the MC curve is rising.",
    explanation_hi: "एक फर्म उस उत्पादन स्तर पर लाभ-अधिकतम करने वाले संतुलन को प्राप्त करती है जहाँ उसकी सीमांत आय (MR) उसकी सीमांत लागत (MC) के बराबर होती है, और MC वक्र बढ़ रहा होता है।"
  },
  {
    question_en: "Which is not a characteristic of a Perfect Competition market?",
    question_hi: "पूर्ण प्रतिस्पर्धा बाजार की कौन सी विशेषता नहीं है?",
    options_en: ["Many buyers and sellers.", "Price is determined by the firm.", "Knowledge of market conditions."],
    options_hi: ["अनेक क्रेता एवं विक्रेता।", "मूल्य निर्धारण फर्म द्वारा किया जाता है।", "बाजार दशाओं का ज्ञान होता है।"],
    correct_option_index: 1,
    explanation_en: "In a perfect competition market, individual firms are 'price-takers', not 'price-makers'. The price is determined by the industry (total demand and supply), and each firm must accept that price.",
    explanation_hi: "पूर्ण प्रतिस्पर्धा बाजार में, व्यक्तिगत फर्में 'मूल्य-स्वीकर्ता' (price-takers) होती हैं, 'मूल्य-निर्धारक' (price-makers) नहीं। मूल्य उद्योग (कुल मांग और आपूर्ति) द्वारा निर्धारित किया जाता है, और प्रत्येक फर्म को उस मूल्य को स्वीकार करना पड़ता है।"
  },
  {
    question_en: "In the short run, when does a firm in a perfect competition market incur a loss?",
    question_hi: "अल्पकाल में पूर्ण प्रतिस्पर्धा बाजार में फर्म को हानि (Loss) कब होती है?",
    options_en: ["When AR = SAC", "When AR > SAC", "When the firm's Average Revenue (AR) is less than its Average Cost (SAC) (AR < SAC)."],
    options_hi: ["जब AR = SAC हो।", "जब AR > SAC हो।", "जब फर्म की औसत आय (AR) उसकी औसत लागत (SAC) से कम हो (AR < SAC)।"],
    correct_option_index: 2,
    explanation_en: "A firm incurs a loss when its total cost is more than its total revenue. On a per-unit basis, this means its Average Revenue (AR, which equals price) is less than its Short-run Average Cost (SAC). (AR = SAC is normal profit; AR > SAC is super-normal profit).",
    explanation_hi: "एक फर्म को हानि तब होती है जब उसकी कुल लागत उसकी कुल आय से अधिक होती है। प्रति-इकाई आधार पर, इसका मतलब है कि इसकी औसत आय (AR, जो मूल्य के बराबर है) इसकी अल्पकालीन औसत लागत (SAC) से कम है। (AR = SAC सामान्य लाभ है; AR > SAC अधि-सामान्य (सुपर-नॉर्मल) लाभ है)।"
  },
  {
    question_en: "Who coined the term 'Green Revolution' in 1968?",
    question_hi: "हरित क्रांति (Green Revolution) का नाम 1968 में किसने दिया था?",
    options_en: ["M.S. Swaminathan", "Norman Borlaug", "William Gaud"],
    options_hi: ["एम.एस. स्वामीनाथन", "नॉर्मन बोरलॉग", "विलियम गॉड"],
    correct_option_index: 2,
    explanation_en: "The term 'Green Revolution' was first used by William S. Gaud, an administrator at the U.S. Agency for International Development (USAID), in 1968. (Norman Borlaug is the Father of the Green Revolution, and M.S. Swaminathan is the Father of the Green Revolution in India).",
    explanation_hi: " 'हरित क्रांति' शब्द का प्रयोग पहली बार 1968 में अमेरिकी एजेंसी फॉर इंटरनेशनल डेवलपमेंट (USAID) के प्रशासक विलियम एस. गॉड द्वारा किया गया था। (नॉर्मन बोरलॉग हरित क्रांति के जनक हैं, और एम.एस. स्वामीनाथन भारत में हरित क्रांति के जनक हैं)।"
  },
  {
    question_en: "In which decade did the Green Revolution begin in India?",
    question_hi: "भारत में हरित क्रांति की शुरुआत किस दशक में हुई थी?",
    options_en: ["1950s", "1960s (1966-67)", "1970s"],
    options_hi: ["1950 के दशक", "1960 के दशक (1966-67)", "1970 के दशक"],
    correct_option_index: 1,
    explanation_en: "The Green Revolution in India was introduced in the mid-1960s, specifically starting with the 1966-67 Kharif crop season, leading to a massive increase in food grain production.",
    explanation_hi: "भारत में हरित क्रांति की शुरुआत 1960 के दशक के मध्य में हुई, विशेष रूप से 1966-67 की खरीफ फसल के मौसम से, जिससे खाद्यान्न उत्पादन में भारी वृद्धि हुई।"
  },
  {
    question_en: "Where was the NDDB (National Dairy Development Board) started in 1965?",
    question_hi: "NDDB (नेशनल डेयरी डेवलपमेंट बोर्ड) की शुरुआत 1965 में किस स्थान पर हुई थी?",
    options_en: ["Gujarat, Anand", "Bihar, Patna", "Karnal (Haryana)"],
    options_hi: ["गुजरात, आणंद", "बिहार, पटना", "करनाल (हरियाणा)"],
    correct_option_index: 0,
    explanation_en: "The National Dairy Development Board (NDDB) was founded in 1965 by Dr. Verghese Kurien and was headquartered in Anand, Gujarat, the home of the Amul dairy co-operative.",
    explanation_hi: "नेशनल डेयरी डेवलपमेंट बोर्ड (NDDB) की स्थापना 1965 में डॉ. वर्गीस कुरियन द्वारा की गई थी और इसका मुख्यालय आणंद, गुजरात में था, जो अमूल डेयरी सहकारी समिति का घर है।"
  },
  {
    question_en: "What is the Black Revolution related to?",
    question_hi: "काली क्रांति (Black Revolution) का संबंध किससे है?",
    options_en: ["Spice production", "Tomato production", "Potato production"],
    options_hi: ["मसाला उत्पादन", "टमाटर उत्पादन", "आलू उत्पादन"],
    correct_option_index: 0,
    explanation_en: "Note: None of the options are correct. The Black Revolution is related to **Petroleum Production** and increasing the production of ethanol to be blended with petrol. (Tomato is Red Revolution; Potato is Round Revolution).",
    explanation_hi: "नोट: कोई भी विकल्प सही नहीं है। काली क्रांति (Black Revolution) **पेट्रोलियम उत्पादन** और पेट्रोल के साथ मिश्रित करने के लिए इथेनॉल के उत्पादन को बढ़ाने से संबंधित है। (टमाटर लाल क्रांति है; आलू गोल क्रांति है)।"
  },
  {
    question_en: "The Parbhani Kranti (Parbhani Revolution) is related to which product?",
    question_hi: "परभनी क्रांति (Parbhani Kranti) का संबंध किस उत्पाद से है?",
    options_en: ["Prawn (Shrimp)", "Potato", "Tomato"],
    options_hi: ["झींगा मछली", "आलू", "टमाटर"],
    correct_option_index: 0,
    explanation_en: "Note: None of the options are correct. Parbhani Kranti is related to the production of **Okra (Bhindi / Ladyfinger)**. It refers to a disease-resistant variety of okra developed in Parbhani, Maharashtra. (Prawn is Pink Revolution; Potato is Round Revolution; Tomato is Red Revolution).",
    explanation_hi: "नोट: कोई भी विकल्प सही नहीं है। परभनी क्रांति **भिंडी (Okra)** के उत्पादन से संबंधित है। यह महाराष्ट्र के परभनी में विकसित भिंडी की एक रोग प्रतिरोधी किस्म को संदर्भित करता है। (झींगा गुलाबी क्रांति है; आलू गोल क्रांति है; टमाटर लाल क्रांति है)।"
  },
  {
    question_en: "Which products are included in Horticulture?",
    question_hi: "बागवानी (Horticulture) में किन उत्पादों को शामिल किया जाता है?",
    options_en: ["Only food grains", "Only vegetables", "Production of fruits, flowers, and vegetables"],
    options_hi: ["केवल खाद्यान्न", "केवल सब्जियाँ", "फल, फूल, और सब्ज़ियों का उत्पादन"],
    correct_option_index: 2,
    explanation_en: "Horticulture is a branch of agriculture that deals with the cultivation of plants, including fruits, vegetables, flowers, herbs, and ornamental plants.",
    explanation_hi: "बागवानी कृषि की एक शाखा है जो पौधों की खेती से संबंधित है, जिसमें फल, सब्जियां, फूल, जड़ी-बूटियां और सजावटी पौधे शामिल हैं।"
  },
  {
    question_en: "Currently (according to the notes), how many nationalized banks are there in India?",
    question_hi: "वर्तमान में (नोट्स के अनुसार) भारत में कुल कितने राष्ट्रीयकृत बैंक (Nationalised Banks) हैं?",
    options_en: ["21", "19", "12"],
    options_hi: ["21", "19", "12"],
    correct_option_index: 2,
    explanation_en: "After the major consolidation (mergers) of Public Sector Banks (PSBs) in 2019 and 2020, the total number of PSBs (which includes the nationalized banks and SBI) in India has reduced to 12.",
    explanation_hi: "2019 और 2020 में सार्वजनिक क्षेत्र के बैंकों (PSBs) के बड़े विलय (consolidation) के बाद, भारत में PSBs (जिसमें राष्ट्रीयकृत बैंक और SBI शामिल हैं) की कुल संख्या घटकर 12 हो गई है।"
  },
  {
    question_en: "In which year and where was the Bank of India (BOI) established?",
    question_hi: "बैंक ऑफ इंडिया (BOI) की स्थापना किस वर्ष और कहाँ हुई थी?",
    options_en: ["1894, New Delhi", "1906, Mumbai", "1911, Calcutta"],
    options_hi: ["1894, नई दिल्ली", "1906, मुंबई", "1911, कलकत्ता"],
    correct_option_index: 1,
    explanation_en: "Bank of India (BOI) was founded on 7th September 1906 in Mumbai, Maharashtra.",
    explanation_hi: "बैंक ऑफ इंडिया (BOI) की स्थापना 7 सितंबर 1906 को मुंबई, महाराष्ट्र में हुई थी।"
  },
  {
    question_en: "In which year and where was UCO Bank (United Commercial Bank) established?",
    question_hi: "यूको बैंक (UCO - United Commercial Bank) की स्थापना किस वर्ष और कहाँ हुई थी?",
    options_en: ["1937, Chennai", "1908, Baroda", "1943, Calcutta"],
    options_hi: ["1937, चेन्नई", "1908, बड़ोदरा", "1943, कलकत्ता"],
    correct_option_index: 2,
    explanation_en: "UCO Bank (formerly United Commercial Bank) was established on 6th January 1943 in Calcutta (now Kolkata).",
    explanation_hi: "यूको बैंक (पूर्व में यूनाइटेड कमर्शियल बैंक) की स्थापना 6 जनवरी 1943 को कलकत्ता (अब कोलकाता) में हुई थी।"
  },
  {
    question_en: "In which year and where was Indian Bank established?",
    question_hi: "इंडियन बैंक (Indian Bank) की स्थापना किस वर्ष और कहाँ हुई थी?",
    options_en: ["1906, Bengaluru", "1950, Calcutta", "1907, Chennai"],
    options_hi: ["1906, बंगलुरु", "1950, कलकत्ता", "1907, चेन्नई"],
    correct_option_index: 2,
    explanation_en: "Indian Bank was established on 15th August 1907 as 'Indian Bank Limited' in Chennai (then Madras).",
    explanation_hi: "इंडियन बैंक की स्थापना 15 अगस्त 1907 को 'इंडियन बैंक लिमिटेड' के रूप में चेन्नई (तब मद्रास) में हुई थी।"
  },
  {
    question_en: "Who was the second Governor of the RBI?",
    question_hi: "RBI के दूसरे गवर्नर कौन थे?",
    options_en: ["Sir Osborne Smith", "C.D. Deshmukh", "James Taylor"],
    options_hi: ["सर ऑस्बोर्न स्मिथ", "सी.डी. देशमुख", "जेम्स टेलर"],
    correct_option_index: 2,
    explanation_en: "The second governor of the RBI was Sir James Braid Taylor (1937-1943). Sir Osborne Smith was the first governor, and C.D. Deshmukh was the third governor (and the first Indian governor).",
    explanation_hi: "RBI के दूसरे गवर्नर सर जेम्स ब्रेड टेलर (1937-1943) थे। सर ऑस्बोर्न स्मिथ पहले गवर्नर थे, और सी.डी. देशमुख तीसरे गवर्नर (और पहले भारतीय गवर्नर) थे।"
  },
  {
    question_en: "Who is the 26th (current) Governor of the RBI?",
    question_hi: "RBI के 26वें (वर्तमान) गवर्नर कौन हैं?",
    options_en: ["Shaktikanta Das", "Sanjeev Malhotra (from 2024)", "James Taylor"],
    options_hi: ["शक्तिकांत दास", "संजीव मल्होत्रा (2024 से)", "जेम्स टेलर"],
    correct_option_index: 1,
    explanation_en: "As per the notes provided in the option, 'Sanjeev Malhotra (from 2024)' is indicated as the 26th governor. (In reality, Shaktikanta Das is the 25th and current Governor, as of late 2025).",
    explanation_hi: "विकल्प में दिए गए नोट्स के अनुसार, 'संजीव मल्होत्रा (2024 से)' को 26वें गवर्नर के रूप में दर्शाया गया है। (वास्तव में, 2025 के अंत तक, शक्तिकांत दास 25वें और वर्तमान गवर्नर हैं)।"
  }
];

export default test4Questions;
