import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Box, Modal } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 200,
      minWidth: 200,
      height: '100%',
      width: '100%',
      // maxWidth : 752
    },
    paper: {
        position: 'absolute',
        width: '50%',
        backgroundColor: theme.palette.background.paper,
        // boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
  }),
);

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }


// get user data always from api


export default function SimpleModal(props) {
    const { component : Component,  open, componentProps, close } = props;

    const classes = useStyles();

    const [modalStyle] = React.useState(getModalStyle);
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={close}
        >
          <Box style={modalStyle} className={classes.paper} borderRadius={4} m={3}>
            <Component {...componentProps} />
            {/* recursice call ! <SimpleModal /> */}
          </Box>
        </Modal>
      </div>
    );
}




/*




sankt laurenzius weg
20
*/
