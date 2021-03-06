import axios from 'axios';

import {
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAIL,
  GET_MOVIES_START,
} from './types';

const getMoviesStart = () => ({
  type: GET_MOVIES_START, 
});

export const getMoviesSuccess = movies => ({
  type: GET_MOVIES_SUCCESS,
  payload: movies,
});

export const getMoviesFail = error => ({
  type: GET_MOVIES_FAIL,
  payload: error,
})

export const getMovies = (category = 'popular') => dispatch => {
  dispatch(getMoviesStart());

  axios
  .get(`https://api.themoviedb.org/3/movie/${category}?api_key=4625b62e0cb64ba1828971e21a3d765b`)
  .then(({data}) => {
    console.log(data);
    dispatch(getMoviesSuccess(data.results))})
  .catch(err => dispatch(getMoviesFail(err.response)));
};
