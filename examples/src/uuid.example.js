// @ts-check
const { NUUId } = require('nexium')

/** uuid examples */
function uuidExamples() {
  console.log('\nUUID Examples ==> ')

  const uuid = NUUId.generate()
  console.log('uuid', uuid)

  const uuid_string = 'e82faf28-b22b-44fe-a55b-0e9ead917d79'
  const parsed = NUUId.parse(uuid_string)
  console.log('parsed', parsed)

  const validUUID = 'e82faf28-b22b-44fe-a55b-0e9ead917d79'
  const isValid = NUUId.isValid(validUUID)
  console.log('isValid', isValid)

  const bytes = [0xe8, 0x2f, 0xaf, 0x28, 0xb2, 0x2b, 0x44, 0xfe, 0xa5, 0x5b, 0x0e, 0x9e, 0xad, 0x91, 0x7d, 0x79]
  const stringified_uuid = NUUId.bytesToUUID(bytes)
  console.log('stringified_uuid', stringified_uuid, '\n')
}

module.exports = { uuidExamples }
