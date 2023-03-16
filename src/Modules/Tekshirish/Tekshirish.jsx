import React from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../Hooks/UseToken";

export const Tekshirish = ({children}) => {
    const navigate = useNavigate();
    const { token } = useToken();
    React.useEffect(() => {
        if(!token) {
            return navigate("/register", {replace: true});
        };
    }, []);
    return children;
};