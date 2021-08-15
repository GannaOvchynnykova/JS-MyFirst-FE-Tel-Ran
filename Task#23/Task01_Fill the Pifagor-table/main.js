//Task01
//fill the Pifagor-table
//*make the Pifagor-table for the browser

document.write('<h1 style = "text-align: center"; background-color="red"> Multiply table </h1>')
document.write('<table border="1" cellspacing = "0" cellpadding = "5" align="center">');
for (let i = 1; i <= 10; i++) {
    document.write('<tr>');
    for (let j = 1; j <= 10; j++) {
        document.write('<td width="100px"> ' + (i * j) + ' </td>')
    }
    document.write('</tr>')
}
document.write('</table>');

//Task02
//С помощью цикла сформируйте строку n...9 8 7 6 5 4 3 2 1, где n - число получаемое от пользователя. 
//выведите значение этой переменной на экран.

let n;
let output = [];
while (isNaN(n)) {
    n = parseInt(prompt('Enter the number, please: '));
};
/*str = '';
while( n > 0){
    str += n + ' ';
    n--;
}*/

//-----For
for (i = n; i > 0; i--) {
    output.push(i);
}
alert(output);


//-----While
let outputWhile = [];
while (n > 0) {
    outputWhile.push(n--);
}
console.log(outputWhile);


//Task03*
//Напишите код, который выводит все простые числа из интервала от 2 до n.
//Например для n = 10 результат должен быть 2,3,5,7. (Можно использовать alert, в этом случае будет четыре сообщения или console.log, тогда результат будет выводится в столбик (те вывод не должен быть буквальным 2,3,5,7))
//Натуральное число, большее 1, называется простым, если оно делится на себя и на 1. (То есть таки числа как 2, 3, 5, 7, 11, 13 и тд)

let userN;
str = '';
while (isNaN(userN)) {
    userN = parseInt(prompt('Enter the number, > 2 please'));
};
let isPrime;
for (let i = 2; i <= userN; i++) {
    isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) str += i + ' ';
}
console.log(str);
