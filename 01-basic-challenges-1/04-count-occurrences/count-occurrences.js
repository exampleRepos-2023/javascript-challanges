/**
 * Returns the number of occurrences of a character in a string.
 * @param {string} str - The string to search.
 * @param {string} char - The character to search for.
 * @returns {number} - The number of occurrences of the character in the string.
 */
function countOccurrences(str, char) {
  let count = 0
  for (const c of str.toLowerCase()) {
    c === char.toLowerCase() && count++
  }

  return count
}

module.exports = countOccurrences
