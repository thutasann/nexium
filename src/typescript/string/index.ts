import {
  trimStart as trimStartFn,
  trimEnd as trimEndFn,
  isEmpty as isEmptyFn,
  toTitleCase as toTitleCaseFn,
  isPalindrome as isPalindromeFn,
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
}
