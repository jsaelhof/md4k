import { useAuth0 } from "@auth0/auth0-react";
import { ReactElement, useEffect } from "react";
import { ThemeProvider, StyledEngineProvider } from "@mui/material";
import { theme } from "../../theme/theme";
import { AppProvider } from "../../context/app-context";
import { AuthenticatedApolloProvider } from "../authenticated-apollo-provider/authenticated-apollo-provider";
import { Outlet } from "react-router-dom";
import { AppLayout, OutletLayout } from "./app.styles";
import TitleBar from "./components/titlebar/titlebar";
import Footer from "./components/footer/footer";
import Toast from "./components/toast/toast";

export const App = (): ReactElement | null => {
  const { isAuthenticated, isLoading, loginWithRedirect, error } = useAuth0();

  useEffect(() => {
    if (!error && !isAuthenticated && !isLoading) {
      loginWithRedirect();
    }
  });

  return isAuthenticated ? (
    <AuthenticatedApolloProvider>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <AppProvider>
            <AppLayout>
              <TitleBar />
              <OutletLayout>
                <Outlet />
              </OutletLayout>
              <Footer />
              <Toast />
            </AppLayout>
          </AppProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </AuthenticatedApolloProvider>
  ) : null;
};
