import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { App } from "./components/app/app";
import { ErrorBoundary } from "./components/error-boundary/error-boundary";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { List } from "./components/app/components/list/list";
import { Watched } from "./components/app/components/watched/watched";
import { Create } from "./components/app/components/create/create";
import { Pick } from "./components/app/components/pick/pick";
import { sort, sortDirection } from "./constants/sorts";

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
        element: <List />,
      },
      {
        path: "/watched",
        element: <Watched />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/pick",
        element: <Pick />,
      },
    ],
  },
]);

ReactDOM.render(
  <ErrorBoundary>
    {/* https://auth0.com/docs/get-started/architecture-scenarios/spa-api */}
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN} // This is the domain of the SPA App on Auth0
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID} // This is the client id of the SPA App on Auth0
      redirectUri={window.location.origin}
      audience={import.meta.env.VITE_AUTH0_AUDIENCE} // This is the audience of the API on Auth0, without this the token return will not be valid to access the API
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </ErrorBoundary>,
  document.getElementById("root")
);
