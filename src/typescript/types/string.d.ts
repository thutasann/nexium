/** nexium.node module type declarations */
declare module '*.node' {
  // ----------- String Functions
  export function trimStart(str: string): string
  export function trimEnd(str: string): string
  export function isEmpty(str: string): string
  export function toTitleCase(str: string): string
  export function isPalindrome(str: string): boolean
  export function countOccurrences(str: string, word: string): number
  export function reverse(str: string): string
  export function stripHTML(html: string): string
  export function removeDuplicates(str: string): string
  export function insertStringAt(str: string, subStr: string, index: number): string
  export function getWordsArray(str: string): string[]
  export function slugify(str: string, isLower: boolean): string
  export function camelToSnake(str: string): string
  export function snakeToCamel(str: string): string
  export function endsWith(str: string, target: string): boolean
  export function toKebabCase(str: string): string
  export function replaceString(str: string, target: string, replacement: string): string
  export function replaceDiacritics(str: string): string
  export function generateRandomString(length: number, pattern: string): string
  export function generatePassword(length: number): string
}
