/**
 * Returns the intersection of two arrays.
 * @param {number[]} arr1 - The first array.
 * @param {number[]} arr2 - The second array.
 * @returns {number[]} - The intersection of the two arrays.
 */
function arrayIntersection(arr1, arr2) {
  let intersected = []
  for (const e of arr1) {
    arr2.includes(e) && !intersected.includes(e) && intersected.push(e)
  }
  return intersected
}

module.exports = arrayIntersection
