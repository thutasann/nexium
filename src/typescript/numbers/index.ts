import { clamp as clampFn, inRange as inRangeFn } from '../../build/Release/nexium.node'

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

  /**
   * Function to check if a number falls within a specified range
   * @param num - given number
   * @param start - min value
   * @param end - max value
   * @returns booean value if fall within range or not
   */
  static inRange(num: number, start: number, end: number): boolean {
    return inRangeFn(num, start, end)
  }
}
