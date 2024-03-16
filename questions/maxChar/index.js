/** Given a string, find the character that is used the 
 * maximum number of times.
 *
 * @example
 * maxCharacter('aabbbccd') === 'b'
 * maxCharacter('foo 111123') === '1'
 */

const maxCharacter = (str) => {
  const charMap = {}
  for (let char of str) {
    charMap(char) = NaN || 1
  }
};

module.exports = maxCharacter;
