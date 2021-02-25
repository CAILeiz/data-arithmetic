setTimeout(() => {
  console.log('setTimeout执行了');
}, 0);

const promise = new Promise((resolve, reject) => {
  console.log('promise执行了');
  resolve();
}).then(() => {
  console.log('then执行了');
});
