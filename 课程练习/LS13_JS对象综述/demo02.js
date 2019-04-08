// 访问器属性 实例一
// 访问器属性不包含数据值，只包含一对get、set函数
// 下划线表示是内部属性，只能通过对象的方法来读写
var o = {
    _x:1.0,
    get x(){
        return this._x;
    },
    set x(val){
        this._x = val;
    }
};
console.log(o.x);   // 1
o.x = 2;
console.log(o.x, o._x);     // 2 2
//o.hasOwnProperty("x");//访问器属性
//o.hasOwnProperty("_x");//数据属性
/*
 * 当使用o.x时实际上调用的是x属性的get函数
 * 为o.x赋值时调用的是x的set属性
 */

// 访问器属性 实例
var o = {
    _x:1.0,
    // get x(){
    //     return this._x;
    // },
    set x(val){
        this._x = val;
    }
};
// 可写不可读
console.log(o.x);           // undefined
console.log(o.x, o._x);     // undefined  2

//访问器属性 实例二 只读
var o = {
    _x:1.0,
    get x(){
        return this._x;
    }
};
console.log(o.x);   // 1
o.x = 2;
console.log(o.x, o._x);     // 1 1
/////
var o = {
    _x:1.0,
    get x(){
        return this._x;
    }
};
console.log(o.x);   // 1
o.x = 2;
console.log(o.x);   // 1
/*
 * 当使用o.x时实际上调用的是x属性的get函数
 * 为o.x赋值时调用的是x的set属性
 */

// 访问器属性 实例三
var p1 = {
    _name:"jack",
    _age:23,
    set age(val){
        if(val > 0 && val < 150){
            this._age = val;
        }else{
            console.log("请设置正常年龄");
        }
    },
    get age(){
        return this._age;
    }
};
p1.age = 178;
console.log(p1.age);
// 请设置正常年龄
// 23
p1.age = 78;
console.log(p1.age);
// 78

//访问器属性 综合实例
var p = {
    x:1,
    y:1,
    get r(){return Math.sqrt(this.x * this.x + this.y * this.y);},
    set r(newValue){
        var oldValue = Math.sqrt(this.x * this.x + this.y * this.y);
        var ratio = newValue / oldValue;
        this.x *= ratio;
        this.y *= ratio;
    },
    get theta(){return Math.atan2(this.y, this.x);}
};
var q = Object.create(p);
q.x = 2;
q.y = 2;
console.log(q.r);       // 2.8284271247461903  根号8
console.log(q.theta);   // 0.7853981633974483  

/*
 *  Math.atan()  接受一个参数
 *  得到结果 为一个角度的弧度值
 *  
 *  Math.atan2() 接受两个参数x和y
 *  x 指定点的 x 坐标的数字      y 指定点的 y 坐标的数字。
 *  计算出来的结果angel是一个弧度值
 */