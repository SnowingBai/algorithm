/**
 * 可获得的最大点数
 * @param {number[]} cardPoints 
 * @param {number} k 
 * @return {number}
 */
const maxScore = (cardPoints, k) => {
  const n = cardPoints.length
  const total = cardPoints.reduce((a, b) => a + b, 0)

  if (n <= k) {
    return total
  }

  const windowSize = n - k
  let sum = 0

  for (let i = 0; i < windowSize; i++) {
    sum += cardPoints[i]
  }

  let minSum = sum

  for (let j = windowSize; j < n; j++) {
    sum += cardPoints[i] - cardPoints[i - windowSize]
    minSum = Math.min(sum, minSum)
  }

  return total - minSumss
}

// 思路：
// 每次从头或尾抽取一张牌，并确保 k 张的总点数最大
// 滑动窗，抽取的最终结果一定是剩下连续的 n - k 张牌
// 使 n - k 张牌总点数最小，则可保证抽取出去的牌总点数最大