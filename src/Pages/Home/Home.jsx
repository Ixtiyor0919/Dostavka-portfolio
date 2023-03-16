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
import { Loader } from "../../Components/Loader/Loader";
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
  let { category, loading } = useSelector((state) => state.categoryReducer);
  
  React.useEffect(() => {
    const filtered = HomeCardData?.filter((item) => item.category === category);
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
    // if (category === "Cold-snacks") {
    //   setColdSnacks(filtered)
    //   setHotAppetizers([])
    //   setMeatDishes([])
    //   setSoups([])
    //   setFishDishes([])
    //   setGrillMenu([])
    //   setSpecialties([])
    //   setBeverages([])
    // }
    // if (category === "Hot-appetizers") {
    //   setHotAppetizers(filtered)
    // }
    // if (category === "Meat-dishes") {
    //   setMeatDishes(filtered)
    // }
    // if (category === "Soups") {
    //   setSoups(filtered)
    // }
    // if (category === "Fish-dishes") {
    //   setFishDishes(filtered)
    // }
    // if (category === "Grill-menu") {
    //   setGrillMenu(filtered)
    // }
    // if (category === "Specialties") {
    //   setSpecialties(filtered)
    // }
    // if (category === "Beverages") {
    //   setBeverages(filtered)
    // }
  }, []);
  React.useEffect(() => {
    if(loading) {
      return <Loader />
    };
  }, [loading])
  return (
    <>
      <HomeMain>
        <HomeTitle>Доставка ВКУСНЕЙШИХ БЛЮд за 60 минут</HomeTitle>
      </HomeMain>
      <NavLinkList />
      {/* {coldSnacks?.length > 0 && ( */}
        <HomeCards id="Cold-snacks" title="coldSnacks" data={coldSnacks} />
      {/* )} */}
      {/* {hotAppetizers?.length > 0 && ( */}
        <HomeCards id="Hot-appetizers" title="hotAppetizers" data={hotAppetizers} />
      {/* )} */}
      {/* {meatDishes?.length > 0 && ( */}
        <HomeCards id="Meat-dishes" title="meatDishes" data={meatDishes} />
      {/* )} */}
      {/* {/* {soups?.length > 0 &&  */}
        <HomeCards id="Soups" title="soups" data={soups} />
        {/* //  */}
      {/* {fishDishes?.length > 0 && ( */}
        <HomeCards id="Fish-dishes" title="fishDishes" data={fishDishes} />
      {/* )} */}
      {/* {grillMenu?.length > 0 && ( */}
        <HomeCards id="Grill-menu" title="grillMenu" data={grillMenu} />
      {/* )} */}
      {/* {specialties?.length > 0 && ( */}
        <HomeCards id="Specialties" title="specialties" data={specialties} />
      {/* )} */}
      {/* {beverages?.length > 0 && ( */}
        <HomeCards id="Beverages" title="beverages" data={beverages} />
      {/* )} */}
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
