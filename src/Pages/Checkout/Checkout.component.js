import styled from "styled-components";
import { matchMD, matchSM } from "../../Themes/Breakpoints";

export const CheckoutWrapper = styled.div `
    max-width: 800px;
    padding: 50px 0 90px 0;
    margin: 0 auto;
    @media (max-width: ${matchMD}px) {
        padding: 35px;
    }
    @media (max-width: ${matchSM}px) {
        padding: 20px;
    }
`
export const CheckoutWrapperTop = styled.div `
    margin-bottom: 55px;    
`
export const CheckoutTopLinkBox = styled.div `
    display: flex;
    align-items: center;
    margin-bottom: 20px;
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
    margin-bottom: 20px;
    background: linear-gradient(90deg, #494544 0%, #504B4A 100%);
    border-radius: 10px;
`
export const CheckoutWrapperItemForm = styled.form `
    display: grid; 
    gap: 20px;
    @media (max-width: ${matchSM}px) {
        width: 100% !important;
        flex-direction: column;
    }
`

export const CheckoutWrapperItemInner= styled.div `
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
`
export const CheckoutWrapperItemInput = styled.input `
    padding: 20px 0 20px 30px;
    border-radius: 10px;
    font-family: 'Gilroy';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    border: none;
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: transparent;
    color: #FFFFFF;
    ::placeholder {
        color: #FFFFFF;
    }
    @media (max-width: ${matchSM}px) {
        width: 100% !important;
    }
`
export const CheckoutWrapperItemTitle = styled.h2 `
    margin-bottom: 30px;
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
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    user-select: none;
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
export const LabelThird = styled.label `
    width: 34%;
    height: 100%;
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    user-select: none;
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
        // padding: 20px 54px;
    }
    :checked + ${LabelThird} {
        background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
        font-weight: 700;
        // padding: 20px 54px;
    }
`
export const CheckoutWrapperText = styled.p`
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
`
export const CheckoutWrapperItemTopInnerRight = styled.div`
    display: flex;
    align-items: center;
`
export const CheckoutWrapperItemPersonCountWrapper = styled.div`
    width: 36%;
    padding: 20px 30px;
    display: flex;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    user-select: none;
`
export const CheckoutWrapperItemPersonCountWrapperText = styled.p`
    font-family: 'Gilroy';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    margin-right: auto;
`
export const CheckoutWrapperItemPersonCountWrapperValue = styled.p`
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    margin: 0 12px;
`
export const CheckoutWrapperItemBottom = styled.div`
    display: inline-grid;
    gap: 10px;
`
export const CheckoutWrapperItemBottomCheckbox = styled.span`
    width: 22px;
    height: 22px;
    background: #fff;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    user-select: none;
`
export const MiddleDivider = styled.hr`
    width: 0.7px;
    height: 100%;
    border: none;
    background-color: #72a479;
`
