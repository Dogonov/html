// 11. Подмассив наибольшей суммы
// 		Определите максимальную сумму в подмассиве

// 		// Setup
// 		var a = [
// 			[1, -10, 4, 5],
// 			[1, 5, 5, 3],
// 			[-1, 8, 4, 1],
// 			[1, -10, -4, 5],
// 			[1, 10, 4, 0],
// 		];

// 		Например:
// 		var a = [
// 			[1, 3, 6], 
// 			[3, 1, -1], 
// 			[3, 0]
// 		];

// 		Максимальная сумма тут первого подмассива: 1 + 3 + 6 = 10;
// 		Ответ: 10
var a = [
    [1, -10, 4, 5],
    [1, 5, 5, 3],
    [-1, 8, 4, 1],
    [1, -10, -4, 5],
    [1, 10, 4, 0],
];
var getMaxSubArray = function(arr) {
    if (arr.length === 0){
        return 0
    }

    let max;

    for (let index=0; index < arr.length; index++) {
        let sum = 0;

        for (let i=0; i < arr[index].length; i++) {
            sum += arr[index][i];
        }

        if (max === undefined || sum > max) {
            max = sum;
        }
    }

    return max;
};
console.log(getMaxSubArray(a));