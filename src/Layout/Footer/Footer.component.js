import styled from "styled-components";
import { matchMD, matchSM } from "../../Themes/Breakpoints";

export const FooterContainer = styled.div `
    padding: 25px 100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    @media (max-width: ${matchMD}px) {
        width: unset;
        margin-left: 10%;
        margin-right: unset;
    }
`
export const FooterLogo = styled.img `
    display: block;
    margin-right: 30px;
`
export const FooterText = styled.a `
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #CFCFCF;
    text-decoration: none;
    display: block;
`
export const FooterLinks = styled.p `
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
`
export const PagesBox = styled.div `
    gap: 30px;
    display: flex;
    align-items: center;
    @media (max-width: ${matchSM}px) {
        display: none;
    }
`
export const Page = styled.p `
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
    @media (max-width: ${matchMD}px) {
        font-size: 18px;
    }
`