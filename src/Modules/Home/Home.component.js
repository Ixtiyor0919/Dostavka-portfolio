import styled from "styled-components";
import HomeImg from '../../Assets/Images/HomeImg.png'
import HomeKafe from '../../Assets/Images/HomeKafe.png'

export const HomeMain = styled.div`
    width: 100%;
    height: 484px;
    display: flex;
    align-items: center;
    background-image: url(${HomeImg});
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
`

export const HomeTitle = styled.h2`
    width: 61%;
    height: 146px;
    font-family: 'Zing Rust Demo';
    font-style: italic;
    font-weight: 400;
    font-size: 67px;
    line-height: 109.2%;
    text-align: center;
    color: #FFFFFF;
    transform: rotate(-8.37deg);
`
export const MenuWrapper = styled.div`  
    padding: 70px 100px 70px 70px;
    display: flex;
    align-items: center;
    background-image: url(${HomeKafe});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
export const MenuDescriptionBox = styled.div`
    width: 100%
`
export const MenuDescriptionBoxTitle =styled.h2`
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    text-transform: uppercase;
    color: #FFFFFF;
`
export const MenuDescriptionBoxText =styled.p`
    width: 52%;     
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    margin-top: 26px;
    margin-bottom: 60px;
    color: #CFCFCF;
`
export const MenuDescriptionBoxBtn =styled.button`
    padding: 22px 25px 22px 64px;
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    color: #FFFFFF;
    border: none;
    outline: none;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    cursor: pointer;
`
export const MenuCardsBox = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;    
    gap: 15px;
`
export const MenuCardsBoxCard = styled.div`
    // width: 22%;
    padding: 65px 22px 40px 22px;
    text-align: center;
    cursor: pointer;
    background: rgba(80, 75, 74, 0.9);
    backdrop-filter: blur(4px);
    :hover {
        background: #504B4A;
        box-shadow: 0px 40px 50px rgba(0, 0, 0, 0.4);
    }
`
export const MenuCardsBoxCardTitle = styled.h4`
    margin-top: 30px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    :hover {
        color: #79B282;
    }
`
