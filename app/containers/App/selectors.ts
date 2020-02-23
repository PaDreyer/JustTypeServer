import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';

const selectRoute = (state: ApplicationRootState) => state.router;

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.location);


const selectAppState = (state: ApplicationRootState) => state.app;

const makeSelectApp = () =>
  createSelector(selectAppState, appState => appState);

const selectLoginState = (state: ApplicationRootState) => state.login;

const makeSelectLogin = () =>
  createSelector(selectLoginState, loginState => loginState);

const selectHomeState = (state: ApplicationRootState) => state.home;

const makeSelectHome = () =>
  createSelector(selectHomeState, homeState => homeState);

const selectRouterState = (state: ApplicationRootState) => state.router;

const makeSelectRouter = () =>
  createSelector(selectRouterState, routerState => routerState);

const selectFriendsState = (state: ApplicationRootState) => state.friends;

const makeSelectFriends = () =>
  createSelector(selectFriendsState, friendsState => friendsState);

export { makeSelectLocation, makeSelectApp, makeSelectLogin, makeSelectHome, makeSelectRouter, makeSelectFriends };
