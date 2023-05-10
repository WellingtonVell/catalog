import { createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App";
import Admin from "./Admin";
import ReactDOM from "react-dom/client";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //errorElement: <ErrorPage/>,
    children: [
      {
        path: "/Admin",
        element: <Admin />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
