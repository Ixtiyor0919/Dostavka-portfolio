import { Button } from "@mui/material";
import styled from "styled-components";
import { matchMD, matchSM } from "../../Themes/Breakpoints";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const HomeCardCount = styled.span `
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
    background: #79B382;
    align-items: center;
    justify-content: center;
    display: none;
    position: absolute;
    top: -10px;
    right: -10px;
    transition: all .3s;
`
export const CardImg = styled.img `
    width: 325px;
    height: 230px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`
export const HomeCardCost = styled.p `
    font-family: 'Gilroy';
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
`
export const HomeCardCart = styled(Button) `
    padding: 14px 16px 14px 19px;
    font-family: 'Gilroy';
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
    margin-left: auto;
    border-radius: 10px;
    align-items: center;
    transition: all 2s;
    display: ${props => props.counted ? "none" : "flex"};
    background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
    :active {
        background: linear-gradient(114.93deg,#7ad788 5.11%,#8ed498 94%);
        box-shadow: 0px 5px 10px rgba(114, 163, 121, 0.7);
    }
`
export const HomeInnerCard = styled.div `
    padding: 14px 16px 18px 16px;
    border-radius: 10px;
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
`
export const HomeInnerBtn = styled.div `
    width: 60px;
    height: 40px;
    color: #ffffff;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    transition: all .2s;
    display: ${props => props.counted ? "flex" : "none"};
    background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
    :active {
        background: linear-gradient(114.93deg,#7ad788 5.11%,#8ed498 94%);
        box-shadow: 0px 5px 10px rgba(114, 163, 121, 0.7);
    }
`
export const HomeInnerBtnBox = styled.div `
    display: flex;
    align-items: center;
    position: absolute;
    right: 20px;
    bottom: 20px;
    left: 20px;
    justify-content: space-between;
`
export const HomeCard = styled.div `
    width: 325px;
    height: 400px;
    cursor: pointer;
    user-select: none;
    position: relative;
    border-radius: 10px;
    transition: all .2s;
    background: linear-gradient(90deg, #494544 0%, #504B4A 100%);
    :hover {
        box-shadow: 0px 30px 45px rgba(43, 40, 40, 0.6);
        ${HomeCardCount} {
            display: flex;
        }
        // ${HomeCardCart} {
        //     display: ${props => props.counted ? "none" : "flex"};
        // }
        // ${HomeInnerBtn} {
        //     display: ${props => props.counted ? "flex" : "none"};
        // }
    }
`
export const HomeCardTitle = styled.h3 `
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 22px;
    line-height: 27px;
    color: #FFFFFF;
    display: inline-block;
    @media (max-width: ${matchMD}px) {
        font-size: 21px;
        line-height: 26px;
    }    
    @media (max-width: ${matchSM}px) {
        font-size: 20px;
        line-height: 24px;
    }
`
export const HomeCardDescription = styled.p `
    font-family: 'Gilroy';
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    color: #CFCFCF;   
    @media (max-width: ${matchSM}px) {
        font-size: 12px;
        line-height: 17px;
    }
`
export const HomeCardWeight = styled.span `
    font-family: 'Gilroy';
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
`
export const ShoppingIcon = styled(AddShoppingCartIcon)`
    width: 24px;
    height: 24px;
    margin-left: 16px;
`