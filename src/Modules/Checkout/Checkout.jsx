import { Header } from "../../Components/Header/Header";
import { NavLinkList } from "../../Components/Navbar/NavLinkList";
// import { Footer } from '../../Components/Footer/Footer';
import { CheckoutTopLink, CheckoutTopLinkBox, CheckoutWrapper, CheckoutWrapperFirstItem, CheckoutWrapperFirstItemForm, CheckoutWrapperFirstItemInput, CheckoutWrapperFirstItemTitle, CheckoutWrapperTop, CheckoutWrapperTopInner, CheckoutWrapperTopInnerLine, CheckoutWrapperTopInnerTitle } from "./Checkout.component";
import { useNavigate } from "react-router-dom";

export function Checkout() {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <NavLinkList />
            <CheckoutWrapper>
                <CheckoutWrapperTop>
                    <CheckoutTopLinkBox onClick={() => navigate(-1)}>
                        <i class='bx bx-chevron-left' style={{
                            width: '26px',
                            height: '26px',
                            color: '#fff',
                            fontSize: '30px'}}>
                        </i>
                        <CheckoutTopLink>
                            в корзину
                        </CheckoutTopLink>
                    </CheckoutTopLinkBox>
                    <CheckoutWrapperTopInner>
                        <CheckoutWrapperTopInnerLine />
                        <CheckoutWrapperTopInnerTitle>
                            Оформление заказа
                        </CheckoutWrapperTopInnerTitle>
                    </CheckoutWrapperTopInner>
                </CheckoutWrapperTop>
                <CheckoutWrapperFirstItem>
                    <CheckoutWrapperFirstItemTitle>
                        1. Контактная информация
                    </CheckoutWrapperFirstItemTitle>
                    <CheckoutWrapperFirstItemForm>
                        <CheckoutWrapperFirstItemInput placeholder="Имя*" />
                        <CheckoutWrapperFirstItemInput placeholder="Телефон*" />
                    </CheckoutWrapperFirstItemForm>
                </CheckoutWrapperFirstItem>
            </CheckoutWrapper>
            {/* <Footer /> */}
        </>
    )
}