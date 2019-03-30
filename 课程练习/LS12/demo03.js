// 闭包实例 part 01
// 作为对象的方法返回
function counter(){
    var n = 0;
    return{
        count:function(){return ++n;},
        reset:function(){n = 0; return n;}
    }
}
var c = counter();
var d = counter();
console.log(c.count());     // 1
console.log(d.count());     // 1
console.log(c.reset());     // 0
console.log(c.count());     // 1  --- !!! 上一步把它恢复到 n=0 了
console.log(d.count());     // 2


//
function f1(){
    var n = 999;
    function f2(){
        console.log(++n);
    }
    return f2;
}
var f = f1();
f();    // 1000
f();    // 1001


// 闭包实例
// 函数f1中的局部变量n一直保存在内存中，并没有在f1调用后被自动清除
// 原因就在于f2被赋给了一个全局变量，全局变量没被释放
// 这导致f2始终在内存中，而f2和n形成了对应作用域（f1）的闭包
// f1中的n不会在调用结束后，被垃圾回收机制（garbage collection）回收


var n = 10;
function f1(){
    var n = 999;
    nAdd = function(){n += 1;};
    function f2(){
        console.log(n);
    }
    return f2;
}
var result = f1();
result();   // 999
nAdd();
result();   // 1000


// 闭包应用案例
// 实现数据的封装 私有属性
function Person(){ 
    var name = "default";
    return{
        getName : function(){
            return name;
        },
        setName : function(newName){
            name = newName;
        }
    }
};
var john = Person();
console.log(john.getName());    // default
john.setName("john");
console.log(john.getName());    // john

var jack = Person();
console.log(jack.getName());    // default
jack.setName("jack");
console.log(jack.getName());    // jack

////    ?????
var m = 10;
function f1(){
    nAdd = function(){++m;};
    function f2(){
        console.log(m);
    }
    return f2;
}
var result1 = f1();
var result2 = f1();
document.onclick = result1;     // 11
nAdd();
result2();      // 11

////
var m = 10;
function f1(){
    nAdd = function(){++m;};
    function f2(){
        console.log(m);
    }
    return f2;
}
var result1 = f1();
var result2 = f1();
result1();      // 10
nAdd();
result2();      // 11
result1();      // 11



