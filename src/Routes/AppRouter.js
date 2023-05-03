import React, {
  lazy
} from "react";
import Loadable from "../Components/Loadable";
import UsersLayout from "../Layout/UsersLayout/MainLayout";

const Home = Loadable(lazy(() =>
  import( /*webpackChunkName:'HomePage'*/ "../Pages/Home")
))
const Single = Loadable(lazy(() =>
  import( /*webpackChunkName:'ProductSinglePage'*/ "../Pages/ProductSingle")
))
const CartProduct = Loadable(lazy(() =>
  import( /*webpackChunkName:'artProductPage'*/ "../Pages/CartProduct")
))
const Checkout = Loadable(lazy(() =>
  import( /*webpackChunkName:'CheckoutPage'*/ "../Pages/Checkout")
))
const Conditions = Loadable(lazy(() =>
  import( /*webpackChunkName:'ConditionsPage'*/ "../Pages/Conditions")
))
const Action = Loadable(lazy(() =>
  import( /*webpackChunkName:'ActionPage'*/ "../Pages/Action")
))
const Profile = Loadable(lazy(() =>
  import( /*webpackChunkName:'ProfilePage'*/ "../Pages/Profile")
))
const Login = Loadable(lazy(() =>
  import( /*webpackChunkName:'LoginPage'*/ "../Pages/Login")
))
const Error404 = Loadable(lazy(() =>
  import( /*webpackChunkName:'LoginPage'*/ "../Pages/NotFound")
))
const Error500 = Loadable(lazy(() =>
  import( /*webpackChunkName:'LoginPage'*/ "../Pages/Error500")
))

const AppRouter = {
  path: '/',
  element: <UsersLayout />,
  children: [{
      path: '/',
      element: <Home />
    },
    {
      path: 'single-product',
      element: <Single />
    },
    {
      path: 'cart-product',
      element: <CartProduct />
    },
    {
      path: 'checkout',
      element: <Checkout />
    },
    {
      path: 'conditions',
      element: <Conditions />
    },
    {
      path: 'action',
      element: <Action />
    },
    {
      path: 'profile',
      element: <Profile />
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'error404',
      element: <Error404 />
    },
     {
      path: 'error500',
      element: <Error500 />
    },
  ]
};

// const AppRouter = () => {
//   return (
//     <>
//       <Routes>   
//         <Route element={<UsersLayout />}>
//           <Route index path='/' component={Home} />
//           <Route path="/single-product" component={Single} />
//           <Route path="/cart-product" component={CartProduct} />
//           <Route path="/checkout" component={Checkout} />
//           <Route path="/conditions" component={Conditions} />
//           <Route path="/action" component={Action} />
//           <Route path="/profile" component={Profile} />
//         </Route>
//         <Route path="/login" component={Login} />
//         <Route path="*" component={Error404} />
//         <Route path="server-error" component={Error500} />
//       </Routes>
//     </>
//   )
// }
export default AppRouter;