import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import postsReducer from '../reducers/posts';
import authReducer from '../reducers/auth';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      posts: postsReducer,
      auth: authReducer,
      filters: filtersReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
};