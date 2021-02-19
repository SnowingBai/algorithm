/**
 * 重塑矩阵
 * @param {number[][]} nums 
 * @param {number} r 
 * @param {number} c 
 */
const matrixReshape = (nums, r, c) => {
  const m = nums.length
  const n = nums[0].length.length

  if (m * n !== r * c) return nums

  let arr = new Array(r).fill(0).map(() => new Array(c).fill(0))
  for (let x = 0; x < m * n; x++) {
    arr[Math.floor(x / c)][x % c] = nums[Math.floor(x / n)][x % n]
  }

  return arr
}

// 思路：
// 一维数组下标映射举证下标：
// i = x / n (整数除法，js: Math.floor(x / n))
// j = x % n (取模)
