import styled from "styled-components";
import { LoadingButton } from "@mui/lab";
import { IconButton } from "@mui/material";
import { matchSM } from "../../Themes/Breakpoints";

export const AddButton = styled(LoadingButton)`
    font-family: 'Inter';
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    padding: 20px 0;
    text-align: center;
    color: #FFFFFF;
    border-radius: 10px;
    background: #72A479;
    text-transform: capitalize;
    width: ${props => props.food ? "50%": "100%"};
    &:hover {
        background-color: #403C3B;
    }
    &:hover {
        background-color: #403C3B;
        background-color: #9CAE9F;
    }
    @media (max-width: ${matchSM}px) {
        padding: 15px 0;
    }
`
export const CloseButton = styled(IconButton)`
    position: absolute;
    top: 5px;
    right: 15px;
`
export const ModalTitle = styled.h3`
    font-family: 'Gilroy-Bold';
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFF;
`