// 1. Сделать собственные примеры методов применяемых для массивов.
var numbers = ["0", "1", "2", "3"];
console.log("start arr");
console.log(numbers);
// Join
var changedArr = numbers.join(" ");
console.log("after join");
console.log(changedArr);
//Split
var newArr = changedArr.split(" ");
console.log("after split")
console.log(newArr);
//Concat
numbers = numbers.concat("4", "5");
console.log("after concat");
console.log(numbers);
//Reverse
numbers = numbers.reverse();
console.log("after reverse");
console.log(numbers);
numbers = numbers.reverse();
//Slice
var numbersStart = numbers.slice(0, 2);
console.log("after slice");
console.log(numbersStart);
//Splice
numbers.splice(0, 1, 9);
console.log("after splice");
console.log(numbers);
//Push
numbers.push(6, 7, 8);
console.log("after push");
console.log(numbers);
//Sort
numbers.sort();
console.log("after sort");
console.log(numbers);
//Pop
numbers.pop();
console.log("after pop");
console.log(numbers);
//Unshift
numbers.unshift(0);
console.log("after unshuft");
console.log(numbers);
//Shift
numbers.shift();
console.log("after shuft");
console.log(numbers);


