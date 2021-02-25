function Teacher(name, hobby) {
  this.name = name;
  this.hobby = hobby;
  this.say = function () {
    console.log('你看看你，一天天就知道吃吃睡睡');
  };
}

// 构造方法是空的，
function Tiantian() {}

// 原型链的机制：利用原型让一个引用类型继承另外一个引用类型的属性和方法
Tiantian.prototype = new Teacher('芳芳', '吃饭睡觉打豆豆');
var tiantian = new Tiantian();
tiantian.say();
