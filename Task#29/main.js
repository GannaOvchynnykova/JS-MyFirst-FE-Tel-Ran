//Task01
/*
 const users =[
    {name: 'Anna', address:{city:'Berlin', country:'Germany'}, age: 32},
    {name: 'Vasya', address:{city:'Tokio', country:'Japan'}, age: 28},
    {name: 'Mariya', address:{city:'London', country:'England'}, age: 15},
    {name: 'Mark', address:{city:'Rom', country:'Italy'}, age: 46},
    {name: 'Sofi', address:{city:'Verona', country:'Italy'}, age: 38},
    {name: 'Sergio', address:{city:'Barcelona', country:'Spain'}, age: 18}
]
Отсортировать массив users по возрасту
*/

console.log('----------------Task01------------------------')

const users = [
    { name: 'Anna', address: { city: 'Berlin', country: 'Germany' }, age: 32 },
    { name: 'Vasya', address: { city: 'Tokio', country: 'Japan' }, age: 28 },
    { name: 'Mariya', address: { city: 'London', country: 'England' }, age: 15 },
    { name: 'Mark', address: { city: 'Rom', country: 'Italy' }, age: 46 },
    { name: 'Sofi', address: { city: 'Verona', country: 'Italy' }, age: 38 },
    { name: 'Sergio', address: { city: 'Barcelona', country: 'Spain' }, age: 18 }
];

function sortArray(key) {
    return ((a, b) => a[key] > b[key] ? 1 : -1);
}

users.sort(sortArray('name'));
console.log(users);
users.sort(sortArray('age'));
//users.forEach(user => console.log(user.age));
console.log(users);

//users.sort((a, b) => a.age > b.age ? 1 : -1);
//console.log(users);

console.log('----------------Task02------------------------')
//Task02
/*
[1,5,8,4,6,9,3,10];
function filterRange(array,1,4) -> [1,3,4]
 */

let arr = [1, 5, 8, 4, 6, 9, 3, 10];

// first variant
/*
function filterRange(array, start, end) {
   let filterRange = array.filter(num => num >= start && num <= end).sort((a, b)=>a-b);
    return filterRange;
}
console.log(filterRange(arr, 1, 4));
*/
// second variant 

function filterRange2(array, start, end) {
    const masive = [...array].sort((a, b) => a - b);
    for (let i = 0; i < masive.length; i++) {
        if (masive[i] < start) {
            masive.splice(i, 1);
            i--;
        }
        if (masive[i] > end) {
            masive.splice(i);
            break;
        }
    }
    return masive;
}

console.log(filterRange2(arr, 1, 4));
console.log(arr);


//Task03
/* Отсортировать массив в порядке убывание
[7,3,8,9,10,2] -> [10,9,8,7,3,2]
 */
console.log('----------------Task03------------------------')

let array3 = [7, 3, 8, 9, 10, 2];
array3.sort((a, b) => b - a);
console.log(array3);


/* Сгенирировать штатное расписание, у сотрудников есть поля: имя, часы работы, стоимость часа,
    создать ведомость, в которой будет список сотрудников, с подсчитанной зарплатой и общая сумма всех зарплат
 */

const company = {
    name: 'ABC',
    team: [],
}

function createCompany (name, qty){
    const company = {
        name: 'ABC',
        team: [],
        qty: qty
    }
}

company.team.push({ name: 'Vasya', hours: 120, rate: 30 });

for (let i = 0; i < 9; i++) {
    company.team.push({
        name: `employee_${i + 1}`,
        hours: Math.floor(Math.random() * 120),
        rate: 30
    })
}
console.log(company.team);

const doc = {
    name: 'DOC',
    list: [],
    total: 0
}

for (let i = 0; i < company.team.length; i++) {
    const sum = company.team[i].hours * company.team[i].rate;
    doc.list.push({
        name: company.team[i].name,
        salary: sum
    })
    doc.total += sum
}
console.log(doc.list)
console.log(doc.total)
