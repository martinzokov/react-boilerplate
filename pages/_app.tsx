import App, { Container } from "next/app";
import React from "react";
import { Header, Footer } from "../components/Layout";

import Grid from "@material-ui/core/Grid";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Header />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={11} md={6}>
            <Component {...pageProps} />
          </Grid>
        </Grid>
        <Footer />
      </Container>
    );
  }
}
