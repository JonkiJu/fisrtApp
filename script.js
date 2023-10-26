const numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};


const a = prompt('Один з останнній переглянутих фільмів?', ''),
	  b = +prompt('На скільки ви його оціните?', ''),
	  c = prompt('Один з останнній переглянутих фільмів?', ''),
	  d = +prompt('На скільки ви його оціните?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
