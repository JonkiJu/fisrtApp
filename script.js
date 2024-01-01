'use strict';


const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: true,
	start: function() {                     // МЕТОДИ
		personalMovieDB.count = +prompt('Скільки фільмів ви вже подивились?', '');
      
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Скільки фільмів ви вже подивились?', '');
		}
	},
	rememberMyFilms: function() {
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
	},
	detectPersonalLevel: function() {
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
	},
	showMyDB: function(hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function() {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		}
		else {
			personalMovieDB.privat = true;
		}
	},
	writeYourGenres: function() {
		for (let i = 1; i <= 3; i++) {
			let genre = prompt(`Ваш любимий жанр під номером ${i}`);
        
			while (genre == '' || genre == null) {
				genre = prompt(`Ваш любимий жанр під номером ${i}`);
			}
			personalMovieDB.genres [i - 1] = genre;

			
		}
    personalMovieDB.genres.forEach(function(item, i, arr) {
      console.log(`Любимий жанр # ${i + 1} - це ${item}`);
    });
	}
};

