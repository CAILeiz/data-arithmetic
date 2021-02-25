const arr = [20, 10, 4, 5, 8, 31, 0, 50, 1];

const selectionSore = (arr) => {
  let min, temp;
  // 外层比较次数
  for (let i = 0; i < arr.length - 1; i++) {
    // 最小值的下标
    min = i;
    // 假设最小值和后面的元素进行比较
    for (let j = i + 1; j < arr.length; j++) {
      // 寻找最小的值
      if (arr[j] < arr[min]) {
        min = j; // 将最小元素的下标保存起来
      }
    }
    // 交换位置
    temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
};

console.log(selectionSore(arr));
