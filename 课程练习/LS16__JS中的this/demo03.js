// part 01 方法中函数嵌套  this缺陷
var point = {
    x:0,
    y:0,
    moveTo:function(x,y){
        // 内部嵌套函数
        function moveToX(){
            this.x = x;
        }
        // 内部嵌套函数
        function moveToY(){
            this.y = y;
        }
        moveToX(); // moveToX.call(this);  // 通过间接调用来解决
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);                // {x: 0, y: 0, moveTo: ƒ}
console.log(window.x, window.y);   // 2 2


// part 02 方法中函数嵌套 this缺陷 解决办法
/////////// 方案一 ： 软绑定
var point = {
    x:0,
    y:0,
    moveTo:function(x,y){
        var that = this;    // !!! 关键，软绑定
        function moveToX() {
            that.x = x;
        }
        function moveToY() {
            that.y = y;
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);     // {x: 2, y: 2, moveTo: ƒ}
console.log(window.x,window.y); // undefined  undefined

// that 改为 this
var point = {
    x:0,
    y:0,
    moveTo:function(x,y){
        var that = this;    // !!! 关键，软绑定
        function moveToX() {
            this.x = x;
        }
        function moveToY() {
            this.y = y;
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);     // {x: 0, y: 0, moveTo: ƒ}
console.log(window.x,window.y);     // 2 2

//////////   方案二：通过call和apply来解决
var point = {
    x:0,y:0,
    moveTo:function (x,y) {
        function moveToX() {
            this.x = x;
        }
        function moveToY() {
            this.y = y;
        }
        moveToX.call(this); //->this.moveToX()->point.MoveToX()
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);//  {x: 2, y: 0, moveTo: ƒ}  2,0

/////////   方案三：通过bind来解决
var point = {
    x:0,y:0,
    moveTo:function (x,y) {
        function moveToX() {
            this.x = x;
        }
        function moveToY() {
            this.y = y;
        }
        moveToX.bind(point)();
        moveToY.bind(point)();
    }
};
point.moveTo(2,2);
console.log(point);  // {x: 2, y: 2, moveTo: ƒ}