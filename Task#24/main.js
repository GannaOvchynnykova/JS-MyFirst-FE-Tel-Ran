//---------------Task02-----------------------
/*
function powerNumber(3,3) -> 27
powerNumber(5,3) -> 125
 */

function powerNumber(a, b){
    let result = 1;
    for (let i = 0; i < b; i++){
        result*=a;
    }
    return result;
   // return Math.pow(a, b);
}
let number = +prompt('Enter the number, please');
let result = powerNumber(number, 3);
alert(result);

//---------------Task03-----------------------
/*
const numbers = [2,4,6,10,12];
function sumNumbers(numbers) -> 34;
 */

//+++++++++++++One
function sum (arr){
    let sum = 0;
    arr.forEach(function(value, index, array){
        sum += value;
    });
    return sum;
}
const numbers = [2, 4, 6, 10, 12];
let resultSum = sum(numbers);
console.log(resultSum);

//+++++++++++++++Two

function sumNumbers(array){
    let sum = 0;
    for(let i = 0; i <= array.length-1; i++){
        sum += array[i];
    }
    return sum;
}
const numbersTwo = [2, 4, 6, 10, 12];
let resultTwo = sumNumbers(numbersTwo);
console.log(resultTwo);

//+++++++++++++++Three
console.log([2, 4, 6, 10, 12].reduce((a, b) => a + b, 0));


//---------------Task04-----------------------
/*
const numbers = [1,2,3,4,5];
function reversArray(numbers) -> [5,4,3,2,1]
 */

const arr = [1, 2, 3, 4, 5];
function reversArray(arr){
    for(i = 0, j = arr.length-1; i < j; i++, j--){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
let reversed = reversArray(arr);
console.log(reversed);



//---------------Task01-----------------------
//Task01 
//Make memory game with functions
/************************************ */

/*
const firstAnswer = getUserAnswer(1);
checkAnswer(numb[0], firstAnswer);

const secondAnswer = getUserAnswer(numb.length);
checkAnswer(numb[numb.length-1], secondAnswer);

const thirdAnswer = getUserAnswer(randomIndex + 1);
checkAnswer (numb[randomIndex], thirdAnswer);
*/

startGame();

function startGame (){
    let repeat = true;
    while(repeat){
    const numb = fillArrayRandomNumbers(5, 100);
    const maxQuestions = 3;
    let checkError = true;
    showMessage(numb);
    for (let i = 0; i < maxQuestions; i++){
        const randomIndex = getRandomRangeNumber(numb.length);
        const userAnswer = getUserAnswer(randomIndex + 1);
        checkAnswer(numb[randomIndex], userAnswer);
    }
    if(checkError){
        alert('You have a great memory!')
    }
    repeat = confirm('One more time?')
    }
}

/************************************ */
function getRandomRangeNumber(range){
    return parseInt(Math.random() * range);
}

/************************************ */
function fillArrayRandomNumbers(length, range){
    let array = [];
    for (let i = 0; i < length; i++){
        array.push(getRandomRangeNumber(range));
    }
    return array;
}

/************************************ */

function showMessage(numb){
    alert(`Remember numbers and orders\n${numb}`)
}
/************************************ */

function getUserAnswer(number){
return +prompt(`What was the ${number} number?`);
}

/************************************ */

function checkAnswer(number, userAnswer){
    if (userAnswer == number) {
        alert('You right!!!')
        return true;
    } else {
        alert(`Wrong answer, right number is ${number}`)
        return false;
    }
}

