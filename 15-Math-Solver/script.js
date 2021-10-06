// function parse(equation) {
//   const step = getNextStep()
//   const result = solve(step)
//   replaceNextStep(equation, step, result)
// }

const inputElement = document.getElementById('equation')
const outputElement = document.getElementById('results')
const form = document.getElementById('equation-form')

form.addEventListener('submit', e => {
  e.preventDefault()

  const result = parse(inputElement.value)
  outputElement.textContent = result
})

function parse(equation) {
  return equation
}