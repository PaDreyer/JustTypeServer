/*
 *
 * LoginPage reducer
 *
 */

import produce from 'immer';
import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  user: null,
  default: null,
  authenticated : null,
  authenticatedError : null,
  requestAuth : null,
  requestAuthError : null,
  requestLogin : null,
  requestLoginError : null,
  requestRegister : null,
  requestRegisterError : null
};

const loginPageReducer = (state : ContainerState = initialState, action : ContainerActions) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.DEFAULT_ACTION:
        break;
  
      case ActionTypes.LOGIN_REQUEST:
        draft.user = null;
  
        draft.requestLogin = true;
        draft.requestLoginError = null;
  
        draft.authenticated = null;
        draft.authenticatedError = null;
  
        draft.requestRegister = null;
        draft.requestRegisterError = null;
  
        draft.requestAuth = null;
        draft.requestAuthError = null;
        break;
  
      case ActionTypes.LOGIN_SUCCESS:
        draft.user = action.payload.user;
  
        draft.requestLogin = false;
        draft.requestLoginError = action.payload.e;
  
        draft.authenticated = true;
        draft.authenticatedError = null;
  
        draft.requestRegister = null;
        draft.requestRegisterError = null;
  
        draft.requestAuth = null;
        draft.requestAuthError = null;
        break;
  
      case ActionTypes.LOGIN_FAILURE:
        draft.requestLogin = false;
        draft.requestLoginError = action.payload;
  
        draft.authenticated = false;
        draft.authenticatedError = null;
  
        draft.requestRegister = null;
        draft.requestRegisterError = null;
  
        draft.requestAuth = null;
        draft.requestAuthError = null;
        break;
        
      case ActionTypes.AUTH_REQUEST:
        draft.requestAuth = true;
        draft.requestAuthError = null;
  
        draft.requestLogin = null;
        draft.requestLoginError = null;
  
        draft.requestRegister = null;
        draft.requestRegisterError = null;
  
        draft.authenticated = null;
        draft.authenticatedError = null;
        break;
  
      case ActionTypes.AUTH_SUCCESS:
        draft.user = action.payload.user;
  
        draft.requestAuth = false;
        draft.requestAuthError = null;
        
        draft.requestLogin = null;
        draft.requestLoginError = null;
  
        draft.requestRegister = null;
        draft.requestRegisterError = null;
  
        draft.authenticated = action.payload.authenticated;
        draft.authenticatedError = null;
        break;
  
      case ActionTypes.AUTH_FAILURE:
        draft.user = null;
  
        draft.requestAuth = false;
        draft.requestAuthError = action.payload.error;
        
        draft.requestLogin = null;
        draft.requestLoginError = null;
  
        draft.requestRegister = null;
        draft.requestRegisterError = null;
  
        draft.authenticated = null;
        draft.authenticatedError = null;
        break;
          
      case ActionTypes.REGISTER_REQUEST:
        draft.user = null;
        draft.requestAuth = null;
        draft.requestAuthError = null;
  
        draft.requestLogin = null;
        draft.requestLoginError = null;
  
        draft.requestRegister = true;
        draft.requestRegisterError = null;
  
        draft.authenticated = false;
        draft.authenticatedError = null;
        break;
  
      case ActionTypes.REGISTER_SUCCESS:
        draft.user = action.payload.user;
        draft.requestAuth = null;
        draft.requestAuthError = null;
  
        draft.requestLogin = null;
        draft.requestLoginError = null;
  
        draft.requestRegister = false;
        draft.requestRegisterError = null;
  
        draft.authenticated = true;
        draft.authenticatedError = null;
        break;
  
      case ActionTypes.REGISTER_FAILURE:
        draft.user = null;
        draft.requestAuth = null;
        draft.requestAuthError = null;
  
        draft.requestLogin = null;
        draft.requestLoginError = null;
  
        draft.requestRegister = false;
        draft.requestRegisterError = action.payload;
  
        draft.authenticated = false;
        draft.authenticatedError = null;
        break;

      default:
        break;
    }
  });

export default loginPageReducer;
