import axios from 'axios';

import {
  GET_ONE_MOVIE_SUCCESS,
  GET_ONE_MOVIE_FAIL,
  GET_ONE_MOVIE_START,
} from './types';

const getOneMovieStart = () => ({
  type: GET_ONE_MOVIE_START, 
});

export const getOneMovieSuccess = movie => ({
  type: GET_ONE_MOVIE_SUCCESS,
  payload: movie,
});

export const getOneMovieFail = error => ({
  type: GET_ONE_MOVIE_FAIL,
  payload: error,
})

export const getOneMovie = (movieId) => dispatch => {
  dispatch(getOneMovieStart());

  axios
  .get(`https://api.themoviedb.org/3/movie/${id}?api_key=4625b62e0cb64ba1828971e21a3d765b`)
  .then(({data}) => {
    console.log(data);
    dispatch(getOneMovieSuccess(data.results))})
  .catch(err => dispatch(getOneMovieFail(err.response)));
};
