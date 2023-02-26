import styled from "styled-components";
import { Button } from "@mui/material";
import { matchMD, matchSM } from "../../Themes/Breakpoints";

export const MainCartContainer = styled.div`
    max-width: 1100px;
    padding: 35px 0 100px 0;
    margin: 0 auto;
    @media (max-width: ${matchMD}px) {
        padding: 25px 50px 60px 50px;
    }
    @media (max-width: ${matchSM}px) {
        padding: 20px;
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
export const CartAddWrapper = styled.div`
    margin: 40px 0 50px 0;
`
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
export const CartAddWrapperLine = styled.hr`
    width: 96%;
    margin: 0 auto;
    border: 1px solid rgba(255, 255, 255, 0.1);
`
export const CartAddWrapperInnerLine = styled.hr`
    height: 234px;
    width: 2px; 
    border: 1px solid rgba(255, 255, 255, 0.1);
    background-color: #44403F;
`
export const MainCartBottom = styled.div`
    max-width: 700px;
    padding: 20px 25px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(90deg, #494544 0%, #504B4A 100%);
    border-radius: 10px;
    gap: 10px;
    @media (max-width: ${matchSM}px) {
        flex-direction: column;
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

export const ModalIsEmptyWrapper = styled.div`
    width: 100%;
    height: 70vh;
    background: linear-gradient(360deg, #211F20 0%, #44403F 100%);
    opacity: 0.5
    z-index: 10;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
`
export const ModalIsEmpty = styled.div`
    width: 40%;
    height: 70%;
    padding: 50px;
    gap: 15px;
    background: linear-gradient(90deg, #494544 0%, #504B4A 100%);
    border-radius: 15px;
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: ${matchMD}px) {
        width: 50%;
        height: 70%;
    }
    @media (max-width: ${matchSM}px) {
        width: 92%;
        height: 70%;
    }
`
export const ModalIsEmptyImg = styled.img`
    width: 180px;
    height: 160px;
`

export const StockModalTitle = styled.h2`
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    color: #FFFFFF;
`
export const StockModalBtn = styled(Button)`
    padding: 17px 34px !important;
    font-family: 'Gilroy' !important;
    font-weight: 700 !important;
    font-size: 14px !important;
    line-height: 17px !important;
    color: #FFFFFF !important;
    background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
    border-radius: 10px !important;
    border: none !important;
    outline: none !important;
`