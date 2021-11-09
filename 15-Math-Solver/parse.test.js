import parse from './parse.js'

describe('#parse', () => {
  describe('with addition', () => {
    test('it returns the correct result', () => {
      expect(parse('2 + 2')).toBe(4)
    })
  })
  
  describe('with substraction', () => {
    test('it returns the correct result', () => {
      expect(parse('3 - 2')).toBe(1)
    })
  })

  describe('with exponents', () => {
    test('it returns the correct result', () => {
      expect(parse('3 ^ 2')).toBe(9)
    })
  })

  describe('with multiplication', () => {
    test('it returns the correct result', () => {
      expect(parse('3 * 2')).toBe(6)
    })
  })

  describe('with division', () => {
    test('it returns the correct result', () => {
      expect(parse('3 / 2')).toBe(1.5)
    })
  })

  describe('with parenthesis', () => {
    test('it returns the correct result', () => {
      expect(parse('(3 + 2) * 4')).toBe(20)
    })
  })
})
