function Person(name, age) {
  this.name = name
  this.age = age
  // this.printName = function () {
  //   console.log(this.name)
  // }
}

Person.prototype.printName = function () {
  console.log(this.name)
}

Person.prototype.printHi = function () {
  console.log("Hi")
}

// console.log(Object.create(null))

const person = new Person("Kyle", 25)
// console.log(person)
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(person))));
// person.printName()

const person2 = Object.create(person)
// console.log(Object.create(person).name)
person2.name = 'John'
console.log(person2);
console.log(Object.getPrototypeOf(person2) === person);
person.printName()
person.printHi()