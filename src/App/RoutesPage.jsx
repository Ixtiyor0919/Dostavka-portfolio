import { Route, Routes } from "react-router-dom"
import Home from "../Modules/Home/Home"
import Single from "../Modules/ProductSingle/Single"
import { MainCart } from "../Modules/MainCartDelivery/MainCart"
import { Checkout } from "../Modules/Checkout/Checkout"
import DeliveryConditions from "../Modules/DeliveryAndContacts/DeliveryConditions"
import Action from "../Modules/Action/Action"
import StockModal from "../Modules/Stock/Stock"

const RoutesPage = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
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
