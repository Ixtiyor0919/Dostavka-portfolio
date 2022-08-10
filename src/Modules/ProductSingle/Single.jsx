import { Link } from "react-router-dom";
import { Contact } from "../../Components/Contact/Contact";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { HomeCards } from "../../Components/HomeCardsWrapper/HomeCards";
import { SinglePagesLink, SinglePagesLinkBox, SingleProducctData, SingleProduct, SingleProductCartBox, SingleProductCartBtn, SingleProductCartBtnBox, SingleProductCartLine, SingleProductContentNames, SingleProductContentValues, SingleProductCount, SingleProductDescription, SingleProductImg, SingleProductInnerLine, SingleProductInnerNamesBox, SingleProductInnerNamesBoxInner, SingleProductInnerTop, SingleProductTitle, SingleProductWeightMain } from "./Single.component";
import SingleImg from "../../Assets/Images/SingleImg.png";
import { NavLinkList } from "../../Components/Navbar/NavLinkList";

export function Single() { 

    return (
        <>
            <Header />
            <NavLinkList />
            <SingleProduct>
                <Link to='/' className='link'>
                    <SinglePagesLinkBox>
                        <i class='bx bx-chevron-left' style={{
                            width: '26px',
                            height: '26px',
                            background: 'linear-gradient(114.93deg, #618967 5.11%, #72A479 94%',
                            color: '#fff',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '25px'}}></i>
                        <SinglePagesLink>
                            Вернуться назад
                        </SinglePagesLink>
                    </SinglePagesLinkBox>
                </Link>
                <SingleProducctData>
                    <SingleProductImg src={SingleImg} alt='singl-product' width={600} height={400   } />
                    <SingleProductInnerTop>
                        <SingleProductTitle>
                            Ягненок
                        </SingleProductTitle>
                        <SingleProductDescription>
                            помидор, сыр фета, масло подсолнечное, капуста пекинская, 
                            перец сладкий красный, огурцы, оливки без косточек
                        </SingleProductDescription>
                        <SingleProductWeightMain>
                            Вес: 210 г
                        </SingleProductWeightMain>
                        <SingleProductCartBox>
                            <Link to='/MainCart' className="link">
                                <SingleProductCartBtnBox>
                                    <SingleProductCartBtn>
                                        Корзина
                                    </SingleProductCartBtn>
                                    <SingleProductCartLine />
                                    <i class='bx bx-shopping-bag' style={{color:'#ffffff', backgroundColor: 'transparent', fontSize: '25px'}}></i>
                                </SingleProductCartBtnBox>
                            </Link>
                            <SingleProductCount>
                                259 ₽
                            </SingleProductCount>
                        </SingleProductCartBox>
                        <SingleProductInnerNamesBox>
                            <SingleProductInnerNamesBoxInner>
                                <SingleProductContentNames>
                                    Белки
                                </SingleProductContentNames>
                                <SingleProductContentValues>
                                    17.23
                                </SingleProductContentValues>
                            </SingleProductInnerNamesBoxInner>
                            <SingleProductInnerNamesBoxInner>
                                <SingleProductContentNames>
                                    Жиры
                                </SingleProductContentNames>
                                <SingleProductContentValues>
                                    7.63
                                </SingleProductContentValues>
                            </SingleProductInnerNamesBoxInner>
                            <SingleProductInnerNamesBoxInner>
                                <SingleProductContentNames>
                                    Углеводы
                                </SingleProductContentNames>
                                <SingleProductContentValues>
                                    22.35
                                </SingleProductContentValues>
                            </SingleProductInnerNamesBoxInner>
                            <SingleProductInnerNamesBoxInner>
                                <SingleProductContentNames>
                                    Ккал
                                </SingleProductContentNames>
                                <SingleProductContentValues>
                                    234
                                </SingleProductContentValues>
                            </SingleProductInnerNamesBoxInner>
                            <SingleProductInnerNamesBoxInner>
                                <SingleProductContentNames>
                                    Вес
                                </SingleProductContentNames>
                                <SingleProductContentValues>
                                    210 г
                                </SingleProductContentValues>
                            </SingleProductInnerNamesBoxInner>
                        </SingleProductInnerNamesBox>
                        <SingleProductInnerLine />
                    </SingleProductInnerTop>
                </SingleProducctData>
            </SingleProduct>
            <HomeCards data={'С ЭТИМ ТОВАРОМ ПОКУПАЮТ'} />
            <Contact />
            <Footer />
        </>
    )
}