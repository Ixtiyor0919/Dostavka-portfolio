import {
    matchMD,
    matchSM
} from "../../../Themes/Breakpoints";
import styled from "styled-components";
import {
    Badge,
    Box,
    Button, IconButton
} from "@mui/material";
import {
    FiSearch,
    FiUser,
  } from 'react-icons/fi';
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const HeaderContainer = styled.div `
    width: 100%;
    padding: 24px 100px 24px 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #403C3B;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    box-shadow: 0px 30px 60px rgba(34, 31, 32, 0.2);
    transition: all 0.3s ease-in-out;
    @media (max-width: ${matchMD}px) {
        padding: 20px 50px;
    }
    @media (max-width: ${matchSM}px) {
        padding: 15px 20px;
        height: ${props => props.searchopen ? "150px" : "unset"};
        align-items: ${props => props.searchopen ? "flex-start" : "flex"};
    }
`
export const AddresInputBox = styled.div `
    width: 40%;
    padding: 7px 10px;
    display: flex;
    align-items: center;
    background: #504B4A;
    border-radius: 10px;
    color: #ffffff;
    @media (max-width: ${matchMD}px) {
        width: 35%;
    }
    @media (max-width: ${matchSM}px) {
        width: ${props => props.searchopen ? "100%" : "unset"};
        margin-left: ${props => props.searchopen ? "unset" : "auto"};
        padding: ${props => props.searchopen ? "7px 10px" : "0 10px"};
        background: ${props => props.searchopen ? "#504B4A" : "unset"};
    }
`
export const AddresInput = styled.input `
    width: 80%;
    font-family: 'Gilroy';
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
    @media (max-width: ${matchSM}px) {
        display: ${props => props.searchopen ? "flex" : "none"};
    }
`
export const ContactBox = styled.div `
    display: flex;
    align-items: center;
    @media (max-width: ${matchSM}px) {
        display: none;
    }
`
export const ContactBoxInner = styled.div `
    margin-left: 10px;
`
export const ContactTitle = styled.p `
    font-family: 'Gilroy';
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #a2a2a2;
`
export const ContactNumber = styled.p `
    font-family: 'Gilroy';
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
    background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
    border-radius: 10px !important;
    user-select: none !important;
    align-items: center !important;
    @media (max-width: ${matchSM}px) {
        width: 60px !important;
        height: 55px !important;
        padding: 8px !important;
        gap: 3px !important;
        font-size: 12px !important;
        line-height: 14px !important;
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
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    background: #FFFFFF;
    color: #68956F;
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
export const PhoneIcon = styled(PhoneInTalkOutlinedIcon) `
    user-select: none;
    font-size: 2.3rem;
    color: #fff;
    padding: 10px;
    border-radius: 50%;
    margin-left: auto;
    cursor: pointer;
    background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
`
export const HeaderIconButton = styled(IconButton)`
    margin-left: auto;
    color: inherit;
`
export const SearchIcon = styled(FiSearch) `
    width: 22px;
    height: 22px;
    cursor: pointer;
    color: #CFCFCF;
    @media (max-width: ${matchSM}px) {
        width: ${props => props.searchopen ? "22px" : "26px"};
        height: ${props => props.searchopen ? "22px" : "26px"};
        color: ${props => props.searchopen ? "inherit" : "#CFCFCF"};
    }
`
export const LocalButton = styled(IconButton) `
    color: ${props => props.colors ? "#68956F" : "#CFCFCF"};
`
export const LocalIcon = styled(FmdGoodOutlinedIcon) `
    width: 22px;
    height: 22px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    color: inherit;
    @media (max-width: ${matchSM}px) {
        display: ${props => props.searchopen ? "block" : "none"};
    }
`
export const HeaderMiddle = styled.div `
    width: 85%;
    display: flex;
    margin: 0 auto;
    align-items: center;
    // transition: all 0.3s;
    // transition: all 0.3s linear;
    transition: all 0.3s ease-in-out;
    justify-content: space-evenly;
    @media (max-width: ${matchSM}px) {
        width: ${props => props.searchopen ? "unset" : "85%"};
        margin-top: ${props => props.searchopen ? "70px" : "0"}; 
        left: ${props => props.searchopen ? "20px" : "unset"};
        right: ${props => props.searchopen ? "20px" : "unset"};
        position: ${props => props.searchopen ? "absolute" : "unset"};
        // transform: ${props => props.searchopen ? 'translateY(135%)' : 'translateY(5%)'};    
        // transform: ${props => props.searchopen ? 'scaleX(1.8)' : 'scaleX(0)'};    
    }
`
export const LoginButton = styled(Box)`
    padding: 0 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    text-decoration: none;
    @media (max-width: ${matchSM}px) {
        display: ${props => props.none ? "none" : "flex"};
    }
`
export const LoginButtonHr = styled.hr`
    width: 1.3px;
    margin-right: 10px;
    background-color: #635C5A;
    height: ${props => props.none ? "50px" : "25px"};
    border: 0;
`
export const LoginButtonIcon = styled(FiUser)`
    width: 24px;
    height: 24px;
    color: #ffffff;
`
export const LoginButtonText = styled.p`
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
`
export const BadgeContent = styled(Badge)`
    & .MuiBadge-badge {
        background-color: #ffffff;
        color: #68956F;
    }
    display: none;
    @media (max-width: ${matchSM}px) {
        display: flex;
    }
`