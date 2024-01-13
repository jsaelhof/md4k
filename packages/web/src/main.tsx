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
} from "react-router-dom";
import { sort, sortDirection } from "./constants/sorts";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { i18nextConfig } from "./i18next/i18next-config";

// Setup the i18next instance
i18nextConfig();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Navigate replace to={`/list/${sort.ADDED}/${sortDirection.DESC}`} />
        ),
      },
      {
        path: "/list",
        element: (
          <Navigate replace to={`/list/${sort.ADDED}/${sortDirection.DESC}`} />
        ),
      },
      {
        path: "/list/*",
        async lazy() {
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
        async lazy() {
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
        async lazy() {
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
        async lazy() {
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
        async lazy() {
          const { Add } = await import("./components/app/components/add/add");
          return {
            Component: Add,
          };
        },
      },
      {
        path: "/edit/:movieId",
        async lazy() {
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
      redirectUri={window.location.origin}
      audience={import.meta.env.VITE_AUTH0_AUDIENCE} // This is the audience of the API on Auth0, without this the token return will not be valid to access the API
    >
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </Auth0Provider>
  </ErrorBoundary>
);
