import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
    Box,
    Grid,
    Button,
} from '@material-ui/core';

import Modal from './../../../Modal/MainModal/index';
import BetPropertys from './../../BetPropertys/MainBetPropertys';
import Be from './../../BetPropertys/MainBetPropertys/MainBetPropertys/'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        // backgroundColor: 'black',
        "width": '100wh',
        "height": '101vh',
        "display": 'flex',
        '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }),
);

export default function Overview(props) {
    const classes = useStyles();

    const { friends, createBet, group } = props;

    const [ open, setOpen ] = React.useState(false);

    function close() {
      setOpen(false);
    }

    function onCreate(data) {
      createBet(data);
    }

    return (
      <Box display="flex">
        <Button
        onClick={() => {setOpen(true); }}
        >
          create
        </Button>
        <Modal open={open} close={close} component={() => <BetPropertys friends={friends} setOpenModal={setOpen} onCreate={onCreate} group={group}/>} componentProps={{}}/>
      </Box>
    );
  }
