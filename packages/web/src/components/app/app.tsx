import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { AppProvider } from "../../context/app-context";
import { AuthenticatedApolloProvider } from "../authenticated-apollo-provider/authenticated-apollo-provider";

export const App = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, error } =
    useAuth0();

  console.log({
    isAuthenticated,
    error,
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
    audience: import.meta.env.VITE_AUTH0_AUDIENCE,
  });

  useEffect(() => {
    if (!error && !isAuthenticated && !isLoading) {
      console.log("Login");
      loginWithRedirect();
    }
  });

  return isAuthenticated ? (
    <AuthenticatedApolloProvider>
      <AppProvider>
        <div>AUTHENTICATED</div>
      </AppProvider>
    </AuthenticatedApolloProvider>
  ) : null;
};
