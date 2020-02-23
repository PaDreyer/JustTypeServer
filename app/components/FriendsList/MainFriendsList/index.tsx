import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { IconButton, Fab, Grid, Card, Box, CardContent, CardActions, CardActionArea, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { AccountCircle, Delete as DeleteIcon, Add as AddIcon } from '@material-ui/icons';
import axios from 'axios'
import clsx from 'clsx';

import Modal from './../../Modal/MainModal';
import FriendsAdd from './../../FriendsAdd/MainFriendsAdd';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 200,
      minWidth: 200,
      height: '100%',
      width: '100%'
      //maxWidth : 752
    },
    containerGrid: {
      padding: theme.spacing(5)
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
    notificationItem: {
      textDecoration: 'none',
      color : 'black'
    },
    userCardBox: {
      padding: '1rem',
      minHeight: 200,
      minWidth: 200,
      position: 'relative',
    },
    cardDisable: {
      //background: 'grey'
    },
    usercardIcon: {
      backgroundColor: 'white',
      width: '100%',
      height: '100%'
    },
    usercardTypoName: {
      backgroundColor: 'white'
    },
    usercardTypoContent: {
      backgroundColor: 'white'
    },
    userDeleteButton: {
    },
    userAddButton: {
      backgroundColor: 'black',
      color: 'white',
      width: 100,
      height: 100
    },
    userAddIcon: {
    },
    black: {
      backgroundColor: 'black',
    },
    userCardButtonWrapper: {
      aligContent: 'center',
      justifyContent: 'center',
      paddingBottom: theme.spacing(2),
    }
  }),
);



// get user data always from api


export default function InteractiveList(props) {
    let { friends, toggleFriends } = props;


    const [ modalOpen, setModalOpen ] = React.useState(false);

    async function addFriend(friend){
      const result = await axios.post(`http://localhost:3001/user/friends/add`, { username : friend }, {
        withCredentials: true,
      })

      

      if(result.data.e == null){
        setModalOpen(false);
        toggleFriends();
      } else {
        //SHOW ERROR TOAST
      }
    }

    async function deleteFriend(friend){
      const result = await axios.post(`http://localhost:3001/user/friends/delete`, { id : friend}, {
        withCredentials: true,
        headers: {
          "Accept" : "application/json",
          "Content-Type" : "application/json"
        }
      });


      console.log("response: ", result);
      if(result.data.e == null){
        toggleFriends();
      } else {
        //SHOW ERROR TOAST
      }
    }


    
    const classes = useStyles();


    React.useEffect(()=>{
      toggleFriends();
    }, [])

    
  

    return (
        <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="flex-start" alignContent="flex-start">
            { friends.length == 0 &&
                <Typography variant="overline">
                    Sorry, you have no friends
                </Typography>
            }
            { friends.length != 0 &&
                    friends.map( friend => (
                      <Box className={classes.userCardBox} p={1}>
                        <Card className={clsx(classes.root, !friend.accepter && classes.cardDisable )}>
                            <CardContent>
                              <Box>
                                  <Box display="flex" justifyContent="center">
                                    <AccountCircle className={classes.usercardIcon}/>
                                  </Box>
                                <Box>
                                  <Typography gutterBottom variant="h5" component="h2" align="center" className={classes.usercardTypoName}>
                                      { friend.username }
                                  </Typography>
                                  <Typography variant="body2" color="textSecondary" component="p" className={classes.usercardTypoContent}>
                                      { /*friend._id*/ }
                                  </Typography>
                                  { !friend.accepted &&
                                    <Typography variant="overline" component="p" align="center">
                                      not accepted
                                    </Typography>
                                  }
                                </Box>
                              </Box>
                            </CardContent>
                        <CardActions className={classes.userCardButtonWrapper}>
                          <Button
                            onClick={()=>{deleteFriend(friend._id)}}
                            variant="contained"
                            color="default"
                            className={classes.userDeleteButton}
                            startIcon={<DeleteIcon />}
                          >
                            delete
                          </Button>
                        </CardActions>
                    </Card>
                    </Box>
                    ))
            }
                <Box display="flex" className={classes.userCardBox} justifyContent="center" alignItems="center">
                  <IconButton 
                    className={classes.userAddButton}
                    onClick={()=>{setModalOpen(true)}}
                    >
                      <AddIcon fontSize="large" className={classes.userAddIcon}/>
                    </IconButton>

                </Box>
                <Modal close={()=>{setModalOpen(false)}} open={modalOpen} component={()=>(<FriendsAdd addFriend={addFriend} />)} componentProps={{addFriend}}/>
        </Box>
    );
}




/*




sankt laurenzius weg
20
*/
