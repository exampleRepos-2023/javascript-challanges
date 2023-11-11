/**
 * Returns a flattened array.
 * @param {number[]} arr - The array containing nested arrays.
 * @returns {number[]} - The flattened array.
 */
function flattenArray(arr) {
  let result = []

  for (const item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item))
    } else {
      result.push(item)
    }
  }

  return result
}

const result = flattenArray([1, 2, 3, [4, 5, [6, 7, 8], 9], 10])

console.log(result)

module.exports = flattenArray
