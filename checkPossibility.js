/**
 * 非递减数列
 * @param {number[]} nums 
 * @return {boolean}
 */
const checkPossibility = (nums) => {
  let decrease = 0
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      decrease++

      if (decrease > 1) return false

      if (i > 0 && nums[i + 1] < nums[i - 1]) {
        nums[i + 1] = nums[i]
      }
    }
  }

  return true
}

// 思路：
// 判断最多改变 1 个元素的情况下，改为非递减数列