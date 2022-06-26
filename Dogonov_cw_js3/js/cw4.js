// 4. Добавьте ["dog", 3] в конец переменной myArray и выведите в консоль.
// Выведите в консоль первый элемент в каждом вложенном массиве.

// // Setup
// var myArray = [["John", 23], ["cat", 2]];
var myArray = [["John", 23], ["cat", 2]];
var newMas = myArray.push(["dog", 3]);
console.log (myArray[0][1], myArray[1][1], myArray[2][1]);