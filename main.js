'use strict'

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let movieName = prompt('Один из последних просмотренных фильмов?', '');
let movieCount = prompt('На сколько оцените его?', '');

movieName = prompt('Один из последних просмотренных фильмов?', '');
movieCount = prompt('На сколько оцените его?', '');

personalMovieDB.movies[movieName] = movieCount;
console.log(personalMovieDB);