const { addTwoNumbers, subtractTwoNumbers } = require('../lib/index')

describe('mathFunctions', () => {
  it('should add two positive numbers correctly', () => {
    expect(addTwoNumbers(1, 2)).toBe(3)
  })

  it('should subtract two positive numbers correctly', () => {
    expect(subtractTwoNumbers(4, 3)).toBe(1)
  })
})
