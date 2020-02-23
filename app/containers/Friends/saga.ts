 import { take, call, put, select, takeLatest, all } from 'redux-saga/effects';
 import request from 'utils/request';
 import { successFriends, failureFriends } from './actions';
import ActionTypes from 'containers/Friends/constants';

// Individual exports for testing
export default function* friendsSaga() {
}
