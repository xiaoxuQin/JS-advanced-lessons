//使用了let就可以避免var所带来的问题
let userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};
let a=2,b=3;
if(a<b){
    let userId = 234;
    console.log("userId = ",userId);
}
console.log("userId = ",userId);


//let 定义的变量 并不像 var 那样直接作为全局对象的属性
var x = 23;
let y = 34;
console.log(window.x,window.y);//23 undefined


