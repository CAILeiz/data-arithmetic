const foo = (n) => {
  for (let i = 0; i < n; i++) {  // 循环次数是n
    for (let j = 0; j < n; j++) { //  循环次数是n
      console.log('hello world!'); // 
    }
  }
};

// O (n* n * 1) O(n^2)