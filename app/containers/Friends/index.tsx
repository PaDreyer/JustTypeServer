/*
 *
 * Friends
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectApp, makeSelectHome, makeSelectLogin, makeSelectRouter, makeSelectFriends } from './../App/selectors';
import reducer from './reducer';
import saga from './saga';
import reducerHome from './../HomePage/reducer';
import sagaHome from './../HomePage/saga';
import reducerApp from './../App/reducer';
import sagaApp from './../App/saga';
import messages from './messages';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import FriendsList from './../../components/FriendsList/MainFriendsList';

const stateSelector = createStructuredSelector({
  Friends: makeSelectFriends(),
  App: makeSelectApp(),
  Router: makeSelectRouter(),
  Login: makeSelectLogin(),
  Home: makeSelectHome()
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      //flexGrow: 1,
      //maxWidth: 752,
      //overflow: 'hidden',
    }
  }),
);
interface Props {}

function Friends(props: Props) {
  console.log("PROPS: ", props);

  const { friends, toggleFriends } = props;
  // Warning: Add your key to RootState in types/index.d.ts file
  useInjectReducer({ key: 'friends', reducer: reducer });
  useInjectSaga({ key: 'friends', saga: saga });

  useInjectReducer({ key: 'home', reducer: reducerHome });
  useInjectSaga({ key: 'home', saga: sagaHome });

  useInjectReducer({ key: 'app', reducer: reducerApp });
  useInjectSaga({ key: 'app', saga: sagaApp });

  const classes = useStyles();

  const { Friends, Login, App, Router, Home } = useSelector(stateSelector);

  const dispatch = useDispatch();

  return (
    <div>
      <Helmet>
        <title>Friends</title>
        <meta name="description" content="Description of Friends" />
      </Helmet>
      <FriendsList friends={friends} toggleFriends={toggleFriends} className={classes.root}/>
    </div>
  );
};

//<FormattedMessage {...messages.header} />

export default Friends;
