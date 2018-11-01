import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './reducers';
import thunk from './middlewares/thunk';

const enchanser = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducers, enchanser);

export default store;
