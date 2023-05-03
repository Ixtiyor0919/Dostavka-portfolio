import { Link } from "react-scroll";
import styled from "styled-components";
import { Button, Tab, Tabs } from "@mui/material";
import { matchMD, matchSM } from "../../Themes/Breakpoints";

export const NavbarContainer = styled.nav `
    padding: 0 100px;
    margin: 0 auto;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 80;
    gap: 15px;
    backdrop-filter: blur(1px);
    border-top: 2px solid rgba(255, 255, 255, 0.1);
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    background: linear-gradient(180deg, #211f2000 0%, #44403F 100%);
    @media (max-width: ${matchMD}px) {
        padding: 0 50px;
        // top: 95.5px;
    }
    @media (max-width: ${matchSM}px) {
        padding: unset;
        // top: ${props => props.searchOpen ? "150px" : "88px"};
    }
`
export const TabsList = styled(Tabs)`
    & .MuiTabs-indicator {
        background-color: #618967;
    }
    & .css-ptiqhd-MuiSvgIcon-root {
        width: 2em;
        height: 1.5em;
        color: #FFFFFF;
    }
`
export const TabsItem = styled(Tab)`
    &.Mui-selected {
        color: #FFFFFF !important;
        box-shadow: 0px 5px 12px rgba(114, 164, 121, 0.3) !important;
    }
    padding: 28px 32px !important;
    // padding: unset !important;
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
        // padding: 20px 15px !important;
        font-size: 14px !important;
        line-height: 16px !important;    
    }
`
export const NavItem = styled(Button)`
    padding: 28px 32px !important;
    // padding: unset;
    margin-bottom: -1px !important;
    font-family: 'Gilroy' !important;
    font-weight: 500 !important;
    font-size: 18px !important;
    line-height: 21px !important;
    color: #CFCFCF !important;
    text-transform: unset !important;
    border-bottom: 3px solid transparent !important;
    border-radius: unset;
    @media (max-width: ${matchMD}px) {
        padding: 24px 25px !important;
        font-size: 16px !important;
        line-height: 18px !important;
    }
    @media (max-width: ${matchSM}px) {
        // padding: 20px 15px !important;
        font-size: 14px !important;
        line-height: 16px !important;    
    }
`
export const NavWrapper = styled.div`
    width: 100%;
    overflow-x: auto;
    &::-webkit-scrollbar {
        display: none;
    }
    display: flex;
    align-items: center;
`
export const StyledLink = styled(Link)`
    // display: inherit;
    &.active {
        color: #FFFFFF !important;
        box-shadow: 0px 5px 12px rgba(114, 164, 121, 0.3) !important;
        border-bottom: 3px solid #618967;
    }
`