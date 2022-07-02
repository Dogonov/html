// 1.	Создать функцию calculate(a, b, sign), где a и b — два числа, sign — знак арифметической операции.
// 		Функция должна расчитывать результат операции, исходя из переданного ей знака. 
// 		Функция должна проверять корректность введенных чисел и знака операции.
// 		Все аргументы для функции принять от пользователя.
var sign = prompt("Введите знак арифметической операции");
var a = +prompt("Введите число");
var b = +prompt("Введите число");


function calculate(a, b, sign) {
    var result;
    if (isNaN(a) || isNaN(b)) {
        alert("Введите число");
        return;
    }
    switch (sign) {
        case "+": {
            result = a + b;
            break;
        }
        case "-": {
            result = a - b;
            break;
        }
        case "/": {
            result = a / b;
            break;
        }
        case "*": {
            result = a * b;
            break;
        }
        default: {
            alert("Неизвестный оператор");
            return;
        }
    }
    return result;
}
result = calculate(a, b, sign);
if (result != undefined) {
    alert(result);
}