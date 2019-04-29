
// ////////////     !!! !!!!    !!! !!  !!!!   !!!! !!! !!!!    !!!!    !!!!!   !!!!    !!
// 通过构造函数创建的对象的原型共享问题
// 以下实现了原型继承，但存在原型共享的问题
function Person(name){
    this.name = name;
}
Person.prototype.age = 22;
Person.prototype.showName = function(){
    console.log(this.name);
}
function Student(id){
    this.id = id;
}
// var p1 = new Person("mike");  Student.prototype = p1; 相当于：
Student.prototype = new Person("Mike");
var s1 = new Student(2017001);
var s2 = new Student(2017002);

console.log(s1.name, s1.age, s1.id);    // Mike 22 2017001
console.log(s2.name, s2.age, s2.id);    // Mike 22 2017002
s1.__proto__.name = "jack";

/***  *****  ****    ***   ** * * * * * ** * * * *  * * * * * ** */
console.log(s1.__proto__ == Student.prototype); // true
console.log(Student.prototype.__proto__ == Person.prototype);   // true
console.log(s1.__proto__.__proto__ == Person.prototype);    // true
/***  *****  ****    ***   ** * * * * * ** * * * *  * * * * * ** */

console.log(s2.name);               // jack
s2.__proto__.__proto__.age = 99;
console.log(s2.age);            // 99
console.log(s1.age);            // 99

console.log(s2.__proto__.__proto__ == Person.prototype); // true

// console.log(s1);         // Student {id: 2017001}
// console.log(s1.__proto__);   // Person {name: "jack"}
// console.log(s1.__proto__.__proto__); // {age: 99, showName: ƒ, constructor: ƒ}

// 给每个student对象单独添加自身属性name和age，涉及到内存浪费
s1.name = "Bill";
s1.age = 22;
s2.name = "Colin";
s2.age = 23;


