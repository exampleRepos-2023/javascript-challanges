/**
 * Returns true if all characters in a string are unique.
 * @param {string} str - The string to check.
 * @returns {boolean} - Whether all characters in the string are unique.
 */
function areAllCharactersUnique(arr) {
  if (arr === '') return true

  let chatSet = new Set()

  for (const c of arr) {
    if (chatSet.has(c)) {
      return false
    }
    chatSet.add(c)
  }
  return true
}

module.exports = areAllCharactersUnique

function areAllCharactersUnique2(arr) {
  if (arr === '') return true

  let chatSet = []

  for (const c of arr) {
    if (chatSet.includes(c)) {
      return false
    }
    chatSet.push(c)
  }
  return true
}
