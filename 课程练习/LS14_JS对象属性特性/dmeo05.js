// 属性特性的继承特点
var o1 = {};
Object.defineProperty(o1, 'x', {
    value:12,
    // writable:true
});
o1.x = 34;
console.log(o1.x);     // 12
console.log(Object.getOwnPropertyDescriptor(o1, 'x'));
// {value: 12, writable: false, enumerable: false, configurable: false}
// 若给 writable:true 去掉注释  会得到
// 34
// {value: 34, writable: true, enumerable: false, configurable: false}

var o2 = Object.create(o1);
o2.x = 56;
console.log(o2.x);  // 12
// console.log(Object.getOwnPropertyDescriptor(o2, 'x'));  undefined
// 既没有在o2上添加了新属性x, 也没有修改o1的x属性


// 访问器属性特性的继承特点
var o3 = {_x:21};
Object.defineProperty(o3, 'x', {
    get:function(){return this._x}
});
o3.x = 34;
console.log(o3.x);  // 21
// 因为没有 set 方法

var o4 = Object.create(o3);
Object.defineProperty(o4, 'x', {
    set:function(val){this._x = val;},
    get:function(){return ++this._x;}
});
o4.x = 56;
console.log(o4.x);      // 57  因为 return 56 + 1


//全局变量的属性特性是如何的呢？
//{value: 23, writable: true, enumerable: true, configurable: false}
var a = 23;
console.log(Object.getOwnPropertyDescriptor(window,"a"));
// {value: 23, writable: true, enumerable: true, configurable: false}
delete a;//等效delete window.a;     ==> false 
// 删除成功返回true， 删除失败返回false

