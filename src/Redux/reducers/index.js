import {combineReducers} from 'redux';
import auth from './auth';
import types from '../types';
import appSetting from '../reducers/appSettings';
import categoryPost from './categoryPost';
import createPost from './post'

const appReducer = combineReducers({
  auth,
  appSetting,
  categoryPost,
  createPost,
});
const rootReducer = (state, action) => {
  if (action.type == types.CLEAR_REDUX_STATE) {
    state = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
