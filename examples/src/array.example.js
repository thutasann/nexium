// @ts-check
const { NArray } = require('nexium')

const objArray = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]

/** Array Examples */
function arrayExamples() {
  console.log('Array Examples ==> ')

  const chunkNumArray = NArray.chunkArray([1, 2, 3, 4, 5, 6, 7], 3)
  console.log('chunkNumArray', chunkNumArray)

  const chunkStrArray = NArray.chunkArray(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3)
  console.log('chunkStrArray', chunkStrArray)

  const chunkObjArray = NArray.chunkArray(objArray, 2)
  console.log('chunkObjArray', chunkObjArray)
}

module.exports = { arrayExamples }
