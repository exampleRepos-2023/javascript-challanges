/**
 * Generates a hashtag from the input string.
 * @param {string} str - The input string.
 * @returns {string|boolean} - The generated hashtag string or false.
 */
function generateHashtag(str) {
  if (!str.trim() || str.trim().length > 140) {
    return false
  }

  return str
    .trim()
    .split(/\s+/)
    .reduce((acc, current) => {
      acc += current.charAt(0).toUpperCase() + current.substring(1)
      return acc
    }, '#')
}

module.exports = generateHashtag
