import styled from "styled-components";
import { IconButton } from "@mui/material";

export const CartIcon = styled(IconButton)`
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