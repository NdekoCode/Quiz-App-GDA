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
  constructor(formQuiz, quiz) {
    this.display = new Display();
    this.quiz = quiz;
    this.form = formQuiz;
    this.checkboxes = this.form.querySelectorAll('input[type="radio"]');
  }

  /**
   * @description Demarre le quiz ainsi que toute ses intéractions
   * @author NdekoCode
   * @memberof App
   */
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
