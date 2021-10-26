const array = [1, 2, 3, 4]
const TAXES = 1.07

function addElement(a, element) {
  return [...a, element, TAXES]
}

console.log(addElement(array, 5));

console.log(array);