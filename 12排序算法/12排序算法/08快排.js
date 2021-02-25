const arr = [20, 10, 4, 5, 8, 31, 0, 50, 1];
const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  // 中间基准索引
  const pivotIndex = Math.floor(arr.length / 2);
  // 基准元素
  const pivot = arr.splice(pivotIndex, 1)[0];

  const left = [];
  const right = [];

  arr.map((item) => {
    if (item < pivot) {
      left.push(item);
    } else {
      right.push(item);
    }
  });
  return quickSort(left).concat(pivot, quickSort(right)); // 分治
};

console.log(quickSort(arr));
