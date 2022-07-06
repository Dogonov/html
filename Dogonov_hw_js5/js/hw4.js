// 4. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. Каждый элемент масива — объект,
// содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о пользователе.
// Реализовать заполнение массива пользователем. По окончанию заполнения — вывести информацию о сотрудниках.

var company = [
    pers1 = {
        name: a = prompt("add name"),
        sName: b = prompt("add sName"),
        age: c = +prompt("add age"),
        occupation: d = prompt("add occupation"),
        show: function () {
            console.log("name " + this.name);
            console.log("sName " + this.sName);
            console.log("age " + this.age + " years old");
            console.log("occupation " + this.occupation);
        }
    },
    pers2 = {
        name: a = prompt("add name"),
        sName: b = prompt("add sName"),
        age: c = +prompt("add age"),
        occupation: d = prompt("add occupation"),
        show: function () {
            console.log("name " + this.name);
            console.log("sName " + this.sName);
            console.log("age " + this.age + " years old");
            console.log("occupation " + this.occupation);
        }
    }
]
for (var i = 0; i < company.length; i++) {
    company[i].show();
}