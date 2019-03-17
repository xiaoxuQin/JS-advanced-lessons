// part 03 &&与||在实际中的应用
var score = 76;
if(score>90){
    console.log("优");
}else if(score>75){
    console.log("良");
}else if(score>60){
    console.log("及格");
}else{
    console.log("不及格");
}
//通过&&和||的组合实现如上功能，注：小括号优先级最高
console.log((score>90&&"优")||(score>75&&"良")||(score>60&&"及格")||"不及格");

// swich...case... 
// switch 和 case 做的都是 全等判断 ，值和类型都相等
var score = 76;
switch(true){
    case score > 90:
        console.log("优");
        break;
    case score > 80:
        console.log("良");
        break;
    case score > 70:
        console.log("及格");
        break;
    default:
        console.log("不及格");
        break;
}

// part 04 &&与||在实际中的应用
var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));    // 1 + 2 + 3 = 6
console.log(sum(1,2));      // 1 + 2 + 5 = 8
console.log(sum(1));        // 1 + 4 + 5 = 10
console.log(sum(1,0,0));    // 1 + 4 + 5 = 10

// 优化改造版本
// 增加判断，确保实参转换为布尔类型时为true
var sum = function(a,b,c){
    if(b!=false){b = b||4;}//(b!=false)&&(b=b||4);
    if(c!=false){c = c||5;}//(c!=false)&&(c=c||5);
    return a+b+c;
};
console.log(sum(1,2,3));    // 6
console.log(sum(1,2));      // 8
console.log(sum(1));        // 10
console.log(sum(1,0,0));    // 1