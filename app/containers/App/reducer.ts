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
  requestRegisterError : null,
  requestNotifications : null,
  requestNotificationsError : null,
  requestGroups : null,
  requestGroupsError : null,
  requestGroupBets : null,
  requestGroupBetsError : null,
  requestCreateGroup : null,
  requestCreateGroupError : null,
  requestFriends : null,
  requestFriendsError: null,
  requestBets: null,
  requestBetsError: null,
  requestCreateBet: null,
  requestCreateBetError: null,
};

const loginPageReducer = (state: ContainerState = initialState, action: ContainerActions) =>
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

      case ActionTypes.USER_NOTIFICATION_REQUEST:
        draft.requestNotifications = true;
        break;

      case ActionTypes.USER_NOTIFICATION_SUCCESS:
        draft.user = { ...state.user, notifications: action.payload };
        draft.requestNotifications = false;
        break;

      case ActionTypes.USER_NOTIFICATION_FAILURE:
        draft.requestNotificationsError = action.payload;
        draft.requestNotifications = false;
        break;

      case ActionTypes.USER_GROUP_REQUEST:
        draft.requestGroups = true;
        break;

      case ActionTypes.USER_GROUP_SUCCESS:
        draft.requestGroups = false;
        draft.user = { ...state.user, groups: action.payload };
        break;

      case ActionTypes.USER_GROUP_FAILURE:
        draft.requestGroups = false;
        draft.requestGroupsError = action.payload;
        break;

      case ActionTypes.USER_GROUP_BETS_REQUEST:
        draft.requestGroupBets = true;
        break;

      case ActionTypes.USER_GROUP_BETS_SUCCESS:
          draft.requestGroupBets = false;
          let editedGroups = [...state.user.grops];
          editedGroups = editedGroups.reduce( (acumm, currVal, currIndex)=>{

            action.payload.forEach( bet => {
              if(currVal._id == bet.groupId){
                acumm.bets.push(bet);
                return acumm
              }
            })

          }, []);

          draft.user = { ...state.user, groups: editedGroups };
          break;

      case ActionTypes.USER_GROUP_BETS_FAILURE:
        draft.requestGroupBets = false;
        draft.requestGroupBetsError = action.payload;
        break;

      case ActionTypes.USER_GROUP_CREATE_REQUEST:
        draft.requestCreateGroup = true;
        break;

      case ActionTypes.USER_GROUP_CREATE_SUCCESS:
        draft.requestCreateGroup = false;
        const newGroups = draft.user.groups;
        newGroups.push(action.payload);
        draft.user = { ...state.user, groups : newGroups };
        break;

      case ActionTypes.USER_GROUP_CREATE_FAILURE:
        draft.requestCreateGroup = false;
        draft.requestCreateGroupError = action.payload;
        break;

      case ActionTypes.USER_FRIENDS_REQUEST:
        draft.requestFriends = true;
        break;

      case ActionTypes.USER_FRIENDS_SUCCESS:
        draft.requestFriends = false;
        draft.user = { ...state.user, friends: action.payload };
        break;

      case ActionTypes.USER_FRIENDS_FAILURE:
        draft.requestFriends = false;
        draft.requestFriendsError = action.payload;
        break;

      case ActionTypes.USER_BETS_REQUEST:
        draft.requestBets = true;
        break;

      case ActionTypes.USER_BETS_SUCCESS:
        draft.requestBets = false;
        draft.user = { ...state.user, bets: action.payload };
        break;

      case ActionTypes.USER_BETS_FAILURE:
        draft.requestBets = false;
        draft.requestBetsError = action.payload;
        break;

      case ActionTypes.USER_BETS_CREATE_REQUEST:
        draft.requestCreateBet = true;
        break;

      case ActionTypes.USER_BETS_CREATE_SUCCESS:
        draft.requestCreateBet = false;
        const newBets = draft.user.bets;
        newBets.push(action.payload);
        draft.user = { ...state.user, bets : newBets };
        break;

      case ActionTypes.USER_BETS_CREATE_FAILURE:
        draft.requestCreateBet = false;
        draft.requestCreateBetError = action.payload;
        break;

      default:
        break;
    }
  });

export default loginPageReducer;
