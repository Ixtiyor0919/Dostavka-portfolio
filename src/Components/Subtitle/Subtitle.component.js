import styled from "styled-components";
import { matchMD, matchSM } from "../../Themes/Breakpoints";

export const PagesContainer = styled.div`
    margin: 0 auto;
    padding: 50px 100px;
    display: flex;
    align-items: center;
    @media (max-width: ${matchMD}px) {
        padding: 40px 50px;
    }
    @media (max-width: ${matchSM}px) {
        padding: 30px 20px;
    }
`
export const PageTitle = styled.h2`
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-right: 15px;
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