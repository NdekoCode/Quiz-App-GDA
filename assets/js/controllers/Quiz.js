import Question from "/assets/js/models/Question.js";

export default class Quiz {
  /**
   * Creates an instance of Quiz.
   * @author NdekoCode
   * @param {HTMLFormElement} form
   * @param {Question} questions
   * @memberof Quiz
   */
  constructor(form, questions) {
    /**Le scrore de l'utilisateur */
    this.score = 0;
    /** L'index de la questions actuelle(de la question courante) */
    this.currentQuestionIndex = 0;

    this.form = form;
    /** Va stoquer toutes nos questions */
    this.questions = questions;
    this.checkboxes = this.form.querySelectorAll('input[type="radio"]');
  }

  /**
   * @description Récupère la question actuelle ou la question courrante
   * @author NdekoCode
   * @return {Question} La question actuelle
   * @memberof Quiz
   */
  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  /**
   * @description Verifie la reponse de l'utilisateur
   * @author NdekoCode
   * @param {String} answer
   * @memberof Quiz
   */
  guess(answer) {
    if (answer === this.getCurrentQuestion().trueAnswer) {
      return true;
    }
  }
  quizApp() {
    this.checkboxes.forEach((checkbox) => {
      checkbox.parentElement.addEventListener("click", () => {
        this.removeValidClass();
        checkbox.parentElement.classList.add("valid");
        // checkbox.checked
      });
      checkbox.addEventListener("input", (evt) => {
        if (evt.target.checked) {
          this.removeValidClass();
          evt.target.parentElement.classList.add("valid");
        }
      });
    });
  }
  removeValidClass() {
    this.checkboxes.forEach((checkbox) =>
      checkbox.parentElement.classList.remove("valid")
    );
  }
}
