import React from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.default,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    minHeight: 50
  }
});

class Footer extends React.Component<any, any> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.footer}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={10} md={6}>
            <Typography variant="overline">
              2019 Amazing Boilerplates®.
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
