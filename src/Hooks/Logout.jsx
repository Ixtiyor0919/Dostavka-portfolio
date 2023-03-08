export const HandleLogOut = ({token}) => {
  if (sessionStorage.getItem("dostavka-cafe-token"))
    sessionStorage.removeItem("dostavka-cafe-token", token)
  if (localStorage.getItem("dostavka-cafe-token")) {
    localStorage.removeItem("dostavka-cafe-token", token)
  }
  localStorage.clear()
  window.location.href = "/register"
};