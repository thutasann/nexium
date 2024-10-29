import { add, subtract, nthRoot, matrixMultiply as matrixMultiplyFn } from '../../build/Release/nexium.node'

/** Maths Methods */
export class NMaths {
  /** Add Two Numbers */
  static addTwoNumbers = (a: number, b: number): number => {
    return add(a, b)
  }

  /** Subtract Two Numbers */
  static subtractTwoNumbers = (a: number, b: number): number => {
    return subtract(a, b)
  }

  /** Calculate nth root of a number */
  static calculateNthRoot = (base: number, n: number): number => {
    return nthRoot(base, n)
  }

  /**
   * Function to multiply two matrices
   * @example
   * const matrixA = [[1, 2, 3], [4, 5, 6]];
   * const matrixB = [[7, 8], [9, 10],[11, 12]];
   * const result = matrixMultiply(matrixA, matrixB); // Output: [[58, 64], [139, 154]]
   */
  static matrixMultiply = (matrixA: number[][], matrixB: number[][]): number[][] => {
    return matrixMultiplyFn(matrixA, matrixB)
  }
}
