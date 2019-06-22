import React, { Component } from "react";
import Router from "next/router";
import { connect } from "react-redux";
import { OAuthLoginResponse } from "../store/login/types";
import { IApplicationState } from "../store/types";
import { oAuthLogin } from "../store/login/actions";

interface IOAuthTokenProps {
  token?: string;
  error?: string;
}

interface IOauthDispatchProps {
  login: (loginResponse: OAuthLoginResponse) => void;
}

interface IOauthStateProps {
  isLoggedIn: boolean;
}

export interface IOAuthProps
  extends IOauthDispatchProps,
    IOauthStateProps,
    IOAuthTokenProps {}

class OAuth2RedirectHandler extends React.Component<IOAuthProps, any> {
  static getInitialProps({ query }) {
    const token = query.token;
    const error = query.error;
    return { token, error };
  }

  async componentDidMount() {
    const loginResponse: OAuthLoginResponse = {
      token: Router.query.token as string,
      error: Router.query.error as string
    };
    await this.props.login(loginResponse);

    if (this.props.isLoggedIn) {
      Router.push("/");
    } else {
      Router.push("/login");
    }
  }

  render() {
    return <React.Fragment />;
  }
}

const mapDispatchToProps = (dispatch): IOauthDispatchProps => ({
  login: (loginResponse: OAuthLoginResponse) =>
    dispatch(oAuthLogin(loginResponse))
});

const mapStateToProps = (state: IApplicationState): IOauthStateProps => {
  return {
    isLoggedIn: state.authentication.loggedIn
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OAuth2RedirectHandler);
