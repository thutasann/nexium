import { twoSum as twoSumFn } from '../../build/Release/nexium.node'

/** Leetcode Methods */
export class NLeet {
  /** Two Sum LeetCode Solution */
  static twoSum(nums: number[], target: number): number[] {
    return twoSumFn(nums, target)
  }
}
