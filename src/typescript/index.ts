import { add, subtract } from '../build/Release/nexium.node'

/** Add Two Numbers */
export const addTwoNumbers = (a: number, b: number): number => {
  return add(a, b)
}

/** Subtract Two Numbers */
export const subtractTwoNumbers = (a: number, b: number): number => {
  return subtract(a, b)
}
