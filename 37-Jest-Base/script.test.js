const { sum } = require('./script.js')

test('it adds numbers correctly', () => {
    const a = 1
    const b = 2
    expect(sum(a, b)).toBe(3)
})
