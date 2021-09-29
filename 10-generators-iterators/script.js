// function* simpleGenerator() {
//   yield 1
//   yield 2
//   yield 3
// }

// const generator = simpleGenerator()
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// function* fibonacciGenerator (){
//   let prevOne = 0
//   let prevTwo = 1

//   yield 0
//   yield 1

//   while(true) {
//     const result = prevOne + prevTwo
//     yield result
//     prevOne = prevTwo
//     prevTwo = result
//   }
// }

// const generator = fibonacciGenerator()
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

function* idGenetator() {
  let count = 1

  while (true) {
    const incrementor = yield count
    if(incrementor != null) {
      count += incrementor
    } else {
      count++
    }
  }
}

const generator = idGenetator()
console.log(generator.next());
console.log(generator.return(10));
// console.log(generator.next(2));
console.log(generator.next());

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// const generator2 = idGenetator()
// console.log(generator2.next());
// console.log(generator2.next());
// console.log(generator2.next());