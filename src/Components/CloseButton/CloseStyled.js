import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { IconButton } from "@mui/material";

export const CloseBtn = styled(IconButton)`
    position: absolute;
    top: 20px;
    right: 20px;
    color: ${props => props.drawer && "#65906c"};
    color: ${props => props.modal && "#FFFFFF"};
`
export const CloseIcon = styled(FaTimes)`
    color: inherit;
`