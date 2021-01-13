// 递归
const recursion = (level, params) => {
  // recursion terminator
  if (level > MAX_LEVEL) {
    process_result
    return
  }

  // process current leven
  process(level, params)

  // trill down
  recursion(level + 1, params)

  // clean current level status if needed
}