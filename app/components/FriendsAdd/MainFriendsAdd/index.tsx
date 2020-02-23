import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Box, TextField, IconButton, Button, CircularProgress } from '@material-ui/core'
import { Check, Send, Cancel } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    button: {

    }
  }),
);

export default function FriendsAdd(props) {
    let { addFriend } = props;
    let [ user , setUser ] = React.useState()
    let [ buttonState, setButtonState ] = React.useState(true);
    let [ fetchIcon, setFetchIcon ] = React.useState(false);
    let textRef = React.useRef(null)
    

    async function handleTextinput(e){
      const value = e.currentTarget.value;
      setFetchIcon(true)
      let result = await axios.get(`http://localhost:3001/user/friends/add?username=${value}`, {
        withCredentials: true,
        headers: {
          "Accept" : "application/json",
          "Content-Type" : "application/json"
        }
      })
      setFetchIcon(false);
      if(result.data.data._id != undefined && result.data.data.username != undefined){
        setUser(result.data.data);
        setButtonState(false);
      } else {
        setButtonState(true);
      }
    };

    async function handleFriendAdd(e){
      setButtonState(true);     
      
      await addFriend(user.username)
    }
    
    const classes = useStyles();

  
    return (
      <Box display="flex" flexDirection="row">
        <Box>
          <TextField
            onChange={handleTextinput}
            inputRef={textRef}
            placeholder="username here..."
           />
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Send />}
            disabled={buttonState}
            onClick={handleFriendAdd}
          >
            send
          </Button>
        </Box>
      </Box>

    );
}




/*




sankt laurenzius weg
20
*/
