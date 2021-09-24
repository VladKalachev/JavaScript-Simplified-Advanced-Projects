function greet(firstName = "Sally", lastName) {
  lastName = lastName ?? "Smith"
  console.log(`${firstName} ${lastName}`);
}

greet("Kyle")

console.log((undefined ?? false) && (true || false))