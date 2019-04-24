function thisTest(){
    console.log(this === window);
}
thisTest();     // true

var a = 10,b = "Hi";
function thisTest2(){
    this.a = 20;
    delete this.b;
    this.c = "新添加属性";
}
thisTest2();
console.log(a,c);   // 20 "新添加属性"
console.log(b);     // Hi
// 依然能输出b，为什么，查看window对象b属性的属性特性
// console.log(Object.getOwnPropertyDescriptors(b));

/*
var point = {
    x:0,
    y:0,
    moveTo:function(x,y){
        function moveToX(x){
            this.x = x;
        };
        function moveToY(y){
            this.y = y;
        }
        moveToX(x);
        moveToY(y);
    }
}; 
*/

//////////////////////////////////////////////////////////////////
function thisTest(){
    "use strict"
    console.log(this);  // undefined
}
thisTest();


// 严格模式检测
function isStrictMode(){
    return this == undefined?true:false;
}
isStrictMode();     // false

///////////////
"use strict"
function isStrictMode(){
    return this == undefined?true:false;
}
isStrictMode();     // true


//////////////////////////////////////////////////////////////////

var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        this.x = x;
        this.y = y;
    }
};
point.moveTo(1,1);  // this绑定到当前对象，即point对象上
console.log(point);
// {x: 1, y: 1, moveTo: ƒ}


// 私有属性  闭包
var Person = function(name, age){
    var nameN = name;
    var ageA = age;
    this.showMe = function(){
        console.log(nameN, ageA);
    }
} 
var p1 = new Person("mike", 23);
p1.showMe();
// mike 23


////////////////////////////////////////////////////////

function Point(x,y){
    this.x = x;
    this.y = y;
}
var p = new Point(2,3);
console.log(p);
// Point {x: 2, y: 3}

Point(5,6);
console.log(window.x, window.y);    // 5 6
console.log(x,y);       // 5 6



