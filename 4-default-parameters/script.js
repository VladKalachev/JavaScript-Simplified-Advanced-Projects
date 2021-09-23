function greet(
  firstName = "John", 
  lastName,
  { salutation = "Hi", suffix = "Mr" } = {}
) {
  console.log(`${salutation} ${suffix} ${firstName} ${lastName}`);
}

greet("Kyle", "Cook")
