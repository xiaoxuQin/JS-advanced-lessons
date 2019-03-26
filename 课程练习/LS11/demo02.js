/*
//文件内的变量污染问题,尤其是异步执行的情况下
var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};
//一长串代码后，假如看不见上述代码了
(function () {
    var a=2,b=3;
    if(a<b){
        var userId = 234;
    }
}());
*/

//避免文件之间的全局污染，使用IIFE函数立即执行表达式 
//(function () {  // IIFE开始
var x = 10;
document.onclick = function () {
    // console.log("x = ",x);
    alert("x = "+x);
};
//})();           // IIFE结束

/*
//由于ES5没有块作用域，即使写成如下形式依然有问题
if(true){
    var x = 30;
}
*/
// 上面的代码出来的结果都会是30

////////////////////////////////////////////////////////////
//(function () {  // IIFE开始
var x = 20;
//})();           // IIFE结束

// function nameSpace() {
//     var x = 20;
// }
// nameSpace();
/*
//由于ES5没有块作用域，即使写成如下形式依然有问题
if(true){
    var x = 30;
}
*/
