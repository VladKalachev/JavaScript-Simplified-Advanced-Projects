export default class Calculator {
  constructor(primaryOperandDisplay, secondaryOperandDisplay, operationDisplay) {
    this.primaryOperandDisplay = primaryOperandDisplay;
    this.secondaryOperandDisplay = secondaryOperandDisplay;
    this.operationDisplay = operationDisplay;
    this.clear();
  }

  clear() {
    this.primaryOperandDisplay.textContent = 0;
    this.secondaryOperandDisplay.textContent = "";
    this.operationDisplay.textContent = "";
  }

  addDigit() {

  }

  removeDigit() {

  }

  chooseOperation() {

  }
}