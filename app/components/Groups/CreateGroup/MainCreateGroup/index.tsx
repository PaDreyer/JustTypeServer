import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
    Box,
    Grid,
    Button
} from '@material-ui/core';

import Modal from './../../../Modal/MainModal/index';
import GroupPropertys from './../../GroupPropertys/MainGroupPropertys';

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
  
export default function Overview(props) {
    const classes = useStyles();

    const { friends, createGroup } = props;

    const [ open, setOpen ] = React.useState(false);

    function close(){
      setOpen(false);
    }

    function onCreate(data){
      createGroup(data);
    }

    return (
      <Box display="flex">
        <Button
        onClick={()=>{setOpen(true)}}
        >
          create
        </Button>
        <Modal open={open} close={close} component={()=><GroupPropertys friends={friends} setOpenModal={setOpen} onCreate={onCreate}/>} componentProps={{}}/>
      </Box>
    );
  }