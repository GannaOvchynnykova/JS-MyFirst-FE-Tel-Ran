//--------------------Task01------------------

/* Конвертер валют
    Запросить у пользователя сумму в рублях
    Конвертировать эту сумму в евро и в доллары
    Вывести результат на экран
*/

let amountRub = (prompt("Amount of money in rubles - "));
const DOL = 72.3723;
const EURO = 86.2026;
let amountEuro = amountRub / DOL;
let amountDol = amountRub / EURO;
//  numb or not
if (isNaN(amountEuro) || (amountEuro <= 0)) {
  if (amountRub === null) {
    alert("Good bye!");
  } else {
    alert("Amount is not correct!")
  }
} else {
  /*
  alert(
     "Your amount " + amountRub + "RUB in euros = " +
    amountEuro.toFixed(2) +
    "\n" +
    "Your amount " + amountRub + "RUB in dollars = " +
    amountDol.toFixed(2)
  ); 
  */
  alert(`${amountRub} RUB = ${amountEuro.toFixed(2)} EU\n${amountRub} RUB = ${amountDol.toFixed(2)} DOL`)
}


//--------------------Task02------------------

/* Найдите и выведите на экран сумму четных чисел от 2 до n. (n - число, получаемое от пользователя)
 */

let numb = Number(prompt("Enter the number please.)"));
const START = 2;
let sum = 0;

//+++++++++++++++++++++++++++ 1 variant

while (numb > 1) {
  if (numb % 2 == 0) {
    sum += numb;
  }
  numb--;
}
console.log(sum);


// +++++++++++++++++++++++++++ 2 variant

while (numb >= START) {
  sum = (numb % 2 != 0) ? sum += numb : sum;
  numb--;
}
console.log(sum);


// +++++++++++++++++++++++++++ 3 variant

for (let i = START; i <= numb; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
alert(sum);

// +++++++++++++++++++++++++++ 4 variant

for (let i = START; i <= numb; i += 2) {
  sum += i;
}
alert(sum);


//--------------------Task03------------------

/* Игра угадай число
    Случайным образом "загадать" число в диапозоне от 0 до 20
    Предложить пользователю угадать это число
        если введенный ответ больше загаданного числа - вывести сообщение: "загаданное число меньше"
        если ответ меньше - "загаданное число больше"
        если пользователь угадал - "поздравляю, вы выиграли!"
    У пользователя должно быть 3 попыток, после неудачной попытки должно выводиться
    на экран предложение ввести число еще раз, в этом сообщение указывается сколько попыток осталось.
    Если за пять попыток пользователь не угадал число - вывести сообщение: "Вы проиграли, число было:..."
 */

 // +++++++++++++++++++++++++++ 1 variant

 /*
const GUESS_NUMBER = parseInt(Math.random() * 20);
console.log(GUESS_NUMBER);
let userAnswer = +prompt('Guess the number, my number bigger as 0 and less 20\n to exit enter "q": ');
let maxTryCount = 5;
let tryCount;

for (let tryCount = 1; tryCount <= maxTryCount; tryCount++) {
  if (userAnswer == 'q' || userAnswer == null) {
    alert(`See you next time! Guess number ${GUESS_NUMBER}`);
    break;
  }
  if (GUESS_NUMBER == userAnswer) {
    alert("Congratulations, you won! The number was " + GUESS_NUMBER);
    break;
  } else if (userAnswer > GUESS_NUMBER) {
    alert("The magic number is less!");
  } else {
    alert("The magic number is bigger!");
  }
  if (tryCount != maxTryCount) {
    userAnswer = prompt(`try again, enter new number.\nyou have ${maxTryCount - tryCount}, try more`)
  }
if (tryCount > maxTryCount) {
  alert(`You loos! Guess number ${GUESS_NUMBER}`);
}
}
*/

// +++++++++++++++++++++++++++ 2 variant

const GUESS_NUMBER = parseInt(Math.random() * 20);
console.log(GUESS_NUMBER);
let userAnswer = +prompt('Guess the number, my number bigger as 0 and less 20\n to exit enter "q": ');
let maxTryCount = 3;

while(true){
  if ( userAnswer == 'q' || userAnswer == null || maxTryCount == 0){
    alert (`Guess number ${GUESS_NUMBER}`);
    break;
  }
  if (maxTryCount == 0){
    alert (`You loss! Guess number ${GUESS_NUMBER}`);
  }
  if (GUESS_NUMBER == userAnswer){
    alert('you win');
    break;
  }
  else if(userAnswer > GUESS_NUMBER){
    alert('to big number');
    maxTryCount--;
  }
  else{
    alert ('to small');
    maxTryCount--;
  }
  if(maxTryCount != 0){
    userAnswer = prompt(`try again, enter new number.\nyou have ${maxTryCount}, try more`)
  }
}
