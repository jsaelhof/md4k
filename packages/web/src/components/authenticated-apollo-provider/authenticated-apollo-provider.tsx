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
      cache: new InMemoryCache({
        // This whole typePolicies object is required to prevent an warning when deleting a movie.
        // The warning comes from updating the cache with one less movie.
        // returning false for the merge function just tells it to just always use the new data (incoming).
        // This also runs when requesting movies, not just deleting, but the warning only happens on delete.
        // The warning was:
        // Cache data may be lost when replacing the movies field of a Query object.
        // To address this problem (which is not a bug in Apollo Client), define a custom merge function for the Query.movies field, so InMemoryCache can safely merge these objects:
        typePolicies: {
          Query: {
            fields: {
              movies: {
                merge: false,
              },
              watchedMovies: {
                merge: false,
              },
            },
          },
          ThirdPartyMovie: {
            keyFields: ["imdbID"],
          },
          ThirdPartyTrailer: {
            keyFields: ["key"],
          },
          SearchResult: {
            keyFields: ["imdbID"],
          },
        },
      }),
    });
  }

  return <ApolloProvider client={client.current}>{children}</ApolloProvider>;
};
