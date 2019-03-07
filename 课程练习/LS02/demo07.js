//JavaScript字符串的编码方式，Unicode字符集和UTF-16编码方式，参考链接：
//http://www.ruanyifeng.com/blog/2014/12/unicode.html

//字面量
var str = "abc_def_ghi_jkl_mn";

//转义字符 \n \" \' \\
console.log("abc\ndefghi\\\n\'mn\'");
// abc
// defghi\
// 'mn'

//字符串常用操作
var str = "abc_def_ghi_jkl_mn";
// str.split("_");      // ["abc", "def", "ghi", "jkl", "mn"]  数组形式！！！
// str.split("_",2);    // ["abc", "def"]
// str.concat("_opq");  // "abc_def_ghi_jkl_mn_opq"
// str.substr(4,7);     // "def_ghi"
// str.substring(4,7);  // "def"
// str.slice(2);        // "c_def_ghi_jkl_mn"
// str.slice(2,5);      // "c_d"
// str.slice(-2);       // "mn"
// str.slice(2,-2);     // "c_def_ghi_jkl_"

// str.bold();          // "<b>abc_def_ghi_jkl_mn</b>"
// 返回包含指定字符串文本的<b>标签字符串

// str.link();          // "<a href="undefined">abc_def_ghi_jkl_mn</a>"
// 返回以当前字符串对象为锚文本、指定字符串为href属性值(URL)的<a>标签字符串。

// str.fontcolor("red"); // "<font color="red">abc_def_ghi_jkl_mn</font>"
// str.fontsize(50);     // "<font size="50">abc_def_ghi_jkl_mn</font>"

