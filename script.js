'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');
	
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};





function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один з останнній переглянутих фільмів?', ''),
			b = prompt('На скільки ви його оціните?', '');
	
		if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else  {
			console.log('error');
			i--;
		} 
	}
}

// rememberMyFilms();



function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Переглянуто дуже мало фільмів');
	} 
	else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
		console.log('Ви класичний глядач');
	}
	else if (personalMovieDB.count > 30 ) {
		console.log('Ви кіноман');
	}
	else {
		console.log('Вибачте виникла помилка');
	}
}
// detectPersonalLevel();



function showMyDB() {
	if (personalMovieDB.privat == false) {
		console.log(personalMovieDB);
	}
}

showMyDB();




function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		const genre = prompt(`Ваш любимий жанр під номером ${i}`);
		personalMovieDB.genres[i - 1] = genre;
			
		
	}
}

writeYourGenres();