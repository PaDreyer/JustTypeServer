import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
    Box,
    Grid,
    Button,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListItemSecondaryAction,
    CardHeader,
    Card,
    CardContent,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    CardActions,
    Collapse
} from '@material-ui/core';
import { AccountCircle, SupervisedUserCircle, MoreVert as MoreVertIcon, ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        //backgroundColor: 'black',
        width: '100%',
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
    grid: {
        margin: theme.spacing(1)
    },
    gridItems: {
    },
    groupImg: {
        width: '50%',
        height: '50%'
    },
    groupIcon: {
        height: '90%',
        width:'90%'
    },
    gridCard: {
        width: '100%',
        height:'100%'
    }
  })
);

export default function MainGroupList(props) {
    const classes = useStyles();

    const { groups } = props;

    const [ anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [ expanded, setExpanded ] = React.useState<boolean>(false);
    const isMenuOpen = Boolean(anchorEl);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };

    const handleMenuClose = (even: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(null);
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem >mute</MenuItem>
        <MenuItem >leave</MenuItem>
        <MenuItem >leave and delete</MenuItem>
        <MenuItem >settings</MenuItem>
      </Menu>
    );

    return (
      <Box display="flex" className={classes.root}>
          <Grid container className={classes.grid} spacing={2}>
            {   
            
                groups.map( group => (
                    <Grid item xs={3} className={classes.gridItem}>
                        <Card className={classes.gridCard}>
                        <CardHeader
                            action={
                                <IconButton 
                                edge="end"
                                aria-haspopup="true"
                                aria-controls={menuId}
                                onClick={handleMenuOpen}
                                color="inherit"
                                aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={group.name}
                            subheader={"member: " + group.member.map(member=>(member.username + ","))}
                        />
                                                                        <Link to={`/bets/${group._id}`}>
                            <CardContent>
                                <Box display="flex" flexDirection="row">
                                    <Box className={classes.groupImg} justifyContent="center" alignItems="center">
                                        <SupervisedUserCircle className={classes.groupIcon}/>
                                    </Box>
                                    <Box display="flex" flexDirection="column">
                                <Box>

                                </Box>
                            </Box>
                                </Box>
                            </CardContent>
            </Link>

                            <CardActions>
                                <IconButton
                                aria-expanded={expanded}
                                aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>

                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                <Typography paragraph>Method:</Typography>
                                <Typography paragraph>
                                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                    minutes.
                                </Typography>
                                <Typography paragraph>
                                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                                    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                </Typography>
                                <Typography paragraph>
                                    Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                    without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                    medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                    again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                    minutes more. (Discard any mussels that don’t open.)
                                </Typography>
                                <Typography>
                                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                                </Typography>
                                </CardContent>
                        </Collapse>
                        </Card>
                    </Grid>
                ))
                
            }
          </Grid>
          {renderMenu}
      </Box>
    );
  }

  /*
export default function MainGroupList(props) {
    const classes = useStyles();

    const { groups } = props;
    console.log("groups: ", groups)

    return (
      <Box display="flex">
          <List className={classes.root}>
            {   
            
                groups.map( group => (
                    <ListItem>
                        <ListItemAvatar>
                            <SupervisedUserCircle />
                        </ListItemAvatar>
                        <ListItemText>
                            <Box display="flex" flexDirection="column">
                                <Box>
                                {
                                group.name
                            }
                                </Box>
                                <Box>
                                member:
                            {
                                group.member.map( member => {
                                    return member.username;
                                })
                            }
                                </Box>
                                <Box>
                                    total bet: { 
                                    group.bets.length
                                    }
                                </Box>
                            </Box>
                        </ListItemText>
                    </ListItem>
                ))
                
            }
          </List>
      </Box>
    );
  }
  */