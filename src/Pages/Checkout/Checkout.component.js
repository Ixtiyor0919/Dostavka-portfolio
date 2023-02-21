import styled from "styled-components"

export const CheckoutWrapper = styled.main `
    max-width: 800px;
    padding: 50px 0 90px 0;
    margin: 0 auto;
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
export const CheckoutWrapperItemForm = styled.form ``

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
`
export const CheckoutWrapperItemTitle = styled.h2 `
    margin-bottom: 30px;
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
`
export const CheckoutWrapperItemInnerTitle = styled.p `
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
`
export const CheckoutWrapperItemTop = styled.div `
    display: flex;
    align-items: center;
`
export const CheckoutWrapperItemTopInner = styled.div `
    border: 1px solid #72A479;
    border-radius: 10px;
    overflow: hidden;
    display: inline-flex;
`
export const CheckoutWrapperItemTopInnerLabel = styled.label `
    height: 100%;
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    user-select: none;
    border: 1px solid #72A479;
`
export const CheckoutWrapperItemRadioInput = styled.input `
    border: none;
    outline: none;
    display: none;
    :checked + ${CheckoutWrapperItemTopInnerLabel} {
        background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
        font-weight: 700;
        padding: 20px 54px;
    }
`
export const CheckoutWrapperText = styled.p`
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
`
export const CheckoutWrapperItemTopInnerRight = styled.div`
    display: flex;
    align-items: center;
`
export const CheckoutWrapperItemPersonCountWrapper = styled.div`
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
`
export const CheckoutWrapperItemPersonCountWrapperValue = styled.p`
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
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
`;

// render(
//     <CheckoutWrapperItemBottomCheckbox onClick{() => theme={background: '#fff'}}>
//       Drag me!
//     </CheckoutWrapperItemBottomCheckbox>
// );