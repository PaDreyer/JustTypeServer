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

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectLogin } from './../selectors';

import reducer from './../reducer';
import saga from './../saga';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';


/*
Plan: 
return 
  <PublicRouter />

  <PrivateRouter />
*/

import GlobalStyle from '../../../global-styles';
export default function App(props) {
  console.log("props privateRouter: ", props);
  useInjectReducer({ key: 'app', reducer: reducer });
  useInjectSaga({ key: 'app', saga: saga });
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
