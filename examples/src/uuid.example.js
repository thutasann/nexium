// @ts-check
const { NUUId } = require('nexium')

/** uuid examples */
function uuid_examples() {
  console.log('\nUUID Examples ==> ')

  const uuid = NUUId.generate()
  console.log('uuid', uuid)
}

module.exports = { uuid_examples }
