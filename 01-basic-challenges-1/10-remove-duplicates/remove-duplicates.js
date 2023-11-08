/**
 * Returns a new array with duplicates removed.
 * @param {any[]} arr - The array to remove duplicates from.
 * @returns {any[]} - The new array with duplicates removed.
 */
function removeDuplicates(arr) {
  let nodupe = []
  arr.forEach((e) => {
    if (!nodupe.includes(e)) {
      nodupe.push(e)
    }
  })
  return nodupe
}

module.exports = removeDuplicates
