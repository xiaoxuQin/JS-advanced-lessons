//布尔类型与逻辑运算符

//逻辑与、或的基本理解
console.log(2>1&&4<5);              // true
console.log(true&&(!2));            // false
console.log(false&&("2" == 2));     // false
console.log(false&&false);          // false

console.log(2>1||4<5);              // true
console.log(true||(!2));            // true 
console.log(false||("2" == 2));     // true
console.log(false||false);          // false

//数字类型
console.log(1===1.0);               // true
console.log(Number("xyz"));         // NaN
console.log(3/0);                   // Infinity   ***!!!

var a = 10;
console.log(++a);           // 11
var b = 20;
console.log(b++);           // 20
console.log(b);             // 21




