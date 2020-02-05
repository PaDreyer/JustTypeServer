/*
 *
 * LoginPage actions
 *
 */

import { action } from 'typesafe-actions';
import {} from './types';

import ActionTypes from './constants';

export const defaultAction = () => action(ActionTypes.DEFAULT_ACTION);

export const setView = (view) => action(ActionTypes.SET_VIEW, view);