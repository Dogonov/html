// 3.  Напишите код, выполнив задание из каждого пункта отдельной строкой:
//             Создайте пустой объект user.
//             Добавьте свойство name со значением John.
//             Добавьте свойство surname со значением Smith.
//             Измените значение свойства name на Pete.
//             Удалите свойство name из объекта.
var user = new Object();
user.name = "John";
    console.log(user);
user.surname = "Smith";
    console.log(user);
user.name = "Pete";
    console.log(user);
delete user.name;
    console.log(user);
    //tab добавил только для удобства просмотра так как console.log не нужны по заданию но проще для просмотра