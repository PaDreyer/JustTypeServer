import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
    Box,
    Grid,
    Button,
    TextField,
    Typography,
    Select,
    MenuItem
} from '@material-ui/core';
import { Send } from '@material-ui/icons';

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

export default function BetPropertys(props) {
    const { friends, onCreate, setOpenModal, group } = props;

    const classes = useStyles();

    const gNameRef = React.useRef<HTMLElement>();
    const gMembersRef = React.useRef<HTMLElement>();
    const gDescriptionRef = React.useRef<HTMLElement>();

    const [ name , setName ] = React.useState('');
    const [ type, setType ] = React.useState('');
    const [ description, setDescription ] = React.useState('');
    const [ inset, setInset ] = React.useState(0);

    const types = ["TrueFalse", "Nearest"];

    function handleCreate(e) {
      // check username, need validation here
      onCreate({
        name,
        type,
        description,
        group : group._id,
        inset
      });
      setOpenModal(false);
    }

    function handleNameChange(event) {
        setName(gNameRef!.current!.value!);

    }

    function handleTypeChange(event) {
        setType(event.target.value);
    }
    
    function handleDescriptionChange(event) {
      setDescription(gDescriptionRef!.current!.value);
    }

    function handleInsetChange(event) {
      setInset(event.target.value);
    }

    return (
      <Box display="flex" mt={5}>
          <Grid container className={classes.gridContainer} spacing={5}>

              <Grid item xs={12}>
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <Typography variant="subtitle2">
                        create a bet
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
                          type
                      </Box>
              </Grid>

              <Grid item xs={9}>
                <Box>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={type}
                    onChange={handleTypeChange}
                  >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    {
                        types.map( type => <MenuItem value={type}>{type}</MenuItem>)
                    }
                  </Select>
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
                          multiline
                          inputRef={gDescriptionRef}
                          onChange={handleDescriptionChange}
                          />
                      </Box>
              </Grid>

              <Grid item xs={3}>
                  <Box display="flex" flexDirection="row" alignItems="center" justifyItems="center">
                          inset
                      </Box>
              </Grid>

              <Grid item xs={9}>
              <Box>
                          <TextField
                          multiline
                          onChange={handleInsetChange}
                          />
                      </Box>
              </Grid>


              {
                /*
        name: { type: String, required : true },
        typ: { type: String, required : true },
        group : { type : String, required : true },
        description: { type: String, required : true },
        inset: { type: Number, required : true },
        creator: { type: String, required : true }, 
        createdAt : { type : Date, required : true },
        finishedAt : { type : Date, required : false },
                */
              }


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
