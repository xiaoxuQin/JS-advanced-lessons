// JS实现继承的形式 一
function Person(name, age){
    this.name = name;   
    this.age = age;
};
Person.prototype.showName = function(){
    console.log(this.name);
};
function Student(name, age, id){
    Person.call(this, name, age);
    this.id = id;
}
// console.log(Student.prototype);
// console.log(Student.prototype.__proto__);

Student.prototype.__proto__ = Person.prototype;

var s1 = new Student("xxx", 22, 2017001);
var s2 = new Student("www", 33, 2017002);
console.log(s1.name, "  ", s1.age, "  ", s1.id);    // xxx    22    2017001
s1.showName();      // xxx
console.log(s2.name, "  ", s2.age, "  ", s2.id);    // www    33    2017002
s2.showName();      // www
/**
 * 属性：使用call()方法，令student调用person的构造函数
 * 方法：Student.prototype.__proto__ = Person.prototype;
 *      Person的方法定义在Person的prototype上面
 */


// JS实现继承的形式 二
function Person(name, age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){
    console.log(this.name);
};
function Student(name, age, id){
    Person.call(this, name, age);
    this.id = id;
}
Student.prototype = Object.create(Person.prototype);
console.log(Student.prototype.__proto__ == Person.prototype);  // false
Student.prototype.constructor = Student;
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);

/**
 * 与形式一相比， 不同之处在于
 * Student.prototype = Object.create(Person.prototype);
 */

console.log(Person.prototype.constructor); //
console.log(Student.prototype.constructor); //
console.log(Person.prototype.constructor == Student.prototype.constructor); // false
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);
console.log(s1.name, "  ", s1.age, "  ", s1.id);    // xxx    22    2017001
s1.showName();      // xxx
console.log(s2.name, "  ", s2.age, "  ", s2.id);    // www    33    2017002
s2.showName();      // www