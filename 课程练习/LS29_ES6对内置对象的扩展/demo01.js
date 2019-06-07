/**
 * let...of     let...for
 * startWith()  endsWith()  includes()
 * repeat()
 */

// ES6为字符串添加了遍历器接口，是的字符串可以被for...of循环遍历
for(let Point of 'foo'){
    console.log(Point);
}   // f o o

// foo...in
for(let key in 'foo'){
    console.log(key);
}   // 0 1 2

// 提供新的方法用于查找、判断和生成字符串
var s = 'Hello world!'; 
s.startsWith('Hello'); // true
s.endsWith('!'); // true
s.includes('o'); // true
/**
 * startsWith() 方法用来判断当前字符串是否以另外一个给定的子字符串开头
 * 数字 可选。在str中搜索 searchString 的开始位置，默认值为 0，也就是真正的字符串开头处。
 * 
 * endsWith()方法用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的
 * 数字 可选。作为 str 的长度。默认值为 str.length。
 * 
 * includes() 方法用于判断一个字符串是否包含在另一个字符串中
 * 数字 可选。从当前字符串的哪个索引位置开始搜寻子字符串，默认值为0。
 */
s.startsWith('world', 6);  // true
s.startsWith('world', 0/7);  // false
s.endsWith('Hello', 5);    // true
s.endsWith('!', 12);         // true
s.includes('Hello', 6);    // false
s.includes('Hello', 0);    // true


//repeat方法返回一个新字符串，表示将原字符串重复n次。
'x'.repeat(3); // "xxx"
'hello'.repeat(2); // "hellohello"
'na'.repeat(0); // ""

//参数如果是小数，会被取整(向下)。
'na'.repeat(2.9); // "nana"

//如果repeat的参数是负数或者Infinity，会报错。
'na'.repeat(Infinity);
// RangeError
'na'.repeat(-1);
// RangeError