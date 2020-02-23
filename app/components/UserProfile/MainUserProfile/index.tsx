import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core'
import { Link } from 'react-router-dom';

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
    
  }),
);


// get user data always from api


export default function InteractiveList(props) {
    let { } = props;
    
    const classes = useStyles();


    React.useEffect(()=>{
    }, [])

    
  

    return (
        <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="flex-start" alignContent="flex-start">
        
        </Box>
    );
}




/*




sankt laurenzius weg
20
*/
