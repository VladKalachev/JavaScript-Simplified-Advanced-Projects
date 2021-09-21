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

// const [first, second, , f] = array;
// const first = array[0]
// const second = array[1]
// console.log(first);
// console.log(second);
// console.log(f);

// function addAndMultiply(a, b) {
//   return [a + b, a * b]
// }
// const [sum, product] = addAndMultiply(2, 3)
// console.log(sum);
// console.log(product);

// const { name: firstName, age } = person
// const firstName = person.name
// const age = person.age
// console.log(firstName);
// console.log(age);

// const { address } = person
// const { street } = address
// const {
//   address: { street, ciry, zipcode = '1243'}
// } = person
// console.log(street);
// console.log(ciry);
// console.log(zipcode);

// const [first, second, third, fourth, [fifth, sixth]] = array
// console.log(fifth);
// console.log(sixth);

// const {
//   age,
//   name,
//   fovoriteFood,
//   address
// } = person;

// function addAndMultiply(a, b) {
//   return { sum: a + b, product: a * b }
// }

// const { sum, product } = addAndMultiply(2, 3)
// console.log(sum);
// console.log(product);

// function nameToFirstAndLast(fullName) {
//   return fullName.split(" ")
// }

// const [firstName, lastName] = nameToFirstAndLast("Kyle Cook")
// console.log(firstName);
// console.log(lastName);

// function nameToFirstAndLast(fullName) {
//   const [firstName, lastName] = fullName.split(" ")
//   return {
//     firstName: firstName,
//     lastName: lastName
//   }
// }

// const { firstName, lastName } = nameToFirstAndLast("Kyle Cook")
// console.log(firstName);
// console.log(lastName);

// function addAndMultiply(options) {
//   const a = options.a
//   const b = options.b
//   return [a + b, a * b]
// }

function addAndMultiply({ a, b }) {
  return [a + b, a * b]
}

const [sum, product] = addAndMultiply({ a: 2, b: 3})
console.log(sum, product);

