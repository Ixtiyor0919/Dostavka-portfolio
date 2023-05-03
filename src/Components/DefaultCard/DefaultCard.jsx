import React from "react";
import {
  CardImg,
  HomeCard,
  HomeCardCart,
  HomeCardCost,
  HomeInnerBtn,
  ShoppingIcon,
  HomeCardCount,
  HomeInnerCard,
  HomeCardTitle,
  HomeCardWeight,
  HomeInnerBtnBox,
  HomeCardDescription,
} from "./DefaultCard.component";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import HomeCardImg from "../../Assets/Images/HomeCardImg.png";
import Loader from "../Loader";

export function HomeDefaultCard({ item }) {
  const dispatch = useDispatch();
  const { id, text, cost, title, weight } = item;
  const [counted, setCounted] = React.useState(false);
  const local = JSON.parse(localStorage.getItem(`${id}`));
  let { loading } = useSelector((state) => state.cartReducer);
  let [count, setCount] = React.useState(local !== null ? local : 0);

  const handleClickRemove = () => {
    if(count > 0) {
      setCount((count -= 1))
      localStorage.setItem(`${id}`, count)
    }
  };
  const handleClickAdd = () => {
    setCount((count += 1))
    localStorage.setItem(`${id}`, count)
  };
  const handleCard = () => {
    dispatch({ type: "SINGLE_START" });
    dispatch({ type: "SINGLE_SUCCESS", currentSingle: item })
  };
  const handleCartClick = () => {
    handleClickAdd()
    if(!local) {
      dispatch({ type: "CART_START" });
      dispatch({ type: "CART_SUCCESS", data: item })
    } 
  };
   React.useEffect(() => {
    if(local === 0) {
      dispatch({ type: "CART_START" });
      localStorage.removeItem(`${id}`)
      dispatch({ type: "CART_DELETE", id: id })
    }
  }, [local])
  React.useEffect(() => {
    if(loading) {
      return <Loader />
    };
  }, [loading])
  React.useEffect(() => {
    if(count > 0) {
      setCounted(true)
    } else {
      setCounted(false)
    }
  }, [count])
  return (
    <HomeCard onClick={handleCard} id={id}>
      <Link to="/single-product" className="link" style={{ display: "block" }}>
        <CardImg src={HomeCardImg} alt="HomeCardImage" />
        <HomeCardCount>{local ? local : 0}</HomeCardCount>
        <HomeInnerCard>
          <HomeCardTitle>{title}</HomeCardTitle>
          <HomeCardWeight>{weight}</HomeCardWeight>
          <HomeCardDescription>{text}</HomeCardDescription>
        </HomeInnerCard>
      </Link>
      <HomeInnerBtnBox counted={counted}>
        <HomeInnerBtn counted={counted} onClick={handleClickRemove}>
          <RemoveIcon sx={{ fontSize: "1.8rem" }} />
        </HomeInnerBtn>
        <HomeCardCost>{cost}</HomeCardCost>
        <HomeCardCart counted={counted} onClick={handleCartClick}>
          В корзину
          <ShoppingIcon />
        </HomeCardCart>
        <HomeInnerBtn counted={counted} onClick={handleClickAdd}>
          <AddIcon sx={{ fontSize: "1.8rem" }} />
        </HomeInnerBtn>
      </HomeInnerBtnBox>
    </HomeCard>
  )
};
