/**
 * Returns the missing number in an array of unique numbers from 1 to n (inclusive).
 * @param {number[]} arr - The array of numbers.
 * @returns {number} - The missing number.
 */
function findMissingNumber(arr) {
  if (arr.length === 0) return 0

  const n = arr.length + 1
  const expectedSum = (n * (n + 1)) / 2
  const current = arr.reduce((acc, current) => {
    return acc + current
  }, 0)

  return expectedSum - current
}

module.exports = findMissingNumber
