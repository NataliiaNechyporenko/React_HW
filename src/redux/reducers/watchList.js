import { ADD_MOVIE_TO_WATCHLIST, ADD_MOVIE_FAIL } from '../actions/types';

const initialState = [];

export default function watchListReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_MOVIE_TO_WATCHLIST:
      return [...state, payload];
    case ADD_MOVIE_FAIL:
      return state;
    default:
      return state;
    }
}