
function fn(){
    var arr1 = [];
    for(var i = 0; i < 10; i++){
        arr1[i] = function(){
            return i;
        }
    }
/**
    //for循环等价于
    var i = 0;
    arr1[0] = function(){
        return i;
    }
    arr1[1] = function(){
        return i;
    }
    ,
    ,
    ,
    arr1[9] = function(){
        return i;
    }
*/
    return arr1;
}
fn()[0]();


function fn() {
    var arr1 = [];
    for (var i = 0; i < 10; i++) {
        (function (j) {
            arr1[j] = function () {
                return j;
            }
        })(i)
    }
    return arr1;
}
fn()[0]();
/**
//for循环等价于
(function (j) {
    arr1[j] = function () {
        return j;
    }
})(0)
(function (j) {
    arr1[j] = function () {
        return j;
    }
})(1)
*/   