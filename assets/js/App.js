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
    this.defaultTimeProgress = 60;
    this.timeProgress = 60;
    this.form;
    this.checkboxes;
    this.userAnswer = "";
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
    // this.clearProgression();
    this.progressQuiz();
    this.form = document.querySelector(".form-question");
    document.getElementById("prev").addEventListener("click", () => {
      this.quiz.end = true;
      this.quizApp();
    });

    this.form.addEventListener("submit", (evt) => evt.preventDefault());
    // On recup
    this.checkboxes = this.form.querySelectorAll('input[type="radio"]');
    const next = document.getElementById("next");
    // On recupere le dynamisme des checkboxs
    this.checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("input", (evt) => {
        next.disabled = false;
        next.classList.replace("btn-green-min", "btn-green");
      });
    });
  }
  progressQuiz() {
    let currentQuestionNumber = this.quiz.currentQuestionIndex + 1;
    this.display.showElement(
      "progress",
      `${currentQuestionNumber}/${this.quiz.questions.length}`
    );
    document
      .querySelector(".bar")
      .style.setProperty("--timer", this.defaultTimeProgress + "s");
    document.getElementById("timer").innerHTML = this.timeProgress;
    this.timer = setInterval(() => {
      this.timeProgress--;
      console.log(this.timeProgress);
      if (this.timeProgress <= 0 || this.quiz.hasEnded()) {
        // this.clearProgression();
        if (this.timeProgress <= 0) {
          this.quiz.guess(this.userAnswer);
        }
        this.quizApp();
      }
      document.getElementById("timer").innerHTML = this.timeProgress;
    }, 1000);

    if (this.quiz.questions.length - 1 === this.quiz.currentQuestionIndex) {
      document.getElementById("next").innerHTML = "Terminer";
    }
  }
  clearProgression() {
    this.timeProgress = this.defaultTimeProgress;
    return clearInterval(this.timer);
  }
  /**
   * @description Demarre le quiz ainsi que toute ses intéractions
   * @author NdekoCode
   * @memberof App
   */
  quizApp() {
    // Game Logic
    // console.log(this.quiz.currentQuestionIndex);

    this.clearProgression();
    //
    if (!this.validator.validLogin) {
      // In the login:
      this.login(this.user, this.quiz);
    } else if (this.quiz.hasEnded()) {
      // Fin du jeux de question
      this.display.endQuiz(this.user, this.quiz);
    } else {
      // Logic Game with our function
      // -> Question
      // -> Choise
      // Progresse "Question 1/4"
      this.quizAppInit();
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
      // MORNING
      // Cette fonction va recuperer où est-ce que l'utilisateur a cliquer et la
      const next = document.getElementById("next");

      this.checkboxes = document.querySelectorAll('input[type="radio"]');
      this.checkboxes.forEach((check) => {
        check.addEventListener("input", (evt) => {
          const currentElementChecked = document.getElementById(
            evt.target.id
          ).nextElementSibling;
          this.userAnswer = currentElementChecked.textContent;
          // console.log(this.userAnswer);
        });
      });

      next.onclick = () => {
        // this.clearProgression();

        this.checkboxes.forEach((check) => {
          if (check.checked) {
            const currentElementChecked = document.getElementById(
              check.id
            ).nextElementSibling;
            this.userAnswer = currentElementChecked.innerText;
          }
        });

        this.quiz.guess(this.userAnswer);
        this.quizApp();
      };
    };

    for (let i = 0; i < answers.length; i++) {
      this.display.showElement(`choice${i}`, answers[i]);
      guessHandler();
    }
  }
}
