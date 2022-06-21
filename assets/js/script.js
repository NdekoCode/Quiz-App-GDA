import quizQuestions from "/assets/js/models/quizQuestion.js";
import User from "/assets/js/models/User.js";
import Quiz from "/assets/js/controllers/Quiz.js";
import Validator from "/assets/js/controllers/Validator.js";
import Question from "/assets/js/controllers/Question.js";
import App from "/assets/js/App.js";
import Display from "/assets/js/views/Display.js";
// const form = document.querySelector(".form-question");
let questions = [];
// const app = new App(form);
for (let question of quizQuestions) {
  questions.push(new Question(question));
}
const user = new User();
const validator = new Validator();
const quiz = new Quiz(questions);
const display = new Display();
// app.quizApp();
console.log(quiz);

// Game Logic
const quizApp = () => {
  if (quiz.hasEnded()) {
    // Fin du jeux de question
    display.endQuiz();
  } else {
    if (!validator.validLogin) {
      validator.login(user);
    } else {
      // Logic Game with our function
      // -> Question
      // -> Choise
      // Progresse "Question 1/4"
    }
  }
};
quizApp();
