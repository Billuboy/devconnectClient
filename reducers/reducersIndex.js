import { combineReducers } from 'redux';

import { authReducer } from './auth';
import { profileReducer } from './profile';
import { errorReducer } from './error';
import { postReducer } from './post';
import { devsReducer } from './devs';

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  post: postReducer,
  devs: devsReducer,
  error: errorReducer,
});
