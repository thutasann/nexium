import { bubbleSort as bubbleSortFn, quickSort as quickSortFn } from '../../build/Release/nexium.node'

/** Sorting Methods */
export class NSort {
  /**
   * Function to bubble sort the number array
   */
  static bubbleSort(arr: number[]): number[] {
    return bubbleSortFn(arr)
  }

  /**
   * Function to quick sort the number array
   */
  static quickSort(arr: number[]): number[] {
    return quickSortFn(arr)
  }
}
