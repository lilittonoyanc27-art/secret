export interface VocabWord {
  spanish: string;
  armenian: string;
  emoji: string;
}

export interface ErnestoChallenge {
  sentence: string;
  translation: string;
  correctAnswer: string;
  options: string[];
  verb: 'hablar' | 'decir' | 'oír' | 'escuchar';
}

export const ERNESTO_GRAMMAR = {
  hablar: "Խոսել (To speak) - Գործընթացը",
  decir: "Ասել (To say/tell) - Բովանդակությունը",
  oir: "Լսել (To hear) - Ֆիզիկական ունակություն",
  escuchar: "Լսել (To listen) - Ուշադրություն դարձնել"
};

export const ERNESTO_CHALLENGES: ErnestoChallenge[] = [
  {
    sentence: "Yo ___ español con mis amigos.",
    translation: "Ես իսպաներեն եմ խոսում ընկերներիս հետ:",
    correctAnswer: "hablo",
    options: ["hablo", "digo", "escucho"],
    verb: 'hablar'
  },
  {
    sentence: "Él ___ la verdad siempre.",
    translation: "Նա միշտ ճշմարտությունն է ասում:",
    correctAnswer: "dice",
    options: ["dice", "habla", "oye"],
    verb: 'decir'
  },
  {
    sentence: "No ___ nada, hay mucho ruido.",
    translation: "Ոչինչ չեմ լսում, շատ աղմուկ կա:",
    correctAnswer: "oigo",
    options: ["oigo", "escucho", "hablo"],
    verb: 'oír'
  },
  {
    sentence: "Me gusta ___ música clásica.",
    translation: "Ինձ դուր է գալիս դասական երաժշտություն լսել (ուշադիր):",
    correctAnswer: "escuchar",
    options: ["escuchar", "oír", "decir"],
    verb: 'escuchar'
  },
  {
    sentence: "Nosotros ___ con el profesor.",
    translation: "Մենք խոսում ենք պրոֆեսորի հետ:",
    correctAnswer: "hablamos",
    options: ["hablamos", "decimos", "oímos"],
    verb: 'hablar'
  },
  {
    sentence: "¿Qué ___ tú sobre el secreto?",
    translation: "Ի՞նչ ես դու ասում գաղտնիքի մասին:",
    correctAnswer: "dices",
    options: ["dices", "hablas", "escuchas"],
    verb: 'decir'
  },
  {
    sentence: "¿___ tú el pájaro?",
    translation: "Լսո՞ւմ ես թռչունին (ձայնը):",
    correctAnswer: "Oyes",
    options: ["Oyes", "Escuchas", "Dices"],
    verb: 'oír'
  },
  {
    sentence: "Ustedes ___ la radio por la noche.",
    translation: "Դուք ռադիո եք լսում գիշերը:",
    correctAnswer: "escuchan",
    options: ["escuchan", "oyen", "dicen"],
    verb: 'escuchar'
  },
  {
    sentence: "Yo ___ que no puedo ir.",
    translation: "Ես ասում եմ, որ չեմ կարող գնալ:",
    correctAnswer: "digo",
    options: ["digo", "hablo", "oigo"],
    verb: 'decir'
  },
  {
    sentence: "Ellos ___ tres idiomas.",
    translation: "Նրանք երեք լեզվով են խոսում:",
    correctAnswer: "hablan",
    options: ["hablan", "dicen", "escuchan"],
    verb: 'hablar'
  }
];
