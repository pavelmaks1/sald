import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import postsReducer from '../reducers/posts';
import authReducer from '../reducers/auth';
import filtersReducer from '../reducers/filters';
import commentsReducer from '../reducers/comments';

export default () => {
  const store = createStore(
    combineReducers({
      posts: postsReducer,
      auth: authReducer,
      filters: filtersReducer,
      comments: commentsReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
};