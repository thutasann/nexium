import { twoSum as twoSumFn, longestSubstring as longestSubstringFn } from '../../build/Release/nexium.node'

/** Leetcode Solutions */
export class NLeet {
  /** Two Sum LeetCode Solution */
  static twoSum(nums: number[], target: number): number[] {
    return twoSumFn(nums, target)
  }

  /** Longest Substring Without Repeating Characters  */
  static longestSubstring(str: string): number {
    return longestSubstringFn(str)
  }
}
