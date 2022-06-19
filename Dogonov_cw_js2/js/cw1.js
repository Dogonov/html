
var num = +prompt("Введите число");
var resalt = (num < 5 ? "Tiny" : num < 10 ? "Small" : num < 15 ? "Medium" : num < 20 ? "Large" : "Huge");
alert(resalt);
// var num = +prompt ("Введите число");
// if (num < 5) {
//     alert ("Tiny");
// }
// else if (num < 10) {
//     alert ("Small");
// }
// else if (num < 15) {
//     alert ("Medium");
// }
// else if (num < 20) {
//     alert ("Large");
// } else {
//     alert ("Huge");
// }