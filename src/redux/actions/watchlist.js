import { ADD_MOVIE_TO_WATCHLIST } from './types';
// import { ADD_MOVIE_FAIL } from './types';

export const addMovieToWatchList = movie => ({
  type: ADD_MOVIE_TO_WATCHLIST,
  payload: movie
});

// const addMovieFail = () => ({
//   type: ADD_MOVIE_FAIL
// });

// export const addMovieToWatchList = (movie, watchList) => dispatch => {
//   const findCard = watchList.find(watchListMovie => (movie.id === watchListMovie.id));
//     if (findCard === undefined) {
//       localStorage.setItem('watchList', JSON.stringify(watchList));
//       dispatch(addMovie(movie));
//     } else {
//       dispatch(addMovieFail());
//     }
// };

export const s=5;
