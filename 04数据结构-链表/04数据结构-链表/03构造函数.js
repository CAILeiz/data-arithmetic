// 构造函数
function Teacher(name, hobby) {
  this.name = name;
  this.hobby = hobby;
  this.show = function () {
    console.log(`我的名字是${this.name},我的爱好是${this.hobby}`);
  };
}

var tiantian = new Teacher('甜甜', '吃饭睡觉打豆豆');
/* 
Teacher它就是一个普通的函数，但是这个函数的作用：构造对象
这种构造对象的方式：工厂方式
*/

// 每一个对象都有自己的show方法，这就会很浪费资源,如果有100个对象，那就是会有100个show方法
var fangfang = new Teacher('芳芳', '逛街看电影买包包');
console.log(tiantian.show === fangfang.show); 
