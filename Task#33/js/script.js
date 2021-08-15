/* Задания:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "On the Rocks",
        "The Trip to Greece",
        "Bad Education",
        "The Nest",
        "Nomadland"
    ]
};

//------------------------------------------------------------------------

//1) Удалить все рекламные блоки со страницы (правая часть сайта)

//const adv = document.querySelectorAll('.promo__adv img');
//adv.forEach(item => item.remove());

const adv = document.querySelector('.promo__adv').children;
console.log(adv);

/*const promo = document.querySelector('.promo .promo__adv').children;
for(let el of promo) el.getElementsByClassName.display = 'none';
*/

 for(let i = 0; i < adv.length; i++){
    adv[i].remove();
    i--;
} 

//2) Изменить жанр фильма, поменять "комедия" на "драма"

const genre = document.querySelector('.promo__bg .promo__genre');
genre.textContent = 'drama'


//3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
//Реализовать только при помощи JS

document.querySelector('.promo__bg').style.backgroundImage = 'url (img/bg.jpg)';

//4) Список фильмов на странице сформировать на основании данных из этого JS файла.
//Отсортировать их по алфавиту




//5) Добавить нумерацию выведенных фильмов