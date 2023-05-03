import AppRouter from "./AppRouter";
import { useRoutes } from "react-router-dom";

export default function Routes() {
  // const { token } = useToken();
  // const navigate = useNavigate();
  // React.useEffect(() => {
  //   console.log("isLoggedIn : ", token)
  //   if (!token) {
  //     navigate("/register", {replace: true})
  //   } else {
  //     navigate("/", {replace: true})
  //   }
  // }, [token])

  return useRoutes([AppRouter])
};