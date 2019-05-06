import React from "react";
import {
  Typography,
  Grid,
  Paper,
  ButtonBase,
  CardMedia,
  Button
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
  }
});

interface ImageButtonProps {
  logoUrl: string;
  buttonText?: string;
  backgroundColor: string;
  color: string;
}

class ImageButton extends React.Component<ImageButtonProps & any, any> {
  render() {
    const { classes, backgroundColor, color } = this.props;
    return (
      <Button
        variant="contained"
        style={{ backgroundColor }}
        className={classes.buttonContainer}
      >
        <img className={classes.image} src={this.props.logoUrl} />
        <div style={{ color }}>{this.props.buttonText}</div>
      </Button>
    );
  }
}

export default withStyles(styles)(ImageButton);
