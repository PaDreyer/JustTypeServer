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
  view: "login"
};

const loginPageReducer = (state : ContainerState = initialState, action : ContainerActions) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.DEFAULT_ACTION:
        break;
      
      case ActionTypes.SET_VIEW:
        draft.view = action.payload;
        break;

      default:
        break;
    }
  })

export default loginPageReducer;
