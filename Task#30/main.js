// Task01
/* n = 10
function recusionOutput(n) -> '12345678910'
 */

function recusionOutput(n) {
    let output = [];
    for (let i = n; i > 0; i--) {
        output.push(i);
    }
    return output;
}

console.log(recusionOutput(10));


//Task02
/* 'шалаш' 'abba' 'потоп' 'а роза упала на лапу азора'
function checkPolindrom('nagan') -> true;
        checkPolindrom('grhjs') -> false;
 */
function checkPolindrom(input) {
    return input == input.split("").reverse().join("");
}
console.log(checkPolindrom('nagan'));
console.log(checkPolindrom('grhjs'));

//Task03
/* метод, который получает массив вида users возвращает массив вида changedUsers
    const users = [
        {firstName: 'Vasya', lastName:'Pupkin', id:1},
        {firstName: 'Vas', lastName:'Pupk', id:2},
        {firstName: 'Sasha', lastName:'Vasin', id:3}
    ]

    changedUsers -> [
        {fullName: 'Vasya Pupkin', id:1},
        {fullName: 'Vas Pupk', id:2},
        {fullName: 'Sasha Vasin', id:3}
    ]
 */

const users = [
    { firstName: 'Vasya', lastName: 'Pupkin', id: 1 },
    { firstName: 'Vas', lastName: 'Pupk', id: 2 },
    { firstName: 'Sasha', lastName: 'Vasin', id: 3 }
]

function changedUsers(input) {
    let newUsers = [];
    for (let i = 0; i < input.length; i++) {
        newUsers.push({
            fullName: input[i].firstName.concat(input[i].lastName),
            id: input[i].id
        })
    }
    return newUsers;
}
console.log(changedUsers((users)));