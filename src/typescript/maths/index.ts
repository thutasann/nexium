import { add, subtract, nthRoot } from '../../build/Release/nexium.node'

/** Add Two Numbers */
export const addTwoNumbers = (a: number, b: number): number => {
  return add(a, b)
}

/** Subtract Two Numbers */
export const subtractTwoNumbers = (a: number, b: number): number => {
  return subtract(a, b)
}

/** Calculate nth root of a number */
export const calculateNthRoot = (base: number, n: number): number => {
  return nthRoot(base, n)
}
