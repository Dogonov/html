// 1. Напишите функцию, которая принимает массив в качестве аргумента. 
//         Используя slice(), извлеките информацию из массива аргументов и верните новый массив, содержащий элементы «warm» и «sunny».

//         ['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']
var arr = ['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'];
function extractInformation(arr) {
    var newArr = arr.slice(2, 4)
    return newArr;
}
var resalt = extractInformation(arr);
console.log(resalt);