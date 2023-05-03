import {
  CartAddWrapper,
  MainCartBottom,
  CartCardWrapper,
  MainCartContainer,
  MainCartBottomBtn,
  MainCartBottomLeft,
  CartAddWrapperInner,
  MainCartContainerTop,
  CartAddWrapperInnerLine,
  MainCartBottomLeftInner,
  MainCartBottomLeftInnerText,
  MainCartBottomLeftInnerValue,
  MainCartBottomLeftInnerTotalText,
  MainCartBottomLeftInnerTotalValue,
} from "./Cart.component";
import React from "react";
import { useSelector } from "react-redux";
import { CartAddData } from "../../Api/Data";
import { Link, useNavigate } from "react-router-dom";
import NavLinkList from "../../Components/Navbar/NavLinkList";
import { CartCard } from "../../Components/CartCards/CartCard";
import { Subtitle } from "../../Components/PublicSubtitle/Subtitle";
import { CartAdd } from "../../Components/CartAddComponent/CartAdd";
import { BackComponent } from "../../Components/BackButton/BackButton";

export default function CartProduct() {
  const navigate = useNavigate();
  let currentCart = useSelector((state) => state.cartReducer?.currentCart)
  React.useEffect(() => {
    if(currentCart?.length <= 0) {
      return navigate("/", { replace: true })
    }
  }, [currentCart])
  return (
    <>
      <NavLinkList />
      <MainCartContainer>
        <MainCartContainerTop>
          <BackComponent text="к выбору блюда" />
          <Subtitle title="КОРЗИНА" pL="0" cartLength={`в корзине ${currentCart?.length} товара`} />
        </MainCartContainerTop>
        <CartCardWrapper>
          {currentCart?.length > 0 && currentCart.map((item, index) => (
            <CartCard
              key={index}
              id={item.id}
              text={item.text}
              title={item.title}
            />
          ))}
        </CartCardWrapper>

        <CartAddWrapper>
        <Subtitle title="ДОБАВИТЬ К ЗАКАЗУ" pL="0" />
          <CartAddWrapperInner>
            {
              CartAddData?.map((item) => (
                <>
                  <CartAdd item={item} />
                  <CartAddWrapperInnerLine />
                </>
              ))
            }
          </CartAddWrapperInner>
        </CartAddWrapper>
        
        <MainCartBottom>
          <MainCartBottomLeft>
            <MainCartBottomLeftInner>
              <MainCartBottomLeftInnerTotalText>
                Итого:
              </MainCartBottomLeftInnerTotalText>
              <MainCartBottomLeftInnerTotalValue>
                500 ₽
              </MainCartBottomLeftInnerTotalValue>
            </MainCartBottomLeftInner>
            <MainCartBottomLeftInner>
              <MainCartBottomLeftInnerText>
                До бесплатной доставки не хватет:
              </MainCartBottomLeftInnerText>
              <MainCartBottomLeftInnerValue>100 ₽</MainCartBottomLeftInnerValue>
            </MainCartBottomLeftInner>
            <MainCartBottomLeftInner>
              <MainCartBottomLeftInnerText>
                Минимальная сума заказа:
              </MainCartBottomLeftInnerText>
              <MainCartBottomLeftInnerValue>
                1500 ₽
              </MainCartBottomLeftInnerValue>
            </MainCartBottomLeftInner>
          </MainCartBottomLeft>
          <Link to="/Checkout" className="link">
            <MainCartBottomBtn>Оформить заказ</MainCartBottomBtn>
          </Link>
        </MainCartBottom>
      </MainCartContainer>
    </>
  )
};
