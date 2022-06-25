import Display from "/assets/js/views/Display.js";
import User from "/assets/js/models/User.js";

export default class Validator {
  /**
   * Creates an instance of Validator.
   * @author NdekoCode
   * @param {HTMLElement} form The formular
   * @memberof Validator
   */
  constructor() {
    this.user = new User();
    this.display = new Display();
    this.validLogin = false;
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
  fieldValidate(field, user) {
    field.value = field.value.trim();
    field.parentElement.classList.add("invalid");
    if (field.id === "name") {
      if (field.value.length <= 0) {
        this.errors.name = "Veuillez renseignez un nom";
      } else if (field.value.length < 2) {
        this.errors.name =
          "Veuillez renseignez un nom d'au moins deux caracteres";
      } else {
        user.name = field.value;
        this.errors.name = "";
        field.parentElement.classList.remove("invalid");
      }

      this.display.showElement("name-errors", this.errors.name);
    } else if (field.id === "email") {
      if (field.value.length < 1) {
        this.errors.email = "Veuillez renseignez votre adresse email";
      } else if (!this.emailValidate(field.value)) {
        this.errors.email =
          "Veuillez renseignez une adresse email valide xxx@xxx.xxx";
      } else {
        user.email = field.value;
        this.errors.email = "";
        field.parentElement.classList.remove("invalid");
      }

      this.display.showElement("email-errors", this.errors.email);
      if (this.errors.email.length < 1 && this.errors.name.length < 1) {
        this.validLogin = true;
      }
    }
  }
}
