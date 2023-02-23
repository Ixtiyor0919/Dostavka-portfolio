import {
    matchMD,
    matchSM
} from "../../Themes/Breakpoints";
import styled from "styled-components";
import {
    Button
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const HeaderContainer = styled.div `
    width: 100%;
    padding: 24px 100px 24px 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #403C3B;
    box-shadow: 0px 30px 60px rgba(34, 31, 32, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    @media (max-width: ${matchMD}px) {
        padding: 20px 50px;
    }
    @media (max-width: ${matchSM}px) {
        padding: 15px 20px;
    }
`
export const MenuBtnBurger = styled.div `
    width: 4em;
    height: 0.5em;
    background-color: #fff;
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
    &::before,
    &::after {
      transition: font-size 0s;
      content: "";
      display: block;
      position: absolute;
      width: 4em;
      height: 0.5em;
      background: var(--color1);
      border-radius: var(--borderRadius);
    }
    &::before {
        margin-top: -1.5em;
    }
    &::after {
        margin-top: 1.5em;
    }
`
export const MenuBtn = styled.div `
    width: 20px;
    height: 80px;
    display: block;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    // transition: all 0.7s, font-size 0s;
    // transition-timing-function: cubic-bezier(0.68, -0.35, 0.265, 1.35);
    .open  ${MenuBtnBurger} {
        transition: all 0.1s 0.3s, font-size 0s;
        &::before,
        &::after {
          transition: all 0.3s 0.2s, font-size 0s;
        }
    }
`
export const AddresInputBox = styled.div `
    width: 40%;
    padding: 7px 10px;
    display: flex;
    align-items: center;
    background: #504B4A;
    border-radius: 10px;
`
export const AddresInput = styled.input `
    width: 80%;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    background: transparent;
    border: none;
    outline: none;
    ::placeholder {
        color: #CFCFCF;
    }
    @media (max-width: ${matchMD}px) {
        font-size: 14px;
        line-height: 16px;
    }
`
export const ContactBox = styled.div `
    display: flex;
    align-items: center;
    margin-right: 15%;
    @media (max-width: ${matchSM}px) {
        display: none;
    }
`
export const ContactBoxInner = styled.div `
    margin-left: 10px;
`
export const ContactTitle = styled.p `
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #a2a2a2;
`
export const ContactNumber = styled.p `
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
    color: #CFCFCF;
`
export const HeaderBtn = styled(Button)
`
    font-family: 'Gilroy' !important;
    font-weight: 600 !important;
    font-size: 14px !important;
    line-height: 17px !important;
    text-decoration: none !important;
    color: #FFFFFF !important;
    padding: 16px 13px 16px 24px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: space-around !important;
    background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
    border-radius: 10px !important;
    user-select: none !important;
    @media (max-width: ${matchSM}px) {
        font-family: 'Gilroy' !important;
        font-weight: 600 !important;
        font-size: 12px !important;
        line-height: 14px !important;
        padding: 8px !important;
        height: 55px !important;
        gap: 3px !important;
        text-transform: unset !important;
        flex-direction: column-reverse !important;
    }
`
export const HeaderBtnLine = styled.hr `
    width: 38px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    transform: rotate(90deg);
    @media (max-width: ${matchSM}px) {
        transform: unset;
    }
`
export const HeaderBtnCount = styled.span `
    width: 24px;
    height: 24px;   
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    background: #FFFFFF;
    @media (max-width: ${matchSM}px) {
        display: none !important;
    }
`
export const HeaderCartIcon = styled(ShoppingCartOutlinedIcon) `
    color: #ffffff;
    display: none !important;
    @media (max-width: ${matchSM}px) {
        display: block !important;
    }
`