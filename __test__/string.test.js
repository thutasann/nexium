// @ts-check
const { NString } = require('../lib')

describe('String Functions', () => {
  test('trims whitespace from the start', () => {
    expect(NString.trimStart('   Hello')).toBe('Hello')
  })

  test('trims whitespace from the end', () => {
    expect(NString.trimEnd('Hello    ')).toBe('Hello')
  })

  test('check if a string is empty or not', () => {
    expect(NString.isEmpty('')).toBe(true)
    expect(NString.isEmpty('not empty')).toBe(false)
  })

  test('converts string to title case', () => {
    expect(NString.toTitleCase('hello world')).toBe('Hello World')
  })

  test('returns true for a palindrome string', () => {
    expect(NString.isPalindrome('madam')).toBe(true)
  })

  test('returns false for a non-palindrome string', () => {
    expect(NString.isPalindrome('hello')).toBe(false)
  })

  test('returns true for a single character string', () => {
    expect(NString.isPalindrome('a')).toBe(true)
  })

  test('returns true for an empty string', () => {
    expect(NString.isPalindrome('')).toBe(true)
  })

  test('returns false for a string with different cases', () => {
    expect(NString.isPalindrome('Madam')).toBe(false)
  })

  test('counts occurrences of a word in a string', () => {
    expect(NString.countOccurrences('hello world hello', 'hello')).toBe(2)
    expect(NString.countOccurrences('test test test', 'test')).toBe(3)
    expect(NString.countOccurrences('no match here', 'xyz')).toBe(0)
    expect(NString.countOccurrences('repeat repeat repeat repeat', 'repeat')).toBe(4)
    expect(NString.countOccurrences('', 'hello')).toBe(0)
  })

  test('reverses a given string', () => {
    expect(NString.reverse('hello')).toBe('olleh')
    expect(NString.reverse('world')).toBe('dlrow')
    expect(NString.reverse('')).toBe('')
    expect(NString.reverse('a')).toBe('a')
    expect(NString.reverse('racecar')).toBe('racecar')
  })

  test('removes HTML tags from a string', () => {
    expect(NString.stripHTML('<p>Hello, <b>world</b>!</p>')).toBe('Hello, world!')
    expect(NString.stripHTML('<div><span>Text</span></div>')).toBe('Text')
    expect(NString.stripHTML('No tags')).toBe('No tags')
    expect(NString.stripHTML("<a href='#'>Link</a>")).toBe('Link')
    expect(NString.stripHTML('')).toBe('')
    expect(NString.stripHTML('<br><br>')).toBe('')
  })

  test('removes duplicate characters from a string', () => {
    expect(NString.removeDuplicates('aabbcc')).toBe('abc')
    expect(NString.removeDuplicates('hello world')).toBe('helo wrd')
    expect(NString.removeDuplicates('abc')).toBe('abc')
    expect(NString.removeDuplicates('')).toBe('')
    expect(NString.removeDuplicates('112233')).toBe('123')
    expect(NString.removeDuplicates('AaBbCc')).toBe('AaBbCc') // case-sensitive
  })

  test('inserts substring at specified index', () => {
    expect(NString.insertStringAt('hello world', 'beautiful ', 6)).toBe('hello beautiful world')
    expect(NString.insertStringAt('abcdef', '123', 3)).toBe('abc123def')
    expect(NString.insertStringAt('abcdef', '123', 0)).toBe('123abcdef')
    expect(NString.insertStringAt('abcdef', '123', 6)).toBe('abcdef123')
    expect(NString.insertStringAt('abcdef', '123', 100)).toBe('abcdef123') // Out of bounds
    expect(NString.insertStringAt('abcdef', '123', -5)).toBe('123abcdef') // Negative index
  })
})
