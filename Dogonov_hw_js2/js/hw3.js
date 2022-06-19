var a = +prompt("Введите первое число");
var b = +prompt("Введите второе число");
var c = +prompt("Введите третие число");
var resalt;
if (a > b && a > c) {
    alert(a);
}
else if (b > a && b > c) {
    alert(b);
}
else if (c > a && c > b) {
    alert(c);
}
else if (a ===  b || b === c || a === c) {
    alert(c);
}