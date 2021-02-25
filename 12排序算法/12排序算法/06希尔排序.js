const arr = [8, 5, 6, 1, 7, 3, 2, 4];

const shellSort = (arr) => {
  // 根据数组的长度进行间隔分组
  let gap = Math.floor(arr.length / 2);
  // 间隔会不断变小
  while (gap > 0) {
    // 插入排序，实现插入排序
    // 外层循环控制
    for (let i = 0; i < arr.length; i++) {
      // 记录选出的元素，放在temp中
      let j = i;
      temp = arr[i];
      // 内层循环，当前值和之前的每个值进行比较，发现有比当前值小的值就进行重新赋值
      // 内层循环，我们是不确定循环的次数，while
      while (j > 0 && arr[j - 1] > temp) {
        arr[j] = arr[j - 1];
        j--;
      }
      // 选出来的j的位置放到temp中
      arr[j] = temp;
    }

    // 重新去计算间隔
    gap = Math.floor(gap / 2);
  }
  return arr;
};

console.log(shellSort(arr));
