/**
 * 数组拆分 I
 * @param {number[]} nums 
 * @return {number}
 */
const arrayPairSum = (nums) => {
  nums.sort((a, b) => a - b)

  let ans = 0
  for (let i = 0; i < nums.length; i += 2) {
    ans += nums[i]
  }

  return ans
}

// 思路：
// 排序 + 两个成员一组 + 成员中第一个值分别相加
