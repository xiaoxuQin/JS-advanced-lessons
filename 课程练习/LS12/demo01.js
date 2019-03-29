// 闭包引入案例（二者的区别，x始终未被释放）
function f1(){
    var x = 1;
    function f2(){
        return x++;
    }
    return f2();
}
var f3 = f1();
console.log(f3);    // 1
console.log(f3);    // 1

function f1(){
    var x = 1;
    function f2(){
        return x++;
    }
    console.log(f2());
    return f2;
}
var f3 = f1();
console.log(f3());  // 1
console.log(f3());  // 2

        /**
        console.log(f2);
        // 结果：
        ƒ f2(){
            return x++;
        }
        */
        /**************!!!!!!!***************
        function f1(){
            var x = 1;
            function f2(){
                return ++x;
            }
            console.log(f2());       // 1 这个位置f2()又被调用了一次
            return f2;
        }
        var f3 = f1();
        console.log(f3());           // 2
        console.log(f3());           // 3  
        */

// 例一
function createInc(a){
    return function(step){
        a += step;
        return a;
    }
}
var inc = createInc(5);
console.log(inc(1));    // 6
console.log(inc(2));    // 8
inc = createInc(5);
console.log(inc(1));    // 6

// 例二
function createInc(x){
    return function(y){
        x += y;
        return x;
    }
}
var inc = createInc(5);
console.log(inc(1));    // 6
console.log(inc(2));    // 8
var inc2 = createInc(5);
console.log(inc(1));    // 9
console.log(inc2(1));    // 6

// 例三
function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    // console.log(bar());
    return bar();
}
foo();  // 1
foo();  // 1
// 例四                 ???!!!
function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    console.log(bar);
    return bar;
}
var a = foo();
var b = foo();
a();    // 1
a();    // 2 
b();    // 1