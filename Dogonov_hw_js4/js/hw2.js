// 2.	Создать функцию, возводящую число в степень, число и сама степень вводится пользователем
// 		Проверить числа на корректность
var number = +prompt("Введите число");
var degree = +prompt("Введите степень");
function comparison(num) {
    if (num < 0) {
        return -num;
    }
    else {
        return num;
    }
}
function exponentiates(a, b) {
    if (b == 0) {
        return 1;
    } else if (b == 1) {
        return a;
    }
    var r = 1;
    for (var n = 0; n < comparison(b); n++) {
        r = r * a;
    }
    if (b < 0) {
        return 1 / r;
    }
    return r;
}
alert(exponentiates(number, degree));