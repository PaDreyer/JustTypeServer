import React, { Component } from 'react';
import { Card, 
    CardContent, 
    CardHeader, 
    Fade, 
    FadeProps,
    Paper,
    PaperProps,
    Typography,
    TypographyProps,
    Collapse,
    CollapseProps,
    Grid,
    GridProps,
    Box,
    BoxProps,
    Container,
    ContainerProps, 
    Grow,
    GrowProps,
    Button,
    ButtonProps,
    TextField,
    TextFieldProps,
    ButtonGroup,
    IconButton,
    Input,
    InputLabel,
    Checkbox, 
    FormControlLabel,
    InputAdornment } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {Help as HelpIcon, AccountCircle, Lock} from '@material-ui/icons';
import clsx from 'clsx';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '101vh',
      width: '100wh',
      backgroundColor: 'black'
    },
    rootChild: {
      height: '100%',
      width: '100%'
    },
    pageTitleContainer: {
      marginBottom: '2rem',
    },
    pageTitleBox: {
      height: '100%',
      width: '100%',
      color: 'white',
      backgroundColor: 'black'
    },
    card: {
        '@media (min-Width:500px)': {
            fontSize: '10px',
          },
        '@media (min-Width:680px)': {
            fontSize: '12px',
        },
        '@media (min-Width:770px)': {
            fontSize: '16px',
        },
        marginTop: '50px'
    },
    container: {
      display: 'flex',
    },
    paper: {
      margin: theme.spacing(1),
    },
    loginField: {
      '@media (min-Height:100px)' : {
        marginTop: '0vh'
      },
      '@media (min-Height:570px)' : {
        marginTop: '15vh'
      },
      margin: 'auto',
      backgroundColor: 'white',
      padding : '2rem',
    },
    inputContainer: {
      //padding: '2rem',
      backgroundColor: 'black'
    },
    inputFieldGrid: {
      backgroudColor: 'black',
      padding: theme.spacing(1)
    },
    inputFieldBox: {
      backgroundColor: 'white',
      color: 'black',
      padding: theme.spacing(1)
    },
    inputTextGrid: {
      marginBottom: theme.spacing(2)
    },
    loginButton: {
      marginTop: '2rem',
      paddingTop: '1rem',
      paddingBottom: '1rem',
      width: '100%',
      height: '100%',
      backgroundColor: 'black',
      color: 'white'
    },
    helpIcon: {
      overflow: 'hidden'
    },
    black: {
      backgroundColor: 'black'
    }
  }),
);


export default function mainLogin(props) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const userNode = React.useRef({value:""});
    const passNode = React.useRef({value:""});
    const rememberNode = React.useRef({value:""});

    const register = props.register;
  
    const handleChange = () => {
      setChecked(prev => !prev);
    };

    function handleRegister(e){
      if(!userNode || !passNode || !rememberNode) return;
      const userData = {
        username : userNode.current.value,
        password : passNode.current.value,
        remember : rememberNode.current.value
      };

      props.register(userData);
    }

    const signinLink = props.signinLink;
  

    return(
        <div className={classes.root}>
            <Box display="flex" className={classes.rootChild}>
                <Grow
                    in={true}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(true ? { timeout: 1000 } : {})}>
                        <Box display='flex' flexDirection='column' justifyContent='center' color="primary" p={1} className={classes.loginField} boxShadow={2} borderRadius={5}>
                            
                            {/* First Box from logincontainer */}
                            <Box justifyContent="center" className={classes.pageTitleContainer} boxShadow={2}>
                              <Card>
                                <CardContent className={classes.pageTitleBox}>
                                  <Box display="flex" justifyContent="center" className={classes.pageTitleBox}>
                                    <Typography variant="subtitle1">
                                      BETROOM
                                    </Typography>
                                  </Box>
                                </CardContent>
                              </Card>
                            </Box>


                            {/* Second Box from*/}
                            <Box boxShadow={2} borderRadius={5} p={4}>
                                    <Grid container justify="center" className={classes.inputFieldGrid}>

                                      <Grid item xs={12}>
                                        {/*<Box display="flex" flexDirection="row" justifyContent="center" className={classes.inputFieldBox}>*/}
                                          
                                          <Grid container justify="center">

                                            <Grid item xs={12} className={classes.inputTextGrid}>
                                              <Box display="flex" justifyContent="center">
                                                <TextField 
                                                  placeholder="username" 
                                                  inputRef={userNode} 
                                                  variant="outlined"
                                                  label="username"
                                                  InputProps={{
                                                    startAdornment: (
                                                      <InputAdornment position="start">
                                                        <AccountCircle />
                                                      </InputAdornment>
                                                    ),
                                                  }}
                                                />
                                              </Box>
                                            </Grid>
                                            
                                            {/*
                                            <Grid item xs={3}>
                                              <Box >
                                              <IconButton>
                                                <HelpIcon/>
                                              </IconButton>
                                              </Box>
                                            </Grid>
                                            */}

                                          </Grid>
                                        
                                        {/*</Box>*/}
                                      </Grid>

                                      <Grid item xs={12}>
                                        {/*<Box display="flex" flexDirection="row" justifyContent="center" className={classes.inputFieldBox}>*/}
                                          <Grid container justify="center">
                                            
                                            <Grid item xs={12}>
                                              <Box display="flex" justifyContent="center">
                                                <TextField 
                                                  type="password" 
                                                  placeholder="password" 
                                                  inputRef={passNode}
                                                  label="password"
                                                  variant="outlined"
                                                  InputProps={{
                                                    startAdornment: (
                                                      <InputAdornment position="start">
                                                        <Lock />
                                                      </InputAdornment>
                                                    ),
                                                  }}
                                                  />
                                              </Box>
                                            </Grid>

                                          {/*
                                            <Grid item xs={3}>
                                              <Box display="flex">
                                                <IconButton>
                                                  <HelpIcon/>
                                                </IconButton> 
                                              </Box>
                                            </Grid>
                                          */}
                                        
                                        
                                          </Grid>                                          
                                        {/*</Box>*/}
                                      </Grid>

                                      {/*
                                      <Grid item xs={12}>
                                        <Box display="flex" justifyContent="center">
                                          <Box justifyContent="left">
                                            <FormControlLabel
                                                control=
                                                {<Checkbox 
                                                  inputRef={rememberNode}
                                                  color="primary"
                                                  />}
                                                labelPlacement="end"
                                                label="remember me"
                                            />
                                          </Box>
                                        </Box>
                                      </Grid>
                                      */}


                                    </Grid>
                            </Box>
                            <Box display="flex" justifyContent="center" mt={3}>
                              <Button onClick={signinLink}>
                                Allready have a account ? sign in
                              </Button>
                            </Box>


                            <Box display="flex" justifyContent="center" flexGrow={1}>

                              <Button onClick={handleRegister} className={classes.loginButton}>
                                register
                              </Button>

                            </Box>

                        </Box>
                </Grow>
            </Box>
        </div>
    )
}
