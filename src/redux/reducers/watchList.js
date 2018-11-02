import { 
  ADD_MOVIE_TO_WATCHLIST,
  DELETE_MOVIE_FROM_WATCHLIST
} from '../actions/types';

const initialState = [];

export default function watchListReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_MOVIE_TO_WATCHLIST:
      if (state.find(movie => (movie.id === payload.id)) === undefined) {
        return [ payload, ...state ];
      } 
      return state;
    case DELETE_MOVIE_FROM_WATCHLIST:
      return state.filter(movie => (movie.id !== payload));
    default:
      return state;
    }
}
