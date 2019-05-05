// part 01 
// 增删改查
var a = ['hello'];
a[1] = 3.14;
a[2] = "world";
console.log("删除a[2]前的数组a",a);
//  ["hello", 3.14, "world"]
delete a[2];
console.log("删除a[2]后的数组a",a, "数组的长度：", a.length);
//  ["hello", 3.14, (empty)]    3 
a[0] = "XX";        //改：修改数组元素a[0]
console.log(a[0]);  // XX

var i=2,b=[];
b[i]=3;
b[i+1]="YY";
b[b[i]] = b[0];
console.log(b);  // [(empty), (empty), 3, undefined]

// part 02
var a = [];
a[-1.23] = true;  // 创建一个名为“-1,23”的属性
a["100"] = 0;     // // 数组的第101个元素
a[1.00] = "Hi"; //和a[1]相当
console.log(a.length);  // 101
console.log(a);         // [empty, "Hi", empty × 98, 0, -1.23: true]

/////////////////////////////////////////////////////////////////////

var a1 = [,"abc"];
console.log(a1.length);     // 2
for(var i in a1){
    console.log(i,a1[i]);   //输出几个元素  ==>  1 abc
}
console.log(0 in a1,1 in a1);  // false true

var a3 = [,,];
console.log(a3.length);         // 2   几个逗号长度为几
console.log(["a","b"].length);  // 2
console.log(["a","b",].length); // 2
console.log(["a","b",,].length);    // 3
console.log(["a","b",,,].length);   // 4