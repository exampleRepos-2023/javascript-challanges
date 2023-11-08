/**
 * Returns whether the string is a valid email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Whether the email address is valid.
 */
function validateEmail(email) {
  if (email.indexOf('@') === -1) {
    return false
  }

  const [localPart, domain] = email.split('@')

  if (email.includes('@') && email.includes('.') && !email.startsWith('@')) {
    return true
  }
  return false
}

module.exports = validateEmail
