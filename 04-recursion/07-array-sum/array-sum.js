/**
 * Calculates the sum of an array of numbers using recursion.
 * @param {Array} arr - The array of numbers.
 * @returns {number} - The sum of the numbers.
 */
function arraySum(arr) {
  if (arr.length === 0) return 0

  return arraySum(arr.slice(1)) + arr[0]
}

module.exports = arraySum
