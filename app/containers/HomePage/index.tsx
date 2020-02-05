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
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectApp, makeSelectLogin } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { } from './actions';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '101vh',
      width: '100wh',
      backgroundColor: 'black'
    },
  }),
);



export default function HomePage() {
  useInjectReducer({ key: 'home', reducer: reducer });
  useInjectSaga({ key: 'home', saga: saga });

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <h1 >
        <FormattedMessage {...messages.header} />
      </h1>
    </div>
  );
}
