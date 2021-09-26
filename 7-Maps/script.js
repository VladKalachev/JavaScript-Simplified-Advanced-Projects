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
// console.log(map);

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
}

Object.entries(obj).forEach(([key, value]) => {
  console.log(key, value);
})

map.forEach((value, key) => {
  console.log(value, key);
})

// const CURRENCY_MAP= {
//   "United States": "USB",
//   India: "Rupee",
// }

// const currency = CURRENCY_MAP["India"]


const CURREMCIES = [
  { name: 'USD', country: "United States" },
  { name: 'Rupee', country: 'India' }
]

const currency = CURREMCIES.find(c => c.country === 'India').name
