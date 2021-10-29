const array = [1, 2, 3, 4];

// const nodeList = [...document.querySelectorAll('div')]

// map(nodeList, element => element * 2);

// const newArray = [];
// for (let i = 0; i < array.length; i++) {
//   newArray.push(array[i] * 2);
// }
// console.log(newArray);

// const newArray = array.map(element => element * 2).map(element => element / 3)
const newArray = everyOtherMap(array, element => element * 2)
// console.log(newArray);

function everyOtherMap(a, fun) {
  return a.map((element, i) => {
    if(i % 2 === 0 ) return fun(element)
    return element
  })
}

const people = [
  {
    name: 'Kyle',
    friends: ['John', 'Sally']
  },
  {
    name: 'Joey',
    friends: ['Kyle']
  },
  {
    name: 'Sally',
    friends: ['John', 'Sally']
  },
  {
    name: 'Kyle',
    friends: ['Joey']
  },
]

// groupBy(people, func) => { 1: [] }

const results = groupBy(people, person => person.name)
console.log(results)

function groupBy(array, func) {
  return array.reduce((grouping, element) => {
    const key = func(element)
    if (grouping[key] == null) grouping[key] = []
    grouping[key].push(element)
    return grouping
  }, {})
}