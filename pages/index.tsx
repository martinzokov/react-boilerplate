import React from "react";
import { Typography, Grid } from "@material-ui/core";

export default class Index extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={11} md={6}>
            <Typography>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}
