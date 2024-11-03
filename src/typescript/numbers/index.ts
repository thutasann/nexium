import {
  clamp as clampFn,
  inRange as inRangeFn,
  roundTo as roundToFn,
  generateRandom as generateRandomFn,
  toOrdinal as toOrdinalFn,
} from '../../build/Release/nexium.node'

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

  /**
   * Function to round a number to a specific number of decimal places
   * @param num - given number
   * @param decimalPlaces - decimal places
   * @example
   * const result = NNumber.roundTo(3.14159, 2) // 3.14
   */
  static roundTo(num: number, decimalPlaces: number): number {
    return roundToFn(num, decimalPlaces)
  }

  /**
   * Function to generate random number between min and max (inclusive)
   * @param min - min number
   * @param max - max number
   * @returns random number
   */
  static generateRandom(min: number, max: number): number {
    return generateRandomFn(min, max)
  }

  /**
   * Function to generate ordinal string from a given number
   * @example
   * NNumber.toOrdinal(1) // '1st'
   * @param num - given number
   * @returns {string} - ordinal string
   */
  static toOrdinal(num: number): string {
    return toOrdinalFn(num)
  }
}
