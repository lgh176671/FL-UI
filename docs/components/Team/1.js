  var a = [1,2,3,4,5];
var b = [3,2,5,7,6];

 //求交集
function intersection(...arg) {
    var arr = arg[0].filter((item)=>arg[1].includes(item));
    return arr;
}
 //求差集
function difference(...arg) {
    var arr = union(...arg).filter((item)=>!intersection(...arg).includes(item));
    return arr;
}
console.log(intersection(a,b));
console.log(difference(a,b));


