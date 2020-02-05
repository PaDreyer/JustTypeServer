import { all, take, call, put, select, takeLatest } from 'redux-saga/effects';
import ActionTypes from './constants';
import { } from './actions';
import request from 'utils/request';
import { userInfo } from 'os';

const api = "http://localhost:3001";

/*
HTTP FETCH EXAMPLE


export function* auth_request(){

  const requestURL = `${api}/authenticated`;
  const response = yield call(request, requestURL, {
    credentials : 'include',
    method: 'POST'
  })

  if(response){
    if(response.authenticated){
      yield put(successAuth({ user : response.user, authenticated : response.authenticated}));
    } else {
      yield put(successAuth({ user : null, authenticated : false}));
    }
  } else {
    yield put(failureAuth(response));
  }
}
*/

// Individual exports for testing
export default function* homePageSaga() {
  // See example in containers/HomePage/saga.js
  /*
  yield all([
    yield takeLatest(ActionTypes.AUTH_REQUEST, auth_request),
  ])
  */
}
