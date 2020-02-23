import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

/* --- STATE --- */
interface BetsState {
  readonly default: any;
}

/* --- ACTIONS --- */
type BetsActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type RootState = ApplicationRootState;
type ContainerState = BetsState;
type ContainerActions = BetsActions;

export { RootState, ContainerState, ContainerActions };
