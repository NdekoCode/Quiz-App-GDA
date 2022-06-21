import quizQuestions from "/assets/js/models/quizQuestion.js";
import User from "/assets/js/models/User.js";
import Quiz from "/assets/js/controllers/Quiz.js";
import Validator from "/assets/js/controllers/Validator.js";
import Question from "/assets/js/controllers/Question.js";
import App from "/assets/js/App.js";
import Display from "/assets/js/views/Display.js";
let questions = [];
for (let question of quizQuestions) {
  questions.push(new Question(question));
}
const quiz = new Quiz(questions);

const user = new User();
const app = new App(quiz, user);
app.quizApp();
console.log(quiz);
