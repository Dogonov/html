// 2.  Создайте функцию, которая просматривает массив (первый аргумент) и возвращает первый элемент в массиве, который проходит проверку на истинность (второй аргумент). 
// Если ни один элемент не проходит тест, вернуть undefined.

// function findElement(arr, func) {
//     return item;
// }
function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        let checkFunc = func(arr[i]);
        if (checkFunc === true) {
            return arr[i];
        }
    }
    return undefined;
}
let arr = [0.1, 1, 2, 3, 5];
function checkIfEven(test) {
    if (test % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
var res = checkIfEven(3);
var result = findElement(arr, checkIfEven);
console.log(result);