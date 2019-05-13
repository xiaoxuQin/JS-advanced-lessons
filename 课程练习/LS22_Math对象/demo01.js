/**
 * Created by qile on 2017/8/14.
 */
//Math 对象属性
console.log(Math.PI);
console.log(Math.E);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E);


//Math 对象数值方法
console.log(Math.random());
console.log(Math.abs(-123.456));    // 123.456  返回指定数字的绝对值
console.log(Math.pow(2,3),Math.pow(4,0.5)); // 8 2 返回基数的指数次幂，
console.log(Math.sqrt(256));        // 16  返回一个数的平方根


console.log(Math.round(0.60),Math.ceil(0.60),Math.floor(0.60)); // 1 1 0
console.log(Math.round(0.50),Math.ceil(0.50),Math.floor(0.50)); // 1 1 0
console.log(Math.round(0.40),Math.ceil(0.40),Math.floor(0.40)); // 0 1 0
console.log(Math.round(0.49),Math.ceil(0.49),Math.floor(0.49));//是否考虑进位？ 0 1 0
console.log(Math.round(-4.40),Math.ceil(-4.40),Math.floor(-4.40));  // -4 -4 -5
console.log(Math.round(-4.60),Math.ceil(-4.60),Math.floor(-4.60));  // -5 -4 -5
/*
 * Math.round() 函数返回一个数字四舍五入后最接近的整数   不考虑再低一位的进位
 * Math.ceil() 函数返回大于或等于一个给定数字的最小整数
 * Math.floor() 返回小于或等于一个给定数字的最大整数
 */

// Math.max() 函数返回一组数中的最大值
console.log(Math.max(5,7),Math.max(5,7));   // 7 7
console.log(Math.max(-3,5),Math.max(-3,5)); // 5 5
console.log(Math.max(-3,-5),Math.max(-3,-5));   // -3 -3
console.log(Math.max(7.25,7.30),Math.max(7.25,7.30));   // 7.3  7.3


//Math 三角方法
//角度转弧度方法
function toRadians(degrees) {
    return degrees/180 *Math.PI;
}
console.log(toRadians(180));    // 3.141592653589793

//弧度转角度方法   !!!
function toDegrees(radians) {
    return radians/Math.PI*180;
}
console.log(toDegrees(Math.PI/4));  // 45


console.log(Math.sin(toRadians(90))); //参数一个以弧度表示的角。将角度乘以 （2PI/360）即可转换为弧度
console.log(Math.cos(toRadians(180)));
console.log("------------------");
//   1      -1
