// 1. Создать объект Point, содержащий два свойства: "x" и "y" — координаты точки, и метод GetQuadrant,
// вычисляющий, в каком квадранте в декартовой системе координат находится данная точка. Протестируйте данный объект, 
// изменяя значения его координат, и повторно вызавая метод GetQuadrant.
a = +prompt("Add x");
b = +prompt("Add y");
var point = {
    x: a,
    y: b
}
var GetQuadrant = function (x, y) {
    if (point.x > 0 && point.y > 0) {
        console.log("Point in 1");
    }
    else if (point.x < 0 && point.y > 0) {
        console.log("Point in 2");
    }
    else if (point.x < 0 && point.y < 0) {
        console.log("Point в in 3");
    }
    else if (point.x > 0 && point.y < 0) {
        console.log("Point in 4");
    }
    else if (point.x == 0 && point.y == 0) {
        console.log("Point in middle");
    }

}
GetQuadrant();