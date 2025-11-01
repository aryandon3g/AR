import type { QuizQuestion } from '../../../types';

const chhandQuestions: QuizQuestion[] = [
  {
    "question_en": "What is the correct sequence of short-long syllables (Laghú-Gurú, I-S) for 'Yagaṇa', 'Magaṇa', 'Ragaṇa'?",
    "question_hi": "'यगण', 'मगण', 'रगण' - इनका सही लघु-गुरु क्रम (I-S) क्या है?",
    "options_en": ["ISS, SSS, SIS", "SII, SSI, ISI", "ISS, SSS, ISI", "SII, SSS, SIS"],
    "options_hi": ["ISS, SSS, SIS", "SII, SSI, ISI", "ISS, SSS, ISI", "SII, SSS, SIS"],
    "correct_option_index": 0,
    "explanation_en": "(A) ISS, SSS, SIS: According to the mnemonic formula 'yamātārājabhānasalagā': Yagaṇa (yamātā) = ISS, Magaṇa (mātārā) = SSS, Ragaṇa (rājabhā) = SIS.",
    "explanation_hi": "(A) ISS, SSS, SIS: 'यमाताराजभानसलगा' सूत्र के अनुसार: यगण (यमाता) = ISS, मगण (मातारा) = SSS, रगण (राजभा) = SIS."
  },
  {
    "question_en": "Which metre has 12 syllables in each line (pāda) in the sequence of 'Jagaṇa', 'Tagaṇa', 'Jagaṇa', 'Ragaṇa' (J-T-J-R)?",
    "question_hi": "किस छंद के प्रत्येक चरण में 'जगण', 'तगण', 'जगण', 'रगण' (J-T-J-R) के क्रम से 12 वर्ण होते हैं?",
    "options_en": ["Vaṃśastha", "Toṭaka", "Bhujaṅgaprayāta", "Drutavilambita"],
    "options_hi": ["वंशस्थ", "तोटक", "भुजंगप्रयात", "द्रुतविलंबित"],
    "correct_option_index": 0,
    "explanation_en": "(A) Vaṃśastha: Vaṃśastha is a syllabic (varṇika) samavṛtta metre. Each line has 12 syllables in the sequence Jagaṇa-Tagaṇa-Jagaṇa-Ragaṇa (ISI, SSI, ISI, SIS).",
    "explanation_hi": "(A) वंशस्थ: वंशस्थ एक वर्णिक सम-वृत्त है। इसके प्रत्येक चरण में जग-तग-जग-रग (ISI, SSI, ISI, SIS) के क्रम में 12 वर्ण होते हैं।"
  },
  {
    "question_en": "'Nahīṃ parāga nahīṃ madhura madhu, nahīṃ vikāsa ihi kāla.' - Which metre is used in this line?",
    "question_hi": "'नहीं पराग नहीं मधुर मधु, नहीं विकास इहि काल।' - इस पंक्ति में कौन सा छंद है?",
    "options_en": ["Dohā", "Soraṭhā", "Barvai", "Rolā"],
    "options_hi": ["दोहा", "सोरठा", "बरवै", "रोला"],
    "correct_option_index": 0,
    "explanation_en": "(A) Dohā: Counting the mātrās (nahīṃ-SI, parāga-ISS, nahīṃ-SI, madhura-III, madhu-II) - the first part has 13 mātrās. (nahīṃ-SI, vikāsa-ISS, ihi-II, kāla-SI) - the second part has 11 mātrās. This 13 and 11 mātrā sequence occurs in the 'Dohā' metre.",
    "explanation_hi": "(A) दोहा: मात्राओं की गिनती करने पर (नहीं-SI, पराग-ISS, नहीं-SI, मधुर-III, मधु-II) - पहले चरण में 13 मात्राएँ हैं। (नहीं-SI, विकास-ISS, इहि-II, काल-SI) - दूसरे चरण में 11 मात्राएँ हैं। 13 और 11 मात्राओं का यह क्रम 'दोहा' छंद में होता है।"
  },
  {
    "question_en": "The 'Kuṇḍaliyā' metre is formed by the combination of which two metres?",
    "question_hi": "'कुंडलिया' छंद किन दो छंदों के योग से बनता है?",
    "options_en": ["Dohā + Rolā", "Rolā + Ulālā", "Dohā + Soraṭhā", "Savaiyā + Rolā"],
    "options_hi": ["दोहा + रोला", "रोला + उलाला", "दोहा + सोरठा", "सवैया + रोला"],
    "correct_option_index": 0,
    "explanation_en": "(A) Dohā + Rolā: Kuṇḍaliyā is a compound (viṣama) mātrika metre. It has 6 lines. The first 2 lines are of Dohā and the last 4 lines are of Rolā. Its characteristic is that it ends with the same word it begins with.",
    "explanation_hi": "(A) दोहा + रोला: कुंडलिया एक विषम मात्रिक छंद है। इसके 6 चरण होते हैं। पहले 2 चरण दोहा के और बाद के 4 चरण रोला के होते हैं। इसकी पहचान है कि यह जिस शब्द से शुरू होता है, उसी पर समाप्त होता है।"
  },
  {
    "question_en": "'Nirala''s poem 'Jūhī kī Kalī' is a prime example of which metre?",
    "question_hi": "'निराला' की कविता 'जूही की कली' किस छंद का प्रमुख उदाहरण है?",
    "options_en": ["Varṇika Chhand (Syllabic)", "Mātrika Chhand (Moraic)", "Mukta Chhand (Free Verse / Earthworm Metre)", "Ghanākṣarī"],
    "options_hi": ["वर्णिक छंद", "मात्रिक छंद", "मुक्त छंद (केंचुआ छंद)", "घनाक्षरी"],
    "correct_option_index": 2,
    "explanation_en": "(C) Mukta Chhand (Free Verse / Earthworm Metre): Suryakant Tripathi 'Nirala' is considered the pioneer of 'Mukta Chhand' (Free Verse). 'Jūhī kī Kalī' is his famous free verse poem, which was also criticized at the time as 'Keñchuā Chhand' (Earthworm Metre).",
    "explanation_hi": "(C) मुक्त छंद (केंचुआ छंद): सूर्यकांत त्रिपाठी 'निराला' को 'मुक्त छंद' का प्रवर्तक माना जाता है। 'जूही की कली' उनकी प्रसिद्ध मुक्त छंद की कविता है, जिसे उस समय 'केंचुआ छंद' कहकर भी आलोचित किया गया था।"
  },
  {
    "question_en": "The 'Chappay' metre is formed by the combination of which two metres?",
    "question_hi": "'छप्पय' छंद किन दो छंदों के योग से बनता है?",
    "options_en": ["Dohā + Rolā", "Rolā + Ulālā", "Barvai + Rolā", "Dohā + Ulālā"],
    "options_hi": ["दोहा + रोला", "रोला + उलाला", "बरवै + रोला", "दोहा + उलाला"],
    "correct_option_index": 1,
    "explanation_en": "(B) Rolā + Ulālā: Chappay is a compound (viṣama) mātrika metre. It has 6 lines. The first 4 lines are of Rolā (24 mātrās each) and the last 2 lines are of Ulālā (26 or 28 mātrās each).",
    "explanation_hi": "(B) रोला + उलाला: छप्पय एक विषम मात्रिक छंद है। इसके 6 चरण होते हैं। पहले 4 चरण रोला के (प्रत्येक में 24 मात्राएँ) और अंतिम 2 चरण उलाला के (प्रत्येक में 26 या 28 मात्राएँ) होते हैं।"
  },
  {
    "question_en": "Which metre has a total of 19 mātrās with a yati (pause) after 12 and 7 mātrās?",
    "question_hi": "किस छंद में 12 और 7 मात्राओं की यति से कुल 19 मात्राएँ होती हैं?",
    "options_en": ["Barvai", "Ulālā", "Toṭaka", "Gītikā"],
    "options_hi": ["बरवै", "उलाला", "तोटक", "गीतिका"],
    "correct_option_index": 0,
    "explanation_en": "(A) Barvai: Barvai is a semi-regular (ardha-sam) mātrika metre. Its odd lines (1st, 3rd) have 12 mātrās and even lines (2nd, 4th) have 7 mātrās.",
    "explanation_hi": "(A) बरवै: बरवै एक अर्ध-सम मात्रिक छंद है। इसके विषम चरण (1, 3) में 12 मात्राएँ और सम चरण (2, 4) में 7 मात्राएँ होती हैं।"
  },
  {
    "question_en": "What is the sequence of syllables in each line of the 'Drutavilambita' metre?",
    "question_hi": "'द्रुतविलंबित' छंद के प्रत्येक चरण में वर्णों का क्रम क्या होता है?",
    "options_en": ["Nagaṇa, Bhagaṇa, Bhagaṇa, Ragaṇa", "Jagaṇa, Tagaṇa, Jagaṇa, Ragaṇa", "Magaṇa, Bhagaṇa, Nagaṇa, Yagaṇa", "Sagaṇa, Jagaṇa, Sagaṇa, Guru"],
    "options_hi": ["नगण, भगण, भगण, रगण", "जगण, तगण, जगण, रगण", "मगण, भगण, नगण, यगण", "सगण, जगण, सगण, गुरु"],
    "correct_option_index": 0,
    "explanation_en": "(A) Nagaṇa, Bhagaṇa, Bhagaṇa, Ragaṇa: Drutavilambita is a syllabic (varṇika) samavṛtta metre. Each line has 12 syllables, with the sequence 'Nagaṇa' (III), 'Bhagaṇa' (SII), 'Bhagaṇa' (SII), 'Ragaṇa' (SIS).",
    "explanation_hi": "(A) नगण, भगण, भगण, रगण: द्रुतविलंबित एक वर्णिक सम-वृत्त है। इसके प्रत्येक चरण में 12 वर्ण होते हैं, जिनका क्रम 'नगण' (III), 'भगण' (SII), 'भगण' (SII), 'रगण' (SIS) होता है।"
  },
  {
    "question_en": "What is the sequence of gaṇas for the 'Madirā' Savaiyā (22 syllables)?",
    "question_hi": "'मदिरा' सवैया (22 वर्ण) का गण-क्रम क्या होता है?",
    "options_en": ["7 Bhagaṇa + 1 Guru", "8 Sagaṇa", "7 Jagaṇa + 1 Guru", "8 Jagaṇa"],
    "options_hi": ["7 भगण + 1 गुरु", "8 सगण", "7 जगण + 1 गुरु", "8 जगण"],
    "correct_option_index": 0,
    "explanation_en": "(A) 7 Bhagaṇa + 1 Guru: Savaiyā is a metre with 22 to 26 syllables. The 'Madirā' Savaiyā has 22 syllables, formed by the combination of 7 'Bhagaṇa' (SII) and one 'Guru' (S) at the end.",
    "explanation_hi": "(A) 7 भगण + 1 गुरु: सवैया 22 से 26 वर्णों तक का छंद है। 'मदिरा' सवैया में 22 वर्ण होते हैं, जो 7 'भगण' (SII) और अंत में एक 'गुरु' (S) के योग से बनते हैं।"
  },
  {
    "question_en": "How many mātrās will be counted in the word 'Pratyek'?",
    "question_hi": "'प्रत्येक' शब्द में कितनी मात्राएँ गिनी जाएँगी?",
    "options_en": ["2", "3", "4", "5"],
    "options_hi": ["2", "3", "4", "5"],
    "correct_option_index": 2,
    "explanation_en": "(C) 4: 'Pra' (Short - I) + 'tye' (Long - S, due to 'e' vowel) + 'k' (Short - I). Total mātrās = I S I = 1 + 2 + 1 = 4.",
    "explanation_hi": "(C) 4: 'प्र' (लघु - I) + 'त्ये' (गुरु - S, 'ए' की मात्रा के कारण) + 'क' (लघु - I). कुल मात्राएँ = I S I = 1 + 2 + 1 = 4."
  },
  {
    "question_en": "How many syllables are there in each line of the 'Mandākrāntā' metre and where does the yati (pause) occur?",
    "question_hi": "'मंदाक्रांता' छंद के प्रत्येक चरण में कितने वर्ण होते हैं और यति कहाँ होती है?",
    "options_en": ["15 syllables; yati at 8, 7", "17 syllables; yati at 4, 6, 7", "19 syllables; yati at 12, 7", "14 syllables; yati at 7, 7"],
    "options_hi": ["15 वर्ण; 8, 7 पर यति", "17 वर्ण; 4, 6, 7 पर यति", "19 वर्ण; 12, 7 पर यति", "14 वर्ण; 7, 7 पर यति"],
    "correct_option_index": 1,
    "explanation_en": "(B) 17 syllables; yati at 4, 6, 7: Mandākrāntā is a syllabic (varṇika) samavṛtta metre. Each line has 17 syllables. It follows the sequence 'Magaṇa, Bhagaṇa, Nagaṇa, Tagaṇa, Tagaṇa, Guru, Guru', and the yati occurs after the 4th, 6th, and 7th syllables.",
    "explanation_hi": "(B) 17 वर्ण; 4, 6, 7 पर यति: मंदाक्रांता एक वर्णिक सम-वृत्त है। इसके प्रत्येक चरण में 17 वर्ण होते हैं। इसमें 'मगण, भगण, नगण, तगण, तगण, गुरु, गुरु' का क्रम होता है और यति 4, 6, और 7 वर्णों पर होती है।"
  },
  {
    "question_en": "How many total syllables are there in each line of the 'Kavitta' (Manharan) metre?",
    "question_hi": "'कवित्त' (मनहरण) छंद के प्रत्येक चरण में कुल कितने वर्ण होते हैं?",
    "options_en": ["26", "28", "31", "33"],
    "options_hi": ["26", "28", "31", "33"],
    "correct_option_index": 2,
    "explanation_en": "(C) 31: Kavitta (or Manharan) is a Daṇḍaka varṇika metre. Each line has 31 syllables, with a yati after the 16th and 15th syllables.",
    "explanation_hi": "(C) 31: कवित्त (या मनहरण) एक दंडक वर्णिक छंद है। इसके प्रत्येक चरण में 31 वर्ण होते हैं। इसमें 16 और 15 वर्णों पर यति होती है।"
  },
  {
    "question_en": "How many total mātrās are there in each line of the 'Harigītikā' metre?",
    "question_hi": "'हरिगीतिका' छंद के प्रत्येक चरण में कुल कितनी मात्राएँ होती हैं?",
    "options_en": ["24", "26", "28", "30"],
    "options_hi": ["24", "26", "28", "30"],
    "correct_option_index": 2,
    "explanation_en": "(C) 28: Harigītikā is a regular (sam) mātrika metre. Each line has 28 mātrās, with yati at 16 and 12 mātrās. It must end with a short-long (IS) pattern.",
    "explanation_hi": "(C) 28: हरिगीतिका एक सम-मात्रिक छंद है। इसके प्रत्येक चरण में 28 मात्राएँ होती हैं, और 16 तथा 12 मात्राओं पर यति होती है। अंत में लघु-गुरु (IS) होना अनिवार्य है।"
  },
  {
    "question_en": "What is the sequence of gaṇas for the 'Vasantatilakā' metre?",
    "question_hi": "'वसंततिलका' छंद का गण-क्रम (sequence of ganas) क्या है?",
    "options_en": ["Tagaṇa, Bhagaṇa, Jagaṇa, Jagaṇa, Guru, Guru", "Jagaṇa, Tagaṇa, Jagaṇa, Ragaṇa", "Nagaṇa, Bhagaṇa, Bhagaṇa, Ragaṇa", "Magaṇa, Bhagaṇa, Nagaṇa, Tagaṇa, Tagaṇa"],
    "options_hi": ["तगण, भगण, जगण, जगण, गुरु, गुरु", "जगण, तगण, जगण, रगण", "नगण, भगण, भगण, रगण", "मगण, भगण, नगण, तगण, तगण"],
    "correct_option_index": 0,
    "explanation_en": "(A) Tagaṇa, Bhagaṇa, Jagaṇa, Jagaṇa, Guru, Guru: Vasantatilakā is a syllabic (varṇika) samavṛtta metre. Each line has 14 syllables, with the sequence: Tagaṇa (SSI), Bhagaṇa (SII), Jagaṇa (ISI), Jagaṇa (ISI), and two Gurus (SS) at the end.",
    "explanation_hi": "(A) तगण, भगण, जगण, जगण, गुरु, गुरु: वसंततिलका एक वर्णिक सम-वृत्त है। इसके प्रत्येक चरण में 14 वर्ण होते हैं, जिनका क्रम है: तगण (SSI), भगण (SII), जगण (ISI), जगण (ISI), और अंत में दो गुरु (SS)."
  },
  {
    "question_en": "'Jo jag hit par prāṇ nichhāvar hai kar pātā. Jiskā tan hai kisī lok-hit meṃ lag jātā.' Which metre is used in these lines?",
    "question_hi": "'जो जग हित पर प्राण निछावर है कर पाता। जिसका तन है किसी लोक-हित में लग जाता।' इन पंक्तियों में कौन सा छंद है?",
    "options_en": ["Rolā", "Gītikā", "Harigītikā", "Ulālā"],
    "options_hi": ["रोला", "गीतिका", "हरिगीतिका", "उलाला"],
    "correct_option_index": 0,
    "explanation_en": "(A) Rolā: Let's count the mātrās: 'Jo(S) jag(II) hit(II) par(II) prāṇ(SI) ni(I) chhā(S) var(II) hai(S) kar(II) pā(S) tā(S)'. There are 24 mātrās with yati at 11 and 13. This is characteristic of the Rolā (sam-mātrika) metre.",
    "explanation_hi": "(A) रोला: मात्रा गिनकर देखें: 'जो(S) जग(II) हित(II) पर(II) प्राण(SI) नि(I) छा(S) वर(II) है(S) कर(II) पा(S) ता(S)'. 11 और 13 पर यति है, कुल 24 मात्राएँ हैं। यह रोला (सम-मात्रिक) छंद का लक्षण है।"
  },
  {
    "question_en": "What is the sequence and number of syllables in each line of the 'Mālinī' metre?",
    "question_hi": "'मालिनी' छंद के प्रत्येक चरण में वर्णों का क्रम और संख्या क्या है?",
    "options_en": ["17 syllables; M-Bh-N-T-T-G-G", "15 syllables; N-N-M-Y-Y", "19 syllables; S-J-S-Y-L-G", "14 syllables; T-Bh-J-J-G-G"],
    "options_hi": ["17 वर्ण; M-Bh-N-T-T-G-G", "15 वर्ण; N-N-M-Y-Y", "19 वर्ण; S-J-S-Y-L-G", "14 वर्ण; T-Bh-J-J-G-G"],
    "correct_option_index": 1,
    "explanation_en": "(B) 15 syllables; N-N-M-Y-Y: Mālinī is a syllabic (varṇika) samavṛtta metre. Each line has 15 syllables. Its gaṇa sequence is 'Nagaṇa, Nagaṇa, Magaṇa, Yagaṇa, Yagaṇa' (NNMYY).",
    "explanation_hi": "(B) 15 वर्ण; N-N-M-Y-Y: मालिनी एक वर्णिक सम-वृत्त है। इसके प्रत्येक चरण में 15 वर्ण होते हैं। इसका गण-क्रम 'नगण, नगण, मगण, यगण, यगण' (NNMYY) होता है।"
  },
  {
    "question_en": "How many mātrās are there in the odd lines (1st and 3rd) of the 'Soraṭhā' metre?",
    "question_hi": "'सोरठा' छंद के विषम चरणों (1st और 3rd) में कितनी मात्राएँ होती हैं?",
    "options_en": ["11", "13", "12", "7"],
    "options_hi": ["11", "13", "12", "7"],
    "correct_option_index": 0,
    "explanation_en": "(A) 11: Soraṭhā is the reverse of Dohā. It is a semi-regular (ardha-sam) mātrika metre. Its odd lines (1st, 3rd) have 11 mātrās and even lines (2nd, 4th) have 13 mātrās.",
    "explanation_hi": "(A) 11: सोरठा, दोहा का उलट (उल्टा) होता है। यह एक अर्ध-सम मात्रिक छंद है। इसके विषम चरणों (1, 3) में 11 मात्राएँ और सम चरणों (2, 4) में 13 मात्राएँ होती हैं।"
  },
  {
    "question_en": "What is another name for the 'Ghanākṣarī' metre?",
    "question_hi": "'घनाक्षरी' छंद का दूसरा नाम क्या है?",
    "options_en": ["Manharan", "Dev", "Rūpasindhu", "Kavitta"],
    "options_hi": ["मनहरण", "देव", "रूपसिंधु", "कवित्त"],
    "correct_option_index": 0,
    "explanation_en": "(A) Manharan: The Ghanākṣarī metre is also called 'Manharan Kavitta'. Each line has 31 syllables.",
    "explanation_hi": "(A) मनहरण: घनाक्षरी छंद को ही 'मनहरण कवित्त' कहा जाता है। इसके प्रत्येक चरण में 31 वर्ण होते हैं।"
  },
  {
    "question_en": "In the 'Śikhariṇī' metre, after which syllables does the yati (pause) occur?",
    "question_hi": "'शिखरिणी' छंद में यति (pause) किन वर्णों पर होती है?",
    "options_en": ["At 4 and 7", "At 8 and 9", "At 6 and 11", "At 7 and 10"],
    "options_hi": ["4 और 7 पर", "8 और 9 पर", "6 और 11 पर", "7 और 10 पर"],
    "correct_option_index": 2,
    "explanation_en": "(C) At 6 and 11: Śikhariṇī is a syllabic (varṇika) samavṛtta metre with 17 syllables. Its gaṇa sequence is Y-M-N-S-Bh-L-G, and the yati occurs after the 6th and 11th syllables.",
    "explanation_hi": "(C) 6 और 11 पर: शिखरिणी एक वर्णिक सम-वृत्त है जिसमें 17 वर्ण होते हैं। इसका गण-क्रम Y-M-N-S-Bh-L-G होता है और यति 6 और 11 वर्णों पर होती है।"
  },
  {
    "question_en": "Who is considered the original proponent of the science of metres (Chhanda-śāstra), famously known as 'Piṅgala'?",
    "question_hi": "'पिंगल' नाम से प्रसिद्ध छंद-शास्त्र के आदि प्रवर्तक कौन माने जाते हैं?",
    "options_en": ["Pāṇini", "Patañjali", "Ācārya Piṅgala", "Bharatamuni"],
    "options_hi": ["पाणिनि", "पतंजलि", "आचार्य पिंगल", "भरतमुनि"],
    "correct_option_index": 2,
    "explanation_en": "(C) Ācārya Piṅgala: Ācārya Piṅgala composed the 'Chhandaḥsūtra', the foundational text of prosody. For this reason, the science of metres is also called 'Piṅgala-śāstra'.",
    "explanation_hi": "(C) आचार्य पिंगल: आचार्य पिंगल ने 'छंदःसूत्र' की रचना की, जो छंद-शास्त्र का मूल ग्रंथ है। इसी कारण छंद-शास्त्र को 'पिंगल-शास्त्र' भी कहा जाता है।"
  },
  {
    "question_en": "The 'Lāvaṇī' metre, which is a folk metre, is what type of metre?",
    "question_hi": "'लावणी' छंद, जो कि एक लोक-छंद है, किस प्रकार का छंद है?",
    "options_en": ["Varṇika Chhand (32 syllables)", "Mātrika Chhand (30 mātrās)", "Mukta Chhand (Free Verse)", "Daṇḍaka Chhand"],
    "options_hi": ["वर्णिक छंद (32 वर्ण)", "मात्रिक छंद (30 मात्राएँ)", "मुक्त छंद", "दंडक छंद"],
    "correct_option_index": 1,
    "explanation_en": "(B) Mātrika Chhand (30 mātrās): Lāvaṇī is a mātrika metre with 30 mātrās in each line, with yati at 16 and 14. It is a popular folk metre of Maharashtra.",
    "explanation_hi": "(B) मात्रिक छंद (30 मात्राएँ): लावणी एक मात्रिक छंद है जिसके प्रत्येक चरण में 30 मात्राएँ होती हैं, 16 और 14 पर यति होती है। यह महाराष्ट्र का लोक-प्रसिद्ध छंद है।"
  },
  {
    "question_en": "Which metre is formed by mixing the 'Indravajrā' and 'Upendravajrā' metres?",
    "question_hi": "'इंद्रवज्रा' और 'उपेंद्रवज्रा' छंदों के मिलने से कौन सा छंद बनता है?",
    "options_en": ["Viyoginī", "Vaṃśastha", "Upajāti", "Mālinī"],
    "options_hi": ["वियोगिनी", "वंशस्थ", "उपजाति", "मालिनी"],
    "correct_option_index": 2,
    "explanation_en": "(C) Upajāti: Upajāti is a syllabic (varṇika) metre formed by the mixture of two other metres (especially Indravajrā and Upendravajrā). Both have 11 syllables, differing only in the first syllable (short/long).",
    "explanation_hi": "(C) उपजाति: उपजाति एक वर्णिक छंद है जो अन्य दो छंदों (विशेषकर इंद्रवज्रा और उपेंद्रवज्रा) के मिश्रण से बनता है। दोनों में 11 वर्ण होते हैं, केवल पहले वर्ण (लघु/गुरु) का अंतर होता है।"
  },
  {
    "question_en": "What is the correct sequence of gaṇas for the 'Indravajrā' metre?",
    "question_hi": "'इंद्रवज्रा' छंद का सही गण-क्रम क्या है?",
    "options_en": ["Tagaṇa, Tagaṇa, Jagaṇa, Guru, Guru", "Jagaṇa, Tagaṇa, Jagaṇa, Guru, Guru", "Nagaṇa, Bhagaṇa, Bhagaṇa, Ragaṇa", "Tagaṇa, Bhagaṇa, Jagaṇa, Jagaṇa"],
    "options_hi": ["तगण, तगण, जगण, गुरु, गुरु", "जगण, तगण, जगण, गुरु, गुरु", "नगण, भगण, भगण, रगण", "तगण, भगण, जगण, जगण"],
    "correct_option_index": 0,
    "explanation_en": "(A) Tagaṇa, Tagaṇa, Jagaṇa, Guru, Guru: Indravajrā is a syllabic (varṇika) samavṛtta metre (11 syllables). Its definition is 'Syādindravajrā yadi tau jagau gaḥ', meaning Tagaṇa, Tagaṇa, Jagaṇa, Guru, Guru (SSI, SSI, ISI, S, S).",
    "explanation_hi": "(A) तगण, तगण, जगण, गुरु, गुरु: इंद्रवज्रा एक वर्णिक सम-वृत्त (11 वर्ण) है। इसका लक्षण है 'स्यादिन्द्रवज्रा यदि तौ जगौ गः', अर्थात तगण, तगण, जगण, गुरु, गुरु (SSI, SSI, ISI, S, S)."
  },
  {
    "question_en": "How many mātrās are there in the word 'Ārdra'?",
    "question_hi": "'आर्द्र' शब्द में कितनी मात्राएँ हैं?",
    "options_en": ["2", "3", "4", "1"],
    "options_hi": ["2", "3", "4", "1"],
    "correct_option_index": 1,
    "explanation_en": "(B) 3: 'Ā' is Guru (S). 'rdra' (half r + half d + r + a) is a conjunct consonant; it is Laghu (I) itself. According to the rule for conjuncts, the preceding vowel 'Ā', which is already Guru, remains Guru. Total mātrās = S + I = 2 + 1 = 3.",
    "explanation_hi": "(B) 3: 'आ' गुरु (S) है। 'र्द्र' (आधा र + आधा द + र + अ) एक संयुक्ताक्षर है, यह स्वयं में लघु (I) है। संयुक्ताक्षर के नियम के अनुसार, 'आ' जो पहले से गुरु है, गुरु ही रहेगा। कुल मात्राएँ = S + I = 2 + 1 = 3."
  },
  {
    "question_en": "How many syllables are there in each line of the 'Śārdūlavikrīḍita' metre?",
    "question_hi": "'शार्दूलविक्रीडित' छंद के प्रत्येक चरण में कितने वर्ण होते हैं?",
    "options_en": ["17", "19", "21", "15"],
    "options_hi": ["17", "19", "21", "15"],
    "correct_option_index": 1,
    "explanation_en": "(B) 19: Śārdūlavikrīḍita is a syllabic (varṇika) samavṛtta metre. Each line has 19 syllables, with yati after the 12th and 7th syllables.",
    "explanation_hi": "(B) 19: शार्दूलविक्रीडित एक वर्णिक सम-वृत्त है। इसके प्रत्येक चरण में 19 वर्ण होते हैं। इसमें 12 और 7 वर्णों पर यति होती है।"
  },
  {
    "question_en": "What is the sequence of mātrās in the even and odd lines of the 'Ulālā' metre?",
    "question_hi": "'उलाला' छंद के सम और विषम चरणों में मात्राओं का क्या क्रम होता है?",
    "options_en": ["13-13", "15-13", "12-16", "11-13"],
    "options_hi": ["13-13", "15-13", "12-16", "11-13"],
    "correct_option_index": 1,
    "explanation_en": "(B) 15-13: Ulālā is a semi-regular (ardha-sam) mātrika metre. Its odd lines (1st, 3rd) have 15 mātrās and even lines (2nd, 4th) have 13 mātrās. Total 28 mātrās per couplet.",
    "explanation_hi": "(B) 15-13: उलाला एक अर्ध-सम मात्रिक छंद है। इसके विषम चरणों (1, 3) में 15 मात्राएँ और सम चरणों (2, 4) में 13 मात्राएँ होती हैं। कुल 28 मात्राएँ।"
  },
  {
    "question_en": "How many total syllables are there in the 'Sragdharā' metre, and where does the yati occur?",
    "question_hi": "'स्रग्धरा' छंद में कुल कितने वर्ण होते हैं और यति कहाँ-कहाँ होती है?",
    "options_en": ["19 syllables; yati at 6, 6, 7", "21 syllables; yati at 7, 7, 7", "22 syllables; yati at 8, 8, 6", "17 syllables; yati at 4, 6, 7"],
    "options_hi": ["19 वर्ण; 6, 6, 7 पर यति", "21 वर्ण; 7, 7, 7 पर यति", "22 वर्ण; 8, 8, 6 पर यति", "17 वर्ण; 4, 6, 7 पर यति"],
    "correct_option_index": 1,
    "explanation_en": "(B) 21 syllables; yati at 7, 7, 7: Sragdharā is a syllabic (varṇika) samavṛtta metre. Each line has 21 syllables, with yati occurring after every 7 syllables. Its gaṇa sequence is M-R-Bh-N-Y-Y-Y.",
    "explanation_hi": "(B) 21 वर्ण; 7, 7, 7 पर यति: स्रग्धरा एक वर्णिक सम-वृत्त है। इसके प्रत्येक चरण में 21 वर्ण होते हैं, जो 7, 7, और 7 वर्णों पर यति लेते हैं। इसका गण-क्रम म-र-भ-न-य-य-य होता है।"
  },
  {
    "question_en": "How many syllables are there in 'Rūp Ghanākṣarī' (a type of Ghanākṣarī)?",
    "question_hi": "'रूप घनाक्षरी' (घनाक्षरी का एक भेद) में कितने वर्ण होते हैं?",
    "options_en": ["31", "32", "33", "30"],
    "options_hi": ["31", "32", "33", "30"],
    "correct_option_index": 1,
    "explanation_en": "(B) 32: There are three main types of Ghanākṣarī: Manharan (31 syllables), Rūp Ghanākṣarī (32 syllables), and Dev Ghanākṣarī (33 syllables).",
    "explanation_hi": "(B) 32: घनाक्षरी के तीन मुख्य भेद हैं: मनहरण (31 वर्ण), रूप घनाक्षरी (32 वर्ण), और देव घनाक्षरी (33 वर्ण)।"
  },
  {
    "question_en": "'Koū nṛpa hohiṃ hamahiṃ kā hānī.' - Which metre is used in this line? (16 mātrās)",
    "question_hi": "'कोउ नृप होहिं हमहिं का हानी।' - इस पंक्ति में कौन सा छंद है? (16 मात्राएँ)",
    "options_en": ["Dohā", "Soraṭhā", "Rolā", "Chaupāī"],
    "options_hi": ["दोहा", "सोरठा", "रोला", "चौपाई"],
    "correct_option_index": 3,
    "explanation_en": "(D) Chaupāī: Count the mātrās: Ko(S)ū(I) nṛ(I)pa(I) ho(S)hiṃ(I) ha(I)ma(I)hiṃ(I) kā(S) hā(S)nī(S) = 2+1+1+1+2+1+1+1+1+2+2+2 = 16. Each line having 16 mātrās is characteristic of Chaupāī.",
    "explanation_hi": "(D) चौपाई: मात्राएँ गिनें: को(S) उ(I) नृ(I) प(I) हो(S) हिं(I) ह(I) म(I) हिं(I) का(S) हा(S) नी(S) = 2+1+1+1+2+1+1+1+1+2+2+2 = 16. प्रत्येक चरण में 16 मात्राएँ चौपाई में होती हैं।"
  },
  {
    "question_en": "What is the characteristic feature of the 'Viyoginī' or 'Sundarī' metre?",
    "question_hi": "'वियोगिनी' या 'सुंदरी' छंद का लक्षण क्या है?",
    "options_en": ["11 and 13 mātrās", "8 Sagaṇa and 1 Guru", "Sagaṇa, Jagaṇa, Sagaṇa, Guru (10 syllables)", "Sagaṇa, Sagaṇa, Jagaṇa, Guru (11 syllables)"],
    "options_hi": ["11 और 13 मात्राएँ", "8 सगण और 1 गुरु", "सगण, जगण, सगण, गुरु (10 वर्ण)", "सगण, सगण, जगण, गुरु (11 वर्ण)"],
    "correct_option_index": 3,
    "explanation_en": "(D) Sagaṇa, Sagaṇa, Jagaṇa, Guru (11 syllables): Viyoginī (or Sundarī) is a syllabic (varṇika) metre. Each line has 11 syllables, with the sequence 'Sagaṇa, Sagaṇa, Jagaṇa, Guru' (IIS, IIS, ISI, S).",
    "explanation_hi": "(D) सगण, सगण, जगण, गुरु (11 वर्ण): वियोगिनी (या सुंदरी) एक वर्णिक छंद है। इसके प्रत्येक चरण में 11 वर्ण होते हैं, जिनका क्रम 'सगण, सगण, जगण, गुरु' (IIS, IIS, ISI, S) होता है।"
  },
  {
    "question_en": "How many total syllables are there in the 'Durmil' Savaiyā, and what is its gaṇa sequence?",
    "question_hi": "'दुर्मिल' सवैया में कुल कितने वर्ण होते हैं और इसका गण-क्रम क्या है?",
    "options_en": ["22 syllables (7 Bhagaṇa + Guru)", "23 syllables (8 Jagaṇa)", "24 syllables (8 Sagaṇa)", "25 syllables (8 Bhagaṇa)"],
    "options_hi": ["22 वर्ण (7 भगण + गुरु)", "23 वर्ण (8 जगण)", "24 वर्ण (8 सगण)", "25 वर्ण (8 भगण)"],
    "correct_option_index": 2,
    "explanation_en": "(C) 24 syllables (8 Sagaṇa): Durmil Savaiyā (also called 'Candrakalā') has 24 syllables, formed by the combination of 8 'Sagaṇa' (IIS).",
    "explanation_hi": "(C) 24 वर्ण (8 सगण): दुर्मिल सवैया (इसे 'चंद्रकला' भी कहते हैं) में 24 वर्ण होते हैं, जो 8 'सगण' (IIS) के योग से बनते हैं।"
  },
  {
    "question_en": "How many mātrās are there in each line of the 'Gītikā' metre?",
    "question_hi": "'गीतिका' छंद के प्रत्येक चरण में कितनी मात्राएँ होती हैं?",
    "options_en": ["24", "26", "28", "30"],
    "options_hi": ["24", "26", "28", "30"],
    "correct_option_index": 1,
    "explanation_en": "(B) 26: Gītikā is a regular (sam) mātrika metre. Each line has 26 mātrās, with yati at 14 and 12. It must end with a short-long (IS) pattern.",
    "explanation_hi": "(B) 26: गीतिका एक सम-मात्रिक छंद है। इसके प्रत्येक चरण में 26 मात्राएँ होती हैं, 14 और 12 पर यति होती है। अंत में लघु-गुरु (IS) होना अनिवार्य है।"
  },
  {
    "question_en": "How many mātrās are there in the word 'Kartavya'?",
    "question_hi": "'कर्तव्य' शब्द में कितनी मात्राएँ हैं?",
    "options_en": ["3", "4", "5", "2"],
    "options_hi": ["3", "4", "5", "2"],
    "correct_option_index": 1,
    "explanation_en": "(B) 4: 'Ka'(I) + 'rta'(conjunct) + 'vya'(conjunct). Rule: Due to the half 'r' in 'rta', the preceding 'Ka' becomes Guru (S). 'ta' is Laghu (I). 'vya' (half v + y + a) is Laghu (I). Total = S + I + I = 2 + 1 + 1 = 4.",
    "explanation_hi": "(B) 4: 'क' (I) + 'र्त' (संयुक्ताक्षर) + 'व्य' (संयुक्ताक्षर). नियम: 'र्त' के 'र्' (आधा) के कारण 'क' गुरु (S) हो जाएगा। 'त' लघु (I) है। 'व्य' लघु (I) है। कुल = S + I + I = 2 + 1 + 1 = 4."
  },
  {
    "question_en": "How many mātrās are there in the 'Vīr' or 'Ālhā' metre?",
    "question_hi": "'वीर' या 'आल्हा' छंद में कितनी मात्राएँ होती हैं?",
    "options_en": ["28 (yati 16, 12)", "30 (yati 16, 14)", "31 (yati 16, 15)", "24 (yati 11, 13)"],
    "options_hi": ["28 (16, 12 यति)", "30 (16, 14 यति)", "31 (16, 15 यति)", "24 (11, 13 यति)"],
    "correct_option_index": 2,
    "explanation_en": "(C) 31 (yati 16, 15): Vīr (Ālhā) is a regular (sam) mātrika metre. Each line has 31 mātrās, with yati at 16 and 15. It is the largest mātrika metre in Hindi.",
    "explanation_hi": "(C) 31 (16, 15 यति): वीर (आल्हा) एक सम-मात्रिक छंद है। इसके प्रत्येक चरण में 31 मात्राएँ होती हैं, 16 और 15 पर यति होती है। यह हिंदी का सबसे बड़ा मात्रिक छंद है।"
  },
  {
    "question_en": "How many mātrās are there in the 'Paddhari' metre, also called 'Paddhaṭikā'?",
    "question_hi": "'पद्धरि' छंद, जिसे 'पद्धटिका' भी कहते हैं, में कितनी मात्राएँ होती हैं?",
    "options_en": ["16 mātrās (yati at 8, 8)", "20 mātrās (yati at 10, 10)", "24 mātrās (yati at 12, 12)", "22 mātrās (yati at 11, 11)"],
    "options_hi": ["16 मात्राएँ (8, 8 पर यति)", "20 मात्राएँ (10, 10 पर यति)", "24 मात्राएँ (12, 12 पर यति)", "22 मात्राएँ (11, 11 पर यति)"],
    "correct_option_index": 0,
    "explanation_en": "(A) 16 mātrās (yati at 8, 8): Paddhari (or Paddhaṭikā) is a regular (sam) mātrika metre of 16 mātrās, with yati after every 8 mātrās. It resembles Chaupāī, but the yati rule is stricter in Chaupāī.",
    "explanation_hi": "(A) 16 मात्राएँ (8, 8 पर यति): पद्धरि (या पद्धटिका) 16 मात्राओं का सम-मात्रिक छंद है, जिसमें 8-8 मात्राओं पर यति होती है। यह चौपाई जैसा है, पर चौपाई में यति का नियम कठोर नहीं है।"
  },
  {
    "question_en": "What is the characteristic feature of the 'Toṭaka' metre?",
    "question_hi": "'तोटक' छंद का लक्षण क्या है?",
    "options_en": ["12 syllables (four Jagaṇa)", "12 syllables (four Sagaṇa)", "12 syllables (N-Bh-Bh-R)", "12 syllables (J-T-J-R)"],
    "options_hi": ["12 वर्ण (चारों जगण)", "12 वर्ण (चारों सगण)", "12 वर्ण (न-भ-भ-र)", "12 वर्ण (ज-त-ज-र)"],
    "correct_option_index": 1,
    "explanation_en": "(B) 12 syllables (four Sagaṇa): Toṭaka is a syllabic (varṇika) samavṛtta metre. Each line has 12 syllables, arranged in the sequence of four 'Sagaṇa' (IIS, IIS, IIS, IIS).",
    "explanation_hi": "(B) 12 वर्ण (चारों सगण): तोटक एक वर्णिक सम-वृत्त है। इसके प्रत्येक चरण में 12 वर्ण होते हैं, जो चार 'सगण' (IIS, IIS, IIS, IIS) के क्रम में होते हैं।"
  },
  {
    "question_en": "What type of metre is the 'Tāṭaṅka' metre?",
    "question_hi": "'ताटंक' छंद किस प्रकार का छंद है?",
    "options_en": ["Varṇika Chhand (16 syllables)", "Mātrika Chhand (30 mātrās)", "Mukta Chhand (Free Verse)", "Varṇika Daṇḍaka"],
    "options_hi": ["वर्णिक छंद (16 वर्ण)", "मात्रिक छंद (30 मात्राएँ)", "मुक्त छंद", "वर्णिक दंडक"],
    "correct_option_index": 1,
    "explanation_en": "(B) Mātrika Chhand (30 mātrās): Tāṭaṅka is a regular (sam) mātrika metre of 30 mātrās, with yati at 16 and 14. It is similar to the Lāvaṇī metre.",
    "explanation_hi": "(B) मात्रिक छंद (30 मात्राएँ): ताटंक 30 मात्राओं का सम-मात्रिक छंद है, जिसमें 16 और 14 पर यति होती है। यह लावणी छंद के समान है।"
  },
  {
    "question_en": "'Avadhi śilā kā ur par, thā guru bhāra. Til-til kāṭ rahī thī, dṛg jal dhāra.' - Which metre is used in these lines?",
    "question_hi": "'अवधि शिला का उर पर, था गुरु भार। तिल-तिल काट रही थी, दृग जल धार।' - इन पंक्तियों में कौन सा छंद है?",
    "options_en": ["Rolā", "Soraṭhā", "Dohā", "Barvai"],
    "options_hi": ["रोला", "सोरठा", "दोहा", "बरवै"],
    "correct_option_index": 3,
    "explanation_en": "(D) Barvai: Count the mātrās: 'Avadhi(III) śilā(SI) kā(S) ur(II) par(II)' = 1+1+1+1+2+2+1+1 = 12 (odd line). 'Thā(S) guru(II) bhāra(SI)' = 2+1+1+1+2 = 7 (even line). The sequence of 12 and 7 mātrās occurs in 'Barvai'.",
    "explanation_hi": "(D) बरवै: मात्राएँ गिनें: 'अवधि(III) शिला(SI) का(S) उर(II) पर(II)' = 1+1+1+1+2+2+1+1 = 12 (विषम चरण)। 'था(S) गुरु(II) भार(SI)' = 2+1+1+1+2 = 7 (सम चरण)। 12 और 7 मात्राओं का क्रम 'बरवै' में होता है।"
  },
  {
    "question_en": "What is the sequence of gaṇas for the 'Bhujaṅgaprayāta' metre?",
    "question_hi": "'भुजंगप्रयात' छंद का गण-क्रम क्या है?",
    "options_en": ["Four Yagaṇa (Y-Y-Y-Y)", "Four Bhagaṇa (Bh-Bh-Bh-Bh)", "Four Sagaṇa (S-S-S-S)", "Four Magaṇa (M-M-M-M)"],
    "options_hi": ["चार यगण (Y-Y-Y-Y)", "चार भगण (Bh-Bh-Bh-Bh)", "चार सगण (S-S-S-S)", "चार मगण (M-M-M-M)"],
    "correct_option_index": 0,
    "explanation_en": "(A) Four Yagaṇa (Y-Y-Y-Y): Bhujaṅgaprayāta is a syllabic (varṇika) samavṛtta metre of 12 syllables. Its definition is 'Bhujaṅgaprayātaṃ caturbhiryakāraiḥ', meaning it consists of four 'Yagaṇa' (ISS, ISS, ISS, ISS).",
    "explanation_hi": "(A) चार यगण (Y-Y-Y-Y): भुजंगप्रयात 12 वर्णों का वर्णिक सम-वृत्त है। इसका लक्षण 'भुजंगप्रयातं चतुर्भिर्यकारैः' है, अर्थात इसमें चार 'यगण' (ISS, ISS, ISS, ISS) होते हैं।"
  },
  {
    "question_en": "What is forbidden at the end of a 'Chaupāī' metre line?",
    "question_hi": "'चौपाई' छंद के अंत में क्या होना वर्जित (मना) है?",
    "options_en": ["Two Gurus (SS)", "Jagaṇa (ISI) or Tagaṇa (SSI)", "Two Laghus (II)", "Ragaṇa (SIS)"],
    "options_hi": ["दो गुरु (SS)", "जगण (ISI) या तगण (SSI)", "दो लघु (II)", "रगण (SIS)"],
    "correct_option_index": 1,
    "explanation_en": "(B) Jagaṇa (ISI) or Tagaṇa (SSI): Ending a Chaupāī line with Guru-Laghu (SI) or Guru-Guru (SS) is considered auspicious, but ending with 'Jagaṇa' (ISI) or 'Tagaṇa' (SSI) is considered forbidden.",
    "explanation_hi": "(B) जगण (ISI) या तगण (SSI): चौपाई के अंत में गुरु-लघु (SI) या गुरु-गुरु (SS) शुभ माना जाता है, लेकिन अंत में 'जगण' (ISI) या 'तगण' (SSI) का आना वर्जित माना गया है।"
  },
  {
    "question_en": "What is the sequence of gaṇas for 'Śārdūlavikrīḍita' (19 syllables)?",
    "question_hi": "'शार्दूलविक्रीडित' (19 वर्ण) का गण-क्रम क्या है?",
    "options_en": ["M-S-J-S-T-T-G", "Y-M-N-S-Bh-L-G", "N-N-M-Y-Y", "M-R-Bh-N-Y-Y-Y"],
    "options_hi": ["M-S-J-S-T-T-G", "Y-M-N-S-Bh-L-G", "N-N-M-Y-Y", "M-R-Bh-N-Y-Y-Y"],
    "correct_option_index": 0,
    "explanation_en": "(A) M-S-J-S-T-T-G: Its definition is: 'Sūryāśvairmasajāstatāḥ saguravaḥ śārdūlavikrīḍitam'. (Yati after Sūrya=12, Aśva=7 syllables). Gaṇa sequence: Magaṇa, Sagaṇa, Jagaṇa, Sagaṇa, Tagaṇa, Tagaṇa, and one Guru (G).",
    "explanation_hi": "(A) M-S-J-S-T-T-G: इसका लक्षण है: 'सूर्याश्वैर्मसजास्तताः सगुरवः शार्दूलविक्रीडितम्'। (सूर्य=12, अश्व=7 पर यति)। गण-क्रम: मगण, सगण, जगण, सगण, तगण, तगण, और एक गुरु (G)."
  },
  {
    "question_en": "Which metre is called the 'Metre of the Ābhīras'?",
    "question_hi": "'आभीरों का छंद' किसे कहा जाता है?",
    "options_en": ["Dohā", "Rolā", "Savaiyā", "Ghanākṣarī"],
    "options_hi": ["दोहा", "रोला", "सवैया", "घनाक्षरी"],
    "correct_option_index": 0,
    "explanation_en": "(A) Dohā: The Dohā metre is believed to have originated from the 'Dūhā' metre of Apabhraṃśa, which was also known as the 'Metre of the Ābhīras'.",
    "explanation_hi": "(A) दोहा: दोहा छंद की उत्पत्ति अपभ्रंश के 'दूहा' छंद से मानी जाती है, जिसे 'आभीरों का छंद' भी कहा जाता था।"
  },
  {
    "question_en": "How many syllables are there in the 'Pṛthvī' metre and where does the yati occur?",
    "question_hi": "'पृथ्वी' छंद में कितने वर्ण होते हैं और यति कहाँ होती है?",
    "options_en": ["15 syllables; yati at 8, 7", "17 syllables; yati at 8, 9", "19 syllables; yati at 12, 7", "21 syllables; yati at 7, 7, 7"],
    "options_hi": ["15 वर्ण; 8, 7 पर यति", "17 वर्ण; 8, 9 पर यति", "19 वर्ण; 12, 7 पर यति", "21 वर्ण; 7, 7, 7 पर यति"],
    "correct_option_index": 1,
    "explanation_en": "(B) 17 syllables; yati at 8, 9: Pṛthvī is a syllabic (varṇika) samavṛtta metre. It has 17 syllables, with yati after the 8th and 9th syllables.",
    "explanation_hi": "(B) 17 वर्ण; 8, 9 पर यति: पृथ्वी एक वर्णिक सम-वृत्त है। इसमें 17 वर्ण होते हैं और 8 तथा 9 वर्णों पर यति होती है।"
  },
  {
    "question_en": "How many mātrās are there in each line of the 'Tomar' metre?",
    "question_hi": "'तोमर' छंद के प्रत्येक चरण में कितनी मात्राएँ होती हैं?",
    "options_en": ["12 mātrās", "14 mātrās", "16 mātrās", "18 mātrās"],
    "options_hi": ["12 मात्राएँ", "14 मात्राएँ", "16 मात्राएँ", "18 मात्राएँ"],
    "correct_option_index": 0,
    "explanation_en": "(A) 12 mātrās: Tomar is a regular (sam) mātrika metre with 12 mātrās in each line. It is also called the 'Anal' metre.",
    "explanation_hi": "(A) 12 मात्राएँ: तोमर एक सम-मात्रिक छंद है जिसके प्रत्येक चरण में 12 मात्राएँ होती हैं। इसे 'अनल' छंद भी कहते हैं।"
  },
  {
    "question_en": "Which metre is called the 'Digpāl' metre?",
    "question_hi": "'दिगपाल' छंद किसे कहते हैं?",
    "options_en": ["Rolā", "Gītikā", "Harigītikā", "Ulālā"],
    "options_hi": ["रोला", "गीतिका", "हरिगीतिका", "उलाला"],
    "correct_option_index": 0,
    "explanation_en": "(A) Rolā: The Rolā metre (24 mātrās, yati at 11-13) is also called the 'Digpāl' metre.",
    "explanation_hi": "(A) रोला: रोला छंद (24 मात्राएँ, 11-13 पर यति) को 'दिगपाल' छंद भी कहा जाता है।"
  },
  {
    "question_en": "Who is the author of 'Chhandamālā'?",
    "question_hi": "'छंदमाला' के रचयिता कौन हैं?",
    "options_en": ["Matirām", "Bhikhārīdās", "Keśavdās", "Chintāmaṇi"],
    "options_hi": ["मतिराम", "भिखारीदास", "केशवदास", "चिंतामणि"],
    "correct_option_index": 2,
    "explanation_en": "(C) Keśavdās: The Rītikaal era Āchārya-poet Keśavdās composed the treatise 'Chhandamālā' along with 'Kavipriyā' and 'Rasikpriyā'.",
    "explanation_hi": "(C) केशवदास: रीतिकालीन आचार्य कवि केशवदास ने 'कविप्रिया', 'रसिकप्रिया' के साथ 'छंदमाला' नामक लक्षण ग्रंथ की भी रचना की।"
  },
  {
    "question_en": "What is the 'Chūlikā' metre?",
    "question_hi": "'चूलिका' छंद क्या है?",
    "options_en": ["A mātrika metre of 16 mātrās", "A varṇika metre of 12 syllables", "A mixture of Rolā and Ulālā", "A variant of the Paddhari metre (16 mātrās)"],
    "options_hi": ["16 मात्राओं का मात्रिक छंद", "12 वर्णों का वर्णिक छंद", "रोला और उलाला का मिश्रण", "पद्धरि छंद (16 मात्रा) का एक भेद"],
    "correct_option_index": 3,
    "explanation_en": "(D) A variant of the Paddhari metre (16 mātrās): 'Chūlikā' is considered a variant of the 16-mātrā 'Paddhari' or 'Paddhaṭikā' metre.",
    "explanation_hi": "(D) पद्धरि छंद (16 मात्रा) का एक भेद: 'चूलिका' को 16 मात्राओं वाले 'पद्धरि' या 'पद्धटिका' छंद का ही एक भेद माना जाता है।"
  },
  {
    "question_en": "What is the sequence of gaṇas for the 'Ruchirā' metre (13 syllables)?",
    "question_hi": "'रुचिरा' छंद (13 वर्ण) का गण-क्रम क्या है?",
    "options_en": ["Jagaṇa, Bhagaṇa, Sagaṇa, Ragaṇa", "Nagaṇa, Bhagaṇa, Bhagaṇa, Ragaṇa", "Jagaṇa, Bhagaṇa, Jagaṇa, Guru, Guru", "Bhagaṇa, Sagaṇa, Jagaṇa, Guru"],
    "options_hi": ["जगण, भगण, सगण, रगण", "नगण, भगण, भगण, रगण", "जगण, भगण, जगण, गुरु, गुरु", "भगण, सगण, जगण, गुरु"],
    "correct_option_index": 0,
    "explanation_en": "(A) Jagaṇa, Bhagaṇa, Sagaṇa, Ragaṇa: 'Ruchirā' is a syllabic (varṇika) metre of 13 syllables. Its gaṇa sequence is 'Jagaṇa, Bhagaṇa, Sagaṇa, Ragaṇa' (J-Bh-S-R).",
    "explanation_hi": "(A) जगण, भगण, सगण, रगण: 'रुचिरा' 13 वर्णों का एक वर्णिक वृत्त है। इसका गण-क्रम 'जगण, भगण, सगण, रगण' (J-Bh-S-R) होता है।"
  },
  {
    "question_en": "How many mātrās will be counted in the word 'Dvandva'?",
    "question_hi": "'द्वंद्व' शब्द में कितनी मात्राएँ गिनी जाएँगी?",
    "options_en": ["2", "3", "4", "1"],
    "options_hi": ["2", "3", "4", "1"],
    "correct_option_index": 1,
    "explanation_en": "(B) 3: 'Dvaṃ' (half d + v + aṃ) - Due to the 'aṃ' (anusvāra), this is Guru (S). 'dva' (half d + v + a) - This is Laghu (I). Total mātrās = S + I = 2 + 1 = 3.",
    "explanation_hi": "(B) 3: 'द्वं' (आधा द + व + अं) - 'अं' (अनुस्वार) के कारण यह गुरु (S) है। 'द्व' (आधा द + व + अ) - यह लघु (I) है। कुल मात्राएँ = S + I = 2 + 1 = 3."
  },
  {
    "question_en": "'Nij bhāṣā unnati ahai, sab unnati ko mūla.' - Which metre is used in this line?",
    "question_hi": "'निज भाषा उन्नति अहै, सब उन्नति को मूल।' - इस पंक्ति में कौन सा छंद है?",
    "options_en": ["Dohā", "Soraṭhā", "Barvai", "Rolā"],
    "options_hi": ["दोहा", "सोरठा", "बरवै", "रोला"],
    "correct_option_index": 0,
    "explanation_en": "(A) Dohā: Count the mātrās: 'Nij(II) bhāṣā(SS) unnati(III) ahai(IS)' = 1+1+2+2+1+1+1+1+2 = 13. 'Sab(II) unnati(III) ko(S) mūla(SI)' = 1+1+1+1+1+2+2+1 = 11. 13 mātrās in the first part and 11 in the second occur in 'Dohā'.",
    "explanation_hi": "(A) दोहा: मात्राएँ गिनें: 'निज(II) भाषा(SS) उन्नति(III) अहै(IS)' = 1+1+2+2+1+1+1+1+2 = 13. 'सब(II) उन्नति(III) को(S) मूल(SI)' = 1+1+1+1+1+2+2+1 = 11. पहले चरण में 13 और दूसरे में 11 मात्राएँ 'दोहा' में होती हैं।"
  }
];

export default chhandQuestions;
