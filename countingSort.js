// 计数排序
const countingSort = (arr, maxValue) => {
  let bucket = new Array(maxValue + 1),
      sortedIndex = 0

  for (const val of arr) {
    if (!bucket[val]) {
      bucket[val] = 0
    }

    bucket[val]++
  }

  for (let [key, value] of bucket.entries()) {
    while (value) {
      arr[sortedIndex++] = key
      value--
    }
  }

  return arr
}
