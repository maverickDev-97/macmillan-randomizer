import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Randomiser } from "./pages/Randomiser";
import { SavedWords } from "./pages/SavedWords";
import { ThemeProvider } from "./contexts/themeContext";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Randomiser />,
      },
      {
        path: "/saved",
        element: <SavedWords />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
