import { Tab } from "@mui/material";
import styled from "styled-components";
import { matchMD, matchSM } from "../../Themes/Breakpoints";

export const NavbarContainer = styled.nav `
    padding: 0 100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    position: sticky;
    top: 13.9%;
    left: 0;
    right: 0;
    z-index: 80;
    gap: 15px;
    justify-content: center;
    backdrop-filter: blur(1px);
    border-top: 2px solid rgba(255, 255, 255, 0.1);
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    background: linear-gradient(180deg, #211f2000 0%, #44403F 100%);
    @media (max-width: ${matchMD}px) {
        padding: 0 50px;
        top: 12.9%;
    }
    @media (max-width: ${matchSM}px) {
        padding: 0 20px;
        top: 11.4%;
    }
`
export const TabsItem = styled(Tab)`
    padding: 28px 32px !important;
    margin-bottom: -1px !important;
    font-family: 'Gilroy' !important;
    font-weight: 500 !important;
    font-size: 18px !important;
    line-height: 21px !important;
    color: #CFCFCF !important;
    text-transform: unset !important;
    border-bottom: 3px solid transparent !important;
    @media (max-width: ${matchMD}px) {
        padding: 24px 25px !important;
        font-size: 16px !important;
        line-height: 18px !important;
    }
    @media (max-width: ${matchSM}px) {
        padding: 20px 15px !important;
        font-size: 14px !important;
        line-height: 16px !important;    
    }
`