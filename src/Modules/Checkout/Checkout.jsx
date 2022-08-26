import { Header } from "../../Components/Header/Header";
import { NavLinkList } from "../../Components/Navbar/NavLinkList";
import { Footer } from '../../Components/Footer/Footer';
import { CheckoutTopLink, CheckoutTopLinkBox, CheckoutWrapper, CheckoutWrapperFirstItem, CheckoutWrapperFirstItemForm, CheckoutWrapperFirstItemInput, CheckoutWrapperFirstItemTitle, CheckoutWrapperSecondItem, CheckoutWrapperSecondItemTitle, CheckoutWrapperSecondItemTop, CheckoutWrapperSecondItemTopInner, CheckoutWrapperSecondItemTopInnerBtn, CheckoutWrapperTop, CheckoutWrapperTopInner, CheckoutWrapperTopInnerLine, CheckoutWrapperTopInnerTitle } from "./Checkout.component";
import { useNavigate } from "react-router-dom";
// import { CheckoutActiveBtn } from "../../Components/CheckoutActiveBtn/CheckoutBtn";

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
                        <CheckoutWrapperFirstItemInput type='text' placeholder="Имя*" />
                        <CheckoutWrapperFirstItemInput type='text' placeholder="Телефон*" />
                    </CheckoutWrapperFirstItemForm>
                </CheckoutWrapperFirstItem>
                <CheckoutWrapperSecondItem>
                    <CheckoutWrapperSecondItemTitle>
                        2. Доставка
                    </CheckoutWrapperSecondItemTitle>
                    <CheckoutWrapperSecondItemTop>
                        <CheckoutWrapperSecondItemTopInner className="btn-group">
                            <CheckoutWrapperSecondItemTopInnerBtn type="radio" name="options" data-title="1" className={'btn'}>
                                Доставка
                            </CheckoutWrapperSecondItemTopInnerBtn>
                            {/* <CheckoutWrapperSecondItemTopInnerBtn type="radio" name="options" data-title="1" className={'btn'}>
                                Самовывоз
                            </CheckoutWrapperSecondItemTopInnerBtn> */}
                            {/* <CheckoutActiveBtn btn={'Доставка'} />
                            <CheckoutActiveBtn btn={'Самовывоз'} /> */}
                        </CheckoutWrapperSecondItemTopInner>
                    </CheckoutWrapperSecondItemTop>
                </CheckoutWrapperSecondItem>
            </CheckoutWrapper>
            <Footer />
        </>
    )
}