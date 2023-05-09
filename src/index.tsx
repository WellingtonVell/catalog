import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import App from "./App";
import Admin from "./pages/Admin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //errorElement: <ErrorPage/>,
    children: [
      {
        path: "admin",
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
    <RouterProvider router={router}/>
  </React.StrictMode>
);
