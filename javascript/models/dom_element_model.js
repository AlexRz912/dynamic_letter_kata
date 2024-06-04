import DOM_ELEMENT_UTILS from "../utilities/dom_elements.js"

class DomElementModel {
  #elementToInsertLetterIn = null
  #content = null

  insertToDomElement({elem, content}) {
    this.#elementToInsertLetterIn = DOM_ELEMENT_UTILS.getDomElement(elem)
    this.#insertParagraph(content)
  }

  #insertParagraph = (content) => {
    if (this.#content) {
      this.#elementToInsertLetterIn.innerText = content
      return
    }
    this.#content = content
    this.#elementToInsertLetterIn.insertAdjacentHTML("afterbegin", DOM_ELEMENT_UTILS.buildParagraph(this.#content))
  }
}

export default DomElementModel
