import Home from "../Pages/Home/Home";
import useToken from "../Hooks/UseToken";
import Action from "../Pages/Action/Action";
import { Users } from "../Pages/Users/Users";
import { Foods } from "../Pages/Foods/Foods";
import { Orders } from "../Pages/Orders/Orders";
import { Route, Routes } from "react-router-dom";
import Single from "../Pages/ProductSingle/Single";
import { Branchs } from "../Pages/Branchs/Branchs";
import { Checkout } from "../Pages/Checkout/Checkout";
import UsersLayout from "../Layout/UsersLayout/UsersLayout";
import { MainCart } from "../Pages/MainCartDelivery/MainCart";
import DeliveryConditions from "../Pages/DeliveryAndContacts/DeliveryConditions";
import { Register } from "../Pages/Register/Register";
import { Login } from "../Pages/Login/Login";

const PublicRoutes = () => {
  const { token } = useToken();
  return (
    <>
      <Routes>
        <Route element={<UsersLayout />}>
          <Route index element={<Home />} />
          <Route path="/Single" element={<Single />} />
          <Route path="/MainCart" element={<MainCart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/DeliveryConditions" element={<DeliveryConditions />} />
          <Route path="/Action" element={<Action />} />
          <Route path="/Branchs" element={<Branchs />} />
          <Route path="/Users" element={<Foods />} />
          <Route path="/Action" element={<Users />} />
          <Route path="/Orders" element={<Orders />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="*" element={<Error404 />} />
        <Route path="server-error" element={<Error500 />} /> */}
      </Routes>
    </>
  )
}

export default PublicRoutes; 
