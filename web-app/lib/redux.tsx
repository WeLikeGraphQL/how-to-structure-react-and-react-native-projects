import React from "react";
import App from "next/app";

import {
  withRedux as withReduxProvider,
  getOrInitializeStore
} from "@graphan/core";

export function withRedux(PageComponent, { ssr = true } = {}) {
  const WithRedux = withReduxProvider(PageComponent);

  if (ssr || PageComponent.getInitialProps) {
    WithRedux.getInitialProps = async context => {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrInitializeStore();

      // Provide the store to getInitialProps of pages
      context.reduxStore = reduxStore;

      // Run getInitialProps from HOCed PageComponent
      const pageProps =
        typeof PageComponent.getInitialProps === "function"
          ? await PageComponent.getInitialProps(context)
          : {};

      // Pass props to PageComponent
      return {
        ...pageProps,
        initialReduxState: reduxStore.getState()
      };
    };
  }

  return WithRedux;
}
