// 7.	Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
// 			Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
// 			let vasya = { name: "Вася", age: 25 };
// 			let petya = { name: "Петя", age: 30 };
// 			let masha = { name: "Маша", age: 29 };
// 			let arr = [ vasya, petya, masha ];
// 			alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };
let arr = [vasya, petya, masha];

function getAverageAge(arr) {
    let ages = [];
    for (let i = 0; i < arr.length; i++) {
        ages.push(arr[i].age);
    }
    var midAge = 0;
    for (let i = 0; i < ages.length; i++) {
        midAge += ages[i];
    }
    midAge /= ages.length;
    return midAge;
}
alert(getAverageAge(arr));
