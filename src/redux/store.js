import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const appReducer = combineReducers({
  ...reducers,
});

const rootReducer = (state, action) => appReducer(state, action);

const store = createStore(rootReducer, applyMiddleware(logger));

export { store, history };
