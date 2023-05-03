import { Users } from "../Pages/Users/Users";
import { Foods } from "../Pages/Foods/Foods";
import { Login } from "../Pages/Login/Login";
import { Orders } from "../Pages/Orders/Orders";
import { Route, Routes } from "react-router-dom";
import { Branchs } from "../Pages/Branchs/Branchs";
import { Profile } from "../Pages/Profile/Profile";
import { Register } from "../Pages/Register/Register";
import { Error404 } from "../Pages/Error404/Error404";
import Error500 from "../Pages/Error500";
import AdminLayout from "../Layout/AdminLayout";

const PrivateRoutes = () => {
  return (
    <>
      <Routes>   
        <Route element={<AdminLayout />}>
          <Route index element={<Branchs />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/users" element={<Users />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error404 />} />
        <Route path="server-error" element={<Error500 />} />
      </Routes>
    </>
  )
}

export default PrivateRoutes;
