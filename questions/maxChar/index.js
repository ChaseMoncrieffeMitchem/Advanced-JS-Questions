/** Given a string, find the character that is used the 
 * maximum number of times.
 *
 * @example
 * maxCharacter('aabbbccd') === 'b'
 * maxCharacter('foo 111123') === '1'
 */

const maxCharacter = (str) => {
  // creat a character map

  charMap = {}
  let max = 0
  let maxChar = ""

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1
  }

  // Loop over every character in the character map
  for (let char in charMap) {
    if (charMap[char] > max) {
        max = charMap[char]
        maxChar = char
    }
    return maxChar
  }
    // If the value of the character is greater than max
      // set max to the value
      // set maxChar to the character

  // Return maxChar
};

module.exports = maxCharacter;
