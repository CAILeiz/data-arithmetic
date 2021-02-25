const fib = (n) => {
  if (n <= 1) return 1;
  return fib(n - 2) + fib(n - 1);
};

// 递归求斐波那契数列 指数阶
