// 空间复杂度是常数阶
const foo = (n) => {
  let j = 0; // 开辟空间， js是弱类型的，int = 4个字节
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

// 空间复杂度是 o(N)
const bar = (n) => {
  const arr = []; // arr 所占用的空间根据n所占用的空间来决定 
  // js是弱类型的
  for (let i = 0; i < n.length; i++) {
    arr.push(i); //
  }
  return arr;
};

console.log(bar([1, 2, 3, 4, 5])); // int 1 = 4个字节，4*4 = 16

/* 
不要在循环体里边不停的声明变量，只改变值的话是不会加深空间复杂度的
int i = 100;
标记清除：进入环境的
引用计数：
js垃圾回收机制
v8: 新生代 老生代 
*/
