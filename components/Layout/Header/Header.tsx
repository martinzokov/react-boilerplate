import Link from "next/link";
import React from "react";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import AssignmentIcon from "@material-ui/icons/Assignment";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "./MenuItems";
import { withStyles } from "@material-ui/styles";

import {
  Grid,
  AppBar,
  Toolbar,
  Button,
  Avatar,
  Typography,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Drawer,
  StyledComponentProps
} from "@material-ui/core";
import { connect } from "react-redux";
import { IApplicationState } from "store/types";
import { sendLogout } from "../../../store/login/actions";

const LoggedInMenuItems = [
  new MenuItem("home_btn", "Home", "/"),
  new MenuItem("about_btn", "About", "/about")
];

const LoggedOutMenuItems = [
  new MenuItem("home_btn", "Home", "/"),
  new MenuItem("about_btn", "About", "/about"),
  new MenuItem("login_btn", "Login", "/login")
];

const styles = () => ({
  list: {
    width: 240
  },
  appBar: {
    position: "relative" as "relative"
  }
});

interface IHeaderDispatchProps {
  logout: () => void;
}

interface IHeaderStateProps {
  isLoggedIn: boolean;
}

export interface IHeaderProps
  extends IHeaderStateProps,
    IHeaderDispatchProps,
    StyledComponentProps {}

class Header extends React.Component<IHeaderProps, any> {
  state = {
    drawerOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(current => ({ ...current, drawerOpen: !current.drawerOpen }));
  };

  handleLogout = () => {
    const { logout } = this.props;
    logout();
  };

  buildHeaderLinks = () => {
    const { isLoggedIn } = this.props;
    if (isLoggedIn) {
      const menu = LoggedInMenuItems.map(item => (
        <Button disableRipple>
          <Link href={item.path}>
            <div>{item.label}</div>
          </Link>
        </Button>
      ));
      menu.push(
        <Button disableRipple onClick={this.handleLogout}>
          <div>Logout</div>
        </Button>
      );
      return menu;
    } else {
      return LoggedOutMenuItems.map(item => (
        <Button disableRipple>
          <Link href={item.path}>
            <div>{item.label}</div>
          </Link>
        </Button>
      ));
    }
  };

  buildDrawerLinks = () => {
    const { isLoggedIn } = this.props;
    if (isLoggedIn) {
      return LoggedInMenuItems.map(item => (
        <div onClick={this.handleDrawerToggle}>
          <Link href={item.path}>
            <ListItem>
              <ListItemText primary={item.label} />
            </ListItem>
          </Link>
        </div>
      ));
    } else {
      return LoggedOutMenuItems.map(item => (
        <div onClick={this.handleDrawerToggle}>
          <Link href={item.path}>
            <ListItem>
              <ListItemText primary={item.label} />
            </ListItem>
          </Link>
        </div>
      ));
    }
  };

  getUserButton = () => {
    const { isLoggedIn } = this.props;
    if (isLoggedIn) {
      return (
        <Grid item>
          <Avatar>
            <PermIdentityIcon />
          </Avatar>
        </Grid>
      );
    }
  };

  render() {
    const { classes, isLoggedIn } = this.props;
    return (
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Grid container direction="row" justify="center">
            <Grid item xs={10} md={6} lg={3}>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <Avatar>
                    <AssignmentIcon />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Typography variant="h6">My Amazing Boilerplate</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={2} md={6} lg={3}>
              <Hidden smDown>
                <Grid container alignItems="center" justify="flex-end">
                  <Grid item>{this.buildHeaderLinks()}</Grid>
                  {this.getUserButton()}
                </Grid>
              </Hidden>
              <Hidden mdUp>
                <Grid item>
                  <IconButton onClick={this.handleDrawerToggle}>
                    <MenuIcon />
                  </IconButton>
                </Grid>
                <Drawer
                  anchor="right"
                  open={this.state.drawerOpen}
                  onClose={this.handleDrawerToggle}
                >
                  <div className={classes.list}>
                    <List>{this.buildDrawerLinks()}</List>
                  </div>
                </Drawer>
              </Hidden>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapDispatchToProps = (dispatch): IHeaderDispatchProps => ({
  logout: () => dispatch(sendLogout())
});

const mapStateToProps = (state: IApplicationState): IHeaderStateProps => {
  return {
    isLoggedIn: state.authentication.loggedIn
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Header));
