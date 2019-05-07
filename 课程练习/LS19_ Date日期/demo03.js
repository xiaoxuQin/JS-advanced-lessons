/**
 * Created by qile on 2017/8/14.
 */
//日期格式实例
// YYYY-MM-DDTHH:mm:ss.sssZ
console.log(Date.parse("2010-01-01 11:12:23.111"));  // 1262315543111
console.log(new Date("2010-01-01 11:12:23.111"));    // Fri Jan 01 2010 11:12:23 GMT+0800 (中国标准时间)
console.log(new Date().toISOString());  // 2019-05-05T01:04:08.544Z

console.log(Date.parse("2010-01-01T11:12:23.111Z"));  // 1262344343111
console.log(new Date("2010-01-01T11:12:23.111Z"));  // Fri Jan 01 2010 19:12:23 GMT+0800 (中国标准时间)
console.log(new Date().toISOString());  // 2019-05-05T01:05:12.248Z

//日期格式（无时间）
console.log(new Date("2001"));  // Mon Jan 01 2001 08:00:00 GMT+0800 (中国标准时间)
console.log(new Date("2001-02"));   // Thu Feb 01 2001 08:00:00 GMT+0800 (中国标准时间)
console.log(new Date("2001-02-22")); // Thu Feb 22 2001 08:00:00 GMT+0800 (中国标准时间)

//日期和时间格式
console.log(new Date("1999-11-22T13:17"));  // Mon Nov 22 1999 13:17:00 GMT+0800 (中国标准时间)
console.log(new Date("1999-11-22T13:17:11"));   // Mon Nov 22 1999 13:17:11 GMT+0800 (中国标准时间)
console.log(new Date("1999-11-22T13:17:11.111"));   // Mon Nov 22 1999 13:17:11 GMT+0800 (中国标准时间)
console.log(new Date("1999-11-22T13:17:11.111Z"));  // Mon Nov 22 1999 21:17:11 GMT+0800 (中国标准时间)

//时间的比较和运算，内部转换为数字进行比较和运算（从1970年1月1日00:00:00开始计算）
console.log(new Date("1970-01-01").getTime());  // 0
console.log(new Date("1970-01-02").getTime());  // 86400000
console.log(new Date("1960-01-02").getTime());  // -315532800000
console.log(new Date("1970-01-02") > new Date("1970-01-01"));   // true
console.log(new Date("1970-01-02") - new Date("1970-01-01"));   // 86400000
console.log(new Date((new Date("1970-01-01").getTime())+86400000)); // Fri Jan 02 1970 08:00:00 GMT+0800 (中国标准时间)

//时间运算 和 时间综合练习 输出50天后是几月几号，星期几？




