// 01 原型链综述
var proObj = {
    z:3
};

// proObj.prototype.z = 3;

var obj = Object.create(proObj);
obj.x = 1;
obj.y = 2;
console.log(obj.x);     // 1
console.log(obj.y);     // 2
console.log(obj.z);     // 3
console.log("z" in obj);                // true
console.log(obj.hasOwnProperty("z"));   // false   不是自身的


// 02 原型链属性操作
obj.z = 5;
console.log(obj.hasOwnProperty("z"));   // true
console.log(obj.z);         // 5
console.log(proObj.z);      // 3
obj.z = 8;
console.log(obj.z);         // 8
delete obj.z;               // true
console.log(obj.z);         // 3
delete obj.z;               // true
console.log(obj.z);         // 3


// 03 删除原型上的属性
delete  obj.__proto__.z;  // 或者 delete proObj.z;
console.log(obj.z);       // 此时彻底没有z了  undefined


// 注意：hasOwnProperty是原型方法   判断是不是它自己的属性
// 区别与Object.keys(obj)这种静态方法
// Object.keys() 返回所有自有（非继承）可枚举属性的键
// Object.getOwnPropertyNames()返回所有自有（非继承）键，包括不可枚举
// Object.prototype.hasOwnProperty() 判断自身是否有该属性，包括不可枚举的属性
// Object.prototype.propertyIsEnumerable() 判断自身是否有该属性并检测该属性是否可枚举


/************************************************/

function Person(age,name) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHi = function () {
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person(20,"Jack");
console.log(p1.name);     // Jack    
console.log(p1.age);      // 20 
p1.sayHi();               // Hi,i'm Jack


/************************************************/

function Person(name) {
    this.name = name;
    this.age = 21;
}
Person.prototype.sayHi = function () {
    console.log("Hi,i'm ",this.name,this.age,"years old!");
};

var p1 = new Person("Mike");
console.log(p1.name);       // Mike
console.log(p1.age);        // 21
p1.sayHi();                 // Hi,i'm  Mike 21 years old!

// name和age属性定义在p1上  ;   sayHi方法定义在p1的原型上

// 属性和方法定义在构造函数中和写在prototype上这两种情况的不同?
// 没有私有属性情况下，常将方法添加到构造函数的prototype属性上，实现方法共享
// 而属性根据情况来确定是定义在构造函数中,还是定义在构造函数的prototype（即实例化对象的原型上）属性上

console.log(p1.__proto__ === Person.prototype);     // true