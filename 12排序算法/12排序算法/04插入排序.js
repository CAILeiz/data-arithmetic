// 9 6 2 3 1 8
// 9
// 6  6放前面，6 9 2 3 1 8
// 1 2 3 6 9 8

const arr = [20, 10, 4, 5, 8, 31, 0, 50, 1];
const inserSort = (arr) => {
  // 准备一个新数组，用来存储我们抓到的牌，从第一张开始
  const handle = [];
  handle.push(arr[0]); // 抓第一张牌

  // 从第二张牌，依次抓牌
  for (let i = 1; i < arr.length; i++) {
    let A = arr[i]; // 新抓的牌
    // 和手里的牌进行比较
    for (let j = handle.length - 1; j >= 0; j--) {
      // 每一次都要去比较
      let B = handle[j];

      // 如果A 比 B 大
      if (A > B) {
        // 从索引n 开始，不删除，把插入的数据添加到index的前面，修改原来的数组
        handle.splice(j + 1, 0, A);
        // 插入成功
        break;
      }
      // 直接放到开头 新牌放到最前面(新牌最小)
      if (j === 0) {
        handle.unshift(A);
      }
    }
  }
  return handle;
};

console.log(inserSort(arr));
