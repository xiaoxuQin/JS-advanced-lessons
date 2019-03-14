// String 

// part 01

// 1. 字符串比较
// localeCompare()方法：
// 用本地特定的顺序来比较两个字符串
console.log("A" > "a");
// false
console.log("A".localeCompare("a"));
// 1
console.log("B".localeCompare("A")); //考虑本地化的字符排序，返回0或非0
// 1
console.log("A".localeCompare("A")); //考虑本地化的字符排序，返回0或非0
// 0
console.log("A".localeCompare("B"));
// -1

// 2. 字符串拼接
var a = "abc";
var b = "def";
var c = a+b;
console.log(c);    // abcdef

// part 02  String函数的使用

// 字符串的提取
//String.prototype.charAt(pos);
//String.prototype.charCodeAt(pos);
//String.prototype.slice(start,end?);
//String.prototype.substr(start,length?)
//String.prototype.substring(start,end?);
//String.prototype.split(separator?,limit?);
//字符串常用方法，字符串的方法源于String.prototype

var str2 = "abcdef".slice(2);     // "cdef"
var str3 = "abcdef".slice(2,5);   // "cde"
var str4 = "abcdef".slice(-2);    // "ef"
var str5 = "abcdef".slice(2,-2);  // "cd"

//返回数组
var arr6 = "abcdef".split("c");     // ["ab", "def"]
var arr7 = "abcdef".split("c",1);   // ["ab"]
var arr8 = "abcdef".split("c",2);   // ["ab", "def"]

// charAt() 返回位于指定位置的字符的编码
var str9 = "abcdef".charAt(2);                // "c"
// charCodeAt() 返回指定位置的字符的 Unicode 编码。
var str10 = "abcdef".charCodeAt(3);           // 100
// indexOf()返回某个指定的字符串值在字符串中首次出现的位置
var str11 = "abcdefabcdef".indexOf("d",1);    // 3
//从第4个开始找
var str12 = "abcdefabcdef".indexOf("d",4);    // 9

//substr 与 substring的区别:后一个参数有不同的含义

var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);//后一个参数代表长度
// str14 = "cdefg"
console.log(str13,str14);//str13 未受到破坏
// abcdefghijklmn cdefg

var str15 = str13.substring(2,5);//后一个参数代表第几个end
console.log(str13,str15);//str13 未受到破坏
// abcdefghijklmn cde

// 字符串构造器方法（静态方法）
String.fromCharCode(97,98,99);   // "abc"
String.fromCharCode.apply(null,[97,98,99]);  // "abc"

// part 03  字符串变换

//String.prototype.trim( );
//String.prototype.concat(str1?,str2?);
//String.prototype.toLowerCase( );
//String.prototype.toLocaleLowerCase( );
//String.prototype.toUpperCase( );
//String.prototype.toLocaleUpperCase( );

//返回字符串  合并
var str16 = "aaa".concat("bbb");  // "aaabbb"
//返回已移除前导空格、尾随空格和行终止符的原始字符串
var str17 = "    abc def     \r\n  ".trim();  // "abc def"
// 转小写
var str18 = "abcDEF".toLowerCase();  // "abcdef"
// 转大写
var str19 = "abcDEF".toUpperCase();  // "ABCDEF"

// part 04  检索和比较
//String.prototype.indexOf(searchingString,position?);
//String.prototype.lastIndexOf(searchingString,position?);
//String.prototype.localeCompare(other);
var indexOf = "abcDEFabcDEFabcDEF".indexOf("D",6);       // 9
var lastIndexOf = "abcDEFabcDEFabcDEF".lastIndexOf("D"); // 15
//从字符串的两端删除字符，

//Part 05
// 与正则相关的方法 详细内容参见正则表达式章节
//String.prototype.search(regexp);
//String.prototype.match(regexp);
//String.prototype.replace(regexp);