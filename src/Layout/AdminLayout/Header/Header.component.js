import styled from "styled-components";
import matchXL from "../../../Themes/Breakpoints";
import { AppBar, IconButton } from "@mui/material";

export const HeaderWrapper = styled.div`
    flex-grow: 1;
`
export const HeaderAppBar = styled(AppBar)`
    position: fixed;
    z-index: 12 !important;
    background-color: #403C3B;
    padding: 8px 0 !important;
    box-shadow: 0 3px 10px 3px #464646;
    @media (max-width: ${matchXL}px) {
        margin-left: ${props => `${props.appWidth}px` }
        width: ${props => `calc(100% - ${props.appWidth}px` }
    };
`
export const HeaderIconButton = styled(IconButton)`
    margin-right: 2rem;
    font-size: 1.7rem;
`