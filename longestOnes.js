/**
 * 最大连续1的个数III
 * @param {number[]} A 数组
 * @param {number} K 可改变 0 的个数
 * @return {number}
 */
const longestOnes = (A, K) => {
  const n = A.length
  const left = lsum = rsum = ans = 0

  for (let right = 0; right < n; right++) {
    rsum += 1 - A[right]
    while (lsum < rsum - K) {
      lsum += 1 - A[left]
      left++
    }

    ans = Math.max(ans, right - left + 1)
  }

  return ans
}

// 思路：
// 滑动窗口，统计左右两遍0最多的情况
// 对任意的右端点 right，希望找到最小的左端点 left，使得 [left, right] 包含不超过 K 个 0
// 只要枚举所有可能的右端点，将得到的区间的长度取最大值
