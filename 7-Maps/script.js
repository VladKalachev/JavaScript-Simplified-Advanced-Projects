// const map = new Map([
//   [false, "USD"],
//   ["India", "Rupee"],
// ])

const user = {
  name: "Kyle",
}

// const map = new Map([
//   [user, { age: 25 }],
// ])
// console.log(map.get(user));

const map = new Map([
  [1, 'A'],
  [2, 'B'],
  [3, 'C'],
  [4, 'D'],
])

// map.set(5, "E")
// map.delete(3)
// map.clear()
// console.log(map, map.has(1));

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
// }

// Object.entries(obj).forEach(([key, value]) => {
//   console.log(key, value);
// })

// map.forEach((value, key) => {
//   console.log(value, key);
// })

// const CURRENCY_MAP= {
//   "United States": "USB",
//   India: "Rupee",
// }

// const currency = CURRENCY_MAP["India"]


// const CURREMCIES = [
//   { name: 'USD', country: "United States" },
//   { name: 'Rupee', country: 'India' }
// ]

// const currency = CURREMCIES.find(c => c.country === 'India').name

const items = [
  {
    id: 1,
    name: 'Test 1',
    description: 'Desc 1'
  },
  {
    id: 2,
    name: 'Test 2',
    description: 'Desc 2'
  },
  {
    id: 3,
    name: 'Test 3',
    description: 'Desc 3'
  }
]

const items2 = new Map([
  [
    1,
    {
      id: 1,
      name: 'Test 1',
      description: 'Desc 1'
    }
  ],
  [
    2,
    {
      id: 2,
      name: 'Test 2',
      description: 'Desc 2'
    }
  ],
  [
    1,
    {
      id: 3,
      name: 'Test 3',
      description: 'Desc 3'
    }
  ]
])

function getItem(id) {
  return items.find(item => item.id === id)
}

console.log(items2.get(2))
console.log(getItem(2))
