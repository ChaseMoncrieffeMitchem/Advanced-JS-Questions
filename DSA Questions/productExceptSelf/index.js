/** Product of Array except Self:
 *
 * Write a function that takes in an array of integers 'nums' and
 * returns an array with the product of all integers except the current integer.
 * 
 * Note: You can not use the division operator 
 * 
 * Follow up: Can you do this in constant space? The results array does NOT count to the space.
 *
 * @examples
 * productExceptSelf([1, 2, 3, 4]) -> [24, 12, 8, 6]
 * productExceptSelf([3, 2, 6, 1]) -> [12, 18, 6, 36]
 * productExceptSelf([10, 1, 5, 2]) -> [10, 100, 20, 50]
 */

const productExceptSelf = (nums) => {
    const resultsArray = []
    resultsArray[0] = 1

    for (let i = 1; i < nums.length; ++i) {
        resultsArray[i] = nums[i - 1] * resultsArray[i - 1]
    }

    let rightProducts = 1
    for (let i = nums.length - 1; i>= 0; --i) {
        resultsArray[i] = resultsArray[i] * rightProducts
        rightProducts = rightProducts * nums[i]
    }

    return resultsArray
};

module.exports = productExceptSelf;
