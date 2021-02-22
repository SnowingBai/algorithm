/**
 * 托普利茨矩阵
 * @param {number[]} matrix 
 * @return {boolean}
 */
const isToeplitzMatrix = (matrix) => {
  const m = matrix.length
  const n = matrix[0].length

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] !== matrix[i - 1][j - 1]) {
        return false
      }
    }
  }

  return true
}

// 思路：
// 判断对角线数据是否一样
// 即判断 matrix[i][j] 与 matrix[i - 1][j - 1] 是否相等
