/*
 *
 * LoginPage reducer
 *
 */

import produce from 'immer';
import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  default: null,
};

const homePageReducer = (state: ContainerState = initialState, action: ContainerActions) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.DEFAULT_ACTION:
        break;

      default:
        break;
    }
  });

export default homePageReducer;
