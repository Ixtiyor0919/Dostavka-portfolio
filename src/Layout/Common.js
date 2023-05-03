import MinimalLayout from "./MinimalLayout";
import { useLocation } from "react-router-dom";
import UsersLayout from "./UsersLayout/MainLayout";
import React from "react";


export default function CommonLayout({children}) {
    const location = useLocation();
    React.useEffect(() => {
        if(location.pathname === 'login') {
            <MinimalLayout />
        } else {
            <UsersLayout />
        }
    }, [location])
    return children //<> <UsersLayout />  <MinimalLayout /></>   
}