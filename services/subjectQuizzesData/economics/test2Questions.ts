import type { QuizQuestion } from '../../../types';

const test2Questions: QuizQuestion[] = [
  {
    question_en: "In the structure of the Central Board of Directors (CBD) of the Reserve Bank of India (RBI), what is the total number of members combining the Nominated Members and Government Officials (from the Ministry of Finance)?",
    question_hi: "भारतीय रिजर्व बैंक (RBI) के सेंट्रल बोर्ड ऑफ डायरेक्टर्स (CBD) की संरचना में, नामांकित सदस्य (Nominated Members) और सरकारी अधिकारी (जो वित्त मंत्रालय से होते हैं) को मिलाकर कुल कितने सदस्य होते हैं?",
    options_en: ["10 members", "10 members", "12 members (10+2)"],
    options_hi: ["10 सदस्य", "10 सदस्य", "12 सदस्य (10+2)"],
    correct_option_index: 2,
    explanation_en: "The RBI's Central Board has 10 members nominated from various fields and 2 government officials (from the Ministry of Finance). Thus, combining these two categories, there are a total of 12 (10+2) members.",
    explanation_hi: "RBI के सेंट्रल बोर्ड में 10 सदस्य विभिन्न क्षेत्रों से नामांकित होते हैं और 2 सदस्य सरकारी अधिकारी (वित्त मंत्रालय से) होते हैं। इस प्रकार, इन दोनों श्रेणियों को मिलाकर कुल 12 (10+2) सदस्य होते हैं।"
  },
  {
    question_en: "Which statement regarding SDF (Standing Deposit Facility) is the most accurate?",
    question_hi: "SDF (Standing Deposit Facility) के संबंध में कौन सा कथन सबसे सटीक है?",
    options_en: [
      "RBI charges a penalty from commercial banks for one night on this.",
      "Commercial banks deposit their excess liquidity with RBI without any collateral.",
      "It is a long-term loan facility."
    ],
    options_hi: [
      "RBI इस पर वाणिज्यिक बैंकों से एक रात के लिए जुर्माना लेता है।",
      "वाणिज्यिक बैंक अपनी अतिरिक्त तरलता को RBI के पास बिना किसी कोलैटरल के जमा करते हैं।",
      "यह एक दीर्घकालिक ऋण सुविधा है।"
    ],
    correct_option_index: 1,
    explanation_en: "SDF is a monetary tool under which commercial banks can deposit their excess liquidity with the RBI overnight, without the RBI needing to provide government securities (collateral) in return.",
    explanation_hi: "SDF एक मौद्रिक उपकरण है जिसके तहत वाणिज्यिक बैंक अपनी अतिरिक्त तरलता (excess liquidity) को RBI के पास ओवरनाइट जमा कर सकते हैं, और इसके लिए RBI को बैंकों को कोई सरकारी प्रतिभूति (कोलैटरल) देने की आवश्यकता नहीं होती है।"
  },
  {
    question_en: "If the RBI increases the CRR (Cash Reserve Ratio), what is the immediate effect on the economy's liquidity?",
    question_hi: "यदि RBI CRR (नकद आरक्षित अनुपात) को बढ़ाता है, तो अर्थव्यवस्था की तरलता (Liquidity) पर क्या तात्कालिक प्रभाव पड़ता है?",
    options_en: [
      "Liquidity increases, as banks get more interest.",
      "Liquidity decreases, as banks have less money available to lend.",
      "Liquidity remains unchanged."
    ],
    options_hi: [
      "तरलता बढ़ जाती है, क्योंकि बैंकों को अधिक ब्याज मिलता है।",
      "तरलता घट जाती है, क्योंकि बैंकों को ऋण देने के लिए कम धन उपलब्ध होता है।",
      "तरलता अपरिवर्तित रहती है।"
    ],
    correct_option_index: 1,
    explanation_en: "CRR is the portion of total deposits that banks must keep with the RBI as cash. If the CRR is increased, banks have less money available for lending, which reduces the liquidity in the economy.",
    explanation_hi: "CRR कुल जमा का वह हिस्सा है जो बैंकों को RBI के पास नकद रूप में रखना होता है। यदि CRR बढ़ाया जाता है, तो बैंकों के पास ऋण देने के लिए कम पैसा उपलब्ध होता है, जिससे अर्थव्यवस्था में तरलता कम हो जाती है।"
  },
  {
    question_en: "During the first phase of nationalization of commercial banks (1969), what was the minimum deposit limit set for nationalization?",
    question_hi: "वाणिज्यिक बैंकों के राष्ट्रीयकरण के पहले चरण (1969) के समय, राष्ट्रीयकरण के लिए न्यूनतम जमा (deposit) सीमा क्या निर्धारित की गई थी?",
    options_en: ["₹200 Crore", "₹50 Crore", "₹100 Crore"],
    options_hi: ["₹200 करोड़", "₹50 करोड़", "₹100 करोड़"],
    correct_option_index: 1,
    explanation_en: "In 1969, the government nationalized 14 commercial banks, each of which had a minimum deposit base of ₹50 crore or more.",
    explanation_hi: "1969 में, सरकार ने 14 वाणिज्यिक बैंकों का राष्ट्रीयकरण किया, जिनमें से प्रत्येक के पास ₹50 करोड़ या उससे अधिक की न्यूनतम जमा राशि थी।"
  },
  {
    question_en: "For what purpose was NABARD established, and for which sector is it the apex institution for development?",
    question_hi: "NABARD (नाबार्ड) की स्थापना किस उद्देश्य से की गई थी, और यह किस क्षेत्र के विकास के लिए शीर्ष संस्था है?",
    options_en: [
      "Industrial Development, Mumbai",
      "Financial facility in Agriculture & Rural Sector, Shivraman Committee",
      "Housing facility, New Delhi"
    ],
    options_hi: [
      "औद्योगिक विकास, मुंबई",
      "कृषि एवं ग्रामीण क्षेत्र में वित्तीय सुविधा, शिवरामन समिति",
      "आवास सुविधा, नई दिल्ली"
    ],
    correct_option_index: 1,
    explanation_en: "NABARD (National Bank for Agriculture and Rural Development) was established on the recommendations of the Shivraman Committee to provide credit facilities and act as the apex development bank for agriculture and rural sectors.",
    explanation_hi: "NABARD (राष्ट्रीय कृषि और ग्रामीण विकास बैंक) की स्थापना शिवरामन समिति की सिफारिशों पर कृषि और ग्रामीण क्षेत्रों के लिए ऋण सुविधाएँ प्रदान करने और शीर्ष विकास बैंक के रूप में कार्य करने के लिए की गई थी।"
  },
  {
    question_en: "Which of the following programs was launched during the Sixth Five-Year Plan (1980-85)?",
    question_hi: "निम्नलिखित में से कौन सा कार्यक्रम छठी पंचवर्षीय योजना (1980-85) के दौरान शुरू किया गया था?",
    options_en: [
      "Food for Work Programme",
      "20 Point Programme",
      "Integrated Rural Development Programme (IRDP)"
    ],
    options_hi: [
      "काम के बदले अनाज योजना",
      "20 सूत्री कार्यक्रम",
      "एकीकृत ग्रामीण विकास कार्यक्रम (IRDP)"
    ],
    correct_option_index: 2,
    explanation_en: "The Integrated Rural Development Programme (IRDP) was launched in 1980, which falls within the period of the Sixth Five-Year Plan (1980-85). The 20 Point Programme (1975) and Food for Work (1977) were launched earlier.",
    explanation_hi: "एकीकृत ग्रामीण विकास कार्यक्रम (IRDP) 1980 में शुरू किया गया था, जो छठी पंचवर्षीय योजना (1980-85) की अवधि के भीतर आता है। 20 सूत्री कार्यक्रम (1975) और काम के बदले अनाज (1977) पहले शुरू किए गए थे।"
  },
  {
    question_en: "What was the main reason for the implementation of the Eighth Five-Year Plan (1992-1997) being delayed, leading to Annual Plans in 1990-92?",
    question_hi: "आठवीं पंचवर्षीय योजना (1992-1997) को लागू करने में देरी का मुख्य कारण क्या था, जिसकी वजह से 1990-92 में वार्षिक योजनाएँ (Annual Plans) अपनानी पड़ी थीं?",
    options_en: [
      "War with China and Pakistan",
      "Balance of Payments (BOP) problem and decline in foreign exchange reserves",
      "Failure of the Garibi Hatao program"
    ],
    options_hi: [
      "चीन और पाकिस्तान के साथ युद्ध",
      "भुगतान संतुलन (BOP) की समस्या और विदेशी मुद्रा भंडार में कमी",
      "गरीबी हटाओ कार्यक्रम की विफलता"
    ],
    correct_option_index: 1,
    explanation_en: "The implementation of the Eighth Plan was postponed due to severe economic instability, a Balance of Payments (BOP) crisis, and a sharp decline in foreign exchange reserves. Two Annual Plans were implemented during 1990-92 before the Eighth Plan began.",
    explanation_hi: "गंभीर आर्थिक अस्थिरता, भुगतान संतुलन (BOP) संकट और विदेशी मुद्रा भंडार में भारी कमी के कारण आठवीं योजना का कार्यान्वयन स्थगित कर दिया गया था। आठवीं योजना शुरू होने से पहले 1990-92 के दौरान दो वार्षिक योजनाएँ लागू की गईं।"
  },
  {
    question_en: "Which Five-Year Plan was the last one, with the objective of 'Faster, Sustainable and Inclusive Growth'?",
    question_hi: "कौन सी पंचवर्षीय योजना 'तीव्रतर, सतत एवं समावेशी विकास' (Faster, Sustainable and Inclusive Growth) के उद्देश्य के साथ अंतिम पंचवर्षीय योजना थी?",
    options_en: [
      "10th Five-Year Plan (2002-07)",
      "11th Five-Year Plan (2007-12)",
      "12th Five-Year Plan (2012-17)"
    ],
    options_hi: [
      "10वीं पंचवर्षीय योजना (2002-07)",
      "11वीं पंचवर्षीय योजना (2007-12)",
      "12वीं पंचवर्षीय योजना (2012-17)"
    ],
    correct_option_index: 2,
    explanation_en: "The 12th Five-Year Plan (2012-17) was the last five-year plan in India. Its main theme was 'Faster, Sustainable and Inclusive Growth'.",
    explanation_hi: "12वीं पंचवर्षीय योजना (2012-17) भारत की अंतिम पंचवर्षीय योजना थी। इसका मुख्य विषय 'तीव्रतर, सतत एवं समावेशी विकास' था।"
  },
  {
    question_en: "Who was the first person to make a scientific estimate (1931) of national income?",
    question_hi: "राष्ट्रीय आय की गणना में वैज्ञानिक अनुमान (1931) लगाने वाले पहले व्यक्ति कौन थे?",
    options_en: [
      "Dadabhai Naoroji (1867-68)",
      "P. C. Mahalanobis",
      "Dr. V. K. R. V. Rao"
    ],
    options_hi: [
      "दादा भाई नौरोजी (1867-68)",
      "पी.सी. महालनोबिस",
      "डॉ. वी.के.आर.वी. राव"
    ],
    correct_option_index: 2,
    explanation_en: "While Dadabhai Naoroji was the first to estimate national income, Dr. V. K. R. V. Rao (in 1931) was the first person to use a scientific method for the estimation.",
    explanation_hi: "हालांकि दादा भाई नौरोजी ने राष्ट्रीय आय का अनुमान लगाने वाले पहले व्यक्ति थे, लेकिन डॉ. वी.के.आर.वी. राव (1931 में) अनुमान के लिए वैज्ञानिक पद्धति का उपयोग करने वाले पहले व्यक्ति थे।"
  },
  {
    question_en: "What is included in the definition of Gross Domestic Product (GDP)?",
    question_hi: "सकल घरेलू उत्पाद (GDP) की परिभाषा में क्या शामिल है?",
    options_en: [
      "Production done only by citizens within the country's border.",
      "Production done only by foreigners within the country's border.",
      "The total final production done by citizens and foreigners within the domestic territory of a country in a financial year."
    ],
    options_hi: [
      "केवल नागरिकों द्वारा देश की सीमा के भीतर किया गया उत्पादन।",
      "केवल विदेशियों द्वारा देश की सीमा के भीतर किया गया उत्पादन।",
      "एक वित्तीय वर्ष में देश की घरेलू सीमा के भीतर नागरिकों तथा विदेशियों द्वारा किया गया कुल अंतिम उत्पादन।"
    ],
    correct_option_index: 2,
    explanation_en: "GDP is the total monetary or market value of all the final goods and services produced within a country's domestic borders in a specific time period (usually a financial year), regardless of who (citizen or foreigner) produced it.",
    explanation_hi: "GDP एक विशिष्ट समय अवधि (आमतौर पर एक वित्तीय वर्ष) में किसी देश की घरेलू सीमाओं के भीतर उत्पादित सभी अंतिम वस्तुओं और सेवाओं का कुल मौद्रिक या बाजार मूल्य है, भले ही इसका उत्पादन किसने (नागरिक या विदेशी) किया हो।"
  },
  {
    question_en: "What is obtained by subtracting total receipts (income) from the government's total expenditure?",
    question_hi: "सरकार के कुल व्यय में से कुल प्राप्तियों (आय) को घटाने पर क्या प्राप्त होता है?",
    options_en: [
      "Revenue Deficit",
      "Primary Deficit",
      "Fiscal Deficit"
    ],
    options_hi: [
      "राजस्व घाटा (Revenue Deficit)",
      "प्राथमिक घाटा (Primary Deficit)",
      "राजकोषीय घाटा (Fiscal Deficit)"
    ],
    correct_option_index: 2,
    explanation_en: "Fiscal Deficit is the difference between the government's total expenditure and its total receipts (excluding borrowings). It represents the total borrowing requirement of the government.",
    explanation_hi: "राजकोषीय घाटा सरकार के कुल व्यय और उसकी कुल प्राप्तियों (उधार को छोड़कर) के बीच का अंतर है। यह सरकार की कुल उधारी आवश्यकता को दर्शाता है।"
  },
  {
    question_en: "Which of the following items is an example of the government's Capital Expenditure?",
    question_hi: "निम्नलिखित में से कौन सा मद सरकार के पूंजीगत व्यय (Capital Expenditure) का उदाहरण है?",
    options_en: [
      "Interest payments",
      "Subsidy",
      "Expenditure on road construction"
    ],
    options_hi: [
      "ब्याज भुगतान",
      "सब्सिडी",
      "सड़क निर्माण पर व्यय"
    ],
    correct_option_index: 2,
    explanation_en: "Capital Expenditure refers to spending that creates assets (like roads, bridges, schools) or reduces liabilities. Interest payments and subsidies are examples of Revenue Expenditure.",
    explanation_hi: "पूंजीगत व्यय उस खर्च को संदर्भित करता है जो संपत्ति (जैसे सड़क, पुल, स्कूल) बनाता है या देनदारियों को कम करता है। ब्याज भुगतान और सब्सिडी राजस्व व्यय के उदाहरण हैं।"
  },
  {
    question_en: "What is the main characteristic of a Revenue Receipt?",
    question_hi: "राजस्व आय (Revenue Receipt) की मुख्य पहचान क्या है?",
    options_en: [
      "It reduces the government's assets.",
      "It increases the government's liability (debt).",
      "It is government income that neither reduces assets nor increases liability."
    ],
    options_hi: [
      "इससे सरकार की परिसंपत्ति में कमी आती है।",
      "इससे सरकार के कर्ज (Liability) में वृद्धि होती है।",
      "यह सरकार की ऐसी आय है जिससे न तो संपत्ति में कमी आती है और न ही कर्ज में वृद्धि होती है।"
    ],
    correct_option_index: 2,
    explanation_en: "Revenue receipts (like taxes, non-tax revenue) are those receipts that do not create any liability or cause any reduction in the assets of the government. They are regular and recurring.",
    explanation_hi: "राजस्व प्राप्तियां (जैसे कर, गैर-कर राजस्व) वे प्राप्तियां हैं जो न तो कोई देनदारी पैदा करती हैं और न ही सरकार की संपत्ति में कोई कमी लाती हैं। ये नियमित और आवर्ती होती हैं।"
  },
  {
    question_en: "Who is the main regulator of the Capital Market, and for what duration does it handle financial transactions?",
    question_hi: "पूंजी बाजार (Capital Market) का मुख्य नियामक (Regulator) कौन है, और यह किस अवधि के लिए वित्त का लेन-देन करता है?",
    options_en: [
      "RBI, 365 days or less",
      "Ministry of Finance, Indefinite period",
      "SEBI, For more than one year"
    ],
    options_hi: [
      "RBI, 365 दिन या कम",
      "वित्त मंत्रालय, अनिश्चित अवधि",
      "SEBI, एक वर्ष से अधिक समय के लिए"
    ],
    correct_option_index: 2,
    explanation_en: "The Capital Market deals with long-term funds (more than one year) like stocks and bonds. Its main regulator in India is SEBI (Securities and Exchange Board of India). RBI regulates the Money Market (short-term).",
    explanation_hi: "पूंजी बाजार दीर्घकालिक फंड (एक वर्ष से अधिक) जैसे स्टॉक और बॉन्ड से संबंधित है। भारत में इसका मुख्य नियामक SEBI (भारतीय प्रतिभूति और विनिमय बोर्ड) है। RBI मुद्रा बाजार (अल्पकालिक) को नियंत्रित करता है।"
  },
  {
    question_en: "Who is the chairperson of the GST Council?",
    question_hi: "GST परिषद (GST Council) के अध्यक्ष कौन होते हैं?",
    options_en: [
      "Prime Minister",
      "Finance Ministers of States/UTs",
      "Union Finance Minister"
    ],
    options_hi: [
      "प्रधानमंत्री",
      "राज्यों/UTs के वित्त मंत्री",
      "केंद्रीय वित्त मंत्री"
    ],
    correct_option_index: 2,
    explanation_en: "The GST Council is chaired by the Union Finance Minister. The other members include the Union Minister of State (Finance) and the Finance Ministers of all states and UTs (with legislature).",
    explanation_hi: "GST परिषद की अध्यक्षता केंद्रीय वित्त मंत्री करते हैं। अन्य सदस्यों में केंद्रीय राज्य मंत्री (वित्त) और सभी राज्यों और केंद्र शासित प्रदेशों (विधानमंडल वाले) के वित्त मंत्री शामिल होते हैं।"
  },
  {
    question_en: "How many digits are there in the GST Identification Number (GSTIN)?",
    question_hi: "GST आइडेंटिफिकेशन नंबर (GSTIN) में कितने अंक होते हैं?",
    options_en: ["10 digits", "15 digits", "12 digits"],
    options_hi: ["10 अंक", "15 अंक", "12 अंक"],
    correct_option_index: 1,
    explanation_en: "GSTIN is a 15-digit PAN-based unique identification number assigned to every registered person under GST.",
    explanation_hi: "GSTIN एक 15-अंकीय PAN-आधारित विशिष्ट पहचान संख्या है जो GST के तहत प्रत्येक पंजीकृत व्यक्ति को दी जाती है।"
  },
  {
    question_en: "What is the main objective of a Socialistic Economy, and who determines the price in it?",
    question_hi: "समाजवादी अर्थव्यवस्था (Socialistic Economy) का मुख्य उद्देश्य क्या होता है, और इसमें कीमत का निर्धारण कौन करता है?",
    options_en: [
      "Maximum profit, Market forces",
      "Public welfare, Government",
      "Maximum profit, Government"
    ],
    options_hi: [
      "अधिकतम लाभ, बाज़ार शक्तियाँ",
      "जन कल्याण, सरकार (Government)",
      "अधिकतम लाभ, सरकार"
    ],
    correct_option_index: 1,
    explanation_en: "In a socialistic economy, the means of production are owned by the state (government). The main objective is public welfare (not profit), and prices are determined by the government (central planning).",
    explanation_hi: "समाजवादी अर्थव्यवस्था में, उत्पादन के साधनों का स्वामित्व राज्य (सरकार) के पास होता है। मुख्य उद्देश्य जन कल्याण (लाभ नहीं) होता है, और कीमतों का निर्धारण सरकार (केंद्रीय योजना) द्वारा किया जाता है।"
  },
  {
    question_en: "What is the total number of members in the RBI's Monetary Policy Committee (MPC)?",
    question_hi: "RBI की मौद्रिक नीति समिति (Monetary Policy Committee - MPC) में सदस्यों की कुल संख्या कितनी होती है?",
    options_en: ["5", "6", "4"],
    options_hi: ["5", "6", "4"],
    correct_option_index: 1,
    explanation_en: "The MPC consists of six members: three officials from the RBI (including the Governor) and three external members nominated by the Government of India.",
    explanation_hi: "MPC में छह सदस्य होते हैं: RBI के तीन अधिकारी (गवर्नर सहित) और भारत सरकार द्वारा नामित तीन बाहरी सदस्य।"
  },
  {
    question_en: "Which major river valley project, started during the First Five-Year Plan (1951-1956), was called the 'Temple of Modern India' by Jawaharlal Nehru?",
    question_hi: "पहली पंचवर्षीय योजना (1951-1956) के दौरान शुरू की गई कौन सी बड़ी नदी घाटी परियोजना को जवाहर लाल नेहरू ने 'आधुनिक भारत का मंदिर' कहा था?",
    options_en: [
      "Hirakud Dam (on Mahanadi)",
      "Beas Project",
      "Bhakra Nangal Project (on Sutlej River)"
    ],
    options_hi: [
      "हीराकुंड बांध (महानदी पर)",
      "ब्यास प्रोजेक्ट",
      "भाखड़ा नागल परियोजना (सतलुज नदी पर)"
    ],
    correct_option_index: 2,
    explanation_en: "The Bhakra Nangal Project, a major irrigation and power project on the Sutlej River, was started during the First Plan and was famously referred to as the 'Temple of Modern India' by PM Jawaharlal Nehru.",
    explanation_hi: "भाखड़ा नागल परियोजना, सतलुज नदी पर एक प्रमुख सिंचाई और बिजली परियोजना, पहली योजना के दौरान शुरू की गई थी और इसे प्रधान मंत्री जवाहर लाल नेहरू द्वारा 'आधुनिक भारत का मंदिर' के रूप में प्रसिद्ध रूप से संदर्भित किया गया था।"
  },
  {
    question_en: "What does 'L' stand for in the New Economic Policy (LPG) of 1991?",
    question_hi: "1991 की नई आर्थिक नीति (LPG) में 'L' का क्या अर्थ है?",
    options_en: [
      "Democratisation",
      "Liberalisation",
      "Licensing"
    ],
    options_hi: [
      "लोकतंत्रीकरण (Democratisation)",
      "उदारीकरण (Liberalisation)",
      "लाइसेंसिंग (Licensing)"
    ],
    correct_option_index: 1,
    explanation_en: "LPG stands for Liberalisation, Privatisation, and Globalisation. 'Liberalisation' refers to the process of reducing government controls and restrictions on the economy.",
    explanation_hi: "LPG का अर्थ है उदारीकरण (Liberalisation), निजीकरण (Privatisation), और वैश्वीकरण (Globalisation)। 'उदारीकरण' का तात्पर्य अर्थव्यवस्था पर सरकारी नियंत्रण और प्रतिबंधों को कम करने की प्रक्रिया से है।"
  },
  {
    question_en: "Which economist used the term 'Hindu Growth Rate' (HGR), and what rate did it represent for India during that period?",
    question_hi: "'Hindu Growth Rate' (HGR) शब्द का प्रयोग किस अर्थशास्त्री ने किया था, और यह किस अवधि में भारत की किस दर को दर्शाता था?",
    options_en: [
      "Amartya Sen, 1990s, Population rate",
      "Prof. Raj Krishna, 1950s-80s, 3.5% growth rate",
      "Dadabhai Naoroji, 1867-68, Per capita income"
    ],
    options_hi: [
      "अमर्त्य सेन, 1990 के दशक, जनसंख्या दर",
      "प्रो. राज कृष्णन, 1950-80 के दशक, 3.5% विकास दर",
      "दादा भाई नौरोजी, 1867-68, प्रति व्यक्ति आय"
    ],
    correct_option_index: 1,
    explanation_en: "The term 'Hindu Growth Rate' was coined by economist Prof. Raj Krishna to describe the slow average annual growth rate (around 3.5%) of the Indian economy from the 1950s to the 1980s.",
    explanation_hi: " 'हिंदू ग्रोथ रेट' शब्द अर्थशास्त्री प्रो. राज कृष्णन द्वारा 1950 से 1980 के दशक तक भारतीय अर्थव्यवस्था की धीमी औसत वार्षिक वृद्धि दर (लगभग 3.5%) का वर्णन करने के लिए गढ़ा गया था।"
  },
  {
    question_en: "What is the formula to measure Gross National Product (GNP), which represents the income earned by a country's citizens?",
    question_hi: "सकल राष्ट्रीय उत्पाद (GNP) को मापने का सूत्र क्या है, जो देश के नागरिकों द्वारा अर्जित आय को दर्शाता है?",
    options_en: [
      "GNP = GDP - Depreciation",
      "GNP = GDP + Net Factor Income from Abroad",
      "GNP = NNP + Depreciation"
    ],
    options_hi: [
      "GNP = GDP - मूल्य ह्रास",
      "GNP = GDP + विदेशों से प्राप्त शुद्ध कारक आय",
      "GNP = NNP + मूल्य ह्रास"
    ],
    correct_option_index: 1,
    explanation_en: "GNP (Gross National Product) measures the total income earned by a country's citizens, both domestically and abroad. It is calculated by adding Net Factor Income from Abroad (NFIA) to the GDP.",
    explanation_hi: "GNP (सकल राष्ट्रीय उत्पाद) देश के नागरिकों द्वारा घरेलू और विदेश दोनों में अर्जित कुल आय को मापता है। इसकी गणना GDP में विदेशों से प्राप्त शुद्ध कारक आय (NFIA) को जोड़कर की जाती है।"
  },
  {
    question_en: "Who presented the first budget of the Republic of India (1950)?",
    question_hi: "गणतंत्र भारत (Republic India) का पहला बजट (1950) किसने प्रस्तुत किया था?",
    options_en: [
      "R. K. Shanmukham Chetty",
      "John Mathai",
      "C. D. Deshmukh"
    ],
    options_hi: [
      "आर.के. षणमुखम चेट्टी",
      "जॉन मथाई",
      "सी.डी. देशमुख"
    ],
    correct_option_index: 1,
    explanation_en: "R. K. Shanmukham Chetty presented the first budget of Independent India (1947). John Mathai presented the first budget of the Republic of India on February 28, 1950.",
    explanation_hi: "आर.के. षणमुखम चेट्टी ने स्वतंत्र भारत (1947) का पहला बजट पेश किया। जॉन मथाई ने 28 फरवरी, 1950 को गणतंत्र भारत का पहला बजट पेश किया।"
  },
  {
    question_en: "According to the definition of 'Revenue Deficit', when does it arise?",
    question_hi: "'राजस्व घाटा' (Revenue Deficit) की परिभाषा के अनुसार, यह कब उत्पन्न होता है?",
    options_en: [
      "When total expenditure exceeds total income.",
      "When the primary deficit is zero.",
      "When Revenue Expenditure exceeds Revenue Income."
    ],
    options_hi: [
      "जब कुल व्यय कुल आय से अधिक हो।",
      "जब प्राथमिक घाटा शून्य हो।",
      "जब राजस्व व्यय (Revenue Expenditure) राजस्व आय (Revenue Income) से अधिक हो।"
    ],
    correct_option_index: 2,
    explanation_en: "Revenue Deficit occurs when the government's total revenue expenditure (spending on day-to-day operations) is greater than its total revenue receipts (income from taxes and non-taxes).",
    explanation_hi: "राजस्व घाटा तब होता है जब सरकार का कुल राजस्व व्यय (दिन-प्रतिदिन के कार्यों पर खर्च) उसकी कुल राजस्व प्राप्तियों (करों और गैर-करों से आय) से अधिक होता है।"
  },
  {
    question_en: "What does the Fiscal Deficit indicate?",
    question_hi: "राजकोषीय घाटा (Fiscal Deficit) क्या दर्शाता है?",
    options_en: [
      "Only an increase in revenue expenditure.",
      "The total borrowing requirement of the government (Total Expenditure - Total Receipts).",
      "The deficit excluding interest payments."
    ],
    options_hi: [
      "केवल राजस्व व्यय में वृद्धि।",
      "सरकार की कुल उधारी की आवश्यकता (कुल व्यय - कुल आय)।",
      "ब्याज भुगतान को छोड़कर घाटा।"
    ],
    correct_option_index: 1,
    explanation_en: "Fiscal Deficit is the difference between the government's total expenditure and its total receipts (excluding borrowings). It effectively shows the total amount the government needs to borrow to meet its expenses.",
    explanation_hi: "राजकोषीय घाटा सरकार के कुल व्यय और उसकी कुल प्राप्तियों (उधार को छोड़कर) के बीच का अंतर है। यह प्रभावी रूप से उस कुल राशि को दर्शाता है जो सरकार को अपने खर्चों को पूरा करने के लिए उधार लेने की आवश्यकता होती है।"
  },
  {
    question_en: "What is the main characteristic of the Primary Capital Market?",
    question_hi: "प्राथमिक पूंजी बाजार (Primary Capital Market) की मुख्य विशेषता क्या है?",
    options_en: [
      "Shares are transacted between investors.",
      "It is only related to FPO.",
      "The company issues its shares for the first time (IPO), and has a direct relationship with the investor."
    ],
    options_hi: [
      "शेयर का लेन-देन निवेशकों के मध्य होता है।",
      "यह केवल FPO से संबंधित है।",
      "कंपनी अपने शेयर पहली बार जारी करती है (IPO), और निवेशक से सीधा संबंध होता है।"
    ],
    correct_option_index: 2,
    explanation_en: "The Primary Market is where securities (like shares) are created and issued for the first time (e.g., through an IPO - Initial Public Offering). The company directly sells to investors.",
    explanation_hi: "प्राथमिक बाजार वह जगह है जहाँ प्रतिभूतियों (जैसे शेयर) को पहली बार बनाया और जारी किया जाता है (जैसे, IPO - इनिशियल पब्लिक ऑफरिंग के माध्यम से)। कंपनी सीधे निवेशकों को बेचती है।"
  },
  {
    question_en: "When is an 'FPO (Follow-on Public Offer)' issued?",
    question_hi: "'FPO (Follow-on Public Offer)' कब जारी किया जाता है?",
    options_en: [
      "When the company issues an IPO.",
      "When a company, already listed, issues additional shares to raise extra funds.",
      "When investors open a Demat account."
    ],
    options_hi: [
      "जब कंपनी IPO जारी करती है।",
      "जब कोई कंपनी अतिरिक्त वित्त संग्रहण के उद्देश्य से पहले से जारी शेयरों के अतिरिक्त और शेयर जारी करती है।",
      "जब निवेशक डीमैट अकाउंट खोलते हैं।"
    ],
    correct_option_index: 1,
    explanation_en: "An FPO (Follow-on Public Offer) is issued by a company that is already listed on a stock exchange, when it wants to issue additional shares to the public to raise more capital.",
    explanation_hi: "FPO (फॉलो-ऑन पब्लिक ऑफर) एक ऐसी कंपनी द्वारा जारी किया जाता है जो पहले से ही स्टॉक एक्सचेंज में सूचीबद्ध है, जब वह अधिक पूंजी जुटाने के लिए जनता को अतिरिक्त शेयर जारी करना चाहती है।"
  },
  {
    question_en: "When did SEBI (Securities and Exchange Board of India) receive statutory status?",
    question_hi: "SEBI (Securities and Exchange Board of India) को सांविधिक (Statutory) दर्जा कब प्राप्त हुआ था?",
    options_en: [
      "12 April 1988",
      "30 January 1992 (SEBI Act, 1992)",
      "1995"
    ],
    options_hi: [
      "12 अप्रैल 1988",
      "30 जनवरी 1992 (SEBI Act, 1992)",
      "1995"
    ],
    correct_option_index: 1,
    explanation_en: "SEBI was established on April 12, 1988, as a non-statutory body. It was given statutory powers on January 30, 1992, through the SEBI Act, 1992.",
    explanation_hi: "SEBI की स्थापना 12 अप्रैल, 1988 को एक गैर-सांविधिक निकाय के रूप में हुई थी। इसे SEBI अधिनियम, 1992 के माध्यम से 30 जनवरी, 1992 को सांविधिक शक्तियाँ प्रदान की गईं।"
  },
  {
    question_en: "Which was the first state in India to implement GST (Goods and Services Tax)?",
    question_hi: "GST (वस्तु एवं सेवा कर) लागू करने वाला भारत का पहला राज्य कौन सा था?",
    options_en: ["Bihar", "Jammu and Kashmir", "Assam"],
    options_hi: ["बिहार", "जम्मू और कश्मीर", "असम"],
    correct_option_index: 2,
    explanation_en: "Assam was the first state in India to ratify and implement the GST bill.",
    explanation_hi: "असम GST बिल की पुष्टि और उसे लागू करने वाला भारत का पहला राज्य था।"
  },
  {
    question_en: "Which of the following statements is correct regarding the GST Council?",
    question_hi: "GST परिषद (GST Council) के संबंध में निम्नलिखित में से कौन सा कथन सही है?",
    options_en: [
      "It is formed under Article 280.",
      "It is a non-constitutional body.",
      "It is formed under Article 279A of the Constitution."
    ],
    options_hi: [
      "इसका गठन अनुच्छेद 280 के तहत होता है।",
      "यह एक गैर-संवैधानिक संस्था है।",
      "इसका गठन संविधान के अनुच्छेद 279A के तहत किया गया है।"
    ],
    correct_option_index: 2,
    explanation_en: "The GST Council is a constitutional body established under Article 279A of the Indian Constitution, which was inserted by the 101st Amendment Act, 2016.",
    explanation_hi: "GST परिषद एक संवैधानिक संस्था है, जिसका गठन भारतीय संविधान के अनुच्छेद 279A के तहत किया गया है, जिसे 101वां संशोधन अधिनियम, 2016 द्वारा जोड़ा गया था।"
  },
  {
    question_en: "What is the main function of the GST Council?",
    question_hi: "GST परिषद का मुख्य कार्य क्या है?",
    options_en: [
      "Only to issue GSTIN.",
      "To determine the GST rates for goods and services.",
      "To distribute taxes among states."
    ],
    options_hi: [
      "केवल GSTIN जारी करना।",
      "वस्तुओं और सेवाओं पर GST दरों का निर्धारण करना।",
      "राज्यों के बीच करों का वितरण करना।"
    ],
    correct_option_index: 1,
    explanation_en: "The primary function of the GST Council is to make recommendations to the Union and State governments on important issues related to GST, including determining the tax rates, exemptions, and thresholds.",
    explanation_hi: "GST परिषद का प्राथमिक कार्य GST से संबंधित महत्वपूर्ण मुद्दों पर केंद्र और राज्य सरकारों को सिफारिशें करना है, जिसमें कर दरों, छूट और थ्रेशोल्ड का निर्धारण करना शामिल है।"
  },
  {
    question_en: "On the recommendation of which committee was the Planning Commission established?",
    question_hi: "योजना आयोग (Planning Commission) की स्थापना किस समिति की सिफारिश पर की गई थी?",
    options_en: [
      "Narasimham Committee",
      "K. C. Neogy Committee",
      "Shivraman Committee"
    ],
    options_hi: [
      "नरसिम्हन समिति",
      "के.सी. नियोगी समिति",
      "शिवरामन समिति"
    ],
    correct_option_index: 1,
    explanation_en: "The Planning Commission was established in March 1950 by a resolution of the Government of India, based on the recommendation of the K. C. Neogy Committee.",
    explanation_hi: "योजना आयोग की स्थापना के.सी. नियोगी समिति की सिफारिश के आधार पर, भारत सरकार के एक प्रस्ताव द्वारा मार्च 1950 में की गई थी।"
  },
  {
    question_en: "When was the Planning Commission abolished?",
    question_hi: "योजना आयोग को कब समाप्त किया गया था?",
    options_en: [
      "On 1 January 2015",
      "On 15 August 2014 (by PM Modi)",
      "In 2017"
    ],
    options_hi: [
      "1 जनवरी 2015 को",
      "15 अगस्त 2014 को (मोदी जी द्वारा)",
      "2017 को"
    ],
    correct_option_index: 1,
    explanation_en: "Prime Minister Narendra Modi announced the abolition of the Planning Commission during his Independence Day speech on 15 August 2014. It was replaced by NITI Aayog on 1 January 2015.",
    explanation_hi: "प्रधानमंत्री नरेंद्र मोदी ने 15 अगस्त 2014 को अपने स्वतंत्रता दिवस के भाषण के दौरान योजना आयोग को समाप्त करने की घोषणा की। इसे 1 जनवरी 2015 को नीति आयोग (NITI Aayog) द्वारा प्रतिस्थापित किया गया।"
  },
  {
    question_en: "Under which article of the Indian Constitution is the Finance Commission constituted?",
    question_hi: "वित्त आयोग (Finance Commission) का गठन भारतीय संविधान के किस अनुच्छेद के तहत किया जाता है?",
    options_en: ["Article 112", "Article 279A", "Article 280"],
    options_hi: ["अनुच्छेद 112", "अनुच्छेद 279A", "अनुच्छेद 280"],
    correct_option_index: 2,
    explanation_en: "Article 280 of the Indian Constitution provides for the constitution of a Finance Commission by the President of India every five years, or at such earlier time as he considers necessary.",
    explanation_hi: "भारतीय संविधान का अनुच्छेद 280 भारत के राष्ट्रपति द्वारा प्रत्येक पांच वर्ष, या ऐसे पहले समय पर जैसा वह आवश्यक समझें, एक वित्त आयोग के गठन का प्रावधान करता है।"
  },
  {
    question_en: "Which statement is correct regarding the 16th Finance Commission?",
    question_hi: "16वें वित्त आयोग के संबंध में कौन सा कथन सही है?",
    options_en: [
      "Its chairman is N. K. Singh.",
      "Its report will be submitted by 31 October 2026.",
      "It was constituted on 31 Dec 2023, and its chairman is Arvind Panagariya."
    ],
    options_hi: [
      "इसके अध्यक्ष एन.के. सिंह हैं।",
      "इसकी रिपोर्ट 31 अक्टूबर 2026 तक प्रस्तुत की जाएगी।",
      "इसका गठन 31 दिसंबर 2023 को हुआ था और अध्यक्ष अरविंद पनगड़िया हैं।"
    ],
    correct_option_index: 2,
    explanation_en: "The 16th Finance Commission was constituted on 31 December 2023, with Dr. Arvind Panagariya as its Chairman. N. K. Singh was the chairman of the 15th Finance Commission.",
    explanation_hi: "16वें वित्त आयोग का गठन 31 दिसंबर 2023 को किया गया था, जिसके अध्यक्ष डॉ. अरविंद पनगड़िया हैं। एन.के. सिंह 15वें वित्त आयोग के अध्यक्ष थे।"
  },
  {
    question_en: "By what other name is the New Economic Policy (NEP) 1991 known?",
    question_hi: "नई आर्थिक नीति (NEP) 1991 को और किस नाम से जाना जाता है?",
    options_en: [
      "Mahalanobis Policy",
      "LPG Policy",
      "Swadeshi Policy"
    ],
    options_hi: [
      "महालनोबिस नीति",
      "LPG नीति",
      "स्वदेशी नीति"
    ],
    correct_option_index: 1,
    explanation_en: "The New Economic Policy of 1991 is also known as the LPG Policy, which stands for Liberalisation, Privatisation, and Globalisation.",
    explanation_hi: "1991 की नई आर्थिक नीति को LPG नीति के रूप में भी जाना जाता है, जिसका अर्थ है उदारीकरण, निजीकरण और वैश्वीकरण।"
  },
  {
    question_en: "What does 'Globalisation' mean in the LPG policy?",
    question_hi: "LPG नीति में 'वैश्वीकरण (Globalisation)' का क्या अर्थ है?",
    options_en: [
      "Only providing stakes in the private sector.",
      "Integrating the Indian market with foreign markets (adopting an open economy).",
      "Simplifying rules and laws."
    ],
    options_hi: [
      "केवल निजी क्षेत्र में हिस्सेदारी प्रदान करना।",
      "भारतीय बाजार को विदेशी बाजारों के साथ जोड़ना (खुली अर्थव्यवस्था अपनाना)।",
      "नियमों और कानूनों को सरल करना।"
    ],
    correct_option_index: 1,
    explanation_en: "Globalisation, in the context of the 1991 policy, refers to the process of integrating the country's economy with the world economy, allowing for the free flow of trade, capital, and technology.",
    explanation_hi: "1991 की नीति के संदर्भ में वैश्वीकरण, देश की अर्थव्यवस्था को विश्व अर्थव्यवस्था के साथ एकीकृत करने की प्रक्रिया को संदर्भित करता है, जिससे व्यापार, पूंजी और प्रौद्योगिकी का मुक्त प्रवाह हो सके।"
  },
  {
    question_en: "Which is an example of the Primary Sector of the economy?",
    question_hi: "अर्थव्यवस्था के प्राथमिक क्षेत्र (Primary Sector) का उदाहरण कौन सा है?",
    options_en: ["Sugar factory", "Internet", "Fisheries"],
    options_hi: ["चीनी कारखाना", "इंटरनेट", "मत्स्यन (Fisheries)"],
    correct_option_index: 2,
    explanation_en: "The Primary Sector involves the extraction and harvesting of natural resources. Fisheries (fishing) falls into this category, along with agriculture and mining. Sugar factories are (Secondary) and Internet is (Tertiary).",
    explanation_hi: "प्राथमिक क्षेत्र में प्राकृतिक संसाधनों का निष्कर्षण और कटाई शामिल है। मत्स्यन (मछली पकड़ना) कृषि और खनन के साथ इसी श्रेणी में आता है। चीनी कारखाने (द्वितीयक) और इंटरनेट (तृतीयक) क्षेत्र हैं।"
  },
  {
    question_en: "When is a firm in equilibrium (to achieve maximum profit)?",
    question_hi: "कोई फर्म संतुलन की स्थिति में कब होती है (अधिकतम लाभ प्राप्त करने के लिए)?",
    options_en: [
      "When its total cost is zero.",
      "When AR > AC.",
      "When the firm's Marginal Revenue (MR) is equal to its Marginal Cost (MC) (MR = MC)."
    ],
    options_hi: [
      "जब उसकी कुल लागत शून्य हो।",
      "जब AR > AC हो।",
      "जब फर्म की सीमांत आय (MR) उसकी सीमांत लागत (MC) के बराबर हो (MR = MC)।"
    ],
    correct_option_index: 2,
    explanation_en: "A firm achieves profit-maximizing equilibrium at the point where its Marginal Revenue (MR) equals its Marginal Cost (MC), and the MC curve is rising.",
    explanation_hi: "एक फर्म उस बिंदु पर लाभ-अधिकतम संतुलन प्राप्त करती है जहाँ उसकी सीमांत आय (MR) उसकी सीमांत लागत (MC) के बराबर होती है, और MC वक्र बढ़ रहा होता है।"
  },
  {
    question_en: "What is the main characteristic of a Perfect Competition Market?",
    question_hi: "पूर्ण प्रतिस्पर्धा बाजार (Perfect Competition Market) की मुख्य विशेषता क्या है?",
    options_en: [
      "Price is determined by the firm.",
      "There are only a few buyers and sellers.",
      "There are many buyers and sellers, and homogeneous (identical) products."
    ],
    options_hi: [
      "मूल्य निर्धारण फर्म द्वारा होता है।",
      "केवल कुछ ही क्रेता और विक्रेता होते हैं।",
      "अनेक क्रेता एवं विक्रेता तथा एक समान वस्तुएं होती हैं।"
    ],
    correct_option_index: 2,
    explanation_en: "Perfect competition is a market structure characterized by a large number of buyers and sellers, homogeneous products, and free entry/exit. Firms are 'price takers', not 'price makers'.",
    explanation_hi: "पूर्ण प्रतिस्पर्धा एक बाजार संरचना है जिसकी विशेषता बड़ी संख्या में क्रेता और विक्रेता, एक समान वस्तुएं और मुक्त प्रवेश/निकास है। फर्में 'मूल्य स्वीकर्ता' होती हैं, 'मूल्य निर्माता' नहीं।"
  },
  {
    question_en: "What kind of profit does a firm in perfect competition earn in the Long Run?",
    question_hi: "पूर्ण प्रतिस्पर्धा में एक फर्म को दीर्घकाल (Long Run) में किस प्रकार का लाभ प्राप्त होता है?",
    options_en: ["Abnormal Profit", "Loss", "Normal Profit"],
    options_hi: ["असामान्य लाभ (Abnormal Profit)", "हानि (Loss)", "सामान्य लाभ (Normal Profit)"],
    correct_option_index: 2,
    explanation_en: "In the long run, due to the free entry and exit of firms, any abnormal profits or losses are competed away. Therefore, firms in perfect competition earn only Normal Profit (where Price = Average Cost).",
    explanation_hi: "दीर्घकाल में, फर्मों के मुक्त प्रवेश और निकास के कारण, कोई भी असामान्य लाभ या हानि समाप्त हो जाती है। इसलिए, पूर्ण प्रतिस्पर्धा में फर्में केवल सामान्य लाभ (जहाँ कीमत = औसत लागत) अर्जित करती हैं।"
  },
  {
    question_en: "Who is the father of the White Revolution?",
    question_hi: "श्वेत क्रांति (White Revolution) के जनक कौन हैं?",
    options_en: [
      "M. S. Swaminathan",
      "Norman Borlaug",
      "Verghese Kurien"
    ],
    options_hi: [
      "एम.एस. स्वामीनाथन",
      "नॉर्मन बोरलॉग",
      "वर्गीस कुरियन"
    ],
    correct_option_index: 2,
    explanation_en: "Dr. Verghese Kurien is known as the 'Father of the White Revolution' in India for his role in 'Operation Flood', which made India the world's largest milk producer. M. S. Swaminathan is the father of the Green Revolution in India.",
    explanation_hi: "डॉ. वर्गीस कुरियन को 'ऑपरेशन फ्लड' में उनकी भूमिका के लिए भारत में 'श्वेत क्रांति का जनक' कहा जाता है, जिसने भारत को दुनिया का सबसे बड़ा दूध उत्पादक बनाया। एम.एस. स्वामीनाथन भारत में हरित क्रांति के जनक हैं।"
  },
  {
    question_en: "What was the main objective of the Green Revolution?",
    question_hi: "हरित क्रांति (Green Revolution) का मुख्य उद्देश्य क्या था?",
    options_en: [
      "Increase milk production.",
      "Increase horticulture production.",
      "Increase in foodgrain production (especially wheat and rice)."
    ],
    options_hi: [
      "दूध उत्पादन बढ़ाना।",
      "बागवानी उत्पादन बढ़ाना।",
      "खाद्यान्न उत्पादन में वृद्धि (विशेष रूप से गेहूँ और चावल)।"
    ],
    correct_option_index: 2,
    explanation_en: "The Green Revolution, which started in the 1960s, aimed to significantly increase foodgrain production, particularly wheat and rice, by using High Yielding Variety (HYV) seeds, fertilizers, and irrigation.",
    explanation_hi: "1960 के दशक में शुरू हुई हरित क्रांति का उद्देश्य उच्च उपज वाली किस्म (HYV) के बीज, उर्वरक और सिंचाई का उपयोग करके खाद्यान्न उत्पादन, विशेष रूप से गेहूँ और चावल में उल्लेखनीय वृद्धि करना था।"
  },
  {
    question_en: "What is the Blue Revolution related to?",
    question_hi: "नीली क्रांति (Blue Revolution) का संबंध किससे है?",
    options_en: ["Potato Production", "Fish Production", "Fertilizer Production"],
    options_hi: ["आलू उत्पादन", "मत्स्य उत्पादन", "उर्वरक उत्पादन"],
    correct_option_index: 1,
    explanation_en: "The Blue Revolution refers to the significant increase in fish production (aquaculture and mariculture). Potato is (Round Revolution), and Fertilizer is (Grey Revolution).",
    explanation_hi: "नीली क्रांति का संबंध मत्स्य उत्पादन (एक्वाकल्चर और मैरीकल्चर) में उल्लेखनीय वृद्धि से है। आलू (गोल क्रांति) और उर्वरक (भूरी/ग्रे क्रांति) से संबंधित है।"
  },
  {
    question_en: "What was the model of the Third Five-Year Plan (1961-1966)?",
    question_hi: "तीसरी पंचवर्षीय योजना (1961-1966) का मॉडल क्या था?",
    options_en: [
      "Harrod-Domar Model",
      "Mahalanobis Model",
      "Gadgil Model"
    ],
    options_hi: [
      "हैरोड-डोमर मॉडल",
      "महालनोबिस मॉडल",
      "गाडगिल मॉडल"
    ],
    correct_option_index: 2,
    explanation_en: "The Third Five-Year Plan (1961-66) is also known as the 'Gadgil Yojana'. The First Plan was based on the Harrod-Domar model, and the Second Plan was based on the Mahalanobis model.",
    explanation_hi: "तीसरी पंचवर्षीय योजना (1961-66) को 'गाडगिल योजना' के नाम से भी जाना जाता है। पहली योजना हैरोड-डोमर मॉडल पर और दूसरी योजना महालनोबिस मॉडल पर आधारित थी।"
  },
  {
    question_en: "Where is the headquarters of SIDBI (Small Industries Development Bank of India) located?",
    question_hi: "SIDBI (Small Industries Development Bank of India) का मुख्यालय कहाँ स्थित है?",
    options_en: ["Mumbai", "New Delhi", "Lucknow"],
    options_hi: ["मुंबई", "नई दिल्ली", "लखनऊ"],
    correct_option_index: 2,
    explanation_en: "The headquarters of SIDBI, the principal financial institution for the promotion, financing, and development of MSMEs, is located in Lucknow, Uttar Pradesh.",
    explanation_hi: "SIDBI (भारतीय लघु उद्योग विकास बैंक), जो MSMEs के प्रचार, वित्तपोषण और विकास के लिए प्रमुख वित्तीय संस्थान है, का मुख्यालय लखनऊ, उत्तर प्रदेश में स्थित है।"
  },
  {
    question_en: "On the recommendation of which committee were RRBs (Regional Rural Banks) established?",
    question_hi: "RRB (Regional Rural Bank) की स्थापना किस समिति की सिफारिश पर की गई थी?",
    options_en: [
      "Shivraman Committee",
      "Narasimham Committee",
      "Kelkar Committee"
    ],
    options_hi: [
      "शिवरामन समिति",
      "नरसिम्हन समिति",
      "केलकर समिति"
    ],
    correct_option_index: 1,
    explanation_en: "Regional Rural Banks (RRBs) were established in 1975 based on the recommendations of the Narasimham Committee (Working Group on Rural Banks).",
    explanation_hi: "क्षेत्रीय ग्रामीण बैंकों (RRBs) की स्थापना 1975 में नरसिम्हन समिति (ग्रामीण बैंकों पर कार्य समूह) की सिफारिशों के आधार पर की गई थी।"
  },
  {
    question_en: "Who was the first Indian Governor of the RBI?",
    question_hi: "RBI के पहले भारतीय गवर्नर कौन थे?",
    options_en: [
      "Sir Osborne Smith",
      "Shaktikanta Das",
      "C. D. Deshmukh (Third Governor)"
    ],
    options_hi: [
      "सर ऑस्बोर्न स्मिथ",
      "शक्तिकांत दास",
      "सी.डी. देशमुख (तीसरे गवर्नर)"
    ],
    correct_option_index: 2,
    explanation_en: "Sir Osborne Smith was the first Governor of the RBI (1935-37). C. D. Deshmukh was the third Governor of the RBI but the first Indian to hold the position (1943-49).",
    explanation_hi: "सर ऑस्बोर्न स्मिथ RBI के पहले गवर्नर (1935-37) थे। सी.डी. देशमुख RBI के तीसरे गवर्नर थे, लेकिन इस पद को धारण करने वाले पहले भारतीय (1943-49) थे।"
  },
  {
    question_en: "Why are 'Intermediate Goods' and 'Transfer Payments' not included in the calculation of National Income?",
    question_hi: "'मध्यवर्ती वस्तुएँ' (Intermediate Goods) और 'हस्तांतरण भुगतान' (Transfer Payments) को राष्ट्रीय आय की गणना में क्यों शामिल नहीं किया जाता है?",
    options_en: [
      "They are legally restricted.",
      "To avoid double counting and because they are payments made without any productive service in return.",
      "They are only related to the capital market."
    ],
    options_hi: [
      "वे कानूनी रूप से प्रतिबंधित हैं।",
      "दोहरी गणना से बचने और बिना उत्पादक सेवा के बदले भुगतान होने के कारण।",
      "वे केवल पूंजी बाजार से संबंधित हैं।"
    ],
    correct_option_index: 1,
    explanation_en: "Intermediate goods are excluded to avoid the problem of 'double counting' (as their value is already included in final goods). Transfer payments (like pensions, scholarships) are excluded because they are payments for which no goods or services are produced in return.",
    explanation_hi: " 'दोहरी गणना' की समस्या से बचने के लिए मध्यवर्ती वस्तुओं को बाहर रखा जाता है (क्योंकि उनका मूल्य पहले से ही अंतिम वस्तुओं में शामिल होता है)। हस्तांतरण भुगतान (जैसे पेंशन, छात्रवृत्ति) को बाहर रखा जाता है क्योंकि वे ऐसे भुगतान हैं जिनके बदले में कोई वस्तु या सेवा का उत्पादन नहीं होता है।"
  },
  {
    question_en: "What is the characteristic of a Closed Economy?",
    question_hi: "बंद अर्थव्यवस्था (Closed Economy) की विशेषता क्या है?",
    options_en: [
      "It promotes globalisation.",
      "It has restrictions on both imports and exports.",
      "It is owned by the private sector."
    ],
    options_hi: [
      "इसमें वैश्वीकरण को बढ़ावा मिलता है।",
      "इसमें आयात (Import) एवं निर्यात (Export) दोनों पर प्रतिबंध होता है।",
      "इसमें निजी क्षेत्र का स्वामित्व होता है।"
    ],
    correct_option_index: 1,
    explanation_en: "A closed economy is one that has no trading activity with other countries. It neither imports nor exports goods and services, meaning it is completely self-sufficient.",
    explanation_hi: "एक बंद अर्थव्यवस्था वह है जिसकी अन्य देशों के साथ कोई व्यापारिक गतिविधि नहीं होती है। यह न तो वस्तुओं और सेवाओं का आयात करता है और न ही निर्यात करता है, जिसका अर्थ है कि यह पूरी तरह से आत्मनिर्भर है।"
  }
];


export default test2Questions;
