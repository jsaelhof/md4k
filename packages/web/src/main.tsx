import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  createHttpLink,
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Test } from "./components/test/test";

// FIXME: Move all this apollo httpLink/authLink/new ApolloClient etc into my own ApolloProvider

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_URL,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9QeHNFUngtbWk4dlRSRlNvdVBaeCJ9.eyJpc3MiOiJodHRwczovL21kNGstZGV2LnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJ4VGhmZ2luOUh6OFo2OW5LR1ZXeHd6dEF6dUhMVGZKN0BjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9tZDRrLmNvbS9kZXYiLCJpYXQiOjE2NjAxMDU2MjUsImV4cCI6MTY2MDE5MjAyNSwiYXpwIjoieFRoZmdpbjlIejhaNjluS0dWV3h3enRBenVITFRmSjciLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.bmAI2qjXDr9KojUdVGX5pkEiV6AkLw6wZ1be9nj2xt0r1KhXlRnNJLFSTxrEQSZLnRRWiKmeWTgVIu_7ek4mIT-FiIz_1bShZqMefmn7ZzBRx5qbeWd01mqgKAaAPtZZhKMmv1vwEPLFT3qW7JnSoA4qkJONCwSa5DQapqxz9JPZ6cchxOB-IPyw8i0_H-FfCE1tCnDCU3e8-QNg3A4jkjyVLEboOhG0DOx3R_ty9tZHuGczqyBqd4sJ_gUT5hQfmpsY35FaCxpSrhQW0foEMB8DYeZYPa9mH9y4pXtUT3jXV58eyOclcRv1co2oDosviKau8UXsja4pPxikElUNEw";
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

console.log(authLink.concat(httpLink));

const client = new ApolloClient({
  //uri: import.meta.env.VITE_GRAPHQL_URL,
  link: authLink.concat(httpLink),
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
