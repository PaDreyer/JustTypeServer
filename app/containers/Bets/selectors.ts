import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the bets state domain
 */

const selectBetsDomain = (state: ApplicationRootState) => {
  return state || initialState;
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by Bets
 */

const makeSelectBets = () =>
  createSelector(
    selectBetsDomain,
    substate => {
      return substate;
    },
  );

export default makeSelectBets;
export { selectBetsDomain };
