/**
 * Returns the missing letter in an array of consecutive letters.
 * @param {string[]} arr - An array of consecutive letters.
 * @returns {string} - The missing letter.
 */
function findMissingLetter(arr) {
  let start = arr[0].charCodeAt(0)

  const missingCharcode = arr.reduce((missing, char) => {
    const current = char.charCodeAt(0)
    if (current - start > 1 && missing === null) {
      missing = start + 1
    }

    start = current
    return missing
  }, null)

  return missingCharcode ? String.fromCharCode(missingCharcode) : ''
}

const result = findMissingLetter(['a', 'b', 'c', 'e'])

console.log(result)

module.exports = findMissingLetter
