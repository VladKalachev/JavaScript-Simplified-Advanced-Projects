const array = ["A", "B", "C", "D", ["E", "F"]]
const person = {
  name: "Kyle",
  age: 25,
  fovoriteFood: "Rice",
  address: {
    street: "123 Main St",
    ciry: "Somewhere",
    zipcode: '55555'
  }
}

// function sum (numbers) {
//   return numbers.reduce((sum, numbers) => sum + numbers, 0)
// }

// console.log(sum([1, 3, 3, 4, 5, 60]));

function sum (multiplier, ...numbers) {
  return multiplier * numbers.reduce((sum, numbers) => sum + numbers, 0)
}

console.log(sum(10, 2, 4));