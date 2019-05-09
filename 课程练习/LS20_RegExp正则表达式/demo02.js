/**
 *  g全局、i大小写、m换行
 *  *和.的区别
 *  test()方法, lastIndex属性，
 */

// 在控制台上测试，了解两点
// 一、g全局、i大小写、m换行 修饰符的作用
// 二、正则对象的两种基本使用方式 1.字符串.字符串方法（正则对象） 2.正则对象.正则方法（字符串）
var regExp = /ab/i;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);
// ["Ab", index: 2, input: "xxAbcaaBbxyz", groups: undefined]

var regExp = /ab/gi;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);
// ["Ab", "aB"]

var regExp = /a*b/gi; //注意*和.的区别 ，参见在线分析工具 https://regexper.com或https://jex.im/regulex
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);   
// ["Ab", "aaB", "b"]

var regExp = /a.b/gi;//注意*和.的区别 ，参见在线分析工具 https://regexper.com或https://jex.im/regulex
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);
// ["aaB"]

//test初步了解
/**
 * test()方法：
 * 如果正则表达式设置了全局标志，test()的执行会改变正则表达式lastIndex属性，
 * 连续的执行test方法，后续的执行将会从lastIndex处开始匹配字符串
 */
var regExp = /a/i;
console.log(regExp.test("ab"));  // true
console.log(regExp.test("ab"));  // true
console.log(regExp.test("ab"));  // true
console.log(regExp.test("ab"));  // true

var regExp = /a/gi;     // test中的lastIndex
console.log(regExp.lastIndex);      // 0      
console.log(regExp.test("ab"));     // true
console.log(regExp.lastIndex);      // 1
console.log(regExp.test("ab"));     // false 
console.log(regExp.lastIndex);      // 0
console.log(regExp.test("ab"));     // true
console.log(regExp.lastIndex);      // 1
console.log(regExp.test("ab"));     // false 
console.log(regExp.lastIndex);      // 0


while (regExp.test("aaa")){
    console.log(regExp.lastIndex);//每次执行后从哪开始重新匹配？
}
// 1 2 3