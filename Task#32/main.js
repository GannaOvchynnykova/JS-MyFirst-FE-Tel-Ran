// #32
//Task01
/*
'hjkld fghj fhjgldhgfjlhsg shfjg shgjslg' -> 4 (вернуть длину самого короткого слова в строке)
 */

function findShortest(str){
    const arr = str.split(' ');
    let shortest = arr[0].length;
    for (let i = 1; i < arr.length; i++){
        if (arr[i].length < shortest){
            shortest = arr[i].length;
        }
    }
    return shortest;
}

function findShortest2 (str2){
    return str2.split(' ').reduce((minWord, currentWord) => 
    minWord.length < currentWord.length ? minWord : currentWord).length;
}

console.log(findShortest('hjkld fghj fhjgldhgfjlhsg shfjg shgjslg'));
console.log(findShortest2('hjkld fghj fhjgldhgfjlhsg shfjg shgjslg'));

//Task02
/*
function isIsIngram('abcd') -> true;
function isIsIngram('abbcd') -> false;
function isIngram('abdcA') -> false

 */

function isIsogram(str) {
    let i = 0;
    const strings = str.toLowerCase().split('').sort();
    while (strings[i] != strings[i + 1] &&
         i < strings.length - 1) 
         i++;
    return i == strings.length - 1 ? true : false
}


console.log(isIsogram('abcda'));


function isIsogram1(str) {
    let count = {}  // {a: 1, b:1, c:1, d:1}  // {a: 1, b:2, c:1, d:1}
    const strings = str.toLowerCase().split('').sort();
    for (s of strings) {
        count[s] ? count[s]++ : count[s] = 1;
        if (count[s] > 1) return false
    }
    return true
}


console.log(isIsogram1('abcdd'));

const isIsogram2 = (string) => string.toLowerCase().split('').every((s, index) => 
string.indexOf(s) === index);

console.log(isIsogram2('abcd'));