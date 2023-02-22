import styled from "styled-components";
import { Tab, Tabs } from "@mui/material"

export const NavbarContainer = styled.nav `
    padding: 0 100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    background: linear-gradient(180deg, #211f2000 0%, #44403F 100%);
    position: sticky;
    top: 104px;
    left: 0;
    right: 0;
    z-index: 80;
    gap: 15px;
    justify-content: center;
    // filter: grayscale(1);
    backdrop-filter: blur(1px);
    @media (max-width: 768px) {
      padding: unset;
      }
`
export const NavbarContainerLineFirst = styled.hr `
    position: sticky;
    top: 104px;
    height: 0;
    left: 0;
    right: 0;
    border: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 99;
`
export const NavbarContainerLine = styled.hr `
    position: sticky;
    top: 182px;
    height: 0;
    left: 0;
    right: 0;
    z-index: 99;
    border: 1px solid rgba(255, 255, 255, 0.1);
`
export const TabsItem = styled(Tab)`
    padding: 28px 32px !important;
    margin-bottom: -1px !important;
    font-family: 'Gilroy' !important;
    font-weight: 500 !important;
    font-size: 18px !important;
    line-height: 21px !important;
    color: #CFCFCF !important;
    border-bottom: 3px solid transparent !important;
    text-transform: unset !important;
`