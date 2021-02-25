function inner(x) {
  console.log(x);
}

function outer() {
  let m = 1;
  let n = 1;
  return inner(m + n);
}

outer();


// 等同于=>
function outer() {
  return inner(2)
}

outer()


inner(2)

/* 尾调用 */
function a(x) {}

function b(x){
  return a(x)
}

// 尾调用自身就是尾递归
// 尾递归只存在一个调用帧