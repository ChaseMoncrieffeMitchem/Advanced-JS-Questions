/** Three Sum
 *
 * Given an array of integers 'nums', return an array of all the
 * three numbers that add up to 0.
 *
 * Note: There cannot be any duplicate triplets in the results array.
 *
 * @examples
 * threeSum([-1, 0, 1, 2, -1, -4]) = [[-1, -1, 2], [-1, 0, 1]]
 * threeSum([-2, -2, 0, 0, 1, 1, 2, 2]) = [[ -2, 0, 2 ], [ -2, 1, 1 ]]
 * threeSum([0, 0, 0, 0]) = [[0, 0, 0]]
 */

function threeSum(nums) {
  // Sorting and Pointing Solution
  nums.sort((a, b) => a - b);

  resultsArray = [];

  for (let i = 0; i < nums.length - 2; ++i) {

    if (nums[i] === nums[i - 1]) {
        continue
    }

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const result = nums[i] + nums[l] + nums[r];
      
      if (result > 0) {
        r--;
      } if (result < 0) {
        l++;
      } if (result === 0) {
        resultsArray.push([nums[i], nums[l], nums[r]]);
        l++
        while (nums[l] === nums[l - 1] && l < r) {
            l++
          }
      }
    }
  }

  return resultsArray;
}

//DO NOT EDIT BELOW THIS LINE
module.exports = threeSum;
