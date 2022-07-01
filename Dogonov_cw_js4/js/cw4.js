        // 4. Напишите функцию которая возвращает длину самого длинного слова в предложении. 
        // Ваш ответ должен быть числом.
        // "The quick brown fox jumped over the lazy dog" => 6
        var text = ("The quick brown fox jumped over the lazy dog") ;
        function getLength(input) {
               var arr = input.split(" ");
               var resalt = 0;
               for (let i = 0; i < arr.length; i++) {
                if (arr[i].length > resalt) {
                    resalt = arr[i].length;
                }
            }
            return resalt;
        }
        console.log(getLength(text));
