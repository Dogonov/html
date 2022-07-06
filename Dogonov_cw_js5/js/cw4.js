// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
var obj = new Object();
// obj.name = "Max"; для проверки
function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }
  console.log(isEmpty(obj));