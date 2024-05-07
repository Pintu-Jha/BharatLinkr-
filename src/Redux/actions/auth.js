import { LOGIN_API } from '../../Config/url';
import { storeData } from '../../Utills/HelperFuncation';
import { apiPost } from '../../Utills/utils';
import { saveUserData } from '../reducers/auth';
import store from '../store';
import types from '../types';
const {dispatch} = store;

export const userSignup = data => {
  dispatch(signupData(data));
};
export const userLogin = (data) => {
  return new Promise((resolve, reject) => {
    apiPost(LOGIN_API, data).then((res) => {
      if (!!res.data) {
        storeData('userData', res.data.token).then((value) => {
          dispatch(saveUserData(res.data))
          resolve(res)
        }).catch((error) => {
          reject(error)
        })
      } else {
        resolve(res)
      }
    }).catch((error) => {
      reject(error)
    })
  })
  // dispatch(saveUserData(data));
};

export function logout() {
  dispatch({type: types.CLEAR_REDUX_STATE});
}
