// part 01 JS语法、表达式及语句综述
//字面量   
var obj = {x:1,y:2};
var arr = [1,2,3,4,5];

//关键字 arguments、break、continue...

//表达式与语句 表达式语句
var o = {x:1,y:2};
a>b;    // true

// 存在二义性的语句，要避免有二义性的语句
var max = function (x,y) {
    return x>y?x:y;
};
// 下述代码是对象还是语句块
{
    foo:max(2,3)
}
// 3

// 存在二义性的语句 补充一
var max = function (x,y) {
    return x>y?x:y;
};
var x = {
    foo:max(2,3)
}
// x   {foo: 3}

// 存在二义性的语句 补充二
var max = function (x,y) {
    return x>y?x:y;
};
{
    console.log(123);   // 123
    console.log(456);   // 456
    foo:max(2,3)        // 3
}

