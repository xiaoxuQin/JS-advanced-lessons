//Number构造器属性（静态属性）
Number.MAX_VALUE
Number.MIN_VALUE
Number.NaN
Number.NEGATIVE_INFINITY
Number.POSITIVE_INFINITY
//Number原型方法（Number对象继承的方法）
Number.prototype.toFixed();
Number.prototype.toPrecision();
Number.prototype.toString();
Number.prototype.toExponential();
//例：
var n1 = 12345.6789;
//四舍五入得到对应的精度：
console.log(n1.toFixed(2));
// 12345.68
//在对象的值超出指定位数时将其转换为指数计数法：
console.log(n1.toPrecision(2));
// 1.2e + 4
//将数字转化成一个字符串：
console.log(n1.toString());
// 12345.6789
//把对象的值转换成指数计数法：
console.log(n1.toExponential(2));
// 1.23e + 4

console.log(NaN === NaN);       //false
console.log(isNaN("12,3"));     //true
console.log(Math.floor(3.8));   //3
console.log(Math.floor(-3.8));  //-4
console.log(Math.ceil(3.2));    //4
console.log(Math.ceil(-3.2));   //-3
console.log(Math.round(-3.2));  //-3
console.log(Math.round(-3.5));  //-3  !!!
console.log(Math.round(-3.8));  //-4

