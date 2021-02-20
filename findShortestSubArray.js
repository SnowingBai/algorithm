/**
 * 数组的度
 * @param {number[]} nums 
 * @return {number}
 */
const findShortestSubArray = (nums) => {
  let map = {}

  for (const [i, num] of nums.entries()) {
    if (num in map) {
      map[num][0]++
      map[num][2] = i
    } else {
      map[num] = [1, i, i]
    }
  }

  let minLen = maxCount = 0
  for (const [count, left, right] of Object.values(map)) {
    if (maxCount < count) {
      maxCount = count
      minLen = right - left + 1
    } else if (maxCount === count) {
      if (minLen > right - left + 1) {
        minLen = right - left + 1
      }
    }
  }

  return minLen
}

// 思路：
// 哈希表
