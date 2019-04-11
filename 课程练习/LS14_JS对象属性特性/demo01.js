// part 01
var objProto = {
    z:3
};
var obj = Object.create(objProto);
obj.x = 1;
obj.y = 2;
console.log(obj.x); // 1
console.log(obj.y); // 2
console.log(obj.z); // 3
console.log(obj.toString);  // ƒ toString() { [native code] }
// 原型链上有toString属性
for(var i in obj){
    console.log(i, obj[i]); // 遍历得不到 toString
}
// toString 方法是内部的，没有办法遍历到
// 对象里面的某些的属性和方法是没有办法被遍历到的


// part 02
var obj = {
    x:1,
    y:2
};
Object.defineProperty(obj, 'x', {enumerable : false});
for(var i in obj){
    console.log(i, obj[i]);    // y 2  遍历不到X
}
/////
var obj = {
    x:1,
    y:2
};
Object.defineProperty(obj, 'x', {writable:false, value:11, enumerable:false, configurable:true});
for(var i in obj){
    console.log(i, obj[i]);    
}
// x的值始终为 value： 11 


// part 03
var person = {name:'jack'};
Object.defineProperty(person,'name',{
    writable:false,
    configurable:false,
    enumerable:true,
    value:'mike'
});
console.log(person.name);   // mike
person.name = 'lucy';
delete person.name;
console.log(person.name);   // mike
for(var i in person){
    console.log(i,person[i]);   // name mike
}
// configurable:true,  -->  
// delete person.name; console.log(person.name); --> undefined



// part 04
// 001 --> 直接添加的属性，其所有特性默认都是true
var obj = {
    x:1,
    y:2
};
obj.z = 3;
for(var i in obj){
    console.log(i,obj[i]);
}
// x 1    y 2     z 3

// 002 通过Object.defineProperty方法添加的属性，
//     除了手动修改，其所有特性默认都是false
var obj = {
    x:1,
    y:2
};
obj.z = 3;
Object.defineProperty(obj, 'w', {value:456, configurable:true});
// writable,enumerable没有指定，所以默认为false
for(var i in obj){
    console.log(i, obj[i]);
}
// x 1    y 2     z 3
console.log(obj.w); // 456
// w 属性存在，但是for  in 循环遍历不到

