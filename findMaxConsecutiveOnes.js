/**
 * 最大连续 1 的个数
 * @param {number[]} nums 
 * @return {number}
 */
const findMaxConsecutiveOnes = (nums) => {
  let count = maxCount = 0

  for (const num of nums) {
    maxCount = Math.max(maxCount, count = num === 0 ? 0 : count + 1)
  }

  return maxCount
}
