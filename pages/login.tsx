import React from "react";
import {
  Typography,
  Grid,
  Paper,
  ButtonBase,
  CardMedia,
  TextField,
  Divider,
  Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import ImageButton from "../components/Layout/ImageButton/ImageButton";
import Link from "next/link";

const styles = theme => ({
  container: {
    padding: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2)
  },
  media: {
    height: 140,
    backgroundSize: 140
  },
  signupLabel: {
    textDecoration: "underline",
    cursor: "pointer",
    color: theme.palette.default
  }
});

const googleButtonImage = {
  url: "/static/images/google/logo.png",
  title: "google-normal"
};
const fbButtonImage = {
  url: "/static/images/facebook/logo_white.png",
  title: "google-normal"
};
const githubButtonImage = {
  url: "/static/images/github/logo.png",
  title: "google-normal"
};

class Login extends React.Component<any, any> {
  state = {
    name: ""
  };
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        <Paper elevation={3} className={classes.paper}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            spacing={2}
          >
            <Typography variant="h6">Sign in with:</Typography>

            <Grid item>
              <ImageButton
                logoUrl={googleButtonImage.url}
                backgroundColor="#fff"
                color="#000"
                buttonText="Google"
              />
              <ImageButton
                logoUrl={fbButtonImage.url}
                backgroundColor="#1877f2"
                color="#fff"
                buttonText="Facebook"
              />
              <ImageButton
                logoUrl={githubButtonImage.url}
                backgroundColor="#fff"
                color="#0b0a0a"
                buttonText="Github"
              />
            </Grid>

            <Divider variant="middle" />

            <Typography>Or sign in using email:</Typography>
            <TextField
              id="outlined-name"
              label="Email"
              className={classes.textField}
              value={this.state.name}
              onChange={() => {}}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
            />
            <Button
              variant="contained"
              href="#contained-buttons"
              className={classes.button}
            >
              Sign in
            </Button>
            <Link href="/signup">
              <Typography
                className={classes.signupLabel}
                variant="caption"
                gutterBottom
              >
                Don't have an account yet?
              </Typography>
            </Link>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(Login);
