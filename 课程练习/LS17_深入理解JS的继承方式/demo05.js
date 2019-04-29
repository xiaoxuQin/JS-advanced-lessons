// part 01 constructor属性的应用

//  1 确定对象的构造函数名
function Foo() {}
var f = new Foo();
console.log(f.constructor.name);    //Foo

//  2 创建相似对象
function Constr(name) {
    this.name = name;
}
var x = new Constr("Jack");
console.log(x.constructor);
// ƒ Constr(name) {
//     this.name = name;
// }
var y = new x.constructor("Mike");  
console.log(y);     // Constr {name: "Mike"}
console.log(y instanceof Constr);   // true

// 3 constructor可用于指定构造函数
function Person(area){
    this.type = 'person';
    this.area = area;
}
Person.prototype.sayArea = function(){
    console.log(this.area);
};
var Father = function(age){
    this.age = age;
};
Father.prototype = new Person('Beijin');
console.log(Person.prototype.constructor); //function person()
console.log(Father.prototype.constructor); //function person()
Father.prototype.constructor = Father;     //修正constructor指向  ***!!!
console.log(Father.prototype.constructor); //function father()
var one = new Father(25);


// Part 02 公有属性、私有属性、特权方法

function A(id) {
    this.publicId = id;     // 公有
    var privateId = 456;    // 私有
    this.getId = function () {
        console.log(this.publicId, privateId);
    };  
}   
var a = new A(123); 
console.log(a.publicId);        // 123
console.log(a.privateId);       // undefined  私有属性，访问不到
a.getId();          // 123   456


//思考哪些是true，哪些是false
function Person(name){
	this.name = name;
}
Person.prototype.getName = function(){}
// Person.prototype = { //测试如果更改了Person.prototype输出又会变成什么?
// 	getName:function(){}
// }
var p = new Person("jack");
console.log(p.__proto__ === Person.prototype); // true 
console.log(p.constructor === Person);  // true
console.log(Person.prototype.constructor === Person);   // true
console.log(p.__proto__ === p.constructor.prototype); // true 
         
console.log(Object.prototype === p.constructor.prototype);  // false
console.log(Object.prototype === p.constructor.prototype.__proto__);  // true
console.log(Object.prototype === Person.__proto__.__proto__);  // true
console.log(Person.__proto__.__proto__ === Person.prototype.__proto__); // true

console.log(({getName:function(){}}).__proto__ === p.constructor.prototype); // false
console.log(({getName:function(){}}).__proto__ === Object.prototype); // true
console.log(({getName:function(){}}).__proto__ === p.constructor.prototype.__proto__); // true
        /**  每组之间的关系 要互相倒清楚 */



//补充：Shape 多态          ？？？？？？？？
/*
//测试
function A(){
    this.a = 10;
    this.af = function(){console.log(this.a);}
}
var a = new A();

function B(){
    A.call(this);
    this.b = 20;
    this.bf = function(){console.log(this.a);}
}
B.prototype.__proto__ = A.prototype;
var b = new B();
*/
