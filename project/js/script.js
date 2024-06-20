/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

const promo = document.querySelector(".promo__adv"),
    bg = document.querySelector(".promo__bg"),
    list = document.querySelector(".promo__interactive-list"),
    genre = document.querySelector(".promo__genre");


bg.style.backgroundImage = "url('img/bg.jpg')";
promo.remove();
genre.textContent = "Драма";

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость2",
        "Скотт Пилигрим против..."
    ]
};


list.innerHTML = movieDB.movies.map((item, index) => {
    return `<li class="promo__interactive-item">${index + 1} ${item}</li>`
}).join("");
