/** 
 * 1 交换变量的值  
 */
var [x,y] = ["a","b"];
[x, y] = [y, x];
console.log(x,y);   // b,a
//上面代码交换变量x和y的值，这样的写法不仅简洁，而且易读，语义非常清晰。


/**
 * 2 从函数返回多个值
 * 函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。
 * 有了解构赋值，取出这些值就非常方便
 */
// 返回一个数组
function example() {
    return [1, 2, 3];
}
var [a, b, c] = example();
console.log(a, b, c);   // 1 2 3
// 返回一个对象,解构所有属性
function example() {
    return {
        foo: 1,
        bar: 2
    };
}
var { foo, bar } = example();
console.log(foo, bar);  // 1 2


/**
 * 3 函数参数的定义
 * 解构赋值可以方便地将一组参数与变量名对应起来。
 */
// 参数是一组有次序的值
function f([x, y, z]) {
    console.log(x);
    console.log(y);
    console.log(z);
}
f([1, 2, 3]);   // 1 2 3
// 参数是一组无次序的值
function f({x, y, z}) {
    console.log(x);
    console.log(y);
    console.log(z);
}
f({z: 3, y: 2, x: 1});  // 1 2 3


/**
 * 4 提取JSON数据
 * 解构赋值对提取JSON对象中的数据，尤其有用
 */
// 快速提取JSON数据的值
var jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
};
let { id, status, data: number } = jsonData;
console.log(id, status, number);
// 42, "OK", [867, 5309]


/**
 * 5 函数参数的默认值
 */
jQuery.ajax = function (url, {
    async = true,
    beforeSend = function () {},
    cache = true,
    complete = function () {},
    crossDomain = false,
    global = true,
// ... more config
}) {
// ... do stuff
};
// 指定参数的默认值，就避免了在函数体内部
// 再写var foo = config.foo || 'default foo';这样的语句。


/**
 * 6 遍历Map结构 
 * 任何部署了Iterator接口的对象，都可以用for...of循环遍历
 * Map结构原生支持Iterator接口，
 * 配合变量的解构赋值，获取键名和键值就非常方便。
 */
var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
for (let [key, value] of map) {
    console.log(key + " is " + value);
}
// first is hello
// second is world

/**
 * 如果只想获取键名，或者只想获取键值，可以写成下面这样
 */
// 获取键名
for (let [key] of map) {
    // ...
}
for (let [key] of map) {
    console.log(key + " is ...");
}
// 获取键值
for (let [,value] of map) {
    // ...
}
for (let [, value] of map) {
    console.log("... is " + value);
}


/**
 * 7 输入模块的指定方法
 * 加载模块时，往往需要指定输入那些方法
 * 解构赋值使得输入语句非常清晰
 */
const { SourceMapConsumer, SourceNode } = require("source-map");    // ???????
