const arr = [20, 10, 4, 5, 8, 31, 0, 50, 1];

const insertSort = (arr) => {
  let temp = []; // 空数组

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
  return arr;
};

console.log(insertSort(arr));
