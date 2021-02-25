console.log(1);
setTimeout(() => {
  console.log(2);
}, 50);
setTimeout(() => {
  console.log(3);
}, 50); // 主线程一有空立即执行。
console.log(4);
