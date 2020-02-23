/*
 *
 * LoginPage actions
 *
 */

import { action } from 'typesafe-actions';
import {} from './types';

import ActionTypes from './constants';

export const defaultAction = () => action(ActionTypes.DEFAULT_ACTION);

export const requestAuth = () => action(ActionTypes.AUTH_REQUEST);
export const successAuth = (data) => action(ActionTypes.AUTH_SUCCESS, data);
export const failureAuth = (error) => action(ActionTypes.AUTH_FAILURE, error);

export const requestLogin = (username, password) => action(ActionTypes.LOGIN_REQUEST, {username, password});
export const successLogin = (data) => action(ActionTypes.LOGIN_SUCCESS, data);
export const failureLogin = (error) => action(ActionTypes.LOGIN_FAILURE, error);

export const requestRegister = (username, password) => action(ActionTypes.REGISTER_REQUEST, {username, password});
export const successRegister = (data) => action(ActionTypes.REGISTER_SUCCESS, data);
export const failureRegister = (error) => action(ActionTypes.REGISTER_FAILURE, error);

export const requestNotfications = () => action(ActionTypes.USER_NOTIFICATION_REQUEST);
export const successNotifications = (notifications) => action(ActionTypes.USER_NOTIFICATION_SUCCESS, notifications);
export const failureNotifications = (error) => action(ActionTypes.USER_NOTIFICATION_FAILURE, error);

export const requestFriends = () => action(ActionTypes.USER_FRIENDS_REQUEST);
export const successFriends = (friends) => action(ActionTypes.USER_FRIENDS_SUCCESS, friends);
export const failureFriends = (error) => action(ActionTypes.USER_FRIENDS_FAILURE, error);

export const requestGroups = () => action(ActionTypes.USER_GROUP_REQUEST);
export const successGroups = (groups) => action(ActionTypes.USER_GROUP_SUCCESS, groups);
export const failureGroups = (error) => action(ActionTypes.USER_GROUP_FAILURE, error);

export const requestCreateGroup = (data) => action(ActionTypes.USER_GROUP_CREATE_REQUEST, data);
export const successCreateGroup = (data) => action(ActionTypes.USER_GROUP_CREATE_SUCCESS, data);
export const failureCreateGroup = (error) => action(ActionTypes.USER_GROUP_CREATE_FAILURE, error);

export const requestBets = () => action(ActionTypes.USER_BETS_REQUEST);
export const successBets = (data) => action(ActionTypes.USER_BETS_SUCCESS, data);
export const failureBets = (error) => action(ActionTypes.USER_BETS_FAILURE, error);

export const requestCreateBet = () => action(ActionTypes.USER_BETS_CREATE_REQUEST);
export const successCreateBet = (data) => action(ActionTypes.USER_BETS_CREATE_SUCCESS, data);
export const failureCreateBet = (error) => action(ActionTypes.USER_BETS_CREATE_FAILURE, error);
