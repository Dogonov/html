var num = +prompt("введите число больше 100");
var esc = null;
while (num < 100) {  
    alert ("Ведите еще раз");
    var num = +prompt("введите число больше 100");
    if (num === esc) {
        break;
    }
}