import { combineReducers } from 'redux';
import sessionReducer from './session';
import userReducer from './user';
import announcementReducer from './announcementReducer';
import auth from './authReducer';
const rootReducer = combineReducers({
  auth: auth,
  announcements: announcementReducer
});

export default rootReducer;