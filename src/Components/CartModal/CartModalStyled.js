import styled from "styled-components";
import { matchMD, matchSM } from "../../Themes/Breakpoints";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Box, Button, Dialog, DialogActions, DialogContentText } from "@mui/material";

export const style = styled.div`
    background: linear-gradient(360deg, #211F20 0%, #44403F 100%);
`
export const ModalIsEmpty = styled(Box)`
    width: 30%;
    height: 50%;
    padding: 50px;
    gap: 20px;
    position: absolute;
    top: 20%;
    left: 33%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%);
    background: linear-gradient(180deg, #494544 0%, #504B4A 100%);
    @media (max-width: ${matchMD}px) {
        width: 50%;
        left: 25%;
    }
    @media (max-width: ${matchSM}px) {
        width: unset;
        top: 25%;
        left: 20px;
        right: 20px;
    }
`
export const ModalIsEmptyIcon = styled(AddShoppingCartIcon)`
    font-size: 120px;
    color: #70A177;
    @media (max-width: ${matchSM}px) {
        font-size: 90px;
    }
`
export const StockModalTitle = styled.h2`
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    color: #FFFFFF;
    @media (max-width: ${matchMD}px) {
        font-size: 28px;
        line-height: 34px;
    }
    @media (max-width: ${matchSM}px) {
        font-size: 25px;
        line-height: 30px;
    }
`
export const StockModalBtn = styled(Button)`
    padding: 17px 34px !important;
    font-family: 'Gilroy' !important;
    font-weight: 700 !important;
    font-size: 14px !important;
    line-height: 17px !important;
    color: #FFFFFF !important;
    background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
    border-radius: 10px !important;
    border: none !important;
    outline: none !important;
`
export const CartDialog = styled(Dialog)`
    & .MuiPaper-rounded {
        padding: 20px;
        color: #ffffff;
        text-align: center;
        border-radius: 15px;
        background: linear-gradient(180deg, #494544 0%, #504B4A 100%);
    }
`
export const DialogBtns = styled(DialogActions)`
    justify-content: space-around;
`
export const DialogBtn = styled(Button)`
    width: 40%;
    border-radius: 10px;
    color: ${props => props.no ? "grey" : "red"};
    border: ${props => props.no ? "1px solid grey !important" : "1px solid red !important"};
`
export const DialogText = styled(DialogContentText)`
    color: grey;
`