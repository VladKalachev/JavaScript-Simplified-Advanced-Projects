// window.name = "Global Name"

// const person = {
//   name: "Kyle",
// }

// function printName() {
//   console.log(this.name);
// }

// const newPrintName = printName.bind(person)
// newPrintName()

// function sum(a, b) {
//   return a + b
// }

// function sumTwo(b) {
//   return 2 + b
// }

// const sumTwo = sum.bind(null, 2)

// console.log(sumTwo(5))

// function sumTwoAndThree() {
//   return 2 + 3
// }

// const sumTwoAndThree = sum.bind(null, 2, 3)

// console.log(sumTwoAndThree())

function product(a, b) {
  return a + b
}

const numbers = [1, 2, 3, 4, 5]

// const newNumbers = numbers.map(number => {
//   return product(2, number)
// })

const newNumbers = numbers.map(product.bind(null, 2))

console.log(newNumbers)