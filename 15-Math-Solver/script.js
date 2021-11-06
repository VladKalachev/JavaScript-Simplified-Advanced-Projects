// function parse(equation) {
//   const step = getNextStep()
//   const result = solve(step)
//   replaceNextStep(equation, step, result)
// }
import parse from './parse'

const inputElement = document.getElementById('equation')
const outputElement = document.getElementById('results')
const form = document.getElementById('equation-form')

form.addEventListener('submit', e => {
  e.preventDefault()
  const result = parse(inputElement.value)
  outputElement.textContent = result
})

// const equation = "2 + 3 * 434343 / 731231"
// console.log(equation.match(MULTIPLY_DIVIDE_REGEX))