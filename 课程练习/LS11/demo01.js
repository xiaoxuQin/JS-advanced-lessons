// 立即执行表达式 常见形式
(function max(x,y){
    console.log("the max is", x>y?x:y);
}(2,3));

(function (x,y){ //可以没有函数名
    console.log("the min is",x<y?x:y);
})(2,3);
//注意：IIFE是表达式，要注意使用分号结尾，否则可能出现错误

(function() {
    console.log("111");
})();//没有分号的话会报错
(function () {
    console.log("222");
})()
// 如果省略分号，遇到连着两个 IIFE，可能就会报错
// JavaScript 会将它们连在一起解释，将第二行解释为第一行的参数

// 在 Javascript 中，圆括号()是一种运算符，跟在函数名之后，
// 表示调用该函数 比如，print()就表示调用print函数
// 有时，我们需要在定义函数之后，立即调用该函数。
// 这时，你不能在函数的定义之后加上圆括号，这会产生语法错误。
//      function(){ /* code */ }();
//      SyntaxError: Unexpected token (
// 产生这个错误的原因是，function这个关键字即可以当作语句，
// 也可以当作表达式。
// 如果function关键字出现在行首，一律解释成语句。
// 因此，JavaScript 引擎看到行首是function关键字之后，
// 认为这一段都是函数的定义，不应该以圆括号结尾，所以就报错了。

// 其他形式的IIFE 与运算符结合的写法
var i = function(){
    return 10;
}(); //i为10

true && function(a,b){
    return a>b?a:b;
}(5,9); // 9

!function(x,y){
    return x==y?true:false; // === 返回什么
}("5",5);       // false


!function(){return 2; }( );     // false

!function(){return 0; }();      // true
