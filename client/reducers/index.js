import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware,
      createLogger())
  )
);

export default store;
