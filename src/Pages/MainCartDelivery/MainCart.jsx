import {
  CartAddWrapper,
  CartCardWrapper,
  MainCartBottom,
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
} from "./MainCart.component";
import { Link } from "react-router-dom";
import { Subtitle } from "../../Components/PublicSubtitle/Subtitle";
import NavLinkList from "../../Components/Navbar/NavLinkList";
import { CartCard } from "../../Components/CartCards/CartCard";
// import CartStockImg from "../../Assets/Images/CartStockImg.png";
import { CartAdd } from "../../Components/CartAddComponent/CartAdd";
import { BackComponent } from "../../Components/BackButton/BackButton";
import { CartData } from "../../Api/Data";

export function MainCart() {

  localStorage.setItem("CartLength", CartData.length)

  return (
    <>
      <NavLinkList />
      <MainCartContainer>
        <MainCartContainerTop>
          <BackComponent text="к выбору блюда" />
          <Subtitle title="КОРЗИНА" pL="0" textLength={`в корзине ${CartData.length} товара`} />
        </MainCartContainerTop>
        <CartCardWrapper>
          {CartData?.map((item) => (
            <CartCard
              key={item.id}
              id={item.id}
              title={item.title}
              body={item.body}
              CartData={CartData}
            />
          ))}
        </CartCardWrapper>

        <CartAddWrapper>
        <Subtitle title="ДОБАВИТЬ К ЗАКАЗУ" pL="0" />
          <CartAddWrapperInner>
            <CartAdd title={"КВАС АНАНАСОВЫЙ"} />
            <CartAddWrapperInnerLine />
            <CartAdd title={"ГРИСССИНИ"} />
            <CartAddWrapperInnerLine />
            <CartAdd title={"ПИЦЦА ПЕППЕРОНИ"} />
            <CartAddWrapperInnerLine />
            <CartAdd title={"КВАС АНАНАСОВЫЙ"} />
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
}
