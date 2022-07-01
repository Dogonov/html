// 3. Напишите функцию которая бы переворачивала предоставленную строку
// Возможно, вам придется превратить строку в массив, прежде чем вы можете обратить его. 
// Ваш результат должен быть строкой.
// "something"
// "test" => "tset"

// var input ="something";
// function reordersText(text){
//    var arr = text.split('');
//    var reverseArr = arr.reverse();
//    var resalt = reverseArr.join('');
//    return resalt;
// }
// console.log(reordersText(input));
const reordersText = (text) => text.split('').reverse().join('');
console.log(reordersText("something"));