/* Task01
   написать метод, который на вход получает массив целых чисел, которые могут повторятся, а возвращает новый массив без повторяющихся чисел
   [2,5,7,9,7,2] -> [2,5,7,9]
   [2,0,0,1,1,2] -> [2,0,1]
 */
let arrayOne = [2, 5, 7, 9, 7, 2];
let arrayTwo = [2, 0, 0, 1, 1, 2];

/*function numberNoRepeat(array) {
    return Array.from(new Set(array));
}
*/

function uniqNumber(array) {
    const newArray = [];
    for (let number of array) {
        if (!newArray.includes(number)) {
            newArray.push(number)
        }
    }
    return newArray;
}
console.log(uniqNumber(arrayOne));
console.log(uniqNumber(arrayTwo));

//Task02
/*
написать метод, который на вход получает массив целых чисел, сравнивает первый и последний элемент этого массива и возвращает новый массив, в котором все элементы старого массива заменены на большее значение.
[1,5,6,7,2] -> [2,2,2,2,2];
[7,3,8,4] -> [7,7,7,7]
 */
let ar2 = [1, 5, 6, 7, 2];
let ar1 = [7, 3, 8, 4];

function biggerFirstOrLast(arr) {
    const max = arr[0] > arr[arr.length-1] ? arr [0] : [arr.length-1];
    const newArray = [...arr] //ili tak - //arr.slice();
    return newArray.fill(max);
}
console.log(biggerFirstOrLast(ar1));
console.log(biggerFirstOrLast(ar2));cycyyycyyyccyyyycyyyyyycyyyycycycyyyyy



//Task03*
/*
В игру "запомни слова" добавить возможность выйти из игры на этапе выбора языка
 */
