/**
 * Returns true if the string is a palindrome.
 * @param {string} str - The string to check.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  let normalizedText = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
  let reversedText = normalizedText
    .split('')
    .map((_, i, arr) => arr[arr.length - 1 - i])
    .join('')
  return normalizedText === reversedText
}

module.exports = isPalindrome
