import {
  HomeMain,
  HomeTitle,
  MenuWrapper,
  MenuCardsBox,
  MenuCardsBoxCard,
  MenuDescriptionBox,
  MenuCardsBoxCardImg,
  MenuCardsBoxCardTitle,
  MenuDescriptionBoxBtn,
  MenuDescriptionBoxText,
  MenuDescriptionBoxTitle,
} from "./Home.component";
import { Contact } from "../../Components/Contact/Contact";
import NavLinkList from "../../Components/Navbar/NavLinkList";
import { HomeCards } from "../../Components/HomeCardsWrapper/HomeCards"; 
import MenuCardBestCHefs from "../../Assets/Images/MenuCardBestCHefs.svg";
import MenuCardImgNewProducts from "../../Assets/Images/MenuCardImgNewProducts.svg";

function Home() {

  return (
    <>
      <HomeMain>
        <HomeTitle>Доставка ВКУСНЕЙШИХ БЛЮд за 60 минут</HomeTitle>
      </HomeMain>
      <NavLinkList />
      <HomeCards data={"ХОЛОДНЫЕ ЗАКУСКИ"} />
      <HomeCards data={"ГОРЯЧИЕ ЗАКУСКИ"} />
      <HomeCards data={"Мясные блюда"} />
      <MenuWrapper>
        <MenuDescriptionBox>
          <MenuDescriptionBoxTitle>НАШЕ КАФЕ</MenuDescriptionBoxTitle>
          <MenuDescriptionBoxText>
            Мы расположены в одном из самых живописных мест города — на берегу
            реки, это ваш оазис в черте города, куда можно сбежать от шумного и
            пыльного мегаполиса. Мы, действительно уникальные, ведь все
            продумано до мелочей: проект построен из дикого закарпатского сруба,
            камин в основном зале ресторана и панорамные окна с видом на реку,
            уютные беседки на берегу реки и лучшая видовая террасса, шатер с
            посадкой на 200 человек, сказочный детский домик и бассейн.
          </MenuDescriptionBoxText>
          <MenuDescriptionBoxBtn>ПОСМОТРЕТЬ МЕНЮ</MenuDescriptionBoxBtn>
        </MenuDescriptionBox>
        <MenuCardsBox>
          <MenuCardsBoxCard>
            <MenuCardsBoxCardImg alt="menu-img" src={MenuCardImgNewProducts} />
            <MenuCardsBoxCardTitle>Свежайшие продукты</MenuCardsBoxCardTitle>
          </MenuCardsBoxCard>
          <MenuCardsBoxCard>
            <MenuCardsBoxCardImg src={MenuCardImgNewProducts} alt="menu-img" />
            <MenuCardsBoxCardTitle>Свежайшие продукты</MenuCardsBoxCardTitle>
          </MenuCardsBoxCard>
          <MenuCardsBoxCard>
            <MenuCardsBoxCardImg src={MenuCardBestCHefs} alt="menu-img" />
            <MenuCardsBoxCardTitle>Свежайшие продукты</MenuCardsBoxCardTitle>
          </MenuCardsBoxCard>
          <MenuCardsBoxCard>
            <MenuCardsBoxCardImg src={MenuCardBestCHefs} alt="menu-img" />
            <MenuCardsBoxCardTitle>Свежайшие продукты</MenuCardsBoxCardTitle>
          </MenuCardsBoxCard>
        </MenuCardsBox>
      </MenuWrapper>
      <Contact />
    </>
  )
}
export default Home
