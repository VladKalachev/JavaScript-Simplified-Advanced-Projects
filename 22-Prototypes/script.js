function Person(name, age) {
  this.name = name
  this.age = age
  this.printName = function () {
    console.log(this.name)
  }
}

const person = new Person("Kyle", 25)
console.log(person)
person.printName()