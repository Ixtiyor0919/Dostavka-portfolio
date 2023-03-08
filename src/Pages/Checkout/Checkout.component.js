import styled from "styled-components";
import {
    FormControlLabel
} from "@mui/material";
import {
    matchMD,
    matchSM
} from "../../Themes/Breakpoints";


export const CheckoutWrapper = styled.div `
    max-width: 1000px;
    padding: 50px 100px 90px 100px;
    margin: 0 auto;
    @media (max-width: ${matchMD}px) {
        padding: 40px 80px 60px 80px;
    }
    @media (max-width: ${matchSM}px) {
        padding: 30px 20px 45px 20px;
    }
`
export const CheckoutWrapperMain = styled.div `
    display: grid;
    gap: 20px;
`
export const CheckoutTopLinkBox = styled.div `
    display: flex;
    align-items: center;
`
export const CheckoutTopLink = styled.p `
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
`
export const CheckoutWrapperItem = styled.div `
    padding: 30px;
    display: grid;
    gap: 30px;
    background: linear-gradient(90deg, #494544 0%, #504B4A 100%);
    border-radius: 10px;
    @media (max-width: ${matchMD}px) {
        gap: 25px;
    }
    @media (max-width: ${matchSM}px) {
        padding: 30px 25px;
        gap: 20px;
    }
`
export const CheckoutWrapperItemForm = styled.form `
    display: grid; 
    gap: 20px;
    @media (max-width: ${matchSM}px) {
        width: 100% !important;
        flex-direction: column;
    }
`

export const CheckoutWrapperItemInner = styled.div `
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
`
export const CheckoutWrapperItemInput = styled.input `
padding: 20px 0 20px 20px;
    border-radius: 10px;
    font-family: 'Gilroy';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: transparent;
    color: #FFFFFF;
    // appearance: none;
    ::placeholder {
        color: #FFFFFF;
    }
    @media (max-width: ${matchSM}px) {
        width: 100% !important;
    }
`
export const CheckoutWrapperItemArea= styled.textarea `
    width: 80%;
    height: 100px;
    padding: 20px 0 20px 20px;
    border-radius: 10px;
    font-family: 'Gilroy';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: transparent;
    color: #FFFFFF;
    appearance: none;
    resize: none;
    ::placeholder {
        color: #FFFFFF;
    }
    @media (max-width: ${matchSM}px) {
        width: 100% !important;
    }
`
export const CheckoutWrapperItemTitle = styled.h2 `
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    @media (max-width: ${matchMD}px) {
        font-size: 17px;
        line-height: 20px;  
    }
    @media (max-width: ${matchSM}px) {
        font-size: 16px;
        line-height: 19px;   
    }
`
export const CheckoutWrapperItemInnerTitle = styled.p `
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    margin: 10px 0;
`
export const CheckoutWrapperItemTop = styled.div `
    display: flex;
    align-items: center;
    gap: 20px;
    @media (max-width: ${matchSM}px) {
        flex-direction: column;
    } 
`
export const CheckoutWrapperItemTopInner = styled.div `
    width: 50%;
    border: 1px solid #72A479;
    border-radius: 10px;
    overflow: hidden;
    display: inline-flex;
    @media (max-width: ${matchSM}px) {
        width: 100% !important;  
    }  
`
export const CheckoutWrapperItemTopInnerLabel = styled.label `
    width: 50%;
    height: 100%;
    padding: 20px 0;
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    user-select: none;
    border: 1px solid #72A479;
    text-align: center;
    @media (max-width: ${matchMD}px) {
        font-size: 14px;
        line-height: 17px;
    }
    @media (max-width: ${matchSM}px) {
        font-size: 12px;
        line-height: 14px;    
    }
`
export const LabelThird = styled.label `
    width: 34%;
    height: 100%;
    padding: 20px 0;
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    user-select: none;
    text-align: center;
    border: 1px solid #72A479;
    @media (max-width: ${matchMD}px) {
        font-size: 14px;
        line-height: 17px;
    }
    @media (max-width: ${matchSM}px) {
        font-size: 12px;
        line-height: 14px;    
    }
`
export const CheckoutWrapperItemRadioInput = styled.input `
    border: none;
    outline: none;
    display: none;
    :checked + ${CheckoutWrapperItemTopInnerLabel} {
        background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
        font-weight: 700;
    }
    :checked + ${LabelThird} {
        background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
        font-weight: 700;
    }
`
export const CheckoutWrapperText = styled.p `
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
`
export const CheckoutWrapperItemTopInnerRight = styled.div `
    display: flex;
    align-items: center;
    @media (max-width: ${matchSM}px) {
        display: none;
    }
`
export const CheckoutWrapperItemPersonCountWrapper = styled.div `
    width: 45%;
    padding: 20px 30px;
    display: flex;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    user-select: none;
    @media (max-width: ${matchMD}px) {
        width: 55%;
    }
    @media (max-width: ${matchSM}px) {
        width: 100%;
    }
`
export const CheckoutWrapperItemPersonCountWrapperText = styled.p `
    font-family: 'Gilroy';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    margin-right: auto;
`
export const CheckoutWrapperItemPersonCountWrapperValue = styled.p `
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    margin: 0 12px;
`
export const CheckoutWrapperItemBottom = styled.div `
    display: inline-grid;
    gap: 10px;
`
export const CheckoutWrapperItemBottomCheckbox = styled.span `
    min-width: 20px;
    height: 20px;
    background: #fff;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    user-select: none;
    text-align: center;
    cursor: pointer;
`
export const MiddleDivider = styled.hr `
    width: 0.7px;
    height: 100%;
    border: none;
    background-color: #72a479;
`
export const FormRadioLabel = styled(FormControlLabel)
`
    font-family: 'Gilroy' !important; 
    font-weight: 500 !important; 
    font-size: 13px !important;  
    line-height: 15px !important;
    color: #FFFFFF !important;
    @media (max-width: ${matchSM}px) {
        margin-right: unset;
    }
`
export const CheckImg = styled.img `
    transition: all 0.3s ease-in-out;
`
export const CheckoutBottom = styled.div `
    width: 100%; 
    padding: 20px; 
    gap: 10px; 
    align-items: center;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(90deg, #494544 0%, #504B4A 100%);
    border-radius: 10px;
    @media (max-width: ${matchSM}px) {
        flex-direction: column-reverse;
    }
`
export const CheckoutBottomInner = styled.div `
    gap: 10px; 
    display: flex;
`
export const CheckoutBottomText = styled.p `
    margin-right: 5px;
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #FFFFFF;
    display: inline;
`
export const CheckoutBottomLink = styled.p `
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #72A479;
    display: inline;
    text-decoration: underline;
`