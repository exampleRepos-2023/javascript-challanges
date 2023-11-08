/**
 * Simulates the dice game.
 * @param {number} numSimulations - The number of times to simulate the dice game.
 * @returns {Array} - An array of simulation result objects.
 */
function diceGameSimulation(numSimulations) {
  const resultArray = []

  for (let i = 0; i < numSimulations; i++) {
    let dice1 = Math.floor(Math.random() * 6) + 1
    let dice2 = Math.floor(Math.random() * 6) + 1
    let sum = dice1 + dice2
    let gameResult = resultChecker(sum)
    resultArray.push({
      dice1: dice1,
      dice2: dice2,
      sum: sum,
      result: gameResult,
    })
  }

  return resultArray
}

function resultChecker(sum) {
  if (sum === 7 || sum === 11) {
    return 'win'
  } else if (sum === 2 || sum === 3 || sum === 12) {
    return 'lose'
  } else {
    return 'roll again'
  }
}

module.exports = diceGameSimulation
