import styled from "styled-components";
import { matchMD, matchSM } from "../../Themes/Breakpoints";


export const ActionWrapper = styled.div`
    padding: 0 40px 60px 40px;
    row-gap: 50px;
    column-gap: 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    @media (max-width: ${matchMD}px) {
        padding: 0 30px 40px 30px;
        row-gap: 40px;
        column-gap: 20px;
    }
    @media (max-width: ${matchSM}px) {
        flex-direction: column;
        padding: 30px 20px;
        row-gap: 30px;
    }
`
export const ActionWrapperInnerBox= styled.div`
    display: inline-flex;
    gap: 20px;
    padding: 40px 20px;
`