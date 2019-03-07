//数组回顾
//字面量创建数组
var arr1 = [2,3,"a","b"];
console.log(arr1);
// [2, 3, "a", "b"]

//访问与改变数组
console.log(arr1[2]);       // a
console.log(arr1.length);   // 4
arr1.length-=1;
console.log(arr1);          // [2, 3, "a"]

//数组相关方法回顾
///////////////////////////////
var arr2 = ['a','b','c'];
var arr3 = arr2.slice(1,2);//并不破坏arr2
// var arr3 = arr2.slice(1);
console.log(arr2);  // ["a", "b", "c"]
console.log(arr3);  // ["b"]
///////////////
var arr2 = ['a','b','c'];
var arr3 = arr2.slice(1,2);//并不破坏arr2
var arr3 = arr2.slice(1);
console.log(arr2);  // ["a", "b", "c"] 
console.log(arr3);  // ["b", "c"]

//////////////////////////////
var arr4 = ['m','n'];
var pushReturn = arr4.push('o');
console.log(pushReturn);//push后数组的长度   // 3
console.log(arr4);     //  ["m", "n", "o"]

var popReturn =arr4.pop();
console.log(popReturn);//pop出的元素      // o
console.log(arr4);      // ["m", "n"]

////////////////////////////////
var arr5 = [1,2,3,4];
var shiftReturn = arr5.shift();
console.log(shiftReturn);//shift移除的元素    // 1
console.log(arr5);       // [2,3,4]

var unshiftReturn = arr5.unshift(0);
console.log(unshiftReturn);//unshift后数组的长度 // 4
console.log(arr5);         // [0,2,3,4]

/////////////////////////////
var arr6 = ["ab","cd","ef"];
console.log(arr6.indexOf("cd"));
// 1

var joinReturn1 = arr6.join();
console.log(joinReturn1);
// ab,cd,ef

var joinReturn2 = arr6.join('-');
console.log(joinReturn2);
// ab-cd-ef

//////////////批量删除元素，破坏性操作，具体参见Array章节//////////////
var arr7 = ["x","y","z"];
var arr8 = arr7.splice(1,1,"m");
console.log(arr7,arr8);
// ["x", "m", "z"]     ["y"]
//正则 参见正则章节

//标准函数 console.*
console.log("log message");             // log message
console.error("error message");         // 显示一个红色的错误： error message
console.warn("warn message");           // 显示一个黄色的警告： warn message
console.assert(3>2,"assert message");//断言
console.trace();//用于调试追踪


