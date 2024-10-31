// @ts-check
const { NUUId } = require('../lib')

describe('UUID Generation', () => {
  test('should generate a valid UUID', () => {
    const uuid = NUUId.generate()
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

describe('IsValidUUID', () => {
  it('should return true for a valid UUID', () => {
    const validUUID = 'e82faf28-b22b-44fe-a55b-0e9ead917d79'
    const result = NUUId.isValid(validUUID)
    expect(result).toBe(true)
  })

  it('should return false for an invalid UUID with wrong characters', () => {
    const invalidUUID = 'e82faf28-b22b-44fe-a55b-0e9ead9ZZZ79' // Contains invalid 'Z' characters
    const result = NUUId.isValid(invalidUUID)
    expect(result).toBe(false)
  })

  it('should return false for an invalid UUID with incorrect dashes', () => {
    const invalidUUID = 'e82faf28-b22b44fe-a55b-0e9ead917d79' // Missing a dash
    const result = NUUId.isValid(invalidUUID)
    expect(result).toBe(false)
  })

  it('should return false for an invalid UUID with incorrect length', () => {
    const invalidUUID = 'e82faf28-b22b-44fe-a55b-0e9ead917d7' // Shorter than expected
    const result = NUUId.isValid(invalidUUID)
    expect(result).toBe(false)
  })

  it('should return false for an empty string', () => {
    const invalidUUID = ''
    const result = NUUId.isValid(invalidUUID)
    expect(result).toBe(false)
  })
})

describe('BytesToUUIDString', () => {
  it('should correctly convert a byte array to a UUID string', () => {
    const bytes = [0xe8, 0x2f, 0xaf, 0x28, 0xb2, 0x2b, 0x44, 0xfe, 0xa5, 0x5b, 0x0e, 0x9e, 0xad, 0x91, 0x7d, 0x79]

    const expectedUUID = 'e82faf28-b22b-44fe-a55b-0e9ead917d79'
    const result = NUUId.bytesToUUID(bytes)
    expect(result).toBe(expectedUUID)
  })
})
