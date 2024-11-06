import { bubbleSort as bubbleSortFn } from '../../build/Release/nexium.node'

/** Sorting Methods */
export class NSort {
  /**
   * Function to bubble sort the number array
   */
  static bubbleSort(arr: number[]): number[] {
    return bubbleSortFn(arr)
  }
}
