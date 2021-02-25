const arr = [
  { name: '芳芳', age: 16 },
  { name: '甜甜', age: 15 },
  { name: '小周同学', age: 18 },
  { name: '微之风', age: 17 },
];

console.log(arr[2].name); // 通过索引的方式，查询效率很高

// 内容查询
for (let i = 0; i < arr.length; i++) {
  if (arr[i].name === '小周同学') {
    console.log(`${arr[i].name}又年轻又帅气`);
  }
}

// 数组通过索引查找效率很高，
const friend = [
  { id: 1, name: 'fangfang', eamil: 'fangfang@qq.com' },
  { id: 2, name: 'tiantian', eamil: 'tiantian@qq.com' },
];

// 链表