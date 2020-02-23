import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the friends state domain
 */

const selectFriendsDomain = (state: ApplicationRootState) => {
  return state || initialState;
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by Friends
 */

const makeSelectFriends = () =>
  createSelector(
    selectFriendsDomain,
    substate => {
      return substate;
    },
  );


export default makeSelectFriends;
export { selectFriendsDomain };
