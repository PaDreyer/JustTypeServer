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
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import axios, { AxiosRequestConfig } from 'axios';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectApp, makeSelectLogin } from './selectors';
import reducer from './reducer';
import saga from './saga';

import homeReducer from './../HomePage/reducer';
import homeSaga from './../HomePage/saga';

import loginReducer from './../LoginPage/reducer';
import loginSaga from './../LoginPage/saga';

import { requestAuth, requestLogin, requestRegister} from './actions';

import { CircularProgress } from '@material-ui/core';

import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';


const stateSelector = createStructuredSelector({
  App: makeSelectApp(),
  Login: makeSelectLogin(),
  Home: makeSelectHome(),
});

import GlobalStyle from '../../global-styles';
import { makeSelectHome } from 'containers/HomePage/selectors';
export default function App() {
  useInjectReducer({ key: 'app', reducer: reducer });
  useInjectSaga({ key: 'app', saga: saga });

  useInjectReducer({ key: 'home', reducer: homeReducer });
  useInjectSaga({ key: 'home', saga: homeSaga });

  useInjectReducer({ key: 'login', reducer: loginReducer });
  useInjectSaga({ key: 'login', saga: loginSaga });

  const { App, Login, Home } = useSelector(stateSelector);
  const secureLogin = App ? App : { authenticated : null };

  console.log("app: ", App);
  console.log("login: ", Login);
  console.log("home: ", Home);
  const dispatch = useDispatch();

  React.useEffect( ()=>{
    setTimeout(()=>{
      dispatch(requestAuth());
    }, 500)
  }, [])

  return (
    <div>
        { secureLogin.authenticated == null &&
          <CircularProgress />
        }
        { secureLogin.authenticated == true &&
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />  
          </Switch>
        }
        { secureLogin.authenticated == false &&
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route component={NotFoundPage} />  
        </Switch>
        }
      <GlobalStyle />
    </div>
  );
}
