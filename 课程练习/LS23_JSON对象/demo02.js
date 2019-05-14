/**
 *    part 01     JSON.stringify() 基本用法
 */
// JSON.stringify  案例一   复合对象转换为字符串
var o1 = {
    a:[1,2],
    b:true,
    c:[3,4,"x",{y:34,z:56}],
    d:5,
    e:{name:"Jack"},
    f:function(){console.log(12);}, //注意函数序列化问题
    h:0x12
};
var jsonStr1 = JSON.stringify(o1);
console.log(jsonStr1);
// {"a":[1,2],"b":true,"c":[3,4,"x",{"y":34,"z":56}],"d":5,"e":{"name":"Jack"},"h":18}
console.log(typeof(jsonStr1));
// string
console.log(o1);


// JSON.stringify  案例二  复合数组转换为字符串
var a1 = [1,"x",true,{y:2,z:3}];  
var a2 = ["1","x","true",{y:"2",z:3}];
var jsonStrArr1 = JSON.stringify(a1);
var jsonStrArr2 = JSON.stringify(a2);
console.log(jsonStrArr1);       // [1,"x",true,{"y":2,"z":3}]
console.log(a1);
console.log(jsonStrArr2);       // ["1","x","true",{"y":"2","z":3}]
console.log(a2);

JSON.stringify({});                        // '{}'
JSON.stringify(true);                      // 'true'
JSON.stringify("foo");                     // '"foo"'
JSON.stringify([1, "false", false]);       // '[1,"false",false]'
JSON.stringify({ x: 5 });                  // '{"x":5}'
JSON.stringify({x: 5, y: 6});              // "{"x":5,"y":6}"

JSON.stringify([new Number(1), new String("false"), new Boolean(false)]); 
// '[1,"false",false]'

JSON.stringify({x: undefined, y: Object, z: Symbol("")}); 
// '{}'

JSON.stringify([undefined, Object, Symbol("")]);          
// '[null,null,null]' 

// 不可枚举的属性默认会被忽略：
JSON.stringify( 
    Object.create(
        null, 
        { 
            x: { value: 'x', enumerable: false }, 
            y: { value: 'y', enumerable: true } 
        }
    )
);
// "{"y":"y"}"


/**
 *    part 02     JSON.parse()的基本用法
 */
//  JSON.parse的用法   案例一
var jsonStr3 = '{"a":[1,2],"b":true,"c":[3,4,"x",{"y":34,"z":56}],"d":5,"e":{"name":"Jack"}}';
var jsonStr4 = '[1,"x",true,{"y":2,"z":3}]';
var jsonStr5 = '{"a":[1,2],"b":false,"c":[3,4,"x",{"y":34,"z":56}]}';

var o3 = JSON.parse(jsonStr3);
var o4 = JSON.parse(jsonStr4);

// reviver参数是可选的，是一个节点访问函数，可用来转换解析后的数据
var o5 = JSON.parse(jsonStr5,function (key,value) {
    if(typeof value === "boolean"){
        value = "ChangeToString";     // 改变它的value值
    }
    if(key == "c"){//迭代的遍历某个希望寻找的数据属性，可用于数据信息的查找
        console.log("c:",value);        // 输出 键值对 c 对应的值
    }
    return value;
});
console.log(o3);    // {a: Array(2), b: true, c: Array(4), d: 5, e: {…}}
console.log(o4);    // [1, "x", true, {…}]
console.log(o5);    // {a: Array(2), b: "ChangeToString", c: Array(4)}

//其他案例
JSON.parse('{}');              // {}
JSON.parse('true');            // true
JSON.parse('"foo"');           // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null');            // null
JSON.parse('1');               //  1


