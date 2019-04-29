// 通过Object.create静态方法创建的对象的原型共享问题
var superObj = {
    x:1,
    y:2
};
var object1 = Object.create(superObj);
var object2 = Object.create(superObj);
object1.__proto__.x = 5;
console.log(object2.x); // 5
object1.x = 10;
console.log(object2.x);  // 5
////////////////////////////////////////////
var superObj = {
    x:1,
    y:2
};
var object1 = Object.create(superObj);
var object2 = Object.create(superObj);
object1.x = 10;
console.log(object2.x);  // 1



