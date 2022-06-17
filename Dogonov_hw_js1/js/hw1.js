var x1 = +prompt("Введите кординату Х для 1 точки");
var y1 = +prompt("Введите кординату Y для 1 точки");
var x2 = +prompt("Введите кординату Х для 2 точки");
var y2 = +prompt("Введите кординату Y для 2 точки");
var k = (y1 - y2) / (x1 - x2);
var b = y2 - k*x2;
// console.log ("y =" + k + "x +" + b);
alert ("y =" + k + "x +" + b);
