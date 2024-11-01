import {
  trimStart as trimStartFn,
  trimEnd as trimEndFn,
  isEmpty as isEmptyFn,
  toTitleCase as toTitleCaseFn,
  isPalindrome as isPalindromeFn,
  countOccurrences as countOccurrencesFn,
  reverse as reverseFn,
  stripHTML as stripHTMLFn,
  removeDuplicates as removeDuplicatesFn,
  insertStringAt as insertStringAtFn,
  getWordsArray as getWordsArrayFn,
  slugify as slugifyFn,
  camelToSnake,
  snakeToCamel,
  endsWith as endsWithFn,
  toKebabCase,
  replaceString as replaceStringFn,
  replaceDiacritics as replaceDiacriticsFn,
} from '../../build/Release/nexium.node'

/** String Methods */
export class NString {
  /** Trims whitespace from the beginning of a string */
  static trimStart(str: string): string {
    return trimStartFn(str)
  }

  /** Trims whitespace from the end of a string */
  static trimEnd(str: string): string {
    return trimEndFn(str)
  }

  /** Check if a string is empty or not */
  static isEmpty(str: string): string {
    return isEmptyFn(str)
  }

  /**
   * Function to convert to Title Case
   * @example
   * toTitleCase("hello world") // "Hello World"
   */
  static toTitleCase(str: string): string {
    return toTitleCaseFn(str)
  }

  /**
   * Function to check if the string is a palindrome
   * @example
   * console.log(isPalindrome("madam")); // true
   * console.log(isPalindrome("hello")); // false
   */
  static isPalindrome(str: string): boolean {
    return isPalindromeFn(str)
  }

  /**
   * Function to count Occurrences of a word from a string
   * @example
   * countOccurrences('hello world hello', 'hello') // 2
   * countOccurrences('', 'hello') // 0
   */
  static countOccurrences(str: string, word: string): number {
    return countOccurrencesFn(str, word)
  }

  /** Function to reverse a given string */
  static reverse(str: string): string {
    return reverseFn(str)
  }

  /** Function to strip HTML tags from a given html string */
  static stripHTML(html: string): string {
    return stripHTMLFn(html)
  }

  /** Function to remove duplicate characters from a given string */
  static removeDuplicates(str: string): string {
    return removeDuplicatesFn(str)
  }

  /**
   * Function to insert substring at a specified index
   * @param str - given string
   * @param subStr - new string to be inserted
   * @param index - index to be inserted
   * @returns new string
   */
  static insertStringAt(str: string, subStr: string, index: number): string {
    return insertStringAtFn(str, subStr, index)
  }

  /**
   * Get Words array from a given string
   * @example
   * getWordsArray("hello, world"); // ["hello", "world"]
   */
  static getWordsArray(str: string): string[] {
    return getWordsArrayFn(str)
  }

  /** Function to slugify a given string */
  static slugify(str: string, isLower: boolean): string {
    return slugifyFn(str, isLower)
  }

  /** Function to convert case (camel-to-snake or snake-to-camel) */
  static toCase(str: string, to: 'camel-to-snake' | 'snake-to-camel' | 'kebab-case'): string {
    if (to === 'camel-to-snake') {
      return camelToSnake(str)
    } else if (to === 'kebab-case') {
      return toKebabCase(str)
    } else {
      return snakeToCamel(str)
    }
  }

  /** Function to check the given string ends with target
   * @example
   * endsWith('hello world', 'world') // true
   * endsWith('hello world', 'hello') // false
   */
  static endsWith(str: string, target: string): boolean {
    return endsWithFn(str, target)
  }

  /**
   * Function to replace a substring with another string
   * @example
   * replaceString('hello world', 'world', 'universe') // 'hello universe'
   */
  static replaceString(str: string, target: string, replacement: string): string {
    return replaceStringFn(str, target, replacement)
  }

  /** Function to replace diacritics with their base characters
   * @example
   * replaceDiacritics('áéíóúÁÉÍÓÚ') // 'aeiouAEIOU'
   */
  static replaceDiacritics(str: string): string {
    return replaceDiacriticsFn(str)
  }
}
