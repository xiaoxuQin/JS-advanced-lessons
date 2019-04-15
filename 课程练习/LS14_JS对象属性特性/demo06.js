// 下述方法的使用
// Object.keys()                        返回所有 *自有* （非继承）      可枚举属性的键
// Object.getOwnPropertyNames()         返回所有 *自有* （非继承）键，  包括不可枚举 !!!
// Object.prototype.hasOwnProperty()    判断 *自身* 是否有该属性，      包括不可枚举的属性 !!!
// Object.prototype.propertyIsEnumerable() 判断 *自身* 是否有该属性并检测该属性   是否可枚举
// in  检测一个对象是否有某个属性，包括继承的属性，包括不可枚举的属性
// for...in 遍历一个对象的属性，包括继承的属性，但不包括不可枚举的属性
// 思考Object静态方法和Object.prototype原型方法的区别（都共享了方法，使用上有什么区别）
var o3 = {};
o3.y = 'yyy';
Object.defineProperty(o3, 'x',{
    configurable:true,
    enumerable:false,
    writable:true,
    value:'xxx'
});
console.log(Object.keys(o3));       // ["y"]
console.log(Object.getOwnPropertyNames(o3));     // ["y", "x"]
console.log(o3.hasOwnProperty('x'));    // true
console.log(o3.propertyIsEnumerable('x'));    // false

for(var i in o3){
    console.log(i, o3[i]);
    // y yyy
}
console.log('x' in o3, 'y' in o3);  // true true
console.log(o3.hasOwnProperty('x'), o3.hasOwnProperty('y'));  // true true

// 遍历属性综合实例
var o4 = {};
o4.a = 'aaa';
Object.defineProperty(o4, 'b', {
    configurable:true,
    enumerable:false,
    writable:true,
    value:'bbb'
});
var o5 = Object.create(o4);
o5.c = 234;
Object.defineProperty(o5, 'd', {
    enumerable:false,
    value:567
});
for(var i in o5){
    if(o5.hasOwnProperty(i)){
        console.log('o5 自有可遍历属性：', i, o5[i]);
    }else{
        console.log('o5 非自有可遍历属性：', i, o5[i]);
    }
}
// o5 自有可遍历属性： c 234
// o5 非自有可遍历属性： a aaa

console.log(o5.propertyIsEnumerable('a'),   // false 自身没有
            o5.propertyIsEnumerable('b'),   // false 自身没有且不可枚举 
            o5.propertyIsEnumerable('c'),   // true 
            o5.propertyIsEnumerable('d'));  // false 不可枚举
// false false true false 

console.log('a' in o5, 'b' in o5, 'c' in o5, 'd' in o5);
// true true true true
console.log(Object.keys(o5));   // ["c"]
console.log(Object.getOwnPropertyNames(o5));    
//  ["c", "d"]  自身，无论是否可枚举
