
    // 3. Создать многомерный массив, размер массива получить от пользователя. Каждый нечётный элемент массива заполнить подмассивом со значением 'odd', а чётный - 'even'. 
    // Размер каждого вложенного массива - 3.

    // Для массива размером 3
    // ['odd', 'odd', 'odd']       // 1й элемент
    // ['even', 'even', 'even']    // 2й элемент
    // ['odd', 'odd', 'odd']       // 3й элемент

    // let arr = [
    //     ['odd', 'odd', 'odd'],
    //     ['even', 'even', 'even'],
    //     ['odd', 'odd', 'odd']
    // ]
    var arr =[];
    var inpit = +prompt ("Введите размер массива");
    var length = parseInt(inpit);
    for (var i = 0; i < length; i++) {
        if ((i % 2) === 0) {
            arr.push(['even', 'even', 'even']);
        } else {
            arr.push(['odd', 'odd', 'odd']);
        }
    }
