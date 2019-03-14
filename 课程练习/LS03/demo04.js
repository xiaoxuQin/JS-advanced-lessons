// 复习回顾：
//Part1
var a = [1,2,3];
var b = a;
console.log(a,b);        // [1, 2, 3]   [1, 2, 3]
// pop() :删除并返回数组的最后一个元素。
b.pop();                 // 3
console.log(a,b);        // [1, 2]   [1, 2]
b = [4,5,6];
console.log(a,b);        // [1, 2]   [4, 5, 6]

//Part2
function foo(x) {
    x.push(4);
    x = [5,6,7];    // 等于了一个新的数组
    x.push(8);
    console.log(x);   //  [5, 6, 7, 8]
}
var a = [1,2,3];
foo(a);
console.log(a);      // [1, 2, 3, 4]

//Part3
function foo(x) {
    x.push(4);
    console.log(x);     // [1,2,3,4]
    x.length = 0;       // 长度置为零还是对之前的对象
    x.push(5,6,7,8);    
    console.log(x);     // [5,6,7,8]
}
var a = [1,2,3];
foo(a);
console.log(a);         // [5,6,7,8]
