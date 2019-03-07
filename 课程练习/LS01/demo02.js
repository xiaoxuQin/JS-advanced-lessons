//基本语法回顾
var x;  
//变量声明 区分声明与定义（对比其他语言 JS的语言特点，动态类型、弱类型）语句
x = 23; 
//表达式作为语句时（赋值表达式语句）

//条件语句
if(x>22){
    x+=2;
    console.log(x);
}else{
    console.log("x 不大于 22");
}
// 25

var xx = 234;
if(234 == xx){ //为什么要反写？？？？？
    console.log("相等");
}
//相等

//思考：
console.log(a);   //undefined 
if(true){
    var a = 2;
}
console.log(a);   //2

console.log(b);   //undefined
if(false){
    var b = 3;
}
console.log(b);   //undefined

//自己新增：
if(false){
    console.log("aaa");
    }else{
    console.log("bbb");
}//bbb
if(true){
    console.log("aaa");
}//aaa

//循环语句：
for(var i=0;i<3;i++){
    console.log("i:",i);
}
console.log(i);
// i:0   i:1   i:2   3

//函数定义及调用 
function max(x,y) {
    return x>y?x:y;
}
console.log(max(2,3));
// 3

//复合运算符
var a = 3;
a+=5;
console.log(a);
// 8

console.log(typeof NaN);//什么类型
console.log(typeof Infinity);
//number
//number

