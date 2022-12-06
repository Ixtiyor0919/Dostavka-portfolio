import styled from "styled-components"

export const HomeCardCount = styled.span`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
    background: #79B382;
    display: flex;
    align-items: center;
    justify-content: center;
    display: none;
    position: absolute;
    top: -10px;
    right: -10px;
    transition: all .3s;
`
export const HomeCardCost = styled.p`
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
    margin-right: auto;
`
export const HomeCardCart = styled.p`
    padding: 14px 16px 14px 19px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
    background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
    border-radius: 10px;
    display: flex;
    align-items: center;
    :active {
        background: linear-gradient(114.93deg,#7ad788 5.11%,#8ed498 94%);
        box-shadow: 0px 5px 10px rgba(114, 163, 121, 0.7);
    }
`
export const HomeInnerCard = styled.div`
    padding: 14px 16px 18px 16px;
    border-radius: 10px;
`
export const HomeCard = styled.div`
    width: 325px;
    height: 400px;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: linear-gradient(90deg, #494544 0%, #504B4A 100%);
    transition: all .2s;
    :hover {
        background: linear-gradient(90deg, #494544 0%, #504B4A 100%);
        box-shadow: 0px 30px 45px rgba(43, 40, 40, 0.6);
        ${HomeCardCount} {
            display: flex;
        }
        ${HomeInnerCard} {
            justify-content: space-between;
        }
        transform: scale(1.020, 1.015);
    }
`
export const HomeInnerBtnBox = styled.div`
    margin-top: 15px;
    display: flex;
    align-items: center;
`
export const HomeCardTitle = styled.h3`
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 27px;
    color: #FFFFFF;
    display: inline-block;
    margin-right: 52%;
    margin-bottom: 5px;
`
export const HomeCardDescription = styled.p`
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    color: #CFCFCF;
`
export const HomeCardWeight = styled.span`
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
`