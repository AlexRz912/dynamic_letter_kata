import RandomChar from "../models/random_char_model.js"
import DomElement from "../models/dom_element_model.js"

class CharController {
  constructor() {
    this.randomChar = null;
    this.domElem = new DomElement
  }

  randomLetterLoop = async () => {
    this.randomChar = new RandomChar();
    const letterSuccessfullyOnScreen = await this.#intervalForRandomChar();
    if (letterSuccessfullyOnScreen) {
      return this.randomLetterLoop();
    }
  }

  #intervalForRandomChar = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.domElem.insertToDomElement({elem: "body", content: this.randomChar.char})
        resolve(true);
      }, 100);
    });
  }
}

export default CharController
