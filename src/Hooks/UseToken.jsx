import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenStringSes = sessionStorage.getItem("dostavka-cafe-token")
    const tokenStringLoc = localStorage.getItem("dostavka-cafe-token")
    const userToken = JSON.parse(tokenStringSes || tokenStringLoc)
    return userToken
  }

  const [token, setToken] = useState(getToken())

  const saveToken = (userToken, save) => {
    // save
    //     ? localStorage.setItem(
    //           "dostavka-cafe-token",
    //           JSON.stringify(userToken)
    //       )
    //     : sessionStorage.setItem(
    //           "dostavka-cafe-token",
    //           JSON.stringify(userToken)
    //       );
    localStorage.setItem("dostavka-cafe-token", JSON.stringify(userToken))
    sessionStorage.setItem("dostavka-cafe-token", JSON.stringify(userToken))
    setToken(userToken)
  }

  return {
    setToken: saveToken,
    token,
  };
};
