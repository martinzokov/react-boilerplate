import App, { Container, AppComponentProps } from "next/app";
import React from "react";
import { Header, Footer } from "../components/Layout";

import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import Grid from "@material-ui/core/Grid";
import { initStore } from "../store/login";
import { Store } from "redux";

interface IReduxStore {
  reduxStore: Store;
}

class MyApp extends App<IReduxStore & AppComponentProps> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <Provider store={reduxStore}>
          <Header />
          <Grid container justify="center" alignItems="center">
            <Grid item xs={11} md={6}>
              <Component {...pageProps} />
            </Grid>
          </Grid>
          <Footer />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(initStore)(MyApp);
