const array = ["A", "B", "C", "D"]
const person = {
  name: "Kyle",
  age: 25,
  fovoriteFood: "Rice",
  address: {
    street: "123 Main St",
    ciry: "Somewhere",
  }
}

// const [first, second, , f] = array;
// const first = array[0]
// const second = array[1]
// console.log(first);
// console.log(second);
// console.log(f);

function addAndMultiply(a, b) {
  return [a + b, a * b]
}

const [sum, product] = addAndMultiply(2, 3)
console.log(sum);
console.log(product);