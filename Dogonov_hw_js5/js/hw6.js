// 6. (*) Для задания 3 создать метод, позволяющий отсортировать массив сотрудников по одному из свойств:
//  name, sName, age, occupation, salary.
// Параметр для сортировки принимается от пользователя.
// После выполнения функции — вывести информацию о сотрудниках.

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

var criterion= prompt("Введите одно из значений для сортировки: name, sName, age, occupation, salary ");
company.sort(function (a, b) {
    switch (criterion) {
        case "name":
            if (a["name"] > b["name"]) {
                return 1;
            }
            else if (a["name"] < b["name"]) {
                return -1;
            } else { return 0; }
            break;
        case "sName":
            if (a["sName"] > b["sName"]) {
                return 1;
            }
            else if (a["sName"] < b["sName"]) {
                return -1;
            } else { return 0; }
            break;
        case "occupation":
            if (a["occupation"] > b["occupation"]) {
                return 1;
            }
            else if (a["occupation"] < b["occupation"]) {
                return -1;
            } else { return 0; }
            break;
        case "age":
            return a["age"] - b["age"];
            break;
        case "salary":
            return a["salary"] - b["salary"];
            break;
        default:
            alert("None");
    }
})
console.log(company);
// не совсем понял задние, нагугли ответ.
    


