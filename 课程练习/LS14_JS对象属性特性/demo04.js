// 给多个属性设置特性的方法（Object.defineProperties)
var obj = {_x:1};
// Object.defineProperty(obj,"y",{
//     configurable:false,
//     writable:false,
//     enumerable:true,
//     value:6
// });
// 给多个属性设置特性  :
Object.defineProperties(obj,{
    y:{value:2, writable:true, configurable:true, enumerable:true},
    z:{value:2, writable:true, configurable:true, enumerable:true},
    x:{
        get:function(){return this._x;},
        set:function(val){this._x = val;}
    }
});

// 批量添加属性并设置属性特性 book实例
var book = {};
// 调用Object.defineProperties(对象名，要添加的属性)方法，
// 为对象一次定义多个属性(1.数据属性)(2.访问器属性)
Object.defineProperties(book, {
// * 添加两个数据属性(_year,edition)
    // 下划线表示只能通过对象方法访问的属性
    _year:{value:2004, writable:true},
    edition:{value:1, writable:true},
// * 添加访问器属性(year)
    year:{
        get:function(){return this._year;},
        set:function(newValue){
            if(newValue >2004){
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
});
//测试
book.year=2006;
console.log(book.year, book.edition);    // --> 2006 3

// 关于Object.create的第二个属性，思考x是empty自身属性还是obj2的自身属性？
// x是obj2的自身属性
var empty = {};
var obj2 = Object.create(empty,{
   x:{value:1}, 
   y:{value:2, enumerable:true}
});
console.log(obj2);  // {y: 2, x: 1}     ==> // x是obj2的自身属性
console.log(obj2.hasOwnProperty("x"));   // true

