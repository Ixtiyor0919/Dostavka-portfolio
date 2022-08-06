import styled from "styled-components";

export const NavbarContainer = styled.nav`
    max-width: 1440px;
    padding: 0 86px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    background: linear-gradient(180deg, #211f2000 0%, #44403F 100%);
    position: sticky;
    top: 104px;
    left: 0;
    right: 0;
    z-index: 80;
    // gap: 15px;
    justify-content: center;
    // filter: grayscale(1);
    backdrop-filter: blur(1px);
`
export const NavbarLinks = styled.p`
    padding: 28px 20px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    border-bottom: 3px solid transparent;
    :hover{
       box-shadow: 0px 5px 12px rgba(114, 164, 121, 0.3);
       border-bottom:  3px solid #618967
    }
`
export const NavbarContainerLine = styled.hr`
    position: sticky;
    top: 182px;
    left: 0;
    right: 0;
    border: 1px solid rgba(255, 255, 255, 0.1);
`