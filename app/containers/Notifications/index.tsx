/*
 *
 * Notifications
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectNotifications from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const stateSelector = createStructuredSelector({
  notifications: makeSelectNotifications(),
});

interface Props {}

function Notifications(props: Props) {
  // Warning: Add your key to RootState in types/index.d.ts file
  useInjectReducer({ key: 'notifications', reducer: reducer });
  useInjectSaga({ key: 'notifications', saga: saga });

  const { notifications } = useSelector(stateSelector);
  const dispatch = useDispatch();
  return (
    <div>
      <Helmet>
        <title>Notifications</title>
        <meta name="description" content="Description of Notifications" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default Notifications;
