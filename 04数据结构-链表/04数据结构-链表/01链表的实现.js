// 结点类
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

// 链表
class LikedList {
  constructor() {
    // 链表头
    this.head = null;
    // 链表长度
    this.length = 0;
  }

  // 1、链表尾部追加元素
  append(element) {
    // 创建节点
    let node = new Node(element);
    // 如果链表是空的
    if (this.length === 0) {
      // 指向第一个节点
      this.head = node;
    } else {
      // 通过head找到后面的节点，找到最后一个节点
      let current = this.head;
      // 遍历，是否是最后一个节点，next 为空就是最后一个节点
      while (current.next) {
        current = current.next;
      }
      // while执行完毕以后,current已经是链表最后一项
      current.next = node;
    }
    // 增加长度(++也可以，有些语言不支持++,python不支持++)
    this.length += 1;
  }
  // 2、获取链表的头
  getHead() {
    return this.head;
  }

  // 3.toString 方法
  toString() {
    // 取出一个一个的节点，然后拼接成字符串
    // 拿到第一个节点节点
    let current = this.head;
    let linkString = '';
    // 循环获取链表中所有的元素
    while (current) {
      linkString += ',' + current.element;
      current = current.next;
    }
    // 3.返回最终结果 [,a,b,c,d],从第一位开始取
    return linkString.slice(1);
  }
  // 4.insert方法任意位置插入（节点，和一个位置）
  insert(element, position) {
    // 位置不能是负数,最大边界处理 总共才4个元素，不能插入到100到位置
    if (position < 0 || position > this.length) {
      return false;
    }
    // position > 1
    let index = 0;
    let current = this.head;
    // 上一个节点
    let privious = null;
    // 创建元素
    let node = new Node(element);
    // 判断插入的是不是第一个
    if (position === 0) {
      // 新节点next指向原来的head节点
      node.next = this.head;
      this.head = node;
    } else {
      while (index < position) {
        privious = current;
        current = current.next;
        index++;
      }
      node.next = current;
      privious.next = node;
    }

    // 长度加1
    this.length += 1;
    // 之前越界为return false
    return true;
  }

  // get获取对应位置的元素
  get(position) {
    // 越界判断
    if (position < 0 || position >= this.length) {
      return null;
    }
    // 获取对应的data
    let current = this.head;
    let index = 0;
    while (index < position) {
      current = current.next;
      index++;
    }
    return current.element;
  }

  // indexOf 获取对应的索引，如果不存在返回-1
  indexOf(element) {
    // 定义变量
    let current = this.head;
    let index = 0;
    // 开始查找
    while (current) {
      if (current.element === element) {
        return index;
      }
      current = current.next;
      index += 1;
    }
    // 没有找到
    return -1;
  }

  // 修改元素信息
  update(position, element) {
    // 越界判断
    if (position < 0 || position >= this.length) return false;

    // 查找正确的节点
    let current = this.head;
    let index = 0;
    while (index < position) {
      current = current.next;
      index++;
    }
    current.element = element;
    return true;
  }

  // 根据位置移除节点
  removeAt(position) {
    // 越界判断,等于length也是越界，length是从0开始，
    // 检测越界问题: 越界移除失败, 返回null
    if (position < 0 || position >= this.length) return null;
    // 2.定义变量, 保存信息
    let index = 0;
    let current = this.head;
    let previous = null;
    // 判断是否删除的第一个节点
    if (position === 0) {
      this.head = this.head.next;
    } else {
      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }
      previous.next = current.next;
    }
    // 4.length-1
    this.length--;

    // 5.返回移除的数据
    return current.element;
  }
  // 根据元素删除信息
  remove(element) {
    // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
    let position = this.indexOf(element);
    return this.removeAt(position);
  }

  // isEmpty
  isEmpty() {
    return this.length === 0;
  }
}

const likedlist = new LikedList();
likedlist.append(1);
likedlist.append(2);
likedlist.append(3);
likedlist.remove(1);
console.log(likedlist);
console.log(likedlist.toString());
