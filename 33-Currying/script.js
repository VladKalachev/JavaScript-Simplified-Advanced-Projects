function sum(a, b) {
  return a + b;
}

console.log(sum.bind(null, 1)(2))
// function sum(a) {
//   return (b) => {
//     return a + b;
//   }
// }

// console.log(sum(1)(2))
