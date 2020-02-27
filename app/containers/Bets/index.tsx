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

import GroupView from './../../components/Groups/GroupOverview/MainGroupOverview';
import BetsView from './../../components/Bets/BetsView/MainBetsView';
import { makeSelectApp } from 'containers/App/selectors';

const stateSelector = createStructuredSelector({
  bets: makeSelectBets(),
  app: makeSelectApp(),
});

interface Props {
  toggleBets: ()=>void;
  match: any;
  secureGroups: any[];
  secureBets: any[];
  secureFriends: any[];
  createBet: ()=>void;
  app: any;
}

function Bets(props: Props) {
  // Warning: Add your key to RootState in types/index.d.ts file
  useInjectReducer({ key: 'bets', reducer: reducer });
  useInjectSaga({ key: 'bets', saga: saga });
  
  const { secureGroups, secureBets, secureFriends, createBet, app, toggleBets, match } = props;
  const { id } = match.params;

  React.useEffect(()=>{
    toggleBets();
  }, [])

  console.log("PROPS IN BETS: ", props);
  

  const { bets } = useSelector(stateSelector);
  const dispatch = useDispatch();

  return (
    <div>
      <Helmet>
        <title>Bets</title>
        <meta name="description" content="Description of Bets" />
      </Helmet>
      { id != undefined &&
        <GroupView id={id} groups={secureGroups} friends={secureFriends} createBet={createBet} app={app}/>
      }
      { id == undefined &&
        <BetsView bets={secureBets}/>
      }
    </div>
  );
}
//<FormattedMessage {...messages.header} />

export default memo(Bets);
