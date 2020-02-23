import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the notifications state domain
 */

const selectNotificationsDomain = (state: ApplicationRootState) => {
  return state || initialState;
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by Notifications
 */

const makeSelectNotifications = () =>
  createSelector(
    selectNotificationsDomain,
    substate => {
      return substate;
    },
  );

export default makeSelectNotifications;
export { selectNotificationsDomain };
