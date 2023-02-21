import { NavbarContainerLineFirst } from "../../Components/Navbar/NavLink.component";
import NavLinkList from "../../Components/Navbar/NavLinkList";
import { Contact } from "../../Components/Contact/Contact";
import { ActionWrapper } from "./Action.component";
import {
  PagesContainerInnerTop,
  PagesContainerInnerTopLine,
  PagesContainerInnerTopTitle,
} from "../MainCartDelivery/MainCart.component";
import ActionCard from "../../Components/ActionCard/ActionCard";
import ActionImgFirst from "../../Assets/Images/ActionImgFirst.png";
import ActionImgSecond from "../../Assets/Images/ActionImgSecond.png";
import ActionImgThird from "../../Assets/Images/ActionImgThird.png";

function Action() {
  const ActionData = [
    {
      id: 1,
      title: "Без мяса? Здесь!",
      body: "Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный уп с ренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!",
      img: `${ActionImgFirst}`,
      data: "до 31 июля.",
    },
    {
      id: 2,
      title: "Выгодное комбо c напитками",
      body: "Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный уп с ренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!",
      img: `${ActionImgSecond}`,
      data: "до 31 июля.",
    },
    {
      id: 3,
      title: "Сырный бортик",
      body: "Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный уп с ренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!",
      img: `${ActionImgThird}`,
      data: "до 31 июля.",
    },
    {
      id: 4,
      title: "Выгодное комбо c напитками",
      body: "Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный уп с ренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!",
      img: `${ActionImgSecond}`,
      data: "до 31 июля.",
    },
    {
      id: 5,
      title: "Сырный бортик",
      body: "Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный уп с ренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!",
      img: `${ActionImgFirst}`,
      data: "до 31 июля.",
    },
    {
      id: 6,
      title: "Без мяса? Здесь!",
      body: "Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный уп с ренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!",
      img: `${ActionImgThird}`,
      data: "до 31 июля.",
    },
    {
      id: 7,
      title: "Сырный бортик",
      body: "Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный уп с ренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!",
      img: `${ActionImgThird}`,
      data: "до 31 июля.",
    },
    {
      id: 8,
      title: "Без мяса? Здесь!",
      body: "Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный уп с ренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!",
      img: `${ActionImgSecond}`,
      data: "до 31 июля.",
    },
    {
      id: 9,
      title: "Выгодное комбо c напитками",
      body: "Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный уп с ренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!",
      img: `${ActionImgFirst}`,
      data: "до 31 июля.",
    },
  ]

  return (
    <>
      <NavLinkList />
      <PagesContainerInnerTop>
        <PagesContainerInnerTopLine />
        <PagesContainerInnerTopTitle>АКЦИИ</PagesContainerInnerTopTitle>
      </PagesContainerInnerTop>
      <NavbarContainerLineFirst />
      <ActionWrapper>
        {ActionData.map((item) => (
          <ActionCard
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            description={item.body}
            data={item.data}
          />
        ))}
      </ActionWrapper>
      <Contact />
    </>
  )
}

export default Action
