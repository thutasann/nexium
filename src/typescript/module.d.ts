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

  // ----------- UUID Functions
  export function generateUUID(): string
  export function parseUUID(uuid: string): Uint8Array
  export function isValidUUID(uuid: string): boolean
  export function bytesToUUID(bytes: number[]): string
}
