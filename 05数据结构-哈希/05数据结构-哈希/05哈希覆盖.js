class HashTable {
  constructor() {
    this.table = []; // 哈希表
  }

  // 哈希函数
  loseloseHashCode(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key[i].charCodeAt(); // 计算key unicode码
    }
    // 取模
    return hash % 37; // 37 是质数，可以很大程度上去避免碰撞
  }

  // 新增元素
  put(key, value) {
    // 获取key
    const position = this.loseloseHashCode(key);
    this.table[position] = value;
  }

  //  移除元素
  remove(key) {
    this.table[this.loseloseHashCode(key)] = undefined;
  }

  // 获取元素
  get(key) {
    return this.table[this.loseloseHashCode(key)];
  }
}

const hasttable = new HashTable();
hasttable.put('money', 'fangfang@qq.com');
hasttable.put('oxgbx', 'tiantian@qq.com');
// 被覆盖了
console.log(hasttable.get('money'));
