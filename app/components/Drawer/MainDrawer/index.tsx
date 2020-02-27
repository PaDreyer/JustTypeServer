import React from 'react';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import { Box } from '@material-ui/core';


import NotificationList from './../../NotificationList/MainNotificationList';

import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      Menu: {
      },
      AppBar: {
        backgroundColor: 'black',
      },
      grow: {
      flexGrow: 1,
    },
      menuButton: {
      marginRight: theme.spacing(2),
    },
      title: {
        color: 'black',
        display: 'none',
        [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
      search: {
      "position": 'relative',
      "borderRadius": theme.shape.borderRadius,
      "backgroundColor": fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      "marginRight": theme.spacing(2),
      "marginLeft": 0,
      "width": '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
      searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
      inputRoot: {
      color: 'inherit',
    },
      inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
      sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
      sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
      homeLink: {
      textDecoration: 'none',
      color: 'white',
    },
      navigationLink: {
      textDecoration: 'none',
      color: 'white',
    },
  }),
);

export default function PrimarySearchAppBar(props) {
  const { notificationList, toggleNotificationList, userLogout, userProfile, toggleFriends, toggleGroups, redirect } = props;

  React.useEffect(() => {
    toggleNotificationList();
  }, []);


  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const [ anchorElNotification, setAnchorElNotification] = React.useState<null | HTMLElement>(null);
  const [ mobileAnchorElNotification, setMobileAnchorElNotification] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const isNotificationOpen = Boolean(anchorElNotification);
  const isMobileNotificationOpen = Boolean(mobileAnchorElNotification);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNotification(event.currentTarget);
  };

  const handleMobileNotificationClose = () => {
    setMobileAnchorElNotification(null);
  };

  const handleNotificationClose = () => {
    setAnchorElNotification(null);
    handleMobileNotificationClose();
  };

  const handleMobileNotificationOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileAnchorElNotification(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    userLogout();
    handleMenuClose();
  };

  const handleUserProfile = () => {
    userProfile();
    handleMenuClose();
  };


  const notificationId = 'primary-notification-menu';
  const renderNotifications = (
    <Menu
      anchorEl={anchorElNotification}
      anchorOrigin={{vertical: 'top', horizontal: 'right'}}
      id={notificationId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right'}}
      open={isNotificationOpen}
      onClose={handleNotificationClose}
      >
        {
          /*
        <MenuItem>
          */
        }

          {

            <NotificationList
            notificationList={notificationList}
            toggleNotificationList={toggleNotificationList}
            toggleFriends={toggleFriends}
            toggleGroups={toggleGroups}
            handleNotificationClose={handleNotificationClose}
            redirect={redirect}
            />

          }
          {
            /*
        </MenuItem>
            */
          }
      </Menu>
  );

  const mobileNotificationId = 'primary-notification-mobile-menu';
  const renderMobileNotifications = (
    <Menu
    anchorEl={mobileAnchorElNotification}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    id={mobileNotificationId}
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={isMobileNotificationOpen}
    onClose={handleMobileNotificationClose}
  >
    <MenuItem >TESTER</MenuItem>
  </Menu>
  );


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
      <MenuItem onClick={handleUserProfile}>profile</MenuItem>
      <MenuItem onClick={handleLogout}>logout</MenuItem>
    </Menu>
  );


  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleNotificationMenuOpen}>
        <IconButton
          aria-label="show 11 new notifications"
          aria-controls={notificationId}
          aria-haspopup="true"
          color="inherit">
          <Badge badgeContent={notificationList.length} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar>
          {/*
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          */}
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" className={classes.homeLink}>
              BetRoom
            </Link>
            BetRoom
          </Typography>
          <Box display="flex" flexDirection="row" justifyContent="space-between">
            <Box m={1}>
              <Link to="/friends" className={classes.navigationLink}>
                Friends
              </Link>
            </Box>
            <Box m={1}>
              <Link to="/bets" className={classes.navigationLink}>
                Bets
              </Link>
            </Box>
          </Box>
          {/*
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          */}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="show 4 new mails"
              aria-haspopup="true"
              aria-controls={notificationId}
              onClick={handleNotificationMenuOpen}
              color="inherit"
              >
              <Badge badgeContent={notificationList.length} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {renderMobileNotifications}
      {renderNotifications}
    </div>
  );
}
