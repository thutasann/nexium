/** nexium.node module type declarations */
declare module '*.node' {
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
}
