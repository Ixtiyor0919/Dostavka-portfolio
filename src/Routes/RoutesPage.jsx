import Home from "../Pages/Home/Home";
import LayoutMenu from "../Layout/Layout";
import Action from "../Pages/Action/Action";
import { Route, Routes } from "react-router-dom";
import Single from "../Pages/ProductSingle/Single";
import { Checkout } from "../Pages/Checkout/Checkout";
import { MainCart } from "../Pages/MainCartDelivery/MainCart";
import DeliveryConditions from "../Pages/DeliveryAndContacts/DeliveryConditions";

const RoutesPage = () => {
  return (
    <>
      <Routes>
        <Route element={<LayoutMenu />}>
          <Route index element={<Home />} />
          <Route path="/Single" element={<Single />} />
          <Route path="/MainCart" element={<MainCart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/DeliveryConditions" element={<DeliveryConditions />} />
          <Route path="/Action" element={<Action />} />
        </Route>
        {/* <Route path="login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
        <Route path="server-error" element={<Error500 />} /> */}
      </Routes>
    </>
  )
}

export default RoutesPage
