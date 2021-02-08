/**
 * 最长湍流子数组（动态规划）
 * @param {number[]} arr 
 * @return {number}
 */
const maxTurbulenceSize = (arr) => {
  let dp0 = dp1 = res = 1

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      dp0 = dp1 + 1
      dp1 = 1
    } else if (arr[i] < arr[i - 1]) {
      dp1 = dp0 + 1
      dp0 = 1
    } else {
      dp0 = dp1 = 1
    }

    res = Math.max(res, dp0)
    res = Math.max(res, dp1)
  }

  return res
}

/**
 * 最长湍流子数组（滑动窗）
 * @param {number[]} arr 
 * @return {number}
 */
const maxTurbulenceSize = (arr) => {
  let left = right = 0

  while (right < n - 1) {
    if (left === right) {
      if (arr[left] === arr[left + 1]) {
        left++
      }
      right++
    } else {
      if (arr[right] < arr[right - 1] && arr[right] < arr[right + 1]) {
        right++
      } else if (arr[right] > arr[right - 1] && arr[right] > arr[right + 1]) {
        right++
      } else {
        left = right
      }
    }

    res = Math.max(res, right - left + 1)
  }

  return res
}

// 思路：
// 数组满足 ↗↘↗↘ 或 ↘↗↘↗
// 双指针（滑动窗）或动态规划（空间优化数组改为两个变量）