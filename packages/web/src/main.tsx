/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createRoot } from "react-dom/client";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { App } from "./components/app/app";
import { ErrorBoundary } from "./components/error-boundary/error-boundary";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import { sort, SortDirection } from "./constants/sorts";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { i18nextConfig } from "./i18next/i18next-config";
import { type ReactNode } from "react";

// Setup the i18next instance
i18nextConfig();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    ErrorBoundary: (): ReactNode => {
      // FIXME: Implement an error screen.
      const error = useRouteError() as Error;

      return (
        <div>
          <div>An error occurred</div>
          <div>{error.message}</div>
        </div>
      );
    },
    children: [
      {
        index: true,
        element: (
          <Navigate replace to={`/list/${sort.ADDED}/${SortDirection.DESC}`} />
        ),
      },
      {
        path: "/list",
        element: (
          <Navigate replace to={`/list/${sort.ADDED}/${SortDirection.DESC}`} />
        ),
      },
      {
        path: "/list/*",
        lazy: async () => {
          const { List } = await import(
            "./components/app/components/list/list"
          );
          return {
            Component: List,
          };
        },
      },
      {
        path: "/watched",
        lazy: async () => {
          const { Watched } = await import(
            "./components/app/components/watched/watched"
          );
          return {
            Component: Watched,
          };
        },
      },
      {
        path: "/create",
        lazy: async () => {
          const { Create } = await import(
            "./components/app/components/create/create"
          );
          return {
            Component: Create,
          };
        },
      },
      {
        path: "/pick",
        lazy: async () => {
          const { Pick } = await import(
            "./components/app/components/pick/pick"
          );
          return {
            Component: Pick,
          };
        },
      },
      {
        path: "/add",
        lazy: async () => {
          const { Add } = await import("./components/app/components/add/add");
          return {
            Component: Add,
          };
        },
      },
      {
        path: "/edit/:movieId",
        lazy: async () => {
          const { Edit } = await import(
            "./components/app/components/edit/edit"
          );
          return {
            Component: Edit,
          };
        },
      },
    ],
  },
]);

// @ts-expect-error getting root could return null
const root = createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary>
    {/* https://auth0.com/docs/get-started/architecture-scenarios/spa-api */}
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN} // This is the domain of the SPA App on Auth0
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID} // This is the client id of the SPA App on Auth0
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: import.meta.env.VITE_AUTH0_AUDIENCE, // This is the audience of the API on Auth0, without this the token return will not be valid to access the API
      }}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </Auth0Provider>
  </ErrorBoundary>
);
