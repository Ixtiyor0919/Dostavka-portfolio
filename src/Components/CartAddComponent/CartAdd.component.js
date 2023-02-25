import styled from "styled-components";
import { matchMD, matchSM } from "../../Themes/Breakpoints";

export const CartAddCard = styled.div `
    padding: 20px 30px 12px 35px;
    text-align: center;
    @media (max-width: ${matchSM}px) {
        display: flex;
        align-items: center;
    }
`
export const CartAddCardImg = styled.img `
    border-radius: 10px;
`
export const CartAddCardTitle = styled.h3 `
    margin: 10px 0;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
    @media (max-width: ${matchMD}px) {
        font-size: 15px;
        line-height: 18px;
    }
    @media (max-width: ${matchSM}px) {
        font-size: 16px;
        line-height: 19px;
    }
`
export const CartAddCardInner = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`
export const CartAddCardText = styled.p `
    margin-right: 8px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #C6CED1;
`
export const CartAddCardCost = styled.p `
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
`
export const CartAddCardLine = styled.hr `
    border: 1px solid rgba(255, 255, 255, 0.1);
`