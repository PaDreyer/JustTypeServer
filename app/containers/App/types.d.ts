import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

/* --- STATE --- */
interface AppPageState {
  readonly default: any;
  user : any;
  authenticated : null | boolean;
  authenticatedError : null | Error;

  requestLogin : null | boolean;
  requestLoginError : null | Error;

  requestAuth : null | boolean;
  requestAuthError : null | Error;

  requestRegister : null | boolean;
  requestRegisterError : null | Error;

  requestNotifications : null | boolean;
  requestNotificationsError : null | Error;

  requestGroups : null | boolean;
  requestGroupsError : null | Error;

  requestCreateGroup : null | boolean;
  requestCreateGroupError : null | Error;

  requestFriends: null | boolean;
  requestFriendsError: null | Error;

  requestBets: null | boolean;
  requestBetsError: null | Error;

  requestCreateBet: null | boolean;
  requestCreateBetError: null | boolean;
}

/* --- ACTIONS --- */
type AppPageActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type RootState = ApplicationRootState;
type ContainerState = AppPageState;
type ContainerActions = AppPageActions;

export { RootState, ContainerState, ContainerActions };
