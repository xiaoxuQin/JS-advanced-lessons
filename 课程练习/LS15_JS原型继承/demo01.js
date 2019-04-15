// 用三种方式来创建对象
// 01  通过字面量方式创建JS对象
var obj = {
    num:10,
    str:'hi',
    show:function(){
        return this.str;
    }
};
console.log(obj.num);       // 10
console.log(obj.str);       // hi
console.log(obj.show());    // hi


// 02  通过Object工厂方法创建JS对象,
//     注：JS对象是通过原型链的方式实现的对象继承
var newObj = Object.create(obj);
newObj.age = 23;
console.log(newObj.num);    // 10
console.log(newObj.str);    // hi
console.log(newObj.show()); // hi
console.log(newObj.age);    //自有属性  23

var empty = {};
var obj2 = Object.create(empty, {
    x:{value:1},
    y:{value:2, enumerable:true}
});
console.log(obj2);      // {y: 2, x: 1}
console.log(obj2.hasOwnProperty("x"));  // true


// 03  构造函数的方式创建JS对象 
//     注：JS对象是通过原型链的方式实现的对象继承
function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function(){
    console.log("hello,i'm",this.name,this.age,"years old");
}
var person1 = new Person("Mike",21);
person1.sayName();      // hello,i'm Mike 21 years old


/********************************************************/

var obj = {
    num:10,
    str:'hi',
    show:function(){
        return this.str;
    }
};
console.log(obj.__proto__);
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(obj.__proto__ === Object.prototype);
// true

// 多个对象同一个原型的情况
var newObj = Object.create(obj);
var newObj2 = Object.create(obj);
newObj.age = 23;
console.log(newObj.__proto__ === obj);      // true
console.log(newObj2.__proto__ === obj);     // true

//JavaScript的继承方式 是对象-对象的继承，对象要实现继承首先要有原型对象
console.log(newObj.__proto__.__proto__);    
// Object.prototype
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(newObj.__proto__.__proto__.__proto__);  // null
