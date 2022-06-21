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
    this.timer;
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
        this.quizAppInit();
      }
    });
  }
  quizAppInit() {
    this.formQuestion();
    this.formAnswers();
    this.clearProgression();
    this.progressQuiz();
    this.form = document.querySelector(".form-question");
    document.getElementById("prev").addEventListener("click", () => {
      this.quiz.end = true;
      this.quizApp();
    });

    this.form.addEventListener("submit", (evt) => evt.preventDefault());
    // On recup
    this.checkboxes = this.form.querySelectorAll('input[type="radio"]');
    // On recupere le dynamisme des checkboxs
    this.checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("input", (evt) => {
        document
          .getElementById("next")
          .classList.replace("btn-green-min", "btn-green");
        // if (evt.target.checked) {
        // Code pour la reponse ET que l'on va recuperer
        // }
      });
    });
  }
  progressQuiz() {
    let timeProgress = 60;
    let currentQuestionNumber = this.quiz.currentQuestionIndex + 1;
    this.display.showElement(
      "progress",
      `${currentQuestionNumber}/${this.quiz.questions.length}`
    );

    document.getElementById("timer").innerHTML = timeProgress;
    this.timer = setInterval(() => {
      if (timeProgress > 0 && !this.quiz.hasEnded()) {
        console.log(timeProgress);
        timeProgress--;
        document.getElementById("timer").innerHTML = timeProgress;
      } else {
        clearInterval(this.timer);
        this.quiz.currentQuestionIndex++;
      }
    }, 1000);
  }
  clearProgression() {
    return clearInterval(this.timer);
  }
  /**
   * @description Demarre le quiz ainsi que toute ses intéractions
   * @author NdekoCode
   * @memberof App
   */
  quizApp() {
    // Game Logic

    //
    if (!this.validator.validLogin) {
      // In the login:
      this.login(this.user, this.quiz);
    } else if (this.quiz.hasEnded()) {
      // Fin du jeux de question
      this.display.endQuiz(this.user, this.quiz);
    } else {
      // Logic Game with our function
      this.quizAppInit();
      // -> Question
      // -> Choise
      // Progresse "Question 1/4"
    }
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
    /**
     * Prend en compte la reponse de l'utilisateur, la valeur qui sera recuperer par l'utilisateur il va la comparer avec la vrais valeur de chaque objet qui est la reponse exacte
     */
    const guessHandler = () => {
      let userAnswer = "";
      // Cette fonction va recuperer où est-ce que l'utilisateur a cliquer et la
      document.getElementById("next").onclick = () => {
        this.clearProgression();
        this.progressQuiz();
        this.checkboxes.forEach((check) => {
          if (
            Array.from(this.checkboxes).every((checkbox) => !checkbox.checked)
          ) {
          } else if (check.checked) {
            const currentElementChecked = document.getElementById(
              check.id
            ).nextElementSibling;
            userAnswer += currentElementChecked.innerText;
          }
        });

        this.quiz.guess(userAnswer);
        this.quizApp();
      };
    };

    for (let i = 0; i < answers.length; i++) {
      this.display.showElement(`choice${i}`, answers[i]);
      guessHandler();
    }
  }
}
