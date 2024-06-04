const DOM_ELEMENTS_INTERFACE = {
  buildParagraph: (letter) => `<p id="letter">${letter}</p>`,
  getDomElement: (elem) => document.querySelector(elem)
}

export default DOM_ELEMENTS_INTERFACE
