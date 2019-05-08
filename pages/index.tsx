import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { LOGIN_FAILED } from "../store/login/types";

class Index extends React.Component<any, any> {
  static getInitialProps({ store, isServer, pathname, query }) {
    store.dispatch({
      type: LOGIN_FAILED
    });
    return { store };
  }

  render() {
    return (
      <div>
        <Typography>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </Typography>
      </div>
    );
  }
}

export default connect(state => state)(Index);
