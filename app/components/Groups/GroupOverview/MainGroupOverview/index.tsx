import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
    Box,
    Grid,
    Button,
    Typography
} from '@material-ui/core';

import CreateBet from './../../../Bets/CreateBet/MainCreateBet';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        //backgroundColor: 'black',
        width: '100wh',
        height: '101vh',
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  })
);
  
export default function GroupOverview(props) {
    const classes = useStyles();

    const { groups, id, friends, createBet, app } = props;

    const group = groups.filter( group => group._id == id)[0];

    return (
      <Box display="flex" flexDirection="column">
          { (app.requestCreateBet == null || app.requestCreateBet == false) &&
            <CreateBet friends={friends} createBet={createBet} group={group}/>
          }
          <Typography variant="h1">
              {group.name}
          </Typography>
          <Typography variant="h2">
              {group.description}
          </Typography>
      </Box>
    );
  }