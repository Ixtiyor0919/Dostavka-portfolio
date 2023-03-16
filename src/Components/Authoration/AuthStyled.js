import styled from "styled-components";
import { Link } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import { matchSM } from "../../Themes/Breakpoints";
import PersonIcon from "@mui/icons-material/Person";
import { Button, OutlinedInput } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const AuthWrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`
export const BackgroundBigger = styled.div`
    width: 600px;
    height: 600px;
    border-radius: 50%;
    opacity: 0.8;
    position: fixed;
    bottom: -280px;
    left: -180px;
    background: linear-gradient(224.03deg, #72A479 1.56%, #4E9457 78.53%);
    @media (max-width: ${matchSM}px) {
        width: 300px;
        height: 300px;
        bottom: -140px;
        left: -90px;
    }
`
export const BackgroundFirst = styled.img`
    width: 68px;
    height: 68px;
    position: absolute;
    top: 10px;
    left: 0;
    @media (max-width: ${matchSM}px) {
        width: 50px;
        height: 50px;
    }
`
export const BackgroundSecond = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    @media (max-width: ${matchSM}px) {
        width: 20px;
        height: 20px;
    }
`
export const BackgroundThird = styled.img`
    position: absolute;
    right: 8px;
    bottom: 0;
    @media (max-width: ${matchSM}px) {
        width: 12px;
        height: 12px;
    }
`
export const BackgroundWrapper = styled.div`
    width: 135px;
    position: fixed;
    height: 100px;
    @media (max-width: ${matchSM}px) {
        width: 95px;
        height: 75px;
    }
`
export const AuthSubmitButton = styled(Button)`
    width: 100%;
    padding: 15px 0;
    font-size: 18px;
    line-height: 22px;
    border-radius: 10px;
    background-color: #72A479;
    :hover {
        background-color: #403C3B;
    }
`
export const AuthFormTitle = styled.h4`
    font-family: "Inter";
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    color: #FFFFFF;
`
export const AuthFormText = styled.p`
    color:  #B4B4B4;
    font-family: "Inter";
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
`
export const AuthFormLink = styled(Link)`
    color: #72A479;
    font-family: "Inter";
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
`  
export const AuthForm = styled.form`
    width: 30%;
    gap: 20px;
    display: grid;
    margin: 0 auto;
    padding-top: 130px;
    @media (max-width: ${matchSM}px) {
        width: 80%;
    }
`
export const EaseOff = styled(VisibilityOff)`
    color: grey;
`
export const EaseOn = styled(Visibility)`
    color: grey;
`
export const Person = styled(PersonIcon)`
    color: #72A479;
`
export const Phone = styled(PhoneIcon)`
    color: #72A479;
`
export const AuthFormInput = styled(OutlinedInput)`
    background-color: #ffffff;
    border-radius: 10px;
    :focus {
        border: none;
        outline: 10px solid red !important;
    }
`