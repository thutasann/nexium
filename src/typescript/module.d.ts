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

  // ----------- UUID Functions
  export function generateUUID(): string
  export function parseUUID(uuid: string): Uint8Array
  export function isValidUUID(uuid: string): boolean
  export function bytesToUUID(bytes: number[]): string
}
