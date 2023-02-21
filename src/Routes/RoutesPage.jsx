import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home/Home"
import Single from "../Pages/ProductSingle/Single"
import { MainCart } from "../Pages/MainCartDelivery/MainCart"
import { Checkout } from "../Pages/Checkout/Checkout"
import DeliveryConditions from "../Pages/DeliveryAndContacts/DeliveryConditions"
import Action from "../Pages/Action/Action"
import StockModal from "../Pages/Stock/Stock"
import LayoutMenu from "../Layout/Layout"

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
          <Route path="/StockModal" element={<StockModal />} />
        </Route>
        {/* <Route path="login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
        <Route path="server-error" element={<Error500 />} /> */}
      </Routes>
    </>
  )
}

export default RoutesPage
