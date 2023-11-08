/**
 * Returns the first non-repeating character in a string.
 * @param {string} str - The string to search.
 * @returns {string | null} - The first non-repeating character in the string or null if there are no non-repeating characters.
 */
function findFirstNonRepeatingCharacter(str) {
  const charCount = {}

  for (const c of str) {
    // if already sett once +1 else 0
    charCount[c] = (charCount[c] || 0) + 1
    // if (charCount[c]) {
    //   charCount[c] += 1
    // } else {
    //   charCount[c] = 1
    // }
  }
  return str.split('').find((c) => charCount[c] === 1) || null
}

module.exports = findFirstNonRepeatingCharacter
