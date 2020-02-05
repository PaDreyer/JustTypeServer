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
}

/* --- ACTIONS --- */
type AppPageActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type RootState = ApplicationRootState;
type ContainerState = AppPageState;
type ContainerActions = AppPageActions;

export { RootState, ContainerState, ContainerActions };
