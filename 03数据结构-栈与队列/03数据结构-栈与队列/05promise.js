new Promise((resolve, reject) => {
  console.log(1);
  resolve();
}).then(() => {
  console.log(2);
});
console.log(3);


/* 
1.同步代码
1.new Promise的时候，excutor函数是立即执行的。（promise本身是同步的）
2.基于then或者catch存放的方法是异步的
*/