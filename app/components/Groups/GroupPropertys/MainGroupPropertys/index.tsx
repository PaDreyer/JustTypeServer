import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
    Box,
    Grid,
    Button,
    TextField,
    Typography,
} from '@material-ui/core';
import { Send } from '@material-ui/icons';

import MemberSearch from './../../MemberSearch/MainMemberSearch/';

// const MemberSearchList = React.forwardRef( (props, ref) => <MemberSearch ref={ref}/>)

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        // backgroundColor: 'black',
        'width': '100wh',
        'height': '101vh',
        'display': 'flex',
        '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
    gridContainer: {
        minWidth: 600,
    },
  }),
);

export default function GroupPropertys(props) {
    const { friends, onCreate, setOpenModal } = props;

    const classes = useStyles();

    const gNameRef = React.useRef<HTMLElement>();
    const gMembersRef = React.useRef<HTMLElement>();
    const gDescriptionRef = React.useRef<HTMLElement>();

    const [ name , setName ] = React.useState('');
    const [ member, setMember ] = React.useState([]);
    const [ description, setDescription ] = React.useState('');

    function handleCreate(e) {
      // check username, need validation here
      onCreate({
        name,
        member,
        description
      });
      setOpenModal(false);
    }

    function handleNameChange(event) {
        setName(gNameRef!.current!.value!);

    }

    function handleMemberChange(event, value) {
        setMember(value);
    }
    
    function handleDescriptionChange(event) {
      setDescription(gDescriptionRef!.current!.value);
    }

    return (
      <Box display="flex" mt={5}>
          <Grid container className={classes.gridContainer} spacing={5}>

              <Grid item xs={12}>
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <Typography variant="subtitle2">
                        create groups
                    </Typography>
                  </Box>
              </Grid>


              <Grid item xs={3}>
                  <Box display="flex" flexDirection="row" alignItems="center" justifyItems="center">
                          name
                      </Box>
              </Grid>

              <Grid item xs={9}>
              <Box>
                          <TextField
                          inputRef={gNameRef}
                          onChange={handleNameChange}
                          />
                      </Box>
              </Grid>


              <Grid item xs={3}>
                  <Box display="flex" flexDirection="row" alignItems="center" justifyItems="center">
                          description
                      </Box>
              </Grid>

              <Grid item xs={9}>
              <Box>
                          <TextField
                          inputRef={gDescriptionRef}
                          onChange={handleDescriptionChange}
                          />
                      </Box>
              </Grid>



              <Grid item xs={3}>
                  <Box display="flex" flexDirection="row" alignItems="center">
                          member
                      </Box>
              </Grid>

              <Grid item xs={9}>
                <Box display="flex" alignItems="center">
                    <MemberSearch friends={friends} onChange={handleMemberChange}/>
                </Box>
              </Grid>


            <Grid item xs={12}>
                <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                    <Button
                    endIcon={<Send/>}
                    onClick={handleCreate}
                    >
                        create
                    </Button>
                </Box>
            </Grid>




          </Grid>
      </Box>
    );
  }
