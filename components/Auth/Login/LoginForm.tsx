import React, { ChangeEvent } from "react";
import {
  Typography,
  Grid,
  Paper,
  TextField,
  Divider,
  Button,
  StyledComponentProps
} from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import ImageButton from "../../Layout/ImageButton/ImageButton";
import Link from "next/link";
import { Credentials } from "store/login/types";
import { sendLogin } from "../../../store/login/actions";
import { connect } from "react-redux";
import { IApplicationState } from "store/types";

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

interface ILoginFormDispatchProps {
  login: (credentials: Credentials) => void;
}

interface ILoginFormStateProps {}

interface ILoginFormState {
  email: string;
  password: string;
}

export interface ILoginFormProps
  extends ILoginFormStateProps,
    ILoginFormDispatchProps,
    StyledComponentProps {}

class LoginForm extends React.Component<ILoginFormProps, ILoginFormState> {
  state = {
    email: "",
    password: ""
  };

  onChange = (field: "email" | "password", value: string) => {
    // @ts-ignore
    this.setState({ [field]: value });
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    const { login } = this.props;
    const credentials: Credentials = {
      username: email,
      password: password
    };
    if (credentials && credentials.username && credentials.password) {
      login(credentials);
    }
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
              name="email"
              className={classes.textField}
              value={this.state.email}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                this.setState({ email: event.currentTarget.value })
              }
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              name="password"
              className={classes.textField}
              value={this.state.password}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                this.setState({ password: event.currentTarget.value })
              }
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
            />
            <Button
              variant="contained"
              href="#contained-buttons"
              className={classes.button}
              onClick={this.handleSubmit}
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

const mapDispatchToProps = (dispatch): ILoginFormDispatchProps => ({
  login: (credentials: Credentials) => dispatch(sendLogin(credentials))
});

const mapStateToProps = (
  state: IApplicationState
): ILoginFormStateProps => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(LoginForm));
