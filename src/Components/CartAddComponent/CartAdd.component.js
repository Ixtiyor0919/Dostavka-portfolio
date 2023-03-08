import styled from "styled-components";
import { matchMD, matchSM } from "../../Themes/Breakpoints";

export const CartAddCard = styled.div `
    padding: 20px 30px;
    text-align: center;
    display: grid;
    gap: 10px;
    @media (max-width: ${matchSM}px) {
        width: 100%;
        display: flex;
        gap: 20px;
        padding: 20px;
    }
`
export const CartAddCardImg = styled.img `
    width: 210px;
    border-radius: 10px;
    @media (max-width: ${matchSM}px) {
        width: 110px;
    }
`
export const CartAddData = styled.div`
    justify-content: center;
    display: grid;
    @media (max-width: ${matchSM}px) {
        width: 100%;
        display: grid;
        justify-content: flex-start;
    }
`
export const CartAddDataBottom = styled.div`
    display: inline-grid;
    @media (max-width: ${matchSM}px) {
        display: flex;
        align-items: center;
        gap: 30px;
        justify-content: space-between;
    }
`
export const CartAddCardTitle = styled.h3 `
    font-family: 'Gilroy';
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
        text-align: start;
    }
`
export const CartAddCardInner = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`
export const CartAddCardText = styled.p `
    font-family: 'Gilroy';
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #C6CED1;
`
export const CartAddCardCost = styled.p `
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
`