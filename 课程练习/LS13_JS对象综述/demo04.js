
var obj = {};
obj.x = 2;  // 直接添加属性
console.log(obj.x); // 通过 . 访问属性 2
obj.x = 5;  // 设置属性
console.log(obj["x"]);  // 通过 [] 访问属性 5
delete obj.x;   // 删除属性
console.log(obj.x);  // undefined

//访问属性的for循环
var obj2 = {
    id_1:2,
    id_2:4,
    id_3:6,
    id_4:8,
    id_5:10
};
for (var i in obj2){
    console.log(i, obj2[i]);
}
// id_1 2
// id_2 4
// id_3 6
// id_4 8
// id_5 10

//obj3 和 obj4 内容 区别
var obj3 = {};
for(var i=0;i<10;i++){
    obj3.i = i;
    console.log(obj3.i);
    // 0 1 2 3 4 5 6 7 8 9
    console.log(obj3);
}
console.log("***************");
var obj4 = {};
for(var i=0;i<10;i++){
    obj4[i] = i;
    console.log(obj4[i]);
    // 0 1 2 3 4 5 6 7 8 9
    console.log(obj4);
}
/**
 * 最后得到的obj3对象 ：{i: 9}
 * obj4对象 ： 
 * {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9}
 */