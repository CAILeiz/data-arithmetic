function Teacher(name, hobby) {
  this.name = name;
  this.hobby = hobby;
}

Object.prototype.toString = function () {
  console.log(`我的名字是${this.name},我的爱好是${this.hobby}`);
};

var tiantian = new Teacher('甜甜', '吃饭睡觉打豆豆');
tiantian.toString();

/* 
1.tiantian的构造函数是：Teacher，所有的引用类型，它的__proto__属性指向它的构造函数的prototype属性
2.Teacher.prototype是一个普通的对象，这个对象的构造函数是Object

var Teacher = new Object();
Teacher.name = '甜甜';
Teacher.hobby = '吃饭睡觉打豆豆';
2.Teacher.prototype是一个普通的对象，每一个普通对象的__proto__属性指向它的构造函数的prototype 属性


function Teacher() {}

console.log(Teacher.prototype.__proto__  === Object.prototype);

*/

