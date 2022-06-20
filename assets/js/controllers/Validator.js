export default class Validator {
  /**
   * Creates an instance of Validator.
   * @author NdekoCode
   * @param {HTMLElement} form The formular
   * @memberof Validator
   */
  constructor(form) {
    this.errors = {
      name: "",
      email: "",
      question: false,
    };
  }
  emailValidate(email) {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  /**
   * @description Validate un champ d'un formulaire
   * @author NdekoCode
   * @param {HTMLInputElement} field
   * @memberof Validator
   */
  fieldValidate(field) {
    if (field.name === "name" || field.name === "nom") {
      if (field.value.length < 1) {
        this.errors.name = "Veuillez renseignez un nom";
      } else if (field.value.length < 2) {
        this.errors.name =
          "Veuillez renseignez un nom d'au moins deux caracteres";
      }
    } else if (field.type === "email") {
      if (field.value.length < 2) {
        this.errors.email = "Veuillez renseignez votre adresse email";
      }
      if (!this.emailValidate) {
        this.errors.email =
          "Veuillez renseignez une adresse email valide xxx@xxx.xxx";
      }
    }
  }
}
