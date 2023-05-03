import {
  CartAddCard,
  CartAddData,
  CartAddCardImg,
  CartAddCardCost,
  CartAddCardText,
  CartAddCardInner,
  CartAddCardTitle,
  CartAddDataBottom,
} from "./CartAdd.component";
import React from "react";
import { useDispatch } from "react-redux";
import { Icons } from "../CartIcons/Icons";
import AddIcon from "@mui/icons-material/Add";
import { useMediaQuery, useTheme } from "@mui/material";
import HomeCardImg from "../../Assets/Images/HomeCardImg.png";

export function CartAdd({ item }) {
  const theme = useTheme();
  const { id, title, cost } = item;
  const dispatch = useDispatch();
  const local = JSON.parse(localStorage.getItem(`${id}`));
  let [count, setCount] = React.useState(local !== null ? local : 0);
  const matchDownMD = useMediaQuery(theme.breakpoints.down("md"))
  const handleClickAdd = () => {
    setCount((count += 1))
    localStorage.setItem(`${id}`, count)
  };
  const handleAdd = () => {
    if(!local) {
      dispatch({ type: "CART_START" });
      handleClickAdd()
      dispatch({ type: "CART_SUCCESS", data: item })
    }
  }
  return (
    <CartAddCard>
      <CartAddCardImg src={HomeCardImg} />
      <CartAddData>
        <CartAddCardTitle>{title}</CartAddCardTitle>
        <CartAddDataBottom>
          <CartAddCardInner>
            <CartAddCardText>Добавить</CartAddCardText>
            <Icons
              Icon={AddIcon}
              onClick={handleAdd}
              size={!matchDownMD ? 18 : 16}
              width={!matchDownMD ? 26 : 20}
              height={!matchDownMD ? 26 : 20}
            />
          </CartAddCardInner>
          <CartAddCardCost>{cost}</CartAddCardCost>
        </CartAddDataBottom>
      </CartAddData>
    </CartAddCard>
  )
};