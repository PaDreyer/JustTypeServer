import { all, take, call, put, select, takeLatest } from 'redux-saga/effects';
import ActionTypes from './constants';
import { push } from 'react-router-redux';
import { successAuth,
   failureAuth,
   successLogin,
   failureLogin,
   failureRegister,
   successRegister,
   successNotifications,
   failureNotifications,
  successGroups,
  failureGroups,
  successFriends,
  failureFriends,
  successCreateGroup,
  failureCreateGroup,
  successBets,
  successCreateBet,
  failureCreateBet,
  failureBets} from './actions';
import request from 'utils/request';
import axios from 'axios';

const api = 'http://localhost:3001';


export function* auth_request() {

  const requestURL = `${api}/authenticated`;
  const response = yield call(request, requestURL, {
    credentials : 'include',
    method: 'POST',
  });


  if (response) {
    if (response.authenticated) {
      yield put(successAuth({ user : response.user, authenticated : response.authenticated}));
      yield put(push('/'));
    } else {
      yield put(successAuth({ user : null, authenticated : false}));
    }
  } else {
    yield put(failureAuth(response));
  }
}

export function* login_request(action) {

  const { username, password } = action.payload;
  const userObj = { user : { username, password } };

  const requestURL = `${api}/login`;

  const response = yield axios.post(requestURL, userObj, {
    withCredentials: true,
    headers: {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
    },
  });
  console.log('response from login : ', response.data.user);

  if (response.responseText = 'OK') {
    if (response.data.authenticated) {
      yield put(successLogin({ user : response.data.user, authenticated : response.data.authenticated, e : response.data.e }));
      yield put(push('/'));
    } else {
      yield put(failureLogin(response.data.e));
    }
  } else {
    yield put(failureLogin('The api is not reachable. Check your connection and try again'));
  }
}

export function* register_request(action) {
  const { username, password } = action.payload;
  const userObj = { user : { username, password } };

  const requestURL = `${api}/register`;

  const response = yield axios.post(requestURL, userObj, {
    withCredentials: true,
    headers: {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
    },
  });

  if (response.responsteText = 'OK') {
    if (response.data.authenticated) {
    // call register success
      yield put(successRegister({ user: response.data.user, authenticated : response.data.authenticated, e: response.data.e }));
      yield put(push('/'));
    } else {
      yield put(failureRegister(JSON.stringify(response.data.e, null, 2)));
    }
  } else {
    yield put(failureRegister('The api is not reachable. Check your connection and try again'));
  }
}

export function* user_notification_request(action) {

  const requestURL = `${api}/user/notifications`;
  const response = yield call(request, requestURL, {
    credentials : 'include',
    method: 'POST',
  });

  if (response) {
    if (!response.e) {
      yield put(successNotifications(response.data));
      // yield put(successAuth({ user : response.user, authenticated : response.authenticated}));
    } else {
      yield put(successNotifications(response.data));
      // yield put(successAuth({ user : null, authenticated : false}));
    }
  } else {
    yield put(failureNotifications(response.e));
  }
}

export function* user_group_request(action) {


  const requestURL = `${api}/user/groups`;
  const response = yield call(request, requestURL, {
    credentials : 'include',
    method: 'GET',
  });

  console.log('RESPONSE: ', response);
  if (response) {
    if (!response.e) {
      yield put(successGroups(response.data));
      // yield put(successAuth({ user : response.user, authenticated : response.authenticated}));
    } else {
      yield put(successGroups(response.data));
      // yield put(successAuth({ user : null, authenticated : false}));
    }
  } else {
    yield put(failureGroups(response.e));
  }
}

export function* user_friends_request() {

  const requestURL = `${api}/user/friends`;
  const response = yield call(request, requestURL, {
    credentials: 'include',
    method: 'GET',
  });


  if (response) {
    if (!response.e) {
      yield put(successFriends(response.data));
    } else {
      yield put(successFriends(response.data));
    }
  } else {
    yield put(failureFriends(response.e));
  }
}

export function* user_group_create_request(action) {
  const { name, member, description } = action.payload;

  const requestURL = `${api}/user/groups/create`;

  const response = yield axios.post(requestURL, { name, member, description }, {
    withCredentials: true,
    headers: {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
    },
  });


  if (response.responsteText = 'OK') {
    if (!response.data.e) {
      yield put(successCreateGroup(response.data.data));
    } else {
      yield put(successCreateGroup(response.data.data));
    }
  } else {
    yield put(failureCreateGroup('The group could not be created'));
  }
}

export function* user_bets_request(action) {

  const requestURL = `${api}/user/bets`;
  const response = yield call(request, requestURL, {
    credentials : 'include',
    method: 'GET',
  });

  if (response) {
    if (!response.e) {
      yield put(successBets(response.data));
      // yield put(successAuth({ user : response.user, authenticated : response.authenticated}));
    } else {
      yield put(successBets(response.data));
      // yield put(successAuth({ user : null, authenticated : false}));
    }
  } else {
    yield put(failureBets(response.e));
  }
}

export function* user_bets_create_request(action) {
  console.log("action payload: ", action.payload);
  const { name, type, description, inset, group } = action.payload;

  const requestURL = `${api}/user/bets/create`;

  const response = yield axios.post(requestURL, { name, type, description, inset, group }, {
    withCredentials: true,
    headers: {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
    },
  });

  console.log("RESPONSE: ", response);

  if (response.responsteText = 'OK') {
    if (!response.data.e) {
      yield put(successCreateBet(response.data.data));
    } else {
      yield put(successCreateBet(response.data.data));
    }
  } else {
    yield put(failureCreateBet('The group could not be created'));
  }
}


// Individual exports for testing
export default function* homePageSaga() {
  // See example in containers/HomePage/saga.js
  yield all([
    takeLatest(ActionTypes.AUTH_REQUEST, auth_request),
    takeLatest(ActionTypes.LOGIN_REQUEST, login_request),
    takeLatest(ActionTypes.REGISTER_REQUEST, register_request),
    takeLatest(ActionTypes.USER_FRIENDS_REQUEST, user_friends_request),
    takeLatest(ActionTypes.USER_NOTIFICATION_REQUEST, user_notification_request),
    takeLatest(ActionTypes.USER_GROUP_REQUEST, user_group_request),
    takeLatest(ActionTypes.USER_GROUP_CREATE_REQUEST, user_group_create_request),
    takeLatest(ActionTypes.USER_BETS_REQUEST, user_bets_request),
    takeLatest(ActionTypes.USER_BETS_CREATE_REQUEST, user_bets_create_request),
  ]);
}
