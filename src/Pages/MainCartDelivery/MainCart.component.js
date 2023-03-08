import styled from "styled-components";
import { Button } from "@mui/material";
import { matchMD, matchSM } from "../../Themes/Breakpoints";

export const MainCartContainer = styled.div`
    padding: 35px 200px 90px 200px;
    margin: 0 auto;
    @media (max-width: ${matchMD}px) {
        padding: 30px 50px 50px 50px;
    }
    @media (max-width: ${matchSM}px) {
        padding: 25px 20px 50px 20px;
    }
`
export const MainCartContainerTop = styled.div`
    margin-left: 20%;
    @media (max-width: ${matchMD}px) {
        margin-left: 10%;
    }
    @media (max-width: ${matchSM}px) {
        margin: unset;
    }
`
export const MainCartPagesLinkBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
export const MainCartPagesLink = styled.p`
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
`
export const MainCartContainerInnerTopText = styled.p`
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    text-transform: lowercase;
    color: #72A479;
`
export const CartCardWrapper = styled.div`
    border-radius: 10px;
    overflow: hidden;
`
export const CartAddWrapper = styled.div``
export const CartAddWrapperInner = styled.div`
    display: flex;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    background: linear-gradient(90deg, #494544 0%, #504B4A 100%);
    margin-bottom: 30px;
    @media (max-width: ${matchSM}px) {
        flex-direction: column;
    }
`
export const CartAddWrapperTitle = styled.h2`
    margin-bottom: 30px;
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    color: #FFFFFF;
`
export const CartAddWrapperInnerLine = styled.hr`
    height: 265px;
    padding: 1.5px;
    border: 0;
    background-image: linear-gradient(180deg,rgba(255,255,255,0.15) 0%,rgba(255,255,255,0) 100.87%);
    @media (max-width: ${matchSM}px) {
        width: 100%;
        height: 2px;
        background-image: linear-gradient(90deg,rgba(255,255,255,0.15) 0%,rgba(255,255,255,0) 100.87%);
    }
`
export const MainCartBottom = styled.div`
    max-width: 800px;
    padding: 20px 25px;
    margin: 50px auto 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(90deg, #494544 0%, #504B4A 100%);
    border-radius: 10px;
    gap: 10px;
    @media (max-width: ${matchMD}px) {
        max-width: 600px;
    }
    @media (max-width: ${matchSM}px) {
        flex-direction: column;
        margin: 30px auto 0 auto;
    }
`
export const MainCartBottomBtn = styled(Button)`
    padding: 17px 50px !important;
    font-family: 'Gilroy' !important;
    font-weight: 700 !important;
    font-size: 14px !important;
    line-height: 17px !important;
    border: none !important;
    outline: none !important;
    cursor: pointer !important;
    border-radius: 10px !important;
    color: #FFFFFF !important;
    background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
`
export const MainCartBottomLeft = styled.div`
`
export const MainCartBottomLeftInner = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
export const MainCartBottomLeftInnerTotalText = styled.p`
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #A6A7AB;
`
export const MainCartBottomLeftInnerTotalValue = styled.span`
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 25px;
    line-height: 25px;
    color: #FFFFFF;
`
export const MainCartBottomLeftInnerText = styled.p`
    margin-right: 5px;
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #FFFFFF;
    display: inline;
`
export const MainCartBottomLeftInnerValue = styled.p`
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #72A479;
    display: inline;
`