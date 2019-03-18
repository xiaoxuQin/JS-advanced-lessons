/*              函数对象属性                */
/////  11111111111. arguments  实参集合 （类似数组的一个对象）
var foo = function (a, b) {
    console.log(arguments); // 类似数组的一个对象
    // Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    // arguments 是 Symbol 类型，独一无二的
    console.log(arguments === test.arguments);
    // 报错 test is not defined
    console.log(arguments.length);  // 4
    var args = Array.prototype.splice.call(arguments, 0);
    // call 的使用
    // Array.prototype.splice()方法 : 
    // splice增加或删除数组的内容，会改变数组
    // 当splice只有一个参数的时候 表示删除索引到第几个的元素
    console.log(args);  //  [1, 2, 3, 4]
    console.log(arguments);  
    // Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]

    // Array.prototype.slice.call(arguments): 强制转化arguments为数组格式
};
foo(1, 2, 3, 4);

/////  22222222222. length 形参个数
function checkVarCount(a, b) {
    if (checkVarCount.length !== arguments.length) {
        alert("The count of the parameters you passed into the function doesn't match the function definition.");
        // 传递给函数的参数计数与函数定义不匹配
    }else{
        alert("Successfully call the function");
        // 成功调用该函数
    }
}
checkVarCount(1, 2);
//Successfully call the function
checkVarCount(1);
//The count of the parameters you passed into the function doesn't match the function definition.

/////  33333333333. caller 获取调用当前函数的函数 
//  e.g  01
function test() {
    if (test.caller == null) {
        console.log("test is called from the toppest level");
        // 测试从最顶层调用
    } else {
        console.log("test is called from the function:");
        // 从函数...调用test
        console.log(test.caller.toString());
    }
}
//caller属性只有当函数正在执行时才被定义
console.log("没有调用的情况下test.caller为：",test.caller);
// 没有调用的情况下test.caller为： null
test();        // test is called from the toppest level

function testOuter() {
    test();
}
testOuter();   // call from the function testOuter
// test is called from the function:
// function testOuter() {
//     test();
// }

//  e.g  02
var obj = {
    foo1:function(){
        console.log(this.foo1.caller);
    },
    foo2:function abc(){
        this.foo1();
    }
};
obj.foo1();     // null
obj.foo2();
// ƒ abc(){
//         this.foo1();
//     }

/////  44444444444. callee  返回正被执行的Function函数
//  即指定的Function对象的正文
//  callee 属性是 arguments 对象的一个成员
//  该属性仅当相关函数正在执行时才可用
//  通常这个属性被用来递归调用匿名函数
var func = function(n){
    if (n <= 0)
        return 1;
    else
        return n * func(n - 1);
        //return n * arguments.callee(n - 1);
};
console.log(func(4));   // 24

//优点，可以是匿名函数
(function(n){
    if (n <= 0)
        return 1;
    else
        return n * arguments.callee(n - 1);
}(4));
// 24

/////  555555555555. prototype
//  获取对象的原型。每一个构造函数都有一个prototype属性，指向另一个对象。
//  这个对象的所有属性和方法，都会被构造函数的实例继承。
function Man(name, age) {
    this.name = name;
    this.age = age;
}
Man.prototype.sex = "M";
Man.prototype.sayHi = function () {
    console.log("Hi,i'm",this.name);
};
var li = new Man("Leo", 10);
li.sayHi(); // Hi,i'm Leo
console.log(li.sex);//M
Man.prototype.isStrong = true;
console.log(li.isStrong);//true

/////  66666666666. 其他相关的属性
/*
//  constructor 获取创建某个对象的构造函数。可以用来判断对象是哪一类
var x = new String("Hello");
if (x.constructor == String){
    console.log("Object is a String.");
}
//  Object is a String.

function MyObj() {
    this.number = 1;
}
var y = new MyObj();   // 构造函数
if (y.constructor == MyObj){
    console.log("Object constructor is MyObj.");
}
//  Object constructor is MyObj.
*/