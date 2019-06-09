import React from "react";
import { Grid } from "@material-ui/core";
import { checkAuth } from "../../../store/login/actions";
import { connect } from "react-redux";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { IApplicationState } from "../../../store/types";

interface IDispatchProps {
  checkAuth: () => void;
}
interface IStateProps {
  isLoggedIn: boolean;
}
interface IProps extends IDispatchProps {}

export class Layout extends React.PureComponent<IProps, any> {
  componentDidMount() {
    this.props.checkAuth();
  }

  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <Header />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={11} md={6}>
            {children}
          </Grid>
        </Grid>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch): IDispatchProps => ({
  checkAuth: () => dispatch(checkAuth())
});

const mapStateToProps = (state: IApplicationState): IStateProps => {
  return {
    isLoggedIn: state.authentication.loggedIn
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
