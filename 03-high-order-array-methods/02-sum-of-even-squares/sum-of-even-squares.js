/**
 * Returns the sum of the squares of the even numbers in the array.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} - The sum of the squares of even numbers.
 */
function sumOfEvenSquares(numbers) {
  return numbers
    .filter((n) => n % 2 === 0)
    .map((e) => e ** 2)
    .reduce((acc, s) => acc + s, 0)
}

module.exports = sumOfEvenSquares
