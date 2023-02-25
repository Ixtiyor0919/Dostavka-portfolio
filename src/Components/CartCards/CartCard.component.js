import styled from "styled-components";
import { matchMD, matchSM } from "../../Themes/Breakpoints";

export const CartCardWrapperInner = styled.div `
    padding: 20px 40px 20px 20px;
    display: flex; 
    background: linear-gradient(90deg, #494544 0%, #504B4A 100%);
    align-items: center;
    justify-content: space-between;   
    user-select: none;
    @media (max-width: ${matchSM}px) {
        padding: 20px;
        gap: 20px;
        justify-content: unset;
    }
`
export const CartCardWrapperInnerImg = styled.img `
    border-radius: 5px;
`
export const CartCardDescriptionBox = styled.div `
    width: 30%;
    // margin-right: 20%;
    @media (max-width: ${matchSM}px) {
        width: unset;
    }
`
export const CartCardDescriptionBoxTitle = styled.h3 `
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    @media (max-width: ${matchMD}px) {
        font-size: 17px;
        line-height: 21px;
    }
    @media (max-width: ${matchSM}px) {
        font-size: 16px;
        line-height: 19px;
    }
`
export const CartCardDescriptionBoxText = styled.div `
    font-family: 'Gilroy';
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #A6A7AB;
    @media (max-width: ${matchSM}px) {
        display: none;
    }
`
export const CartCardValueBox = styled.div `
    display: flex; 
    align-items: center;
`
export const CartCardValue = styled.div `
    font-family: 'Greenwich';
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    color: #FFFFFF;
    margin: 0 14px;
    @media (max-width: ${matchMD}px) {
        font-size: 15px;
        line-height: 20px;
    }
    @media (max-width: ${matchSM}px) {
        font-size: 12px;
        line-height: 15px;
    }
`
export const CartCarCostBox = styled.div `
    display: flex; 
    align-items: center;
    justify-content: space-between;
`
export const CartCardWrapperInnerLine = styled.hr `
    width: 100%;
    height: 2px;
    border: none;
    background-color: #44403F;
`

export const BoxData = styled.div`
    display: grid;
    @media (max-width: ${matchSM}px) {
        gap: 10px;
    }
`