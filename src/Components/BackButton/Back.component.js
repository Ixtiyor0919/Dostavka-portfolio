import styled from "styled-components";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export const BackWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-left: -10px;
    cursor: pointer;
`
export const BackKeyboard = styled(KeyboardArrowLeftIcon)`
    width: 26px;
    height: 26px;
    fontSize: 30px;
    color: #fff;
`
export const BackKeyboardStyled = styled(KeyboardArrowLeftIcon)`
    width: 26px;
    height: 26px;
    background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
`
export const BackText = styled.p `
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
`