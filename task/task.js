function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var a = +prompt("Add A");
var b = +prompt("Add B");
var n = +prompt("Add long N");
function doSomthing(a, b, n) {
    if (a > b) {
        alert("A > B")
    }
    var arr = [];
    for (let i = 0; i < n; i++) {
        var randomInt = getRandomInt(a, b);
        arr.push(randomInt);
    }
    return arr;
}
var c = +prompt("Add C");
var d = +prompt("Add D");

function calculateRangeArr(c, d, newArr) {
    if (c < 0 || d < 0) {
        alert("numbers negativ");
        return;
    }
    if (c < a || d > b) {
        alert("Error");
        return;
    }
    if (c > d) {
        alert("C > D");
        return;
    }
    var sum = 0;
    for (var i = c; i < d; i++) {
        sum = sum + newArr[i];
    }
    console.log(c + d + sum);
}
var arrRandom = doSomthing(a, b, n);
console.log(arrRandom);
calculateRangeArr(c, d, arrRandom);