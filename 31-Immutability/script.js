// const FAVIRUTE_NUMBERS = [1, 2, 3, 4]
// FAVIRUTE_NUMBERS.push(5)
// console.log(FAVIRUTE_NUMBERS);

// const person = Object.freeze({
//   name: "Kyle",
//   friends: Object.freeze(["John", "Sally"])
// })

const person = deepFreeze({
  name: "Kyle",
  friends: ["John", "Sally"],
  address: {
    street: "12223"
  }
})

person.name = "John"
// person.friends.push("Joey")
// person.address.street = "1"
const newPerson = { ...person, address: {...person.address, street: '1' } }

console.log(person);
console.log(newPerson);

function deepFreeze(object) {
  Object.values(object).forEach(value => {
    if(value && typeof value === 'object') {
      deepFreeze(value)
    }
  })
  return Object.freeze(object);
}