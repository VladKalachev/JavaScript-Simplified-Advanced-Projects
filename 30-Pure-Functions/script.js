const person = {
  name: 'Vlad',
  friends: ['Peta', 'Masha']
}

// Pure function
function addFriend(person, friendName) {
  return {...person, friends: addElement(person.friends, friendName)}
  //person.fruends.push(friendName)
}

// Pure function
function addElement(a, element) {
  return [...a, element];
}

console.log(addFriend(person, "Joey"))

console.log(person)

// const array = [1, 2, 3, 4]
// const TAXES = 1.07

// function addElement(a, element) {
//   return [...a, element, TAXES]
// }

// console.log(addElement(array, 5));
// console.log(addElement(array, 5));
// console.log(addElement(array, 5));
// console.log(addElement(array, 5));
// console.log(addElement(array, 5));

// console.log(array);


// 2 + 4 * 3 - 7
// 2 + 12 - 7
// 14 - 7
// 7