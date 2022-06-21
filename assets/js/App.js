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
        this.formQuestion();
        this.formAnswers();
        this.form = document.querySelector(".form-question");
        this.next = document.getElementById("next");
        this.prev = document.getElementById("prev");

        this.form.addEventListener("submit", (evt) => evt.preventDefault());
        // On recup
        this.checkboxes = this.form.querySelectorAll('input[type="radio"]');
        // On recupere le dynamisme des checkboxs
        this.checkboxes.forEach((checkbox) => {
          checkbox.addEventListener("input", (evt) => {
            this.next.classList.replace("btn-green-min", "btn-green");
            if (evt.target.checked) {
              // Code pour la reponse ET que l'on va recuperer
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
        // In the login:
        // Logic Game with our function
        // -> Question
        // -> Choise
        // Progresse "Question 1/4"
        this.login(this.user, this.quiz);
      }
    }

    console.log(this.form);
  }

  formQuestion() {
    this.display.quizPage();
    this.display.showElement("question", this.quiz.getCurrentQuestion().title);
  }
  /**
   * @description Les differentes reponses pour notre question courante
   * @author NdekoCode
   * @memberof App
   */
  formAnswers() {
    // On recupère les 4 elements du tableau des reponses
    let answers = this.quiz.getCurrentQuestion().answers;
    console.log(answers);
    /**
     * Prend en compte la reponse de l'utilisateur, la valeur qui sera recuperer par l'utilisateur il va la comparer avec la vrais valeur de chaque objet qui est la reponse exacte
     * @param {String} id l'identifiant qui sera déterminer par le clic
     * @param {*} guess
     */
    const guessHandler = (id, guess) => {
      let userAnswer = "";
      // Cette fonction va recuperer où est-ce que l'utilisateur a cliquer et la
      this.next.onclick = function () {
        this.checkboxes.forEach((check) => {
          if (this.checkboxes.every((checkbox) => !checkbox.checked)) {
            this.user.answers.push("");
          } else if (check.checked) {
            const currentElementChecked = document.getElementById(
              check.id
            ).nextElementSibling;
            userAnswer += currentElementChecked.innerText;
            console.log(currentElementChecked);
            user.answers.push(userAnswer);
          }
        });
        this.quiz.guess(guess);
        this.quizApp();
      };
    };

    for (let i = 0; i < answers.length; i++) {
      this.display.showElement(`choice${i}`, answers[i]);
      console.log(answers[i]);
    }
  }
}
