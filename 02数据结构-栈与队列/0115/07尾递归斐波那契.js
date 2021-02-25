//  把前面两位数，当作参数传进来
const Fibonacci = (n, ac1 = 1, ac2 = 1) => {
  if (n <= 1) {
    return ac2;
  }

  return Fibonacci(n - 1, ac2, ac1 + ac2);
};

/* 
重复计算的问题
n = 5 ,Fibonacci(4)+Fibonacci(3)
n = 4,Fibonacci(3)+Fibonacci(2)
...
递归需要同时保存成百上千个调用帧。很容易就会发生栈溢出
但是对于尾递归来说。由于只存在一个调用栈，所以永远不会发生栈溢出错误
Fibonacci(50)
*/

console.log(Fibonacci(50));
