
const MAX_RGB_VALUE = 255

export default class Rgb {
  constructor(r, g, b) {
    this.r = r
    this.g = g
    this.b = b
  }

  static generate() {
    return new Rgb(
      randomNumber(MAX_RGB_VALUE),
      randomNumber(MAX_RGB_VALUE),
      randomNumber(MAX_RGB_VALUE)
    )
  }

  generateSimilar() {

  }
}

function randomNumber(max) {
  return Math.floor(Math.random() * (max + 1))
}