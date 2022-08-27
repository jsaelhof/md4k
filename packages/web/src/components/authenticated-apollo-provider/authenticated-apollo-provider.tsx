import React, { PropsWithChildren } from "react";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { useAuth0 } from "@auth0/auth0-react";

export const AuthenticatedApolloProvider = ({
  children,
}: PropsWithChildren) => {
  const { getAccessTokenSilently } = useAuth0();

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path, extensions }) => {
        switch (extensions.code) {
          case "UNAUTHORIZED":
            console.log(
              `[GraphQL UNAUTHORIZED error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            );
            break;
          default:
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            );
            break;
        }
      });
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

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
      link: from([errorLink, authLink, httpLink]),
      cache: new InMemoryCache(),
    });
  }

  return <ApolloProvider client={client.current}>{children}</ApolloProvider>;
};
