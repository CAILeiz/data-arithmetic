console.time('耗时');
for (let a = 0; a <= 1000; a++) {
  for (let b = 0; b <= 1000; b++) {
    let c = 1000 - a - b;
    if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
      console.log(`[a、b、c]=>[${a}、${b}、${c}]`)
    }
  }
}
console.timeEnd('耗时');
