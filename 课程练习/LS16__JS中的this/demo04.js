// part 01 构造函数中函数嵌套 this缺陷
function Point(x,y){
    this.x = x;
    this.y = y;
    this.moveXY = function(x,y){
        function moveX(x){
            this.x += x;
        }
        function moveY(y){
            this.y += y;
        }
        moveX(x);
        moveY(y);
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p); // Point {x: 2, y: 3, moveXY: ƒ}

// part 02 解决方案
function Point(x,y){
    this.x = x;
    this.y = y;
    this.moveXY = function(x,y){
        var that = this;
        function moveX(x){
            that.x += x;
        }
        function moveY(y){
            that.y += y;
        }
        moveX(x);
        moveY(y);
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);     // Point {x: 3, y: 4, moveXY: ƒ}

// that 改为this ： 
function Point(x,y){
    this.x = x;
    this.y = y;
    this.moveXY = function(x,y){
        var that = this;
        function moveX(x){
            this.x += x;
        }
        function moveY(y){
            this.y += y;
        }
        moveX(x);
        moveY(y);
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);       // Point {x: 2, y: 3, moveXY: ƒ}

/////////////////
var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x, this);
    }
};
var fun1 = function(){
    return function fun2(){
        return this.x;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();

console.log(obj.fun3());    
// ƒ fun2(){
//     return this.x;
// }

console.log(obj.fun3()());  // undefined
console.log(obj.fun4());    // 23

console.log(fun1); 
// ƒ (){
//     return function fun2(){
//         return this.x;
//     }
// }

console.log(fun1());
// ƒ fun2(){
//     return this.x;
// }

console.log(fun1()());      
// undefined

