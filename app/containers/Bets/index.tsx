/*
 *
 * Bets
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectBets from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const stateSelector = createStructuredSelector({
  bets: makeSelectBets(),
});

interface Props {}

function Bets(props: Props) {
  // Warning: Add your key to RootState in types/index.d.ts file
  useInjectReducer({ key: 'bets', reducer: reducer });
  useInjectSaga({ key: 'bets', saga: saga });

  console.log("PROPS IN BETS: ", props);

  const { bets } = useSelector(stateSelector);
  const dispatch = useDispatch();
  return (
    <div>
      <Helmet>
        <title>Bets</title>
        <meta name="description" content="Description of Bets" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default memo(Bets);
