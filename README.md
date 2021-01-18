# data-arithmetic
数据结构和算法
数据结构 分为数据的结构 和 存储的结构 
1. 数据的结构
集合结构,线性结构,树结构,图形结构
集合结构: 里面是一个个独立的个体包起来的
线性结构: 一对一 第一个元素没有首元素 最后一个元素没有尾元素 
在内存中是连续的数据 必须要有首元素和尾元素 
线性结构有数组 队列 栈 
树结构: 1对多
图结构: 的多对多

2. 存储结构
顺序存储, 链式存储 


## 数组 
线性表
优点: 查询快
缺点: 增删元素效率低 最好在数组的末尾进行元素的增删

## 栈 LIFO 后进先出 只能从栈顶增加元素或者删除元素
栗子: 
车库只有一个头能进去,只能从这个头出来
十进制转二进制就是最好的栗子
```javascript
    class Stack {
        constructor() {
            this.stack = []
        }
        push(item) {
            this.stack.push(item);
            return this.stack.length;
        }
        pop() {
            return this.stack.pop();
        }
        size() {
            return this.stack.length;
        }
        front() {
            return this.stack[0];
        }
        last() {
            return this.satck[this.stack.length - 1];
        }
        isEmpty() {
            return this.stack.length === 0;
        }
    }
    const binary = (number) => {
        let stack = new Stack();
        let remainder = 0;
        let top = "";

        while(number > 0) {
            remainder = number % 2;
            stack.push(remainder);
            // 向下取整
            number = Math.floor(number/2);
        }
        while(!stack.isEmpty()) {
            // 栈顶元素
            top += stack.pop();
        }
        return top;
    }

```


## 队列 队头队尾 先进先出
栗子:
车库有入口和出口
```javascript
    class Queue {
        constructor() {
            this.queue = []
        }
        push(item) {
            this.queue.push(item);
            return this.queue.length;
        }
        pop() {
            return this.queue.shift();
        }
        size() {
            return this.queue.length;
        }
        front() {
            return this.queue[0];
        }
        last() {
            return this.queue[this.queue.length - 1];
        }
        isEmpty() {
            return this.queue.length === 0;
        }
    }
```


## 任务队列
1. 任务队列:存在着两个队列，一个是宏任务队列，一个是微任务队列
2. 主线程:同步任务->微任务->宏任务
3. IO，定时器、事件绑定、ajax ...存在于宏任务队列里的
4. Promise.then catch finally process.nextTick都是存在微任务队列



## js单线程 EventLoop
1. 最先执行的是:同步代码，执行完毕以后，立即出栈，让出主线程
2. 同步代码执行完毕，立即出栈，此时主线程是出于:空闲状态
3. 主线程去读取任务队列，队列遵循的原则是先进先出，但是，有个条件，触发条件相等，会遵循先进先出，如果触发条件不相同，则优先执行到达触发条件的代码，等待0秒不是，主线程一有空就立即执行
[重复以上三个就是EventLoop]
