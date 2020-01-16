import React from "react";
import { Text } from "react-native";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";

let apolloClient = null;
/**
 * Creates and provides the apolloContext
 */

export function withApollo(PageComponent, initApolloClient) {
  const WithApollo = ({ apolloClient, apolloState, ...props }) => {
    const client = apolloClient || initApolloClient(apolloState);

    const Component = () => (
      <ApolloProvider client={client}>
        <PageComponent {...props} />
      </ApolloProvider>
    );

    return apolloClient ? Component : Component();
  }; // Set the correct displayName in development

  if (process.env.NODE_ENV !== "production") {
    const displayName =
      PageComponent.displayName || PageComponent.name || "Component";

    if (displayName === "App") {
      console.warn("This withApollo HOC only works with PageComponents.");
    }

    WithApollo.displayName = `withApollo(${displayName})`;
  }

  return WithApollo;
}
/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 */

export function createApolloClient(initialState = {}) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    ssrMode: typeof window === "undefined", // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: "https://eu1.prisma.sh/tomasz-adrianowski/videos/dev", // Server URL (must be absolute)
      credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
      fetch
    }),
    cache: new InMemoryCache({ addTypename: false }).restore(initialState)
  });
}
