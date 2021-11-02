const { sum, getLargest } = require('./script.js')

describe("#sum", () => {
  test('it adds numbers correctly', () => {
    const a = 1
    const b = 2
    expect(sum(a, b)).toBe(3)
  })  
})

describe("#getLargest", () => {
  const global = 'Hi'
  test('it returns the largest number in the array', () => {
    const array = [1, 2, 3, 4]
    expect(getLargest(array)).toBe(4)
  })
  describe("with an empty array", () => {
    test('it returns null', () => {
      expect(getLargest([])).toBeNull()
    })
  })
})

