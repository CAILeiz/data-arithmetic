const arr = [20, 10, 4, 5, 8, 31, 0, 50, 1];

// 拆分
const divide = (arr) => {
  if (arr.length === 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  console.log(left, right);
};

// divide(arr);

// 合并
const simpleMerage = (left, right) => {
  let temp = [];
  if (left[0] <= right[0]) {
    // 比较left的第一位和right的第一位谁小，小的就取出来放到temp数组
    temp.push(left.shift());
  } else {
    temp.push(right.shift());
  }

  return temp.concat(left,right);
};

// console.log(simpleMerage([31],[27]));

// 所有的元素进行合并
const merge = (left,right)=>{
  let temp = [];
  while(left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      // 比较left的第一位和right的第一位谁小，小的就取出来放到temp数组
      temp.push(left.shift());
    } else {
      temp.push(right.shift());
    }
  }
  return temp.concat(left,right);
}


const mergeSort = arr=>{
  if (arr.length === 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  // 归并
  return merge(mergeSort(left),mergeSort(right));
}

console.log(mergeSort(arr));