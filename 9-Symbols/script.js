// import { person } from './module.js'

// const sym1 = Symbol("Name")

// const sym2 = Symbol("Name")
// console.log(sym1);
// console.log(sym2);
// console.log(sym1 === sym2)

// const person = {
//   age: 25,
//   [sym1]: "Kyle"
// }

// console.log(person);

// Object.entries(person).forEach(([key, value]) => {
//   console.log(key, value);
// })

// console.log(JSON.stringify(person));

// console.log(Object.getOwnPropertySymbols(person))

// const sym = Symbol.for("name")
// console.log(person[sym])

// const LOG_LEVEL = {
//   DEBUG_LEVEL: 'debug',
//   INFO: 'info',
//   WARNING: 'warning', 
//   ERROR: 'error'
// }

const LOG_LEVEL = {
  DEBUG_LEVEL: Symbol('debug'),
  INFO: Symbol('info'),
  WARNING: Symbol('warning'), 
  ERROR: Symbol('error'),
}

const logLevel = LOG_LEVEL.DEBUG_LEVEL;

if (logLevel == LOG_LEVEL.DEBUG_LEVEL) {
  console.log(logLevel);
}