import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useAuth0 } from "@auth0/auth0-react";

export const AuthenticatedApolloProvider = ({ children }) => {
  const { getAccessTokenSilently, getIdTokenClaims } = useAuth0();

  const httpLink = new HttpLink({
    uri: import.meta.env.VITE_GRAPHQL_URL,
  });

  const authLink = setContext(async (_, { headers, ...rest }) => {
    let token;
    try {
      token = await getAccessTokenSilently();
    } catch (error) {
      console.log(error);
    }

    if (!token) return { headers, ...rest };

    console.log("AUth Link", token);

    return {
      ...rest,
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    };
  });

  const client = React.useRef<
    ApolloClient<NormalizedCacheObject> | undefined
  >();

  if (!client.current) {
    client.current = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });
  }

  return <ApolloProvider client={client.current}>{children}</ApolloProvider>;
};
