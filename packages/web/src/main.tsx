import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  createHttpLink,
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import Test from "./components/test/Test";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({ uri: "/api/graphql" }),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Test />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
