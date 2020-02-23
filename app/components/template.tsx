import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
    Box,
    Grid,
    Button
} from '@material-ui/core';


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

    const { toggleGroups } = props;

  function handleGroups(){
    toggleGroups();
  }

    /*

    API:
      requestGroups()
      toggleGroups()
      addGroup()
      searchGroup()
      

      Struktur:
        Group
          GroupNavbar
          GroupList
    */

    return (
      <Box display="flex">
        Gruppe gründne
        <Button
        onClick={
          handleGroups
        }>
          PRESS
        </Button>
      </Box>
    );
  }