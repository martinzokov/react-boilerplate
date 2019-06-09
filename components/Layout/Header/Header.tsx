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
  Drawer
} from "@material-ui/core";

const MenuItems = [
  new MenuItem("home_btn", "Home", "/"),
  new MenuItem("login_btn", "Login", "/login"),
  new MenuItem("about_btn", "About", "/about")
];

const styles = theme => ({
  list: {
    width: 240
  },
  appBar: {
    position: "relative"
  }
});

class Header extends React.Component<any, any> {
  state = {
    drawerOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(current => ({ ...current, drawerOpen: !current.drawerOpen }));
  };

  buildHeaderLinks = () => {
    return MenuItems.map(item => (
      <Button disableRipple>
        <Link href={item.path}>
          <div>{item.label}</div>
        </Link>
      </Button>
    ));
  };

  buildDrawerLinks = () => {
    return MenuItems.map(item => (
      <div onClick={this.handleDrawerToggle}>
        <Link href={item.path}>
          <ListItem>
            <ListItemText primary={item.label} />
          </ListItem>
        </Link>
      </div>
    ));
  };

  render() {
    const { classes } = this.props;
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
                  <Grid item>
                    <Avatar>
                      <PermIdentityIcon />
                    </Avatar>
                  </Grid>
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
export default withStyles(styles)(Header);
