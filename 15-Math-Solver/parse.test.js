import parse from './parse.js'

describe('#parse', () => {
  test('it works', () => {
    expect(parse('2 + 2')).toBe(4)
  })
})
