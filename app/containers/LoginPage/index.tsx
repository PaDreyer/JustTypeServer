/*
 *
 * LoginPage
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { push } from 'react-router-redux'

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectLogin } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { setView } from './actions';

import reducerApp from './../App/reducer';
import { requestLogin, requestRegister } from './../App/actions';
import sagaApp from './../App/saga';
import { makeSelectApp, makeSelectRouter } from './../App/selectors';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

const stateSelector = createStructuredSelector({
  Login: makeSelectLogin(),
  App: makeSelectApp(),
  Router: makeSelectRouter(),
});

import MainLogin from './../../components/Login/MainLogin';
import MainRegister from './../../components/Register/MainRegister';

interface Props {}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  loginRoot: {
    height: '100vh',
    width: '100wh'
  },
  paper: {
    padding: theme.spacing(4, 2, 2, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    borderRadius: '7px',
    boxShadow: '8px 11px 21px 6px rgba(0,0,0,0.51)',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: 'rgba(0,0,0,0.2)',
    borderRightStyle: 'none',
    borderBottomStyle: 'none',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: 'rgba(0, 159, 203, 1)',
    '&:hover': {
      backgroundColor: 'rgba(0, 159, 203, .7)'
    }
  },
  rootContainer: {
    backgroundColor: '#E3E3E3',
    height: '100%'
  },
  formContainer: {
    paddingTop: '2rem',
    '@media (min-height:700px)': {
      paddingTop: theme.spacing(20)
    },
    borderRadius: '7px',
  },
}));


function LoginPage(props: Props) {
  const classes = useStyles();
  // Warning: Add your key to RootState in types/index.d.ts file
  useInjectReducer({ key: 'login', reducer: reducer });
  useInjectSaga({ key: 'login', saga: saga });

  useInjectReducer({ key: 'app', reducer: reducerApp });
  useInjectSaga({ key: 'app', saga: sagaApp });

  const { Login, App, Router } = useSelector(stateSelector);
  const dispatch = useDispatch();
  //console.log("ROUTER: ", Router);

  function login({ username, password}){
    //Error abfangen, wenn user null sind
    dispatch(requestLogin(username, password));
  }

  function register({username, password}){
    dispatch(requestRegister(username, password));
  }

  function registerLink(){
    dispatch(setView('register'));
  }

  function signinLink(){
    dispatch(setView('login'));
  }

  return (
    <div className={classes.loginRoot}>
      <Helmet>
        <title>Authentication</title>
        <meta name="description" content="You have to sign in or sign up" />
      </Helmet>
      { Login.view == 'login' &&
        <MainLogin login={login} registerLink={registerLink}/>
      }
      {
        Login.view == 'register' &&
        <MainRegister register={register} signinLink={signinLink}/>
      }
    </div>
  );
}

//<FormattedMessage {...messages.header}/>
export default memo(LoginPage);
