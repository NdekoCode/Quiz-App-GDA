export default class Question {
  constructor(question) {
    this.id = question.id;
    this.title = question.title;
    this.answers = question.answers;
    this.trueAnswer = question.trueAnswer;
  }
}
