import { Link, useNavigate } from "react-router-dom"
import { CartAdd } from "../../Components/CartAddComponent/CartAdd"
import { CartCard } from "../../Components/CartCards/CartCard"
import { Footer } from "../../Components/Footer/Footer"
import { Header } from "../../Components/Header/Header"
import { NavbarContainerLineFirst } from "../../Components/Navbar/NavLink.component"
import NavLinkList from "../../Components/Navbar/NavLinkList"
import {
  CartAddWrapper,
  CartAddWrapperInner,
  CartAddWrapperInnerLine,
  CartAddWrapperLine,
  CartAddWrapperTitle,
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
  MainCartContainerInnerTopText,
  MainCartContainerTop,
  MainCartPagesLink,
  MainCartPagesLinkBox,
  PagesContainerInnerTop,
  PagesContainerInnerTopLine,
  PagesContainerInnerTopTitle,
} from "./MainCart.component"

export function MainCart() {
  const navigate = useNavigate()

  const CartData = [
    {
      id: 1,
      title:
        "sunt aut facere repellat provhident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet arichitecto",
    },
    {
      id: 2,
      title: "qui est esgse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciebndis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      id: 3,
      title: "ea molestias queasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odiso et labore et velit aut",
    },
    {
        "id": 4,
        "title": "sunt jaut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sgunt rem eveniet architecto",
    },
    {
        "id": 5,
        "title": "qui est ersse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reictiendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
        "id": 6,
        "title": "ea molesutias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius oddio et labore et velit aut",
    },
    {
        "id": 7,
        "title": "sunit aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sgunt rem eveniet architecto",
    },
    {
        "id": 8,
        "title": "qui egst esse",
        "body": "est rerum tempore vitae\nsequi sinbt nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
        "id": 9,
        "title": "ea mollestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvodluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
    {
        "id": 10,
        "title": "sunt aut faciere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandahe consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
        "id": 11,
        "title": "qui est essqe",
        "body": "est rerum tempore vitae\nsejqui sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
        "id": 12,
        "title": "ea moklestias quasi exercitationmem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
  ]

  localStorage.setItem("CartLength", CartData.length)

  return (
    <>
      <Header />
      <NavbarContainerLineFirst />
      <NavLinkList />
      <MainCartContainer>
        <MainCartContainerTop>
          <MainCartPagesLinkBox onClick={() => navigate(-1)}>
            <i
              class="bx bx-chevron-left"
              style={{
                width: "26px",
                height: "26px",
                color: "#fff",
                fontSize: "30px",
                marginLeft: "5px",
              }}
            ></i>
            <MainCartPagesLink>к выбору блюда</MainCartPagesLink>
          </MainCartPagesLinkBox>
          <PagesContainerInnerTop style={{ padding: "unset" }}>
            <PagesContainerInnerTopLine />
            <PagesContainerInnerTopTitle>КОРЗИНА</PagesContainerInnerTopTitle>
            <MainCartContainerInnerTopText>
              (в корзине {CartData.length} товара)
            </MainCartContainerInnerTopText>
          </PagesContainerInnerTop>
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
          <CartAddWrapperTitle>ДОБАВИТЬ К ЗАКАЗУ</CartAddWrapperTitle>
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
        <MainCartBottom style={{ width: "76%" }}>
          <MainCartBottomLeft>
            <MainCartBottomLeftInner>
              <MainCartBottomLeftInnerTotalText>
                Итого:
              </MainCartBottomLeftInnerTotalText>
              <MainCartBottomLeftInnerTotalValue>
                500 ₽
              </MainCartBottomLeftInnerTotalValue>
            </MainCartBottomLeftInner>
            <MainCartBottomLeftInner style={{ margin: "5px 0 10px 0" }}>
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
      <Footer />
    </>
  )
}
