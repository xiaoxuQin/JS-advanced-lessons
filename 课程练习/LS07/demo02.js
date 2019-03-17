// part 01 函数的定义与调用
// 函数调用
// 普通函数直接调用
function test1() {
    console.log("this is",this);
}
test1();    // window
// this is Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}

//思考嵌套的情况下
function test2() {
    function test3(){
        console.log("this is",this);
    }
    test3();
}
test2();//window
// this is Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}

// 对象方法调用
var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
obj.test();//调用对象的方法
// 23 {name: "obj", x: 23, test: ƒ}

//
var x = 45;
var test = function(){
	console.log("输出：",this.x);
}
var obj = {
    x:23
};
obj.test = test;    
//理解：给obj 这个对象新添加了一个方法，方法名叫test，和上面定义的一样
obj.test(); // 输出： 23   
test(); // 输出： 45

//
var x = 45;
var obj = {
    x:23,
    test:function(){
		function foo(){
			console.log(this.x);    // 45  //变量提升，但是对象不能
        }
        foo();
        console.log(this.x);    // 23
    }
};
obj.test();     // 45

//给obj动态添加方法
var sayHi = function () {
    console.log("Hi，i'm",this.name);
};
obj.sayHi = sayHi;//添加给对象添加方法
obj.sayHi();        // Hi，i'm undefined
//思考：若直接调用sayHi();
// var name = "全局";
// sayHi();        // Hi，i'm 全局


/*
//思考如下代码 详情参见高阶函数章节
var fun1 = function () {
    return function fun2() {
        // return this.x;//若改为 return this;   //依然全是 obj is not defined
        return this;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log(obj.fun3());//输出什么      // obj is not defined
console.log(obj.fun3()());//输出什么    // obj is not defined
console.log(obj.fun4());//输出什么      // obj is not defined
*/


// Part 02   call( )和apply( )
//间接调用 实例一 间接调用的对象要和原对象之间，在数据结构上有对应的相似处，以便不影响调用效果
objA = {name:"AA"};
objB = {name:"BB"};
objA.foo = function(){
    console.log(this.name);
};
objA.foo();//AA
objA.foo.call(objB);//BB

//间接调用 实例二 移花接木 吸星大法
var fish = {
    name:"fish",
    swim:function (m,n) {
        console.log("i'm "+this.name+" i cam swim ___",m,n);
    }
};
var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};
var me = {
    name:"ABC"
};
bird.fly(5,6);          // i'm:polly i can fly ___ 5 6
fish.swim.call(me,3,4); // i'm ABC i cam swim ___ 3 4
bird.fly.call(me,7,8);  // i'm:ABC i can fly ___ 7 8
// swim.call(null,1,2);    // swim is not defined 报错

//很多方法都可以通过间接调用的方式来调用，比如很多原型的方法
function test() {
    console.log(Array.prototype.slice.call(arguments));
}
test(1,2,3,"4",5);  
// [1, 2, 3, "4", 5]

//构造函数
function Person(name){
    this.name = name;
}
Person.prototype.sayHi = function(){
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person("Jack");
p1.sayHi();//Hi,i'm Jack