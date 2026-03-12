import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from './App';
import LoginPage from './pages/Login'
import UserPage from './pages/User';
import AdminPage from './pages/Admin';

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: "/",
        Component: UserPage
      },
      {
        path: "/admin",
        Component: AdminPage
      }
    ]
  },
  {
    path: "/login",
    Component: LoginPage
  }
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
