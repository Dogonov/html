// 1.	Часы
// Напишите функцию, которая принимает на вход количeство часов, минут и секунд, и преобразует полученное время в миллисекунды.
// Пример:
// past(0, 1, 1) == 61000
var h = +prompt("Add hours");
var m = +prompt("Add minets");
var s = +prompt("Add seconds");
function chengeTime(h, m, s) {
    var result = h * 3600000 + m * 60000 + s * 1000;
    alert(result);
}
chengeTime(h, m, s);