/*              函数对象方法                */
/////   1111111111. apply
//functionName.apply([thisObj[,argArray]])
//与call方法不同的地方是，apply的第二个参数类型必须是Array
swim.apply(me,[9,10]);
bird.fly.apply(me,[11,12]);
swim.apply(null,[13,14]);

/////   22222222222. bind
// 关于绑定
// e.g 01
var x = 45;
var obj = {
    x:23,
    test:function(){
		function foo(){
			console.log(this.x);
		}
		foo.bind(this)();//var fee = foo.bind(this); fee();
		foo();
    }
};
obj.test();
// 23
// 45

var x = 45;
var obj = {
    x:23,
    test:function(){
		function foo(){
			console.log(this.x);
		}
        foo.bind(this)();
        var fee = foo.bind(this); 
        fee();
		foo();
    }
};
obj.test();
// 23
// 23
// 45

// e.g 02
// function.bind(thisArg[,arg1[,arg2[,argN]]])
// 在绑定功能中，this对象解析为传入的对象。
// 返回一个与 function 函数相同的新函数，只不过函数中的this对象和参数不同。
// Define the original function.
var checkNumericRange = function (value) {
    if (typeof value !== 'number')
        return false;
    else
        return value >= this.minimum && value <= this.maximum;
};

// The range object will become the this value in the callback function.
var range = { minimum: 10, maximum: 20 };

// Bind the checkNumericRange function.
var boundCheckNumericRange = checkNumericRange.bind(range);

// Use the new function to check whether 12 is in the numeric range.
var result = boundCheckNumericRange (12);//相当于range.boundCheckNumericRange (12)
console.log(result);//true

// e.g 03
// 该绑定函数将 bind 方法中指定的参数用作第一个参数和第二个参数。
// 在调用该绑定函数时，指定的任何参数将用作第三个、第四个参数（依此类推）
// Define the original function with four parameters.
var displayArgs = function (val1, val2, val3, val4) {
    console.log(val1 + " " + val2 + " " + val3 + " " + val4);
};
var emptyObject = {};
// Create a new function that uses the 12 and "a" parameters
// as the first and second parameters.
var displayArgs2 = displayArgs.bind(emptyObject, 12, "a");
// Call the new function. The "b" and "c" parameters are used
// as the third and fourth parameters.
displayArgs2("b", "c");// Output: 12 a b c

/////   3333333333. toString valueof
//返回对象的字符串表示形式  objectname.toString([radix])
//关于toString与valueOf的详细内容参见JS对象相关章节
var foo = function () {
    console.log("foo");
};
console.log(foo.toString()," ___ ",typeof foo.toString());
// function () {
//     console.log("foo");
// }  ___  string
console.log(foo.valueOf()," ___ ",typeof foo.valueOf());
// ƒ () {
//     console.log("foo");
// } " ___ " "function"

console.log(foo.hasOwnProperty("toString"));            // false
console.log(Object.prototype.hasOwnProperty("toString"));       // true

console.log(foo.hasOwnProperty("valueOf"));             // false
console.log(Object.prototype.hasOwnProperty("valueOf"));        // true


