// 创建对象（三种方法）
// 01. 通过字面量的方式创建
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.num);   // 10
console.log(obj.str);   // Hi
console.log(obj.show());    // Hi
console.log(obj.__proto__);
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, 
// hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(obj.__proto__ === Object.prototype);    // true

// 02. 通过Object工厂方法创建对象， 
// 注：JS对象是通过原型链的方式实现的对象继承
var newObj = Object.create(obj);  // newObj的原型是obj
newObj.age = 23;
console.log(newObj.num);    // 10
console.log(newObj.str);    // Hi
console.log(newObj.show()); // Hi
console.log(newObj.age);    // 23 自有属性 
console.log(newObj.__proto__);  // {num: 10, str: "Hi", show: ƒ}
console.log(newObj.__proto__ === obj);  // true

/*  Object.create的第二个参数
o = {};
// 以字面量方式创建的空对象就相当于:
o = Object.create(Object.prototype);
o = Object.create(Object.prototype, {
    // foo会成为所创建对象的数据属性
    foo: {
        writable:true,
        configurable:true,
        value: "hello"
    },
    // bar会成为所创建对象的访问器属性
    bar: {
        configurable: false,
        get: function() { return 10 },
        set: function(value) {
            console.log("Setting `o.bar` to", value);
        }
    }
});
*/

// 03. 构造函数的方式创建对象
// 注：JS对象是通过原型链的方式实现的对象继承
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function(){
    console.log("hello,i'm",this.name,this.age,"years old");
};
var person1 = new Person("Mike",21);
person1.sayName();
// hello,i'm Mike 21 years old

//注意：
var objStr = new Object("xxx");
console.log(typeof objStr); // object
console.log(objStr instanceof String);  // true

var objNum = new Object(23);
console.log(typeof objNum); // object
console.log(objNum instanceof Number);  // true

var objBoolean = new Object(true);
console.log(typeof objBoolean); // object
console.log(objBoolean instanceof Boolean); // true
