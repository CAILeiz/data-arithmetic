const md5 = require('md5-node');
const password = 123456;
const teacher = '甜甜老师';
const fangfang = '芳芳老师';
const long =
  'abcdefghijklmn12312134290428971321abcdefghijklmn12312134290428971321abcdefghijklmn12312134290428971321abcdefghijklmn12312134290428971321';

console.log(md5(password));
console.log(md5(teacher));
console.log(md5(fangfang));
console.log(md5(long));
