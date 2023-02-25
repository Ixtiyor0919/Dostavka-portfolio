import styled from "styled-components";
import { matchMD, matchSM } from "../../Themes/Breakpoints";

export const HomeCardsWrapper = styled.div`
    width: 100%;
    padding: 50px 0 0 0;
`
export const HomeCardsInnerTop = styled.div`
    margin-left: 8%;
    display: flex;
    align-items: center;
`
export const HomeCardsInnerTopLine = styled.hr`
    width: 33px;
    height: 4px;
    display: flex;
    align-items: center;
    border: none;
    background: #618967;
    transform: rotate(90deg);   
`
export const HomeCardsInnerTopTitle = styled.h2`
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    text-transform: uppercase;
    color: #FFFFFF;
    @media (max-width: ${matchMD}px) {
        font-size: 25px;
        line-height: 30px;
    }
    @media (max-width: ${matchSM}px) {
        font-size: 20px;
        line-height: 24px;
    }
`
export const HomeCardsInnerSlider = styled.div`
    // position: relative; 
    // padding-top: 50px;
    // gap: 20px;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // overflow-x: auto;
`
export const HomeLine = styled.hr`
    width: 100%;
    height: 2px;
    background-color: #44403F;
    border: none;
`