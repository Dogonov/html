// 3.	Допишите функцию, которая определит, парное ли число (решение должно быть в одну строку).
// Функция должна вернуть "Even" или "Odd";
// function isEven(num) {
//     // your code here
// }
var num = +prompt("Add number");
function isEven(number) {
    return number % 2 === 0 ? "Odd" : "Even";
}
console.log(isEven(num));