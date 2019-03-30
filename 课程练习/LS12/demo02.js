// part 01
var tmp = 100;   // 词法作用域,形成的闭包不包含此行的变量tmp
function foo(x) {
    // var tmp = 3; // 词法作用域，  若屏蔽此行，会输出 113 114 115
    return function (y) {
        console.log(x + y + (++tmp));
    }
}
var fee = foo(2); // fee 形成了一个闭包
fee(10);    // 16
fee(10);    // 17
fee(10);    // 18

//闭包嵌套，扩展知识（了解即可），下述代码中存在几个闭包  利用断点！！！
function f1(m){
	var z = 100;
	function f2(x) {
    	return function (y) {
        	console.log(x + y + (++z));//设置断点，查看有 2 个闭包
    	}
	}
	return f2(m);
}
var f3 = f1(2); 
f3(10);
f3(10);
// 2个闭包   
// x : f2
// z : f1


// part 02
function foo(x){
    var tmp = 3;
    return function(y){
		x.count = x.count ? x.count + 1 : 1;
		console.log(x + y + tmp, x.count);
	}
}
var age = new Number(2);
var bar = foo(age);
bar(10);	//	15  1
bar(10);	//	15  2
bar(10);	//	15  3


// part 03
function fn(){
	var max = 10;		// 若屏蔽此行，则输出 100
	return function bar(x){
		if(x > max){
			console.log(x);
		}else{
			console.log(max);
		}
	}
}
var f1 = fn();
var max = 100;
f1(15);	// 15