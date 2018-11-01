import { combineReducers } from 'redux';

function dataReducer(state = [], { type, payload }) {
  switch (type) {
    case 'GET_MOVIES_SUCCESS':
      return payload;
    default:
      return state;
    }
};

function loaderReducer(state = false, { type }) {
  switch (type) {
    case 'GET_MOVIES_START':
    return true;
    case 'GET_MOVIES_SUCCESS':
      return false;
    case 'GET_MOVIES_FAIL':
      return true;
    default:
      return state;
    }
};

function errorReducer(state = null, { type, payload }) {
  switch (type) {
    case 'GET_MOVIES_SUCCESS':
      return null;

    case 'GET_MOVIES_FAIL':
      return payload;

    default:
      return state;
    }
};

export default combineReducers({
  data: dataReducer,
  loading: loaderReducer,
  error: errorReducer,
});
