const Fibonacci = (n) => {
  if (n <= 1) {
    return 1;
  }
  return Fibonacci(n - 1) + Fibonacci(n - 2);
};


console.log(Fibonacci(50));