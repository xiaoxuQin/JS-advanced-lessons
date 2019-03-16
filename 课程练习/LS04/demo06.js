// for... in...

//for ... in 遍历数组
var arr = [2,,"33"];
for(var i in arr){
    console.log(i,arr[i]);
}
// 0 2
// 2 33

//for ... in 遍历对象
var obj = {x:10,y:20,z:"30"};
for(var k in obj){
    console.log(k,obj[k],typeof obj[k]);
}
// x 10 number
// y 20 number
// z 30 string

var obj1 = {x:1};
var obj2 = Object.create(obj1);
obj2.y = 2;
obj2.z = 3;
for(var k in obj2){
    console.log(k,obj2[k]);
}
// y 2
// z 3
// x 1