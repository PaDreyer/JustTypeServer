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
import { push } from 'react-router-redux';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
//import axios, { AxiosRequestConfig } from 'axios';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectApp, makeSelectLogin } from './selectors';
import reducer from './reducer';
import saga from './saga';

import homeReducer from './../HomePage/reducer';
import homeSaga from './../HomePage/saga';

import loginReducer from './../LoginPage/reducer';
import loginSaga from './../LoginPage/saga';

import { requestAuth, requestLogin, requestRegister, requestGroups, requestCreateGroup } from './actions';
import { requestNotfications, requestFriends } from './actions';

import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoadingIndicator from './../../components/Loading/MainLoading';
import Navbar from './../../components/Drawer/MainDrawer';
import Friends from 'containers/Friends/Loadable';
import Bets from 'containers/Bets/Loadable';

import PrivateRoute from './privateRouter';


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
  const secureNotifications = App && App.user ? App.user.notifications : [];
  const secureFriends = App && App.user ? App.user.friends : [];

  function notificationToggle(){
    dispatch(requestNotfications());
  }

  function toggleFriends(){
    dispatch(requestFriends());
  }

  function toggleGroups(){
    dispatch(requestGroups());
  }

  function createGroup(data){
    console.log("data create group: ", data);
    dispatch(requestCreateGroup(data))
  }

  function userLogout(){
    document.cookie = "betroom=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    dispatch(requestAuth());
  }

  function userProfile(){
    //redirect to user page
  }


  //console.log("secureNotificaitons. ", secureNotifications);
  //console.log("app: ", App);
  //console.log("login: ", Login);
  //console.log("home: ", Home);
  const dispatch = useDispatch();


  React.useEffect( ()=>{
    setTimeout(()=>{
      dispatch(requestAuth());
    }, 500)
  }, [])

  return (
    <div>
        { secureLogin.authenticated == null &&
          <LoadingIndicator />
        }
        <div>
          { secureLogin.authenticated == true &&
            <Navbar 
            userProfile={userProfile} 
            userLogout={userLogout} 
            notificationList={secureNotifications} 
            toggleNotificationList={notificationToggle}
            toggleFriends={toggleFriends}
            toggleGroups={toggleGroups}/>
          }
          <Switch>
            <PrivateRoute 
            toggleGroups={toggleGroups}
            createGroup={createGroup}
            friends={secureFriends}
            auth={secureLogin.authenticated} 
            exact path="/" 
            component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <PrivateRoute 
              auth={secureLogin.authenticated} 
              path="/friends" 
              component={Friends} 
              toggleFriends={toggleFriends}
              friends={secureFriends}
              />
            <PrivateRoute auth={secureLogin.authenticated} path="/bets" component={Bets}/>
            <PrivateRoute auth={secureLogin.authenticated} component={NotFoundPage} />  
          </Switch>
        </div>
      <GlobalStyle />
      {/*
      <div style={{
        backgroundColor: 'black',
        width: '100vw',
        height: '101vh',
        zIndex: -100
      }}>
      </div>
      */}
    </div>
  );
}


/*

 return (
    <div>
        { secureLogin.authenticated == null &&
          <LoadingIndicator />
        }
        { secureLogin.authenticated == true &&
        <div>
          <Navbar notificationList={secureNotifications} toggleNotificationList={notificationToggle}/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/friends"  render={props => <Friends {...props} />}/>
            <Route path="/bets" render={props => <Bets {...props} />}/>
            <Route component={NotFoundPage} />  
          </Switch>
        </div>
        }
        { secureLogin.authenticated == false &&
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route component={NotFoundPage} />  
        </Switch>
        }
      <GlobalStyle />
      {/*
      <div style={{
        backgroundColor: 'black',
        width: '100vw',
        height: '101vh',
        zIndex: -100
      }}>
      </div>
      }
      </div>
      );

*/