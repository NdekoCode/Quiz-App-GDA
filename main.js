import Quiz from "/assets/js/controllers/Quiz.js";
import Question from "/assets/js/models/Question.js";
import quizQuestions from "/assets/js/models/script.js";
const forms = document.querySelectorAll(".quiz");
let questions = [];
for (let form of forms) {
  const quiz = new Quiz(form);
  quiz.quizApp();
}
for (let question of quizQuestions) {
  questions.push(new Question(question));
}
console.log(questions);
