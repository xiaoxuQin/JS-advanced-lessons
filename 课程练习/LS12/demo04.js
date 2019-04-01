// 实例一
// 在网页中的遮罩层，调用的时候创建一个
// 不可能每次调用创建，因此如果遮罩层已经存在，就用已经存在的
// 如果不存在就创建一个新的遮罩层（也就是一个新的元素）
function fn(){
    var a;
    return function(){
        return a|| (a = document.body.appendChild(document.createElement('div')));
    }
    // 只希望它执行一次，添加元素的操作过程只执行一次
};
var f = fn();
f();

// 实例二
// 定时与节点 2秒后执行，由于闭包所以objID此时还存在
// 虽然有时没有直接用，到闭包无时无刻不存在
function closureExample(objID, text, timedelay){
    setTimeout(function(){
        document.getElementById(objID).innerHTML = text;
        console.log(objID, text);
    }, timedelay);
}
closureExample("myDiv", "closure is Create", 2000);
// 定时修改DOM节点案例，2秒后执行，仍能访问到objID
// 这里不能执行是因为没有 objID 这个节点


// 实例三       ？？？      ？？？
var db = (function(){
    // 创建一个隐藏的object, 这个object持有一些数据，从外部不能访问这个object
    var data = {};

    // 创建一个函数，这个函数提供一些访问data的数据的方法
    return function(key, val){
        if(val === undefined){return data[key]} // get
        else{return data[key] = val}    // set
    };

    // 可以调用这个匿名方法返回这个内部函数，形成了一个闭包
})();
db('x');    // undefined
db('x', 1);
db('x');    // 返回 1
// 不能直接访问data这个object本身，但可以设置它的成员

// 实例四
(function(){
    var m = 0;
    function getM(){
        return m;
    }
    function setM(val){
        m = val;
    }
    window.g = getM;
    window.f = setM;
}());
f(100);
g();        // 100

// 实例五
function f(){
    var result = [];
    for(var i = 0; i < 3; i++){
        (function(){
            var pos = i;
            var func = function(){
                return pos;
            }
            result.push(func);
            console.log(i,pos);
        }());
    }
    return result;
}
console.log(f()[1]());
// 0  0
// 1  1
// 2  2
// 1

function f(){
    var result = [];
    for(var i = 0; i < 3; i++){
        // (function(){
            var pos = i;
            var func = function(){
                return pos;
            }
            result.push(func);
            // console.log(i,pos);
        // }());
    }
    return result;
}
console.log(f()[1]());
// 2
