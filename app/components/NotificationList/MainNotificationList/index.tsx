import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import { AccountCircle, Check, Cancel } from '@material-ui/icons';
import { Box, ButtonGroup, Button } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    MainList: {
      maxWidth: 350,
      width: 350,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
    notificationItem: {
      // textDecoration: 'none',
      color : 'black'
    },
    listItemSecondaryAction: {
      display: 'flex'
    },
    ListItem: {
      minWidth: 150
    },
    notificationText: {
      minWidth: 200,
      color: 'black',
    },
    buttonGroup: {
      maxWidth: 350,
      width: 350
    },
    notificationContentWrapper: {
      minWitdh: '100%',
      width: '100%',
      height: '100%',
      // overflowWrap: 'break-word',
      // display:'inline-block'
      // display: 'block',
    },
    notificationTypoWrapper: {
      overflowWrap: 'break-word',
      display: 'inline-block',
      // display: 'flex',
      // flexWrap: 'wrap',
      // whiteSpace: 'wrap',
      // textOverflow: 'ellipsis',
      // wordBreak: 'break-all',
      maxWidth: 200,
      // overflow:'scroll',
      minHeight:50
    }
  }),
);

// get user data always from api


export default function InteractiveList(props) {
    const { notificationList, toggleNotificationList , toggleFriends, toggleGroups } = props;
    // console.log("die props in comp: ", props);
    // console.log("die notificationlist im comp: ", notificationList)
    
    const classes = useStyles();
    const [dense, setDense] = React.useState(true);
    const [secondary, setSecondary] = React.useState(false);
  

    async function handleFriendsAdd(notification){
      const { friendId } = notification;

      const result = await axios.post('http://localhost:3001/user/friends/accept', { id : friendId }, {
        withCredentials: true,
        headers: {
          "Accept" : "application/json",
          "Content-Type" : "application/json"
        }
      });

      // fehler abfangen !
      if(!result.data.e){
        toggleNotificationList();
        toggleFriends();
      }
    }

    async function handleFriendsDeny(notification){
      const { friendId } = notification;

      const result = await axios.post('http://localhost:3001/user/friends/deny', { id: friendId }, {
        withCredentials: true,
        headers: {
          "Accept" : "application/json",
          "Content-Type" : "application/json"
        }
      })

      // fehler abfangen !
      if(!result.data.e){
        toggleNotificationList();
        toggleFriends();
      }
    }

    async function handleDeleteNotification(notification){
      console.log("NOTIFICATION: ", notification);
    }

    function getNotificationActions(notification){
      let result;

      switch(notification.categorie){
        case 'friends':
          if(notification.type === 'add') {
            const { friendName, friendId } = notification;
            result = (
              <Grid container justify="center">
                <Grid item xs={6}>
                  <Box display="flex" alignItems="center" justifyContent="center" className={classes.notificationContentWrapper}>

                      <Typography align="center">
                      {
                        `${friendName} added you`
                      }
                      </Typography>
                      </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box display="flex" alignItems="center" justifyContent="center" className={classes.notificationContentWrapper}>
                    <IconButton onClick={()=>{handleFriendsAdd(notification)}}><Check/></IconButton>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box display="flex" alignItems="center" justifyContent="center" className={classes.notificationContentWrapper}>
                    <IconButton onClick={()=>{handleFriendsDeny(notification)}}><Cancel/></IconButton>
                  </Box>
                </Grid>
              </Grid>
            )
          }
          break;
        case 'groups':
          if(notification.type === 'add') {
            const { friendName, friendId, groupId } = notification;
            result = (
              <Grid container justify="center" zeroMinWidth>
                <Grid item xs={6} zeroMinWidth>

                      {
                        `${friendName} added youasdasdasd to a group`
                      }

                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}>
                  <Box display="flex" alignItems="center" justifyContent="center" className={classes.notificationContentWrapper}>
                    <IconButton onClick={()=>{handleDeleteNotification(notification)}}><Cancel/></IconButton>
                  </Box>
                </Grid>
            </Grid>
            )
          }

          break;
        default:
          break;
      }
      return result;
    }

    return (
      <div className={classes.demo}>
        {
          notificationList.length != 0 &&
          <Grid container className={classes.MainList}>
            {
              notificationList.map( notification => {

                return (
                  <Grid container className={classes.ListItem}>
                    {
                      getNotificationActions(notification)
                    }
                  </Grid>
                );
              })
            }
          </Grid>
        }
      </div>
    )

}
