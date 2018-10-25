import { combineReducers } from 'redux';
import moviesReducer from './movies';
import searchReducer from './search';
import watchListReducer from './watchList';


const rootReducer = combineReducers({
  movies: moviesReducer,
  searchValue: searchReducer,
  watchList: watchListReducer,
});

export default rootReducer;