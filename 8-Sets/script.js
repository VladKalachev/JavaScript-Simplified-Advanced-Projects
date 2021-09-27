// const uniqueList = [1, 2, 3, 4, 5]
// const newNumber = 4
// const set = new Set([1, 2, 3, 4]);

// set.add(5)
// set.add(4)

// set.delete(1)
// console.log(set.has(2));
// set.clear()
// console.log(set);
// set.forEach(value => {
//   console.log(value);
// })

// if(!uniqueList.includes(newNumber)) {
//   uniqueList.add(newNumber)
// }

// console.log(uniqueList);

function removeDups(array) {
  return [...new Set(array)]
}

console.log(removeDups([1, 2, 3, 3, 4]));
