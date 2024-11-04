import {
  chunkArray as chunkArrayFn,
  uniqueArray as uniqueArrayFn,
  countNonRepeating as countNonRepeatingFn,
} from '../../build/Release/nexium.node'

/** Array Methods */
export class NArray {
  /**
   * Function to chunk the given array
   * @example
   * chunkArray([1, 2, 3, 4, 5, 6, 7], 3)
   */
  static chunkArray<T>(arr: T[], chunkLength: number): T[][] {
    return chunkArrayFn(arr, chunkLength)
  }

  /**
   * Function to create a unique array
   */
  static uniqueArray<T>(arr: T[]): T[] {
    return uniqueArrayFn(arr)
  }

  /**
   * Function to count non-repeating elements in an array
   */
  static countNonRepeating<T>(arr: T[], type: 'string' | 'number'): number {
    return countNonRepeatingFn(arr, type)
  }
}
