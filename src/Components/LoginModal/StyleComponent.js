import {
    matchSM
} from "../../Themes/Breakpoints";
import styled from "styled-components";
import {
    Box, Button, OutlinedInput,
} from "@mui/material";
import {
    FiUser,
} from 'react-icons/fi';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const LoginButton = styled(Box)
`
    padding: 0 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    text-decoration: none;
    @media (max-width: ${matchSM}px) {
        display: ${props => props.header ? "none" : "flex"};
        display: ${props => props.drawer && "flex"};
    }
`
export const LoginButtonHr = styled.hr `
    width: 1.3px;
    margin-right: 10px;
    background-color: #635C5A;
    height: ${props => props.header ? "50px" : "25px"};
    border: 0;
`
export const LoginButtonIcon = styled(FiUser)
`
    width: 24px;
    height: 24px;
    color: #ffffff;
`
export const LoginButtonText = styled.p `
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    @media (max-width: ${matchSM}px) {
        font-size: 15px;
        line-height: 18px;
    }
`
export const AuthWrapper = styled.div`
    max-width: 30%;
    min-width: 380px;
    margin: 0 auto;
    top: 20%;
    position: relative;
    background: linear-gradient(90deg, #494544 0%, #504b4a 100%);
    box-shadow:
    0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%);
    border-radius: 10px;
    //   backdropFilter: "brightness(0.5);
  //   background: "rgb(83 83 83 / 80%);
`
export const AuthForm = styled.form`
    padding: 45px 30px 30px 30px;
`
export const AuthFormInput = styled(OutlinedInput)`
    background-color: #ffffff;
    border-radius: 10px;
    :focus {
        border: none;
        outline: 10px solid red !important;
    }
`
export const AuthSubmitButton = styled(Button)`
    width: 100%;
    padding: 15px 0;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
    border-radius: 10px;
    background-color: #72A479;
    :hover {
        background-color: #403C3B;
    }
`
export const EaseOff = styled(VisibilityOff)`
    color: grey;
`
export const EaseOn = styled(Visibility)`
    color: grey;
`