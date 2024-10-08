import {
  type PropsWithChildren,
  type ReactElement,
  useEffect,
  useState,
} from "react";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  type NormalizedCacheObject,
  from,
} from "@apollo/client";
import { removeTypenameFromVariables } from "@apollo/client/link/remove-typename";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { useAuth0 } from "@auth0/auth0-react";
import { LocalStorageWrapper, persistCache } from "apollo3-cache-persist";

export const AuthenticatedApolloProvider = ({
  children,
}: PropsWithChildren): ReactElement | null => {
  const { getAccessTokenSilently, loginWithRedirect } = useAuth0();

  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();

  useEffect(() => {
    async function init(): Promise<void> {
      const errorLink = onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path, extensions }) => {
            switch (extensions?.code) {
              default:
                console.log(
                  `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                );
                break;
            }
          });
        if (networkError) console.log(`[Network error]: ${networkError}`);
      });

      const removeTypenameLink = removeTypenameFromVariables();

      const httpLink = new HttpLink({
        uri: import.meta.env.VITE_GRAPHQL_URL,
      });

      const authLink = setContext(async (_, { headers, ...rest }) => {
        try {
          const token = await getAccessTokenSilently();

          return {
            ...rest,
            headers: {
              ...headers,
              authorization: `Bearer ${token}`,
            },
          };
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          // Redirect to the main page of the app.
          // The url to redirect to is configured in main.tsx in the Auth0Provider props.
          // A different URL can be passed here using the options (ex returning the user to the page they were on).
          // For now, I'm just going to push the user back to main page of the app.
          console.error(
            "Error getting Auth0 access token silently. Redirect to login."
          );
          await loginWithRedirect();
        }
      });

      const cache = new InMemoryCache({
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
      });

      await persistCache({
        cache,
        storage: new LocalStorageWrapper(window.localStorage),
        debug: true,
      });

      setClient(
        new ApolloClient({
          link: from([errorLink, authLink, removeTypenameLink, httpLink]),
          cache,
        })
      );
    }

    init().catch(console.error);
  }, [getAccessTokenSilently, loginWithRedirect]);

  // Note: While client is undefined, I can return some default HTML like <H2>Loading...</H2>.
  return !client ? null : (
    <ApolloProvider client={client}>{children}</ApolloProvider>
  );
};
