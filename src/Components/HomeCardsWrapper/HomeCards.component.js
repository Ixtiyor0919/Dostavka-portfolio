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
export const GradientLine = styled.hr`
    height: 2px;
    border: 0;
    // background-image: linear-gradient(90deg,rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100.87%);
    background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100.87%);
    &:first-child {
        height: 0;
        display: none;
    }
`
export const HomeCardsInnerTopTitle = styled.h2`
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    text-transform: uppercase;
    color: #FFFFFF;
    padding-left: 15px;
    border-left: 4px solid #618967;
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