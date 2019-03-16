// part 01 不同类型的表达式
23;     //其中的23为原始表达式
obj = {x:2};       //对象初始化表达式
arr = [1,2];       //数组初始化表达式
var foo = function(){   //函数定义表达式
    console.log("foo");
}           

obj.x;   //属性访问表达式
foo();   //函数调用表达式
2 + 3;   //算数运算表达式
1&&2;    //逻辑运算表达式

// part 02  关于语句
2 > 3;   //表达式语句   //false
var a = 2; b = 3;
if(a > b){
    console.log("a > b");
}else{
    console.log("a < b");
}           // a < b

// 扩展知识
// var a,b;   var a = b;
// 谁是局部变量？谁是全局变量？
// var a=b=1中的变量b会成为全局变量，而var a=1,b=1中的a、b变量都为局部变量。!!!!!!!!!!!!!
function foo(){
    var a = b =3;
}
foo();
console.log("b:", b);   // b:3
console.log("a:", a);   // 报错
// 拆解一下自执行函数中的变量赋值：
// b = 3;
// var a = b;
// 所以 b 成了全局变量，而 a 是自执行函数的一个局部变量。

// 循环语句
for(var i = 0;i<5;i++){
    console.log("in for ",i);       // 0 1 2 3 4
}
console.log("out for ",i);          // 5
