import App, { Container, AppComponentProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { makeStore } from "../store";
import { Store } from "redux";
import Layout from "../components/Layout/Layout/Layout";

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
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(makeStore, { debug: true })(MyApp);
