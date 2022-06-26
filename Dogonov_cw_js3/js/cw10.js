
		// 10. Сумма введённых чисел

		// Создайте массив
		// Через цикл запрашивайте у пользователя цифры
		// Заканчивайте запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
		// Подсчитайте и верните сумму элементов массива.
		// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
// 	var sum = [];
// 	// var a = null;
// 	// var b = undefined;
// 	// var c = NaN;
// 	// var d = String;
// 	var j =  prompt ("Add number");
// for (let i = 1; j = number ; i++) {
//     sum.pop(j);
// 	j = prompt ("Add number");
// }
// var total = 0;
// for (var h in sum) {
//   total += sum[h];
// }

// console.log(total);
// // j != a || j != b || j != c || j != d
const numbers = []

for (let index = 0;;index++) {
    const input = prompt ("Add number")
    const number = parseInt(input)

    if (!input || isNaN(number)) {
        break
    }

    numbers.push(number)
}

let result = 0

for (let index = 0; index < numbers.length; index++) {
    result += numbers[index]
}

console.log(result)