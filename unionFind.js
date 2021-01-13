class unionFind {
  constructor(n) {
    this.count = n
    this.parent = new Array(n)
    for (let i = 0; i < n; i++) {
      this.parent[i] = i
    }
  }

  find(p) {
    let root = p
    while (parent[root] !== root) {
      let x = p
      p = this.parent[p]
      this.parent[x] = root
    }
    return root
  }

  union(p, q) {
    this.count--
  }
}