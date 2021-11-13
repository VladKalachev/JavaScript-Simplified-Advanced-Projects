// const divs = [...document.querySelectorAll('div')]

// const array = ["A", "B", "C", "D", ["E", "F"]]
// const numberArray = [2, 3, 4]

// function sum (numbers) {
//   return numbers.reduce((sum, numbers) => sum + numbers, 0)
// }

// console.log(sum([1, 3, 3, 4, 5, 60]));

// function sum(multiplier, ...numbers) {
//   console.log(multiplier);
//   console.log(numbers);
//   return multiplier * numbers.reduce((sum, numbers) => sum + numbers, 0)
// }
// sum(...numberArray);

// function concatName(firsName, lastName) {
//   console.log(firsName + " " + lastName)
// }

// const names = ["Kyle", "Cook"]

// concatName(...names)

// const newArray = [...numberArray]
// numberArray.push(5)

// console.log(newArray);
// console.log(numberArray);
// divs.map(div => {
//   console.log(div);
// })

// const [firs, second, ...rest] = array

// console.log(firs, second, rest)

const person = {
  name: "Sally",
  fovoriteFood: "Rice",
  address: {
    street: "123 Main St",
    ciry: "Somewhere",
    zipcode: '55555'
  }
}

// const { name, age, ...rest } = person

// console.log(name, age, rest);

const details = {
  name: "Kyle",
  age: 25
}

const person2 = { ...details, ... person }

// person.name = "Sally"
// console.log(person)

console.log(person2);

