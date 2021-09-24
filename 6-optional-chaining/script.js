const kyle = {
  name: "Kyle",
  age: 25,
  address: {
    street: "124 Main St",
    city: "Somewhere",
  }
}

function printStreet(person) {
  console.log(person.address.street);
}

printStreet(kyle)
