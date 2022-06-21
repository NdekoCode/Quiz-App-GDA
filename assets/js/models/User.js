/**
 * @description L'Utilisateur qui va repondre au Question
 * @author NdekoCode
 * @export
 * @class User
 */
export default class User {
  #name;
  #email;
  /**
   * Créer une instance de User.
   * @author NdekoCode
   * @param {String} name Le nom de l'utilisateur
   * @param {String} email L'adresse email de l'utilisateur
   * @memberof User
   */
  constructor(name, email) {
    this.#name = name;
    this.#email = email;
  }

  /**
   * @description Renvois le nom de l'utilisateur
   * @author NdekoCode
   * @returns {String} le nom d'utilisateur
   * @readonly
   * @memberof User
   */
  get name() {
    return this.#name;
  }

  /**
   * @description Renvois l'email de l'utilisateur
   * @author NdekoCode
   * @returns {String} l'email de l'utilisateur
   * @readonly
   * @memberof User
   */
  get email() {
    return this.#email;
  }

  /**
   * @description Modifie le nom de l'utilisateur
   * @author NdekoCode
   * @param {String} name Le nom de l'utilisateur
   * @memberof User
   */
  set name(name) {
    this.#name = name;
  }

  /**
   * @description Modifie l'email de l'utilisateur
   * @author NdekoCode
   * @param {String} email L'email de l'utilisateur
   * @memberof User
   */
  set email(email) {
    this.#email = email;
  }
}
