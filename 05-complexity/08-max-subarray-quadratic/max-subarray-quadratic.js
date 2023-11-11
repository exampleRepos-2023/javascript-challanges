/**
 * Finds the maximum sum of any subarray of length k in the input array using an O(n^2) solution.
 * @param {number[]} arr - The input array of integers.
 * @param {number} k - The length of the subarray.
 * @returns {number} - The maximum sum of any subarray of length k.
 */
function maxSubarraySum(arr, k) {
  let maxSum = 0

  for (let i = 0; i <= arr.length - k; i++) {
    let currentSum = 0

    for (let j = i; j < i + k; j++) {
      currentSum += arr[j]
    }

    maxSum = Math.max(maxSum, currentSum)
  }

  return maxSum
}

const arr1 = [2, 5, 3, 1, 11, 7, 6, 4]
const k1 = 3
console.log(maxSubarraySum(arr1, k1)) // Output: 24

const arr2 = [-2, -5, -3, -1, -11, -7, -6, -4]
const k2 = 4
console.log(maxSubarraySum(arr2, k2)) // Output: -9

module.exports = maxSubarraySum
