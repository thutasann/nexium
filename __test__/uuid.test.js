// @ts-check
const { NUUId } = require('../lib')

describe('UUID Generation', () => {
  test('should generate a valid UUID', () => {
    const uuid = NUUId.generate()
    console.log('uuid', uuid)
    expect(uuid).toMatch(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)
  })
})
