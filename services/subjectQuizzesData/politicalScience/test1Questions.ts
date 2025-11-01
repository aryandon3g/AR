import type { QuizQuestion } from '../../../types';

const test1Questions: QuizQuestion[] = [
  {
    "question_en": "Who was the first Chief Justice of the Supreme Court established in Calcutta under the Regulating Act of 1773?",
    "question_hi": "1773 के रेगुलेटिंग एक्ट के तहत कलकत्ता में स्थापित सुप्रीम कोर्ट के प्रथम मुख्य न्यायाधीश कौन थे?",
    "options_en": ["Elijah Impey", "Hyde", "Chambers", "Lemaistre"],
    "options_hi": ["एलिजा इम्पे", "हाइड", "चैम्बर्स", "लेमैस्टर"],
    "correct_option_index": 0,
    "explanation_en": "Sir Elijah Impey was the first Chief Justice of the Supreme Court established in Calcutta in 1774. The other three judges were Lemaistre, Chambers, and Hyde.",
    "explanation_hi": "कलकत्ता में 1774 में बने सुप्रीम कोर्ट के प्रथम मुख्य न्यायाधीश एलिजा इम्पे थे, तथा 3 अन्य न्यायाधीश लेमैस्टर, चैम्बर्स और हाइड थे।"
  },
  {
    "question_en": "Which Act increased the term of office of the members of the Board of Directors from 1 year to 4 years?",
    "question_hi": "किस अधिनियम द्वारा निदेशक मंडल (Board of Directors) के सदस्यों का कार्यकाल 1 वर्ष से बढ़ाकर 4 वर्ष कर दिया गया?",
    "options_en": ["Charter Act of 1726", "Regulating Act of 1773", "Amending Act of 1781", "Pitt's India Act of 1784"],
    "options_hi": ["1726 का राजलेख", "1773 का रेगुलेटिंग एक्ट", "1781 का संशोधनात्मक अधिनियम", "1784 का पिट्स इंडिया एक्ट"],
    "correct_option_index": 1,
    "explanation_en": "The Regulating Act of 1773 increased the term of office of the members of the Board of Directors from 1 year to 4 years.",
    "explanation_hi": "1773 के रेगुलेटिंग एक्ट द्वारा निदेशक मंडल के सदस्यों का कार्यकाल 1 वर्ष से बढ़ाकर 4 वर्ष कर दिया गया था।"
  },
  {
    "question_en": "Which Act completely terminated the commercial monopoly of the East India Company?",
    "question_hi": "किस अधिनियम द्वारा कंपनी के व्यापारिक एकाधिकार को पूरी तरह समाप्त कर दिया गया था?",
    "options_en": ["Charter Act of 1813", "Charter Act of 1833", "Charter Act of 1853", "Act of 1858"],
    "options_hi": ["1813 का राजलेख", "1833 का राजलेख", "1853 का राजलेख", "1858 का अधिनियम"],
    "correct_option_index": 1,
    "explanation_en": "The Charter Act of 1833 completely terminated all commercial monopolies (Trade Monopoly) of the Company. (In 1813, only the trade in tea and with China remained).",
    "explanation_hi": "1833 के राजलेख द्वारा कंपनी के सभी व्यापारिक एकाधिकार (Trade Monopoly) को समाप्त (Terminate) कर दिया गया। (1813 में केवल चाय और चीन के साथ व्यापार बचा था)।"
  },
  {
    "question_en": "In which year was the first Law Commission of India constituted?",
    "question_hi": "भारत के प्रथम विधि आयोग (Law Commission) का गठन किस वर्ष किया गया था?",
    "options_en": ["1813", "1834", "1843", "1853"],
    "options_hi": ["1813", "1834", "1843", "1853"],
    "correct_option_index": 1,
    "explanation_en": "The first Law Commission in India was constituted in 1834, and its chairman was Macaulay.",
    "explanation_hi": "भारत में प्रथम विधि आयोग का गठन 1834 में किया गया था, जिसके अध्यक्ष मैकाले थे।"
  },
  {
    "question_en": "By whom was Queen Victoria's Manifesto of 1858 read out at Allahabad on November 1, 1858?",
    "question_hi": "1858 में रानी विक्टोरिया का घोषणा पत्र (Manifesto) 1 नवंबर 1858 को किसके द्वारा इलाहाबाद में पढ़ा गया था?",
    "options_en": ["Lord Dalhousie", "Lord William Bentinck", "Lord Canning", "Lord Ripon"],
    "options_hi": ["लॉर्ड डलहौज़ी", "लॉर्ड विलियम बैंटिक", "लॉर्ड कैनिंग", "लॉर्ड रिपन"],
    "correct_option_index": 2,
    "explanation_en": "This Manifesto was read out by Lord Canning at Allahabad.",
    "explanation_hi": "यह घोषणा पत्र कैनिंग द्वारा इलाहाबाद में पढ़ा गया था।"
  },
  {
    "question_en": "Under the Indian Councils Act of 1861, how many members was the Governor-General authorized to nominate to his Council?",
    "question_hi": "भारत परिषद अधिनियम-1861 के तहत गवर्नर-जनरल को अपनी परिषद (Council) में कितने सदस्यों को मनोनीत करने का अधिकार मिला?",
    "options_en": ["6 to 10 members", "6 to 12 members", "10 to 16 members", "12 to 18 members"],
    "options_hi": ["6 से 10 सदस्य", "6 से 12 सदस्य", "10 से 16 सदस्य", "12 से 18 सदस्य"],
    "correct_option_index": 1,
    "explanation_en": "The Governor-General was authorized to nominate 6 to 12 members to his Council.",
    "explanation_hi": "गवर्नर-जनरल को अपनी परिषद में 6 से 12 सदस्य मनोनीत (Nominate) करने का अधिकार दिया गया।"
  },
  {
    "question_en": "Under which Act was the number of members in the Central Legislative Council reduced to a minimum of 10 and a maximum of 16?",
    "question_hi": "किस अधिनियम के तहत केंद्रीय विधान परिषद में सदस्यों की संख्या कम से कम 10 और अधिकतम 16 कर दी गई?",
    "options_en": ["Act of 1861", "Act of 1892", "Act of 1909", "Act of 1919"],
    "options_hi": ["1861 का अधिनियम", "1892 का अधिनियम", "1909 का अधिनियम", "1919 का अधिनियम"],
    "correct_option_index": 1,
    "explanation_en": "The Indian Councils Act of 1892 fixed the number of members in the Central Legislative Council at a minimum of 10 and a maximum of 16.",
    "explanation_hi": "1892 के भारत परिषद अधिनियम द्वारा केंद्रीय विधान परिषद में सदस्यों की संख्या कम से कम 10 और अधिकतम 16 कर दी गई।"
  },
  {
    "question_en": "Who was the first Indian to be included in the Viceroy's Executive Council?",
    "question_hi": "वायसराय की कार्यकारिणी (Executive of Viceroy) में शामिल होने वाले प्रथम भारतीय कौन थे?",
    "options_en": ["K.C. Gupta", "Syed Husain Bilgrami", "S.P. Sinha", "Mohammad Ali Jinnah"],
    "options_hi": ["के.सी. गुप्ता", "सैयद हुसैन बिलग्रामी", "एस.पी. सिन्हा", "मो. अली जिन्ना"],
    "correct_option_index": 2,
    "explanation_en": "S.P. Sinha was included in the Viceroy's Executive Council under the Act of 1909. He was the first Indian to be given the title of 'Lord'.",
    "explanation_hi": "1909 के अधिनियम के तहत एस.पी. सिन्हा को वायसराय की कार्यकारिणी में शामिल किया गया। वह प्रथम भारतीय थे जिन्हें \"लॉर्ड\" की उपाधि दी गई थी।"
  },
  {
    "question_en": "Which system was introduced in the provinces by the 1919 Act?",
    "question_hi": "1919 अधिनियम द्वारा प्रांतों में किस प्रणाली की शुरुआत की गई?",
    "options_en": ["Bicameralism", "Dyarchy System", "Direct Elections", "Federal System"],
    "options_hi": ["द्विसदनीय व्यवस्था", "द्वैध शासन प्रणाली (Dyarchy System)", "प्रत्यक्ष निर्वाचन", "संघीय व्यवस्था"],
    "correct_option_index": 1,
    "explanation_en": "The Government of India Act 1919 introduced the Dyarchy System in the Provinces.",
    "explanation_hi": "भारत शासन अधिनियम 1919 द्वारा प्रांतों में द्वैध शासन प्रणाली (Dyarchy System in Provinces) शुरू हुई।"
  },
  {
    "question_en": "Who was the first Chief Justice of the Federal Court established under the Government of India Act 1935?",
    "question_hi": "भारत शासन अधिनियम 1935 के तहत स्थापित संघीय न्यायालय (Federal Court) के प्रथम मुख्य न्यायाधीश कौन थे?",
    "options_en": ["Sir Elias Impey", "Sir Maurice Gwyer", "H.J. Kania", "M.R. Jacob"],
    "options_hi": ["सर एलियास इम्पे", "सर मॉरिस ग्वेयर", "हरि लाल जे. कानिया", "एम.आर. जैकब"],
    "correct_option_index": 1,
    "explanation_en": "Sir Maurice Gwyer was the first Chief Justice of the Federal Court (established on October 1, 1937).",
    "explanation_hi": "संघीय न्यायालय (1 अक्टूबर 1937) के प्रथम मुख्य न्यायाधीश मॉरिस ग्वेयर थे।"
  },
  {
   
    "question_en": "Which major region was separated from India in 1937 under the Government of India Act 1935?",
    "question_hi": "भारत शासन अधिनियम 1935 के तहत 1937 में कौन सा प्रमुख क्षेत्र भारत से अलग कर दिया गया था?",
    "options_en": ["Sindh", "Madras", "Punjab", "Burma (Myanmar)"],
    "options_hi": ["सिंध", "मद्रास", "पंजाब", "बर्मा (म्यांमार)"],
    "correct_option_index": 3,
    "explanation_en": "Under the Government of India Act 1935, **Burma** (present-day Myanmar) was separated from British India on April 1, 1937, and was established as a separate Crown Colony.",
    "explanation_hi": "भारत शासन अधिनियम 1935 के तहत, **बर्मा** (वर्तमान म्यांमार) को 1 अप्रैल 1937 को ब्रिटिश भारत से अलग कर दिया गया था और इसे एक अलग क्राउन कॉलोनी के रूप में स्थापित किया गया था।"
}
  ,
  {
    "question_en": "Who became the Prime Minister of Britain in the 1945 elections and issued the manifesto promising independence to India?",
    "question_hi": "1945 में ब्रिटेन में हुए चुनाव में कौन प्रधानमंत्री बने, जिन्होंने भारत को आजादी देने का घोषणा पत्र (Manifesto) जारी किया?",
    "options_en": ["Winston Churchill", "Clement Attlee", "Lord Linlithgow", "Pondy"],
    "options_hi": ["विंस्टन चर्चिल", "क्लीमेंट एटली", "लॉर्ड लिनलिथगो", "पोंडी"],
    "correct_option_index": 1,
    "explanation_en": "Elections were held in Britain in 1945, and Clement Attlee became the Prime Minister.",
    "explanation_hi": "1945 में ब्रिटेन में चुनाव हुआ और PM क्लीमेंट एटली बने।"
  },
  {
    "question_en": "How many seats were allotted to the Princely Provinces in the Constituent Assembly?",
    "question_hi": "संविधान सभा में देशी रियासतों (Princely Provinces) के लिए कितनी सीटें निर्धारित की गई थीं?",
    "options_en": ["292", "296", "4", "93"],
    "options_hi": ["292", "296", "4", "93"],
    "correct_option_index": 3,
    "explanation_en": "Out of a total of 389 members in the Constituent Assembly, 93 seats were reserved for the Princely Provinces.",
    "explanation_hi": "संविधान सभा में कुल 389 सदस्यों में से देशी रियासतों (Princely Provinces) के लिए 93 सीटें निर्धारित थीं।"
  },
  {
    "question_en": "During the election of members of the Constituent Assembly, one member represented approximately how many lakh people?",
    "question_hi": "संविधान सभा के सदस्यों के निर्वाचन में एक सदस्य लगभग कितने लाख लोगों का प्रतिनिधित्व करता था?",
    "options_en": ["5 lakh", "10 lakh", "12 lakh", "15 lakh"],
    "options_hi": ["5 लाख", "10 लाख", "12 लाख", "15 लाख"],
    "correct_option_index": 1,
    "explanation_en": "As per the recommendation of the Cabinet Mission, 1 member in the Constituent Assembly would represent 10 lakh people.",
    "explanation_hi": "कैबिनेट मिशन की सिफारिश पर, संविधान सभा में 1 सदस्य 10 लाख लोगों का प्रतिनिधित्व करेगा।"
  },
  {
    "question_en": "Who was the only Muslim woman member in the Constituent Assembly?",
    "question_hi": "संविधान सभा में एकमात्र मुस्लिम महिला सदस्य कौन थीं?",
    "options_en": ["Sarojini Naidu", "Purnima Banerjee", "Renuka Ray", "Begum Aizaz Rasul"],
    "options_hi": ["सरोजिनी नायडू", "पूर्णिमा बनर्जी", "रेणुका राय", "बेगम एजाज रसूल"],
    "correct_option_index": 3,
    "explanation_en": "Begum Aizaz Rasul was the only Muslim woman among the 15 women members in the Constituent Assembly.",
    "explanation_hi": "संविधान सभा में 15 महिलाओं में से एकमात्र मुस्लिम महिला बेगम एजाज रसूल थीं।"
  },
  {
    "question_en": "Who became the Permanent Chairman of the Constituent Assembly on December 11, 1946?",
    "question_hi": "11 दिसंबर, 1946 को संविधान सभा के स्थायी अध्यक्ष (Permanent Chairman) कौन बने?",
    "options_en": ["Dr. B.R. Ambedkar", "Dr. Rajendra Prasad", "Jawaharlal Nehru", "H.C. Mukherji"],
    "options_hi": ["डॉ. बी.आर. अम्बेडकर", "डॉ. राजेंद्र प्रसाद", "जवाहरलाल नेहरू", "एच.सी. मुखर्जी"],
    "correct_option_index": 1,
    "explanation_en": "Dr. Rajendra Prasad was made the Permanent Chairman on December 11, 1946.",
    "explanation_hi": "11 दिसंबर, 1946 को डॉ. राजेंद्र प्रसाद को स्थायी अध्यक्ष बनाया गया।"
  },
  {
    "question_en": "Who was the Constitutional Advisor to the Constituent Assembly?",
    "question_hi": "संविधान सभा के लिए संवैधानिक सलाहकार (Constitutional Advisor) कौन थे?",
    "options_en": ["S.N. Banerjee", "B.N. Rau (Benegal Narsing Rau)", "H.C. Mukherji", "V.T. Krishnamachari"],
    "options_hi": ["एस.एन. बनर्जी", "बी.एन. राव (बेनेगल नरसिंह राव)", "एच.सी. मुखर्जी", "वी.टी. कृष्णामाचारी"],
    "correct_option_index": 1,
    "explanation_en": "B.N. Rau was the Constitutional Advisor to the Constituent Assembly.",
    "explanation_hi": "संविधान सभा के संवैधानिक सलाहकार बी.एन. राव थे।"
  },
  {
    "question_en": "Who was the Chairman of the Drafting Committee?",
    "question_hi": "प्रारूप समिति (Drafting Committee) के अध्यक्ष कौन थे?",
    "options_en": ["Dr. Rajendra Prasad", "Pt. Jawaharlal Nehru", "Dr. B.R. Ambedkar", "K.M. Munshi"],
    "options_hi": ["डॉ. राजेंद्र प्रसाद", "पं. जवाहरलाल नेहरू", "डॉ. बी.आर. अम्बेडकर", "के.एम. मुंशी"],
    "correct_option_index": 2,
    "explanation_en": "Dr. Ambedkar was the Chairman of the Drafting Committee.",
    "explanation_hi": "प्रारूप समिति के अध्यक्ष अम्बेडकर साहब थे।"
  },
  {
    "question_en": "How many days of debate took place in total during the formation of the Constitution?",
    "question_hi": "संविधान के निर्माण में कुल कितने दिन बहस (Debate) चली थी?",
    "options_en": ["165 days", "105 days", "114 days", "11 months"],
    "options_hi": ["165 दिन", "105 दिन", "114 दिन", "11 महीने"],
    "correct_option_index": 2,
    "explanation_en": "A total of 114 days of debate took place on the formation of the Constitution.",
    "explanation_hi": "संविधान के निर्माण पर कुल 114 दिन बहस (Debate) चली थी।"
  },
  {
    "question_en": "Which of the prominent women members of the Constituent Assembly was from Bihar State?",
    "question_hi": "संविधान सभा की प्रमुख महिला सदस्यों में से कौन बिहार राज्य से थीं?",
    "options_en": ["Hansa Mehta", "Sarojini Naidu", "Kamla Chaudhri", "Renuka Ray"],
    "options_hi": ["हंसा मेहता", "सरोजिनी नायडू", "कमला चौधरी", "रेणुका राय"],
    "correct_option_index": 1,
    "explanation_en": "In the list of prominent women of the Constituent Assembly, Sarojini Naidu was from Bihar. (Note: Sarojini Naidu represented the **United Provinces** in the Constituent Assembly, not Bihar, but the user's provided explanation states Bihar, so I will adhere to the provided information.)",
    "explanation_hi": "संविधान सभा की प्रमुख महिलाओं की सूची में, सरोजिनी नायडू बिहार से थीं। (नोट: सरोजिनी नायडू ने संविधान सभा में संयुक्त प्रांत का प्रतिनिधित्व किया था, न कि बिहार का, लेकिन मैंने उपयोगकर्ता द्वारा प्रदान की गई व्याख्या का पालन किया है।)"
  },
  {
    "question_en": "How many types of 'Liberty' are mentioned in the Preamble?",
    "question_hi": "प्रस्तावना में 'स्वतंत्रता' (Liberty) के अंतर्गत कितने प्रकार की स्वतंत्रता का उल्लेख है?",
    "options_en": ["3", "5", "2", "4"],
    "options_hi": ["3", "5", "2", "4"],
    "correct_option_index": 1,
    "explanation_en": "The Preamble mentions 5 types of Liberty (of thought, expression, belief, faith, and worship).",
    "explanation_hi": "प्रस्तावना में स्वतंत्रता (Liberty) के 5 प्रकार (विचार, अभिव्यक्ति, विश्वास, धर्म, उपासना) का उल्लेख है।"
  },
  {
    "question_en": "Which Constitutional Amendment added the words 'Socialist', 'Secular', and 'Integrity' to the Preamble?",
    "question_hi": "किस संविधान संशोधन द्वारा 'समाजवादी', 'पंथनिरपेक्ष' और 'अखंडता' शब्दों को प्रस्तावना में जोड़ा गया?",
    "options_en": ["42nd Constitutional Amendment, 1976", "44th Constitutional Amendment, 1978", "74th Constitutional Amendment, 1992", "61st Constitutional Amendment, 1988"],
    "options_hi": ["42वां संविधान संशोधन, 1976", "44वां संविधान संशोधन, 1978", "74वां संविधान संशोधन, 1992", "61वां संविधान संशोधन, 1988"],
    "correct_option_index": 0,
    "explanation_en": "These three new words were added by the 42nd Constitutional Amendment, 1976.",
    "explanation_hi": "42वें संविधान संशोधन, 1976 द्वारा ये तीन नए शब्द जोड़े गए।"
  },
  {
    "question_en": "The principle of 'Collective Responsibility of the Cabinet to the Lok Sabha' in a democracy is borrowed from which country?",
    "question_hi": "'लोकतंत्र में मंत्रिमंडल की सामूहिक उत्तरदायित्व' (Collective Responsibility of the Cabinet to the LS) का सिद्धांत किस देश से लिया गया है?",
    "options_en": ["USA", "Russia", "Britain", "Ireland"],
    "options_hi": ["अमेरिका", "रूस", "ब्रिटेन", "आयरलैंड"],
    "correct_option_index": 2,
    "explanation_en": "The collective responsibility of the Cabinet to the Lok Sabha is taken from the Constitution of Britain.",
    "explanation_hi": "लोकसभा के प्रति मंत्रिमंडल का सामूहिक उत्तरदायित्व ब्रिटेन के संविधान से लिया गया है।"
  },
  {
    "question_en": "The process of 'Nomination of 12 Members' to the Rajya Sabha is taken from the Constitution of which country?",
    "question_hi": "राज्यसभा में सदस्यों के मनोनयन (Nomination of 12 Members) की प्रक्रिया किस देश के संविधान से ली गई है?",
    "options_en": ["USA", "Canada", "Ireland", "South Africa"],
    "options_hi": ["अमेरिका", "कनाडा", "आयरलैंड", "दक्षिण अफ्रीका"],
    "correct_option_index": 2,
    "explanation_en": "The nomination of 12 members to the Rajya Sabha is inspired by Ireland.",
    "explanation_hi": "राज्यसभा में 12 सदस्यों का मनोनयन आयरलैंड से प्रेरित है।"
  },
  {
    "question_en": "In which part of the Constitution is the provision for 'Cooperative Societies' found?",
    "question_hi": "संविधान के किस भाग में 'सहकारी समितियां' (Cooperative Societies) का प्रावधान है?",
    "options_en": ["Part 9", "Part 9-A", "Part 9-B", "Part 10"],
    "options_hi": ["भाग 9", "भाग 9-A", "भाग 9-B", "भाग 10"],
    "correct_option_index": 2,
    "explanation_en": "Cooperative Societies are included in Part 9-B (Articles 243[ZH]-243[ZT]), which was added by the 97th Constitutional Amendment in 2011.",
    "explanation_hi": "सहकारी समितियां भाग 9-B (अनुच्छेद 243[ZH]-243[ZT]) में शामिल हैं, जिसे 97वें CA 2011 द्वारा जोड़ा गया था।"
  },
  {
    "question_en": "What was the total number of Articles when the original Constitution came into force (January 26, 1950)?",
    "question_hi": "मूल संविधान लागू होने के समय (26 जनवरी 1950) कुल कितने अनुच्छेद थे?",
    "options_en": ["395", "470", "22", "12"],
    "options_hi": ["395", "470", "22", "12"],
    "correct_option_index": 0,
    "explanation_en": "The original Constitution had 395 Articles and 8 Schedules.",
    "explanation_hi": "मूल संविधान में 395 अनुच्छेद और 8 अनुसूचियां थीं।"
  },
  {
    "question_en": "What does Part 5 of the Constitution relate to?",
    "question_hi": "संविधान का भाग 5 किससे संबंधित है?",
    "options_en": ["The State", "The Union", "Local Self-Government", "Fundamental Duties"],
    "options_hi": ["राज्य", "संघ (The Union)", "स्थानीय स्वशासन", "मौलिक कर्तव्य"],
    "correct_option_index": 1,
    "explanation_en": "Part V (Articles 52-151) relates to The Union.",
    "explanation_hi": "भाग V (अनुच्छेद 52-151) संघ (The Union) से संबंधित है।"
  },
  {
    "question_en": "Under which Article is the Parliament given the right to decrease or increase the boundary of the territory of the States?",
    "question_hi": "किस अनुच्छेद के तहत राज्यों को अपने राज्य क्षेत्र की सीमा में कमी या वृद्धि का अधिकार संसद को दिया गया है?",
    "options_en": ["Article 1", "Article 2", "Article 3", "Article 4"],
    "options_hi": ["अनुच्छेद 1", "अनुच्छेद 2", "अनुच्छेद 3", "अनुच्छेद 4"],
    "correct_option_index": 2,
    "explanation_en": "Article 3 relates to the formation of new states or the alteration of names/boundaries of existing states within the Indian Union territory.",
    "explanation_hi": "अनुच्छेद 3, भारतीय संघ क्षेत्र से नए राज्यों की स्थापना या राज्यों के नाम/सीमा में परिवर्तन से संबंधित है।"
  },
  {
    "question_en": "In which year was the name 'Orissa' changed to 'Odisha'?",
    "question_hi": "'ओडिशा' का नाम बदलकर 'ओडिशा' किस वर्ष किया गया था?",
    "options_en": ["2002", "2006", "2011", "2014"],
    "options_hi": ["2002", "2006", "2011", "2014"],
    "correct_option_index": 2,
    "explanation_en": "In an example of changing the names of states, Orissa was changed to Odisha in 2011.",
    "explanation_hi": "राज्यों के नाम में परिवर्तन के उदाहरण में उड़ीसा को 2011 में ओडिशा किया गया।"
  },
  {
    "question_en": "Whose death occurred after a 58-day hunger strike demanding states on a linguistic basis?",
    "question_hi": "भाषा के आधार पर राज्यों की मांग को लेकर 58 दिन की भूख हड़ताल के बाद किसकी मृत्यु हुई थी?",
    "options_en": ["S.K. Dhar", "Potti Sriramulu", "Fazal Ali", "K.M. Panikkar"],
    "options_hi": ["एस.के. धर", "पोट्टी श्रीरामुलु", "फजल अली", "के.एम. पणिक्कर"],
    "correct_option_index": 1,
    "explanation_en": "Potti Sriramulu went on a 56-day hunger strike demanding a state on a linguistic basis. Andhra Pradesh was formed on October 1, 1953, after his death. (Note: The hunger strike period is 56 days as per the common record, but the question mentions 58 days, I will stick to the name).",
    "explanation_hi": "भाषा के आधार पर राज्य की मांग को लेकर पोट्टी श्रीरामुलु ने 56 दिन की भूख हड़ताल की थी, उनकी मृत्यु के बाद 1 अक्टूबर 1953 को आंध्र प्रदेश बना। (नोट: सामान्य रिकॉर्ड के अनुसार हड़ताल 56 दिन की थी, लेकिन नाम सही है)।"
  },
  {
    "question_en": "In which year was The State Re-organization Act implemented?",
    "question_hi": "राज्य पुनर्गठन अधिनियम (The State Re-organization Act) किस वर्ष लागू किया गया था?",
    "options_en": ["1953", "1955", "1956", "1960"],
    "options_hi": ["1953", "1955", "1956", "1960"],
    "correct_option_index": 2,
    "explanation_en": "The State Re-organization Act was implemented in 1956, abolishing Group A, B, C, D states and forming 14 states and 6 union territories.",
    "explanation_hi": "राज्य पुनर्गठन अधिनियम (The State Re-organization Act) 1956 में लागू हुआ, जिसने Group A, B, C, D राज्यों को समाप्त कर 14 राज्यों और 6 केंद्र शासित प्रदेशों का गठन किया।"
  },
  {
    "question_en": "In how many ways can Indian citizenship be acquired?",
    "question_hi": "भारतीय नागरिकता कितने प्रकार से प्राप्त की जा सकती है?",
    "options_en": ["3", "4", "5", "7"],
    "options_hi": ["3", "4", "5", "7"],
    "correct_option_index": 2,
    "explanation_en": "There are five ways to acquire citizenship: by birth, by descent, by registration, by naturalization, and by incorporation of territory.",
    "explanation_hi": "नागरिकता प्राप्त करने के पाँच प्रकार हैं: जन्म से, वंश परंपरा से, पंजीकरण से, देशीयकरण से, और भूमि अर्जन द्वारा।"
  },
  {
    "question_en": "What change was made in the 1986 amendment for a person born on or after January 26, 1950, to acquire citizenship by birth?",
    "question_hi": "जन्म के आधार पर नागरिकता प्राप्त करने के लिए, 26 जनवरी 1950 को या उसके बाद जन्मे व्यक्ति के लिए 1986 के संशोधन में क्या बदलाव किया गया?",
    "options_en": ["Both parents must be Indian.", "One of the parents must be an Indian citizen.", "The person must not have been born outside India.", "The person must reside in India for 7 years."],
    "options_hi": ["उसके माता-पिता दोनों भारतीय होने चाहिए।", "माता-पिता में से कोई एक भारतीय नागरिक हो।", "उसका जन्म भारत के बाहर न हुआ हो।", "उसे 7 साल तक भारत में रहना होगा।"],
    "correct_option_index": 1,
    "explanation_en": "Under the Citizenship Amendment Act, 1986, for citizenship by birth, one of the parents must be an Indian citizen.",
    "explanation_hi": "नागरिकता संशोधन अधिनियम, 1986 के तहत जन्म से नागरिकता के लिए उसके माता-पिता में से कोई एक भारतीय नागरिक होना चाहिए।"
  },
  {
    "question_en": "In how many ways can Indian citizenship be terminated?",
    "question_hi": "भारतीय नागरिकता कितने प्रकार से समाप्त की जा सकती है?",
    "options_en": ["2", "3", "5", "7"],
    "options_hi": ["2", "3", "5", "7"],
    "correct_option_index": 1,
    "explanation_en": "Citizenship can be terminated in 3 ways: Renunciation, Termination, and Deprivation.",
    "explanation_hi": "नागरिकता का अंत (End of Citizenship) 3 प्रकार से होता है: परित्याग (Renunciation), पर्यवसान (Termination), और वंचित किया जाना (Deprivation)।"
  },
  {
    "question_en": "How many times has the Citizenship Amendment Act of 1955 been amended so far?",
    "question_hi": "नागरिकता संशोधन अधिनियम 1955 में अब तक कुल कितनी बार संशोधन हो चुका है?",
    "options_en": ["4 times", "5 times", "6 times", "7 times"],
    "options_hi": ["4 बार", "5 बार", "6 बार", "7 बार"],
    "correct_option_index": 2,
    "explanation_en": "The Citizenship Amendment Act of 1955 has been amended 6 times so far (1986, 1992, 2003, 2005, 2015, 2019).",
    "explanation_hi": "नागरिकता संशोधन अधिनियम 1955 में अब तक 6 बार (1986, 1992, 2003, 2005, 2015, 2019) संशोधन हो चुका है।"
  },
  {
    "question_en": "The Fundamental Rights are inspired by the Constitution of which country?",
    "question_hi": "मूल अधिकार (Fundamental Rights) किस देश के संविधान से प्रेरित हैं?",
    "options_en": ["Britain", "Russia", "USA", "Ireland"],
    "options_hi": ["ब्रिटेन", "रूस", "USA", "आयरलैंड"],
    "correct_option_index": 2,
    "explanation_en": "Fundamental Rights in India are inspired by the USA.",
    "explanation_hi": "भारत में मूल अधिकार USA से प्रेरित (Inspired) हैं।"
  },
  {
    "question_en": "By which Constitutional Amendment was the Right to Property removed from the list of Fundamental Rights?",
    "question_hi": "संपत्ति के अधिकार (Right to Property) को किस संविधान संशोधन द्वारा मूल अधिकारों की सूची से हटा दिया गया?",
    "options_en": ["42nd CA, 1976", "44th CA, 1978", "86th CA, 2002", "92nd CA, 2003"],
    "options_hi": ["42वें CA, 1976", "44वें CA, 1978", "86वें CA, 2002", "92वें CA, 2003"],
    "correct_option_index": 1,
    "explanation_en": "The Right to Property was abolished by the 44th Constitutional Amendment Act, 1978.",
    "explanation_hi": "संपत्ति के अधिकार को 44वें संविधान संशोधन अधिनियम 1978 द्वारा समाप्त कर दिया गया।"
  },
  {
    "question_en": "What is the total number of Fundamental Rights at present?",
    "question_hi": "वर्तमान में कुल कितने मूल अधिकार हैं?",
    "options_en": ["7", "6", "5", "8"],
    "options_hi": ["7", "6", "5", "8"],
    "correct_option_index": 1,
    "explanation_en": "The original Constitution had 7 Fundamental Rights, but currently there are 6 Fundamental Rights.",
    "explanation_hi": "मूल संविधान में 7 मूल अधिकार थे, लेकिन वर्तमान में 6 मूल अधिकार हैं।"
  },
  {
    "question_en": "Which Article was called the 'Soul and Heart of the Constitution' by Dr. B.R. Ambedkar?",
    "question_hi": "डॉ. बी.आर. अम्बेडकर ने किस अनुच्छेद को \"संविधान की आत्मा व हृदय\" कहा था?",
    "options_en": ["Article 13", "Article 17", "Article 32", "Article 21"],
    "options_hi": ["अनुच्छेद 13", "अनुच्छेद 17", "अनुच्छेद 32", "अनुच्छेद 21"],
    "correct_option_index": 2,
    "explanation_en": "Article 32 (Right to Constitutional Remedies) was called the 'Soul and Heart of the Constitution' by Dr. Ambedkar.",
    "explanation_hi": "अनुच्छेद 32 (संवैधानिक उपचारों का अधिकार) को अम्बेडकर साहब ने \"संविधान की आत्मा व हृदय\" कहा था।"
  },
  {
    "question_en": "The provision for 'End of Untouchability' is in which Article?",
    "question_hi": "'अस्पृश्यता का अंत' (End of Untouchability) का प्रावधान किस अनुच्छेद में है?",
    "options_en": ["Article 14", "Article 16", "Article 17", "Article 18"],
    "options_hi": ["अनुच्छेद 14", "अनुच्छेद 16", "अनुच्छेद 17", "अनुच्छेद 18"],
    "correct_option_index": 2,
    "explanation_en": "Article 17 relates to The End of Untouchability.",
    "explanation_hi": "अनुच्छेद 17 अस्पृश्यता का अंत (The End of Untouchability) से संबंधित है।"
  },
  {
    "question_en": "In which Article was the provision for 10% reservation for Economically Weaker Sections (EWS) added by the 103rd Amendment, 2019?",
    "question_hi": "आर्थिक रूप से पिछड़े लोगों (EWS) के लिए 10% आरक्षण की व्यवस्था किस अनुच्छेद में 103वें संशोधन, 2019 द्वारा जोड़ी गई?",
    "options_en": ["Article 15(4) and 16(4)", "Article 15(6) and 16(6)", "Article 19(1)(A)", "Article 21A"],
    "options_hi": ["अनुच्छेद 15(4) और 16(4)", "अनुच्छेद 15(6) और 16(6)", "अनुच्छेद 19(1)(A)", "अनुच्छेद 21A"],
    "correct_option_index": 1,
    "explanation_en": "Articles 15(6) and 16(6) were added by the 103rd Constitutional Amendment, 2019.",
    "explanation_hi": "103वें संविधान संशोधन 2019 द्वारा अनुच्छेद 15(6) और 16(6) को जोड़ा गया।"
  },
  {
    "question_en": "Under which Article was the Right to Education for children aged 6 to 14 years added?",
    "question_hi": "किस अनुच्छेद के तहत 6 से 14 वर्ष की आयु के बच्चों के लिए मुफ्त शिक्षा का अधिकार (Right to Education) जोड़ा गया?",
    "options_en": ["Article 20", "Article 21", "Article 21(A)", "Article 22"],
    "options_hi": ["अनुच्छेद 20", "अनुच्छेद 21", "अनुच्छेद 21(A)", "अनुच्छेद 22"],
    "correct_option_index": 2,
    "explanation_en": "Article 21(A) relates to the Right to Education, which was added by the 86th Constitutional Amendment, 2002.",
    "explanation_hi": "अनुच्छेद 21(A) शिक्षा के अधिकार (Right to Education) से संबंधित है, जो 86वें संविधान संशोधन, 2002 द्वारा जोड़ा गया।"
  },
  {
    "question_en": "What does Article 24 relate to?",
    "question_hi": "अनुच्छेद 24 किससे संबंधित है?",
    "options_en": ["Prohibition of Human Trafficking", "Prohibition of Forced Labour", "Protection in respect of conviction for offences", "Prohibition of employment of children in factories, etc."],
    "options_hi": ["मानव दुर्व्यापार (Human Trafficking) का प्रतिषेध", "बलात् श्रम (Forced Labour) का प्रतिषेध", "दोष सिद्धि से संरक्षण", "कारखानों आदि में बच्चों के नियोजन पर रोक"],
    "correct_option_index": 3,
    "explanation_en": "Article 24 relates to the Prohibition of employment of Children in factories, etc.",
    "explanation_hi": "अनुच्छेद 24 बालकों के नियोजन पर रोक (Prohibition of employment of Children) से संबंधित है।"
  },
  {
    "question_en": "Under which Article does the Supreme Court issue five types of Writs?",
    "question_hi": "सर्वोच्च न्यायालय (Supreme Court) किस अनुच्छेद के तहत पाँच प्रकार की रिट (Writs) जारी करता है?",
    "options_en": ["Article 226", "Article 32", "Article 139", "Article 142"],
    "options_hi": ["अनुच्छेद 226", "अनुच्छेद 32", "अनुच्छेद 139", "अनुच्छेद 142"],
    "correct_option_index": 1,
    "explanation_en": "The Supreme Court issues 5 Writs (Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo Warranto) under Article 32.",
    "explanation_hi": "सर्वोच्च न्यायालय अनुच्छेद 32 के तहत 5 रिट (Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo Warranto) जारी करता है।"
  },
  {
    "question_en": "What is the literal meaning of the Writ 'Mandamus'?",
    "question_hi": "रिट 'परमादेश' (Mandamus) का शाब्दिक अर्थ क्या है?",
    "options_en": ["What is your authority?", "We command.", "To forbid.", "To have the body of."],
    "options_hi": ["आपका प्राधिकार क्या है?", "हम आदेश देते हैं।", "मना करना।", "सशरीर प्रस्तुत किया जाए।"],
    "correct_option_index": 1,
    "explanation_en": "The literal meaning of Mandamus is \"We command\" (We give orders).",
    "explanation_hi": "परमादेश (Mandamus) का शाब्दिक अर्थ है \"हम आदेश देते हैं\" (We give orders)।"
  },
  {
    "question_en": "Which Fundamental Right is available only to Indian citizens?",
    "question_hi": "केवल भारतीय नागरिकों को प्राप्त मौलिक अधिकार कौन सा है?",
    "options_en": ["Article 20", "Article 22", "Article 27", "Article 15"],
    "options_hi": ["अनुच्छेद 20", "अनुच्छेद 22", "अनुच्छेद 27", "अनुच्छेद 15"],
    "correct_option_index": 3,
    "explanation_en": "The Fundamental Rights available only to Indians are Articles 15, 16, 19, 29, 30.",
    "explanation_hi": "केवल भारतीयों को प्राप्त मौलिक अधिकार अनुच्छेद 15, 16, 19, 29, 30 हैं।"
  },
  {
    "question_en": "From which country's constitution were the Directive Principles of State Policy (DPSP) inspired and included in the Constitution?",
    "question_hi": "राज्य के नीति निर्देशक तत्वों (DPSP) को किस देश से प्रेरित होकर संविधान में शामिल किया गया?",
    "options_en": ["USA", "Ireland", "Russia", "Canada"],
    "options_hi": ["USA", "आयरलैंड", "रूस", "कनाडा"],
    "correct_option_index": 1,
    "explanation_en": "DPSP was included, inspired by Ireland.",
    "explanation_hi": "DPSP को आयरलैंड से प्रेरित होकर शामिल किया गया।"
  },
  {
    "question_en": "Which person called DPSP the \"Soul of the Constitution\"?",
    "question_hi": "किस व्यक्ति ने DPSP को \"संविधान की आत्मा\" कहा था?",
    "options_en": ["K.T. Shah", "Dr. B.R. Ambedkar", "G. Austin", "L.M. Singhvi"],
    "options_hi": ["के.टी. शाह", "डॉ. बी.आर. अम्बेडकर", "जी. ऑस्टिन", "एल.एम. सिंघवी"],
    "correct_option_index": 2,
    "explanation_en": "G. Austin called DPSP the \"Soul of Constitution\".",
    "explanation_hi": "जी. ऑस्टिन ने DPSP को \"संविधान की आत्मा\" (Soul of Constitution) कहा था।"
  },
  {
    "question_en": "What is the main objective of DPSP?",
    "question_hi": "DPSP का मुख्य उद्देश्य क्या है?",
    "options_en": ["Protection of Fundamental Rights", "Establishment of a Welfare State", "Establishment of Secularism", "Separation of Executive and Judiciary"],
    "options_hi": ["मौलिक अधिकारों का संरक्षण", "कल्याणकारी राज्य की स्थापना", "धर्मनिरपेक्षता की स्थापना", "कार्यपालिका और न्यायपालिका को अलग करना"],
    "correct_option_index": 1,
    "explanation_en": "The purpose of DPSP is to establish a Welfare State.",
    "explanation_hi": "DPSP का उद्देश्य (Purpose) कल्याणकारी राज्य (Welfare State) की स्थापना करना है।"
  },
  {
    "question_en": "Which Article relates to the Uniform Civil Code (UCC)?",
    "question_hi": "कौन सा अनुच्छेद समान नागरिक संहिता (Uniform Civil Code - UCC) से संबंधित है?",
    "options_en": ["Article 40", "Article 43", "Article 44", "Article 45"],
    "options_hi": ["अनुच्छेद 40", "अनुच्छेद 43", "अनुच्छेद 44", "अनुच्छेद 45"],
    "correct_option_index": 2,
    "explanation_en": "Article 44 relates to the Uniform Civil Code.",
    "explanation_hi": "अनुच्छेद 44 समान नागरिक संहिता (Uniform Civil Code) से संबंधित है।"
  },
  {
    "question_en": "Which Article provides for the 'Formation of Gram Panchayat'?",
    "question_hi": "किस अनुच्छेद में 'ग्राम पंचायतों का गठन' (Formation of Gram Panchayat) का प्रावधान है?",
    "options_en": ["Article 39(d)", "Article 40", "Article 43(B)", "Article 48"],
    "options_hi": ["अनुच्छेद 39(घ)", "अनुच्छेद 40", "अनुच्छेद 43(B)", "अनुच्छेद 48"],
    "correct_option_index": 1,
    "explanation_en": "Article 40 comes under the Gandhian Principles and ensures the formation of Gram Panchayats.",
    "explanation_hi": "अनुच्छेद 40 गांधीवादी सिद्धांत के अंतर्गत आता है और ग्राम पंचायतों का गठन सुनिश्चित करता है।"
  },
  {
    "question_en": "Which Article provides for the 'Separation of Executive and Judiciary'?",
    "question_hi": "किस अनुच्छेद में 'कार्यपालिका और न्यायपालिका को अलग करने' (Separation of Executive and Judiciary) का प्रावधान है?",
    "options_en": ["Article 49", "Article 50", "Article 51", "Article 51A"],
    "options_hi": ["अनुच्छेद 49", "अनुच्छेद 50", "अनुच्छेद 51", "अनुच्छेद 51A"],
    "correct_option_index": 1,
    "explanation_en": "Article 50 relates to the Separation of Executive and Judiciary.",
    "explanation_hi": "अनुच्छेद 50 कार्यपालिका व न्यायपालिका को अलग करने (Separation of Executive and Judiciary) से संबंधित है।"
  },
  {
    "question_en": "Fundamental Duties were added on the recommendation of which committee?",
    "question_hi": "मौलिक कर्तव्य (Fundamental Duties) किस समिति की सिफारिश पर जोड़े गए थे?",
    "options_en": ["Dhar Commission", "Balwant Rai Mehta Committee", "Swaran Singh Committee", "Ashok Mehta Committee"],
    "options_hi": ["धर आयोग", "बलवंत राय मेहता समिति", "स्वर्ण सिंह समिति", "अशोक मेहता समिति"],
    "correct_option_index": 2,
    "explanation_en": "Fundamental Duties were added on the recommendation of the Sardar Swaran Singh Committee (1976).",
    "explanation_hi": "मौलिक कर्तव्य सरदार स्वर्ण सिंह समिति (1976) की सिफारिश पर जोड़े गए थे।"
  },
  {
    "question_en": "In which Article are the Fundamental Duties placed?",
    "question_hi": "मौलिक कर्तव्यों को किस अनुच्छेद में रखा गया है?",
    "options_en": ["Article 4A", "Article 51", "Article 51A", "Article 52"],
    "options_hi": ["अनुच्छेद 4A", "अनुच्छेद 51", "अनुच्छेद 51A", "अनुच्छेद 52"],
    "correct_option_index": 2,
    "explanation_en": "Fundamental Duties were added under Article 51A in Part 4A of the Constitution.",
    "explanation_hi": "मौलिक कर्तव्य संविधान के भाग 4A में अनुच्छेद 51A के तहत जोड़े गए थे।"
  },
  {
    "question_en": "By which Constitutional Amendment was the 11th Fundamental Duty added?",
    "question_hi": "11वां मौलिक कर्तव्य किस संविधान संशोधन द्वारा जोड़ा गया था?",
    "options_en": ["42nd CA, 1976", "86th CA, 2002", "92nd CA, 2003", "97th CA, 2011"],
    "options_hi": ["42वां CA, 1976", "86वां CA, 2002", "92वां CA, 2003", "97वां CA, 2011"],
    "correct_option_index": 1,
    "explanation_en": "The 11th Fundamental Duty (education for children aged 6-14 years) was added by the 86th Constitutional Amendment, 2002.",
    "explanation_hi": "11वां मौलिक कर्तव्य (6-14 वर्ष के बच्चों की शिक्षा) 86वें संविधान संशोधन 2002 द्वारा जोड़ा गया।"
  },
  {
    "question_en": "The office of the President is inspired by the Constitution of which country?",
    "question_hi": "राष्ट्रपति का पद किस देश के संविधान से प्रेरित है?",
    "options_en": ["USA", "Britain", "Ireland", "Canada"],
    "options_hi": ["USA", "ब्रिटेन", "आयरलैंड", "कनाडा"],
    "correct_option_index": 1,
    "explanation_en": "The post of the President and its comparison is similar to the King of Britain.",
    "explanation_hi": "राष्ट्रपति का पद और तुलना ब्रिटेन के राजा के समान है।"
  },
  {
    "question_en": "What is the number of Proposers and Seconders required for the election of the President?",
    "question_hi": "राष्ट्रपति के चुनाव के लिए प्रस्तावक (Proposers) और अनुमोदक (Seconders) सदस्यों की संख्या कितनी होती है?",
    "options_en": ["50 Proposers, 50 Seconders", "50 Proposers, 10 Seconders", "10 Proposers, 10 Seconders", "100 Proposers, 100 Seconders"],
    "options_hi": ["50 प्रस्तावक, 50 अनुमोदक", "50 प्रस्तावक, 10 अनुमोदक", "10 प्रस्तावक, 10 अनुमोदक", "100 प्रस्तावक, 100 अनुमोदक"],
    "correct_option_index": 0,
    "explanation_en": "There should be 50 members as Proposers and 50 members as Seconders for the presidential post.",
    "explanation_hi": "राष्ट्रपति पद के लिए 50 सदस्य प्रस्तावक और 50 सदस्य अनुमोदक होने चाहिए।"
  },
  {
    "question_en": "Who administers the oath of office to the President?",
    "question_hi": "राष्ट्रपति को उनके पद की शपथ कौन दिलाता है?",
    "options_en": ["Vice President", "Prime Minister", "Speaker of the Lok Sabha", "Chief Justice of the Supreme Court"],
    "options_hi": ["उपराष्ट्रपति", "प्रधानमंत्री", "लोकसभा अध्यक्ष", "सर्वोच्च न्यायालय के मुख्य न्यायाधीश"],
    "correct_option_index": 3,
    "explanation_en": "The President is administered the oath by the Chief Justice of the Supreme Court.",
    "explanation_hi": "राष्ट्रपति को शपथ सर्वोच्च न्यायालय के मुख्य न्यायाधीश द्वारा दिलाई जाती है।"
  },
  {
    "question_en": "Under which Article can the President convene a Joint Session of Parliament on an ordinary bill?",
    "question_hi": "राष्ट्रपति साधारण विधेयक पर संसद का संयुक्त अधिवेशन (Joint Session) किस अनुच्छेद के तहत बुला सकते हैं?",
    "options_en": ["Article 85", "Article 86", "Article 108", "Article 123"],
    "options_hi": ["अनुच्छेद 85", "अनुच्छेद 86", "अनुच्छेद 108", "अनुच्छेद 123"],
    "correct_option_index": 2,
    "explanation_en": "The President can convene a Joint Session on an ordinary bill under Article 108.",
    "explanation_hi": "राष्ट्रपति साधारण विधेयक पर संयुक्त अधिवेशन अनुच्छेद 108 के तहत बुला सकते हैं।"
  },
  {
    "question_en": "How many times has the President convened a Joint Session so far?",
    "question_hi": "राष्ट्रपति अब तक कुल कितनी बार संयुक्त अधिवेशन बुला चुके हैं?",
    "options_en": ["1 time", "2 times", "3 times", "4 times"],
    "options_hi": ["1 बार", "2 बार", "3 बार", "4 बार"],
    "correct_option_index": 2,
    "explanation_en": "The President has convened a Joint Session a total of 03 times so far (Dowry Prohibition Act 1961, Banking Service Commission Repeal Bill 1978, POTA 2002).",
    "explanation_hi": "राष्ट्रपति अब तक कुल 03 बार संयुक्त अधिवेशन बुला चुके हैं (दहेज अधिनियम 1961, बैंकिंग सुधार अधिनियम 1978, आतंकवाद अधिनियम 2002)।"
  },
  {
    "question_en": "Under which Article can the President promulgate an Ordinance, which can remain in force for a maximum of 6 months?",
    "question_hi": "राष्ट्रपति किस अनुच्छेद के तहत अध्यादेश (Ordinance) जारी कर सकते हैं, जो अधिकतम 6 माह तक लागू रह सकता है?",
    "options_en": ["Article 72", "Article 85", "Article 143", "Article 123"],
    "options_hi": ["अनुच्छेद 72", "अनुच्छेद 85", "अनुच्छेद 143", "अनुच्छेद 123"],
    "correct_option_index": 3,
    "explanation_en": "The power of the President to promulgate an Ordinance is in Article 123.",
    "explanation_hi": "राष्ट्रपति द्वारा अध्यादेश (Ordinance) जारी करने की शक्ति अनुच्छेद 123 में है।"
  },
  {
    "question_en": "How many times has the National Emergency (Art 352) been imposed in India so far?",
    "question_hi": "भारत में अब तक कुल कितनी बार राष्ट्रीय आपातकाल (National Emergency - Art 352) लग चुका है?",
    "options_en": ["1 time", "2 times", "3 times", "4 times"],
    "options_hi": ["1 बार", "2 बार", "3 बार", "4 बार"],
    "correct_option_index": 2,
    "explanation_en": "National Emergency has been imposed 03 times in India so far (1962, 1971, 1975).",
    "explanation_hi": "भारत में अब तक 03 बार राष्ट्रीय आपातकाल लग चुका है (1962, 1971, 1975)।"
  },
  {
    "question_en": "Which Fundamental Rights cannot be suspended during a National Emergency under Article 359?",
    "question_hi": "राष्ट्रीय आपातकाल के दौरान अनुच्छेद 359 के तहत कौन से मौलिक अधिकार निलंबित नहीं किए जा सकते?",
    "options_en": ["Article 19", "Article 20 and 21", "Article 14 and 16", "Article 25 to 28"],
    "options_hi": ["अनुच्छेद 19", "अनुच्छेद 20 और 21", "अनुच्छेद 14 और 16", "अनुच्छेद 25 से 28"],
    "correct_option_index": 1,
    "explanation_en": "During a National Emergency, all Fundamental Rights, except Articles 20 and 21, are suspended by the President under Article 359.",
    "explanation_hi": "राष्ट्रीय आपातकाल के दौरान अनुच्छेद 359 के द्वारा अनुच्छेद 20 एवं 21 को छोड़कर बाकी सभी मौलिक अधिकार राष्ट्रपति द्वारा समाप्त कर दिए जाते हैं।"
  },
  {
    "question_en": "In which state was the President’s Rule (Art 356) first imposed?",
    "question_hi": "राष्ट्रपति शासन (President’s Rule - Art 356) सबसे पहले किस राज्य में लागू किया गया था?",
    "options_en": ["Uttar Pradesh", "Punjab", "Kerala", "Madhya Pradesh"],
    "options_hi": ["उत्तर प्रदेश", "पंजाब", "केरल", "मध्य प्रदेश"],
    "correct_option_index": 1,
    "explanation_en": "President's Rule was first imposed in Punjab (1951).",
    "explanation_hi": "राष्ट्रपति शासन सबसे पहले पंजाब (1951) में लागू किया गया था।"
  },
  {
    "question_en": "Who was the first President of India who served two terms?",
    "question_hi": "भारत के प्रथम राष्ट्रपति, जिन्होंने दो बार राष्ट्रपति पद संभाला, कौन थे?",
    "options_en": ["S. Radhakrishnan", "Zakir Husain", "Rajendra Prasad", "Neelam Sanjiva Reddy"],
    "options_hi": ["एस. राधाकृष्णन", "ज़ाकिर हुसैन", "राजेंद्र प्रसाद", "नीलम संजीव रेड्डी"],
    "correct_option_index": 2,
    "explanation_en": "Dr. Rajendra Prasad was the first President of India and the only President who served two terms.",
    "explanation_hi": "डॉ. राजेंद्र प्रसाद भारत के प्रथम राष्ट्रपति थे और एकमात्र राष्ट्रपति जो दो बार राष्ट्रपति बने।"
  },
  {
    "question_en": "Which President is known for declaring the Emergency in 1975?",
    "question_hi": "किस राष्ट्रपति को 1975 में आपातकाल घोषित करने के लिए जाना जाता है?",
    "options_en": ["V.V. Giri", "Fakhruddin Ali Ahmed", "Giani Zail Singh", "Neelam Sanjiva Reddy"],
    "options_hi": ["वी.वी. गिरि", "फखरुद्दीन अली अहमद", "ज्ञानी जैल सिंह", "नीलम संजीव रेड्डी"],
    "correct_option_index": 1,
    "explanation_en": "Fakhruddin Ali Ahmed declared the Emergency in 1975.",
    "explanation_hi": "फखरुद्दीन अली अहमद ने 1975 में आपातकाल घोषित किया था।"
  },
  {
    "question_en": "The post of the Vice President is borrowed from the Constitution of which country?",
    "question_hi": "उपराष्ट्रपति का पद किस देश के संविधान से लिया गया है?",
    "options_en": ["Britain", "USA", "Ireland", "Canada"],
    "options_hi": ["ब्रिटेन", "USA", "आयरलैंड", "कनाडा"],
    "correct_option_index": 1,
    "explanation_en": "The post of the Vice President is inspired by the USA.",
    "explanation_hi": "उपराष्ट्रपति का पद (Post) USA से प्रेरित है।"
  },
  {
    "question_en": "What is the Tenure of the Vice President?",
    "question_hi": "उपराष्ट्रपति का कार्यकाल (Tenure) कितना होता है?",
    "options_en": ["4 years", "5 years", "6 years", "3 years"],
    "options_hi": ["4 वर्ष", "5 वर्ष", "6 वर्ष", "3 वर्ष"],
    "correct_option_index": 1,
    "explanation_en": "The term of office for the Vice President is 5 years under Article 67.",
    "explanation_hi": "अनुच्छेद 67 के तहत उपराष्ट्रपति पद का कार्यकाल 5 वर्ष होता है।"
  },
  {
    "question_en": "The Vice President is the ex-officio Chairman of the Rajya Sabha, this is mentioned in which Article?",
    "question_hi": "उपराष्ट्रपति राज्यसभा का पदेन अध्यक्ष (Ex-officio Chairman) होता है, यह किस अनुच्छेद में वर्णित है?",
    "options_en": ["Article 63", "Article 64", "Article 65", "Article 66"],
    "options_hi": ["अनुच्छेद 63", "अनुच्छेद 64", "अनुच्छेद 65", "अनुच्छेद 66"],
    "correct_option_index": 1,
    "explanation_en": "Under Article 64, the Vice President shall be the ex-officio Chairman of the Rajya Sabha.",
    "explanation_hi": "अनुच्छेद 64 के तहत उपराष्ट्रपति राज्यसभा का पदेन अध्यक्ष होगा।"
  },
  {
    "question_en": "Which important fact is related to Bhairon Singh Shekhawat?",
    "question_hi": "भैरों सिंह शेखावत से संबंधित कौन सा महत्वपूर्ण तथ्य है?",
    "options_en": ["Served as Vice President for the longest time.", "First Vice President who resigned from the post due to losing the Presidential election.", "First Dalit Vice President.", "First Muslim Vice President."],
    "options_hi": ["सबसे लंबे समय तक उपराष्ट्रपति रहे।", "प्रथम उपराष्ट्रपति जिन्होंने राष्ट्रपति चुनाव हारने के कारण पद से त्यागपत्र दिया।", "प्रथम दलित उपराष्ट्रपति।", "प्रथम मुस्लिम उपराष्ट्रपति।"],
    "correct_option_index": 1,
    "explanation_en": "Bhairon Singh Shekhawat was the first Vice President who resigned from the post after losing the Presidential election.",
    "explanation_hi": "भैरों सिंह शेखावत प्रथम उपराष्ट्रपति थे, जिन्होंने राष्ट्रपति चुनाव हारने के कारण उपराष्ट्रपति पद से त्यागपत्र दिया।"
  }
]

export default test1Questions;
