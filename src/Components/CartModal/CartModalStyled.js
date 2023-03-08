import { Button } from "@mui/material";
import styled from "styled-components";
import { matchMD, matchSM } from "../../Themes/Breakpoints";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const ModalIsEmptyWrapper = styled.div`
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 10;
opacity: 0.6;
display: flex;
position: fixed;
text-align: center;
align-items: center;
justify-content: center;
background: linear-gradient(360deg, #211F20 0%, #44403F 100%);
`
export const ModalIsEmpty = styled.div`
    width: 500px;
    height: 400px;
    padding: 50px;
    gap: 15px;
    position: fixed;
    top: 20%;
    left: 30%;
    border-radius: 15px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90deg, #494544 0%, #504B4A 100%);
    @media (max-width: ${matchMD}px) {
        width: 50%;
        height: 70%;
    }
    @media (max-width: ${matchSM}px) {
        width: 92%;
        height: 70%;
    }
`
export const ModalIsEmptyIcon = styled(AddShoppingCartIcon)`
    width: 180px;
    height: 160px;
    color: #70A177;
`
export const StockModalTitle = styled.h2`
font-family: 'Gilroy';
font-weight: 700;
font-size: 30px;
line-height: 36px;
color: #FFFFFF;
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