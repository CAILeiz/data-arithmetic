class Stack {
  constructor() {
    this.items = [];
  }

  //  添加一个元素到栈顶
  push(ele) {
    this.items.push(ele);
  }

  //  出栈
  pop() {
    return this.items.pop();
  }

  // 返回栈顶元素
  peek() {
    return this.items[this.items.length - 1];
  }

  // 判断栈中元素是否为空
  isEmpty() {
    return this.items.length === 0;
  }

  // 获取栈中的元素的个数
  size() {
    return this.items.length;
  }

  // 清空栈
  clear() {
    this.items = [];
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack);
console.log(stack.peek());
stack.clear();
console.log(stack.isEmpty());

//  十进制转二进制
const binary = (number) => {
  let stack = new Stack();
  let remainder = 0;
  let top = '';

  while (number > 0) {
    // 除以2取余数
    remainder = number % 2; 
    stack.push(remainder);
    // 向下取整
    number = Math.floor(number / 2);
  }

  // 不为空的时候
  while (!stack.isEmpty()) {
    // 栈顶元素
    top += stack.pop();
  }

  return top;
};


console.log(binary(120));


let a = 25;
let b = 2;
console.log(a % b);