import Calculator from './Calculator.js'

// Actions
// 1. Click a number
// 2. Click clear button
// 3. Click delete button
// 4. Click an operation
// 5. Click the period button
// 6. Click equals

const  primaryOperandDisplay = document.querySelector("[data-primary-operand]")
const  secondaryOperandDisplay = document.querySelector("[data-secondary-operand]")
const  operandDisplay = document.querySelector("[data-operation]")

const calculator = new Calculator(
  primaryOperandDisplay, 
  secondaryOperandDisplay, 
  operandDisplay
);

document.addEventListener("click", e => {
  if(e.target.matches("[data-all-clear]")) {
    calculator.clear();
  }

  if(e.target.matches("[data-number]")) {
    calculator.addDigit(e.target.textContent);
  }

  if(e.target.matches("[data-delete]")) {
    calculator.removeDigit();
  }

  if(e.target.matches("[data-operation]")) {
    calculator.chooseOperation(e.target.textContent);
  }

  if(e.target.matches("[data-equals]")) {
    calculator.evaluate();
  }
})