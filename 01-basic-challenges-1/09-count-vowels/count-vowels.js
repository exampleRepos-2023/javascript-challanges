/**
 * Returns the number of vowels in a string.
 * @param {string} str - The string to search.
 * @returns {number} - The number of vowels in the string.
 */
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let count = 0
  for (const c of str.toLowerCase()) {
    vowels.includes(c) && count++
  }
  return count
}

module.exports = countVowels
