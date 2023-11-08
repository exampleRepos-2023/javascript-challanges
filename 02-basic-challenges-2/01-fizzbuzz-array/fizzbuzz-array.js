/**
 * Returns an array of numbers from 1 to the number passed in.
 * @param {number} num - The number to loop up to.
 * @returns {any[]} - The array of numbers.
 */
function fizzBuzzArray(arr) {
  let fizzBuzzArray = []
  for (let i = 1; i <= arr; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizzBuzzArray.push('FizzBuzz')
    } else if (i % 3 === 0) {
      fizzBuzzArray.push('Fizz')
    } else if (i % 5 === 0) {
      fizzBuzzArray.push('Buzz')
    } else {
      fizzBuzzArray.push(i)
    }
  }
  return fizzBuzzArray
}

module.exports = fizzBuzzArray
