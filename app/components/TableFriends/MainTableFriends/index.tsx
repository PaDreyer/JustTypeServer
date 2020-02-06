import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
    Box,
    Grid,
    Icon
} from '@material-ui/core';
import MaterialTable, { Column } from 'material-table';

import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref : any) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref : any) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref : any) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref : any) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref: any) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref : any) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref : any) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref : any) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref : any) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref : any) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref : any) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref : any) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref : any) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref : any) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref : any) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref : any) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref : any) => <ViewColumn {...props} ref={ref} />)
  };

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
  })
);

interface Row {
    username: string;
}
  
interface TableState {
    columns: Array<Column<Row>>;
    data: Row[];
}
  
export default function MaterialTableDemo(props) {
    const classes = useStyles();

    console.log("props: ", props);
    //const { getFriends, friends } = props;

    const [state, setState] = React.useState<TableState>({
      columns: [
        { title: 'username', field: 'name' },
      ],
      data: [
      ],
    });

    React.useEffect(()=>{
        //getFriends();
        setState(prevState => {
            //return {...prevState, data : friends}
            return { ...prevState };
        })
    }, [])
  
    return (
      <MaterialTable
        icons={tableIcons}
        title="Your friends"
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />
    );
  }