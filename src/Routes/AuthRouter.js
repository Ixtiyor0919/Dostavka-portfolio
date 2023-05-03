import React, { lazy } from "react";
import Loadable from "../Components/Loadable";
import MinimalLayout from "../Layout/MinimalLayout";

const Register = Loadable(lazy(() =>
  import(/*webpackChunkName:'RegisterPage'*/ "../Pages/Register")
))
const Login = Loadable(lazy(() =>
  import(/*webpackChunkName:'LoginPage'*/ "../Pages/Login")
))
const NotFound = Loadable(lazy(() =>
  import(/*webpackChunkName:'NotFoundPage'*/ "../Pages/NotFound")
))
const AuthRouter = {
  path: '/register',
  element: <MinimalLayout />,
  children: [
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: '*',
        element: <NotFound />
      },
  ]
};

export default AuthRouter;