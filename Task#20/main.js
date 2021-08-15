// ---------Task 01 - (if, else)-----------
let a = +prompt("Enter the first number, please! ");
let b = +prompt("Enter the second number, please! ");
const TEN = 10;
let sum = a + b;
/*
if (sum < TEN){
    alert("The amount is too small!");
}
else if (sum === TEN){
    alert("BINGO!!!");
}
else {
    alert("The amount is too big!");
}
 alert(confirm("Let's do it again?"));
 */

// ---------Task 01 - (Elvis)-----------

let message =
  sum < TEN
    ? "The amount is too small!"
    : sum === TEN
    ? "BINGO!!!"
    : "The amount is too big!";
alert(message);

// ---------Task 02 - (if, else)-----------

let login = prompt("Enter the your login, please! ");
/*
if (login === "employee" || login === "Employee") {
  alert("Hi, employee!");
} else if (login === "boss" || login === "Boss") {
  alert("Hello, boss!");
} else if (login === "" || login === " " || login === "  ") {
  alert("no login!!!");
} else {
  alert("Hi, user!");
}
*/

// ---------Task 02 - (Switch)-----------
switch (login) {
  case "employee":
    alert("Hi, employee!");
    break;
  case "boss":
    alert("Hello, boss!");
    break;
  case "":
    alert("No login!!!");
    break;
  default:
    alert("Hi, user!");
}

// ---------------Task 03---------------

let age = +prompt("Enter your age, please! ");
const START = 14;
const END = 90;

if (age >= START && age <= END) {
  alert("Is in the range!");
} else {
  alert("Out of range!");
}

/*
if ((!age >= START)&& (!age <= END)){
     alert("Out of range!");  
}
else{
    alert("Is in the range!");
}
*/

