/**
 * Returns the reverse of a string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reverse of the string.
 */
function reverseString(str) {
  let reversed = ''
  str.split('').map((char) => (reversed = char + reversed))
  return reversed
}

module.exports = reverseString
