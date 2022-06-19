var a = +prompt("Введите первое число");
var b = +prompt("Введите второе число");
var c = +prompt("Введите третие число");
var resalt;
if (a === b || b === c ||  a === c) {
alert ("Ошибка");
}
else {
    resalt = (a+b+c)/3;
    alert (resalt);
}