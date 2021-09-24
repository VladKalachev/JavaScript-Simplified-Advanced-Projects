const kyle = {
  name: "Kyle",
  age: 25,
  address: {
    street: "124 Main St",
    city: "Somewhere",
  },
  // hobbies: ["Bowling"]
  // sayHi() {
  //   console.log("Hi");
  // },
}

// function printStreet(person) {
//   // if(person && person.address) {
//   //   console.log(person.address.street);
//   // }
//   // console.log(person && person.address && person.address.street);
//   console.log(person?.address?.street)
// }

// printStreet(kyle)

// function callSayHi(person) {
//   person?.sayHi?.()
// }

// callSayHi(kyle)

function printHobbyOne(person) {
  console.log(person?.hobbies?.[0]);
}

printHobbyOne(kyle)