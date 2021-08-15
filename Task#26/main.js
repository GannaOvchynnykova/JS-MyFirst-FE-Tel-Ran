//Task02
/* написать функцию, которая корачивает строку (если слово длиннее, чем maxLength - обрезать до maxLength и добавит ... , если короче - вернуть изначальную строку)
    function stringCat(str, maxLength);

    stringCat('hello world!', 5) -> 'hello...'
    stringCat('hello', 5) -> 'hello'
 */
function stringCat(str, maxLength) {
    //return (str.length > maxLength) ? str.slice(0, maxLength) + '...':str;
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + '...';
    } else {
        return str;
    }
}
let strRes = stringCat('hello world!', 5);
console.log(strRes);


//Task03
/*
    игра русско-английский словарь;
    двухмерный массив с парами слов (всего пять пар)
    спрашивать пользователя перевод английского слова из массива, если ответ правильный - выводить "Отлично!", если нет - правильный перевод слова
 */

const WORDS = [
    ['солнце', 'sun', 'die Sonne'],
    ['море', 'sea', 'das Meer'],
    ['вода', 'water', 'das Wasser'],
    ['пляж', 'beach', 'der Strand'],
    ['лето', 'summer', 'der Sommer']
];
const ru = 0;
const eng = 1;
const de = 2;

checkUserTranslation();

function checkUserTranslation() {
    for (let i = 0; i < WORDS.length; i++) {
        const userTranslation = getUserTranslation(i);
        if (userTranslation === WORDS[i][eng]) {
            alert('The correct answer is "Excellent!"')
        } else {
            alert(`Wrong answer - correct word translation: \n${WORDS[i][ru]}  -  ${WORDS[i][eng]}`)
        }
    }
}

function getUserTranslation(index) {
    return prompt(`How do you translate the word ${WORDS[index][ru]}?`);
}


//Task01
//Все методы, кроме start() в personalMovieDB сделать методами объекта

let numberOfFilms;
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        name: 'Vasya',
        toString: function () {
            let moviesList = '';
            for (let key in this) {
                if (typeof this[key] != 'function')
                    moviesList += `'${key}': ${this[key]}\n`
            }
            return moviesList;
        }
    },  // {'Titanic': 8.8, 'Hattika' : 9.4}
    genres: [],
    private: false,
    getMovieData: function (filmsNumber) {
        for (let i = 0; i < filmsNumber; i++) {
            const title = prompt('Enter the title of last watched movie'),
                rate = parseFloat(prompt('How do you rate it?'));
            console.log(rate)
            if (title != null && title != '' && rate != null && rate != '' && !isNaN(rate)) {
                this.movies[title] = rate;
            } else {
                alert('write correct data')
                i--;
            }
        }
    },
    getGenre: function (number) {
        for (let i = 1; i <= number; i++) {
            this.genres[i - 1] = prompt(`What is your top-${i} genre?`)
        }
    },
    showMovieDB: function () {
        if (!this.private) {
            //console.log(personalMovieDB);
            alert(`You did watched: ${this.count} films`);
            alert('You saved ' + this.movies);
            alert(`You favorite genre:  ${this.genres}`);
            alert(this.levelScoreMessage(this.count));
        }
    },

    levelScoreMessage: function () {
        if (this.count < 5) {
            return 'don\'t like movies?'
        } else if (this.count >= 5 && this.count <= 15) {
            return 'you are classic viewer\u{1F60D}'
        } else if (this.count > 15 && this.count <= 30) {
            return 'you\'re a movie buff!';
        } else {
            return 'error'
        }
    }

}

personalMovieDB.getMovieData(2);
personalMovieDB.getGenre(3);
personalMovieDB.showMovieDB();

function start() {
    do {
        numberOfFilms = +prompt('How many films did you watch last month?');
    } while (isNaN(numberOfFilms))
}
