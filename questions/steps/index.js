/** Print out steps based on a given positive integer N.
 * For each line, print out the character '#' to demonstrate 
 * a step and make sure to use spaces to fill in the line.
 *
 * @example
 * steps(2)
 *  '# '
 *  '##'
 * steps(3)
 *  '#  '
 *  '## '
 *  '###'
 * steps(4)
 *  '#   '
 *  '##  '
 *  '### '
 *  '####'
 */

const steps = (n) => {
    for (let row = 0; row < n; ++row) {
        let steps = ""
        for (let column = 0; column < n; ++column) {
            if (column <= row) {
                steps += "#"
            }
            else {
                steps += " "
            }
        }
        console.log(steps)
    }
};

module.exports = steps;
