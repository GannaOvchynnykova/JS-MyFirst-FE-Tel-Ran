//---------------------------------------------------------------
/* Task 01 */

let a = +prompt ('Enter your first number, please: ', 1);
let b = +prompt ('Enter your second number, please: ', 2);
//let res01 = (+a) + (+b);
//alert ('Sum result yours numbers is: ' + ((+a) + (+b)));
let sum = a + b;
console.log(typeof a);
alert(sum);

//---------------------------------------------------------------
/*Task 02 */
let pricePerHour, countHoursPerDay;
pricePerHour = prompt ('How much is your salary per hour? ');
countHoursPerDay = prompt ('How many hours a day do your work? ');
const workDaysPerMonth = 22;
//let salary = Number(pricePerHour) * Number(countHoursPerDay) * 22;
let salary = pricePerHour * countHoursPerDay * workDaysPerMonth;
alert('your salary is: ' + salary);
//let res02 = c * d * 22;
//alert ('Your salary for a month with 22 working days is: ' + c * d * 22);

//---------------------------------------------------------------
/*Task 03 */

const radius = Number(prompt ('Enter the radius of the circle, please: '));
const PI = 3.14;
let circleSquare = PI * radius ** 2;
alert("Result: " + circleSquare);
//let res03 = PI * (radius * radius);
//alert ('The area of the circle is: ' + PI * (radius * radius));

//---------------------------------------------------------------