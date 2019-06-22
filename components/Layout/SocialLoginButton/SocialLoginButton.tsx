import React from "react";
import {
  Typography,
  Grid,
  Paper,
  ButtonBase,
  CardMedia,
  Button,
  StyledComponentProps
} from "@material-ui/core";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  image: {
    width: 28,
    height: 28,
    verticalAlign: "baseline",
    marginRight: theme.spacing.unit
  },
  text: {
    display: "inline",
    verticalAlign: "baseline"
  },
  buttonContainer: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  link: {
    textDecoration: "none"
  }
});

interface SocialLoginButtonProps {
  href: string;
  logoUrl: string;
  buttonText?: string;
  backgroundColor: string;
  color: string;
  onClickAction?: () => void;
}

interface IProps extends SocialLoginButtonProps, StyledComponentProps {}

class SocialLoginButton extends React.Component<IProps, any> {
  render() {
    const { classes, backgroundColor, color, onClickAction, href } = this.props;
    return (
      <a className={classes.link} href={href}>
        <Button
          variant="contained"
          style={{ backgroundColor }}
          className={classes.buttonContainer}
          onClick={onClickAction}
        >
          <img className={classes.image} src={this.props.logoUrl} />
          <div style={{ color }}>{this.props.buttonText}</div>
        </Button>
      </a>
    );
  }
}

export default withStyles(styles)(SocialLoginButton);
