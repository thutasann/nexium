// @ts-check
const { NUUId } = require('../lib')

describe('UUID Generation', () => {
  test('should generate a valid UUID', () => {
    const uuid = NUUId.generate()
    console.log('uuid', uuid)
    expect(uuid).toMatch(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)
  })
})

describe('ParseUUID', () => {
  it('should convert a valid UUID string to an array of bytes', () => {
    const uuid = 'e82faf28-b22b-44fe-a55b-0e9ead917d79'
    const expectedBytes = new Uint8Array([232, 47, 175, 40, 34, 253, 68, 254, 85, 253, 14, 158, 173, 145, 125, 121])

    const result = NUUId.parse(uuid)

    expect(result).toHaveLength(16)

    expectedBytes.forEach((byte, index) => {
      expect(result[index]).toBe(byte)
    })
  })

  it('should throw an error for an invalid UUID length', () => {
    const invalidUUID = 'invalid-uuid-string'

    expect(() => NUUId.parse(invalidUUID)).toThrow('Invalid UUID length')
  })
})
