import { add, subtract, nthRoot } from '../../build/Release/nexium.node'

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
}
