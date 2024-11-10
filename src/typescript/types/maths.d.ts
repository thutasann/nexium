/** nexium.node module type declarations */
declare module '*.node' {
  // ----------- Maths Functions
  export function add(a: number, b: number): number
  export function subtract(a: number, b: number): number
  export function nthRoot(base: number, n: number): number
  export declare function matrixMultiply(matrixA: number[][], matrixB: number[][]): number[][]
}
