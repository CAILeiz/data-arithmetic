function foo(n) {
  let item = 0; // 代码执行一次
  for (let i = 0; i < n; i++) {
    // 执行n次
    for (let j = 0; j < n; j++) {
      // 执行 了n * n 次
      item = item + i + j; // 执行了 n * n次
    }
  }
  return item; // 执行一次
}

// 执行次数：1+n+n*n*2+1 = 2+n+2n^2
