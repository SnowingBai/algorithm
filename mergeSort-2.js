// 归并排序
const mergeSort = (arr) => {
  if (arr.length < 2) return arr

  let mid = Math.floor(arr.length / 2),
      left = arr.slice(0, mid),
      right = arr.slice(mid)
  
  return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
  let result = []

  while (left.length && right.length) {
    result.push(left[0] <= right[0] ? left.shift() : right.shift())
  }

  left.length && result.push(...left)
  right.length && result.push(...right)

  return result
}
