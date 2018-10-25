import { CHANGE_SEARCH } from '../actions/types';

const initialState = '';

export default function searchReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CHANGE_SEARCH:
      return payload;
    default:
      return state;
    }
  }