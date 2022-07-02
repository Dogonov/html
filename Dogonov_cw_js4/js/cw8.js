// 8.	Сумма в диапазоне
		
// 			Напишите 2 функции.
// 			Первая функция генерирует массив на N рандомных чисел в диапазоне от A до B и возвращает его 
// 			Т.е. принимает 3 параметра и А не может быть больше чем B
// 			Например: doSmth(8, 1, 10) -> [3, 2, 5, 4, 7, 1, 3, 10]
			
// 			Вторая функция принимает массив рандомных чисел, индекс С которого начинать подсчет и индекс ПО который считать
// 			Должна быть валидация индексов
// 				- Чтобы не было отрицательных чисел
// 				- Чтобы индекс не выходил за рамки допустимых индексов
// 				- Чтобы первый индекс был меньше или равен второму
			
// 			Пример вывода в консоль:
// 			Массив: [.....] сгенерированный от A до B
// 			Сумма чисел в диапазоне от индекса C по индекс D равна: 10
var num = +prompt("Введите длинну массива");
var a = +prompt("Введите минимальное значения допустимое в массиве");
var b = +prompt("Введите максимальное значения допустимое в массиве");
var c = +prompt("Введите минимальное значения интервала");
var d = +prompt("Введите максимальное значения интервала");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function doSmth(a , b , num) {
    if (a > b) {
        alert("А больше чем В");
        return;
    } 
    let arr = [];
    for (var i = 0; i < num; i++) {
        var randomInt = getRandomInt(a, b);
        arr.push(randomInt);
    }
    return arr; 
    
}
function calculateRangeArr(c, d, arrNew) {
    if (c < 0 || d < 0) {
        alert("error");
        return;
    }

    if (d > arrNew.length) {
        alert("error");
        return;
    }

    if (c > d) {
        alert("error");
        return;
    }
    var sum = 0;
    for (var i = c; i < d; i++) {
        sum = sum + arrNew[i];
    }
    console.log("Сумма чисел в диапазоне от индекса " + c + " по индекс " + d + " равна " + sum);
}
var arrRandom = doSmth(a, b, num);
console.log(arrRandom);
// console.log("Массив: " + (arrRandom) + " сгенерированный от " + a + " до " + b); не придумал как вывести в консоль текст с масивом
calculateRangeArr(c, d, arrRandom);