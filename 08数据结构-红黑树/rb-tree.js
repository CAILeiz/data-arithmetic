const RED = 'red';
const BLACK = 'black';

//
class Node {
  constructor(index, value) {
    this.index = index;
    this.value = value;
    this.color = RED; // 这个结点，有一个color属性，默认的值是红色
  }

  left(node) {
    let tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    tmp.color = node.color;
    node.colder = RED;
    return tmp;
  }
}

// 遵守红黑树的五项特性：2，根节点必须是黑色 这棵树是空的，我们要构建一棵红黑树
this.color = BLACK;
