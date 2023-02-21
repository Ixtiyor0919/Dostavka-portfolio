import styled from "styled-components";

export const FooterContainer = styled.div`
    padding: 26px 100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    background: linear-gradient(270.7deg, #44403F 0.4%, #211F20 100%);
    @media (max-width: 768px) {
        flex-direction: column;
      }
`
export const FooterDescription = styled.div`
    width: 20%;
    margin-right: 90px;
`
export const FooterLogo = styled.img`
    display: block;
    margin-right: 30px;
`
export const FooterText = styled.a`
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #CFCFCF;
    text-decoration: none;
    display: block;
`
export const FooterLinks = styled.p`
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
`
export const PagesBox = styled.div`
    gap: 30px;
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        display: none;
      }
`
export const Page = styled.p`
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
`