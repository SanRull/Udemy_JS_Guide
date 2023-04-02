'use strict'

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

for (let i = 0; i < 3; i++) {

    let filmName = prompt('Один из последних просмотренных фильмов?', '');
    let filmCount = prompt('На сколько оцените его?', '');

    if (!!numberOfFilms == true && numberOfFilms !== null && !!filmName == true && filmName !== null && filmName.length < 50 && !!filmCount == true && filmCount !== null) {
        personalfilmDB.films[filmName] = filmCount;
    } else {
        i--;
    }
}

const personalfilmDB = {
    count: +numberOfFilms,
    films: {},
    actors: {},
    genres: [],
    privat: false,
};

if (personalfilmDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalfilmDB.count >= 10 && personalfilmDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalfilmDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalfilmDB);