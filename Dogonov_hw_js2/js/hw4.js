var a = +prompt("Введите первое число оно должно быть меньше второго");
var b = +prompt("Введите второе число оно должно быть больше первого");
var sum = 0;
while (a < b){
  a++;
  if(a < b) 
    {
      sum = sum + a;
    }
    if (a % 2 ===0) {
        continue;
    }
    alert(a);
}    
alert(sum);