//  Part   11111111 排序和颠倒元素顺序 破坏性

//Array.prototype.reverse()
var arr1 = [1,2,3];
arr1.reverse();
console.log(arr1);      // [3, 2, 1]

//Array.prototype.sort(compareFunction？)
var arr2 = ["banana","apple","pear","orange"];
arr2.sort();
console.log(arr2);      // ["apple", "banana", "orange", "pear"]
 
//思考sort中的参数
var arr3 = [-1,-20,7,50];
arr3.sort();
console.log(arr3);//结果是否是预计结果,如何解决     // [-1, -20, 50, 7]
/**
 * 调用方法时没有使用参数，那么是按字符编码的顺序进行排序，
 * 如果想按其他标准进行排序，就要提供比较函数，
 * 然后返回一个用于说明这两个值的相对顺序的数字
 * 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值
 * 若 a 等于 b，则返回 0。
 * 若 a 大于 b，则返回一个大于 0 的值。
 */
var arr3 = [-1,-20,7,50];
function sortNumber(a,b) 
{    return a - b;    }
console.log(arr3.sort(sortNumber));   // [-20, -1, 7, 50]

//sort传递的函数对象
arr3.sort(function (a,b) {return a-b;});//对于数字类型，大于0则交换，冒泡排序
//arr3.sort(function (a,b) {return a>b;});//对于布尔类型，true则交换，冒泡排序


/**********!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!************* */
//如果想让arr2按第二个字母排序，怎么写？
var arr2 = ["banana","apple","pear","orange"];
arr2.sort(function(a,b){return a[1]>b[1];});
console.log(arr2);
/**********!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*************/




//Part222222 合并、切分和连接 非破坏性
//Array.prototype.concat(arr1?,arr2?,...)
var arr4 = ["banana","apple"];
var arr5 = ["pear","orange"];
var newArray = arr4.concat(arr5);
console.log(newArray,arr4,arr5);
// ["banana", "apple", "pear", "orange"]  ["banana", "apple"]  ["pear", "orange"]


//Array.prototype.slice(begin?,end?)注意：不要和splice弄混了
var arr6 = [1,2,3,4,5];
var newArray = arr6.slice(2,4);     // 包括前面不包括后面
console.log(newArray,arr6);
// [3, 4]    [1, 2, 3, 4, 5]
var newArray2 = arr6.slice(2);
console.log(newArray2,arr6);
// [3, 4, 5]    [1, 2, 3, 4, 5]


//Array.prototype.join(separator?)
var arr7 = [3,4,5];
var joinReturn = arr7.join("--");//返回了个什么类型？
console.log(joinReturn, arr7);
// 3--4--5     [3, 4, 5]
console.log(typeof joinReturn);
// string
//注意：稀疏数组调用join
console.log([3,,,,,,5].join("*"));
// 3******5
console.log([3,,,,,,5].length);         // 7
console.log([3,,,,,,5].join("*").length);   // 8


//Part333333333 值的查找 非破坏性
//Array.prototype.indexOf(searchValue,startIndex?)
var arr8 = [1,3,5,5,7,9,5];
console.log(arr8.indexOf(5));//输出几？
console.log(arr8.indexOf(5,3));//输出几？
console.log(arr8.indexOf(5,5));//输出几？


//Array.prototype.lastIndexOf(searchElement,startIndex?)
console.log(arr8.lastIndexOf(5));//输出2
console.log(arr8.lastIndexOf(5,3));//输出3
console.log(arr8.lastIndexOf(5,5));//输出6
// 默认从第一个开始查找