import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
    Box,
    Grid,
    Button,
    Select,
    MenuItem,
    Input
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

    const { } = props;

    const [ type, setType ] = React.useState('');

    const [ nearestType, setNearestType ] = React.useState('');

    const types = ["TrueFalse", "Nearest"];

    const nearestTypes = ["Date", "Number"];

    function handleTypeChange(event){
        setType(event.target.value);
    }

    function handleNearestTypeChange(event){
        setNearestType(event.target.value);
    }

    function decideTypeComponent(type){
        let items : any[] = [];
        switch(type){
            case 'TrueFalse':
                let item = (<Grid container>
                    <Grid item xs={3}>
                        <Box display="flex" flexDirection="row" alignItems="center" justifyItems="center">
                    
                      </Box>
                    </Grid>
                    <Grid item xs={9}>

                    </Grid>
                </Grid>);
                items.push(item);
                break;

            case 'Nearest':
                let item = (<Grid container>
                    <Grid item xs={3}>
                        <Box display="flex" flexDirection="row" alignItems="center" justifyItems="center">
                            Type of Nearest
                      </Box>
                    </Grid>
                    <Grid item xs={9}>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={nearestType}
                            onChange={handleNearestTypeChange}
                        >
                            <MenuItem value="">
                            <em>None</em>
                            </MenuItem>
                            {
                                nearestTypes.map( type => <MenuItem value={type}>{type}</MenuItem>)
                            }
                        </Select>
                    </Grid>
                </Grid>);
                items.push(item);
                break;

            default:
                break;
        };
        return items;
    }

    return (
      <Box display="flex">
          <Grid container>
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
            {
                decideTypeComponent(type).map( Item => Item)
            }
          </Grid>
      </Box>
    );
  }