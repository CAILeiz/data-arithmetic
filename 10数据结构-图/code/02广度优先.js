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

  clear() {
    this.items = [];
  }
}

class Graph {
  constructor() {
    // 顶点
    this.vertiecs = [];
    // 存储全部的边
    this.edgeList = {};
    /* 
    A:['B','C','D'] => 键值对
    */
  }

  addVerTex(v) {
    // 添加顶点
    this.vertiecs.push(v);
    // 存储边
    this.edgeList[v] = []; // A:['B','C','D']
  }

  // 添加边
  addEdge(a, b) {
    // 无向图，实现：A与B相连接的同时，需要去实现B与A相连接
    this.edgeList[a].push(b);
    this.edgeList[b].push(a);
  }

  // 添加toString()
  toString() {
    let rst = '';
    for (let i = 0; i < this.vertiecs.length; i++) {
      // 顶点
      let vertex = this.vertiecs[i];
      rst += `${vertex}=>`;
      // 边
      let egde = this.edgeList[vertex];
      for (let j = 0; j < egde.length; j++) {
        rst += egde[j];
      }
      rst += '\n';
    }
    return rst;
  }

  //  初始化颜色
  /* 
    1. 白色（未发现）
    2. 灰色（已经发现）
    3. 黑色（已经探索）
  */
  initColor() {
    let colors = {};

    for (let i = 0; i < this.vertiecs.length; i++) {
      // 所有的顶点的颜色设置为白色
      colors[this.vertiecs[i]] = 'white';
    }

    return colors;
  }

  // 广度优先
  bfs(v, callback) {
    // 将全部的顶点都设置为白色
    let color = this.initColor();
    /* 
    color = {
      'A':'white',
      'B':'white',
      'C':'white',
      'D':'white',
    }
    */

    // 创建队列
    let queue = new Queue();
    // 从 v 开始遍历
    queue.enqueue(v);

    // 从队列中依次取出和放入数据
    while (!queue.isEmpty()) {
      // A 出列
      const qVertex = queue.dequeue();
      // 获取A所有的边
      const edge = this.edgeList[qVertex];
      // 遍历所有的边
      for (let i = 0; i < edge.length; i++) {
        // 当前顶点
        const e = edge[i];
        if (color[e] === 'white') {
          // 未发现的顶点全部入列
          color[e] = 'gray';
          // 顶点入列
          queue.enqueue(e);
        }
      }
      // A 已经探索，为黑色
      color[qVertex] = 'black';

      if (callback) {
        callback(qVertex);
      }
    }
  }
  // 递归去实现去深度优先
  dfsVisit(v, color, callback) {
    // 修改颜色为灰色
    color[v] = 'gray';

    // 已经被访问到了
    if (callback) {
      callback(v);
    }

    // 获取所有的边
    let edge = this.edgeList[v];
    // 遍历所有的边
    for (let i = 0; i < edge.length; i++) {
      // 当前边
      let e = edge[i];
      if (color[e] === 'white') {
        // 递归调用
        this.dfsVisit(e, color, callback);
      }
    }
    // 设置为黑色
    color[v] = 'black';
  }
  // 深度优先
  dfs(v, callback) {
    const color = this.initColor();
    this.dfsVisit(v, color, callback);
  }
}

const graph = new Graph();
// 添加顶点
graph.addVerTex('A');
graph.addVerTex('B');
graph.addVerTex('C');
graph.addVerTex('D');
graph.addVerTex('E');
graph.addVerTex('F');

// 添加边
graph.addEdge('A', 'B');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');

// 调用广度优先算法
console.log('广度优先');
graph.bfs('A', (e) => {
  console.log(e);
});

// 调用深度优先
console.log('深度优先');
graph.dfs('A', (e) => {
  console.log(e);
});
