import axios from 'axios';

import {
  CHANGE_SEARCH,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  SEARCH_START,
} from './types';

import { getMoviesSuccess } from './movies';

export const changeSearch = searchValue => ({
  type: CHANGE_SEARCH,
  payload: searchValue
});

const searchStart = () => ({
  type: SEARCH_START, 
});

const searchSuccess = () => ({
  type: SEARCH_SUCCESS,
});

const searchFail = error => ({
  type: SEARCH_FAIL,
  payload: error,
})

export const search = (searchQuery) => dispatch => {
  if (searchQuery !== '' || searchQuery !== undefined) {
    dispatch(searchStart());

      axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=4625b62e0cb64ba1828971e21a3d765b&query=${searchQuery}`)
      .then(({data}) => {
        dispatch(getMoviesSuccess(data.results));
        dispatch(searchSuccess());})
      .catch(err => dispatch(searchFail(err.response)));
    };
  }
  
export const x=9;

