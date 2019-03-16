// ES 中没有块作用域
{
    var a = 20;
}
console.log("大括号外依然能访问到a:", a);

for(var i = 0; i < 5; i++){
    console.log("in for:", i);      // 0 1 2 3 4
}
console.log("out of for:", i);      // 5

if(true){
    var a = 20;
}
console.log(a);     // 20

if(false){
    var b = 30;
}
console.log(b);     // undefined

// 能够区分undefined和undeclared
// undefined是Javascript中的语言类型之一，
// 而undeclared是Javascript中的一种语法错误。
// JS中的undefined可以表示“空”，另一个可以表示“空”的为null。
// JS中的undefined是一个值为undefined的类型。
// undefined: 已申明，未赋值。
// 尝试访问一个undefined 的变量时，浏览器不会报错并会返回undefined。
// undeclared: 未声明，未赋值。
// 尝试访问一个undeclared的变量时，浏览器会报错，JS执行会中断。
