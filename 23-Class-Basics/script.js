// function Person(name, age) {
//   this.name = name
//   this.age = age
//   // this.printName = function () {
//   //   console.log(this.name)
//   // }
// }

// Person.prototype.printName = function () {
//   console.log(this.name)
// }

// Person.prototype.printHi = function () {
//   console.log("Hi")
// }

// // console.log(Object.create(null))

// const person = new Person("Kyle", 25)
// // console.log(person)
// // console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(person))));
// // person.printName()

// const person2 = Object.create(person)
// // console.log(Object.create(person).name)
// person2.name = 'John'
// console.log(person2);
// console.log(Object.getPrototypeOf(person2) === person);
// person.printName()
// person.printHi()

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   static goodName = "Kyle2"
//   static printHi() {
//     console.log("Hi")
//   }

//   printName() {
//     console.log(this.name)
//   }
// }

// // Person.goodName = "Kyle"

// const person = new Person("Kyle", 25)
// console.log(Person.goodName)

// person.printName()

// function createUser(email, password, language) {
//   return {
//     email,
//     password,
//     language,
//     printPassword() {
//       console.log(this.password)
//     }
//   }
// }

// console.log(createUser("test@test.com", "password", "English"))

// function User(email, password, language) {
//   this.email = email;
//   this.password = password;
//   this.language = language;
// }

// User.prototype.printPassword = function() {
//   console.log(this.password)
// }

// const user = new User("test@test.com", "password", "English")
// console.log(user)

class User {
  constructor(email, password, language) {
   this.email = email;
   this.password = password;
   this.language = language;
  }

  get name() {
    return this.email.split("@")[0]
  }

  set name(value) {
    const [, suffix] = this.email.split("@");
    this.email = value + suffix
  }

  printPassword() {
    console.log(this.password)
  }
}

const user = new User("test@test.com", "password", "English")
user.name = "Kyle"
console.log(user.name)
