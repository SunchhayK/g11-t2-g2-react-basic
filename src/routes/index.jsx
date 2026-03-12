import { createBrowserRouter } from "react-router";
import App from '../App';
import LoginPage from '../pages/Login'
import UserPage from '../pages/User';
import AdminPage from '../pages/Admin';

export const router = createBrowserRouter([
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