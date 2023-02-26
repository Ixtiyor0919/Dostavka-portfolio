import {
    Button
} from "@mui/material";
import {
    matchMD,
    matchSM
} from "../../Themes/Breakpoints";
import styled from "styled-components";

export const ContactWrapper = styled.div `
    width: 100%;
    height: 75vh;
    display: flex;
    align-items: bottom;
    position: relative;
    @media (max-width: ${matchMD}px) {
        height: 80vh;
    }
    @media (max-width: ${matchSM}px) {
        height: 100vh;
    }
`
export const MapBox = styled.div `
    width: 100%;
    height: 100%;
`
export const ContactBox = styled.div `
    width: 40%;
    padding: 25px 35px;
    position: absolute;
    left: 100px;
    bottom: 40px;
    gap: 20px;
    display: flex;
    border-radius: 15px;
    flex-direction: column;
    background: #2E2B2C;
    box-shadow: 0px 0px 70px rgba(0, 0, 0, 0.15);
    @media (max-width: ${matchMD}px) {
        left: 50px;
        bottom: 50px;
        padding: 20px 35px;
    }
    @media (max-width: ${matchSM}px) {
        width: unset;
        left: 20px;
        top: 20px;
        right: 20px;
        bottom: unset;
        padding: 15px;
        gap: 10px;
    }
`
export const ContactBoxTitle = styled.h3 `
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    text-transform: uppercase;
    color: #FFFFFF;
    @media (max-width: ${matchMD}px) {
        font-size: 25px;
        line-height: 35px;
        text-align: center;
    }
`
export const ContactBoxLine = styled.hr `
    height: 2px;
    background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.15) 48.33%, rgba(255, 255, 255, 0) 100.87%);
    border: 0;
`
export const ContactBoxCard = styled.div `
    display: flex;
    align-items: top;
    gap: 10px;
`
export const ContactBoxCardInner = styled.div `
    // margin-left: 15px;
`
export const ContactBoxCardInnerSubtitle = styled.p `
    font-family: 'Gilroy';
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #CFCFCF;
`
export const ContactBoxCardInnerText = styled.p `
    font-family: 'Gilroy';
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #fff6f6;
`
export const ContactBoxBtn = styled(Button)
`
    padding: 22px 30px !important;
    font-family: 'Proxima Nova' !important;
    font-weight: 700 !important;
    font-size: 13px !important;
    line-height: 16px !important;
    cursor: pointer !important;
    border: none !important;
    outline: none !important;
    color: #FFFFFF !important;
    background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
    border-radius: 10px !important;
`
export const ContactBoxMediaBtn = styled(Button)
`
    padding: 22px 30px !important;
    font-family: 'Proxima Nova' !important;
    font-weight: 700 !important;
    font-size: 13px !important;
    line-height: 16px !important;
    cursor: pointer !important;
    outline: none !important;
    display: none !important;
    border: 1px solid rgba(255, 255, 255, 0.2)  !important;
    color: #FFFFFF !important;
    border-radius: 10px !important;
    @media (max-width: ${matchSM}px) {
        display: block !important;
    }
`
export const ContactNumberBox = styled.div `
    display: flex;
    align-items: center;
    gap: 10%;
    @media (max-width: ${matchMD}px) {
        gap: 5%;
    }
    @media (max-width: ${matchSM}px) {
        flex-direction: column;
        gap: 10px;
        margin: 0 auto;
    }
`
export const ContactNumberBoxInner = styled.div `
`
export const ContactNumber = styled.span `
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 23px;
    line-height: 28px;
    color: #FFFFFF;
    @media (max-width: ${matchMD}px) {
        font-size: 20px;
        line-height: 25px;
    }
`
export const ContactNumberText = styled.p `
    font-family: 'Gilroy';
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #CFCFCF;
`
export const Sogials = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
    @media (max-width: ${matchSM}px) {
        gap: 10px;
    }
`
export const SogialsTitle = styled.h5 `
    font-family: 'Gilroy';
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
`
export const SogialsInner = styled.div `
    display: flex;
    align-items: center;
    gap: 11px;
`