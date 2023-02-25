import styled from "styled-components";
import { Typography } from "@mui/material";
import { matchMD, matchSM } from "../../Themes/Breakpoints";

export const FooterContainer = styled.div `
    padding: 25px 100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    background: linear-gradient(270.7deg, #44403F 0.4%, #211F20 100%);
    @media (max-width: ${matchMD}px) {
        padding: 20px 50px;
    }
    @media (max-width: ${matchSM}px) {
        padding: 15px 20px;
    }
`
export const FooterDescription = styled.div `
    width: 20%;
    margin: 0 5%;
    @media (max-width: ${matchMD}px) {
        margin: 0 2%;
    }
    @media (max-width: ${matchSM}px) {
        width: unset;
        margin-left: 20px;
    }
`
export const FooterLogo = styled.img `
    display: block;
    margin-right: 30px;
`
export const FooterText = styled.p `
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #CFCFCF;
    text-decoration: none;
    display: block;
    @media (max-width: ${matchMD}px) {
        font-size: 11px;
        line-height: 13px;
    }
`
export const FooterLinks = styled.p `
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    @media (max-width: ${matchMD}px) {
        font-size: 13px;
        line-height: 15px;
    }
`
export const PagesBox = styled.div `
    gap: 30px;
    display: flex;
    align-items: center;
    @media (max-width: ${matchMD}px) {
        gap: 20px;
    }
    @media (max-width: ${matchSM}px) {
        display: none;
    }
`
export const Page = styled(Typography) `
    font-family: 'Gilroy' !important;
    font-weight: 500 !important;
    font-size: 20px !important;
    line-height: 24px !important;
    color: #FFFFFF;
    text-decoration: none !important;
    @media (max-width: ${matchMD}px) {
        font-size: 18px !important;
        line-height: 22px !important;
    }
    @media (max-width: ${matchSM}px) {
        font-size: 16px !important;
        line-height: 20px !important;
    }
`