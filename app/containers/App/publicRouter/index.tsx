/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

//import HomePage from 'containers/HomePage/Loadable';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectLogin } from './../selectors';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoginPage from 'containers/LoginPage';


/*
Plan: 
return 
  <PublicRouter />

  <PrivateRouter />
*/

import GlobalStyle from '../../../global-styles';
export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
