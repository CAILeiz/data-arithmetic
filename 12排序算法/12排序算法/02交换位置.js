// 第三方变量
let c = null;
let a = 10;
let b = 20;

// c = a; // a的值赋给了 c ,c = 10
// a = b; // b 的值赋给了a  a = 20
// b = c; // c 的值赋给了b
// console.log(a, b);

// // 解构赋值
// [a, b] = [b, a];
// console.log(a, b);

// 加减运算
a = a + b;  // b = a+b-b => b = a
b = a - b; 
a = a - b;
console.log(a, b);
