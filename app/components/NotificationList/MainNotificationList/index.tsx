import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
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
import { Box, ButtonGroup, Button, MenuItem } from '@material-ui/core';
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
      color : 'black',
    },
    listItemSecondaryAction: {
      display: 'flex',
    },
    buttonGroup: {
      maxWidth: 350,
      width: 350,
    },
    notificationContentWrapper: {
      width: '100%',
      height: '100%',
    },
    notificationTypoWrapper: {
      whiteSpace: 'initial',
    },
    MenuItem: {
      width: '100%',
    },
  }),
);

// get user data always from api


export default function InteractiveList(props) {
    const { notificationList, toggleNotificationList , toggleFriends, toggleGroups, redirect, handleNotificationClose } = props;
    // console.log("die props in comp: ", props);
    // console.log("die notificationlist im comp: ", notificationList)

    const classes = useStyles();
    const [dense, setDense] = React.useState(true);
    const [secondary, setSecondary] = React.useState(false);


    async function handleFriendsAdd(notification) {
      const { friendId } = notification;

      const result = await axios.post('http://localhost:3001/user/friends/accept', { id : friendId }, {
        withCredentials: true,
        headers: {
          'Accept' : 'application/json',
          'Content-Type' : 'application/json',
        },
      });

      // fehler abfangen !
      if (!result.data.e) {
        toggleNotificationList();
        toggleFriends();
      }
    }

    async function handleFriendsDeny(notification) {
      const { friendId } = notification;

      const result = await axios.post('http://localhost:3001/user/friends/deny', { id: friendId }, {
        withCredentials: true,
        headers: {
          'Accept' : 'application/json',
          'Content-Type' : 'application/json',
        },
      });

      // fehler abfangen !
      if (!result.data.e) {
        toggleNotificationList();
        toggleFriends();
      }
    }
    function handleFriendsOpen(notification){
      redirect("/friends");
    }

    function handleGroupsOpen(notification){
      handleNotificationClose();

      //delete notification
      console.log("notification!!: ", notification)
      redirect(`/bets/${notification.groupId}`)
    }

    async function handleDeleteNotification(notification) {
      console.log('NOTIFICATION: ', notification);
      const { categorie, type , shortId } = notification;

      const result = await axios.post('http://localhost:3001/user/notifications/read', { id: shortId } , {
        withCredentials: true,
        headers: {
          'Accept' : 'application/json',
          'Content-Type' : 'application/json',
        },
      });

      // fehler abfangen !
      if (!result.data.e) {
        toggleNotificationList();
      }
    }

    function getNotificationActions(notification) {
      let result;

      switch (notification.categorie) {
        case 'friends':
          if (notification.type === 'add') {
            const { friendName, friendId } = notification;
            result = (
              <MenuItem className={classes.MenuItem}>
                <Grid container justify="center">
                  <Grid item xs={6} onClick={()=>{handleFriendsOpen(notification)}}>
                    <Box display="flex" className={classes.notificationContentWrapper}>

                        <Typography paragraph className={classes.notificationTypoWrapper}>
                        {
                          `${friendName} added you`
                        }
                        </Typography>
                      </Box>
                  </Grid>
                  <Grid item xs={3}>
                    <Box display="flex" alignItems="center" justifyContent="center" className={classes.notificationContentWrapper}>
                      <IconButton onClick={() => {handleFriendsAdd(notification); }}><Check/></IconButton>
                    </Box>
                  </Grid>
                  <Grid item xs={3}>
                    <Box display="flex" alignItems="center" justifyContent="center" className={classes.notificationContentWrapper}>
                      <IconButton onClick={() => {handleFriendsDeny(notification); }}><Cancel/></IconButton>
                    </Box>
                  </Grid>
                </Grid>
              </MenuItem>
            );
          }
          break;
        case 'groups':
          if (notification.type === 'add') {
            const { friendName, friendId, groupId } = notification;
            result = (
              <MenuItem className={classes.MenuItem} onClick={()=>{handleGroupsOpen(notification)}}>
                <Grid container justify="center">
                  <Grid item xs={9}>
                    <Box display="flex" className={classes.notificationContentWrapper} flexGrow={1}>
                      <Typography paragraph className={classes.notificationTypoWrapper}>
                          {
                            (<p><strong>{friendName}</strong> added you to a group</p>)
                          }
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={3}>
                    <Box display="flex" alignItems="center" justifyContent="center" className={classes.notificationContentWrapper}>
                      <IconButton onClick={() => {handleDeleteNotification(notification); }}><Cancel/></IconButton>
                    </Box>
                  </Grid>
              </Grid>
            </MenuItem>
            );
          }

          break;
        default:
          break;
      }
      return result;
    }

    return (
      <div>
        {
          notificationList.length != 0 &&
          <Grid container className={classes.MainList}>
            {
              notificationList.map(notification => {
                return getNotificationActions(notification);
              })
            }
          </Grid>
        }
        { notificationList.length == 0 &&
          <Typography>
            there are no notifications
          </Typography>
        }
      </div>
    );

}
