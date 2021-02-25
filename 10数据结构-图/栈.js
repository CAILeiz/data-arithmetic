class Stack {
  constructor() {
    this.items = [];
  }

  // 入栈
  push(ele) {
    this.items.push(ele);
  }

  // 出栈
  pop() {
    return this.items.pop();
  }

  // 获取栈顶元素
  peek() {
    return this.items[this.items.length - 1];
  }

  // 判断栈中元素是否为空
  isEmpty() {
    return this.items.length === 0;
  }

  // 判断栈的元素个数
  size() {
    return this.items.length;
  }

  // 清空栈
  clear() {
    this.items = [];
  }
}
