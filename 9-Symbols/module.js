const sym1 = Symbol("Name")

export const person = {
  age: 25,
  name: "Cook",
  [sym1]: "Kyle"
}

// console.log(person[sym1])