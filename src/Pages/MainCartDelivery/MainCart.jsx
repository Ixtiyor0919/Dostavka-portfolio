import {
  CartAddWrapper,
  CartAddWrapperInner,
  CartAddWrapperInnerLine,
  CartAddWrapperLine,
  CartCardWrapper,
  MainCartBottom,
  MainCartBottomBtn,
  MainCartBottomLeft,
  MainCartBottomLeftInner,
  MainCartBottomLeftInnerText,
  MainCartBottomLeftInnerTotalText,
  MainCartBottomLeftInnerTotalValue,
  MainCartBottomLeftInnerValue,
  MainCartContainer,
  MainCartContainerTop,
  ModalIsEmpty,
  ModalIsEmptyImg,
  ModalIsEmptyWrapper,
  StockModalBtn,
  StockModalTitle,
} from "./MainCart.component";
import { Link } from "react-router-dom";
import { Subtitle } from "../../Components/Subtitle/Subtitle";
import NavLinkList from "../../Components/Navbar/NavLinkList";
import { CartCard } from "../../Components/CartCards/CartCard";
import CartStockImg from "../../Assets/Images/CartStockImg.png";
import { CartAdd } from "../../Components/CartAddComponent/CartAdd";
import { BackComponent } from "../../Components/BackButton/BackButton";

export function MainCart() {

  const CartData = [
    {
      id: 1,
      title:
        "sunt aut facere repellat",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet arichitecto",
    },
    {
      id: 2,
      title: "qui est esgse rerum",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciebndis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    // {
    //   id: 3,
    //   title: "ea molestias queasi exercitationem repellat qui ipsa sit aut",
    //   body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odiso et labore et velit aut",
    // },
    // {
    //     "id": 4,
    //     "title": "sunt jaut facere repellat provident occaecati excepturi optio reprehenderit",
    //     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sgunt rem eveniet architecto",
    // },
    // {
    //     "id": 5,
    //     "title": "qui est ersse",
    //     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reictiendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    // },
    // {
    //     "id": 6,
    //     "title": "ea molesutias quasi exercitationem repellat qui ipsa sit aut",
    //     "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius oddio et labore et velit aut",
    // },
    // {
    //     "id": 7,
    //     "title": "sunit aut facere repellat provident occaecati excepturi optio reprehenderit",
    //     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sgunt rem eveniet architecto",
    // },
    // {
    //     "id": 8,
    //     "title": "qui egst esse",
    //     "body": "est rerum tempore vitae\nsequi sinbt nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    // },
    // {
    //     "id": 9,
    //     "title": "ea mollestias quasi exercitationem repellat qui ipsa sit aut",
    //     "body": "et iusto sed quo iure\nvodluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    // },
    // {
    //     "id": 10,
    //     "title": "sunt aut faciere repellat provident occaecati excepturi optio reprehenderit",
    //     "body": "quia et suscipit\nsuscipit recusandahe consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    // },
    // {
    //     "id": 11,
    //     "title": "qui est essqe",
    //     "body": "est rerum tempore vitae\nsejqui sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    // },
    // {
    //     "id": 12,
    //     "title": "ea moklestias quasi exercitationmem repellat qui ipsa sit aut",
    //     "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    // },
  ]

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
          {CartData.map((item) => (
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
          <CartAddWrapperLine />
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

      <ModalIsEmptyWrapper>
      <ModalIsEmpty>
        <ModalIsEmptyImg src={CartStockImg} />
        <StockModalTitle>КОРЗИНА ПУСТАЯ</StockModalTitle>
        <StockModalBtn component={Link} to="/">Посмотреть меню</StockModalBtn>
      </ModalIsEmpty>
    </ModalIsEmptyWrapper>
    </>
  )
}
