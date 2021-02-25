const arr = [12, 8, 24, 16, 1]; // 1 8 12 16 24
// 进行排序

// 控制比较的轮数
// 5个数只需要把4个最大的依次放到末尾即可
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1; j++) {
    // 如果当前值比后面的值大的，哪么就交换位置
    if (arr[j] > arr[j + 1]) {
      // 交换位置
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}

console.log(arr);
// 第一轮：12 > 8   交换位置    [8,12,24,16,1]
// 第一轮：12 > 24  不交换位置  [8,12,24,16,1]
// 第一轮：24 > 16  交换位置    [8,12,16,24,1]
// 第一轮：24 > 1   不交换位置  [8,12,16,1,24]

// [8,12,16,1,24]
// 第二轮比较
// 8 < 12 不交换位置
// 12 < 16 不交换位置
// 16 > 1 交换位置
//  8 12 1 16 24

const bubble = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      // 如果当前值比后面的值大的，哪么就交换位置
      if (arr[j] > arr[j + 1]) {
        // 交换位置
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

console.log(bubble(arr));
