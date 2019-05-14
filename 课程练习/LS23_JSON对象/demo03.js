/**
    JSON.stringify() 方法是将一个JavaScript值(对象或者数组)转换为一个 JSON字符串，
    如果指定了replacer是一个函数，则可以选择性的替换值，
    或者如果指定了replacer是一个数组，则可选择性的仅包含数组指定的属性。 (就是说选择了数组中的那些项)
 */
// JSON.stringify(value[, replacer [, space]])
// JSON.stringify 中的replacer回调

// 例一
var o2 = {
    a:[1,2], 
    b:true,
    c:[3,4,"x",{y:34,z:56}],
};

//replacer 节点转换函数，在值被转为字符串之前转换树节点的值
var jsonStr2 = JSON.stringify(o2,function (key,value) {
    if(value === true){
        value = false;
    }
    if((value instanceof Array)&&value.length == 4){
        value[0] = "Hi";
    }
    // if(key === "a"){
    //     console.log("find key a");
    //     value = 12345;
    // }
    if(key === "z"){
        console.log("find key z");
        value = "zzz";
    }
    if((value instanceof Array) && value.length == 2){
        value[1] = "change";
    }
    return value;
});
console.log(jsonStr2);
// {"a":[1,"change"],"b":false,"c":["Hi",4,"x",{"y":34,"z":"zzz"}]}
console.log(o2);
//  a: [1, "change"]    c: ["Hi", 4, "x", {…}]  o2的两个位置发生了变化，均是数组
//  b: true,  并未发生变化


//例二
function replacer(key, value) {
    if (typeof value === "string") {
        return undefined;//如果是null会怎样？
    }
    return value;//若没有这一句会怎样？  ==>   // 返回 undefined
}
var foo = { foundation: "Mozilla", model: "box", week: 45, transport: "car", month: 7 };
var jsonString1 = JSON.stringify(foo, replacer);
console.log(jsonString1);//'{"week":45,"month":7}'

//如果replacer是一个数组，数组的值代表将被序列化成JSON字符串的属性名。
var jsonString2 = JSON.stringify(foo, ['model', 'transport']);  
console.log(jsonString2);//'{"model":"box","transport":"car"}'