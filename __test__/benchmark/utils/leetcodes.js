// @ts-check

/**
 * two sum problem
 * @param {number[]} nums
 * @param {number} target
 */
function twoSum(nums, target) {
  const map = {}

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]

    if (map[complement] !== undefined) {
      return [map[complement], i]
    }

    map[nums[i]] = i
  }

  return null
}

module.exports = { twoSum }
