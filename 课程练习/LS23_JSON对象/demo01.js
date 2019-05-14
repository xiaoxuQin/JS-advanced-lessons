/**
 * JS中一切都是对象, 任何支持的类型都可以通过对象来表示
 * JSON 是 JS 对象的字符串表示法，它使用文本表示一个 JS 对象的信息，本质是一个字符串
 * JSON 可以以字符串的形式表示 JS基本数据类型变量和对象（引用）类型变量
 */

var obj1 = "xxx";
var obj2 = 23;
var obj3 = false;
var obj4 = { x: 1, y: 2, a: [1, 3, 5], b: "xyz" };
var obj5 = [123, 345];
var obj6 = [{ z: 3 }, [1, 2]];
var obj7 = {x:true};

var j1 = '"xxx"';
var j2 = '"23"';
var j3 = 'false';
var j4 = '{"x":1, "y":2, "a""[1,2,3], "b":"xys"}';
var j5 = '[123, 345]';    // 区别于 '["123","345"]'
var j6 = '[{"z": 3}, [1, 2]]';
var j7 = '{"x": true}';   // 区别于 '{"x":"true"}'

var foo = new Function("x","y","return x>y?x:y;");
foo(2,3);

// var jf = '["x","y","return x<y?x:y;"]';
var af = ["x","y","return x<y?x:y;"];
var fee = new Function(af[0],af[1],af[2]);
fee(2,3);       // 2
