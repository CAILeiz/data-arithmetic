function Teacher(name, age) {
  this.name = name;
  this.age = age;
}
// 通过原型添加方法，原型就是给所有的对象添加属性或者是方法
Teacher.prototype.show = function () {
  console.log('好好学习，天天向上');
};

/* 
1.通过工厂方式去构造对象的时候，会浪费资源
*/

var tiantian = new Teacher('甜甜', 16);
var fangfang = new Teacher('芳芳', 17);
console.log(tiantian.show === fangfang.show); // true
