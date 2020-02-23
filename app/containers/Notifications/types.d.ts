import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

/* --- STATE --- */
interface NotificationsState {
  readonly default: any;
}

/* --- ACTIONS --- */
type NotificationsActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type RootState = ApplicationRootState;
type ContainerState = NotificationsState;
type ContainerActions = NotificationsActions;

export { RootState, ContainerState, ContainerActions };
