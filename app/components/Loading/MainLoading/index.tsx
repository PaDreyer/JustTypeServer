import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
    Box,
    Grid
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        backgroundColor: 'black',
        width: '100wh',
        height: '101vh',
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
    ProgressIndicator: {
        color: 'white'
    },
    loadingWrapper: {
        margin: 'auto'
    }
  }),
);

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Box display="flex" className={classes.loadingWrapper} justifyContent="center">
            <CircularProgress className={classes.ProgressIndicator} size={100}/>
        </Box>
    </div>
  );
}