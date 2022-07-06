// 5. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников,
//  и каждому из объектов
// будет добавлять новое свойство "salary", хранящее зарплату сотрудника. 
// Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
//     • "director" — 3000;
//     • "manager" — 1500;
//     • "programmer" — 2000;
//     • для остальных значений — 1000.
// После выполнения функции — вывести информацию о сотрудниках.

// // sort(function(a, b) { return a > b });
// // 1, 2, 3, 5, 10, 14
// // 1, 10, 14, 2, 3,

var company = [
    pers1 = {
        name: a = prompt("add name"),
        sName: b = prompt("add sName"),
        age: c = +prompt("add age"),
        occupation: d = prompt("add occupation"),
    },
    pers2 = {
        name: a = prompt("add name"),
        sName: b = prompt("add sName"),
        age: c = +prompt("add age"),
        occupation: d = prompt("add occupation"),
    }
]
function addSalary(arr) {
    for (var i = 0; i < arr.length; i++) {
        switch (arr[i].occupation) {
            case "director":
                arr[i].salary = 3000;
                break;
            case "manager":
                arr[i].salary = 1500;
                break;
            case "programmer":
                arr[i].salary = 2000;
                break;
            default:
                arr[i].salary = 1000;
        }
    }
}
addSalary(company);
for (var i = 0; i < company.length; i++) {
    console.log("name " + company[i].name);
    console.log("sName " + company[i].sName);
    console.log("age " + company[i].age);
    console.log("occupation " + company[i].occupation);
    console.log("salary " + company[i].salary);
}