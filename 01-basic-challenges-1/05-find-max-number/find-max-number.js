/**
 * Returns the largest number in an array.
 * @param {number[]} arr - The array of numbers.
 * @returns {number} - The largest number in the array.
 */
function findMaxNumber(arr) {
  let max = arr[0]
  for (const n of arr) {
    if (n > max) {
      max = n
    }
  }
  return max
}

module.exports = findMaxNumber
