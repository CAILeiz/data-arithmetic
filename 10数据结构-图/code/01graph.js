// 存储顶点和边，顶点可以使用数组用存储
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
graph.addEdge('B', 'F');
graph.addEdge('B', 'E');
graph.addEdge('A', 'C');
graph.addEdge('C', 'D');
graph.addEdge('A', 'D');
// console.log(graph);
console.log(graph.toString());
