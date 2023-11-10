/**
 * Determines whether two strings are valid anagrams.
 * @param {string} str1 - The first string.
 * @param {string} str2 - The second string.
 * @returns {boolean} - True if the strings are valid anagrams, false otherwise.
 */
function validAnagrams(str1, str2) {
  const freq1 = str1.split('').reduce((acc, c) => {
    acc[c] = (acc[c] || 0) + 1
    return acc
  }, {})

  const freq2 = str2.split('').reduce((acc, c) => {
    acc[c] = (acc[c] || 0) + 1
    return acc
  }, {})

  return (
    Object.keys(freq1).every((char) => freq1[char] === freq2[char]) &&
    Object.keys(freq2).every((char) => freq2[char] === freq1[char])
  )
}

module.exports = validAnagrams
