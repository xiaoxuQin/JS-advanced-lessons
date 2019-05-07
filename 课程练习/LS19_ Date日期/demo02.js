// Date 方法参考链接
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date
//Date静态方法（Date构造器函数对象的方法）GMT 格林尼治时间
console.log(Date.now());//以毫秒为单位返回当前时间（从1970年1月1日00:00:00开始计算）// 1557235583541
console.log((new Date()).getTime());    // 1557235583541

console.log(Date.parse("1970-01-01"));//dateTimeString字符串转换成毫秒   // 0
console.log(Date.parse("1970-01-02"));      // 86400000

console.log(Date.UTC(2017,9,1));//将给定的日期转换成毫秒,解释为UTC 协调世界时间  1506816000000


//Date原型方法 getter和setter相关
var d = new Date("1978-11-25");
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());  // 1978 10 6 25 8
// getTimezoneOffset() 方法返回协调世界时（UTC）相对于当前时区的时间差值，单位为分钟。
console.log(d.getTimezoneOffset());     // -480

// setDate()方法将Date对象的日期设置为相对于当前设置月份的开头。
d.setDate(11);    // 日期变了
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());  // 1978 10 6 11 8
d.setFullYear(1999,5,3);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());  // 1999 5 4 3 8

//Date原型方法 转成字符串相关
var d = new Date(2012,3,21,15,7,23,234);
console.log(d.toTimeString(),"___",d.toLocaleTimeString()); // 15:07:23 GMT+0800 (中国标准时间) ___ 下午3:07:23
console.log(d.toDateString(),"___",d.toLocaleDateString()); // Sat Apr 21 2012 ___ 2012/4/21
console.log(d.toJSON());    // 2012-04-21T07:07:23.234Z

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date

