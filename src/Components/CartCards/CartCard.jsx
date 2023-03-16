import {
  BoxData,
  CartCardValue,
  CartButtonsBox,
  CartCarCostBox,
  CartCardValueBox,
  CartCardWrapperInner,
  CartCardDescriptionBox,
  CartCardWrapperInnerImg,
  CartCardDescriptionBoxText,
  CartCardDescriptionBoxTitle,
} from "./CartCard.component";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icons } from "../CartIcons/Icons";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import RemoveIcon from "@mui/icons-material/Remove";
import { useMediaQuery, useTheme } from "@mui/material";
import HomeCardImg from "../../Assets/Images/HomeCardImg.png";
import { GradientLine } from "../HomeCardsWrapper/HomeCards.component";
import { CartAddWrapperInnerLine } from "../../Pages/Cart/Cart.component";
import { Loader } from "../Loader/Loader";

export function CartCard(props) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { id, title, text } = props;
  const local = JSON.parse(localStorage.getItem(`${id}`));
  let [count, setCount] = React.useState(local !== null ? local : 0);
  const matchDownMD = useMediaQuery(theme.breakpoints.down("md"));
  let { loading } = useSelector((state) => state.cartReducer);

  const handleRemove = () => {
    if(count > 0) {
      setCount((count -= 1))
      localStorage.setItem(`${id}`, count)
    }
  };
  const handleAdd = () => {
    setCount((count += 1))
    localStorage.setItem(`${id}`, JSON.stringify(count))
  };
  const handleDelete = () => {
    dispatch({ type: "CART_START" });
    localStorage.removeItem(`${id}`)
    dispatch({ type: "CART_DELETE", id: id })
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
      console.log("loading")
      return <Loader />
    };
  }, [loading])
  return (
    <>
      <CartCardWrapperInner>
        <CartCardWrapperInnerImg src={HomeCardImg} />
        <BoxData>
          <CartCardDescriptionBox>
            <CartCardDescriptionBoxTitle>{title}</CartCardDescriptionBoxTitle>
            <CartCardDescriptionBoxText>{text}</CartCardDescriptionBoxText>
          </CartCardDescriptionBox>
          <CartButtonsBox>
            <CartCardValueBox>
              <Icons
                Icon={RemoveIcon}
                width={!matchDownMD ? 30 : 22}
                height={!matchDownMD ? 30 : 22}
                size={!matchDownMD ? 20 : 18}
                onClick={handleRemove}
              />
              <CartCardValue>
                {local ? local : 0}
              </CartCardValue>
              <Icons
                Icon={AddIcon}
                width={!matchDownMD ? 30 : 22}
                height={!matchDownMD ? 30 : 22}
                size={!matchDownMD ? 20 : 18}
                onClick={handleAdd}
              />
            </CartCardValueBox>
            <CartCarCostBox>
              <CartCardValue>1640 ₽</CartCardValue>
              <Icons
                Icon={ClearIcon}
                width={!matchDownMD ? 30 : 22}
                height={!matchDownMD ? 30 : 22}
                size={!matchDownMD ? 20 : 16}
                onClick={handleDelete}
              />
            </CartCarCostBox>
          </CartButtonsBox>
        </BoxData>
      </CartCardWrapperInner>
      <GradientLine />
    </>
  )
};
