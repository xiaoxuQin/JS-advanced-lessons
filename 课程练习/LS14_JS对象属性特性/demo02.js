// part 04
// 001 通过Object.defineProperty来添加和改变的get /set的属性特性
// 添加访问器
var obj1 = {
    _name:'lucy'
};
Object.defineProperty(obj1, 'name', {
    get:function(){
        return this._name;
    }
});
console.log(obj1.name); // lucy
console.log(obj1.name); // lucy
obj1.name = 'jack';
console.log(obj1.name); // lucy 只定义了getter访问器，写入失效 

// 002 改变访问器属性特性 注意添加访问器和修改访问器特性的写法的区别
var obj2 = {
    _name:'lucy',
    set name(val){this._name = val},
    get name(){return this._name}
};
Object.defineProperty(obj2,'name',{
    get:function(){
        return this._name + '_hihi';
    },
    set:function(val){
        this._name = val + '_haha';
    }
});
console.log(obj2.name);     // lucy_hihi
obj2.name="jack";
console.log(obj2.name);     // jack_haha_hihi



// part 05
var person = {_name:'jack'};
Object.defineProperty(person,'name',{
    configurable:false,
    enumerable:true,
    set:function(val){this._name = val},
    get:function(){return this._name}
});
console.log(person.name);   // jack
person.name = "lucy";
console.log(person.name);   // lucy
delete person.name;     
console.log(person.name);   // lucy 