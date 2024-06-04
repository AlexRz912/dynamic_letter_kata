import MATH from "../utilities/math.js"

class RandomCharModel {

  static instance = null

  constructor() {
    this.char = this.generateRandomChar()
    RandomCharModel.instance = this
  }
  generateRandomChar = () => {
    return String.fromCharCode(this.#generateRandomCharCode({maxNum: 97}))
  }
  #generateRandomCharCode = ({maxNum}) =>  MATH.randomInt(maxNum) + 32

  static exists() {
    return RandomCharModel.instance !== null;
  }
}

export default RandomCharModel
