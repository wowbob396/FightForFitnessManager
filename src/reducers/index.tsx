import { combineReducers } from 'redux';
import sessionReducer from './session';
import userReducer from './user';
import auth from './authReducer';
const rootReducer = combineReducers({
  auth
});

export default rootReducer;