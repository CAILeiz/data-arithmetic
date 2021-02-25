const factor = (n,total) =>{
  if (n === 1) {
    return total;
  }
  return factor(n-1, n * total)
}

// 初始值
console.log(factor(10,1));