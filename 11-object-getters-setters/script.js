const person = {
  _username: 'Web Dev Simplified',
  // firstName: "Kyle",
  // lastName: "Cook",
  // fullName() {
  //   return this.firstName + " " + this.lastName
  // }
  get username() {
    return this._username
  },
  set username(value) {
    if (value.length > 5) {
      this._username = value
    }
  }
  // get fullName() {
  //   return `${this.firstName} ${this.lastName}`
  // },
  // set fullName(value) {
  //   // [this.firstName, this.lastName] = value.split(' ')
  //   const nameArray = value.split(' ')
  //   this.firstName = nameArray[0]
  //   this.lastName = nameArray[1]
  // }
}

// person.fullName = "Sally Smith"

person.username = "John11"
console.log(person.username)
// console.log(person.fullName)

const person2 = {
  age: 25,
  get birtYear() {
    const date = new Date()
    return date.getFullYear() - this.age
  }
}

console.log(person2.birtYear)