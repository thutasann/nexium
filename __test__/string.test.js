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

  test('GetWordsArray splits a string into an array of words', () => {
    const input = 'This is a test string'
    const expected = ['This', 'is', 'a', 'test', 'string']

    const result = NString.getWordsArray(input)
    expect(result).toEqual(expected)
  })

  test('GetWordsArray handles empty string', () => {
    const input = ''
    const expected = []

    const result = NString.getWordsArray(input)
    expect(result).toEqual(expected)
  })

  test('GetWordsArray handles single word', () => {
    const input = 'hello'
    const expected = ['hello']

    const result = NString.getWordsArray(input)
    expect(result).toEqual(expected)
  })

  test('GetWordsArray handles multiple spaces', () => {
    const input = '   Multiple    spaces   here '
    const expected = ['Multiple', 'spaces', 'here']

    const result = NString.getWordsArray(input)
    expect(result).toEqual(expected)
  })

  test('Slugify converts string to lowercase slug with spaces replaced by dashes', () => {
    const input = 'This is a Test String!'
    const expected = 'this-is-a-test-string'
    expect(NString.slugify(input, true)).toBe(expected)
  })

  test('Slugify keeps original case when lowercase option is false', () => {
    const input = 'This is a Test String!'
    const expected = 'This-is-a-Test-String'
    expect(NString.slugify(input, false)).toBe(expected)
  })

  test('Slugify removes special characters and handles multiple spaces', () => {
    const input = 'Special!!  Characters---and Spaces'
    const expected = 'special-characters-and-spaces'
    expect(NString.slugify(input, true)).toBe(expected)
  })

  test('Slugify removes trailing dashes', () => {
    const input = 'Trailing dash test '
    const expected = 'trailing-dash-test'
    expect(NString.slugify(input, true)).toBe(expected)
  })

  test('CamelToSnake converts CamelCase to snake_case', () => {
    expect(NString.toCase('camelCaseTest', 'camel-to-snake')).toBe('camel_case_test')
    expect(NString.toCase('CamelCase', 'camel-to-snake')).toBe('camel_case')
    expect(NString.toCase('testFunctionExample', 'camel-to-snake')).toBe('test_function_example')
  })

  test('SnakeToCamel converts snake_case to CamelCase', () => {
    expect(NString.toCase('snake_case_test', 'snake-to-camel')).toBe('snakeCaseTest')
    expect(NString.toCase('example_test_function', 'snake-to-camel')).toBe('exampleTestFunction')
    expect(NString.toCase('singleword', 'snake-to-camel')).toBe('singleword')
  })

  test('ToKebabCase correctly converts strings to kebab case', () => {
    expect(NString.toCase('hello world', 'kebab-case')).toBe('hello-world')
    expect(NString.toCase('hello_world', 'kebab-case')).toBe('hello-world')
    expect(NString.toCase('Hello-World', 'kebab-case')).toBe('hello-world')
    expect(NString.toCase('  Multiple   spaces   ', 'kebab-case')).toBe('multiple-spaces')
    expect(NString.toCase('', 'kebab-case')).toBe('')
  })

  test('EndsWith correctly checks if a string ends with a given target string', () => {
    expect(NString.endsWith('hello world', 'world')).toBe(true)
    expect(NString.endsWith('hello world', 'hello')).toBe(false)
    expect(NString.endsWith('abcdef', 'def')).toBe(true)
    expect(NString.endsWith('abcdef', 'xyz')).toBe(false)
    expect(NString.endsWith('testing', '')).toBe(true) // Edge case: empty target
    expect(NString.endsWith('', 'world')).toBe(false) // Edge case: empty string
  })

  test('ReplaceString correctly replaces patterns in strings', () => {
    expect(NString.replaceString('hello world', 'world', 'there')).toBe('hello there')
    expect(NString.replaceString('foo bar foo', 'foo', 'baz')).toBe('baz bar baz')
    expect(NString.replaceString('no match here', 'xyz', 'test')).toBe('no match here')
  })
})
