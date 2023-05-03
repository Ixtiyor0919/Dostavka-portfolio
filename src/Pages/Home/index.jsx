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
import React from "react";
// import { v4 as uuidv4 } from 'uuid';
import { useSelector } from "react-redux";
import { HomeCardData } from "../../Api/Data";
import { Contact } from "../../Components/Contact/Contact";
import NavLinkList from "../../Components/Navbar/NavLinkList";
import { HomeCards } from "../../Components/HomeCardsWrapper/HomeCards";
import MenuCardBestCHefs from "../../Assets/Images/MenuCardBestCHefs.svg";
import MenuCardImgNewProducts from "../../Assets/Images/MenuCardImgNewProducts.svg";

function Home() {
  const [coldSnacks, setColdSnacks] = React.useState([]);
  const [hotAppetizers, setHotAppetizers] = React.useState([]);
  const [meatDishes, setMeatDishes] = React.useState([]);
  const [soups, setSoups] = React.useState([]);
  const [fishDishes, setFishDishes] = React.useState([]);
  const [grillMenu, setGrillMenu] = React.useState([]);
  const [specialties, setSpecialties] = React.useState([]);
  const [beverages, setBeverages] = React.useState([]);

  let { loading } = useSelector((state) => state.categoryReducer);
  React.useEffect(() => {
    const coldSnacksFiltered = HomeCardData?.filter(
      (item) => item.category === "Cold-snacks"
    )
    const hotAppetizersFiltered = HomeCardData?.filter(
      (item) => item.category === "Hot-appetizers"
    )
    const meatDishesFiltered = HomeCardData?.filter(
      (item) => item.category === "Meat-dishes"
    )
    const soupsFiltered = HomeCardData?.filter(
      (item) => item.category === "Soups"
    )
    const fishDishesFiltered = HomeCardData?.filter(
      (item) => item.category === "Fish-dishes"
    )
    const grillMenuFiltered = HomeCardData?.filter(
      (item) => item.category === "Grill-menu"
    )
    const specialtiesFiltered = HomeCardData?.filter(
      (item) => item.category === "Specialties"
    )
    const beveragesFiltered = HomeCardData?.filter(
      (item) => item.category === "Beverages"
    )
    setColdSnacks(coldSnacksFiltered)
    setHotAppetizers(hotAppetizersFiltered)
    setMeatDishes(meatDishesFiltered)
    setSoups(soupsFiltered)
    setFishDishes(fishDishesFiltered)
    setGrillMenu(grillMenuFiltered)
    setSpecialties(specialtiesFiltered)
    setBeverages(beveragesFiltered)
  }, [])
  // React.useEffect(() => {
  //   if (loading) {
  //     return <Loader />
  //   }
  // }, [loading])
  return (
    <>
      <HomeMain>
        <HomeTitle>Доставка ВКУСНЕЙШИХ БЛЮд за 60 минут</HomeTitle>
      </HomeMain>
      <NavLinkList />
      <HomeCards id="Cold-snacks" title="coldSnacks" data={coldSnacks} />
      <HomeCards
        id="Hot-appetizers"
        title="hotAppetizers"
        data={hotAppetizers}
      />
      <HomeCards id="Meat-dishes" title="meatDishes" data={meatDishes} />
      <HomeCards id="Soups" title="soups" data={soups} />
      <HomeCards id="Fish-dishes" title="fishDishes" data={fishDishes} />
      <HomeCards id="Grill-menu" title="grillMenu" data={grillMenu} />
      <HomeCards id="Specialties" title="specialties" data={specialties} />
      <HomeCards id="Beverages" title="beverages" data={beverages} />
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
export default Home;
