// 结点类
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// 相对小的值：左边 相对较大的值：右边
// 二叉搜索树
class BinarySearchTree {
  constructor() {
    // 根结点
    this.root = null;
  }
  // 插入值的比较
  insertNode(node, newNode) {
    // 右边 大值
    if (newNode.value > node.value) {
      // 如果当前的值是空的
      if (node.right === null) {
        node.right = newNode;
      } else {
        // 递归调用
        this.insertNode(node.right, newNode);
      }
    } else if (newNode.value < node.value) {
      // 左边 小值
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    }
  }
  //  insert
  insert(value) {
    let newNode = new Node(value);
    // 空树，这个就是根结点
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  //  先序遍历
  preOrderTraversal(cb) {
    this.preOrderTraversalNode(this.root, cb);
  }
  preOrderTraversalNode(node, cb) {
    // 空结点直接返回
    if (node === null) return;
    // 打印
    cb(node.value);
    // 遍历所有的左子树
    this.preOrderTraversalNode(node.left, cb);
    // 遍历所有的右子树
    this.preOrderTraversalNode(node.right, cb);
  }

  // 中序遍历
  inOrderTraversal(cb) {
    this.inOrderTraversalNode(this.root, cb);
  }

  inOrderTraversalNode(node, cb) {
    if (node === null) return;
    this.inOrderTraversalNode(node.left, cb);
    cb(node.value);
    this.inOrderTraversalNode(node.right, cb);
  }

  // 后序遍历
  postOrderTraversal(cb) {
    this.postOrderTraversalNod(this.root, cb);
  }

  postOrderTraversalNod(node, cb) {
    if (node === null) return;
    this.postOrderTraversalNod(node.left, cb);
    this.postOrderTraversalNod(node.right, cb);
    cb(node.value);
  }
  // 最大值
  max() {
    let node = this.root;
    //  找到最右边的结点就是最大的值
    while (node.right !== null) {
      node = node.right;
    }
    return node.value;
  }

  // 最大值
  min() {
    let node = this.root;
    // 找到最左边的结点就是最小的值
    while (node.left !== null) {
      node = node.left;
    }
    return node.value;
  }

  // 寻找特定的值
  search(val) {
    // 获取根结点
    let node = this.root;
    // 通过判断node结点的值和传入的val大小
    while (node !== null) {
      if (node.value > val) {
        node = node.left;
      } else if (node.value < val) {
        node = node.right;
      } else {
        return true;
      }
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);

// console.log(bst);
const rst = [];
const cb = (val) => {
  rst.push(val);
};

bst.postOrderTraversal(cb);
// bst.preOrderTraversal(cb);
console.log(rst);
console.log(bst.max());
console.log(bst.min());
console.log(bst.search(3));
