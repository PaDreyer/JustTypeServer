import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
    Box,
    Grid,
    Button
} from '@material-ui/core';

import CreateGroup from './../../Groups/CreateGroup/MainCreateGroup';
import ListGroups from './../../Groups/GroupList/MainGroupList';
import { Create } from '@material-ui/icons';

import Loading from './../../Loading/MainLoading';

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
    content: {
      //backgroundColor: 'black'
    }
  })
);
  
export default function Overview(props) {
    const classes = useStyles();

    const { toggleGroups, friends, createGroup, app } = props;
    console.log("overview: app: ", app);

    return (
      <Box display="flex" flexDirection="column">
        <Box display="flex" flexDirection="row">
          { (app.requestCreateGroup == null || app.requestCreateGroup == false) &&
            <CreateGroup friends={friends} createGroup={createGroup}/>
          }

        </Box>
        { (app.requestCreateGroup == true || app.requestGroups == true) &&
          <Loading />
        }
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box className={classes.content}>
            <ListGroups groups={app.user.groups}/>
          </Box>
        </Box>
      </Box>
    );
  }