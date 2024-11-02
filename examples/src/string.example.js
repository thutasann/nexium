// @ts-check
const { NString } = require('nexium')

/** String Examples */
function stringExamples() {
  console.log('\nString Examples ==> ')

  /** trim start */
  const trimedStart = NString.trimStart('    Hello World')
  console.log(trimedStart)

  /** trim end */
  const trimedEnd = NString.trimEnd('Hello World    ')
  console.log(trimedEnd)

  /** palindrome */
  console.log('isPalindrome true -> ', NString.isPalindrome('madam')) // true
  console.log('isPalindrome false ->', NString.isPalindrome('hello')) // false

  /** generate random string */
  const length = 15
  const randomString = NString.generateRandomString(length, '')
  console.log('randomString -> ', randomString)

  /** remove diacritics */
  const removedDiacritics = NString.replaceDiacritics('Café')
  console.log('removedDiacritics -> ', removedDiacritics)

  /** replaced string */
  const replacedString = NString.replaceString('hello world', 'world', 'there')
  console.log('replacedString -> ', replacedString)

  /** check to ends with */
  const endsWith = NString.endsWith('hello world', 'world')
  console.log('endsWith -> ', endsWith)

  /** case converts */
  const kebab = NString.toCase('hello world', 'kebab-case')
  const snakeToCamel = NString.toCase('snake_case_test', 'snake-to-camel')
  const camelToSnake = NString.toCase('camelCaseTest', 'camel-to-snake')
  console.log({ kebab, snakeToCamel, camelToSnake })

  /** slugify */
  const slugified = NString.slugify('Special!!  Characters---and Spaces', true)
  console.log('slugified', slugified)

  /** get words array */
  const wordsArray = NString.getWordsArray('   Multiple    spaces   here ')
  console.log('wordsArray', wordsArray)

  /** insert sub string at specififed inded */
  const insertedStringAt = NString.insertStringAt('abcdef', '123', 3)
  console.log('insertedStringAt', insertedStringAt)

  /** remove duplicates */
  const removeDuplicates = NString.removeDuplicates('aabbcc')
  console.log('removeDuplicates', removeDuplicates)

  /** strip HTML */
  const stripedHTML = NString.stripHTML('<p>Hello, <b>world</b>!</p>')
  console.log('stripedHTML', stripedHTML)

  /** reversed string */
  const reversedString = NString.reverse('hello')
  console.log('reversedString', reversedString)

  /** check occurrences */
  const countOccurrences = NString.countOccurrences('hello world hello', 'hello')
  console.log('countOccurrences', countOccurrences)
}

module.exports = { stringExamples }
