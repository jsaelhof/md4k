import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  createHttpLink,
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import { Test } from "./components/test/test";

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Test />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
