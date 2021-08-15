let salary = {
    John: 2000,
    Anna: 2100,
    Pedro: 2500,
    Kate: 1900
}
console.log(salary);


// calculate sum salary

let sum = 0;
for (let key in salary) {
    sum += salary[key]
}
console.log(` All salaries is : ${sum}`);


// 'John has salary: 2000, Kate has salary: 1900

for (let key in salary){
    console.log(`${key} has salary: ${salary[key]},`)
}


// add two employee in Object
let keyTwo = 'Alice';
salary.Alice = 2900;
let key = 'Ivan';
salary.Ivan = 2222;
console.log(salary);

let countOfKeys = 0;
for(let key in salary){
    countOfKeys++;
}
console.log (countOfKeys);

let count = 0;
for (let key in salary){
    count++;
    if (count != 1 && count!=countOfKeys) continue;
    console.log(`${key} has salary: ${salary[key]}`) 
}

// find employee with max salary
let max = 0;
let keyName = '';

for(let key in salary){
    if (!key || salary[key] > max){
        max = salary[key];
        keyName = key;
    }
}
console.log(`Max salary has ${keyName}, ${max} `);




/*
let sortable = [];
for (let key in salary) {
        sortable.push([key, salary[key]]);
    };
sortable.sort(function(a, b){
    return a[1] - b [1];
});
console.log(sortable);
sortable.map(function(object){
    if (object.)
})
*/
