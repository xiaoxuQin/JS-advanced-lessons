/**
 * Created by qile on 2017/8/14.
 */

// 调用栈 Call Stack
console.log("全局上下文-start");
var x = 1;
function foo(){
    console.log("foo上下文-start");//设置断点
    var y = 2;
    function bar(){
        console.log("bar上下文-start");//设置断点
        var z = 3;
        console.log(x+y+z);
        console.log("bar上下文-end");//设置断点
    }
    bar(); 
    console.log("foo上下文-end");//设置断点
}
foo();//设置断点
console.log("全局上下文-end");//设置断点

// VM897:1     全局上下文-start
// VM897:4     foo上下文-start
// VM897:7     bar上下文-start
// VM897:9     6
// VM897:10    bar上下文-end
// VM897:13    foo上下文-end
// VM897:16    全局上下文-end