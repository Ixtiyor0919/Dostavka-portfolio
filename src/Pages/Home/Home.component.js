import { Button } from "@mui/material";
import styled from "styled-components";
import HomeImg from '../../Assets/Images/HomeImg.png';
import HomeKafe from '../../Assets/Images/HomeKafe.png';

export const HomeMain = styled.div`
    width: 100%;
    height: 484px;
    display: flex;
    align-items: center;
    background-image: url(${HomeImg});
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 600px) {
        height: 300px;
    }
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
    @media (max-width: 600px) {
        font-size: 35px;
    }
`
export const MenuWrapper = styled.div`  
    padding: 70px 100px 70px 70px;
    display: flex;
    align-items: center;
    background-image: url(${HomeKafe});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 768px) {
        display: none;
      }
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
export const MenuDescriptionBoxBtn = styled(Button)`
    padding: 25px 50px !important;
    font-family: 'Proxima Nova' !important;
    font-style: normal !important;
    font-weight: 700 !important;
    font-size: 13px !important;
    line-height: 16px !important;
    color: #FFFFFF !important;
    border: none !important;
    outline: none !important;
    background-color: rgba(255, 255, 255, 0.05) !important;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
    backdrop-filter: blur(5px) !important;
    border-radius: 10px !important;
    cursor: pointer !important;
`
export const MenuCardsBox = styled.div`
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
export const MenuCardsBoxCardImg = styled.img``
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
