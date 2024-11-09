/** nexium.node module type declarations */
declare module '*.node' {
  // ----------- Maths Functions
  export function add(a: number, b: number): number
  export function subtract(a: number, b: number): number
  export function nthRoot(base: number, n: number): number
  export declare function matrixMultiply(matrixA: number[][], matrixB: number[][]): number[][]

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

  // ----------- UUID Functions
  export function generateUUID(): string
  export function parseUUID(uuid: string): Uint8Array
  export function isValidUUID(uuid: string): boolean
  export function bytesToUUID(bytes: number[]): string

  // ----------- Number Functions
  export function clamp(num: number, min: number, max: number): number
  export function inRange(num: number, start: number, end: number): boolean
  export function roundTo(num: number, decimalPlaces: number): number
  export function generateRandom(min: number, max: number): number
  export function toOrdinal(num: number): string
  export function toCurrency(amount: number, locale: string, currency: string): string
  export function fibonacci(num: number): number
  export function sum(nums: number[]): number
  export function countNonRepeating<T>(arr: T[], type: 'string' | 'number'): number

  // ----------- Array Functions
  export function chunkArray<T>(arr: T[], chunkLength: number): T[][]
  export function uniqueArray<T>(arr: T[]): T[]

  // ----------- Sort Functions
  export function bubbleSort(arr: number[]): number[]
  export function quickSort(arr: number[]): number[]

  // ----------- Leetcode Functions
  export function twoSum(nums: number[], target: number): number[]
}
