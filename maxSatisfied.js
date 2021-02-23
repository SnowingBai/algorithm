/**
 * 爱生气的书店老板
 * @param {number[]} customers 
 * @param {number[]} grumpy 
 * @param {number} X 
 * @return {number}
 */
const maxSatisfied = (customers, grumpy, X) => {
  const n = customers.length
  let count = 0

  for (let i = 0; i < n; i++) {
    if (grumpy[i] < 1) {
      count += customers[i]
    }
  }

  let increase = 0
  for (let i = 0; i < X; i++) {
    increase += customers[i] * grumpy[i]
  }

  let maxIncrease = increase
  for (let i = X; i < n; i++) {
    increase += customers[i] * grumpy[i] - customers[i - X] * grumpy[i - X]
    maxIncrease = Math.max(maxIncrease, increase)
  }

  return count + maxIncrease
}

// 思路：
// 滑窗 + 找出增量最大的连续数据和
// 初始和 + 增量最大和