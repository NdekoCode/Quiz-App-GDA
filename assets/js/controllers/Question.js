/**
 * @description Va etre representer la question elle meme avec toutes ses caractéristiques
 * @author NdekoCode
 * @class Question
 */
export default class Question {
  constructor(question) {
    this.id = question.id;
    this.title = question.title;
    this.answers = question.answers;
    this.trueAnswer = question.trueAnswer;
  }
  isCorrectAnswer(answer) {
    return this.answers === answer;
  }
}
