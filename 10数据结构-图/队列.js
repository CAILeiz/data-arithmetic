class Queue {
  constructor() {
    this.items = [];
  }

  // enter queue方法
  enqueue(ele) {
    this.items.push(ele);
  }

  // delete queue方法
  dequeue() {
    return this.items.shift();
  }

  // 查看前端的元素
  front() {
    return this.items[0];
  }

  // 查看队列的尾端元素
  rear() {
    return this.items[this.items.length - 1];
  }

  // 查看队列是否为空
  isEmpty() {
    return this.items.length === 0;
  }

  // 查看队列中元素的个数
  size() {
    return this.items.length;
  }

  clear(){
  	this.items = [];
  }
}

// 创建队列实例
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

// delete queue
queue.dequeue();

// 查看队列的前端
console.log(queue.front());
console.log(queue.rear());


console.log(queue);
