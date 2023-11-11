/**
 * Returns the result of raising the base to the power of the exponent.
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent.
 * @returns {number} - The result of the calculation.
 */
function power(base, exponent) {
  if (exponent === 0) return 1

  return power(base, exponent - 1) * base
}

module.exports = power
