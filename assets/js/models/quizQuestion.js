let quizQuestions = [
  {
    id: 1,
    title: "Comment déclarer un tableau « tab » de 10 éléments ?",
    answers: [
      "let tab = new Array(10)",
      "let tab[10]",
      "let tab = array(10)",
      "let tab(10)",
    ],
    trueAnswer: "let tab = new Array(10)",
  },
  {
    id: 2,
    title:
      "Quel est le code pour obtenir un nombre aléatoire compris entre 5 et 9 inclus ?",
    answers: [
      "Math.floor((Math.random() * 5) + 4);",
      "Math.floor((Math.random() * 4) + 4);",
      "Math.floor((Math.random() * 4) + 5);",
      "Math.floor((Math.random() * 5) + 5);",
    ],
    trueAnswer: "Math.floor((Math.random() * 5) + 5);",
  },
  {
    id: 3,
    title:
      "Pour vérifier si trois variables sont égaux, nous utiliserons_____ ?",
    answers: [
      "X = Y = Z",
      "(X == B) && (Y == Z)",
      "(X = B) && (Y = Z)",
      "(X == B) & (Y == Z)",
    ],
    trueAnswer: "(X == B) && (Y == Z)",
  },
  {
    id: 4,
    title: "Combien de paramètres peuvent être passés à une fonction ?",
    answers: [
      "Aucune",
      "Autant que vous voulez",
      "Un pour chaque argument",
      "Un",
    ],
    trueAnswer: "Un pour chaque argument",
  },
  {
    id: 5,
    title: "Lequel de ces paramètres n’est pas valide?",
    answers: ["texte", "une variable", "un opérateur", "un nombre"],
    trueAnswer: "un opérateur",
  },
  // {
  //   id: 6,
  //   title: "Comment pouvez-vous détecter le nom du navigateur du client?",
  //   answers: [
  //     "navigator.appName",
  //     "browser.name",
  //     "client.navName",
  //     "window.appName",
  //   ],
  //   trueAnswer: "navigator.appName",
  // },
  // {
  //   id: 7,
  //   title: ' Si str = "VWXYZ", que retourne str.charAt(3)?',
  //   answers: ["X", "Y", "Z", "false"],
  //   trueAnswer: "Y",
  // },
  // {
  //   id: 8,
  //   title: 'L’instruction suivante "A ? B : C" est équivalent à ______?',
  //   answers: [
  //     "if (A) {B; C}",
  //     "if (A != B) C",
  //     "if (A == B) C",
  //     "if (A) {B} else {C}",
  //   ],
  //   trueAnswer: "if (A) {B} else {C}",
  // },
  // {
  //   id: 9,
  //   title: "Lequel n’est pas un opérateur de comparaison?",
  //   answers: ["<", ">", "=", "!="],
  //   trueAnswer: "=",
  // },
  // {
  //   id: 10,
  //   title: "Quel événement est spécifique au clavier?",
  //   answers: ["onkeypress", "onkeydown", "onclick", "onfocus"],
  //   trueAnswer: "onkeypress",
  // },
  // {
  //   id: 11,
  //   title: "Quelle est la sortie de cette ligne : String.fromCharCode(65)",
  //   answers: ["1", "A", "erreur", "false"],
  //   trueAnswer: "A",
  // },
  // {
  //   id: 12,
  //   title:
  //     "Quel événement utilisez-vous pour exécuter quelque chose une fois le chargement du page est terminé?",
  //   answers: ["onfinished", "onload", "onunload", "oncomplete"],
  //   trueAnswer: "onload",
  // },

  // {
  //   id: 13,
  //   title:
  //     "Lequel des éléments suivants n’est pas une propriété de l’objet window?",
  //   answers: ["document", "menu", "navigator", "history"],
  //   trueAnswer: "menu",
  // },
  // {
  //   id: 14,
  //   title: "Le DOM ____?",
  //   answers: [
  //     "est dédie pour JavaScript",
  //     "est un moteur de Template",
  //     "décrit la structure du document HTML ou XML",
  //     "ne peut pas être manipulé par JavaScript",
  //   ],
  //   trueAnswer: "décrit la structure du document HTML ou XML",
  // },
  // {
  //   id: 15,
  //   title: "Laquelle des fonctions suivantes trie les éléments d’un tableau?",
  //   answers: ["toSource()", "sort()", "toString()", "unshift()"],
  //   trueAnswer: "sort()",
  // },
];

export default quizQuestions;
