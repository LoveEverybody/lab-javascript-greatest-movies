// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
/*const movies = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      score: 9.3
    }]*/

function getAllDirectors(moviesArray) {
  return moviesArray.map(element => element.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(element => element.director === "Steven Spielberg" && element.genre.includes('Drama')).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
/*function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const sum = moviesArray.reduce((total, current) => total + current.score, 0);
  const average = sum / moviesArray.length;
  return Number(average.toFixed(2));
}*/


function scoresAverage(movies) {

  if (movies.length === 0) {

    return 0;

  }

  const totalScore = movies.reduce(function (total, movie) {

    if (typeof movie.score === 'number') {
      return total + movie.score;
    } else {
      return total;
    }
  }, 0);

  const average = totalScore / movies.length;
  return Number(average.toFixed(2));
  //return Math.round(average * 100) / 100;
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

  const filteredDrama = moviesArray.filter(element => element.genre.includes('Drama'))
  if (filteredDrama.length === 0) {
    return 0
  }
  const averageDrama = filteredDrama.reduce((total, current) => total + current.score, 0)
  return Number((averageDrama / filteredDrama.length).toFixed(2));

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newMoviesArray = [...moviesArray];
  const newMovies = newMoviesArray.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
  });
  return newMovies;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const newMoviesArray = [...moviesArray];
  const filteredArray = newMoviesArray.filter(element => element.title);
  const titlesArray = filteredArray.map(element => element.title);
  const sortedArray = titlesArray.sort((a, b) => a.localeCompare(b));
  const twentyArray = sortedArray.slice(0, 20);
  return twentyArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const newMoviesArray = moviesArray.map(movie => {
    const newMovie = { ...movie };
    const duration = newMovie.duration;
    const durationParts = duration.split(' ');
    let totalMinutes = 0;

    for (const part of durationParts) {
      if (part.includes('h')) {
        const hours = parseInt(part, 10);
        totalMinutes += hours * 60;
      } else if (part.includes('min')) {
        const minutes = parseInt(part, 10);
        totalMinutes += minutes;
      }
    }

    newMovie.duration = totalMinutes;
    return newMovie;
  });

  return newMoviesArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }
  const orderedByYear = orderByYear(moviesArray)
  
  const best = scoresAverage(orderedByYear)
  //O melhor ano foi <YEAR> com uma pontuação média de <RATE>
}