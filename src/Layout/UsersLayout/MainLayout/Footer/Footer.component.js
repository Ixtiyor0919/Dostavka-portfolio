import styled from "styled-components";
import { Typography } from "@mui/material";
import { matchMD, matchSM } from "../../../../Themes/Breakpoints";

export const FooterContainer = styled.div `
    padding: ${props => props.private ? " 25px 80px" : " 25px 100px"};
    margin: 0 auto;
    display: flex;
    align-items: center;
    z-index: 14;
    position: ${props => props.private ? "sticky" : "unset"};
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(270.7deg, #44403F 0.4%, #211F20 100%);
    @media (max-width: ${matchMD}px) {
        padding: 20px 50px;
    }
    @media (max-width: ${matchSM}px) {
        padding: 15px 20px;
    }
`
export const FooterDescription = styled.div `
    margin: 0 4%;
    width: ${props => props.admin ? "100%" : "20%"};
    @media (max-width: ${matchMD}px) {
        margin: 0 2%;
    }
    @media (max-width: ${matchSM}px) {
        width: ${props => props.admin ? "100%" : "unset"};
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
    display: ${props => props.admin ? "none" : "flex"};
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