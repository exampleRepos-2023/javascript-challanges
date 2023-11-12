/**
 * Builds a phone number directory from an array of phone numbers.
 *
 * @param {string[]} phoneNumbers - An array of phone numbers in the format "Name:PhoneNumber".
 * @returns {Map<string, string>} - A Map with names as keys and corresponding phone numbers as values.
 */
function phoneNumberDirectory(phoneNumbers) {
  const phoneDict = new Map()

  phoneNumbers.map((dict) => {
    const split = dict.split(':')
    const name = split[0]
    const number = split[1]
    phoneDict.set(name, number)
  })

  return phoneDict
}

module.exports = phoneNumberDirectory
