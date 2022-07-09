// 2. Каждое число в квадрат
// Напишите функцию, которая принимает число и возводит каждую цифру этого числа в квадрат.
// Пример:
// squareDigits(9119) //811181 так как 9^2 равно 81 и 1^2 равно 1.
function squareDigits(number) {
    var str = String(number);
    var arr = str.split("");
    var mapArr = arr.map(function (number){
        return number * number;
    })
    var res = mapArr.join("");
    console.log(res);
}
squareDigits(9119);