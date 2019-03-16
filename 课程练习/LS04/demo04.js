// 严格模式
// 1. 严格模式的目的：
// 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为
// 消除代码运行的一些不安全之处，保证代码运行的安全
// 提高编译器效率，增加运行速度

// 2. 严格模式使用方式
"use strict"//全局使用

function foo() {
    "use strict"//函数内部使用
}

// 3.  严格模式下全局变量需显示声明
function  sloppyFunc() {
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);     // 123

//下边的实例，若使用严格模式则报错
function  sloppyFunc() {
    //'use strict'
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);     // 报错

// 3. 检测是否在严格模式的方法
// 一般函数中的this（严格模式）为undefined，非严格下为全局变量
function thisTest(){
    'use strict'
    console.log(this);
}
thisTest();     // undefined

"use stirct"
function isStrictMode() {
    return this === window?false:true;
}
//"use stirct" 
console.log(isStrictMode());     // false


// 属性、变量及参数函数
//严格模式下禁止删除不可改变的属性的变量
var str = "abc";
var strDescriptor = Object.getOwnPropertyDescriptor(window,"str");
console.log(strDescriptor);
// {value: "abc", writable: true, enumerable: true, configurable: false}

// Object.getOwnPropertyDescriptor  
// 这个方法主要的作用是返回属性的描述对象
function  sloppyFunc() {
    str.length = 7;
    //console.log(Object.getOwnPropertyDescriptor(str,"length"));
    console.log(str.length);//
}
sloppyFunc();           // 3

function  strictFunc() {
    'use strict';
    console.log(Object.getOwnPropertyDescriptor(str,"length"));
    str.length = 7;
    console.log(str.length);
}
strictFunc();//报错

//严格模式下禁止删除未定义的变量
delete foo;
delete window.foo;
// true

'use strict';
delete foo;
delete window.foo;
// 报错

//严格模式下禁止函数参数重名
/*
function f(a, a, b) {
    return a+b;
}
f(2,3,4);//非严格模式下正常执行 7

"use strict";
function f(a, a, b) {
    return a+b;
}
f(2,3,4);//严格模式下报错
*/

//严格模式下的arguments，变与不变
function f(a){
    "use strict";
    a = 42;
    return [a, arguments[0]];
}
var pair = f(17);

console.log(pair[0]);//console.assert(pair[0] === 42);
console.log(pair[1]);//console.assert(pair[1] === 17);
