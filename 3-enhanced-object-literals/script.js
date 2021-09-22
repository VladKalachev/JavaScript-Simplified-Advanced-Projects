const propertyName = "name"
const index = 1
const firstName = "Kely"
const age = 25

const person = {
  [propertyName]: firstName,
  [`age${index}`]: age,
  sayHi() {
    console.log("Hi");
  },
}

console.log(person);