// @ts-check
const { NUUId } = require('../lib')

describe('UUID Functions', () => {
  test('should generate a valid UUID', () => {
    const uuid = NUUId.generate()
    expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
  })
})
