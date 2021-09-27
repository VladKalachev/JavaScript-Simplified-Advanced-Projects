const uniqueList = [1, 2, 3, 4, 5]
const newNumber = 4

if(!uniqueList.includes(newNumber)) {
  uniqueList.add(newNumber)
}

console.log(uniqueList);