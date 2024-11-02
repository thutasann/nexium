import { clamp as clampFn } from '../../build/Release/nexium.node'

/** Number Methods */
export class NNumber {
  /**
   * Function to restricts a number to be within a specified range
   * @param num - given number
   * @param min - min value
   * @param max - max value
   * @returns restricted number
   */
  static clamp(num: number, min: number, max: number): number {
    return clampFn(num, min, max)
  }
}
