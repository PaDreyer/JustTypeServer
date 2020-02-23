import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

/* --- STATE --- */
interface FriendsState {
  readonly default: any;
}

/* --- ACTIONS --- */
type FriendsActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type RootState = ApplicationRootState;
type ContainerState = FriendsState;
type ContainerActions = FriendsActions;

export { RootState, ContainerState, ContainerActions };
