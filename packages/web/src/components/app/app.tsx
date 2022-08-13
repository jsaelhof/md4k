import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { AppProvider } from "../../context/app-context";
import { AuthenticatedApolloProvider } from "../authenticated-apollo-provider/authenticated-apollo-provider";

export const App = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  {
    console.log(
      import.meta.env.VITE_AUTH0_DOMAIN,
      import.meta.env.VITE_AUTH0_CLIENT_ID,
      import.meta.env.VITE_AUTH0_AUDIENCE
    );
  }

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      loginWithRedirect();
    }
  });

  console.log(user);

  return isAuthenticated ? (
    <AuthenticatedApolloProvider>
      <AppProvider>
        <div>AUTHENTICATED</div>
      </AppProvider>
    </AuthenticatedApolloProvider>
  ) : null;
};
