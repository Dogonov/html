// 3.	Заменить все элементы

// Напишите функцию replaceAll, которая принимает первым параметром массив элементов, вторым параметром - элемент, который нужно заменить и третьим - 
// элемент, который должен заменить второй элемент.
// Пример:
//  replaceAll(array: [1,2,2], old: 1, new: 2) // [2,2,2]
var arr = [1, 2, 2, 5]
var oldEl = +prompt("what element do you want to change?");
var newEl = +prompt("add new element.")
function replaceAll(arr, oldEl, newEl) {
    var find = arr.indexOf(oldEl);
    if (find === -1){
        alert("dont find element");
    }
    var replace = arr.splice(find, 1, newEl)
    console.log (replace);
    console.log (arr);
}
replaceAll(arr, oldEl, newEl);