/**
 * Checks if a given string is a valid IPv4 address.
 * @param {string} input - The input string to check.
 * @returns {boolean} - True if the input is a valid IPv4 address, false otherwise.
 */
const isValidIPv4 = (input) => {
  const octets = input.split('.')
  if (octets.length !== 4) return false

  return octets.every((octet) => {
    const num = parseInt(octet)
    return num <= 255 && num >= 0 && octet.charAt(0) > 0
  })

  // for (const octets of parts) {
  //   if (octets > 255 || octets < 0 || octets.charAt(0) < 1) {
  //     return false
  //   }
  // }
  // return true
}

module.exports = isValidIPv4
