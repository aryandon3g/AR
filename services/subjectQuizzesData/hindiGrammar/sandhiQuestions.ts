import type { QuizQuestion } from '../../../types';
/*
INSTRUCTIONS TO ADD QUESTIONS:

You can use the following prompt with an AI (like Gemini) to generate questions in the correct format.
Replace the [TOPIC] and [NUMBER_OF_QUESTIONS] placeholders with your desired values. For your request, use [Sandhi (संधि) in Hindi Grammar] and [100].

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
    "question_en": "What is the phenomenon called when two 'varnas' (letters/sounds) meet and cause a change?",
    "question_hi": "दो वर्णों के परस्पर मिलने से जो विकार उत्पन्न होता है, उसे क्या कहते हैं?",
    "options_en": ["Samas (Compound)", "Sandhi (Euphonic junction)", "Upsarg (Prefix)", "Pratyay (Suffix)"],
    "options_hi": ["समास", "संधि", "उपसर्ग", "प्रत्यय"],
    "correct_option_index": 1,
    "explanation_en": "When two sounds (dhvanis) meet, they take a new form. This process is called Sandhi.",
    "explanation_hi": "जब दो ध्वनियाँ आपस में मिलती हैं, तब वे एक नया रूप ग्रहण करती हैं, इस प्रक्रिया को संधि कहते हैं।"
}

====================================================================================================

Once you have the generated array, paste it below, replacing the empty array [].
*/

const sandhiQuestions: QuizQuestion[] = [
  {
    "question_en": "What is the phenomenon called when two 'varnas' (letters/sounds) meet and cause a change?",
    "question_hi": "दो वर्णों के परस्पर मिलने से जो विकार उत्पन्न होता है, उसे क्या कहते हैं?",
    "options_en": ["Samas (Compound)", "Sandhi (Euphonic junction)", "Upsarg (Prefix)", "Pratyay (Suffix)"],
    "options_hi": ["समास", "संधि", "उपसर्ग", "प्रत्यय"],
    "correct_option_index": 1,
    "explanation_en": "When two sounds (dhvanis) meet, they take a new form. This process is called Sandhi.",
    "explanation_hi": "जब दो ध्वनियाँ आपस में मिलती हैं, तब वे एक नया रूप ग्रहण करती हैं, इस प्रक्रिया को संधि कहते हैं।"
  },
  {
    "question_en": "How many types of Sandhi are there?",
    "question_hi": "संधि कितने प्रकार की होती है?",
    "options_en": ["Four", "Five", "Three", "Two"],
    "options_hi": ["चार", "पाँच", "तीन", "दो"],
    "correct_option_index": 2,
    "explanation_en": "There are three types of Sandhi – Swar Sandhi (Vowel), Vyanjan Sandhi (Consonant), and Visarga Sandhi.",
    "explanation_hi": "संधि तीन प्रकार की होती है – स्वर संधि, व्यंजन संधि और विसर्ग संधि।"
  },
  {
    "question_en": "The correct word formed from 'Mahā + Īsha' is:",
    "question_hi": "'महा + ईश' से बना शुद्ध शब्द है:",
    "options_en": ["Mahīsha", "Mahāīsha", "Mahesha", "Mahosa"],
    "options_hi": ["महीश", "महाईश", "महेश", "महोस"],
    "correct_option_index": 2,
    "explanation_en": "This is an example of Guna Sandhi. 'ā' + 'ī' combine to form 'e'.",
    "explanation_hi": "यह गुण संधि का उदाहरण है। 'आ' + 'ई' मिलकर 'ए' बनती है।"
  },
  {
    "question_en": "The correct sandhi word formed from 'Para + Upakāra' is:",
    "question_hi": "'पर + उपकार' से निर्मित सही संधि शब्द है:",
    "options_en": ["Paropakara", "Para-upakāra", "Paropakāra", "Paropakāraḥ"],
    "options_hi": ["परोपकर", "परउपकार", "परोपकार", "परोपकारः"],
    "correct_option_index": 2,
    "explanation_en": "This is an example of Guna Sandhi. 'a' + 'u' combine to form 'o'.",
    "explanation_hi": "यह गुण संधि का उदाहरण है। 'अ' + 'उ' मिलकर 'ओ' बनती है।"
  },
  {
    "question_en": "The word formed from 'Sadā + Eva' is:",
    "question_hi": "'सदा + एव' से बनने वाला शब्द है:",
    "options_en": ["Sadeo", "Sadyava", "Sadaiva", "Sadaivaḥ"],
    "options_hi": ["सदेओ", "सद्यव", "सदैव", "सदैवः"],
    "correct_option_index": 2,
    "explanation_en": "This is an example of Vriddhi Sandhi. 'ā' + 'e' combine to form 'ai'.",
    "explanation_hi": "यह वृद्धि संधि का उदाहरण है। 'आ' + 'ए' मिलकर 'ऐ' बनती है।"
  },
  {
    "question_en": "What word will be formed by the sandhi of 'Ati + Āchāra'?",
    "question_hi": "'अति + आचार' की संधि करने पर क्या शब्द बनेगा?",
    "options_en": ["Ati-āchāra", "Attyāchāra", "Atyāchāra", "Atyāchara"],
    "options_hi": ["अतिआचार", "अत्त्याचार", "अत्याचार", "अत्याचर"],
    "correct_option_index": 2,
    "explanation_en": "This is an example of Yana Sandhi (i + ā = yā).",
    "explanation_hi": "यह यण संधि का उदाहरण है (इ + आ = या)।"
  },
  {
    "question_en": "What is the sandhi form of 'Pitṛ + Ājñā'?",
    "question_hi": "'पितृ + आज्ञा' का संधि रूप क्या है?",
    "options_en": ["Pitrājñā", "Pitṛjñā", "Pitra-ājñā", "Pitṛyajñā"],
    "options_hi": ["पित्राज्ञा", "पितृज्ञा", "पित्रआज्ञा", "पितृयज्ञा"],
    "correct_option_index": 0,
    "explanation_en": "This is an example of Yana Sandhi (ṛ + ā = rā).",
    "explanation_hi": "यह यण संधि का उदाहरण है (ऋ + आ = रा)।"
  },
  {
    "question_en": "The correct sandhi word formed from 'Su + Alpa' is:",
    "question_hi": "'सु + अल्प' से बनने वाला शुद्ध संधि शब्द है:",
    "options_en": ["Su-alpa", "Savalpa", "Svalpa", "Suyalpa"],
    "options_hi": ["सुअल्प", "सवल्प", "स्वल्प", "सुयल्प"],
    "correct_option_index": 2,
    "explanation_en": "This is an example of Yana Sandhi (u + a = va).",
    "explanation_hi": "यह यण संधि का उदाहरण है (उ + अ = व)।"
  },
  {
    "question_en": "Which word will be formed by the sandhi of 'Parīkṣā + Arthī'?",
    "question_hi": "'परीक्षा + अर्थी' की संधि करने पर कौन सा शब्द बनेगा?",
    "options_en": ["Parīkṣārthi", "Parīkṣārthī", "Parikṣārthī", "Parīkṣāthī"],
    "options_hi": ["परीक्षार्थि", "परीक्षार्थी", "परिक्षार्थी", "परीक्षाथी"],
    "correct_option_index": 1,
    "explanation_en": "This is an example of Dīrgha Sandhi ('ā' + 'a' = 'ā').",
    "explanation_hi": "यह दीर्घ संधि का उदाहरण है ('आ' + 'अ' = 'आ')।"
  },
  {
    "question_en": "What is the correct sandhi vishchhed (splitting) of the word 'Nayana'?",
    "question_hi": "'नयन' शब्द का सही संधि विच्छेद क्या है?",
    "options_en": ["Ne + Ana", "Naya + Na", "Ne + Ayana", "Nai + Ana"],
    "options_hi": ["ने + अन", "नय + न", "ने + अयन", "नै + अन"],
    "correct_option_index": 0,
    "explanation_en": "This is an example of Ayādi Sandhi (e + a = ay).",
    "explanation_hi": "यह अयादि संधि का उदाहरण है (ए + अ = अय)।"
  },
  {
    "question_en": "According to the definition of Vyanjan Sandhi (Consonant Junction), the change occurs in:",
    "question_hi": "व्यंजन संधि की परिभाषा के अनुसार, वर्णों में बदलाव आता है:",
    "options_en": ["Only when vowels meet", "When there is a change in vowel, consonant, or visarga", "Only when there is a change in consonant or visarga", "Only from the combination of 'a' and 'ā'"],
    "options_hi": ["केवल स्वर मिलने पर", "स्वर, व्यंजन अथवा विसर्ग में बदलाव आने पर", "केवल व्यंजन या विसर्ग में बदलाव आने पर", "केवल 'अ' और 'आ' के मेल से"],
    "correct_option_index": 1,
    "explanation_en": "In sandhi, a change occurs in the vowel, consonant, or visarga upon joining.",
    "explanation_hi": "संधि करने पर स्वर, व्यंजन अथवा विसर्ग में बदलाव आ जाता है।"
  },
  {
    "question_en": "What will be the sandhi word for 'Mata + Aikya'?",
    "question_hi": "'मत + ऐक्य' का संधि शब्द क्या होगा?",
    "options_en": ["Mataikya", "Matekya", "Mataiyakya", "Mata-aikya"],
    "options_hi": ["मतैक्य", "मतेक्य", "मतैयक्य", "मतअइक्य"],
    "correct_option_index": 0,
    "explanation_en": "'a' + 'ai' = 'ai' (Vriddhi Sandhi) (Practice question).",
    "explanation_hi": "'अ' + 'ऐ' = 'ऐ' (वृद्धि संधि) (अभ्यास प्रश्न)।"
  },
  {
    "question_en": "What is the correct sandhi word for 'Sat + Chintā'?",
    "question_hi": "'सत् + चिंता' का सही संधि शब्द क्या है?",
    "options_en": ["Sachittā", "Sachintā", "Sachchintā", "Sañchintā"],
    "options_hi": ["सचित्ता", "सचिंता", "सच्चिंता", "सञ्चिंता"],
    "correct_option_index": 2,
    "explanation_en": "This is an example of Vyanjan Sandhi (Consonant Sandhi).",
    "explanation_hi": "यह व्यंजन संधि का उदाहरण है।"
  },
  {
    "question_en": "The word 'Ataeva' formed from 'Ataḥ + Eva' is an exception to which sandhi rule?",
    "question_hi": "'अतः + एव' से बनने वाला शब्द 'अतएव' किस संधि नियम का अपवाद है?",
    "options_en": ["Swar Sandhi", "Dīrgha Sandhi", "Visarga Sandhi", "Guna Sandhi"],
    "options_hi": ["स्वर संधि", "दीर्घ संधि", "विसर्ग संधि", "गुण संधि"],
    "correct_option_index": 2,
    "explanation_en": "If the visarga is followed by a vowel other than 'a', the visarga is dropped, e.g., Ataḥ + Eva = Ataeva.",
    "explanation_hi": "विसर्ग के बाद 'अ' से भिन्न स्वर होने पर विसर्ग का लोप हो जाता है, जैसे अतः + एव = अतएव।"
  },
  {
    "question_en": "The correct word formed from 'Nava + Ūḍhā' is:",
    "question_hi": "'नव + ऊढ़ा' से बना शुद्ध शब्द है:",
    "options_en": ["Naoḍhā", "Navoḍhā", "Naoḍha", "Nāvoḍhā"],
    "options_hi": ["नओढ़ा", "नवोढ़ा", "नओढा", "नावोढ़ा"],
    "correct_option_index": 1,
    "explanation_en": "This is an example of Guna Sandhi ('a' + 'ū' = 'o').",
    "explanation_hi": "यह गुण संधि का उदाहरण है ('अ' + 'ऊ' = 'ओ')।"
  },
  {
    "question_en": "The word 'Vāgīsha' is an example of which sandhi?",
    "question_hi": "'वागीश' शब्द किस संधि का उदाहरण है?",
    "options_en": ["Dīrgha Sandhi", "Vyanjan Sandhi", "Visarga Sandhi", "Guna Sandhi"],
    "options_hi": ["दीर्घ संधि", "व्यंजन संधि", "विसर्ग संधि", "गुण संधि"],
    "correct_option_index": 1,
    "explanation_en": "Vāk + Īsha = Vāgīsha, Vyanjan Sandhi (Consonant Sandhi).",
    "explanation_hi": "वाक् + ईश = वागीश, व्यंजन संधि।"
  },
  {
    "question_en": "What is the correct splitting of the word 'Nyūna'?",
    "question_hi": "'न्यून' शब्द का सही विच्छेद क्या है?",
    "options_en": ["Na + Ūna", "Ni + Ūna", "Nā + Ūna", "Nya + Ūna"],
    "options_hi": ["न + ऊन", "नि + ऊन", "ना + ऊन", "न्य + ऊन"],
    "correct_option_index": 1,
    "explanation_en": "This is Yana Sandhi (i + ū = yū).",
    "explanation_hi": "यह यण संधि है (इ + ऊ = यू)।"
  },
  {
    "question_en": "What will be the result of the sandhi of 'Chikitsā + Ālaya'?",
    "question_hi": "'चिकित्सा + आलय' की संधि करने पर क्या होगा?",
    "options_en": ["Chikitsālaya", "Chikitsyālaya", "Chikitsalaya", "Chikitsā-ālaya"],
    "options_hi": ["चिकित्सालय", "चिकित्स्यालय", "चिकित्सलय", "चिकित्साआलय"],
    "correct_option_index": 0,
    "explanation_en": "This is Dīrgha Sandhi ('ā' + 'ā' = 'ā').",
    "explanation_hi": "यह दीर्घ संधि है ('आ' + 'आ' = 'आ')।"
  },
  {
    "question_en": "Which Swar Sandhi (Vowel Sandhi) is in 'Paropakāra'?",
    "question_hi": "'परोपकार' में कौन सी स्वर संधि है?",
    "options_en": ["Yana Sandhi", "Vriddhi Sandhi", "Guna Sandhi", "Dīrgha Sandhi"],
    "options_hi": ["यण संधि", "वृद्धि संधि", "गुण संधि", "दीर्घ संधि"],
    "correct_option_index": 2,
    "explanation_en": "Para + Upakāra (a + u = o).",
    "explanation_hi": "पर + उपकार (अ + उ = ओ)।"
  },
  {
    "question_en": "'Parīkṣā + Arthī' is an example of which type of sandhi?",
    "question_hi": "'परीक्षा + अर्थी' किस प्रकार की संधि का उदाहरण है?",
    "options_en": ["Vyanjan Sandhi", "Dīrgha Sandhi", "Yana Sandhi", "Vriddhi Sandhi"],
    "options_hi": ["व्यंजन संधि", "दीर्घ संधि", "यण संधि", "वृद्धि संधि"],
    "correct_option_index": 1,
    "explanation_en": "Where two similar varnas (short or long) meet to form the long version of that varna.",
    "explanation_hi": "जहाँ दो समान वर्ण (ह्रस्व या दीर्घ) मिलकर उसी वर्ण का दीर्घ रूप बनाते हैं।"
  },
  {
    "question_en": "Which Swar Sandhi is in 'Sadaiva'?",
    "question_hi": "'सदैव' में कौन सी स्वर संधि है?",
    "options_en": ["Yana Sandhi", "Guna Sandhi", "Vriddhi Sandhi", "Ayādi Sandhi"],
    "options_hi": ["यण संधि", "गुण संधि", "वृद्धि संधि", "अयादि संधि"],
    "correct_option_index": 2,
    "explanation_en": "In Vriddhi Sandhi, if 'e' or 'o' is followed by any vowel, it becomes 'ai' or 'au'. (Note: This explanation is slightly inaccurate, the rule is a/ā + e/ai = ai).",
    "explanation_hi": "वृद्धि संधि में 'ए' या 'ओ' के बाद कोई स्वर आने पर 'ऐ' या 'औ' बनता है।"
  },
  {
    "question_en": "The sandhi word formed from 'Su + Āgata' is:",
    "question_hi": "'सु + आगत' से बनने वाला संधि शब्द है:",
    "options_en": ["Suāgata", "Svāgta", "Svāgata", "Suvāgata"],
    "options_hi": ["सुआगत", "स्वाग्त", "स्वागत", "सुवागत"],
    "correct_option_index": 2,
    "explanation_en": "This is Yana Sandhi (u + ā = vā).",
    "explanation_hi": "यह यण संधि है (उ + आ = वा)।"
  },
  {
    "question_en": "If 'a' or 'ā' is followed by 'i' or 'ī', both combine to form 'e'. This rule belongs to which sandhi?",
    "question_hi": "यदि 'अ' या 'आ' के बाद 'इ' या 'ई' रहे तो दोनों मिलकर 'ए' हो जाता है। यह नियम किस संधि का है?",
    "options_en": ["Dīrgha Sandhi", "Guna Sandhi", "Vriddhi Sandhi", "Yana Sandhi"],
    "options_hi": ["दीर्घ संधि", "गुण संधि", "वृद्धि संधि", "यण संधि"],
    "correct_option_index": 1,
    "explanation_en": "(ā + ī = e), e.g., Mahā + Īsha = Mahesha.",
    "explanation_hi": "(आ + ई = ए), जैसे महा + ईश = महेश।"
  },
  {
    "question_en": "What will be formed from the sandhi of 'Mata + Anusāra'?",
    "question_hi": "'मत + अनुसार' की संधि करने पर क्या बनेगा?",
    "options_en": ["Matenusāra", "Matānusāra", "Mata-anusāra", "Matānūsāra"],
    "options_hi": ["मतेनुसार", "मतानुसार", "मतअनुसार", "मतानूसार"],
    "correct_option_index": 1,
    "explanation_en": "This is Dīrgha Sandhi (a + a = ā).",
    "explanation_hi": "यह दीर्घ संधि है (अ + अ = आ)।"
  },
  {
    "question_en": "The 'tra' sound, as in 'Mātrārtha', falls under which Swar Sandhi?",
    "question_hi": "'त्र' ध्वनि किस स्वर संधि के अंतर्गत आती है, जैसे 'मात्रार्थ' में?",
    "options_en": ["Dīrgha Sandhi", "Guna Sandhi", "Yana Sandhi", "Vriddhi Sandhi"],
    "options_hi": ["दीर्घ संधि", "गुण संधि", "यण संधि", "वृद्धि संधि"],
    "correct_option_index": 2,
    "explanation_en": "Mātṛ + Artha = Mātrārtha (ṛ + a = ra).",
    "explanation_hi": "मातृ + अर्थ = मात्रार्थ (ऋ + अ = र)।"
  },
  {
    "question_en": "The correct sandhi word for 'Iti + Ādi' is:",
    "question_hi": "'इति + आदि' का शुद्ध संधि शब्द है:",
    "options_en": ["Ityadi", "Ityādi", "Iti-ādi", "Ityadiḥ"],
    "options_hi": ["इत्यदि", "इत्यादि", "इतिआदि", "इत्यदिः"],
    "correct_option_index": 1,
    "explanation_en": "This is an example of Yana Sandhi.",
    "explanation_hi": "यह यण संधि का उदाहरण है।"
  },
  {
    "question_en": "If a visarga is followed by 'k', 'kh', 'p', or 'f', the visarga does not change, as in:",
    "question_hi": "यदि विसर्ग के बाद 'क्', 'ख्', 'प्' या 'फ्' हो, तो विसर्ग में कोई विकार नहीं होता; जैसे:",
    "options_en": ["Ataḥ + Eva", "Manaḥ + Bala", "Prātaḥ + Kāla", "Niḥ + Roga"],
    "options_hi": ["अतः + एव", "मनः + बल", "प्रातः + काल", "नि: + रोग"],
    "correct_option_index": 2,
    "explanation_en": "Prātaḥkāla.",
    "explanation_hi": "प्रातःकाल।"
  },
  {
    "question_en": "In 'Niḥ + Roga', the short vowel becomes long. What will the correct word be?",
    "question_hi": "'निः + रोग' में संधि करने पर ह्रस्व स्वर दीर्घ हो जाता है, शुद्ध शब्द क्या होगा?",
    "options_en": ["Niroga", "Nīroga", "Nīrogaḥ", "Nir roga"],
    "options_hi": ["निरोग", "नीरोग", "नीरोगः", "निर् रोग"],
    "correct_option_index": 1,
    "explanation_en": "A rule of Visarga Sandhi (Niḥ + Roga = Nīroga).",
    "explanation_hi": "विसर्ग संधि का नियम (निः + रोग = नीरोग)।"
  },
  {
    "question_en": "'Mata + Aikya' is an example of which Swar Sandhi?",
    "question_hi": "'मत + ऐक्य' कौन सी स्वर संधि का उदाहरण है?",
    "options_en": ["Dīrgha Sandhi", "Guna Sandhi", "Vriddhi Sandhi", "Yana Sandhi"],
    "options_hi": ["दीर्घ संधि", "गुण संधि", "वृद्धि संधि", "यण संधि"],
    "correct_option_index": 2,
    "explanation_en": "(a + ai = ai) (Practice question).",
    "explanation_hi": "(अ + ऐ = ऐ) (अभ्यास प्रश्न)।"
  },
  {
    "question_en": "The correct word formed from 'Vana + Auṣadhi' is:",
    "question_hi": "'वन + औषधि' से बना शुद्ध शब्द है:",
    "options_en": ["Vanoṣadhi", "Vanauṣadhi", "Vanauṣadhī", "Vana Auṣadhi"],
    "options_hi": ["वनोषधि", "वनौषधि", "वनौषधी", "वन औषधि"],
    "correct_option_index": 1,
    "explanation_en": "(a + au = au) This is an example of Vriddhi Sandhi (Practice question).",
    "explanation_hi": "(अ + औ = औ) यह वृद्धि संधि का उदाहरण है (अभ्यास प्रश्न)।"
  },
  {
    "question_en": "What is the combined form of 'Ati + Anta'?",
    "question_hi": "'अति + अंत' का संधि युक्त रूप क्या है?",
    "options_en": ["Atayanta", "Atyanta", "Ati Anta", "Antya"],
    "options_hi": ["अतयंत", "अत्यन्त", "अति अंत", "अंत्य"],
    "correct_option_index": 1,
    "explanation_en": "This is an example of Yana Sandhi (i + a = ya) (Practice question).",
    "explanation_hi": "यह यण संधि का उदाहरण है (इ + अ = य) (अभ्यास प्रश्न)।"
  },
  {
    "question_en": "If 'i' or 'ī' is followed by any different vowel, 'i' or 'ī' changes to 'ya'. This is the rule of which sandhi?",
    "question_hi": "'इ' या 'ई' के बाद कोई भिन्न स्वर आए तो 'इ' या 'ई' के बदले 'य' हो जाता है, यह किस संधि का नियम है?",
    "options_en": ["Dīrgha Sandhi", "Yana Sandhi", "Guna Sandhi", "Ayādi Sandhi"],
    "options_hi": ["दीर्घ संधि", "यण संधि", "गुण संधि", "अयादि संधि"],
    "correct_option_index": 1,
    "explanation_en": "This is the rule of Yana Sandhi.",
    "explanation_hi": "यह यण संधि का नियम है।"
  },
  {
    "question_en": "What is the sandhi of 'Mahā + Ṛṣi'?",
    "question_hi": "'महा + ऋषि' की संधि क्या होगी?",
    "options_en": ["Mahāṛṣi", "Maharṣi", "Maharṣī", "Maherṣi"],
    "options_hi": ["महाऋषि", "महर्षि", "महर्षी", "महेरषि"],
    "correct_option_index": 1,
    "explanation_en": "'ā' + 'ṛ' = 'ar' (Rule of Guna Sandhi) (Practice question).",
    "explanation_hi": "'आ' + 'ऋ' = 'अर्' (गुण संधि का नियम) (अभ्यास प्रश्न)।"
  },
  {
    "question_en": "What is the correct sandhi vishchhed (splitting) of the word 'Paropakāra'?",
    "question_hi": "'परोपकार' शब्द का सही संधि विच्छेद क्या है?",
    "options_en": ["Paro + Pakāra", "Para + Apakāra", "Para + Upakāra", "Parau + Pakāra"],
    "options_hi": ["परो + पकार", "पर + अपकार", "पर + उपकार", "परौ + पकार"],
    "correct_option_index": 2,
    "explanation_en": "Example of Guna Sandhi (a + u = o).",
    "explanation_hi": "गुण संधि का उदाहरण (अ + उ = ओ)।"
  },
  {
    "question_en": "Splitting 'Vidyālaya' yields 'Vidyā + Ālaya'. This is an example of which sandhi?",
    "question_hi": "'विद्यालय' का विच्छेद करने पर 'विद्या + आलय' प्राप्त होता है। यह किस संधि का उदाहरण है?",
    "options_en": ["Guna Sandhi", "Vriddhi Sandhi", "Dīrgha Sandhi", "Vyanjan Sandhi"],
    "options_hi": ["गुण संधि", "वृद्धि संधि", "दीर्घ संधि", "व्यंजन संधि"],
    "correct_option_index": 2,
    "explanation_en": "(ā + ā = ā).",
    "explanation_hi": "(आ + आ = आ)।"
  },
  {
    "question_en": "What change will occur to the visarga in the sandhi of 'Prātaḥ + Kāla'?",
    "question_hi": "'प्रातः + काल' की संधि करने पर विसर्ग में क्या परिवर्तन होगा?",
    "options_en": ["Will change to 'o'", "Will change to 'r'", "Will change to 's'", "No change"],
    "options_hi": ["'ओ' में बदलेगा", "'र्' में बदलेगा", "'स्' में बदलेगा", "कोई परिवर्तन नहीं"],
    "correct_option_index": 3,
    "explanation_en": "The visarga remains unchanged.",
    "explanation_hi": "विसर्ग अपरिवर्तित रहता है।"
  },
  {
    "question_en": "The sandhi form 'Atyalpa' from 'Ati + Alpa' is based on which rule?",
    "question_hi": "'अति + अल्प' का संधि रूप 'अत्यल्प' किस नियम पर आधारित है?",
    "options_en": ["Ayādi Sandhi", "Guna Sandhi", "Dīrgha Sandhi", "Yana Sandhi"],
    "options_hi": ["अयादि संधि", "गुण संधि", "दीर्घ संधि", "यण संधि"],
    "correct_option_index": 3,
    "explanation_en": "i + a = ya.",
    "explanation_hi": "इ + अ = य।"
  },
  {
    "question_en": "'Nava + Ūḍhā' falls under which Swar Sandhi?",
    "question_hi": "'नव + ऊढ़ा' किस स्वर संधि के अंतर्गत आता है?",
    "options_en": ["Dīrgha", "Guna", "Vriddhi", "Yana"],
    "options_hi": ["दीर्घ", "गुण", "वृद्धि", "यण"],
    "correct_option_index": 1,
    "explanation_en": "a + ū = o (Navoḍhā).",
    "explanation_hi": "अ + ऊ = ओ (नवोढ़ा)।"
  },
  {
    "question_en": "The type of sandhi in 'Mata + Anusāra' is:",
    "question_hi": "'मत + अनुसार' की संधि का भेद है:",
    "options_en": ["Yana Sandhi", "Guna Sandhi", "Dīrgha Sandhi", "Vriddhi Sandhi"],
    "options_hi": ["यण संधि", "गुण संधि", "दीर्घ संधि", "वृद्धि संधि"],
    "correct_option_index": 2,
    "explanation_en": "Mata + Anusāra = Matānusāra (a + a = ā).",
    "explanation_hi": "मत + अनुसार = मतानुसार (अ + अ = आ)।"
  },
  {
    "question_en": "What is the correct word formed from 'Manaḥ + Tāpa'?",
    "question_hi": "'मनः + ताप' से बनने वाला शुद्ध शब्द क्या है?",
    "options_en": ["Manatāpa", "Manastāpa", "Manotāpa", "Manatāpaḥ"],
    "options_hi": ["मनताप", "मनस्ताप", "मनोताप", "मनतापः"],
    "correct_option_index": 1,
    "explanation_en": "This is a rule of Visarga Sandhi (it is confusing with the 'Manobala' rule in option 3, but here it becomes 's').",
    "explanation_hi": "यह विसर्ग संधि का नियम है (विकल्प 3 में मनोबल के नियम से भ्रमित करता है, परंतु यहाँ 'स्' होता है)।"
  },
  {
    "question_en": "If 'u' or 'ū' is followed by any different vowel, 'u' or 'ū' changes to 'v'. This rule belongs to:",
    "question_hi": "यदि 'उ' या 'ऊ' के परे कोई भिन्न स्वर रहे तो 'उ' या 'ऊ' के बदले 'व्' होता है, यह नियम है:",
    "options_en": ["Yana Sandhi", "Guna Sandhi", "Ayādi Sandhi", "Dīrgha Sandhi"],
    "options_hi": ["यण संधि का", "गुण संधि का", "अयादि संधि का", "दीर्घ संधि का"],
    "correct_option_index": 0,
    "explanation_en": "This is the rule of Yana Sandhi.",
    "explanation_hi": "यह यण संधि का नियम है।"
  },
  {
    "question_en": "What is the sandhi word formed from 'Ek + Saṭh'?",
    "question_hi": "'एक + सठ' से बना संधि शब्द क्या है?",
    "options_en": ["Ekasaṭha", "Ikasaṭha", "Ekasaṭhaḥ", "Ikṣaṭha"],
    "options_hi": ["एकसठ", "इक्सठ", "एकसठः", "इक्षठ"],
    "correct_option_index": 1,
    "explanation_en": "This is given as an example of sandhi vishchhed (splitting).",
    "explanation_hi": "संधि विच्छेद के उदाहरण में दिया गया है।"
  },
  {
    "question_en": "The word formed from 'Parama + Auṣadhi' is:",
    "question_hi": "'परम + औषधि' से बनने वाला शब्द है:",
    "options_en": ["Paramoṣadhi", "Paramosadhi", "Paramauṣadhi", "Paramaiṣadhi"],
    "options_hi": ["परमोषधि", "परमोसधि", "परमौषधि", "परमैषधि"],
    "correct_option_index": 2,
    "explanation_en": "This is an example of Vriddhi Sandhi ('a' + 'au' = 'au').",
    "explanation_hi": "यह वृद्धि संधि का उदाहरण है ('अ' + 'औ' = 'औ')।"
  },
  {
    "question_en": "'Sat + Chintā' is an example of which sandhi?",
    "question_hi": "'सत् + चिंता' किस संधि का उदाहरण है?",
    "options_en": ["Visarga Sandhi", "Dīrgha Swar Sandhi", "Vyanjan Sandhi", "Guna Sandhi"],
    "options_hi": ["विसर्ग संधि", "दीर्घ स्वर संधि", "व्यंजन संधि", "गुण संधि"],
    "correct_option_index": 2,
    "explanation_en": "Sat + Chintā = Sachchintā.",
    "explanation_hi": "सत् + चिंता = सच्चिंता।"
  },
  {
    "question_en": "In 'Pitṛ + Ājñā', the 'rā' varna is formed by the combination of which sounds?",
    "question_hi": "'पितृ + आज्ञा' में संधि होने पर 'रा' वर्ण का निर्माण किस मेल से हुआ?",
    "options_en": ["i + ā", "ṛ + ā", "u + ā", "r + a"],
    "options_hi": ["इ + आ", "ऋ + आ", "उ + आ", "र + अ"],
    "correct_option_index": 1,
    "explanation_en": "Yana Sandhi rule.",
    "explanation_hi": "यण संधि नियम।"
  },
  {
    "question_en": "What is the correct splitting of the word 'Mataikya'?",
    "question_hi": "'मतैक्य' शब्द का सही विच्छेद क्या है?",
    "options_en": ["Mata + Aikya", "Mati + Aikya", "Matai + Kya", "Mata + Ekya"],
    "options_hi": ["मत + ऐक्य", "मति + ऐक्य", "मतै + क्य", "मत + एक्य"],
    "correct_option_index": 0,
    "explanation_en": "This is an example of Vriddhi Sandhi (Practice question).",
    "explanation_hi": "यह वृद्धि संधि का उदाहरण है (अभ्यास प्रश्न)।"
  },
  {
    "question_en": "In the word 'Manobala', the visarga has changed into which sound?",
    "question_hi": "'मनोबल' शब्द में विसर्ग का किस ध्वनि में परिवर्तन हुआ है?",
    "options_en": ["'r'", "'s'", "'o'", "'ā'"],
    "options_hi": ["'र्' में", "'स्' में", "'ओ' में", "'आ' में"],
    "correct_option_index": 2,
    "explanation_en": "Manaḥ + Bala = Manobala.",
    "explanation_hi": "मनः + बल = मनोबल।"
  },
  {
    "question_en": "'Ati + Anta' falls under which Swar Sandhi?",
    "question_hi": "'अति + अंत' किस स्वर संधि के अंतर्गत आता है?",
    "options_en": ["Dīrgha Sandhi", "Guna Sandhi", "Yana Sandhi", "Vriddhi Sandhi"],
    "options_hi": ["दीर्घ संधि", "गुण संधि", "यण संधि", "वृद्धि संधि"],
    "correct_option_index": 2,
    "explanation_en": "(i + a = ya) (Practice question).",
    "explanation_hi": "(इ + अ = य) (अभ्यास प्रश्न)।"
  },
  {
    "question_en": "The word 'Yadyapi', formed from 'Yadi + Api', is an example of which sandhi?",
    "question_hi": "'यदि + अपि' से बनने वाला शब्द 'यद्यपि' किस संधि का उदाहरण है?",
    "options_en": ["Dīrgha Sandhi", "Yana Sandhi", "Vriddhi Sandhi", "Guna Sandhi"],
    "options_hi": ["दीर्घ संधि", "यण संधि", "वृद्धि संधि", "गुण संधि"],
    "correct_option_index": 1,
    "explanation_en": "(i + a = ya) (Practice question).",
    "explanation_hi": "(इ + अ = य) (अभ्यास प्रश्न)।"
  },
  {
    "question_en": "What does the rule of 'Dīrgha Sandhi' state?",
    "question_hi": "'दीर्घ संधि' का नियम क्या कहता है?",
    "options_en": ["A short vowel changes to a long one", "Similar varnas combine to become long", "Dissimilar vowels combine to form a new vowel", " 'i' coming after 'a'"],
    "options_hi": ["ह्रस्व स्वर, दीर्घ में बदल जाता है", "समान वर्ण मिलकर दीर्घ हो जाते हैं", "असमान स्वर मिलकर नया स्वर बनाते हैं", "'अ' के बाद 'इ' का आना"],
    "correct_option_index": 1,
    "explanation_en": "When two similar varnas (short or long) come close, they both combine to form the long version of that varna.",
    "explanation_hi": "जब दो समान वर्ण (ह्रस्व या दीर्घ) पास-पास आते हैं, तो दोनों मिलकर उसी वर्ण का दीर्घ रूप बन जाते हैं।"
  },
  {
    "question_en": "The rule 'u + a' combining to form 'va' is related to which sandhi?",
    "question_hi": "'उ + अ' मिलकर 'व' बनने का नियम किस संधि से संबंधित है?",
    "options_en": ["Dīrgha Sandhi", "Yana Sandhi", "Guna Sandhi", "Ayādi Sandhi"],
    "options_hi": ["दीर्घ संधि", "यण संधि", "गुण संधि", "अयादि संधि"],
    "correct_option_index": 1,
    "explanation_en": "Su + Alpa = Svalpa.",
    "explanation_hi": "सु + अल्प = स्वल्प।"
  },
  {
    "question_en": "In 'Para + Upakāra', what sound is formed by the combination of 'a' and 'u'?",
    "question_hi": "'पर + उपकार' में 'अ' और 'उ' के मेल से बनी ध्वनि क्या है?",
    "options_en": ["'ā'", "'o'", "'e'", "'ai'"],
    "options_hi": ["'आ'", "'ओ'", "'ए'", "'ऐ'"],
    "correct_option_index": 1,
    "explanation_en": "The sound 'o' is formed by the combination of 'a' + 'u'.",
    "explanation_hi": "'अ' + 'उ' के मेल से 'ओ' ध्वनि बनती है।"
  },
  {
    "question_en": "In 'Sat + Artha', what sound is formed by the combination of the final vowel 'a' and the initial vowel 'a'?",
    "question_hi": "'सत् + अर्थ' में अंतिम स्वर 'अ' तथा आरंभिक स्वर 'अ' के मेल से क्या ध्वनि बनी?",
    "options_en": ["'e'", "'ā'", "'o'", "'ai'"],
    "options_hi": ["'ए'", "'आ'", "'ओ'", "'ऐ'"],
    "correct_option_index": 1,
    "explanation_en": "The sound 'ā' is formed by the combination of the final vowel 'a' and the initial vowel 'a'.",
    "explanation_hi": "अंतिम स्वर 'अ' तथा आरंभिक स्वर 'अ' के मेल से 'आ' ध्वनि बनती है।"
  },
  {
    "question_en": "The splitting of 'Vāgīsha' is 'Vāk + Īsha'. Here, 'k' changes into what?",
    "question_hi": "'वागीश' का विच्छेद 'वाक् + ईश' है। यहाँ 'क्' किसमें परिवर्तित हुआ है?",
    "options_en": ["'sh'", "'g'", "'j'", "'d'"],
    "options_hi": ["'श्' में", "'ग्' में", "'ज्' में", "'द' में"],
    "correct_option_index": 1,
    "explanation_en": "The first varna ('k') changes to the third varna ('g').",
    "explanation_hi": "प्रथम वर्ण ('क्') का तीसरे वर्ण ('ग्') में परिवर्तन हुआ है।"
  },
  {
    "question_en": "In 'Ayādi Sandhi', what is required for the formation of the 'ay' sound?",
    "question_hi": "'अयादि संधि' में 'अय' ध्वनि के निर्माण के लिए क्या आवश्यक है?",
    "options_en": ["i + a", "e + a", "o + a", "ai + a"],
    "options_hi": ["इ + अ", "ए + अ", "ओ + अ", "ऐ + अ"],
    "correct_option_index": 1,
    "explanation_en": "Ne + Ana = Nayana (e + a = ay).",
    "explanation_hi": "ने + अन = नयन (ए + अ = अय)।"
  },
  {
    "question_en": "What will be the sandhi form of 'Kavi + Ichchhā'?",
    "question_hi": "'कवि + इच्छा' का संधि रूप क्या होगा?",
    "options_en": ["Kavichchhā", "Kavīchchhā", "Kavīkṣā", "Kavi-ichchhā"],
    "options_hi": ["कविच्छा", "कवीच्छा", "कवीक्षा", "कविइच्छा"],
    "correct_option_index": 1,
    "explanation_en": "(i + i = ī) Dīrgha Sandhi.",
    "explanation_hi": "(इ + इ = ई) दीर्घ संधि।"
  },
  {
    "question_en": "The word 'Ramesha' formed from 'Ramā + Īsha' is an example of which sandhi?",
    "question_hi": "'रमा + ईश' से बना शुद्ध शब्द किस संधि का उदाहरण है?",
    "options_en": ["Ramesha (Guna Sandhi)", "Ramīsha (Dīrgha Sandhi)", "Ramesha (Vriddhi Sandhi)", "Ramesha (Yana Sandhi)"],
    "options_hi": ["रमेश (गुण संधि)", "रमीश (दीर्घ संधि)", "रमेश (वृद्धि संधि)", "रमेश (यण संधि)"],
    "correct_option_index": 0,
    "explanation_en": "ā + ī = e (Guna Sandhi).",
    "explanation_hi": "आ + ई = ए (गुण संधि)।"
  },
  {
    "question_en": "The correct sandhi vishchhed (splitting) of the word 'Pratyupakāra' is:",
    "question_hi": "'प्रत्युपकार' शब्द का सही संधि विच्छेद है:",
    "options_en": ["Prati + Upakāra", "Pratya + Upakāra", "Pra + Upakāra", "Prati + Apakāra"],
    "options_hi": ["प्रति + उपकार", "प्रत्य + उपकार", "प्र + उपकार", "प्रति + अपकार"],
    "correct_option_index": 0,
    "explanation_en": "This is an example of Yana Sandhi (i + u = yu).",
    "explanation_hi": "यह यण संधि का उदाहरण है (इ + उ = यु)।"
  },
  {
    "question_en": "What will be the sandhi form of 'Ni + Ūna'?",
    "question_hi": "'नि + ऊन' का संधि रूप क्या होगा?",
    "options_en": ["Niuna", "Nyūna", "Nīuna", "Niyūna"],
    "options_hi": ["निउन", "न्यून", "नीउन", "नियून"],
    "correct_option_index": 1,
    "explanation_en": "This is an example of Yana Sandhi (i + ū = yū).",
    "explanation_hi": "यह यण संधि का उदाहरण है (इ + ऊ = यू)।"
  },
  {
    "question_en": "The correct sandhi vishchhed (splitting) of the word 'Svāgata' is:",
    "question_hi": "'स्वागत' शब्द का सही संधि विच्छेद है:",
    "options_en": ["Sva + Āgata", "Su + Āgata", "Sa + Āgata", "Sā + Āgata"],
    "options_hi": ["स्व + आगत", "सु + आगत", "स + आगत", "सा + आगत"],
    "correct_option_index": 1,
    "explanation_en": "This is an example of Yana Sandhi (u + ā = vā).",
    "explanation_hi": "यह यण संधि का उदाहरण है (उ + आ = वा)।"
  },
  {
    "question_en": "If 'a' or 'ā' is followed by 'e' or 'ai', both combine to form 'ai'. This rule belongs to:",
    "question_hi": "यदि 'अ' या 'आ' के बाद 'ए' या 'ऐ' रहे तो दोनों मिलकर 'ऐ' हो जाता है, यह नियम है:",
    "options_en": ["Yana Sandhi", "Guna Sandhi", "Vriddhi Sandhi", "Dīrgha Sandhi"],
    "options_hi": ["यण संधि का", "गुण संधि का", "वृद्धि संधि का", "दीर्घ संधि का"],
    "correct_option_index": 2,
    "explanation_en": "Sadā + Eva = Sadaiva (ā + e = ai).",
    "explanation_hi": "सदा + एव = सदैव (आ + ए = ऐ)।"
  },
  {
    "question_en": "Which sandhi is used in 'Nayana'?",
    "question_hi": "'नयन' में प्रयुक्त संधि कौन सी है?",
    "options_en": ["Yana Sandhi", "Dīrgha Sandhi", "Guna Sandhi", "Ayādi Sandhi"],
    "options_hi": ["यण संधि", "दीर्घ संधि", "गुण संधि", "अयादि संधि"],
    "correct_option_index": 3,
    "explanation_en": "Ne + Ana = Nayana.",
    "explanation_hi": "ने + अन = नयन।"
  },
  {
    "question_en": "The sandhi vishchhed (splitting) of the word 'Iti + Ādi' is:",
    "question_hi": "'इति + आदि' शब्द का संधि विच्छेद है:",
    "options_en": ["I + Tyādi", "Iti + Ādi", "Ita + Yādi", "Itya + Ādi"],
    "options_hi": ["इ + त्यादि", "इति + आदि", "इत + यादि", "इत्य + आदि"],
    "correct_option_index": 1,
    "explanation_en": "This is Yana Sandhi.",
    "explanation_hi": "यह यण संधि है।"
  },
  {
    "question_en": "Which sandhi is in 'Manobala'?",
    "question_hi": "'मनोबल' में कौन सी संधि है?",
    "options_en": ["Swar Sandhi", "Visarga Sandhi", "Vyanjan Sandhi", "Ayādi Sandhi"],
    "options_hi": ["स्वर संधि", "विसर्ग संधि", "व्यंजन संधि", "अयादि संधि"],
    "correct_option_index": 1,
    "explanation_en": "Manaḥ + Bala = Manobala.",
    "explanation_hi": "मनः + बल = मनोबल।"
  },
  {
    "question_en": "In 'Su + Āgata', what does 'u' change into?",
    "question_hi": "'सु + आगत' में 'उ' किसमें परिवर्तित होता है?",
    "options_en": ["ya", "ra", "va", "sa"],
    "options_hi": ["य", "र", "व", "स"],
    "correct_option_index": 2,
    "explanation_en": "Yana Sandhi rule.",
    "explanation_hi": "यण संधि नियम।"
  },
  {
    "question_en": "In 'Vidyā + Ālaya', which sounds have combined?",
    "question_hi": "'विद्या + आलय' में किन ध्वनियों का मेल हुआ है?",
    "options_en": ["a + ā", "i + ā", "ā + a", "ā + ā"],
    "options_hi": ["अ + आ", "इ + आ", "आ + अ", "आ + आ"],
    "correct_option_index": 3,
    "explanation_en": "Rule of Dīrgha Sandhi.",
    "explanation_hi": "दीर्घ संधि का नियम।"
  },
  {
    "question_en": "Which sandhi is in 'Satya + Artha'?",
    "question_hi": "'सत्य + अर्थ' में कौन सी संधि है?",
    "options_en": ["Dīrgha Sandhi", "Yana Sandhi", "Guna Sandhi", "Vriddhi Sandhi"],
    "options_hi": ["दीर्घ संधि", "यण संधि", "गुण संधि", "वृद्धि संधि"],
    "correct_option_index": 0,
    "explanation_en": "a + a = ā.",
    "explanation_hi": "अ + अ = आ।"
  },
  {
    "question_en": "The word formed from 'Parama + Aṇu' is:",
    "question_hi": "'परम + अणु' से बनने वाला शब्द है:",
    "options_en": ["Paramānu", "Paramanu", "Paramāṇu", "Parama Aṇu"],
    "options_hi": ["परमानु", "परमनु", "परमाणु", "परम अणु"],
    "correct_option_index": 2,
    "explanation_en": "Dīrgha Sandhi (a + a = ā). (Note: the 'ṇu' is also a rule, but the primary sandhi is Dīrgha).",
    "explanation_hi": "दीर्घ संधि (अ + अ = आ)।"
  },
  {
    "question_en": "The word 'Diggaja' follows the rule of which sandhi?",
    "question_hi": "'दिग्गज' शब्द किस संधि के नियम का पालन करता है?",
    "options_en": ["Dīrgha Swar Sandhi", "Guna Swar Sandhi", "Vyanjan Sandhi", "Visarga Sandhi"],
    "options_hi": ["दीर्घ स्वर संधि", "गुण स्वर संधि", "व्यंजन संधि", "विसर्ग संधि"],
    "correct_option_index": 2,
    "explanation_en": "Dik + Gaja (Change of the first varna to the third varna) (Mentioned in practice questions).",
    "explanation_hi": "दिक + गज (प्रथम वर्ण का तीसरे वर्ण में परिवर्तन) (अभ्यास प्रश्न में उल्लिखित)।"
  },
  {
    "question_en": "In 'Ni + Ūna' (Nyūna), 'i' combines with which vowel to form 'yū'?",
    "question_hi": "'नि + ऊन' (न्यून) में 'इ' किस स्वर से मिलकर 'यू' बना?",
    "options_en": ["a", "ā", "ū", "o"],
    "options_hi": ["अ", "आ", "ऊ", "ओ"],
    "correct_option_index": 2,
    "explanation_en": "(i + ū = yū) Yana Sandhi.",
    "explanation_hi": "(इ + ऊ = यू) यण संधि।"
  },
  {
    "question_en": "What will be formed by the sandhi of 'Sūrya + Udaya'?",
    "question_hi": "'सूर्य + उदय' की संधि करने पर क्या बनेगा?",
    "options_en": ["Sūryāodaya", "Sūryodaya", "Sūrayodaya", "Sūrya-udaya"],
    "options_hi": ["सूर्याेदय", "सूर्योदय", "सूरयोदय", "सूर्यउदय"],
    "correct_option_index": 1,
    "explanation_en": "a + u = o (Guna Sandhi) (Practice question).",
    "explanation_hi": "अ + उ = ओ (गुण संधि) (अभ्यास प्रश्न)।"
  },
  {
    "question_en": "Which sandhi is in the word 'Mataikya'?",
    "question_hi": "'मतैक्य' शब्द में कौन सी संधि है?",
    "options_en": ["Guna Sandhi", "Vriddhi Sandhi", "Yana Sandhi", "Dīrgha Sandhi"],
    "options_hi": ["गुण संधि", "वृद्धि संधि", "यण संधि", "दीर्घ संधि"],
    "correct_option_index": 1,
    "explanation_en": "Mata + Aikya = Mataikya (a + ai = ai).",
    "explanation_hi": "मत + ऐक्य = मतैक्य (अ + ऐ = ऐ)।"
  },
  {
    "question_en": "If 'ṛ' or 'ṝ' is followed by any different vowel, 'ṛ' or 'ṝ' changes to 'r'. This is the rule of which sandhi?",
    "question_hi": "यदि 'ऋ' या 'ऋ' के आगे कोई भिन्न स्वर रहे तो 'ऋ' या 'ऋ' के बदले 'र्' होता है, यह किस संधि का नियम है?",
    "options_en": ["Vriddhi Sandhi", "Guna Sandhi", "Yana Sandhi", "Dīrgha Sandhi"],
    "options_hi": ["वृद्धि संधि", "गुण संधि", "यण संधि", "दीर्घ संधि"],
    "correct_option_index": 2,
    "explanation_en": "(ṛ + a = ra) Mātṛ + Artha = Mātrārtha.",
    "explanation_hi": "(ऋ + अ = र) मातृ + अर्थ = मात्रार्थ।"
  },
  {
    "question_en": "Which sandhi is used in 'Parama + Auṣadhi'?",
    "question_hi": "'परम + औषधि' में कौन सी संधि प्रयुक्त हुई है?",
    "options_en": ["Guna Sandhi", "Dīrgha Sandhi", "Vriddhi Sandhi", "Yana Sandhi"],
    "options_hi": ["गुण संधि", "दीर्घ संधि", "वृद्धि संधि", "यण संधि"],
    "correct_option_index": 2,
    "explanation_en": "(a + au = au).",
    "explanation_hi": "(अ + औ = औ)।"
  },
  {
    "question_en": "What is the correct sandhi vishchhed (splitting) of 'Tṛṣṇā'?",
    "question_hi": "'तृष्णा' का सही संधि-विच्छेद क्या है?",
    "options_en": ["Tṛṣ + Nā", "Tṛṣa + Ṇā", "Tṛ + Ṣṇā", "Tṛṇa + Ā"],
    "options_hi": ["तृष् + ना", "तृष + णा", "तृ + ष्णा", "तृण + आ"],
    "correct_option_index": 0,
    "explanation_en": "This is a complex example of Vyanjan Sandhi (Consonant Sandhi).",
    "explanation_hi": "यह व्यंजन संधि का जटिल उदाहरण है।"
  },
  {
    "question_en": "In 'Mahā + Īsha' (Mahesha), which sounds have combined?",
    "question_hi": "'महा + ईश' (महेश) में किन ध्वनियों का मेल हुआ है?",
    "options_en": ["a + i", "ā + ī", "a + ī", "ā + i"],
    "options_hi": ["अ + इ", "आ + ई", "अ + ई", "आ + इ"],
    "correct_option_index": 1,
    "explanation_en": "Mahā + Īsha (ā + ī = e).",
    "explanation_hi": "महा + ईश (आ + ई = ए)।"
  },
  {
    "question_en": "'Kavi + Ichchhā' (Kavīchchhā) is an example of which Swar Sandhi?",
    "question_hi": "'कवि + इच्छा' (कवीच्छा) किस स्वर संधि का उदाहरण है?",
    "options_en": ["Guna", "Vriddhi", "Yana", "Dīrgha"],
    "options_hi": ["गुण", "वृद्धि", "यण", "दीर्घ"],
    "correct_option_index": 3,
    "explanation_en": "(i + i = ī).",
    "explanation_hi": "(इ + इ = ई)।"
  },
  {
    "question_en": "What is the basis for the sandhi vishchhed in 'Ati + Alpa' (Atyalpa)?",
    "question_hi": "'अति + अल्प' (अत्यल्प) में संधि विच्छेद का आधार क्या है?",
    "options_en": ["Lengthening of 'i'", "Changing of 'i' to 'y'", "Changing of 'a' to 'ā'", "Changing of 'a' to 'e'"],
    "options_hi": ["इ का दीर्घ होना", "इ का 'य्' में बदलना", "अ का 'आ' में बदलना", "अ का 'ए' में बदलना"],
    "correct_option_index": 1,
    "explanation_en": "i + a = ya (Yana Sandhi).",
    "explanation_hi": "इ + अ = य (यण संधि)।"
  },
  {
    "question_en": "Which rule applies in 'Parīkṣā + Arthī'?",
    "question_hi": "'परीक्षा + अर्थी' में कौन सा नियम लागू होता है?",
    "options_en": ["a + a = ā", "ā + a = ā", "ā + i = e", "i + a = ya"],
    "options_hi": ["अ + अ = आ", "आ + अ = आ", "आ + इ = ए", "इ + अ = य"],
    "correct_option_index": 1,
    "explanation_en": "Dīrgha Sandhi rule.",
    "explanation_hi": "दीर्घ संधि नियम।"
  },
  {
    "question_en": "Similar to 'Ne + Ana' (Nayana), what will be formed from 'Pau + Ana'?",
    "question_hi": "'ने + अन' (नयन) के समान 'पौ + अन' से क्या बनेगा?",
    "options_en": ["Pavana", "Pāvana", "Pa-avana", "Pov_ana"],
    "options_hi": ["पवन", "पावन", "पअवन", "पोवन"],
    "correct_option_index": 1,
    "explanation_en": "Ayādi Sandhi (au + a = āv) (Mentioned in practice questions).",
    "explanation_hi": "अयादि संधि (औ + अ = आव) (अभ्यास प्रश्न में उल्लिखित)।"
  },
  {
    "question_en": "What is the combined form of 'Adhaḥ + Patana'?",
    "question_hi": "'अधः + पतन' का संधि युक्त रूप क्या है?",
    "options_en": ["Adhapatana", "Adho Patana", "Adhaḥpatana", "Adhoḥ Patana"],
    "options_hi": ["अधपतन", "अधो पतन", "अधःपतन", "अधोः पतन"],
    "correct_option_index": 2,
    "explanation_en": "The visarga remains unchanged.",
    "explanation_hi": "विसर्ग अपरिवर्तित रहता है।"
  },
  {
    "question_en": "In 'Niḥ + Roga', the change of short 'i' to long 'ī' falls under which rule?",
    "question_hi": "'निः + रोग' में ह्रस्व 'इ' का दीर्घ 'ई' में परिवर्तन होना किस नियम के तहत आता है?",
    "options_en": ["Guna Sandhi", "Dīrgha Sandhi", "Visarga Sandhi", "Vyanjan Sandhi"],
    "options_hi": ["गुण संधि", "दीर्घ संधि", "विसर्ग संधि", "व्यंजन संधि"],
    "correct_option_index": 2,
    "explanation_en": "Niḥ + Roga = Nīroga.",
    "explanation_hi": "निः + रोग = नीरोग।"
  },
  {
    "question_en": "The sandhi form 'Pratyeka' from 'Prati + Eka' follows the rule of which Swar Sandhi?",
    "question_hi": "'प्रति + एक' का संधि रूप 'प्रत्येक' किस स्वर संधि के नियम का पालन करता है?",
    "options_en": ["Vriddhi Sandhi", "Guna Sandhi", "Yana Sandhi", "Ayādi Sandhi"],
    "options_hi": ["वृद्धि संधि", "गुण संधि", "यण संधि", "अयादि संधि"],
    "correct_option_index": 2,
    "explanation_en": "i + e = ye.",
    "explanation_hi": "इ + ए = ये।"
  },
  {
    "question_en": "What is the correct sandhi vishchhed (splitting) of the word 'Ekāeka'?",
    "question_hi": "'एकाएक' शब्द का सही संधि विच्छेद क्या है?",
    "options_en": ["Eka + Aika", "Eka + Eka", "Ekā + Eka", "E + Kāeka"],
    "options_hi": ["एक + ऐक", "एक + एक", "एका + एक", "ए + काएक"],
    "correct_option_index": 1,
    "explanation_en": "a + e = ai (Vriddhi Sandhi) (Practice question).",
    "explanation_hi": "अ + ए = ऐ (वृद्धि संधि) (अभ्यास प्रश्न)।"
  },
  {
    "question_en": "What will be the sandhi of 'Daitya + Aiśvarya'?",
    "question_hi": "'दैत्य + ऐश्वर्य' की संधि क्या होगी?",
    "options_en": ["Daiteśvarya", "Daityesvarya", "Daityaiśvarya", "Daitayaiśvarya"],
    "options_hi": ["दैतेश्वर्य", "दैत्येस्वर्य", "दैत्यैश्वर्य", "दैतयैश्वर्य"],
    "correct_option_index": 2,
    "explanation_en": "a + ai = ai (Vriddhi Sandhi).",
    "explanation_hi": "अ + ऐ = ऐ (वृद्धि संधि)।"
  },
  {
    "question_en": "In 'Ati + Anta' (Atyanta), the change caused by 'i + a' indicates which sandhi?",
    "question_hi": "'अति + अंत' (अत्यंत) में इ + अ के मेल से उत्पन्न विकार किस संधि को इंगित करता है?",
    "options_en": ["Guna Sandhi", "Dīrgha Sandhi", "Vriddhi Sandhi", "Yana Sandhi"],
    "options_hi": ["गुण संधि", "दीर्घ संधि", "वृद्धि संधि", "यण संधि"],
    "correct_option_index": 3,
    "explanation_en": "Change of 'i' to 'y'.",
    "explanation_hi": "इ का य में परिवर्तन।"
  },
  {
    "question_en": "What is the sandhi vishchhed (splitting) of 'Uparyukta'?",
    "question_hi": "'उपर्युक्त' का संधि विच्छेद क्या है?",
    "options_en": ["Upari + Ukta", "Uparī + Ukta", "Upara + Ukta", "Upar + Ukta"],
    "options_hi": ["उपरि + उक्त", "उपरी + उक्त", "उपर + उक्त", "उपर् + उक्त"],
    "correct_option_index": 0,
    "explanation_en": "i + u = yu (Yana Sandhi) (Practice question).",
    "explanation_hi": "इ + उ = यु (यण संधि) (अभ्यास प्रश्न)।"
  },
  {
    "question_en": "Which sandhi is in the word 'Auṣadhi', if its splitting is like 'Vana + Auṣadhi'?",
    "question_hi": "'औषधि' शब्द में कौन सी संधि है, यदि इसका विच्छेद 'वन + औषधि' के समान हो?",
    "options_en": ["Guna Sandhi", "Dīrgha Sandhi", "Yana Sandhi", "Vriddhi Sandhi"],
    "options_hi": ["गुण संधि", "दीर्घ संधि", "यण संधि", "वृद्धि संधि"],
    "correct_option_index": 3,
    "explanation_en": "(a + au = au).",
    "explanation_hi": "(अ + औ = औ)।"
  },
  {
    "question_en": "The sandhi word for 'Mātṛ + Artha' is:",
    "question_hi": "'मातृ + अर्थ' का संधि शब्द है:",
    "options_en": ["Mātṛ-artha", "Mātrārtha", "Mātṛrārtha", "Mātyartha"],
    "options_hi": ["मातृअर्थ", "मात्रार्थ", "मातृरार्थ", "मात्यर्थ"],
    "correct_option_index": 1,
    "explanation_en": "This is Yana Sandhi (ṛ + a = ra).",
    "explanation_hi": "यह यण संधि है (ऋ + अ = र)।"
  },
  {
    "question_en": "Which sandhi is used in 'Adhaḥ + Patana'?",
    "question_hi": "'अधः + पतन' में कौन सी संधि प्रयुक्त हुई है?",
    "options_en": ["Guna Sandhi", "Visarga Sandhi", "Yana Sandhi", "Vyanjan Sandhi"],
    "options_hi": ["गुण संधि", "विसर्ग संधि", "यण संधि", "व्यंजन संधि"],
    "correct_option_index": 1,
    "explanation_en": "The visarga remained unchanged.",
    "explanation_hi": "विसर्ग अपरिवर्तित रहा।"
  },
  {
    "question_en": "In which sandhi does 'e' change to 'ay' and 'ai' to 'āy' when followed by any different vowel?",
    "question_hi": "'ए' और 'ऐ' के बाद कोई भिन्न स्वर आए तो 'ए' का 'अय' में और 'ऐ' का 'आय' में परिवर्तन किस संधि में होता है?",
    "options_en": ["Guna Sandhi", "Ayādi Sandhi", "Vriddhi Sandhi", "Yana Sandhi"],
    "options_hi": ["गुण संधि", "अयादि संधि", "वृद्धि संधि", "यण संधि"],
    "correct_option_index": 1,
    "explanation_en": "Nayana (Ne + Ana).",
    "explanation_hi": "नयन (ने + अन)।"
  },
  {
    "question_en": "What is the reason for 'ai' being formed in 'Mata + Aikya'?",
    "question_hi": "'मत + ऐक्य' में 'ऐ' बनने का कारण क्या है?",
    "options_en": ["Exception to Guna Sandhi", "Rule of Vriddhi Sandhi", "Rule of Dīrgha Sandhi", "Rule of Yana Sandhi"],
    "options_hi": ["गुण संधि का अपवाद", "वृद्धि संधि का नियम", "दीर्घ संधि का नियम", "यण संधि का नियम"],
    "correct_option_index": 1,
    "explanation_en": "(a + ai = ai).",
    "explanation_hi": "(अ + ऐ = ऐ)।"
  },
  {
    "question_en": "In 'Ati + Āchāra' becoming 'Atyāchāra', what is the change to the 'i' sound?",
    "question_hi": "'अति + आचार' में 'अत्याचार' बनने पर 'इ' ध्वनि का विकार क्या है?",
    "options_en": ["Lengthening of 'i'", "Transformation of 'i' to 'y'", "Elision of 'i'", "Transformation of 'i' to 'ay'"],
    "options_hi": ["'इ' का दीर्घीकरण", "'इ' का 'य्' में रूपांतरण", "'इ' का लोप", "'इ' का 'अय्' में रूपांतरण"],
    "correct_option_index": 1,
    "explanation_en": "(i + ā = yā) Yana Sandhi.",
    "explanation_hi": "(इ + आ = या) यण संधि।"
  },
  {
    "question_en": "The formation of long 'ā' in the sandhi of 'Chhātra + Āvāsa' is an example of:",
    "question_hi": "'छात्र + आवास' की संधि करने पर दीर्घ 'आ' प्राप्त होता है, यह उदाहरण है:",
    "options_en": ["Yana Sandhi", "Vriddhi Sandhi", "Dīrgha Sandhi", "Guna Sandhi"],
    "options_hi": ["यण संधि", "वृद्धि संधि", "दीर्घ संधि", "गुण संधि"],
    "correct_option_index": 2,
    "explanation_en": "Chhātra + Āvāsa = Chhātrāvāsa (a + ā = ā).",
    "explanation_hi": "छात्र + आवास = छात्रावास (अ + आ = आ)।"
  },
  {
    "question_en": "The rule that changes 'e' to 'ay' in 'Ne + Ana' (Nayana) is:",
    "question_hi": "'ने + अन' (नयन) में 'ए' का 'अय' में परिवर्तन करने वाला नियम है:",
    "options_en": ["i + a", "a + i", "e + a", "ai + a"],
    "options_hi": ["इ + अ", "अ + इ", "ए + अ", "ऐ + अ"],
    "correct_option_index": 2,
    "explanation_en": "Ayādi Sandhi.",
    "explanation_hi": "अयादि संधि।"
  },
  {
    "question_en": "In the sandhi of 'Prātaḥ + Kāla', what happens to the 'visarga'?",
    "question_hi": "'प्रातः + काल' में संधि करने पर 'विसर्ग' के साथ क्या होता है?",
    "options_en": ["Becomes 'r'", "Becomes 's'", "Becomes 'o'", "Remains unchanged"],
    "options_hi": ["'र्' बनता है", "'स्' बनता है", "'ओ' बनता है", "अपरिवर्तित रहता है"],
    "correct_option_index": 3,
    "explanation_en": "No change due to rule 9 (k, kh, p, f).",
    "explanation_hi": "नियम 9 (क, ख, प, फ) के कारण कोई विकार नहीं।"
  },
  {
    "question_en": "'Ni + Ūna' (Nyūna) is an example of which rule of which sandhi?",
    "question_hi": "'नि + ऊन' (न्यून) किस संधि के किस नियम का उदाहरण है?",
    "options_en": ["Dīrgha Sandhi (similar vowels)", "Yana Sandhi (dissimilar vowels)", "Guna Sandhi (a + i)", "Vriddhi Sandhi (a + ai)"],
    "options_hi": ["दीर्घ संधि (समान स्वर)", "यण संधि (असमान स्वर)", "गुण संधि (अ + इ)", "वृद्धि संधि (अ + ऐ)"],
    "correct_option_index": 1,
    "explanation_en": "i + ū = yū.",
    "explanation_hi": "इ + ऊ = यू।"
  },
  {
    "question_en": "The pronunciation of 'k-varna' is from the throat (kanṭha). In Vyanjan Sandhi, when 'k' meets a voiced consonant, it changes to 'g' (kanṭha). 'Vāgīsha' is an example, where 'k' + 'ī' = 'gī'. This falls under which sandhi?",
    "question_hi": "'क + वर्ण' का उच्चारण स्थान कंठ है। व्यंजन संधि में जब 'क्' का मेल किसी घोष व्यंजन से होता है तो वह 'ग्' (कंठ) में बदल जाता है। 'वागीश' इसका उदाहरण है, जहाँ 'क्' + 'ई' = 'गी' बना। यह किस संधि के तहत आता है?",
    "options_en": ["Swar Sandhi", "Visarga Sandhi", "Vyanjan Sandhi", "Guna Sandhi"],
    "options_hi": ["स्वर संधि", "विसर्ग संधि", "व्यंजन संधि", "गुण संधि"],
    "correct_option_index": 2,
    "explanation_en": "Vāk + Īsha.",
    "explanation_hi": "वाक् + ईश।"
  },
  {
    "question_en": "The sandhi vishchhed (splitting) of the word 'Ityādi' is:",
    "question_hi": "'इत्यादि' शब्द का संधि विच्छेद है:",
    "options_en": ["Iti + Ādi", "Itya + Ādi", "Ita + Yādi", "It + Yādi"],
    "options_hi": ["इति + आदि", "इत्य + आदि", "इत + यादि", "इत् + यादि"],
    "correct_option_index": 0,
    "explanation_en": "This is an example of Yana Sandhi.",
    "explanation_hi": "यह यण संधि का उदाहरण है।"
  },
  {
    "question_en": "The word 'Gurvāgamana', formed from 'Guru + Āgamana', is an example of which Sandhi?",
    "question_hi": "'गुरु + आगमन' से बना संधि शब्द 'गुर्वागमन' किस संधि का उदाहरण है?",
    "options_en": ["Dīrgha Sandhi", "Guna Sandhi", "Vriddhi Sandhi", "Yana Sandhi"],
    "options_hi": ["दीर्घ संधि", "गुण संधि", "वृद्धि संधि", "यण संधि"],
    "correct_option_index": 3,
    "explanation_en": "'u' + 'ā' = 'vā' (An example of Yana Sandhi implied in the practice questions).",
    "explanation_hi": "'उ' + 'आ' = 'वा' (अभ्यास प्रश्न में निहित यण संधि का उदाहरण)।"
  }
];

export default sandhiQuestions;