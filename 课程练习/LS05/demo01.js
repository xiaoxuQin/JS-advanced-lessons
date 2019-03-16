// part 01 赋值运算符
// = 和 == 的区别
var a = 34;
if(a = 45){
    console.log("是否会输出？");
}       // 是否会输出？
if(a == 45){
    console.log("是否会输出？");
}           // undefined

var b = 34;
if(45 == b){//为什么要这样写，有什么好处
    console.log("是否会输出？");
}           // undefined

// part 02 算术运算符
console.log("1"+"2"); //"12"
console.log("1"+2); //"12"
console.log(1+{}); //"1[object Object]"
console.log(true+true); //2
console.log("5"-2); //3

var x = "1";
console.log(++x); //2 注意++和--的隐式类型转换
console.log(x++); //1
// ++x : 先运算后输出
// x++ : 先输出后运算
var x = "1";
console.log(x+1);//11
// 思考：+= 是转成字符串类型还是转成数字类型
// 不同情况下转换的类型不同
var x = "1";
console.log(x+=1); // 11
var x = 1;
console.log(x+=1); // 2
// 不同情况下转换的类型不同

//回顾++i 与 i++
var i=1;
var y = ++i + ++i + ++i;
console.log(y); // 9

// part 03 关系运算符
console.log(3===3); // true
console.log(3==="3"); // false
console.log(3=="3"); // true
console.log(3==new String(3)); // true
console.log(3===new String(3)); // false

var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"===obj1);// false
console.log(obj1 == obj2);// false
console.log(obj1 === obj2);// false
console.log(obj1 == new String("xyz"));// false

var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"!=obj1);       // false
console.log(obj1 !== obj2);     // true
console.log(obj1 != obj2);      // true
console.log(obj1 != new String("xyz"));     // true

//注意 是引用类型转换到基本类型了？还是基本类型转换到引用类型了？
console.log(2 == 2);        // true
console.log(new Number(2) == new Number(2));    // false
console.log(2 == new Number(2));    // true
console.log(2 === new Number(2));   // false

//存在二义性的代码，与预期的结果不一致
var obj1 = {x:2,y:[1],z:false};
var obj2 = {x:2,y:[1],z:new Boolean(false)};
// var obj2 = {x:2,y:[1],z:Boolean(new Boolean(false))};
console.log(obj1.z == obj2.z);      // true

var obj1 = {x:2,y:[1],z:false};
var obj2 = {x:2,y:[1],z:new Boolean(false)};
var obj2 = {x:2,y:[1],z:Boolean(new Boolean(false))};
console.log(obj1.z == obj2.z);      // false 

