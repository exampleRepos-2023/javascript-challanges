/**
 * Returns the length of the longest consecutive sequence in the array.
 * @param {number[]} nums - An array of integers.
 * @returns {number} - The length of the longest consecutive sequence.
 */
function longestConsecutiveSequence(nums) {
  const numSet = new Set(nums)
  let longestSequence = 0

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num
      let currentSequence = 1

      while (numSet.has(currentNum + 1)) {
        currentNum++
        currentSequence++
      }

      longestSequence = Math.max(longestSequence, currentSequence)
    }
  }

  return longestSequence
}

const result = longestConsecutiveSequence([100, 4, 200, 1, 3, 2])

console.log(result)

module.exports = longestConsecutiveSequence
