/** Reverse the provided string.
 *
 * @example
 * reverse('david') === 'divad'
 * reverse('frontend') === 'dnetnorf'
 * reverse('Simplified!') === '!deifilpmiS'
 */

// 'David' => ['D', 'a', 'v', 'i', 'd']
// a = '', c = 'D' => a = 'D' + '' = 'D'
// a = 'D', c = 'a' => a = 'a' + 'D' = 'aD'
// a = 'aD', c = 'v' => a = 'v' + 'aD' = 'vaD'
// a = 'vaD', c = 'i' => a = 'i' + 'vaD' = 'ivaD'
// a = 'ivaD', c = 'd' => a = 'd' + 'ivaD' = 'divaD'

// FIRST SOLUTION 

// const reverseString = (str) => {
//     let reversed = '';

//     for (let i = 0; i < str.length; ++i) {
//         reversed = str[i] + reversed;
//     }

//     return reversed;
// };

// SECOND SOLUTION - char of str; or elem of arr

// const reverseString = (str) => {
//     let reversed = ''

//     for (let char of str) {
//         reversed = char + reversed 
//     }

//     return reversed
// }

// THIRD SOLUTION - convert string to array, reverse it, then back to string

// const reverseString = (str) => {
//     return str.split('').reverse().join('')
// }

// FOURTH SOLUTION - REDUCE 

const reverseString = (str) => {
    return str.split('').reduce((accumulator, currentValue) => (
        currentValue + accumulator
    ), '')
}

module.exports = reverseString;
