import App, { Container, AppComponentProps } from "next/app";
import React from "react";
import { Header, Footer } from "../components/Layout";

import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import Grid from "@material-ui/core/Grid";
import { makeStore } from "../store";
import { Store } from "redux";

interface IReduxStore {
  store: Store;
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
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Header />
          <Grid container justify="center" alignItems="center">
            <Grid item xs={11} md={6}>
              <Component {...pageProps} />
            </Grid>
          </Grid>
        </Provider>
        <Footer />
      </Container>
    );
  }
}

export default withRedux(makeStore, { debug: true })(MyApp);
