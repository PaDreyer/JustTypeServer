import { all, take, call, put, select, takeLatest } from 'redux-saga/effects';
import ActionTypes from './constants';
import { successAuth, failureAuth, successLogin, failureLogin, failureRegister, successRegister } from './actions';
import request from 'utils/request';
import axios from 'axios';

const api = "http://localhost:3001";


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

export function* login_request(action){

  const { username, password } = action.payload;
  const userObj = { user : { username, password } }

  const requestURL = `${api}/login`;

  const response = yield axios.post(requestURL, userObj, {
    withCredentials: true,
    headers: {
      "Content-Type" : 'application/json',
      "Accept" : "application/json"
    }
  });

  if(response.responseText = "OK"){
    if(response.data.authenticated) {
      yield put(successLogin({ user : response.data.user, authenticated : response.data.authenticated, e : response.data.e }))
    } else {
      yield put(failureLogin(response.data.e))
    }
  } else {
    yield put(failureLogin('The api is not reachable. Check your connection and try again'))
  }  
}

export function* register_request(action){
  const { username, password } = action.payload;
  const userObj = { user : { username, password } };

  const requestURL = `${api}/register`;
  console.log("requesting")

  const response = yield axios.post(requestURL, userObj, {
    withCredentials: true,
    headers: {
      "Content-Type" : 'application/json',
      "Accept" : "application/json"
    }
  });

  console.log("Response: ", response);
  if(response.responsteText = "OK"){
    if(response.data.authenticated) {
    // call register success
      yield put(successRegister({ user: response.data.user, authenticated : response.data.authenticated, e: response.data.e }))
    } else {
      yield put(failureRegister(JSON.stringify(response.data.e, null, 2)));
    }
  } else {
    yield put(failureRegister('The api is not reachable. Check your connection and try again'))
  }
}

// Individual exports for testing
export default function* homePageSaga() {
  // See example in containers/HomePage/saga.js
  yield all([
    yield takeLatest(ActionTypes.AUTH_REQUEST, auth_request),
    yield takeLatest(ActionTypes.LOGIN_REQUEST, login_request),
    yield takeLatest(ActionTypes.REGISTER_REQUEST, register_request)
  ])
}
