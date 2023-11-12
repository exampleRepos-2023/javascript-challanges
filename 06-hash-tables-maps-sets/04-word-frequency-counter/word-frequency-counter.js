/**
 * Returns a map that represents the frequency of each word in the input string.
 * @param {string} str - The input string containing words.
 * @returns {Map<string, number>} - The map with word frequency.
 */
function wordFrequencyCounter(str) {
  if (str === '') return new Map()
  let wordFrequency = new Map()

  str
    .toLowerCase()
    .split(/\W+/)
    .map((word) => {
      if (word === '') return

      wordFrequency.set(word, (wordFrequency.get(word) || 0) + 1)
    })

  return wordFrequency
}

const result = wordFrequencyCounter(
  'The quick brown fox jumps over the lazy dog. The dog barks, and the fox runs away.'
)

console.log(result)

module.exports = wordFrequencyCounter
