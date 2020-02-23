import { all, take, call, put, select, takeLatest } from 'redux-saga/effects';
import ActionTypes from './constants';
import { } from './actions';
import request from 'utils/request';
import { userInfo } from 'os';
import axios from 'axios';

const api = 'http://localhost:3001';


/*

export function* user_notification_request(){

  const requestURL = `${api}/user/notifications`;
  const response = yield call(request, requestURL, {
    credentials : 'include',
    method: 'POST'
  })

  if(response){
    if(!response.e){
      yield put(successNotifications(response.data));
      //yield put(successAuth({ user : response.user, authenticated : response.authenticated}));
    } else {
      yield put(successNotifications(response.data));
      //yield put(successAuth({ user : null, authenticated : false}));
    }
  } else {
    yield put(failureNotifications(response.e));
  }
}
*/

// Individual exports for testing
export default function* homePageSaga() {
  // See example in containers/HomePage/saga.js
  /*
  yield all([
    takeLatest(ActionTypes.USER_NOTIFICATION_REQUEST, user_notification_request),
  ])
  */
}
