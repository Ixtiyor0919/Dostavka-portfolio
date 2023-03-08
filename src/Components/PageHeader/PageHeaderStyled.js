import {
    Button
} from "@mui/material";
import styled from "styled-components";
import { matchMD, matchSM } from "../../Themes/Breakpoints";

export const HeaderStyled = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const StyledTitle = styled.h2 `
    font-family: 'Gilroy-Medium';
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFF;
    @media (max-width: ${matchMD}px) {
        font-size: 30px;
        line-height: 36px;
    }
    @media (max-width: ${matchSM}px) {
        font-size: 26px;
        line-height: 32px;
    }
`
export const StyledButton = styled(Button)
`
    font-family: 'Gilroy-Medium';
    padding: 10px 16px;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    border-radius: 10px;
    text-transform: unset;
    background-color: #67936E;
    :hover {
        color: #65906c !important;
        background-color: #65906c40 !important;
    }
`
export const StyledTab = styled(Button)
`
    width: 100px;
    font-family: 'Gilroy-Regular';
    // padding: 5px 0;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    border-radius: 10px;
    text-transform: unset;
    border: ${props => props.clicked ? "unset" : "1px solid grey"};
    background: ${props => props.clicked ? "#72A479" : "#2E2B2C"};
    :hover {
        color: #65906c !important;
        background-color: #65906c40 !important;
    }
`