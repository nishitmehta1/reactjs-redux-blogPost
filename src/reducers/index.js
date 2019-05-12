import { combineReducers } from 'redux';
import addPostReducer from './addPostReducer';

export default combineReducers({
  posts: addPostReducer
});