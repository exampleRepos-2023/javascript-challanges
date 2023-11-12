/**
 * Returns an array of arrays, where each sub-array contains words that are anagrams of each other.
 * @param {string[]} words - The input array of strings containing words.
 * @returns {string[][]} - The array of arrays with anagram groups.
 */
function anagramGrouping(words) {
  const anagramGroup = new Map()

  words.map((word) => {
    const sortedChars = word.split('').sort().join('')

    if (anagramGroup.has(sortedChars)) {
      anagramGroup.get(sortedChars).push(word)
    } else {
      anagramGroup.set(sortedChars, [word])
    }
  })

  return Array.from(anagramGroup.values())
}

module.exports = anagramGrouping
