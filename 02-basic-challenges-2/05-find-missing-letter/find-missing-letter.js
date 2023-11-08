/**
 * Returns the missing letter in an array of consecutive letters.
 * @param {string[]} arr - An array of consecutive letters.
 * @returns {string} - The missing letter.
 */
function findMissingLetter(arr) {
  if (arr.length === 0) return ''
  const first = arr[0].charCodeAt(0)
  const last = arr[arr.length - 1].charCodeAt(0)
  for (let i = first; i <= last; i++) {
    if (!arr.includes(String.fromCharCode(i))) return String.fromCharCode(i)
  }
}

module.exports = findMissingLetter
