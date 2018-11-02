import { combineReducers } from 'redux';

const initialState = '';

function searchQueryReducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'CHANGE_SEARCH':
      return payload;
    default:
      return state;
    }
  };

function loaderReducer(state = false, { type }) {
  switch (type) {
    case 'SEARCH_START':
      return true;

    case 'SEARCH_SUCCESS':
      return false;

    case 'SEARCH_FAIL':
      return true;

    default:
      return state;
  }
};
  
function errorReducer(state = null, { type, payload }) {
  switch (type) {
    case 'SEARCH_SUCCESS':
      return null;
  
    case 'SEARCH_FAIL':
      return payload;
  
    default:
      return state;
  }
};
  
export default combineReducers({
  searchQuery: searchQueryReducer,
  loading: loaderReducer,
  error: errorReducer,
});