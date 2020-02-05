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

export const requestRegister = (username, password) => action(ActionTypes.REGISTER_REQUEST, {username, password})
export const successRegister = (data) => action(ActionTypes.REGISTER_SUCCESS, data);
export const failureRegister = (error) => action(ActionTypes.REGISTER_FAILURE, error);