'use strict'

let numberOfFilms;

function start() {

    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }

}

start();

const personalfilmDB = {
    count: numberOfFilms,
    films: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {

    for (let i = 0; i < 3; i++) {

        let filmName = prompt('Один из последних просмотренных фильмов?', '');
        let filmCount = prompt('На сколько оцените его?', '');

        if (!!filmName == true && filmName !== null && filmName.length < 50 && !!filmCount == true && filmCount !== null) {
            personalfilmDB.films[filmName] = filmCount;
        } else {
            i--;
        }
    }

}

function detectPersonalLevel() {

    if (personalfilmDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalfilmDB.count >= 10 && personalfilmDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalfilmDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }

}

function showMyDB(hidden) {

    if (!hidden) {
        console.log(personalfilmDB)
    }

}

function wryteYourGenres() {

    for (let i = 1; i <= 3; i++) {
        personalfilmDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }

}

rememberMyFilms();

detectPersonalLevel();

wryteYourGenres();

showMyDB(personalfilmDB.privat);