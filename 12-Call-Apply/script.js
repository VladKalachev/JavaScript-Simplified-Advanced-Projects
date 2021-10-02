// window.name = "Global Name"

// const person = {
//   name: "Kyle",
// }

// function printName() {
//   console.log(this.name);
// }

// // printName.bind(person)()
// // printName.apply(person)
// printName.call(person, 2)

// function sum(a, b) {
//   return a + b
// }

function sum(...numbers) {
  return numbers.reduce((count, n) => count + n)
}

// console.log(sum.bind(null, 2)(3));

console.log(sum(1, 2, 3))

const numbersToAdd = [1, 2, 3, 4, 5]
console.log(sum.call(null, ...numbersToAdd));
console.log(sum.apply(null, numbersToAdd));