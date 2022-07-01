// 5.	Напишите функцию, которая сгенерирует массив рандомных чисел (на 10 элементов) от -10 до 10
// 			Выведите массив в консоль
// 			Посчитайте сумму позитивных чисел из массива и выведите ее в консоль
function getRandomIntInclusive(min, max) {
    min = Math.ceil(-10);
    max = Math.floor(10);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}