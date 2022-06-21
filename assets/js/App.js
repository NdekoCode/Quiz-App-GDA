import Validator from "/assets/js/controllers/Validator.js";
import Display from "/assets/js/views/Display.js";

/**
 * @description Représente l'application de Quiz elle meme
 * @author NdekoCode
 * @class App
 */
export default class App {
  /**
   * Creates an instance of App.
   * @author NdekoCode
   * @param {HTMLFormElement} form
   * @memberof App
   */
  constructor(quiz, user) {
    this.display = new Display();
    this.user = user;
    this.quiz = quiz;
    this.validator = new Validator();
  }

  login() {
    this.display.loginPage();
    const form = document.getElementById("form-login");
    form.addEventListener("submit", (evt) => evt.preventDefault());
    const btn = form.querySelector(".submit");

    btn.addEventListener("click", () => {
      const inputs = form.querySelectorAll(".input");
      inputs.forEach((input) => {
        input.parentElement.classList.remove("invalid");
        this.validator.fieldValidate(input, this.user);
      });

      if (this.validator.validLogin) {
        this.formQuestion(this.quiz);
        this.form = document.querySelector(".form-question");
        this.form.addEventListener("submit", (evt) => evt.preventDefault());
        // On recup
        this.checkboxes = this.form.querySelectorAll('input[type="radio"]');
        // On recupere le dynamisme des checkboxs
        this.checkboxes.forEach((checkbox) => {
          checkbox.parentElement.addEventListener("click", () => {
            this.removeValidClass();

            document
              .querySelector(".next")
              .classList.replace("btn-green-min", ".btn-green");
            checkbox.parentElement.classList.add("valid");
            // checkbox.checked
          });
          checkbox.addEventListener("input", (evt) => {
            document
              .querySelector(".next")
              .classList.replace("btn-green-min", ".btn-green");
            if (evt.target.checked) {
              this.removeValidClass();
              evt.target.parentElement.classList.add("valid");
            }
          });
        });
      }
    });
  }
  /**
   * @description Demarre le quiz ainsi que toute ses intéractions
   * @author NdekoCode
   * @memberof App
   */
  quizApp() {
    // Game Logic
    if (this.quiz.hasEnded()) {
      // Fin du jeux de question
      display.endQuiz();
    } else {
      //
      if (!this.validator.validLogin) {
        this.login(this.user, this.quiz);

        // Logic Game with our function
        // -> Question
        // -> Choise
        // Progresse "Question 1/4"
      }
    }

    console.log(this.form);
  }
  removeValidClass() {
    this.checkboxes.forEach((checkbox) =>
      checkbox.parentElement.classList.remove("valid")
    );
  }

  formQuestion(quiz) {
    this.display.quizPage();
    this.quiz = quiz;
    this.display.showElement("question", this.quiz.getCurrentQuestion().title);
  }
  formChoises() {
    let choices = this.quiz.getCurrentQuestion().answers;
    const guessHandler = (id, guess) => {
      document.getElementById(id);
      this.quiz.guess(guess);
    };
  }
}
