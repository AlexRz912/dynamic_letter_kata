import MATH from "../utilities/math.js"

class RandomCharModel {

  static instance = null

  constructor() {
    this.char = this.generateRandomChar()
    RandomCharModel.instance = this
  }
  generateRandomChar = () => { //A appeler dans letter controller qui utilisera une fonction asynchrone avec un timeout
    return String.fromCharCode(this.#generateRandomCharCode({maxNum: 97}))
  }
  #generateRandomCharCode = ({maxNum}) =>  MATH.randomInt(maxNum) + 32

  //Créer une fonction de classe qui vérifie si un caractère existe déjà, si oui, destroy le caractère

  static exists() {
    return RandomCharModel.instance !== null;
  }
}

export default RandomCharModel
