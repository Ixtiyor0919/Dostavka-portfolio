import styled from "styled-components";
import { matchMD, matchSM } from "../../Themes/Breakpoints";

export const ActionCardBox = styled.div `
    width: 30%;
    background: linear-gradient(90deg, #494544 0%, #504B4A 100%);
    border-radius: 10px;
    @media (max-width: ${matchMD}px) {
        width: 48%;
    }
    @media (max-width: ${matchSM}px) {
        width: 100%;
    }
`
export const ActionCardInnerBox = styled.div `
    padding: 15px 25px;
`
export const ActionCardBoxImg = styled.img ``
export const ActionCardBoxTitle = styled.h4 `
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    @media (max-width: ${matchSM}px) {
        font-size: 16px;
        line-height: 19px;
    }
`
export const ActionCardBoxDescription = styled.p `
    margin: 5px 0 20px 0;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #A6A7AB;
    @media (max-width: ${matchSM}px) {
        font-size: 12px;
        line-height: 14px;
    }
`
export const ActionCardBoxData = styled.p `
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #6FA076;
    @media (max-width: ${matchSM}px) {
        font-size: 12px;
        line-height: 14px;
    }
`