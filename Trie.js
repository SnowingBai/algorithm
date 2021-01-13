// 树
class Trie {
  constructor() {
    this.root = {}
    this.endOfWord = '$'
  }

  insert(word) {
    let node = this.root
    for (const ch of word) {
      node[ch] = node[ch] || {}
      node = node[ch]
    }
    node[this.endOfWord] = this.endOfWord
  }

  search(word) {
    let node = this.root
    for (const ch of word) {
      if (!node[ch]) return false
      node = node[ch]
    }
    return node[this.endOfWord] === this.endOfWord
  }

  startsWith(word) {
    let node = this.root
    for (const ch of word) {
      if (!node[ch]) return false
      node = node[ch]
    }

    return true
  }
}

let trie = new Trie()
console.log(trie.insert('apple'))
console.log(trie.search('apple')) // true
console.log(trie.search('app')) // false
console.log(trie.startsWith('app')) // true
console.log(trie.insert('app'))
console.log(trie.search('app')) // true
