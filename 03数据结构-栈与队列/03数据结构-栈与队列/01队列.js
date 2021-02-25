class Queue {
  constructor() {
    this.items = [];
  }
  
  // 入队操作
  enqueue(ele) {
    this.items.push(ele);
  }

  // 出队操作
  dequeue() {
    return this.items.shift();
  }

  // 查看队首元素
  front() {
    return this.items[0];
  }

  // 查看队尾
  rear() {
    return this.items[this.items.length - 1];
  }

  // 查看队列是否为空
  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

//  创建一个新的队列
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue('a');

// 出队
queue.dequeue();
queue.dequeue();

// 查看队首元素
console.log(queue.front());
// 队尾元素
console.log(queue.rear());

console.log(queue);
