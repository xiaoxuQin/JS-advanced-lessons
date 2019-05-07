// UTC 协调世界时间  Coordinated Universal Time
// GMT 格林尼治时间 （北京时间是正8时区） Greenwich Mean Time
var date1 = new Date(2019, 5, 7, 12, 34, 1);
// 注意：月:0-11，日：1-31，时：0-23，分：0-59，秒：0-59，毫秒：0-999
console.log(date1); 
// Fri Jun 07 2019 12:34:01 GMT+0800 (中国标准时间)

var date2 = new Date(19, 1, 18, 12, 34, 1);
// 若years为2位的话自动加1900
console.log(date2);
// Tue Feb 18 1919 12:34:01 GMT+0800 (中国标准时间)   月份进行了加一的操作

var date3 = new Date("2018-08-07");//注意日期的格式 此处的08代表8月还是9月，对比上一个创建形式
console.log(date3);
// Tue Aug 07 2018 08:00:00 GMT+0800 (中国标准时间)   月份不发生改变

var date4 = new Date(0);    
console.log(date4);
// Thu Jan 01 1970 08:00:00 GMT+0800 (中国标准时间)
console.log(date4.getTime());
// 0

var date4_2 = new Date(1000); 
console.log(date4_2);
// Thu Jan 01 1970 08:00:01 GMT+0800 (中国标准时间)
console.log(date4_2.getTime());
// 1000

var date5 = new Date();//new Date(Date.now());
console.log(date5);
// Tue May 07 2019 21:18:03 GMT+0800 (中国标准时间)

var date5_2 = new Date(Date.now());
console.log(date5_2);
// Tue May 07 2019 21:18:34 GMT+0800 (中国标准时间)


//补充：无效日期
var date6 = new Date(NaN);
console.log(date6);//Invalid Date

//有无new的区别
var d1 = new Date();
var d2 = Date();
console.log(d1,typeof d1);//object
console.log(d2,typeof d2);//string

//补充思考
var n1 = new Number("123");
var n2 = Number("123");
console.log(n1,typeof n1);  // Number {123} "object"
console.log(n2,typeof n2);  // 123 "number"
