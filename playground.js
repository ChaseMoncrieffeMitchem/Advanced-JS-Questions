const nums = [1, 2, 3, 4]
const target = 13

const productExceptSelf = (nums) => {
  const leftProducts = []
  const rightProducts = []
  const resultsArray = []

  leftProducts[0] = 1
  rightProducts[nums.length - 1] = 1

  for (let i = 1; i < nums.length; ++i) {
      leftProducts[i] = nums[i - 1] * leftProducts[i - 1]
  }

  for (let i = nums.length - 2; i>= 0; --i) {
      rightProducts[i] = nums[i + 1] * rightProducts[i + 1]
  }

  return rightProducts[i]
};