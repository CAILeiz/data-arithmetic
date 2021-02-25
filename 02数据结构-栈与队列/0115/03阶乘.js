const factor = (n) => {
  // 递归要有出口
  if (n === 1) {
    return 1;
  }
  return n * factor(n - 1);
};

console.log(factor(10));
