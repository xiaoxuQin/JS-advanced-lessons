// 静态方法实例与原型方法实例
var BaseClass = function(){};
BaseClass.prototype.f2 = function(){
    console.log("原型方法");
};
BaseClass.f1 = function(){
    console.log("静态方法");
};
BaseClass.f1();     // 静态方法
var instance1 = new BaseClass();
instance1.f2();     // 原型方法
instance1.f1();     // 报错 ， instance1.f1 is not a function


///////////
var BaseClass = function() {};
BaseClass.prototype.method1 = function(){
    console.log("1  Base.prototype");
};
var instance1 = new BaseClass();
instance1.method1();        // 1  Base.prototype
instance1.method1 = function(){
    console.log("2  a method in instance1");
};
instance1.method1();        // 2  a method in instance1


//////////////////
var BaseClass = function() {
    this.method1 = function(){
        console.log('1 Defined by the "this" in the instance method');
    }
};
var instance1 = new BaseClass();
instance1.method1 = function(){
    console.log('2 Defined directly in the instance method');
};
instance1.method1();    // Defined directly in the instance method
BaseClass.prototype.method1 = function(){
    console.log('3 Defined by the prototype instance method ');
};
instance1.method1();    // Defined directly in the instance method