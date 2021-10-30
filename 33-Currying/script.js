// function sum(a, b) {
//   return a + b;
// }

function sum(a) {
  return (b) => {
    return a + b;
  }
}

console.log(sum(1)(2))