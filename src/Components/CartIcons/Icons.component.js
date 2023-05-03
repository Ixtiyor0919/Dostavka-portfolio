import styled from "styled-components";
import { IconButton } from "@mui/material";
import { matchSM } from "../../Themes/Breakpoints";

export const CartIcon = styled.span`
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: rgb(255, 255, 255);
    background: rgb(114, 164, 121);
    :active {
        background-color: rgb(114, 164, 121);
    }
    :hover {
        background-color: rgb(114, 164, 121);
    }
`
export const Button = styled(IconButton)`
    padding: 6px;
    &.MuiIconButton-sizeMedium {
        color: #FFFFFF;
    } 
    @media (max-width: ${matchSM}px) {
        padding: 4px;
    }
`