// 8.	Напишите функцию, которая принимает строку и удаляет в ней все дублирующиеся слова, оставляя тем самым только уникальные
// 			Пример:
// 			Input:
// 			'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
// 			Output:
// 			'alpha beta gamma delta'
let input = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta';
console.log(input);
function delet(input) {
    let arr = input.split(" ");
    let result = [];
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    result = result.join(" "); 
    return result;
}
console.log(delet(input));