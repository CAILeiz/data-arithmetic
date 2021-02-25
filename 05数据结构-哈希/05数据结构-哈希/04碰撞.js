const arr = [];
arr[1] = '芳芳';
arr[1] = '甜甜';
// 数组会覆盖
console.log(arr);

const loseloseHashCode = (key) => {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key[i].charCodeAt(); // 计算key unicode码
  }
  // 取模
  return hash % 37; // 37 是质数，可以很大程度上去避免碰撞
};

console.log(loseloseHashCode('money'));
console.log(loseloseHashCode('oxgbx'));