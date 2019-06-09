import React from "react";
import LoginForm from "../components/Auth/Login/LoginForm";
import Router from "next/router";
import { IApplicationState } from "store/types";
import { connect } from "react-redux";

interface ILoginPageStateProps {
  isLoggedIn: boolean;
}

class Login extends React.Component<ILoginPageStateProps, any> {
  componentDidMount() {
    this.redirectIfLoggedIn();
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn = () => {
    if (this.props.isLoggedIn) {
      Router.push("/");
    }
  };

  render() {
    return <LoginForm />;
  }
}

const mapStateToProps = (state: IApplicationState): ILoginPageStateProps => {
  return {
    isLoggedIn: state.authentication.loggedIn
  };
};

export default connect(mapStateToProps)(Login);
