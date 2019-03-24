////////// part 01  JS全局作用
var a = 10, b = 20;
function fn(){
    // fn作用域
    var a = 100, c = 200;
    // console.log(a,b,c),d;
    // 100  20  200  报错d is not defined 
    function bar(){
        // bar作用域
        var a = 500, b = 600;
        console.log(a,b,c,d);
        // 500  600  200  报错d is not defined 
    }
    bar();
}
fn();
//console.log(a,b,c,d);
// 10  20  报错c is not defined  报错d is not defined 

////////// part  02  JS词法作用域
var name = "Jack";
function echo() {
    console.log(name);
}
echo();         // Jack
//词法作用域 与调用形式无关 实例一
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();          //Jack
//词法作用域 与调用形式无关 实例二
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    function fee(){
        var name = "Lucy";
        echo();
    }
    fee();
}
foo();          // Jack
//通过new Function实例化的函数对象，不一定遵从静态词法作用域
var scope = "g";
function foo(){
	var scope = "l";
	return new Function("console.log(scope);")
}
foo()();    // g

var scope = "g";
function foo(){
	var scope = "l";
	return scope;
}
foo();    // l
