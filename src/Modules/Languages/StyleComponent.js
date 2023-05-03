import styled from "styled-components";
import { matchMD, matchSM } from "../../Themes/Breakpoints";


export const LanguageWrapper = styled.div `
    display: ${props => props.drawer && "none"};
    display: ${props => props.header && "flex"};
    align-items: center;
    @media (max-width: ${matchSM}px) {
        display: ${props => props.drawer && "flex"};
        display: ${props => props.header && "none"};
    }
`
export const LanguageInner = styled.div `
    display: inherit;
    align-items: center;
    cursor: pointer;
    @media (max-width: ${matchMD}px) {
        text-align: ${props => props.header && "center"};
        display: ${props => props.header && "unset"};
    }
`