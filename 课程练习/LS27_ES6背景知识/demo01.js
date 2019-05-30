//例1 通过var定变量 ES5中没有块作用域, { }外可以访问{ }内变量
{
    var a = 23;
}
console.log(a); // 由于没有块作用域，a可以正常输出

//例2
for(var i=0;i<5;i++){
    //do somethings
}
console.log("i:",i); // 此处i依然存在   5

//例3 通过var声明的变量，由于没有块作用域，容易造成变量污染
var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);  // userId =  123
};
// ................
var a=2,b=3;
if(a<b){
    var userId = 234;
}
console.log(userId);
// 点击document, userId = 234;

//可以通过IIFE来解决上述问题   立即执行函数
(function () {
    var a=2,b=3;
    if(a<b){
        var userId = 234;
    }
}());


//变量共享问题
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000*i);
}
console.log("i：",i);  // i始终等于3

//通过IIFE解决变量共享问题
for (var i = 0; i < 3; i++) {
    (function(j) {  // j = i
        setTimeout(function() {
            console.log(new Date, j);
        }, 1000*i);
    })(i);
}       // 0 1 2

//使用let可有效避免变量共享问题
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000*i);
}
