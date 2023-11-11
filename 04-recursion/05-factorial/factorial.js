/**
 * Returns the factorial of a number.
 * @param {number} num - The number.
 * @returns {number} - The factorial of the number.
 */
function factorial(num) {
  if (num <= 1) return 1

  return num * factorial(num - 1)
}

module.exports = factorial
