export default class Quiz {
  /**
   * Creates an instance of Quiz.
   * @author NdekoCode
   * @param {Question[]} questions
   * @memberof Quiz
   */
  constructor(questions) {
    this.end = false;
    /**Le scrore de l'utilisateur */
    this.score = 0;
    /** L'index de la questions actuelle(de la question courante) */
    this.currentQuestionIndex = 0;

    this.forms = document.querySelectorAll(".form-question");
    /** Va stoquer toutes nos questions */
    this.questions = questions;
  }

  getCurrentForm() {
    return this.forms[this.currentQuestionIndex];
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
    // On verifie si la la reponse passé en parametre est la reponse de la question actuelle ou la question courrante car this.getCurrentQuestion() nous retourne une question qu'on qui sur cette question verifie si sa reponse correspond à notre reponse "answer"
    if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
      // Si la reponse est vrais alors on augmente le score
      this.score++;
    }
    // Et on passe à la question suivante
    this.currentQuestionIndex++;
  }

  /**
   * @description Permet de dire si les question sont terminer
   * @author NdekoCode
   * @return {Boolean}
   * @memberof Quiz
   */
  hasEnded() {
    // Quand tout est finis, quand on a déjà parcouris toute les questions càd quand l'index de la question courrante est superieur ou egale au nombre de question disponible
    return this.currentQuestionIndex >= this.questions.length || this.end;
  }
}
