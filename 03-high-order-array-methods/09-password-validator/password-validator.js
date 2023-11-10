/**
 * Validates a password based on certain criteria.
 * @param {string} password - The password to be validated.
 * @returns {boolean} - True if the password is valid, false otherwise.
 */
function validatePassword(password) {
  if (password.length < 8) return false

  const hasUpperCase = password
    .split('')
    .some((c) => c === c.toUpperCase() && c !== c.toLowerCase())

  const hasLowerCase = password
    .split('')
    .some((c) => c === c.toLowerCase() && c !== c.toUpperCase())

  const hasNumber = password.split('').some((c) => !isNaN(parseInt(c, 10)))

  return hasUpperCase && hasLowerCase && hasNumber
}

module.exports = validatePassword
