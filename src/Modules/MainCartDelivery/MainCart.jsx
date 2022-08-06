import { useNavigate } from "react-router-dom";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { NavLinkList } from "../../Components/Navbar/NavLinkList";
import { MainCartContainer, MainCartContainerInnerTop, MainCartContainerInnerTopLine, MainCartContainerInnerTopText, MainCartContainerInnerTopTitle, MainCartContainerTop, MainCartPagesLink, MainCartPagesLinkBox } from "./MainCart.component";

export function MainCart() {
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <NavLinkList />
            <MainCartContainer>
                <MainCartContainerTop>
                    <MainCartPagesLinkBox onClick={() => navigate(-1)}>
                        <i class='bx bx-chevron-left' style={{
                            width: '26px',
                            height: '26px',
                            color: '#fff',
                            fontSize: '25px',
                            marginLeft: '5px'}}>
                        </i>
                        <MainCartPagesLink>
                             к выбору блюда
                        </MainCartPagesLink>
                    </MainCartPagesLinkBox>
                    <MainCartContainerInnerTop>
                        <MainCartContainerInnerTopLine></MainCartContainerInnerTopLine>
                        <MainCartContainerInnerTopTitle>
                            КОРЗИНА
                        </MainCartContainerInnerTopTitle>
                        <MainCartContainerInnerTopText>
                            (в корзине 3 товара)
                        </MainCartContainerInnerTopText>
                    </MainCartContainerInnerTop>
                </MainCartContainerTop>
            </MainCartContainer>
            {/* <Footer /> */}
        </>
    )
}