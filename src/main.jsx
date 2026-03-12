import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { useState, useEffect } from 'react';
import App from './App';
import LoginPage from './pages/Login'

const router = createBrowserRouter([
  {
    path: "/",
    Component: App
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
