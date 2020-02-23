/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
//import { makeSelectApp, makeSelectLogin } from './selectors';
import { makeSelectApp, makeSelectRouter, makeSelectHome, makeSelectLogin} from './../App/selectors';
import reducer from './reducer';
import saga from './saga';

import reducerApp from './../App/reducer';
import sagaApp from './../App/saga';

import reducerLogin from './../LoginPage/reducer';
import sagaLogin from './../LoginPage/saga';

import { } from './actions';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


import DrawerNavigation from './../../components/Drawer/MainDrawer';
import Overview from './../../components/Overview/MainOverview';
import TableFriends from './../../components/TableFriends/MainTableFriends';


const stateSelector = createStructuredSelector({
  App: makeSelectApp(),
  Login: makeSelectLogin(),
  Home: makeSelectHome(),
  Router: makeSelectRouter(),
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '101vh',
      width: '100wh',
      //backgroundColor: 'black'
    },
  }),
);



export default function HomePage(props) {
  const { toggleGroups, friends, createGroup } = props;
  console.log("PROPS: ", props);
  //console.log("HOMEPAGE: ", toggleGroups)

  useInjectReducer({ key: 'home', reducer: reducer });
  useInjectSaga({ key: 'home', saga: saga });

  useInjectReducer({ key: 'app', reducer: reducerApp });
  useInjectSaga({ key: 'app', saga: sagaApp });

  useInjectReducer({ key: 'login', reducer: reducerLogin });
  useInjectSaga({ key: 'login', saga: sagaLogin });


  const classes = useStyles()
  const { App, Login, Home, Router } = useSelector(stateSelector);
  //const secureFriends = Friends != undefined && Friends.userFriends ? Friends.userFriends : [];

  console.log("router: ", Router);

  return (
    <div className={classes.root}>
        <Overview toggleGroups={toggleGroups} friends={friends} createGroup={createGroup} app={App}/>
    </div>
  );
}

//<FormattedMessage {...messages.header} />