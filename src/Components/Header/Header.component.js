import styled from "styled-components";
export const HeaderContainer = styled.div`
    padding: 24px 100px 24px 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #403C3B;
    box-shadow: 0px 30px 60px rgba(34, 31, 32, 0.2);
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
`
export const NavbarLogo = styled.img`
    display: block;
`
export const AddresInputBox = styled.div`
    width: 40%;
    padding: 16px 18px;
    display: flex;
    align-items: center;
    background: #504B4A;
    border-radius: 10px;
`
export const AddresInput = styled.input`
    width: 80%;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #CFCFCF;
    background: transparent;
    border: none;
    outline: none;
    ::placeholder {
        color: #CFCFCF;
    }
`
export const ContactBox = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15%;
`
export const ContactBoxInner = styled.div`
    margin-left: 10px;
`
export const ContactTitle = styled.p`
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #a2a2a2;
`
export const ContactNumber = styled.p`
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
    color: #CFCFCF;
`
export const HeaderBtn = styled.div`
    width: 10%;
    padding: 16px 13px 16px 24px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
    border-radius: 10px;
    cursor: pointer;
    user-select: none;
`
export const HeaderBtnLink = styled.a`
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-decoration: none;
    color: #FFFFFF;
`
export const HeaderBtnLine = styled.hr`
    width: 38px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    transform: rotate(90deg);
`
export const HeaderBtnCount = styled.span`
    width: 24px;
    height: 24px;   
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    background: #FFFFFF;
`