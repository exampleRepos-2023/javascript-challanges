/**
 * Returns an array of indices of two numbers that add up to the target.
 * @param {number[]} nums - The input array of integers.
 * @param {number} target - The target sum.
 * @returns {number[]} - An array of indices of the two numbers.
 */
function twoSum(nums, target) {
  const numSet = new Set()

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (numSet.has(complement)) {
      return [nums.indexOf(complement), i]
    }
    numSet.add(nums[i])
  }

  return []
}

const result = twoSum([2, 7, 11, 15], 17)

console.log(result)

module.exports = twoSum
