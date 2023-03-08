import styled from "styled-components";
import appDrawerWidth from "../../../Utils/Constant";
import { matchSM } from "../../../Themes/Breakpoints";

export const Main = styled.div`
    width: ${props => props.open ? `calc(100% - ${appDrawerWidth}px)` : "100%"};
    padding: ${props => props.md ? "35px 20px 20px 20px": "35px 25px 30px 25px" };
    min-height: ${props => props.md ? "calc(100vh - 138px)": "calc(100vh - 190px)"};
    background-color: inherit;
    @media (max-width: ${matchSM}px) {
        width: 100%;
        // padding: 15px 20px;
        // height: ${props => props.searchOpen ? "150px" : "unset"};
        // align-items: ${props => props.searchOpen ? "flex-start" : "flex"};
    }
`