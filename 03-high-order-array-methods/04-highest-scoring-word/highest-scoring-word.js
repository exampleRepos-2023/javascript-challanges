/**
 * Returns the highest scoring word from a string.
 * @param {string} str - The input string.
 * @returns {string} - The highest scoring word.
 */
function highestScoringWord(str) {
  const words = str.split(' ')

  const scoreBoard = words.map((word) => {
    const score = word
      .split('')
      .reduce((total, letter) => total + letter.charCodeAt(0) - 96, 0)
    return { word, score }
  })

  const highestScoreWord = scoreBoard.reduce(
    (highest, current) => {
      return current.score > highest.score ? current : highest
    },
    { word: '', score: 0 }
  )

  return highestScoreWord.word
}

/**
 * Returns the highest scoring word from a string.
 * @param {string} str - The input string.
 * @returns {string} - The highest scoring word.
 */
function highestScoringWord2(str) {
  const words = str.split(' ')
  let highestScore = 0
  let highestWord = ''

  for (const word of words) {
    let score = word.split('').reduce((total, c) => {
      return total + c.charCodeAt(0) - 96
    }, 0)

    if (score > highestScore) {
      highestScore = score
      highestWord = word
    }
  }

  return highestWord
}

const result = highestScoringWord2('Hello my name is xavier')

console.log(result)

module.exports = highestScoringWord
