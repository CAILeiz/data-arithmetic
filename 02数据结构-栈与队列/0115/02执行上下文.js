const one = () => {
  two();
  console.log('我是one');
};

const two = () => {
  console.log('我是two');
};

one();
