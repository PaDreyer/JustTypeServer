import React from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 500,
      '& > * + *': {
        marginTop: theme.spacing(3),
      },
    },
  }),
);

export default function Tags(props) {
  const classes = useStyles();

  const { friends, onChange } = props;

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={friends}
        getOptionLabel={(option : { username }) => option.username}
        filterSelectedOptions
        onChange={onChange}
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            label="select friends"
            placeholder="select friends"
            fullWidth
          />
        )}
      />
    </div>
  );
}
